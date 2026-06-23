import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "@config/firebase.config";
import { useUserStore } from "@store/userStore";

export const useLogin = () => {
    const setUser = useUserStore((state) => state.login);

    const loginUser = async (email, password) => {
        try {
            const userCredential = await signInWithEmailAndPassword(
                auth,
                email,
                password
            );

            const user = userCredential.user;

            setUser(user);

            return {
                success: true,
                user
            };

        } catch (error) {
            return {
                success: false,
                error
            };
        }
    };

    return {
        loginUser
    };
};