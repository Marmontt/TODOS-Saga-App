import React from 'react';
import {connect} from 'react-redux'
import {todosActions} from './state/todos'

import TodoMenu from "./components/TodoMenu";
import TodoList from "./components/TodoList";

import './App.css';

class App extends React.Component {

    constructor(props) {
        super(props)
    }

    componentDidMount() {
       this.props.getTodos();
    }

    render() {
        return (
            <div className={'app-container'}>
                <TodoMenu/>
                <TodoList/>
            </div>
        );
    }
}

const mapActionsToProps = {
    getTodos: todosActions.getTodos

}

export default connect(null, mapActionsToProps)(App);
