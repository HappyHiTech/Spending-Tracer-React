import "./BudgerAdder.css"

export default function BudgerAdder(){
    return (
        <div className="budget-adder-container">
            <header className="budget-adder-header">
                <h1 className="budget-adder-title">Set Budget</h1>
            </header>

            <section className="budget-adder-section">
                <form className="budget-adder-form">

                    <div className="budget-adder-input-container">
                        <label htmlFor="category" className="budget-adder-input-title">Category:</label>
                        <select name="category" className="budget-adder-input-box">
                            <option>Select a category</option>
                        </select>
                    </div>

                    <div className="budget-adder-input-container">
                        <label htmlFor="percent" className="budget-adder-input-title">Percent:</label>
                        <input type="text" id="percent" name="percent" className="budget-adder-input-box" placeholder="Mcdonalds"/>
                    </div>
                    <button className="budget-adder-form-button">Add to Budget!</button>
                </form>
            </section>
        </div>
    )
}