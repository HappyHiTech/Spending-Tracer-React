import "./MainStats.css"

import { useState, useEffect } from 'react';
import { useAuth } from "@contexts/AuthContext";
import { useSpender } from "@features/spending";

export default function MainStats(){
    const { handleTotalSpent, totalSpending } = useSpender();
    const { token } = useAuth();

    return (
        <div className="main-stats-container">
            <header className="main-stats-header">
                <h2 className="main-stats-title">Total Price</h2>
                <img src="https://icons.veryicon.com/png/o/business/a-set-of-commercial-icons/money-transfer.png" className="main-stats-icon"/>
            </header>
            <section className="main-stats-section">
                <p className="main-stats-price">{`$${totalSpending}`}</p>
            </section>
        </div>
    );
}