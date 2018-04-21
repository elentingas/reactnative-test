import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    FlatList,
    ScrollView,
    TouchableOpacity,
    Text,
    View,
    ViewPagerAndroid
} from 'react-native';

class UserPageInfo extends Component {

    constructor(props) {
        super(props);
    }

    render() {

        const user = this.props.user;
        const { container, title, titleWrapper, rows } = styles;

        return (

                <View style={container}>

                    <Text style={title}> {user.name} </Text>
                    <Text style={rows}> username: {user.username} </Text>
                    <Text style={rows}> email: {user.email} </Text>
                    <Text style={rows}> address: {user.address.city} {user.address.street} {user.address.suite}</Text>
                    <Text style={rows}> phone: {user.phone} </Text>
                    <Text style={rows}> website: {user.website} </Text>
                    <Text style={rows}> company: {user.company.name}</Text>

                </View>

        );
    }

}

const styles = {
    title: {
        color: '#440a00',
        fontSize: 23,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    rows: {
        color: '#0d0d0d',
        fontSize: 13,
        textAlign: 'center'
    },
    container: {
        marginVertical: 20,
        marginHorizontal: 10
    }
};

export default UserPageInfo;