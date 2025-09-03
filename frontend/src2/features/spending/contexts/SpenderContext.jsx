import { createContext, useContext, useState, useEffect } from 'react';
import { useAuth } from '@contexts/AuthContext';
import { useNavigate } from "react-router-dom";
import { getDataService, 
    adderClickService, 
    deleteClickService, 
    totalSpentService, 
    percentPerCategoryService,
    pricePerCategoryService } from '../services/spendingService';

import { formValidation } from '../utils/spendingUtils';

const SpenderContext = createContext();

export const useSpender = () => {
    const context = useContext(SpenderContext);
    if(!context){
        throw new Error("useSpender must be used within an SpenderProvider")
    }

    return context;
}

export function SpenderProvider({ children }){
    const [itemList, setItemList] = useState([]);
    const [percentPerCategory, setPercentPerCategory] = useState({});
    const [pricePerCategory, setPricePerCategory] = useState({});
    const [totalSpending, setTotalSpending] = useState(0);
    const [adderNotes, setAdderNotes] = useState("");
    const { token, logout } = useAuth();
    const navigate = useNavigate();


    useEffect(() => {
        (async () => {
            handleGetData();
            handleTotalSpent();
            handlePercentPerCategory();
            handlePricePerCategory();
        })();
        
        
    }, [])

    const handleGetData = async () => {
        try {
            const response = await getDataService(token);

            if (response.status === 401){
                logout();
                navigate("/Spender-Tracker-React/");
            }
            else {
                const data = await response.json();
                setItemList(data);
            }
        }
        catch (err) {
            console.error(err);
        }
    }

    const handleAdderClick = async (e) => {
        e.preventDefault();
        
        const entryFormData = new FormData(e.target);
        const formValidMessage = formValidation(entryFormData);
        setAdderNotes(formValidMessage)
        if (formValidMessage == "Adding successful!"){
            try {
                const data = await adderClickService(token, e.target);
                
                setItemList(data.slice(0, -1));
                setTotalSpending(data.at(-1))
                handlePercentPerCategory();
                handlePricePerCategory();
            }
            catch (err) {
                console.error(err);
            }
        }
    }

    const handleDeleteClick = async (index) => {
        const item_id = itemList[index]["_id"];

        try{
            const data = await deleteClickService(token, item_id);
            setItemList(data.slice(0, -1));
            setTotalSpending(data.at(-1));
            handlePercentPerCategory();
            handlePricePerCategory();

        }
        catch (err) {
            console.error(err);
        }
        
    };

    const handleTotalSpent = async () => {
        try {
            const data = await totalSpentService(token);
            const total_spent = data["total_spent"];
            setTotalSpending(total_spent);
        }
        catch (err) {
            console.log(err);
        }
        
    }

    const handlePercentPerCategory = async () => {
        try {
            const data = await percentPerCategoryService(token);
            setPercentPerCategory(data)
        }
        catch (err) {
            console.error(err);
        }
    }

    const handlePricePerCategory = async() => {
        try {
            const data = await pricePerCategoryService(token);
            setPricePerCategory(data);
        }
        catch (err) {
            console.error(err);
        }
    }
    
    const value = {
        handleGetData,
        handleAdderClick,
        handleDeleteClick,
        handleTotalSpent,
        handlePercentPerCategory,
        handlePricePerCategory,
        itemList,
        totalSpending,
        percentPerCategory,
        pricePerCategory,
        adderNotes,
    };

    return (
        <SpenderContext.Provider value={ value }>
            { children }
        </SpenderContext.Provider>
    )

}