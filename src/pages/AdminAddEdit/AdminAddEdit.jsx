import "./AdminAddEdit.css";
import { AdminForm } from "@components/features/Admin/AdminForm/AdminForm";
import { useParams } from "react-router-dom";

export const AdminAddEdit = ({ type }) => {
    const { id } = useParams();

    return (
        <section className="admin__add__edit__section">
            <AdminForm type={type} id={id} />
        </section>
    )
}