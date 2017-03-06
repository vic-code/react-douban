
import React from 'react'
import book from '../assets/js/book.js';
import Cell from '../components/cell.js';

export default class Moive extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
           
        }
    }
    render() {
        return (
            <Cell list={book.info} />
        )
    }
}
