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
import PostPiece from "../pieces/PostPiece";
let dataManager = require('../../managers/DataManager').DataManager.getInstance();

class UserPosts extends Component {

    state = {
        data: []
    };

    constructor(props) {
        super(props);
    }

    componentWillMount(){
        this._fetchPosts(this.props.userId);

    }

    render() {

        return (
            <ScrollView  style={{ flex: 1 }}>
                <FlatList
                    data = {this.state.data}
                    keyExtractor = { (i) => i }
                    renderItem = {
                        ({item}) => <PostPiece options = {item} navigation = {this.props.navigation} />
                    }
                />
            </ScrollView>
        );
    }

    _fetchPosts = (userId) => {

        dataManager.fetchUserPosts(userId, (posts)=>{
            this.setState({
                data: posts
            });
        });
    }
}

export default UserPosts;