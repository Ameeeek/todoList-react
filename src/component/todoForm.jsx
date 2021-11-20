import React , {useState, useEffect, useRef} from 'react'

function TodoForm(props) {
    const [input, setInput] = useState('')
    const handleChange = e =>{
        setInput(e.target.value)
    }
    const inputRef = useRef(null)
    useEffect(() =>{
        inputRef.current.focus()
    })
    const handleSubmit = e =>{
        e.preventDefault();
        props.onSubmit({
            id:Math.floor(Math.random() * 10000),
            text:input
        })
        setInput('')

    }

    return (
        <div>
        <form className="todo-form" onSubmit={handleSubmit}>
            <input ref={inputRef} onChange={handleChange} type="text" value={input} name="text" className="todo-input" placeholder="enter text"/>
            <button className="todo-button"> Add todo</button>
        </form>
        </div>
    )
}

export default TodoForm
