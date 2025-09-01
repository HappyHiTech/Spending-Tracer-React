import "./BudgetViewer.css"

export default function BudgetViewer(){
    return (
        <div className="budget-viewer-container">
             <header className="budget-viewer-header">
                <h1 className="budget-viewer-header-title">Budget Viewer</h1>
            </header>
            <section className="budget-viewer-section">
                <div className="budget-viewer-item">
                    <span className="budget-viewer-item-category">hello</span>
                    <span className="budget-viewer-item-percentage">30%</span>
                </div>
                <div className="budget-viewer-item">
                    <span className="budget-viewer-item-category">hello</span>
                    <span className="budget-viewer-item-percentage">30%</span>
                </div>
            
            </section>
        </div>
    )
}