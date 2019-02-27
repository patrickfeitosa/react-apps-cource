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
        this.refresh();
    };

    _bindEvents() {
        this.handleAdd = this.handleAdd.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleRemove = this.handleRemove.bind(this);
        this.handleTodoStatus = this.handleTodoStatus.bind(this);
        this.handleSearch = this.handleSearch.bind(this);
        this.handleClear = this.handleClear.bind(this);
    };

    refresh(description = '') {
        const searchParams = description ? `&description__regex=/${description}/` : '';
        Axios.get(`${URL}?sort=-createdAt${searchParams}`)
            .then((resp) => {
                this.setState({
                    ...this.state,
                    description,
                    list: resp.data,
                })
            });
    };

    handleAdd() {
        const description = this.state.description;
        Axios.post(URL, {
            description,
        }).then((resp) => {
            this.refresh();
        });
    };

    handleChange(ev) {
        this.setState({ ...this.state, description: ev.currentTarget.value });
    };

    handleRemove(todo) {
        Axios.delete(`${URL}/${todo._id}`)
            .then((resp) => {
                this.refresh(this.state.description);
            });
    };

    handleTodoStatus(todo) {
        Axios.put(`${URL}/${todo._id}`, { ...todo, done: !todo.done })
            .then((resp) => {
                this.refresh(this.state.description);
            });
    };

    handleSearch() {
        this.refresh(this.state.description);
    };

    handleClear() {
        this.refresh();
    }

    render() {
        return (
            <div>
                <PageHeader name='Tarefas' small='Cadastro'></PageHeader>
                <TodoForm description={this.state.description}
                    handleChange={this.handleChange}
                    handleAdd={this.handleAdd}
                    handleSearch={this.handleSearch}
                    handleClear={this.handleClear} />
                <TodoList list={this.state.list} handleRemove={this.handleRemove} handleTodoStatus={this.handleTodoStatus} />
            </div>
        );
    };
};
