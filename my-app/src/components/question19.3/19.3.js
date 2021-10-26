import React from "react";

export const Alogolia =()=>{

    const [query, setQuery]=React.useState([])
    const[search,setSearch]=React.useState('')
    const[subQuery,setSubQuery]=React.useState('hits')

    React.useEffect (()=>{

        const data =async()=>{
            let name=await(await fetch(`https://hn.algolia.com/api/v1/search?query={${subQuery}}`)).json()
            console.log(name.hits);
            setSubQuery(name.hits)
        }
        data()
    },[setSubQuery])

    const textHandler= (e)=>{
        setSearch(e.target.value)
    }

    const searchHandler = ()=>{
        setQuery(search)
    }


    return(
        <div>
            search : <input type={'text'} name={'search'} onChange={textHandler}/>
            <input type={'button'} value={'search'} onClick={searchHandler}/>
            {
            query.map((elemnt,index)=>{
                    return <p key={index}><a key={elemnt.objectId} href={elemnt.url}>{elemnt.title}</a></p>
                })
            }

        </div>

    )

}

