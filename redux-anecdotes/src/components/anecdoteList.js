import { useSelector, useDispatch } from "react-redux";
import { voteAnecdote } from "../reducers/anecdoteReducer";
import { notify, removeNotification } from "../reducers/notificationReducer";

const AnecdoteList = () => {
  const anecdotes = useSelector((state) => state.anecdotes);
  const filterBy = useSelector((state) => state.filter);

  const dispatch = useDispatch();

  const vote = async ({ id, content }) => {
    console.log("vote", id);
    dispatch(voteAnecdote(id));
    dispatch(notify(content));
    setTimeout(() => {
      dispatch(removeNotification(content));
    }, 5000);
  };
  return (
    <>
      {console.log("anecdotes", anecdotes)}
      {anecdotes
        .slice()
        .filter((anecdote) => {
          console.log(filterBy, anecdote.content);
          return filterBy !== null ? anecdote.content.includes(filterBy) : true;
        })
        .sort((a, b) => b.votes - a.votes)
        .map((anecdote) => (
          <div key={anecdote.id}>
            <div>{anecdote.content}</div>
            <div>
              has {anecdote.votes}
              <button onClick={() => vote(anecdote)}>vote</button>
            </div>
          </div>
        ))}
    </>
  );
};

export default AnecdoteList;
