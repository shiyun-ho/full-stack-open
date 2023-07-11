const Hello = (props) => {
  return (
    <div>
      <p>Hello {props.name}. You are {props.age} years old. </p>
    </div>
  )
}

//defines a React component 'App' 
const App = () => {
  // const now = new Date()
  // const a = 10
  // const b = 20
  // console.log(now, a+b)

  const name = 'Peter'
  const age = 10

  return (
    <div>
      <h1>Greetings</h1>
      <Hello />
      <Hello name='Maya' age = {26+30}/>
      <Hello name={name} age={age} />
      <Hello />

    </div>
    // <div>
    //   <p>Hello World! It is {now.toString()}</p>
    //   <p>
    //     {a} + {b} = {a+b}
    //   </p>
    // </div>
  )
}

export default App
