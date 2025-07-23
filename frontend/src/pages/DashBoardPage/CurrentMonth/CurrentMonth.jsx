import "./CurrentMonth.css"

import Adder from "./Adder/Adder";
import Itemlist from "./Itemlist/Itemlist";
import Stats from "./Stats/Stats"

export default function CurrentMonth(){
    return(
        <div className="current-month-container">
            <div className="current-month-body">
                <div className="adder-itemlist-row">
                    <Adder />
                    <Itemlist />
                </div>
                <Stats />
            </div>
        </div>
    );
}