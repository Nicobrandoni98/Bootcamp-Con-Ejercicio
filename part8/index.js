const { ApolloServer } = require("@apollo/server");
const { startStandaloneServer } = require("@apollo/server/standalone");
const { gql } = require("graphql-tag");
const { GraphQLError } = require("graphql");
const jwt = require("jsonwebtoken");

const mongoose = require("mongoose");
mongoose.set("strictQuery", false);
const Author = require("./models/author");
const Book = require("./models/book.js");
const User = require("./models/user.js");

require("dotenv").config();

const MONGODB_URI = process.env.MONGODB_URI;

console.log("connecting to", MONGODB_URI);

mongoose
  .connect(MONGODB_URI)
  .then(() => {
    console.log("connected to MongoDB");
  })
  .catch((error) => {
    console.log("error connection to MongoDB:", error.message);
  });

const typeDefs = gql`
  type User {
    username: String!
    favoriteGenre: String!
    id: ID!
  }

  type Token {
    value: String!
  }

  type Book {
    title: String!
    published: Int!
    author: Author!
    genres: [String!]!
    id: ID!
  }

  type Author {
    name: String!
    bookCount: Int!
    born: Int
  }

  type Query {
    bookCount: Int
    authorCount: Int
    allBooks(author: String, genres: String): [Book!]!
    allAuthor: [Author!]!
    me: User
  }

  type Mutation {
    addBook(
      title: String!
      author: String!
      published: Int!
      genres: [String!]!
    ): Book
    editAuthor(name: String!, born: String): Author
    createUser(username: String!, favoriteGenre: String!): User
    login(username: String!, password: String!): Token
  }
`;

const getCurrentUser = (token) => {
  if (!token) return null;

  try {
    const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
    return decodedToken; // Devuelve el usuario decodificado
  } catch (error) {
    return null; // Si el token no es válido, retorna null
  }
};

const resolvers = {
  Query: {
    bookCount: async () => Book.collection.countDocuments(),
    authorCount: () => Author.collection.countDocuments(),
    allBooks: async (root, args) => {
      return Book.find({});
    },
    allAuthor: async () => {
      return Author.find({});
    },
    me: async (root, args, context) => {
      if (!context.currentUser) {
        throw new GraphQLError("No autenticado", {
          extensions: {
            code: "UNAUTHENTICATED",
          },
        });
      }
      return context.currentUser;
    },
  },
  Author: {
    bookCount: async (author) => {
      const books = await Book.find({ author: author._id });
      return books.length;
    },
  },
  Mutation: {
    addBook: async (root, args) => {
      if (args.author.length < 5) {
        throw new GraphQLError(
          "El nombre del autor debe tener al menos 5 caracteres"
        );
      }

      let author;

      try {
        author = await Author.findOne({ name: args.author });

        if (!author) {
          author = new Author({ name: args.author });
          await author.save();
        }
      } catch (error) {
        if (error.name === "ValidationError") {
          throw new GraphQLError(
            "El nombre del autor debe tener al menos 5 caracteres",
            {
              extensions: {
                code: "BAD_USER_INPUT",
              },
            }
          );
        }
        throw error;
      }
      if (args.title.length < 5) {
        throw new GraphQLError(
          "El título del libro debe tener al menos 5 caracteres"
        );
      }

      const book = new Book({
        ...args,
        author: author._id,
      });

      await book.save();

      return {
        ...book._doc,
        author: author,
      };
    },
    editAuthor: async (root, args) => {
      const author = await Author.findOne({ name: args.name });

      author.born = args.born;
      return author.save();
    },

    createUser: async (root, args) => {
      const { username, favoriteGenre } = args;

      if (!favoriteGenre) {
        throw new GraphQLError("favoriteGenre es obligatorio", {
          extensions: {
            code: "BAD_USER_INPUT",
          },
        });
      }

      const user = new User({ username, favoriteGenre});

      return user.save().catch((error) => {
        throw new GraphQLError("Creating the user failed", {
          extensions: {
            code: "BAD_USER_INPUT",
            invalidArgs: args.name,
            error,
          },
        });
      });
    },

    login: async (root, args) => {
      const user = await User.findOne({ username: args.username });

      if (!user || args.password !== "secret") {
        throw new GraphQLError("wrong credentials", {
          extensions: {
            code: "BAD_USER_INPUT",
          },
        });
      }

      const userForToken = {
        username: user.username,
        id: user._id,
      };

      return { value: jwt.sign(userForToken, process.env.JWT_SECRET) };
    },
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

startStandaloneServer(server, {
  listen: { port: 4000 },
  context: async ({ req }) => {
    const auth = req ? req.headers.authorization : null;
    if (auth && auth.startsWith("Bearer ")) {
      const decodedToken = jwt.verify(
        auth.substring(7),
        process.env.JWT_SECRET
      );
      const currentUser = await User.findById(decodedToken.id);
      return { currentUser };
    }
  },
}).then(({ url }) => {
  console.log(`Server ready at ${url}`);
});
