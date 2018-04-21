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

class UserPiece extends Component {

    constructor(props) {
        super(props);
    }

    render() {

       const { container, titleWrapper, title } = styles;

        return (

            <View style={container}>

                <TouchableOpacity onPress={ () => this._navigateToUserPage(this.props.options)}  style={titleWrapper}>

                    <Text  style={title} > {this.props.options.name} </Text>

                </TouchableOpacity>

            </View>
        );
    }

    _navigateToUserPage = (options) => {
        this.props.navigation.navigate('UserPage', {
            user: options,
        });
    }

  }

const styles = {
    titleWrapper: {
        justifyContent: 'center',
        backgroundColor: 'rgba(40, 80, 50, 0.2)',
        height: '100%',
        width: '100%',
        position: 'absolute',
        top: 0
    },
    title: {
        color: '#2b2b2b',
        fontSize: 23,
        textAlign: 'center'
    },
    container: {
        marginVertical: 8,
        marginHorizontal: 10,
        height: 100
    }
};

export default UserPiece;