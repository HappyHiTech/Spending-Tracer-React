import "./BudgerAdder.css"

import { useBudget } from "../../contexts/BudgetContext"

export default function BudgerAdder(){
    const { handleAddBudget, categories } = useBudget();

    return (
        <div className="budget-adder-container">
            <header className="budget-adder-header">
                <h1 className="budget-adder-title">Set Budget</h1>
            </header>

            <section className="budget-adder-section">
                <form className="budget-adder-form" onSubmit={handleAddBudget}>

                    <div className="budget-adder-input-container">
                        <label htmlFor="category" className="budget-adder-input-title">Category:</label>
                        <select name="category" className="budget-adder-input-box">
                            <option>Select a category</option>
                            {categories && categories.map((category, index) => (
                                <option key={index} value={category}>{category}</option>
                            ))}
                        </select>
                    </div>

                    <div className="budget-adder-input-container">
                        <label htmlFor="percent" className="budget-adder-input-title">Percent:</label>
                        <input type="text" id="percent" name="percent" className="budget-adder-input-box" placeholder="40"/>
                    </div>
                    <button className="budget-adder-form-button">Add to Budget!</button>
                </form>
            </section>
        </div>
    )
}