import { createContext, useContext, useState, useEffect } from 'react';

const UploadContext = createContext();
export const useUpload = () => useContext(UploadContext);

export function UploadProvider({ children }){
    const [itemList, setItemList] = useState([]);

    useEffect(() => {
         fetch("http://127.0.0.1:5000/api/get_data")
            .then((response) => {
                return response.json()
            })
            .then((data) => {
                setItemList(data)
            })
    }, [])

    const handleAdderClick = (e) => {
        e.preventDefault();

        fetch("http://127.0.0.1:5000/api/add_data",{
            method: "POST",
            body: new FormData(e.target)
        })
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                setItemList(data);
            })
        
        console.log("hello")
    }

    return (
        <UploadContext.Provider value={{handleAdderClick, itemList}}>
            {children}
        </UploadContext.Provider>
    );
}