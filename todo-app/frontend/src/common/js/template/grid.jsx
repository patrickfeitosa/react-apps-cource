import React, { Component } from 'react';

export default class Grid extends Component {
    toCssClass(numbers = [12, 12, 12, 12]) {
        const sizes = ['xs', 'sm', 'md', 'lg'];
        let finalGridClass = '';
        numbers.map((number, index) => {
            finalGridClass += `col-${sizes[index]}-${number} `;
        });

        return finalGridClass;
    }

    render() {
        const gridClass = this.toCssClass(this.props.cols);
        return (
            <div className={gridClass}>
                {this.props.children}
            </div>
        )
    }
};
