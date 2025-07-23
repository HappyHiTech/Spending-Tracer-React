import { createContext, useContext, useState } from 'react';

const UploadContext = createContext();
export const useUpload = () => useContext(UploadContext);

export function UploadProvider({ children }){
    const handleAdderClick = (e) => {
        e.preventDefault();

        fetch("http://127.0.0.1:5000/api/add_data",{
            method: "POST",
            body: new FormData(e.target)
        })
            .then((response) => {
                console.log(response);
            })
        
        console.log("hello")
    }

    return (
        <UploadContext.Provider value={{handleAdderClick}}>
            {children}
        </UploadContext.Provider>
    );
}