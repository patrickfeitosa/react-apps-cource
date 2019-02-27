import React from 'react';
import Grid from '../template/grid.jsx';
import IconButton from '../template/iconButton.jsx'

export default (props) => {
    const keyHandler = (ev) => {
        if (ev.key === 'Enter') {
            ev.shiftKey ? props.handleSearch() : props.handleAdd()
        } else if (ev.key === 'Escape') {
            props.handleClear();
        }
    }

    return (
        <div role='form' className='todoForm'>
            <Grid cols={[12, 9, 10]}>
                <input type='text' className='form-control'
                    onChange={props.handleChange}
                    onKeyUp={keyHandler}
                    placeholder='Adicione uma tarefa' value={props.description} />
            </Grid>
            <Grid cols={[12, 3, 2]}>
                <IconButton style='primary' icon='plus' onClick={props.handleAdd}></IconButton>
                <IconButton style='info' icon='search' onClick={props.handleSearch}></IconButton>
                <IconButton style='default' icon='close' onClick={props.handleClear}></IconButton>
            </Grid>
        </div>
    )
};