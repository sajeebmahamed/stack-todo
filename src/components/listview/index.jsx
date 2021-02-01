import PropsTypes from 'prop-types'
import React from 'react'
import { Button, CustomInput, ListGroup, ListGroupItem } from 'reactstrap'

const ListItem = ({ todo, toggleSelect, toggleComplete }) => {
    return (
        <ListGroupItem className='d-flex align-items-center'>
            <CustomInput
                type='checkbox'
                id={todo.id}
                checked={todo.isSelect}
                onChange={ () => toggleSelect(todo.id) }
            />
            <div className='mx-3'>
                <h4> { todo.text } </h4>
                <p> {todo.time.toDateString()} </p>
            </div>
            <Button
                className='ml-auto'
                color={todo.isComplete ? 'danger' : 'success'}
            >
                { todo.isComplete ? 'Complete' : 'Running' }
            </Button>
        </ListGroupItem>
    )
}

ListItem.prototype = {
    todo: PropsTypes.object.isRequired,
    toggleSelect: PropsTypes.func.isRequired,
    toggleComplete: PropsTypes.func.isRequired
}

const ListView = ({ todos, toggleSelect, toggleComplete }) => {
    return(
        <ListGroup>
            {todos.map(todo => (
                <ListItem
                    key={todo.id}
                    todo={todo}
                    toggleSelect={toggleComplete}
                    toggleComplete={toggleComplete}
                />
            ))

            }
        </ListGroup>
    )
}
ListGroup.prototype = {
    todos: PropsTypes.object.isRequired,
    toggleSelect: PropsTypes.func.isRequired,
    toggleComplete: PropsTypes.func.isRequired
}

export default ListView