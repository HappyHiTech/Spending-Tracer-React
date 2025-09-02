import "./Budget.css"
import { useState } from 'react';
import { BudgetProvider ,BudgerAdder, BudgetViewer } from "@features/budger"

export default function Budget(){
    return (
        <BudgetProvider>
            <div className="budget-container">
                <div className="budget-body">
                    <header className="budget-header">
                        <h1 className="budget-title">Budget Planning</h1>
                    </header>
                    <section className="budget-section">
                        <BudgerAdder />
                        <BudgetViewer />
                    </section>
                </div>
            </div>
        </BudgetProvider>
    );
}