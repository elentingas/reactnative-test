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

class TodoPiece extends Component {

    constructor(props) {
        super(props);
    }

    render() {

        const {title, titleWrapper} = styles;

        let BGcolor = this.props.options.completed ? {backgroundColor: 'rgba(0, 255, 0, 0.7)'} : {backgroundColor: 'rgba(255, 0, 0, 0.8)'};

        return (

            <View style={{ flex: 1 }}>

                <TouchableOpacity style={[titleWrapper, BGcolor]}  onPress={ () => this._navigate(this.props.options)}>

                    <Text style={title} > {this.props.options.title} </Text>

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

export default TodoPiece;