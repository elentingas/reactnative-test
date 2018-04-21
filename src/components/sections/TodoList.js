import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    FlatList,
    ScrollView,
    TouchableOpacity,
    Text,
    View
} from 'react-native';
import TodoPiece from "../pieces/TodoPiece";
let dataManager = require('../../managers/DataManager').DataManager.getInstance();

class UserPosts extends Component {

    state = {
        data: []
    };

    constructor(props) {
        super(props);
    }

    componentWillMount(){
        this._fetchTodoList(this.props.userId);
    }

    render() {

        return (
            <ScrollView style={{ flex: 1 }}>
                <FlatList
                    data = {this.state.data}
                    keyExtractor = { (i) => i }
                    renderItem = {
                        ({item}) => <TodoPiece options = {item} />
                    }
                />
            </ScrollView>
        );
    }

    _fetchTodoList = (userId) => {

        dataManager.fetchUserTodos(userId, (todos)=>{
            this.setState({
                data: todos
            });
        });

    }
}

export default UserPosts;