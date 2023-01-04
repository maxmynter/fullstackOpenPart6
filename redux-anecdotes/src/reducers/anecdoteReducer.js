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
    addNewAnecdote(state, action) {
      anecdoteService.addAnecdote({ content: action.payload, votes: 0 });
      return state.concat({
        id: getId(),
        content: action.payload,
        votes: 0,
      });
    },
    setAnecdotes(state, action) {
      return action.payload;
    },
  },
});

export const { voteAnecdote, addNewAnecdote, setAnecdotes } =
  anecdoteSlice.actions;
export default anecdoteSlice.reducer;
