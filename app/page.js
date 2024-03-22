"use client"
import React, { useState } from 'react'

const page = () => {
  const [time, settime] = useState("")
  const [title, settitle] = useState("")
  const [desc, setdesc] = useState("")

  const [mainTask, setMainTask] = useState([])

  const submitHandler = (e) => {
    e.preventDefault()
    setMainTask([...mainTask, { time, title, desc }])
    console.log(time)
    console.log(title)
    console.log(desc)
    console.log("")
    console.log("")
    console.log("")
    console.log(mainTask)
  };
  const deleteHandler = (i) => {
    let copytask = [...mainTask]
    copytask.splice(i, 1)
    setMainTask(copytask)
  }
  let renderTask = <h2>No Task Available</h2>
  if (mainTask.length > 0) {
    renderTask = mainTask.map((t, i) => {
      return <li key={i} className='mb-3'>
        <div className='flex justify-between mb-5'>
          <h4 className='text-xl font-semibold'>{t.time}</h4>
          <h5 className='text-xl font-semibold'>{t.title}</h5>
          <h6 className='text-lg font-semibold'>{t.desc}</h6>
          <button onClick={()=>{
            deleteHandler(i)
          }}
            className='bg-red-400 text-white px-4 py-2 rounded font-bold'>
            Delete</button>
        </div>
      </li>
    })
  }
  return (
    <>
      <h1 className="bg-black text-white p-5 text-5xl text-center font-bold">Nashra's Todo List</h1>
      <form onSubmit={submitHandler} className='flex justify-center items-center my-5'>
        <input type="text" className="text-2xl border-zinc-800 border-4 m-8"
          placeholder='Enter Time Here'
          value={time}
          onChange={(e) => {
            settime(e.target.value)
          }}
        />
        <input type="text" className="text-2xl border-zinc-800 border-4 m-8"
          placeholder='Enter Title Here'
          value={title}
          onChange={(e) => {
            settitle(e.target.value)
          }}
        />
        <input type="text" className="text-2xl border-zinc-800 border-4 m-8"
          placeholder='Enter Discription Here'
          value={desc}
          onChange={(e) => {
            setdesc(e.target.value)
          }}
        />
        <button className='bg-black text-white px-4 py-3 text-2xl font-bold rounded mx-5'>Add Task</button>
      </form>
      <hr />
      <div className='p-8 bg-slate-200'>
        <ul>
          {renderTask}
        </ul>
      </div>
    </>
  )
}

export default page