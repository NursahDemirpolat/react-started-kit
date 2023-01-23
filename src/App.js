import { useState ,useReducer,useCallback,useMemo} from 'react';
import todoReducer from "./reducers/todoReducer";
import Header from './Header.js';
import AddTodo from './AddTodo.js';
import Todos from './Todos.js';

function App() {
  console.log("App Rendered")

  const [count,setCount] = useState(0)

  const [state,dispatch] = useReducer(todoReducer,{
    todos:[],
    todo:'',
    search:''
  });


const submitHandle = useCallback(e => {
  e.preventDefault()
  ({
    type:'ADD_TODO',
    todo:state.todo
  })
},[state.todo])

const onChange = useCallback(e => {
  dispatch({
    type: 'SET_TODO',
    value: e.target.value
  })
},[])

const searchHandle = e => {
  dispatch({
    type: 'SET_SEARCH',
    value: e.target.value
  })
}

const filteredTodos = useMemo (() => {
  return  state.todos.filter(todo => todo.toLocaleLowerCase('TR').includes(state.search.toLocaleLowerCase('TR')))
},[state.todos , state.search])

  return(
    <>
    <Header/>
    <h3>{count}</h3>
    <button onClick={() => setCount(count => count + 1)}>
      Arttır
    </button>
    <hr/>
      <h1>Todo App</h1>
      <input type='text' value={state.search} placeholder="Todolarda ara" onChange={searchHandle}></input>
      {state.search}
      <hr/>
      <AddTodo onChange={onChange} submitHandle={submitHandle} todo={state.todo}/>
      <Todos todos={filteredTodos}/>
    </>
  )
}
export default App;
