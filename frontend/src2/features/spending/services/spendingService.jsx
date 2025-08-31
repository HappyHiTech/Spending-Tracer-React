export const getDataService = async (token) => {
    const response = await fetch("http://127.0.0.1:5000/api/get_data", {
        headers: {
            'Authorization': `Bearer ${token}`,
        }
    })

    return response;
}

export const adderClickService = async (token, formTarget) => {
    const response = await fetch("http://127.0.0.1:5000/api/add_data",{
        method: "POST",
        body: new FormData(formTarget),
        headers: {
            'Authorization': `Bearer ${token}`,
        }
    })

    return response.json();
}

export const deleteClickService = async (token, item_id) => {
    const response = await fetch("http://127.0.0.1:5000/api/remove_data", {
        method: "POST",
        body: JSON.stringify({ item_id }),
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
        }
    })

    return response.json();
}

export const totalSpentService = async (token) => {
    const response = await fetch("http://127.0.0.1:5000/api/get_total_spent", {
        method: "POST",
        headers: {
            'Authorization': `Bearer ${token}`
        }
    });

    return response.json();
}

export const percentPerCategoryService = async (token) => {
    const response = await fetch("http://127.0.0.1:5000/api/get_percent_per_category", {
        method: "POST",
        headers: {
            'Authorization': `Bearer ${token}`
        }
    });

    return response.json();
}