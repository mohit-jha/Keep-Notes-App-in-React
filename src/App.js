import React, { useState } from 'react'
import Header from './Header'
import CreateNotes from './CreateNote'
import Footer from './Footer'
import CreateNote from './CreateNote'
import Notes from './Notes'
export default function App() {
  const [data, setdata] = useState([])
  const handlePassNote = (text) => {
    setdata((prevData) => {
      return [...prevData, text]
    
    })
  }
  const handleOnSelect = (id)=>{
     setdata((prevData)=>{
      return prevData.filter((value,indexOFValue)=>{
        return indexOFValue != id
      })
    })
  }
  return (
    <>
      <Header />
      <CreateNotes passNote={handlePassNote} />
      {
        data.map((arr, index) => {
          return (
            <Notes 
            key={index}
            id={index}
            title={arr.title}
            content={arr.content}
            onSelect={handleOnSelect}
            />
          )
        })
      }
      <Footer />
    </>
  )
}
