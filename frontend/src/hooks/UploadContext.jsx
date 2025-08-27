import { createContext, useContext, useState, useEffect } from 'react';
import { useAuth } from './AuthContext';
import { useNavigate } from "react-router-dom";

const UploadContext = createContext();
export const useUpload = () => useContext(UploadContext);

export function UploadProvider({ children }){
    
    const [itemList, setItemList] = useState([]);
    const { token, logout } = useAuth();
    const navigate = useNavigate();


    useEffect(() => {
        (async () => {
            await handleGetData();
            await handlePercentPerCategory();
        })();
        
        
    }, [])
    const handleGetData = async () => {
        const response = await fetch("http://127.0.0.1:5000/api/get_data", {
            headers: {
                'Authorization': `Bearer ${token}`,
            }
        })

        if (response.status === 401){
            logout();
            navigate("/")
        }
        else {
            const data = await response.json();
            setItemList(data)
        }

    }

    const handleAdderClick = (e) => {
        e.preventDefault();

        fetch("http://127.0.0.1:5000/api/add_data",{
            method: "POST",
            body: new FormData(e.target),
            headers: {
                'Authorization': `Bearer ${token}`,
            }
        })
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                setItemList(data);
            })
            .catch((error) => {
                console.error('Error:', error);
                // Handle the error appropriately
            })
        
        console.log("hello")
    }

    const handleDeleteClick = async (index) => {
        const item_id = itemList[index]["_id"];

        const response = await fetch("http://127.0.0.1:5000/api/remove_data", {
            method: "POST",
            body: JSON.stringify({ item_id }),
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
            }
        })

        const data = await response.json();

        setItemList(data)
        
        
    };

    const handleTotalSpent = async () => {
        const response = await fetch("http://127.0.0.1:5000/api/get_total_spent", {
                method: "POST",
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });
        
        const data = await response.json();
        const total_spent = data["total_spent"]
        return data.total_spent;
    }

    const handlePercentPerCategory = async () => {
        const response = await fetch("http://127.0.0.1:5000/api/get_percent_per_category", {
            method: "POST",
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });

        
        const data = await response.json();
        return data;

    }

    return (
        <UploadContext.Provider value={{handleAdderClick, handleTotalSpent , handleDeleteClick, itemList, handlePercentPerCategory}}>
            {children}
        </UploadContext.Provider>
    );
}