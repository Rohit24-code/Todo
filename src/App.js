import logo from './logo.svg';
import styles from './components/Todo.module.css';
import './App.css';
import Todo from './components/Todo';


function App() {
  return (
    <div className={styles.main}>
      <Todo />
    </div>
  );
}

export default App;
