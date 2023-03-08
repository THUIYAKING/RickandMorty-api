import { useEffect, useRef, useState } from "react"
import './index.css'
const References = ()=>{
    const [names, setName] = useState([])

    const save =(e)=>{
        const userInput = e.target.value
        console.log(userInput)
        e.preventDefault()
    }
    useEffect(()=>{
    }, [])
    return(
        <div>
                <input onSubmit={save} className='input'></input>
                <button onClick={save}>Enter</button>

        </div>
    )
}


export default References
