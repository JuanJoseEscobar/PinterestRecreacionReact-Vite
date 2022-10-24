import { useState } from 'react';
import firebaseStorage from './FireBase';


export const getImage = () => {
    const {getDownloadURL,getStorage,refStorage} = firebaseStorage;

    const [userURL, setUserURL] = useState('');

    getDownloadURL(refStorage(getStorage,'Users/Astro.png'))
    .then((e)=>{
        setUserURL(e);
    })
    .catch((e)=>{
        console.log('Error')
    });
    
    return userURL;
}
