import { API_BASE_URL } from "@utils/constants";

export const loginUserService = async (username, password) => {
    const formData = new FormData();
    formData.append("username", username);
    formData.append("password", password);

    const response = await fetch(`${API_BASE_URL}/api/login`, {
        method: "POST",
        body: formData
    });

    return response.json();
}

export const signUpUserService = async (username, password) => {
    const formData = new FormData();
    formData.append("username", username);
    formData.append("password", password);

    const response = await fetch(`${API_BASE_URL}/api/signup`, {
        method: "POST",
        body: formData
    });

    return response.json();
}