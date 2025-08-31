import "./PercentPerStats.css"


import CategoryItem from "../CategoryItem/CategoryItem";
import { useSpender } from "../../contexts/SpenderContext";


export default function PercentPerStats(){
    const { handlePercentPerCategory, percentPerCategory } = useSpender();
 

    return (
        <div className="percent-per-container">
            <header className="percent-per-header">
                <h2 className="percent-per-title">PercentPerStats</h2>
                <h2 className="percent-per-title">%</h2>
            </header>
            <section className="percent-per-section">
                {percentPerCategory &&
                    Object.entries(percentPerCategory).map(([category, percent]) => (
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