import { useState } from "react";

const TODOLIST=()=>{
    const [tasks,setTasks]=useState([])
    const [inputs,setTaksInput]=useState("");
    const add=()=>{
       if(inputs){
        setTasks([...tasks,inputs])
        setTaksInput("")
       }
    }
    const deleteAll=()=>{
        setTasks([]);
    }
    const deleteis=(deleteIndex)=>{
        const filtersdata=tasks.filter((val,index)=> index !==deleteIndex)
        setTasks(filtersdata);

    }
    return(
        <>
        <input type="text" placeholder="add to task" value={inputs} onChange={(data)=>setTaksInput(data.target.value)} />
        <button onClick={add}>add to task</button>
        {
            tasks.length>0 &&(
                <button onClick={deleteAll}>delete All Tasks</button>
            )
        }
        {
            tasks.map((val,index)=>{
                return(
                    <div>
                        <h1>{val}</h1>
                        <button onClick={()=>{deleteis(index)}}>delete</button>
                    </div>
                )

            })
        }


        </>
    )

}
export default TODOLIST;