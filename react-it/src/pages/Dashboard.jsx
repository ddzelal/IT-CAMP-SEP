import React, { useEffect, useState } from 'react'

export const Dashboard = () => {

  const [data, setData] = useState({})
  const [number, setNumber] = useState(77)


  const getSomething =()=>{
    fetch(`https://api.vaktija.ba/vaktija/v1/${number}`)
    .then(response => response.json())
    .then(json => {
      setData(json)
      return json
    })
  }
  const [tasks, setTasks] = useState([])
  const [inputValue, setInputValue] = useState('')



  const addTask = () => {
    setTasks([...tasks, inputValue])
    setInputValue('')
  }

  const handleChangeNumber = () =>{
    setNumber(inputValue)
    setInputValue('')
  }
  const deleteLastTask = () => {
    const newTasks = [...tasks]
    newTasks.pop()
    setTasks(newTasks)
  }

  useEffect(()=>{
    console.log("ja se pozivoam samo..");
    getSomething()
  },[number])

  return (
    <div>
      {
    <span>{data?.lokacija}</span>
      }
      {
        data?.vakat?.map((el)=>{
          return <span>{el}</span>
        })
      }
    <input onChange={(event)=>{setInputValue(event.target.value)}} value={inputValue}  type='text'/>
    <button onClick={addTask}>Da posaljemo!</button> 
    <button onClick={deleteLastTask}>Da obrisemo poseldnji</button>
    <button onClick={getSomething}>Daj mi vreme za namaz...</button>
    <button onClick={handleChangeNumber}>Daj mi drzavau sa id {number}</button>
    <ul>
      {tasks.map((el,index)=>{
        return <li key={index}>{el}</li>
      })}
    </ul>
    </div>
  )
}
