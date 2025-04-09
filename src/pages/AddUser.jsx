import React from "react";
import UserForm from "../ui/UserForm";

function AddUser() {
    const REST_API = import.meta.env.VITE_PHP_BACKEND_API;
    const containerStyle = {
        width: "100%",
        maxWidth: "600px",
        margin: "0 auto",
        padding: "20px",
    }
    return (
        <div style={containerStyle}>
            <h1>Add User</h1>
            <UserForm api={REST_API}/>
        </div>
    );  
}

export default AddUser;