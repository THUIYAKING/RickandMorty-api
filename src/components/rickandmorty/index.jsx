import {useState,useEffect} from "react"
const RickAndMorty = () =>{
    const [character, setCharacter]= useState([])
    useEffect(()=>{
        const fetchData = async () =>{
        const rensponse = await fetch('https://rickandmortyapi.com/api/character')
        const results =await rensponse.json()
        setCharacter(results.results)
        console.log(results.results)
        }
       fetchData()  
    },[])
    console.log(character)
    return(
        <div>
        <h1>Rick AND MORTY</h1>
            <p>Welcome, analysis made by Thuiya</p>
            {character.map((character)=>{
                return(
                    <div>
                        <h2>{character.name}</h2>
                        <img src={character.image}></img>
                        <h3>{character.status}</h3>
                        <h4>{character.species}</h4>
                    </div>
                )
                
            })}
        </div>
    )
}
export default RickAndMorty