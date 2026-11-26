import React, { useState, useEffect } from 'react'
import axios from 'axios'
import LibraryHeader from './LibraryHeader'
import LibraryButton from './LibraryButton'

function AllOffices() {

    const [offices, setOffices] = useState([]);
    const [search, setSearch] = useState("");

    useEffect(() => {
        fetchOffices();
    }, []);

    async function fetchOffices() {
        try {
            const response = await axios.get("/api/office/all");
            setOffices(response.data);
        } catch (error) {
            alert("Error fetching offices: " + error.message);
        }
    }

    async function deleteOffice(id) {
        try {
            const response = await axios.delete("/api/office/delete/" + id);
            if (response.status == 200) {
                alert("Office deleted successfully");
                fetchOffices();
            } else {
                alert("Office is not deleted");
            }
        } catch (error) {
            alert("Error deleting office: " + error.message);
        }
    }

    const filteredOffices = offices.filter(o =>
        o.name.toLowerCase().includes(search.toLowerCase()) ||
        String(o.officeNumber).includes(search)
    );

    return (
        <div>
            <LibraryHeader />
            <h1>ALL OFFICES</h1>
            <input
                type="text"
                placeholder="Search by office name or number"
                onChange={e => setSearch(e.target.value)}
            />
            <table border="1" cellPadding="8" style={{ marginTop: "10px", width: "100%" }}>
                <thead>
                    <tr>
                        <th>Office Name</th>
                        <th>Office Number</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredOffices.length > 0 ? (
                        filteredOffices.map(o => (
                            <tr key={o.id}>
                                <td>{o.name}</td>
                                <td>{o.officeNumber}</td>
                                <td>
                                    <LibraryButton buttonLabel="DELETE" buttonAction={() => deleteOffice(o.id)} />
                                    <LibraryButton buttonLabel="UPDATE" buttonAction={() => alert("Update will be covered in the next class")} />
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr><td colSpan="3">No offices found</td></tr>
                    )}
                </tbody>
            </table>
        </div>
    );
}

export default AllOffices
