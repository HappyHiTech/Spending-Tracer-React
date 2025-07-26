import "./CurrentMonth.css"

import Adder from "./Adder/Adder";
import Itemlist from "./Itemlist/Itemlist";
import Stats from "./Stats/Stats"
import { useAuth } from "../../../hooks/AuthContext";

import { useState } from 'react';

export default function CurrentMonth(){
    const { user } = useAuth();

    return(
        <div className="current-month-container">
            <div className="current-month-body">
                <header className="current-month-header">
                    <h1 className="current-month-title">Hello {user}</h1>
                </header>
                <div className="adder-itemlist-row">
                    <Adder />
                    <Itemlist />
                </div>
                <Stats />
            </div>
        </div>
    );
}