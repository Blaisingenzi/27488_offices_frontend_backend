import React, { useEffect, useState } from 'react'
import axios from 'axios'
import LibraryButton from './LibraryButton'

function OfficeList() {

    const [offices, setOffices] = useState([]);
    const [search, setSearch] = useState("");

    async function loadOffices() {
        try {
            const response = await axios.get("/api/office/all");
            setOffices(response.data);
        } catch (error) {
            alert("This is the error: " + error.message);
        }
    }

    useEffect(() => {
        loadOffices();
    }, []);

    async function deleteOffice(office) {
        if (!window.confirm("Delete office " + office.name + " (" + office.officeNumber + ")?")) {
            return;
        }
        try {
            const response = await axios.delete("/api/office/delete/" + office.id);

            if (response.status == 200) {
                alert("Office deleted successfully");
                loadOffices();
            } else {
                alert("Office is not deleted");
            }
        } catch (error) {
            alert("This is the error: " + error.message + (error.response ? " - " + JSON.stringify(error.response.data) : ""));
        }
    }

    function updateOffice() {
        alert("Update is not implemented yet");
    }

    const filteredOffices = offices.filter(office =>
        office.name.toLowerCase().includes(search.toLowerCase()) ||
        String(office.officeNumber).includes(search)
    );

    return (
        <div>
            <h1>ALL OFFICES</h1>
            <label>SEARCH : </label>
            <input
                type="text"
                placeholder="Office name or number"
                value={search}
                onChange={e => setSearch(e.target.value)}
            />

            <table border="1" style={{ marginTop: "10px", borderCollapse: "collapse" }}>
                <thead>
                    <tr>
                        <th>OFFICE NAME</th>
                        <th>OFFICE NUMBER</th>
                        <th>ACTION</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredOffices.length == 0 ? (
                        <tr>
                            <td colSpan="3">No office found</td>
                        </tr>
                    ) : (
                        filteredOffices.map(office => (
                            <tr key={office.id}>
                                <td>{office.name}</td>
                                <td>{office.officeNumber}</td>
                                <td>
                                    <LibraryButton buttonAction={() => deleteOffice(office)} buttonLabel="DELETE" />
                                    <LibraryButton buttonAction={updateOffice} buttonLabel="UPDATE" />
                                </td>
                            </tr>
                        ))
                    )}
                </tbody>
            </table>
        </div>
    )
}

export default OfficeList
