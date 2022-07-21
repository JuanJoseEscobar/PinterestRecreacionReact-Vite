import { useState } from 'react';
import firebaseStorage from './FireBase';


export const getImage = () => {
    const {getDownloadURL,getStorage,refStorage,getMetadata,listAll} = firebaseStorage;

    const [userURL, setUserURL] = useState('');

    getDownloadURL(refStorage(getStorage,'Users/Astro.png'))
    .then((e)=>{
        setUserURL(e);
    })
    .catch((e)=>{
        console.log('Error')
    });
    
    // listAll(ref(getStorage,'Users'))
    // .then(({items})=>{
    //     items.forEach(({fullPath}) => {
    //         //console.log(fullPath);
    //     });
        
    // })
    // .catch((e)=>{
    //     console.log('Error')
    // });

    return userURL;
}
