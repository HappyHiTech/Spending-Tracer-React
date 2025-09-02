import React, {createContext, useContext, useState, useEffect, useRef} from 'react';

const DashBoardContext = createContext();

export const useDashBoard = () => {
    const context = useContext(DashBoardContext);
    if (!context){
        throw new Error("useDashBoard must be used within an DashBoardProvider")
    }

    return context;
}

export function DashBoardProvider({children}) {
    const [isSideBar, setIsSidebar] = useState(false);

    const toggleSideBar = () => {
        setIsSidebar(!isSideBar);
        console.log(`isSideBar is now ${isSideBar}`);
    }



    const value = {
        toggleSideBar,
        isSideBar,

    }
    return(
        <DashBoardContext.Provider value={value}>
            { children }
        </DashBoardContext.Provider>
    )
}