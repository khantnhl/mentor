import React from "react";

function Contact() 
{
    return(
        <div className="contact">
            <h2>Contact Us</h2>
            <form>
                <label>Email</label>
                <input type="email"/>
                <label>Message</label>
                <textarea></textarea>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default Contact;