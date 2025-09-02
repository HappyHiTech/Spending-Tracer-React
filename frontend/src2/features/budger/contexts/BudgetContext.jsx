import React, {createContext, useContext, useState, useEffect, useRef} from 'react';
import { useAuth } from '@contexts/AuthContext';
import { getCategoriesService, budgetAdderService, getBudgetListService, deleteBudgetService } from '../services/budgetService';

const BudgetContext = createContext();
export const useBudget = () => {
    const context = useContext(BudgetContext);
    if (!context) {
        throw new Error("useContext must be used within an BudgetProvider")
    }
    return context
}


export function BudgetProvider({children}){
    const [ categories, setCategories] = useState([]);
    const [ budgetList, setBudgetList ] = useState([]);
    const { token } = useAuth();

    useEffect(() => {
        (async () => {
            getCategories();
            getBudgetList();
        })()
    }, [])

    const getCategories = async () => {
        try {   
            const data = await getCategoriesService(token);
            setCategories(data)
        }
        catch (err) {
            console.error(err)
        }
    }

    const getBudgetList = async () => {
        try {
            const data = await getBudgetListService(token);
            setBudgetList(data);
        }
        catch (err) {
            console.error(err);
        }
    }

    const handleAddBudget = async (e) => {
        e.preventDefault();

        try {
            const data = await budgetAdderService(token, e.target)
            console.log(data);
            setBudgetList(data);

        }
        catch (err) {
            console.error(err)
        }
    }

    const handleDeleteBudget = async (category) => {
        try {
            const data = await deleteBudgetService(token, category);
            setBudgetList(data);
        }
        catch (err) {
            console.error('Error deleting budget item:', err)
        }
    }

    const value = {
        handleAddBudget,
        handleDeleteBudget,
        getCategories,
        categories,
        budgetList,
    }

    return (
        <BudgetContext.Provider value={value}>
            { children }
        </BudgetContext.Provider>
    )
}