
import UsersList from "../components/sections/UsersList";

import PostComments from "../components/screens/PostComments";
import UserPage from "../components/screens/UserPage";
import AlbumPhotos from "../components/screens/AlbumPhotos";

import { StackNavigator, TabNavigator, TabBarBottom} from 'react-navigation';

const Root = StackNavigator({

    UsersList: {
        screen: UsersList
        ,
        navigationOptions: {
            title: 'List Of Users'
        }
    },
    PostComments: {
        screen: PostComments,
        navigationOptions: {
            title: 'Post Comments'
        }
    },
    UserPage: {
        screen: UserPage,
        navigationOptions: {
            title: 'Personal Profile'
        }
    },
    AlbumPhotos: {
        screen: AlbumPhotos,
        navigationOptions: {
            title: 'Album Photos'
        }
    }
    }
);

export default Root;