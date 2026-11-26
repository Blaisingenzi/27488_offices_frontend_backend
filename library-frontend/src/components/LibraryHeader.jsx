import { NavLink } from 'react-router'

function LibraryHeader() {
    const libraryHeader = "LIBRARY MANAGEMENT SYSTEM";

    const book = [
        { code: "SOD001", name: "Software Engineering", price: 100 },
        { code: "SOD002", name: "Software Engineering", price: 90 },
        { code: "FIN001", name: "Master Finance", price: 90 }
    ];

    const totalPrice = book.reduce((sum, b) => sum + b.price, 0);

    return (
        <div>
            <div><h1>{libraryHeader}</h1></div>
            <nav className="library-nav" aria-label="Main navigation">
                <NavLink to="/main" style={{paddingRight:"10px"}}>DASHBOARD</NavLink>
                <NavLink to="/">Login</NavLink>
                <NavLink to="/office" style={{paddingRight:"10px"}}>Office</NavLink>
                <NavLink to="/all-offices" style={{paddingRight:"10px"}}>All Offices</NavLink>
            </nav>

        </div>
    );
}

export default LibraryHeader
