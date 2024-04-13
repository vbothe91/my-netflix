export const validateLoginInput = (email, password, fullName, isSignInForm) => {
    const isValidEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
    const isValidPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

    if (!isValidEmail) {
        return "Invalid email Id";
    }

    if (!isValidPassword) {
        return "Invalid Password";
    }

    if (!isSignInForm) {
        const isValidFullName = /\b([A-ZÀ-ÿ][-,a-z. ']+[ ]*)+/.test(fullName);
        if(!isValidFullName) {
            return "Invalid full name";
        }
    }

    return null;
}
