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
import UserPiece from "../pieces/UserPiece";
let dataManager = require('../../managers/DataManager').DataManager.getInstance();

class UsersList extends Component {

    state = {
        data: []
    };

    constructor(props) {
        super(props);
    }

    componentWillMount(){
        this._fetchUsers();
    }

    render() {

        return (
            <ScrollView>
                <FlatList
                    data = {this.state.data}
                    keyExtractor = { (i) => i }
                    renderItem = {
                        ({item}) => <UserPiece options = {item} navigation = {this.props.navigation} />
                    }
                />
            </ScrollView>
        );
    }

    _fetchUsers = () => {

        dataManager.fetchUsers((users)=>{
            this.setState({
                data: users
            });
        });
    }
}

export default UsersList;