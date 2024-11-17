import { useDispatch } from "react-redux";
import { newAnecdote } from "../reducers/anecdoteReducer";
import {setNotificationWithTimeout} from '../reducers/notificationReducer'

const AnecdoteForm = () => {
  const dispatch = useDispatch();
  const addAnecdote = async (event) => {
    event.preventDefault();
    const content = event.target.anecdote.value;
    event.target.anecdote.value = "";
    dispatch(newAnecdote(content));
    dispatch(setNotificationWithTimeout('Has creado una anecdota correctamente', 3))
  };
  return (
    <div>
      <form onSubmit={addAnecdote}>
        <div>
          <input name="anecdote" />
        </div>
        <button type="submit">create</button>
      </form>
    </div>
  );
};

export default AnecdoteForm;
