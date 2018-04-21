
let instance = null;

class DataManager {

    constructor() {
        this.initialSetup();
    }

    static getInstance() {
        if (!instance) {
            instance = new DataManager();
        }
        return instance;
    };

    initialSetup() {}

    fetchUsers(completion) {

            fetch('https://jsonplaceholder.typicode.com/users')
                .then((response) => response.json())
                .then((responseJson) => {

                    completion(responseJson);
                })
                .catch((error) =>{
                    completion(error);
                });
    }

    fetchUserTodos(userId ,completion) {

        fetch('https://jsonplaceholder.typicode.com/todos')
            .then((response) => response.json())
            .then((responseJson) => {

                for(let i = 0; i < responseJson.length; i++){
                    if (responseJson[i].userId != userId){
                        responseJson.splice(i, 1);
                        i--;
                    }
                }

                completion(responseJson);

            })
            .catch((error) =>{
                completion(error);
            });
    }

    fetchUserPosts(userId ,completion) {

        fetch('https://jsonplaceholder.typicode.com/posts')
            .then((response) => response.json())
            .then((responseJson) => {


                for(let i = 0; i < responseJson.length; i++){
                    if (responseJson[i].userId != userId){
                        responseJson.splice(i, 1);
                        i--;
                    }
                }

                completion(responseJson);

            })
            .catch((error) =>{
                completion(error);
            });
    }

    fetchPostComments(postId ,completion) {

        fetch('https://jsonplaceholder.typicode.com/comments')
            .then((response) => response.json())
            .then((responseJson) => {

                for(let i = 0; i < responseJson.length; i++){
                    if (responseJson[i].postId != postId){
                        responseJson.splice(i, 1);
                        i--;
                    }
                }

                completion(responseJson);
            })
            .catch((error) =>{
                completion(error);
            });
    }

    fetchUserAlbums(userId ,completion) {

        fetch('https://jsonplaceholder.typicode.com/albums')
            .then((response) => response.json())
            .then((responseJson) => {

                for(let i = 0; i < responseJson.length; i++){
                    if (responseJson[i].userId != userId){
                        responseJson.splice(i, 1);
                        i--;
                    }
                }

                completion(responseJson);
            })
            .catch((error) =>{
                completion(error);
            });
    }

    fetchAlbumPhotos(albumId ,completion) {

        fetch('https://jsonplaceholder.typicode.com/photos')
            .then((response) => response.json())
            .then((responseJson) => {

                //start

                for(let i = 0; i < responseJson.length; i++){
                    if (responseJson[i].albumId != albumId){
                        responseJson.splice(i, 1);
                        i--;
                    }
                }


                //end

                    completion(responseJson);

            })
            .catch((error) =>{
                completion(error);
            });
    }

}

exports.DataManager = DataManager;