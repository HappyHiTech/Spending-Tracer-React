import "./BudgetViewer.css"
import { useBudget } from "../../contexts/BudgetContext"

export default function BudgetViewer(){
    const { budgetList, handleDeleteBudget } = useBudget();

    const handleDelete = (category) => {
        if (window.confirm(`Are you sure you want to delete the budget for ${category}?`)) {
            handleDeleteBudget(category);
        }
    };

    return (
        <div className="budget-viewer-container">
             <header className="budget-viewer-header">
                <h1 className="budget-viewer-header-title">Budget Viewer</h1>
            </header>
            <section className="budget-viewer-section">
                {budgetList && budgetList.map((category_entry, index) => (
                    <div key={index} className="budget-viewer-item">
                        <span className="budget-viewer-item-category">{category_entry["category"]}</span>
                        <span className="budget-viewer-item-percentage">{category_entry["percent"]}%</span>
                        <button 
                            className="budget-viewer-delete-btn"
                            onClick={() => handleDelete(category_entry["category"])}
                            aria-label={`Delete budget for ${category_entry["category"]}`}
                        >
                            ×
                        </button>
                    </div>
                ))}
            </section>
        </div>
    )
}