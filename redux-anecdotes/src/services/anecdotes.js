import axios from "axios";

const baseURL = "http://localhost:3001/anecdotes";

const getAll = async () => {
  const response = await axios.get(baseURL);
  return response.data;
};

const addAnecdote = async (anecdote) => {
  const response = await axios.post(baseURL, anecdote);
  return response.data;
};

const voteAnecdote = async (anecdote) => {
  const { id, votes } = anecdote;
  const response = await axios.put(baseURL + `/${id}`, {
    ...anecdote,
    votes: votes + 1,
  });
  return response;
};

const anecdoteService = { getAll, addAnecdote, voteAnecdote };
export default anecdoteService;
