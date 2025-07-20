const CheckValidData = (email, password, name, isSignUp) => {
    const isEmailValid = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
    const isPasswordValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

    if (!isEmailValid) return "Email not valid";
    if (!isPasswordValid) return "Password not valid";
    if (isSignUp) {
        const isNameValid = /^[a-zA-Z]+ [a-zA-Z]+$/.test(name);
        if (!isNameValid) return "Name not Valid";
    }
    return null;
}

export default CheckValidData