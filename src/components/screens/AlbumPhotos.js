import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    FlatList,
    Image,
    ScrollView,
    TouchableOpacity,
    Text,
    View, Dimensions
} from 'react-native';
import Carousel from 'react-native-snap-carousel';
let dataManager = require('../../managers/DataManager').DataManager.getInstance();

const { height, width } = Dimensions.get('window');

class AlbumPhotos extends Component {

    state = {
        data: []
    };

    constructor(props) {
        super(props);
    }

    componentWillMount(){
        this._fetchAlbumPhotos(this.props.navigation.state.params.album.id);
    }

    render() {

        return (

            <View styles={styles.sliderWrapper}>

                <Carousel
                    inactiveSlideOpacity={0.6}
                    inactiveSlideScale={0.5}
                    firstItem={0}
                    sliderWidth={width}
                    itemWidth={width / 2}
                    data={this.state.data}
                    renderItem={this._renderItem}
                    containerCustomStyle={{ overflow: 'visible' }}
                    contentContainerCustomStyle={{ overflow: 'visible' }}
                />


            </View>
        );
    }

    _fetchAlbumPhotos = (albumId) => {

        dataManager.fetchAlbumPhotos(albumId, (photos)=>{
            this.setState({
                data: photos
            });
        });

    }

    _renderItem = ({item}) => {
        return (
            <View>
                <Text style={styles.title} > {item.title} </Text>
                <Image source={{ uri: item.url }} style={styles.logoStyle} />
            </View>
        );
    }
}


const styles = {
    sliderWrapper: {
        width: '100%',
        flex: 1
    },
    logoStyle: {
        width: width / 2,
        height: height / 2
    },
    title: {
        color: '#050505',
        fontSize: 14,
        textWeight: 'bold',
        textAlign: 'center',
        marginVertical: 10,
        marginHorizontal: 12,
        paddingTop: 30
    }
};

export default AlbumPhotos;