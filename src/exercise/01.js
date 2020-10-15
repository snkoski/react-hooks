// useState: greeting
// http://localhost:3000/isolated/exercise/01.js

import React from 'react'

function Greeting({initialName = ''}) {
  // 💣 delete this variable declaration and replace it with a React.useState call
  const [name, setName] = React.useState(initialName)

  function handleChange(event) {
    // 🐨 update the name here based on event.target.value
    const {value} = event.target
    setName(value)
  }

  return (
    <div>
      <form>
        <label htmlFor="name">Name: </label>
        <input onChange={handleChange} id="name" value={name}/>
      </form>
      {name ? <strong>Hello {name}</strong> : <strong>Hello {initialName}</strong>}
    </div>
  )
}

function App() {
  return <Greeting initialName={"Kody"}/>
}

export default App
