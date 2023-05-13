import shortid from "shortid";
import "./Form.css";


const Form = ({todo,todoList,setTodo,setTodoList}) => {

    const handleInput = (e) => {
        // this function to insert value to TODO
        setTodo(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        // rewrite todolist  object array + new item
        setTodoList([
            ...todoList,
            {name: todo, id:shortid.generate()}
        ]);
        // reset input value
        setTodo('');
    }


    return (
        <form className="form" onSubmit={handleSubmit}>
            <input value={todo} onChange={handleInput} type="text" placeholder="New Task..."/>
            <button type="submit">ADD</button>
        </form>
    );
}

export default Form;