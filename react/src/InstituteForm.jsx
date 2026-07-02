// Spring Project Using React and Spring Boot
import { useState } from "react";
import axios from "axios";

function InstituteForm() {

    const [faculty, setFaculty] = useState("");
    const [name, setName] = useState("");
    const [location, setLocation] = useState("");
    const [fee, setFee] = useState("");
    const [address, setAddress] = useState("");

    async function saveInstitute() {

        try {

            await axios.post(
                "http://localhost:8080/institutes/save",
                {
                    faculty: faculty,
                    name: name,
                    location: location,
                    fee: fee,
                    address: address
                }
            );

            alert("Data Added Successfully");

            setFaculty("");
            setName("");
            setLocation("");
            setFee("");
            setAddress("");

        } catch (error) {

            console.log(error);

            alert("POST Failed");
        }
    }

    return (
        <>
            <h2>Post Items</h2>

            <input
                type="text"
                placeholder="Faculty"
                value={faculty}
                onChange={(e) =>
                    setFaculty(e.target.value)
                }
            />

            <br/><br/>

            <input
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) =>
                    setName(e.target.value)
                }
            />

            <br/><br/>

            <input
                type="text"
                placeholder="Location"
                value={location}
                onChange={(e) =>
                    setLocation(e.target.value)
                }
            />

            <br/><br/>

            <input
                type="number"
                placeholder="Fee"
                value={fee}
                onChange={(e) =>
                    setFee(e.target.value)
                }
            />

            <br/><br/>

            <input
                type="text"
                placeholder="Address"
                value={address}
                onChange={(e) =>
                    setAddress(e.target.value)
                }
            />

            <br/><br/>

            <button onClick={saveInstitute}>
                Save
            </button>
        </>
    );
}

export default InstituteForm;

