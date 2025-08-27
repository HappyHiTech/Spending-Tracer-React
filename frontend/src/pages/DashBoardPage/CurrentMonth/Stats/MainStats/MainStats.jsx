import "./MainStats.css"

import { useState, useEffect } from 'react';
import { useAuth } from "../../../../../hooks/AuthContext";
import { useUpload } from "../../../../../hooks/UploadContext";

export default function MainStats(){
    const { handleTotalSpent } = useUpload();
    const { token } = useAuth();
    const [ totalSpent, setTotalSpent] = useState(0);

    useEffect(() => {
        const fetchSpent = async () => {
            const totalSpent = await handleTotalSpent();
            setTotalSpent(totalSpent);
        }
        fetchSpent();
        
    },)


    return (
        <div className="main-stats-container">
            <header className="main-stats-header">
                <h2 className="main-stats-title">Total Price</h2>
                <img src="https://icons.veryicon.com/png/o/business/a-set-of-commercial-icons/money-transfer.png" className="main-stats-icon"/>
            </header>
            <section className="main-stats-section">
                <p className="main-stats-price">{`$${totalSpent}`}</p>
            </section>
        </div>
    );
}