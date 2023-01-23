import TodoItem from "./TodoItem.js"
import { memo } from "react"

function Todos({todos}){
    console.log("Todos Rendered")

    return(
        <ul>
            {todos.map((todo,index) => 
                <TodoItem todo={todo} key={index}/>
            )}
        </ul>
    )
}

export default memo(Todos)