import { Link, useLocation } from "react-router-dom";

const Character = ()=>{

    const {state} = useLocation()
    return (
        <div>
            <h1>{state.name}</h1>
            <img src={state.image}></img>
            <h3>{state.gender}</h3>
            <p>{state.status}</p>
            <p>{state.species}</p>
            <p>{state.type}</p>
            <Link to='/'>GO back</Link>
        </div>
        
    )
}

export default Character;