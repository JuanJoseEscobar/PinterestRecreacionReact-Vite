import { useEffect, useState } from "react";
import getImageAPI from "../../../Api/getImageAPI";

export const useFetchImage = (URLAPI) => {
    const [imaURL, setImaURL] = useState('');
    const [isLoading, setIsLoading] = useState(true);

    const getImaURL =  async() => {
        const newImaURL = await getImageAPI(URLAPI);
        setImaURL(newImaURL);
        setIsLoading( false );
    }

    useEffect(() => {
      getImaURL();
    }, [])

    return {
        imaURL,
        isLoading,
    };
    
}