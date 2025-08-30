import "./PercentPerStats.css"

import { useEffect, useState } from "react";
import CategoryItem from "./CategoryItem/CategoryItem"
import { useUpload } from "../../../../../hooks/UploadContext";


export default function PercentPerStats(){
    const { handlePercentPerCategory } = useUpload();
    const [percentPerCategory, setPercentPerCategory] = useState();

    useEffect(() => {
        (async () => {
            const data_returned = await handlePercentPerCategory();
            console.log("IM NOT IN UPLOAD");
            console.log(data_returned);
            setPercentPerCategory(data_returned);
        })();
    }, [])

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