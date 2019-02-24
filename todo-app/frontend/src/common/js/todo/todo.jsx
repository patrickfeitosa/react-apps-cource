import React, { Component } from 'react';

import PageHeader from '../template/pageHeader.jsx';
import TodoForm from './todoForm.jsx';
import TodoList from './todoList.jsx';

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
        console.log(this);
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
