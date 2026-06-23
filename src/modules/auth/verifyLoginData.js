export const verifyLoginData = (email, password) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
        return {
            success: false,
            message: "Email inválido"
        };
    }

    if (!password) {
        return {
            success: false,
            message: "Ingrese una contraseña"
        };
    }

    return {
        success: true
    };
};