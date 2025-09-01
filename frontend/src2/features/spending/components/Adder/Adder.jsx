import "./Adder.css"
import { useState } from 'react';
import { useSpender } from "@features/spending"; 

export default function Adder(){
    const {handleAdderClick} = useSpender();
    
    return (
        <div className="adder-container">
            <header className="adder-header">
                <h1 className="adder-header-title">Add a New Item</h1>
            </header>
            <section className="adder-section">
                <form id="add_form" onSubmit={handleAdderClick}>
                    <div className="adder-section-input">
                        <label htmlFor="date" className="adder-section-input-title">Date</label>
                        <input type="date" id="date" name="date" className="adder-section-input-box"/>
                    </div>
                    <div className="adder-section-input">
                        
                        <label htmlFor="item" className="adder-section-input-title">Item</label>
                        <input type="text" id="item" name="item" className="adder-section-input-box" placeholder="Mcdonalds"/>
                    </div>
                    <div className="adder-section-input">
                        <label htmlFor="price" className="adder-section-input-title">Price</label>
                        <input type="text" id="price" name="price" className="adder-section-input-box" placeholder="5.00"/>
                    </div>
                    <div className="adder-section-input">
                        <label htmlFor="category" className="adder-section-input-title">Category</label>
                        <input type="text" id="category" name="category" className="adder-section-input-box" placeholder="Food"/>
                    </div>
                    <button className="adder-form-button">Add to List!</button>
                </form>
            </section>
        </div>
    );
}