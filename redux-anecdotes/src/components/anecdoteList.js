import { useSelector, useDispatch } from "react-redux";
import { voteAnecdote } from "../reducers/anecdoteReducer";
import { setTimedNotification } from "../reducers/notificationReducer";

const AnecdoteList = () => {
  const anecdotes = useSelector((state) => state.anecdotes);
  const filterBy = useSelector((state) => state.filter);

  const dispatch = useDispatch();

  const vote = async (anecdote) => {
    const { content } = anecdote;
    dispatch(voteAnecdote(anecdote));
    dispatch(setTimedNotification(content));
  };
  return (
    <>
      {anecdotes
        .slice()
        .filter((anecdote) => {
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
