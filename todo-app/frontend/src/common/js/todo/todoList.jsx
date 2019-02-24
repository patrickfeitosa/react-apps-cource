import React from 'react';
import IconButton from '../template/iconButton.jsx'

export default (props) => {
    const renderRows = () => {
        const list = props.list || []
        return list.map((todo) => (
            <tr key={todo._id}>
                <td className={todo.done ? 'is--done' : ''}>{todo.description}</td>
                <td>
                    <IconButton
                        style='success'
                        icon='check'
                        hide={todo.done}
                        onClick={() => props.handleTodoStatus(todo)}></IconButton>
                    <IconButton
                        style='warning'
                        icon='undo'
                        hide={!todo.done}
                        onClick={() => props.handleTodoStatus(todo)}></IconButton>
                    <IconButton
                        style='danger'
                        icon='trash-o'
                        onClick={() => props.handleRemove(todo)}></IconButton>
                </td>
            </tr>
        ));
    };

    return (
        <table className="table">
            <thead>
                <tr>
                    <th>Descrição</th>
                    <th>Ações</th>
                </tr>
            </thead>
            <tbody>
                {renderRows()}
            </tbody>
        </table>
    )
}
