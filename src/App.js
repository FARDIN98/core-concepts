import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
const nayoks = ['Anwar', 'Jovan', 'Alomgir', 'Salman', 'Nisho', 'Apurbo']
const products = [
  {name : "Photoshop", price: "$90.99"},
  {name : "Illustrator" ,price : "$60.99"},
  {name : "PDF Reader", price : "$6.99"},
  {name : "After Effects", price : "$10.99"}
]
/*
Using Map
const nayokNames = nayoks.map(nayok => nayok)
console.log(nayokNames)
const productNames = products.map(product => product)
console.log(productNames)
*/
  // var person = {
  //   name : "Dr.Mahfuz",
  //   job : "Singer"
  // }
  // var person2 = {
  //   name : "Fardin Ahmed",
  //   job : "Web developer" 
  // }
  // var style = {
  //   color:'red',
  //   backgroundColor:'yellow'
  // }
  return (
    <div className="App">
      <header className="App-header">
        <p>My first react paragraph</p>
        <Counter></Counter>
        <Users></Users>
        <ul>
        {
          nayoks.map(nayok => <li>{nayok}</li>)
        }
        {
          products.map(product => <li>{product.name + " " + "Price " + product.price}</li>)
        }
          {/* <li>{nayoks[0]}</li>
          <li>{nayoks[1]}</li>
          <li>{nayoks[2]}</li>
          <li>{nayoks[3]}</li> */}
        </ul>
        {
          products.map(pd => <Product product = {pd}></Product>)
        }
        <Product product = {products[0]}></Product>
        <Product product = {products[1]}></Product>
        <Person name = {nayoks[0]} nayika = "Moushumi"></Person>
        <Person name = "Jasim" nayika = "Shabana"></Person>
        <Person name = "Bapparaj" nayika = "Cheka"></Person>
        <Person name = "Elias k" nayika = "Bobita"></Person>
        {/* <h1 className="" style={style}>My heading: {person.name + " " + person.job}</h1>
        <h3 style={{backgroundColor:"salmon", color:"yellow"}}>Name & Status : {person2.job + " " + person2.name}</h3> */}
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
const Counter = () => {
  const [count,setCount] = useState(0)
  const handleIncrease = () => setCount(count + 1)
  const handleDecrease = () => {
    if(count > 0){
      setCount(count - 1)
    }
  }
  return (
    <div>
      <h1>Count:{count}</h1>
      <button onMouseMove={handleIncrease}>Increase</button>
      <button onMouseMove={handleDecrease}>Decrease</button>
    </div>
  )
}

const Users = () => {
  const [todos,setTodos] = useState([])
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
    .then(res => res.json())
    .then(data => setTodos(data))
  })
  return (
    <div>
      <h3>Dynamic User:{todos.length}</h3>
      <ul>
        {
          todos.map(list => <li>{list.id}</li>)
        }
        {
          todos.map(list => <li>{list.title}</li>)
        }
      </ul>
    </div>
  )
}

function Product(props){
  const productStyle ={
    border : "1px solid gray",
    borderRadius : "5px",
    backgroundColor : "lightgray",
    height : "200px",
    width : "400px",
    float : "left",
    color : "black"
  }
  // Destructure
  const {name,price} = props.product
  return (
    <div style = {productStyle}>
        <h3>Name: {name}</h3>
        <h5>Price: {price}</h5>
        <button>Buy now</button>
    </div>
  )
}

function Person(props){
  const personStyle = {
    border:"2px solid red",
    margin:"10px"
  }
  return (
    <div style={personStyle}> 
      <h1>Name : {props.name + " " + props.nayika}</h1>
      <h3>Hero of : {props.nayika}</h3>
    </div>
  )
}
export default App;
