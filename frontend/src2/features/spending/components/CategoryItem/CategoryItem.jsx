import "./CategoryItem.css"

export default function CategoryItem({ category, percent }){

    
    return (
        <div className="category-item-container">
            <section className="category-item-content">
                <h3 className="category-item-title">{category}</h3>
                <p className="category-item-percent">{percent}</p>
            </section>
        </div>
    )
}