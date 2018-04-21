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
import AlbumList from "../sections/AlbumList";
import TodoList from "../sections/TodoList";
import UserPosts from "../sections/UserPosts";
import UserPageInfo from "../pieces/UserPageInfo";

class UserPage extends Component {

    constructor(props) {
        super(props);
    }

    render() {

        const { titleWrapper1, titleWrapper2, titleWrapper3, title } = styles;

        const user = this.props.navigation.state.params.user;

        return (

            <View style={{ flex: 1 }} >

                <UserPageInfo user={user} />

                <ViewPagerAndroid style={{ flex: 1}} initialPage={0}>

                <View>
                    <View style={titleWrapper1}>
                        <Text style={title}> Posts </Text>
                    </View>

                    <UserPosts navigation={this.props.navigation} userId={user.id} />
                </View>

                <View>
                    <View style={titleWrapper2}>
                        <Text style={title}> ToDos </Text>
                    </View>

                    <TodoList navigation={this.props.navigation} userId={user.id} />

                </View>

                <View>
                    <View style={titleWrapper3}>
                        <Text style={title}> Albums </Text>
                    </View>

                    <AlbumList navigation={this.props.navigation} userId={user.id} />

                </View>


            </ViewPagerAndroid>
                </View>
        );
    }

}

const styles = {
    titleWrapper1: {
        justifyContent: 'center',
        backgroundColor: 'rgba(100, 10, 50, 0.5)',
        width: '100%',
        top: 0
    },
    titleWrapper2: {
        justifyContent: 'center',
        backgroundColor: 'rgba(20, 10, 50, 0.5)',
        width: '100%',
        top: 0
    },
    titleWrapper3: {
        justifyContent: 'center',
        backgroundColor: 'rgba(0, 15, 150, 0.5)',
        width: '100%',
        top: 0
    },
    title: {
        color: '#2b2b2b',
        fontSize: 23,
        textAlign: 'center'
    }
};

export default UserPage;