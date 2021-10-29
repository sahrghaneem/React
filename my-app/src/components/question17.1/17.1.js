import React from "react";
import axios from "axios";

export const Users = () => {
    const [userscountry, setUsersCountry] = React.useState([]);
    const [name, setName] = React.useState('');
    const [country, setCountry] = React.useState('');
    const [age, setUserAge] = React.useState('');

    React.useEffect(() => {
        axios.get('https://6177fde09c328300175f5d06.mockapi.io/Users')
            .then((use) => {
                console.log(use);
                setUsersCountry(use.data)
            })
    }, []
    
)
    

    const DataUser=(e)=>{
        if(e.target.name === 'name'){
            setName(e.target.value)
        }else
        if(e.target.name === 'country'){
            setCountry(e.target.value)
        }else
        if(e.target.name === 'age'){
            setUserAge(e.target.value)
        }
    }
    const addUserHandler = async () => {
        let data = {
            name: name,
            country: country,
            age: age
        }
        const userdatat = await axios.post('https://6177fde09c328300175f5d06.mockapi.io/Users/', data)
        console.log("post :", userdatat)
        let newData = userdatat.data
        const dataList = [...userscountry];
        dataList.push(newData)
        setUsersCountry(userscountry)
        setName('');
        setUserAge('');
        setCountry('');
    }

    const deleteHandler = async (id) => {
    const deleteUser = await axios.delete('https://6177fde09c328300175f5d06.mockapi.io/Users/' + id)
    if (deleteUser.status === 200) {
        const dataList = [...userscountry];
        let resultOfNonDeleted = dataList.filter((coun) => {
            return coun.id !== id
        })
        setUsersCountry(resultOfNonDeleted)
    }
}


    return (
        <div>
                <input type={'button'} value={'add'} onClick={() => { addUserHandler()}} />
                <input type={'text'} value={name} name={'name'} placeholder={'name'} onChange={DataUser} />
                <input type={'text'} value={country} name={'country'} placeholder={'country'} onChange={DataUser}/>
                <input type={'text'} value={age} name={'age'} placeholder={'age'} onChange={DataUser}/>
            {
             userscountry ? userscountry.map((UC) => {
                return <div key={UC.id}> 
            <img alt='rawnk' src={UC.avatar}></img>
            <span>{UC.name}</span>
            <span>{UC.country}</span>
            <span>{UC.age}</span>

            <input type={'button'} value={'delete'} onClick={() => { deleteHandler(UC.id)}} />
            <input type={'button'} value={'update'}/></div>
                         }) : "loading"
           }
           </div>
          )
 }
