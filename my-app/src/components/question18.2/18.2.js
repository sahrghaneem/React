import React from 'react';

export const ToDo = ()=>{
    const [todolist,setToDoList]=React.useState(
       [
            { name: "CSS", completed: true },
            { name: "JavaScript", completed: true },
            { name: "Learn React", completed: false },
            { name: "Learn mongoDB", completed: false },
            { name: "Learn Node JS", completed: false },
            ]
)

const Clicklist=(todoname)=>{
    const newlist=[...todolist];
    const list=newlist.find((elemnt)=>elemnt.name===todoname);
    list.completed=!list.completed;
    setToDoList(newlist);
};


    return <div>
        <h1>ToDo List</h1>
        {todolist.map((value)=>{
            return<div>
            <h2 style={{textDecoration :value.completed ? "line-through" : " "}}>{value.name}</h2>
            <span key={value.name} onClick={()=> Clicklist (value.name) }>{value.completed ? "yes" : "no"}</span>
            </div>})}
        </div>
}

