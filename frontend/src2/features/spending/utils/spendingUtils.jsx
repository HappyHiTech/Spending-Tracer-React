export function formValidation(formData){
    // Check if all entries are filled
    for (let value of formData.values()) {
        if (!value) {
            return "There is an empty Entry";
        }
    }

    // Check if price is a valid number (float) and has at most 2 decimal places
    const price = formData.get("price");
    if (
        isNaN(price) ||
        price === null ||
        price === "" ||
        !isFinite(Number(price)) ||
        /\.\d{3,}$/.test(price)
    ) {
        return "Please enter a valid numeric value for price";
    }

    return "Adding successful!";

    
}