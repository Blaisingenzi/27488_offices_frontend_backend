import React, { useState } from 'react'
import LibraryButton from './LibraryButton'
import LibraryHeader from './LibraryHeader'

function LibraryMain() {
    const [count, setCount] = useState(0);

    function incrementNumber() {
        setCount(count + 1);
        console.log("This is the increment value " + (count + 1));
    }

    return (
        <div>
            <LibraryHeader />
            <header>
                <h2>WELLCOMING PAGE</h2>
                <LibraryButton buttonLabel="increment" buttonAction={incrementNumber} />
            </header>
            <div>increment value is {count}</div>
        </div>
    );
}

export default LibraryMain
