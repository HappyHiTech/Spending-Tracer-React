import "./StatCardSecondary.css"


import CategoryItem from "../CategoryItem/CategoryItem";

export default function StatCardSecondary({ title, symbol, dataList }){
    return (
        <div className="percent-per-container">
            <header className="percent-per-header">
                <h2 className="percent-per-title">{title}</h2>
                <h2 className="percent-per-title">{symbol}</h2>
            </header>
            <section className="percent-per-section">
                {dataList &&
                    Object.entries(dataList).map(([category, percent]) => (
                    <CategoryItem 
                        key={category} 
                        category={category} 
                        percent={percent} 
                    />
                    ))
                }
            </section>
            
        </div>
    )
}