import AnecdoteForm from "./components/AnecdoteForm.jsx";
import AnecdoteList from "./components/AnecdoteList.jsx";
import FilterAnecdote from "./components/FilterAnecdote.jsx";
import Notification from "./components/Notification.jsx";
import { useEffect } from "react";
import { initializeAnecdotes } from "./reducers/anecdoteReducer.js";
import { useDispatch } from "react-redux";
const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(initializeAnecdotes())
  }, [dispatch]);
  return (
    <div>
      <h2>Anecdotes</h2>
      <Notification />
      <FilterAnecdote />
      <AnecdoteList />
      <AnecdoteForm />
    </div>
  );
};

export default App;
