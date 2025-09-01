import "./Stats.css";

import MainStats from "../MainStats/MainStats";
import { useSpender } from "../../contexts/SpenderContext";
import StatCardSecondary from "../StatCardSecondary/StatCardSecondary";

export default function Stats() {
    const { percentPerCategory, pricePerCategory } = useSpender();

    return (
        <div className="stats-container">
            <MainStats />
            <section className="detailed-stats-container">
                <StatCardSecondary title="Percent Per Category" symbol="%" dataList={percentPerCategory}/>
                <StatCardSecondary title="Price Per Category" symbol="$" dataList={pricePerCategory}/>
            </section>
        </div>
    );
} 