import { createSlice } from "@reduxjs/toolkit";
import anecdoteService from '../services/anecdotes'

const anecdoteSlice = createSlice({
  name: "anecdote",
  initialState: [],
  reducers: {
    voteAnecdote(state, action) {
      const updateAnecdote = action.payload;
      const anecdoteVote = state.map((anecdote) =>
        anecdote.id === updateAnecdote.id
          ? updateAnecdote
          : anecdote
      )
      return [...anecdoteVote].sort((a, b) => b.votes - a.votes)
    },
    appendAnecdote(state, action) {
      state.push(action.payload);
      state.sort((a,b) => b.votes - a.votes)
    },
    setAnecdotes(state, action) {
      return action.payload.sort((a,b) => b.votes - a.votes)
    }
  },
});

export const initializeAnecdotes = () => {
  return async dispatch => {
    const anecdotes = await anecdoteService.getAll()
    dispatch(setAnecdotes(anecdotes))
  }
}

export const newAnecdote = content => {
  return async dispatch => {
    const createAnecdote = await anecdoteService.createNew(content)
    dispatch (appendAnecdote(createAnecdote))
  }
}

export const voteAnecdoteAsync = id => {
  return async (dispatch) => {
    const updateAnecdote = await anecdoteService.voteOfAnecdotes(id)

    dispatch(voteAnecdote(updateAnecdote))
  }
}
export const {voteAnecdote, appendAnecdote, setAnecdotes} = anecdoteSlice.actions

export default anecdoteSlice.reducer;
