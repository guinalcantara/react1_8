import React from "react";
import ReactDOM from 'react-dom/client';

function Greeting (){
    return <h2>First Component </h2>
}

const root = ReactDOM.creatRoot(document.getElementById('root'));
root.render(<Greeting/>);

