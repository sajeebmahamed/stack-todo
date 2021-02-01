import React from 'react'
import ListView from '../listview'
import TableView from '../tableview'

class Todos extends React.Component {
    state = {
        todos: [
            {
                id: 1,
                text: 'Lorem Ipsum',
                description: 'Lorem description',
                time: new Date(),
                isComplete: false,
                isSelect: false
            },
            {
                id: 2,
                text: 'Lorem Ipsum2',
                description: 'Lorem description2',
                time: new Date(),
                isComplete: false,
                isSelect: false
            }
        ]
    }
    toggleSelect = todoId => {}
    toggleComplete = todoId => {}
    render() {
        return (
            <div>
                <h1 className='display-4 text-center mb-5'> todos </h1>
                <div>
                    <ListView
                        todos={this.state.todos}
                        toggleSelect={this.toggleSelect}
                        toggleComplete={this.toggleComplete}
                    />
                </div>
                <div>
                    <TableView
                        todos={this.state.todos}
                        toggleSelect={this.toggleSelect}
                        toggleComplete={this.toggleComplete}
                    />
                </div>
            </div>
        )
    }
}
export default Todos