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
import AlbumPiece from "../pieces/AlbumPiece";
let dataManager = require('../../managers/DataManager').DataManager.getInstance();

class AlbumList extends Component {

    state = {
        data: []
    };

    constructor(props) {
        super(props);
    }

    componentWillMount(){
        this._fetchAlbums(this.props.userId);
    }

    render() {

        return (
            <ScrollView  style={{ flex: 1 }}>
                <FlatList
                    data = {this.state.data}
                    keyExtractor = { (i) => i }
                    renderItem = {
                        ({item}) => <AlbumPiece options = {item} navigation = {this.props.navigation} />
                    }
                />
            </ScrollView>
        );
    }

    _fetchAlbums = (userId) => {

        dataManager.fetchUserAlbums(userId, (albums)=>{
            this.setState({
                data: albums
            });
        });

    }
}

export default AlbumList;