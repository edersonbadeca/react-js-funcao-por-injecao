import React, { useState } from "react";

export default function BuscaNome({ validateName }) {
    const [result, setResult] = useState({});

    async function handleFetchTodo(event) {
        const response = await validateName(event.target.value);
        if (response) {
            setResult(response);
        } else {
            console.log("Fetch error");
        }
    }

    return (
        <div>
            <input onBlur={handleFetchTodo} />
            <div> {JSON.stringify(result)} </div>
        </div>
    );
}
