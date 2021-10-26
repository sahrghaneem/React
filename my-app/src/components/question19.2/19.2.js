import React from "react";

const Countries = ()=>{
    const [allcountries,setllcountries]=React.useState([]);
    const [countriesfilter,setCountriesfilter]=React.useState([]);
    

    React.useEffect(()=>{
        const country=async()=>{
            let result= await(await fetch("https://restcountries.com/v2/all/")).json()
            let nameofcountry=result.map((p) =>{
                return p.name 
            })
            console.log(nameofcountry)
            setllcountries(nameofcountry)

        }
        country()
    },[])

    React.useEffect(()=>{
        setCountriesfilter(allcountries)
    },[allcountries])

    const getData=(e)=>{
        setCountriesfilter(allcountries.filter((element)=>{
            return element.toLowerCase().includes(e.target.value.toLowerCase())
            
        }))
    }

    return (
        <div>
            <input type='text' placeholder='serch country' onChange={getData}/>
            {countriesfilter.map((con)=>{
            return <li>{con}</li>
            })}
        </div>
    )
}
export default Countries