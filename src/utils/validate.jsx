export const validate = (email, password) => {

    const isEmailValid = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(email);
    const isPasswordValid = password.length >= 8 && /[A-Z]/.test(password) && /[0-9]/.test(password);

    if(!isEmailValid) return "Invalid email id";
    if(!isPasswordValid) return "Invalid password";
    return null;
}

