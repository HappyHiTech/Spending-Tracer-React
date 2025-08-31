import "./Stats.css";

import MainStats from "../MainStats/MainStats";
import PercentPerStats from "../PercentPerStats/PercentPerStats";

export default function Stats() {
    return (
        <div className="stats-container">
            <MainStats />
            <section className="detailed-stats-container">
                <PercentPerStats />
            </section>
        </div>
    );
} 