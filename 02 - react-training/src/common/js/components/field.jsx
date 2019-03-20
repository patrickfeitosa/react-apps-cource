import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import { changeValue } from '../utils/fieldActions.js';

class Field extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: props.initialValue
        };
        this.handleChange = this.handleChange.bind(this);
    };

    handleChange(ev) {
        this.setState({ value: ev.target.value });
    };

    render() {
        return (
            <div>
                <label>{this.props.value}</label> <br />
                <input onChange={this.props.changeValue} value={this.props.value} />
            </div>
        );
    };
};

function mapStateToProps(state) {
    return {
        value: state.field.value,
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ changeValue }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Field);