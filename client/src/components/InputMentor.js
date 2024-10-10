import React, {Fragment, useState} from "react";
import '../App';

const inputMentors = () => {

    const [name, setName] = useState("");
    const [school, setSchool] = useState("");
    const [bio, setBio] = useState("");
    const [job, setJob] = useState("");


    const onSubmit = async(e) => {
        e.preventDefault();
        try{
            const body = {name, school, bio, job};

            //make POST request
            const response = await fetch("http://localhost:4000/mentors", {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(body)
            })
        } catch(err){
            console.error(err.message, "submit error");
        }
    };

    return (
        <Fragment>
            <h1 className="text-center mt-5">Mentors List</h1>
            <form className="d-flex mt-5">
                <input type="text" className="form-control"/>
                <button className="btn btn-success">Add</button>
            </form>
        </Fragment>
    );
};

export default inputMentors;