import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Todo from './Todo'
import Actor from './Actor'
import Singer from './Singer'

function App() {
  let actors = ['Jasim Babu', 'Ashikujjaman Vondo', 'Salman Khan', 'Dipika Pardu']
  let singers = [
    { id: "1", name: "Hemonto Mukhopaddhai", age: 60 },
    { id: "2", name: "Arijit Sing", age: 45 },
    { id: "3", name: "Runa Lila", age: 50 },
    { id: "4", name: "Tahsan Khan", age: 48 },
    { id: "5", name: "Eva Rahman", age: 28 }
  ]
  return (
    <>
      <h1>This is our first React Website</h1>
      <Actor name="Alomgir Kabir"></Actor>
      {
        actors.map(actor => <Actor name={actor}></Actor>)
      }
      <hr />
      <Todo task="Learn React" isDone={true}></Todo>
      <Todo task="Write React Code Perfectly" isDone={false}></Todo>
      <Todo task="Try jsx" isDone={true}></Todo>

      <Persion />
      <Student grade="7" score="99"> </Student>
      <Student grade={12} score="1000"> </Student >
      <Student > </Student>
      <Developer> </Developer>
      {
        singers.map(singer => <Singer singer={singer}></Singer>)
      }
      <Device name="Laptop" price="55000"></Device>
      <Device name="Xiaomi Phone" price="20000"></Device>
      <Device name="Watch" price='2000' />
      <Device></Device>
    </>
  )
}

function Device(props) {
  return <h2>This is a Device. Name: {props.name} and Price: {props.price}</h2>
}

function Persion() {
  const age = 30;
  const name = "Masfiqur Nehal"
  return (
    <>
      <h2>This is the second Line</h2>
      <h3>I am a persion. My name is: {name} and my age is: {age}</h3>
    </>
  )
}

function Student({ grade = 1, score = 0 }) {
  return (
    <div className='student'>
      <h3>This is a Student.</h3>
      <p>Grade: {grade}</p>
      <p>Score: {score}</p>
    </div>
  )
}

function Developer() {
  const developerStyle = {
    margin: '20px',
    padding: '20px',
    border: '2px solid purple',
    borderRadius: "20px"
  }
  return (
    <div style={developerStyle}>
      <h5>Devoloper sdfds Developer</h5>
    </div>
  )
}

export default App
