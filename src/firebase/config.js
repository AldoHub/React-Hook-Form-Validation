import * as firebase from "firebase/app";
import "firebase/firestore";
import "firebase/storage";

const config = {
   //---your firebase credentials
}

class Firebase {

    constructor(){
        firebase.initializeApp(config);
        this.firestore = firebase.firestore();
        this.storage = firebase.storage();
    }

    getAllPosts(){
        return firebase.firestore().collection("posts").get();
    }

    async createPost(url , post){
        const fileRef = await firebase.storage().refFromURL(url);
        let newPost = {
            title: post.title,
            content: post.content,
            cover: url,
            fileref : fileRef.location.path 
        } 

        return firebase.firestore().collection("posts").add(newPost);    
    } 

  
}

export default new Firebase();