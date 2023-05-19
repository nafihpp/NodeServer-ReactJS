import { useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
    const [input, setInput] = useState("");
    const handleChange = (e) => {
        setInput(e.target.value);
    };

    const config = {
        headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "http://localhost:5173",
        },
    };
    const submit = (e) => {
        axios
            .post("https://localhost:4000/", { input: input }, config)
            .then((response) => {
                console.log(response.data); // Handle the response data
            })
            .catch((error) => {
                console.error(error); // Handle the error
            });
    };
    return (
        <>
            <div className="">
                <input
                    placeholder="enter to post to the array"
                    onChange={handleChange}
                />
                <button onClick={submit}>submit</button>
            </div>
        </>
    );
}

export default App;
