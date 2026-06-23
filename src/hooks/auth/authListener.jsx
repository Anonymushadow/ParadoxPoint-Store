import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";

import { auth } from "@config/firebase.config";

import { useUserStore } from "@store/userStore";

export const useAuthListener = () => {

    const setLoadingAuth = useUserStore(state => state.setLoadingAuth);

    const login = useUserStore(state => state.login);
    const logout = useUserStore(state => state.logout);

    useEffect(() => {

        const unsubscribe = onAuthStateChanged(auth, (user) => {

            if (user) {
                login({
                    uid: user.uid,
                    email: user.email,
                    displayName: user.displayName,
                    phone: user.phone || null
                });
            } else {
                logout();
            }
            setLoadingAuth(false);
        });

        return () => unsubscribe();

    }, []);

};