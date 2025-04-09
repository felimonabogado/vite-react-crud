import React from "react";
import DataTable from "../ui/DataTable";

export default function User() {
    const REST_API = import.meta.env.VITE_PHP_BACKEND_API;
    return (
        <div>
            <h1>Users</h1>
            <DataTable api={REST_API} addLink="/user/add" editLink={{path:'/user/edit', params:"id"}} deleteId="id"/>
        </div>
    );
}