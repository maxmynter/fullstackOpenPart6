import { useDispatch } from "react-redux";

import { addNewAnecdote } from "../reducers/anecdoteReducer";

const AddNewAnecdotes = () => {
  const dispatch = useDispatch();
  const addAnecdote = (event) => {
    event.preventDefault();
    dispatch(addNewAnecdote(event.target.anecdote.value));
    event.target.reset();
  };
  return (
    <>
      <h2>create new</h2>
      <form onSubmit={addAnecdote}>
        <div>
          <input name="anecdote" />
        </div>
        <button type="submit">create</button>
      </form>
    </>
  );
};

export default AddNewAnecdotes;
