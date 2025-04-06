import React from "react";
import { useParams } from "react-router-dom";

const SingleUser = () => {
  const { id, slug } = useParams(); // Extract 'id' and 'slug' parameters from the URL

  const viewProfile = () => {
    return (
      <div>
        <h1>User ID: {id}</h1> {/* Display the user ID */}
        <p>Welcome to the single user page!</p>
      </div>
    );
  };

  const editProfile = () => {
    return (
      <div>
        <h1>Edit User: {id}</h1>
        <p>You can edit the user profile here.</p>
      </div>
    );
  };

  const addAccount = () => {
    return (
      <div>
        <h1>Add Account</h1>
        <p>You can add a new account here.</p>
      </div>
    );
  };

  switch (slug) {
    case "edit":
      return editProfile();
    case "view":
      return viewProfile();
    case "add":
      return addAccount();
    default:
      return (
        <div>
          <h1>Single User</h1>
          <p>Welcome to the single user page!</p>
        </div>
      );
  }
};

export default SingleUser;