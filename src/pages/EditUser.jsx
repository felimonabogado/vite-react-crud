import React from "react";
import { useParams } from "react-router-dom";
import UserForm from "../ui/UserForm";

function EditUser() {
    const { id } = useParams(); // Get the id from the URL parameters
    const REST_API = import.meta.env.VITE_PHP_BACKEND_API;
    return (
        <div>
            <h1>Edit User: {id}</h1>
            <UserForm api={REST_API} id={id} /> {/* Pass the id to UserForm */}
        </div>
    );  
}

export default EditUser;