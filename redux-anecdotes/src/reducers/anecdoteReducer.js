import { createSlice } from "@reduxjs/toolkit";
import anecdoteService from "../services/anecdotes";

const getId = () => (100000 * Math.random()).toFixed(0);

const initialState = [];

const anecdoteSlice = createSlice({
  name: "anecdotes",
  initialState,
  reducers: {
    voteAnecdote(state, action) {
      const id = action.payload;
      const votedAnecdote = state.find((a) => a.id === id);
      const cangedAnectode = {
        ...votedAnecdote,
        votes: votedAnecdote.votes + 1,
      };
      return state.map((anecdote) =>
        anecdote.id !== cangedAnectode.id ? anecdote : cangedAnectode
      );
    },
    appendAnecdote(state, action) {
      state.push(action.payload);
    },
    setAnecdotes(state, action) {
      return action.payload;
    },
  },
});

export const { voteAnecdote, appendAnecdote, setAnecdotes } =
  anecdoteSlice.actions;

export const initializeAnecdotes = () => {
  return async (dispatch) => {
    const anecdotes = await anecdoteService.getAll();
    dispatch(setAnecdotes(anecdotes));
  };
};

export const addNewAnecdote = (content) => {
  return async (dispatch) => {
    const newAnecdote = await anecdoteService.addAnecdote({
      content,
      votes: 0,
    });
    dispatch(appendAnecdote(newAnecdote));
  };
};
export default anecdoteSlice.reducer;
