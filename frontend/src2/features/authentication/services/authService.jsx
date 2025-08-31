export const loginUserService = async (username, password) => {
    const formData = new FormData();
    formData.append("username", username);
    formData.append("password", password);

    const response = await fetch("http://127.0.0.1:5000/api/login", {
        method: "POST",
        body: formData
    });

    return response.json();
}

export const signUpUserService = async (username, password) => {
    const formData = new FormData();
    formData.append("username", username);
    formData.append("password", password);

    const response = await fetch("http://127.0.0.1:5000/api/signup", {
        method: "POST",
        body: formData
    });

    return response.json();
}