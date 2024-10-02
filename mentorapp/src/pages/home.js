import {useState, useEffect} from "react"
import axios from "axios"

export default function Home() {
    return(
        <>
            <h1>HomePage</h1>
            <p>This is the homepage.</p>
        </>
    )
}

export function Contact() {
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    const [error, setError] = useState('')
    const [selectData, setSelectData] = useState([])
    const [selectValue, setSelectValue] = useState('')

    useEffect( ()=> {
        let processing= true;
        axiosFetchData(processing)

        return() => {
            processing= false
        }
    }, []) //[] is to only run once while render

    const axiosFetchData = async(processing) => {

        //const options = {
        // email: email,
        // message: message
        //}
    
        await axios.get('http://localhost:4000/users')
        .then(res => {
            if(processing){
                setSelectData(res.data)
            }
        })
        .catch(err => console.log(err))
    }
    
    const axiosPostData = async() => {
        const postData = {
            email:email,
            website: selectValue,
            message: message
        }
    
        await axios.post('http://localhost:4000/send', postData)
            .then(res => setError(<p className="success">{res.data}</p>))
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        if(!message){
            setError(<p className="required">Message is empty.</p>)
        } else{
            setError('')
            axiosPostData()
        }
    }

    return(
        <>
            <h1>Contact Us</h1>

            <form className = "contactForm">
                <label>Email</label>
                <input type="text" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                <label>How Did you Learn about us?</label>
                <label>Message</label>
                <button type="submit" onClick={handleSubmit}> Submit </button>
            </form>
        </>
    )
}
