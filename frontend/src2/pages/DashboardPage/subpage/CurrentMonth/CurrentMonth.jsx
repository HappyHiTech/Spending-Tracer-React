import "./CurrentMonth.css"

import { SpenderProvider, Adder, ItemList, Stats } from "@features/spending";
import { useAuth } from "@contexts/AuthContext";
import { useState } from 'react';

export default function CurrentMonth(){
    const { user } = useAuth();

    return(
        <SpenderProvider>
            <div className="current-month-container">
                <div className="current-month-body">
                    <header className="current-month-header">
                        <h1 className="current-month-title">Hello {user}</h1>
                    </header>
                    <div className="current-month-section">
                        <Adder />
                        <ItemList />
                    </div>
                    <h1 className="current-month-title">Stats</h1>
                    <Stats />
                    
                </div>
            </div>
        </SpenderProvider>
    );
}