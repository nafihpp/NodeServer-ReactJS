import { useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
    const [data, setData] = useState([]);

    const submit = () => {
        axios
            .get("http://localhost:4000/users")
            .then((response) => {
                console.log(response.data);
                setData(response.data); // Handle the response data
            })
            .catch((error) => {
                console.error(error); // Handle the error
            });
    };
    return (
        <>
            <div className="">
                <button onClick={submit}>Get from Api</button>
                {data && data.map((user) => <h1>{user.userName}</h1>)}
            </div>
        </>
    );
}

export default App;
