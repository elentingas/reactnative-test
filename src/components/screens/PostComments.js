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
import CommentPiece from "../pieces/CommentPiece";
let dataManager = require('../../managers/DataManager').DataManager.getInstance();

class PostComments extends Component {

    state = {
        data: []
    };

    constructor(props) {
        super(props);
    }

    componentWillMount(){
        this._fetchPostComments(this.props.navigation.state.params.post.id);
    }

    render() {

        return (
            <ScrollView>
                <FlatList
                    data = {this.state.data}
                    keyExtractor = { (i) => i }
                    renderItem = {
                        ({item}) => <CommentPiece options = {item} />
                    }
                />
            </ScrollView>
        );
    }

    _fetchPostComments = (postId) => {

        dataManager.fetchPostComments(postId, (comments)=>{
            this.setState({
                data: comments
            });
        });
    }
}

export default PostComments;