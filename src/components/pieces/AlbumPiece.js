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

class AlbumPiece extends Component {

    constructor(props) {
        super(props);
    }

    render() {

        const {title, titleWrapper} = styles;

        return (

            <View style={{ flex: 1 }}>

                <TouchableOpacity style={titleWrapper} onPress={ () => this._navigate(this.props.options)}>

                    <Text style={title}> {this.props.options.title} </Text>

                </TouchableOpacity>

            </View>
        );
    }

    _navigate = (options) => {

        this.props.navigation.navigate('AlbumPhotos', {
            album: options,
        });

    }

}

const styles = {
    titleWrapper: {
        justifyContent: 'center',
        backgroundColor: '#e2d83f',
        width: '90%',
        top: 0,
        marginVertical: 5,
        marginHorizontal: 20
    },
    title: {
        color: '#050505',
        fontSize: 15,
        textAlign: 'center',
        marginVertical: 10,
        marginHorizontal: 56
    }
};

export default AlbumPiece;