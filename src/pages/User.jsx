import React from "react";
import DataTable from "../ui/DataTable";

export default function User() {
    return (
        <div>
            <h1>Users</h1>
            <p>Welcome to the user page!</p>
            <DataTable api="http://localhost/Rest-API/api.php/" addLink="/user/add" editLink={{path:'/user/edit', params:"id"}} deleteId="id"/>
        </div>
    );
}