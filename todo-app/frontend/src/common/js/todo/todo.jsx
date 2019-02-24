import React, { Component } from 'react';
import Axios from 'axios';

import PageHeader from '../template/pageHeader.jsx';
import TodoForm from './todoForm.jsx';
import TodoList from './todoList.jsx';

const URL = 'http://localhost:3003/api/todos';

export default class Todo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            description: '',
            list: [],
        };

        this._bindEvents();
    }

    _bindEvents() {
        this.handleAdd = this.handleAdd.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleAdd() {
        const description = this.state.description;
        Axios.post(URL, {
            description,
        }).then((resp) => {
            console.log(resp, 'Funcionou');
        });
    }

    handleChange(ev) {
        this.setState({ ...this.state, description: ev.currentTarget.value });
    }

    render() {
        return (
            <div>
                <PageHeader name='Tarefas' small='Cadastro'></PageHeader>
                <TodoForm description={this.state.description}
                    handleChange={this.handleChange}
                    handleAdd={this.handleAdd} />
                <TodoList />
            </div>
        );
    };
};
