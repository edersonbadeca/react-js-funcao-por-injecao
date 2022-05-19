import React from "react";
import ReactDOM from "react-dom";

import BuscaNome from "./BuscaNome";

function App() {
    async function handleFetch(nome) {
        try {
            const response = await fetch(
                `https://servicodados.ibge.gov.br/api/v2/censos/nomes/${nome}`
            );
            const result = await response.json();
            return result;
        } catch (e) {
            console.log(e);
        }
        return null;
    }

    return (
        <div className="App">
            <BuscaNome validateName={handleFetch} />
        </div>
    );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
