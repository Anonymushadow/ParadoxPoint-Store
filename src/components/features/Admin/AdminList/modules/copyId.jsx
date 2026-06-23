import { toast } from "react-toastify";

export const copyId = async (id) => {
    try {
        await navigator.clipboard.writeText(id);
        toast.success("copiado");
    } catch (err) {
        toast.error(err);
    }
};