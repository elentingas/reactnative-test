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

class PostPiece extends Component {

    constructor(props) {
        super(props);
    }

    render() {

        const {title, titleWrapper, body} = styles;

        return (

            <View style={{ flex : 1 }}>

                <TouchableOpacity  style={titleWrapper} onPress={ () => this._navigate(this.props.options)}>

                    <Text style={title}> {this.props.options.title} </Text>

                    <Text style={body}> {this.props.options.body} </Text>

                </TouchableOpacity>

            </View>
        );
    }

    _navigate = (options) => {
        this.props.navigation.navigate('PostComments', {
            post: options,
        });
    }

}

const styles = {
    titleWrapper: {
        justifyContent: 'center',
        backgroundColor: 'rgba(40, 80, 50, 0.2)',
        width: '100%',
        top: 0,
        marginVertical: 5,
        marginHorizontal: 2
    },
    title: {
        color: '#2b2b2b',
        fontSize: 15,
        textAlign: 'center',
        fontWeight: 'bold',
        marginVertical: 5,
        marginHorizontal: 15
    },
    body: {
        color: '#2b2b2b',
        fontSize: 12,
        textAlign: 'left',
        marginVertical: 5,
        marginHorizontal: 11
    }
};

export default PostPiece;