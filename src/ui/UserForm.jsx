import React from "react";
import styles from "../assets/scss/UserForm.module.scss"; // Import your CSS module

class UserForm extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            api: props.api || null, // Default API endpoint
            id: props.id || null, // If id is passed as a prop, use it; otherwise, set to null
            name: null,
            email: null,
            status: false,
            notification: null,
        };
    }

    componentDidMount() {
        if (this.state.id) {
            this.getCurrentUser(this.state.id);
        }
    }

    handleSubmit = (e) => {
        e.preventDefault();
        var formData = new FormData(e.target);
        const name = formData.get("name");
        const email = formData.get("email");

        if(name.length > 0 && email.length > 0){
            if (this.state.id){
                this.updateUser({id: this.state.id, name: name, email: email});
            }else{
                this.registerUser({name: name, email: email});
            }
        }else{
            this.setState({status: false});
            this.setState({notification: "Please fill in all fields."});
        }
    }

    registerUser = (userData) => {
        if (this.state.api) {
            fetch(this.state.api, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(userData),
            })
            .then(response => response.json())
            .then(data => {
                if (data.error) {
                    this.setState({ status: false, notification: data.error });
                } else {
                    this.setState({ 
                        name: null,
                        email: null,
                        status: true,
                        notification: data.message });
                }
            })
            .catch((error) => {
                this.setState({ status: false, notification: `Error: ${error}` });
            });   
        } else {
            this.setState({ status: false, notification: "API endpoint not defined." });
        }
    }

    getCurrentUser = async (userID) => {
        try {
            const response = await fetch(this.state.api);
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            const items = await response.json();
            const user = items.find(user => user.id ===  userID.toString());
            this.setState({ name: user.name, email: user.email });
        } catch (error) {
            this.setState({ error: error, loading: false });
            console.log("There was a problem with the fetch operation:", error);
        }
    }

    updateUser = (userData) => {
        if (this.state.api) {
            fetch(this.state.api, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(userData),
            })
            .then(response => response.json())
            .then(data => {
                if (data.error) {
                    this.setState({ status: false, notification: data.error });
                } else {
                    this.setState({ status: true, notification: data.message });
                }
            })
            .catch((error) => {
                this.setState({ status: false, notification: `Error: ${error}` });
            });   
        } else {
            this.setState({ status: false, notification: "API endpoint not defined." });
        }
    }

    render(){
        const notificationStyle = {
            backgroundColor: this.state.status ? "#4CAF50" : "#F44336",
            color: "white",
            fontWeight: "500",
            marginBottom: "10px",
            padding: "10px",
        };
        return(
            <div className={styles.formContainer}>
                {this.state.notification && <p style={notificationStyle}>{this.state.notification}</p>}
                <form onSubmit={this.handleSubmit} className={styles.formGroup}>
                    <label htmlFor="name">Name:</label><br/>
                    <input type="text" id="name" name="name" defaultValue={this.state.name}/><br/>
                    <label htmlFor="email">Email:</label><br/>
                    <input type="email" id="email" name="email" defaultValue={this.state.email}/><br/>
                    <button type="submit">{this.state.id ? "Update" : "Register"}</button>
                </form>
            </div>
        );
    }
}

export default UserForm;