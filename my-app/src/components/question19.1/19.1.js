import React from "react";

const Fetchmovies = ()=>{
    const [starWars,setStarWars]=React.useState([])
    React.useEffect(()=>{
        const movies=async()=>{
            let result=await(await fetch("https://swapi.dev/api/films/")).json()
            console.log(result.results)
            setStarWars(result.results)
            
        }
        movies()
    },[])
    return (
        <div>
            {
                starWars.map((value)=>{
                    return <div>
                       <p> movie name:{value.title}</p>
                       <p> Dirctor:{value.director}</p>
                    </div>
                })
            }
        </div>
    )
}
export default Fetchmovies
