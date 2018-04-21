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

class CommentPiece extends Component {

    constructor(props) {
        super(props);
    }

    render() {

        const {title, titleWrapper, body} = styles;

        return (

            <View style={{ flex: 1 }}>

                <TouchableOpacity style={titleWrapper} onPress={ () => this._navigate()}>

                    <Text style={[body, {color: '#005d8c'}]}> : {this.props.options.email}  </Text>
                    <Text style={title}> {this.props.options.name}  </Text>
                    <Text style={body}> {this.props.options.body}  </Text>

                </TouchableOpacity>

            </View>
        );
    }

    _navigate = (options) => {

    }

}

const styles = {
    titleWrapper: {
        justifyContent: 'center',
        backgroundColor: 'rgba(120, 150, 0, 0.5)',
        width: '100%',
        top: 0,
        marginVertical: 5,
        marginHorizontal: 2
    },
    title: {
        color: '#2b2b2b',
        fontSize: 16,
        textAlign: 'center',
        marginVertical: 2,
        marginHorizontal: 17
    },
    body: {
        color: '#2b2b2b',
        fontSize: 12,
        textAlign: 'left',
        marginVertical: 15,
        marginHorizontal: 18
    }
};

export default CommentPiece;