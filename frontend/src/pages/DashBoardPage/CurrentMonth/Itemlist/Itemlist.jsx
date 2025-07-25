import { useUpload } from "../../../../hooks/UploadContext";
import "./Itemlist.css";

export default function Itemlist() {
    const { itemList } = useUpload();

    // Placeholder data
    const items = [
        { date: "2024-06-01", item: "Coffee", price: "$3.50", category: "Food" },
        { date: "2024-06-02", item: "Book", price: "$12.00", category: "Education" },
        { date: "2024-06-03", item: "Bus Ticket", price: "$2.25", category: "Transport" },
        { date: "2024-06-03", item: "Bus Ticket", price: "$2.25", category: "Transport" },
        { date: "2024-06-03", item: "Bus Ticket", price: "$2.25", category: "Transport" },
        { date: "2024-06-03", item: "Bus Ticket", price: "$2.25", category: "Transport" },
        { date: "2024-06-03", item: "Bus Ticket", price: "$2.25", category: "Transport" },
        { date: "2024-06-03", item: "Bus Ticket", price: "$2.25", category: "Transport" },
        { date: "2024-06-03", item: "Bus Ticket", price: "$2.25", category: "Transport" },
        { date: "2024-06-03", item: "Bus Ticket", price: "$2.25", category: "Transport" },
        { date: "2024-06-03", item: "Bus Ticket", price: "$2.25", category: "Transport" },
        

    ];

    return (
        <div className="itemlist-container">
            <header className="itemlist-header">
                <h1 className="itemlist-header-title">Item List</h1>
            </header>
            <section className="itemlist-section">
                <table className="itemlist-table">
                    <thead>
                        <tr>
                            <th>Date</th>
                            <th>Item</th>
                            <th>Price</th>
                            <th>Category</th>
                        </tr>
                    </thead>
                    <tbody>
                        {itemList.map((item, idx) => (
                            <tr key={idx}>
                                <td>{item.date}</td>
                                <td>{item.item}</td>
                                <td>{item.price}</td>
                                <td>{item.category}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </section>
        </div>
    );
}
