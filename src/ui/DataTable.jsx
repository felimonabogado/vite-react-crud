import React from "react";
import { Link } from "react-router-dom";
import styles from "../assets/scss/DataTable.module.scss";

class DataTable extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
           api: this.props.api || null,
           data: null,
           loading: true,
           error: null,
           addLink: this.props.addLink || null,
           editLink: this.props.editLink
               ? {
                   path: this.props.editLink.path || null,
                   params: this.props.editLink.params || null,
               }
               : null,
           deleteId: this.props.deleteId || null,
        };
    }

    componentDidMount() {
        this.getData();
    }

    getData = async () => {
        try {
            const response = await fetch(this.state.api);
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            const items = await response.json();
            this.setState({ data: items, loading: false });
        } catch (error) {
            this.setState({ error: error, loading: false });
            console.log("There was a problem with the fetch operation:", error);
        }
    }

    deleteUser = (userID) => {
        if(confirm("Are you sure you want to delete this user? #" + userID)) {
            fetch(this.state.api, {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({id: userID}),
            })
            .then(response => response.json())
            .then(data => {
                if (data.error) {
                    alert(data.error);
                } else {
                    alert(data.message);
                    this.getData(); // Refresh the data after deletion
                }
            })
            .catch((error) => {
                //this.setState({ status: false, notification: `Error: ${error}` });
                alert(`Error: ${error}`);
            });   
        }
    }

    render(){
        return (
            <div className={styles.DataTableContainer}>
                <div className={styles.Header}>
                    <h2>Data Table</h2>
                    {this.state.addLink && <Link className="button button-primary" to={this.state.addLink}>Add</Link>}
                </div>
                {this.state.loading && <p>Loading...</p>}
                {this.state.error && <p>Error: {this.state.error.message}</p>}
                {this.state.data && (
                    <table className={styles.DataTable}>
                        <thead>
                            <tr>
                                {Object.keys(this.state.data[0]).map((key) => (
                                    <th key={key}>{key}</th>
                                ))}
                                {this.state.editLink || this.state.deleteId ? (
                                <th>Action</th>
                            ) : null}
                            </tr>
                           
                        </thead>
                        <tbody>
                            {this.state.data.map((row, index) => (
                                <tr key={index}>
                                    {Object.values(row).map((value, i) => (
                                        <td key={i}>{value}</td>
                                    ))}
                                    {this.state.editLink || this.state.deleteId ? (
                                        <td className={styles.actions}>
                                            {this.state.editLink && (
                                                <Link
                                                    to={{
                                                        pathname: `${this.state.editLink.path}/${row[this.state.editLink.params]}`,
                                                    }}
                                                    className="button"
                                                >
                                                    Edit
                                                </Link>
                                            )}
                                            {this.state.deleteId && (
                                                <button className="button button-danger" onClick={() => this.deleteUser(row[this.state.deleteId])}>
                                                    Delete
                                                </button>
                                            )}
                                        </td>
                                    ) : null}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                )}
            </div>
        );
    }
}

export default DataTable;