import { useSelector, useDispatch } from "react-redux";
import { voteAnecdoteAsync } from "../reducers/anecdoteReducer";
import {
  setNotificationWithTimeout
} from "../reducers/notificationReducer";

const AnecdoteList = () => {
  const anecdotes = useSelector((state) => state.anecdote);
  const dispatch = useDispatch();
  const filter = useSelector((state) => state.filter || "");

  const filteredAnecdotes = anecdotes.filter((anecdote) =>
    anecdote.content.toLowerCase().includes(filter.toLowerCase()),
  );

  return (
    <div>
      {filteredAnecdotes.map((anecdote) => (
        <div key={anecdote.id}>
          <div>{anecdote.content}</div>
          <div>
            has {anecdote.votes} votes
            <button
              onClick={() => {
                dispatch(voteAnecdoteAsync(anecdote.id));
                dispatch(setNotificationWithTimeout(`Has votado por ${anecdote.content}`, 3));
              }}
            >
              vote
            </button>
          </div>
        </div>
      ))}
      <h2>create new</h2>
    </div>
  );
};

export default AnecdoteList;
