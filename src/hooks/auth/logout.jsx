import { signOut } from "firebase/auth";
import { auth } from "@config/firebase.config";
import { useUserStore } from "@store/userStore";

export const useLogout = () => {

    const logout = useUserStore(state => state.logout);

    const logoutUser = async () => {
        try {
            await signOut(auth);

            logout();

            return {
                success: true
            };

        } catch (error) {
            return {
                success: false,
                error
            };
        }
    };

    return logoutUser;
};