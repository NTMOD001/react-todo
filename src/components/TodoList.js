import { CardContent } from "@mui/material"

const TodoList = ({ list }) => {
    return (
        <>
            <CardContent>
                {list.map((todo) => (
                    <p>{todo.text}</p>
                ))}
            </CardContent>
        </>
    )
}

export default TodoList
