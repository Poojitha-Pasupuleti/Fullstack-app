// // import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
// //import heroImg from './assets/hero.png'
// import './App.css'
// import About from './About';      // default import
// import Home from './Home';
// import Calculator from './Calculator';

// 07-05-2026

// Passsing child data to parent component using props

// function App() {
//   // const [count, setCount] = useState(0)

//   //var a = 100;   // global variable

//   var name = "Deepu"; 
//   var course = "React"; 

//   //function add(a, b)           //function declaration
//   //{
//     //console.log(a + b);
//   //}

//   // return (

//   //   <>

//   //     <div>
//   //       <p>Hi</p>
//   //     </div>

//   //     <p className="Counter">Hello</p>

//   //     <img src={heroImg} alt="Hero" />
//   //     <br />
//   //     <label htmlFor="text"> Subscribe </label>
//   //     <input type="checkbox" id="test" />

//   //     {a}
//   //     <br />
//   //     {add(10, 10)}
//   //     <br />
//   //     {console.log("Hello")}
//   //     <br />
//   //     {alert("Stay Safe")}


//   //     <About name={name} course={course} />

//   //     <Home name={name} course={course} />


//   //   </>
//   // );


  
//     // React Events 
 
//   function clickHandler() {
//     alert("Button Clicked");
//   }

//   return (
//     <>
//       <h1>React Events</h1>

//       <button onClick={clickHandler}>
//         Click Me
//       </button>
//       <About name={name} course={course} />

//        <Home name={name} course={course} />

//     </>
//   );
// }
// export default App

//----------------------------------------------------------------------------

// // 08-05-2026

// // Passsing child data to parent component using props

// // inserting images in react
// function App() {

//   function receiveData(data) {
//     alert(data);
//   }


//   // Internal CSS in React
//   // var styleObj = {      
//   //   color: 'Green',
//   //   fontSize: '50px'
//   // }

//   var islogged = false;
//   // Using bootstrap spinner component from browser CDN
//   return (
//     <>
//       {/* Conditional rendering in react using ternary operator */}
    
//       {(islogged) ?  <p>Home</p>  :  <p>About</p>} {/* Conditional rendering in react using ternary operator */}

//       {/* // Styleing in react using inline CSS */}
//       <h1 style={{ color: 'Red', fontSize: '50px' }}>Passing data from child to parent component</h1>
//       {/* <h1 style={styleObj}>Welcome to React</h1>    */}
//       <About name="Deepu" course="React" sendData={receiveData} />  {/* passing data from parent to child component using props */}
//       <Home name="Deepu" course="React" sendData={receiveData} />
//       <img src={'virat.png'} alt="Virat Kohli" /> {/* inserting images in react */}

//       <div class="spinner-border text-primary" role="status">
//         <span class="visually-hidden">Loading...</span>
//       </div>
//       <div class="spinner-border text-secondary" role="status">
//         <span class="visually-hidden">Loading...</span>
//       </div>
//       <div class="spinner-border text-success" role="status">
//         <span class="visually-hidden">Loading...</span>
//       </div>
//       <div class="spinner-border text-danger" role="status">
//         <span class="visually-hidden">Loading...</span>
//       </div>
//       <div class="spinner-border text-warning" role="status">
//         <span class="visually-hidden">Loading...</span>
//       </div>
//       <div class="spinner-border text-info" role="status">
//         <span class="visually-hidden">Loading...</span>
//       </div>
//       <div class="spinner-border text-light" role="status">
//         <span class="visually-hidden">Loading...</span>
//       </div>
//       <div class="spinner-border text-dark" role="status">
//         <span class="visually-hidden">Loading...</span>
//       </div>

  
//     </>
//   );
// }
// <Calculator/>

// export default App







// 11-05-2026

// routing in react using react-router-dom package

// import React from "react";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import Home from "./Home";
// import About from "./About";
// import Page from "./Page";
// import Contact from "./Contact";

// function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/about" element={<About />} />
//         <Route path="/home" element={<Home />} />
//         <Route path="/contact" element={<Contact />} />
//         <Route path="*" element={<Page />} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;


// Routing by using Link component from react-router-dom package and sliding images in react by using react-slick package

//// eslint-disable-next-line no-unused-vars
// import React from "react";
// import { BrowserRouter, Routes, Route} from "react-router-dom";
// import Home from "./Home";
// import About from "./About";
// import Page from "./Page";
// import Contact from "./Contact";
// import Menu from "./Menu";
// import Slider from "./Slider";

// function App() {
//   return (
//     <BrowserRouter>
//     <Menu/>
//     <Slider/>
//       <Routes>
//         <Route path="/about" element={<About />} />
//         <Route path="/home" element={<Home />} />
//         <Route path="/contact" element={<Contact />} />
//         <Route path="*" element={<Page />} />
//       </Routes>
//     </BrowserRouter>
    

//   );
// }

// export default App;

// Calculator App
// //eslint-disable-next-line no-unused-vars
// import React from "react";
// import Calculator from "./Calculator";

// function App() {
//   return (
//     <div>
//       <h1>Simple Calculator</h1>
//       <Calculator />
//     </div>
//   );
// }
// export default App;



// 14-05-2026

// to get value of root element in react   // to get value of query params in react
// // eslint-disable-next-line no-unused-vars
// import React from "react";
// import { BrowserRouter, Routes, Route} from "react-router-dom";
// import Home from "./Home";
// import About from "./About";
// import Page from "./Page";
// import Contact from "./Contact";
// import Menu from "./Menu";
// import Slider from "./Slider";

// function App() {
//   return (
//     <BrowserRouter>
//     <Menu/>
//     <Slider/>
//       <Routes>
//         <Route path="/about/:id" element={<About />} />
//         <Route path="/home" element={<Home />} />
//         <Route path="/contact/" element={<Contact />} />
//         <Route path="*" element={<Page />} />
//       </Routes>
//     </BrowserRouter>
    

//   );
// }

// export default App;

//--------------------------------------------
// subrooting using outlet component from react-router-dom package
// //eslint-disable-next-line no-unused-vars
// import React from "react";
// import { BrowserRouter, Routes, Route} from "react-router-dom";
// import Home from "./Home";
// import About from "./About";
// import Page from "./Page";
// import Contact from "./Contact";
// import Menu from "./Menu";
// import Slider from "./Slider";
// import Princy from "./Princy";
// import Pooja from "./Pooja";

// function App() {
//   return (
//     <BrowserRouter>
//     <Menu/>
//     <Slider/>
//       <Routes>
//         <Route path="/about/:id" element={<About />} />              
//         <Route path="/home" element={<Home />} />

//         <Route path="/contact/" element={<Contact />} >  // subrouting 
//           <Route path = "princy" element={<Princy/>} />
//           <Route path = "pooja" element={<Pooja/>} />
//         </Route>

//         <Route path="*" element={<Page />} />
//       </Routes>
//     </BrowserRouter>
    
//   );
// }

// export default App;


//----------------------------------

// 1.useState hook in react 
// 2. state in class component in react
// 3. useEffect hook in react 
//// eslint-disable-next-line no-unused-vars
// import React from "react";
// import { BrowserRouter, Routes, Route} from "react-router-dom"; 
// import Home from "./Home";
// import About from "./About";
// import Page from "./Page";
// import Contact from "./Contact";
// // import Menu from "./Menu";
// // import Slider from "./Slider";
// import Princy from "./Princy";
// import Pooja from "./Pooja";
// import UseState from "./UseStste";  // useState is a hook which is used to manage the state of a component in DOM, it returns an array of two values, first value is the state variable and second value is the function to update the state variable
// import StateClassComponent from "./StateClassComponent";  // state in class component is an object which contains the state of the component, it is used to re-render the component when the state changes
// import UseEffect from "./UseEffect";  // useEffect is a hook which is used to perform side effects in a component, it is called after the component is rendered, it takes two arguments, first argument is a function which contains the side effect and second argument is an array of dependencies which tells the useEffect when to run the side effect

// function App() {
//   return (
//     <BrowserRouter>
//     {/* <Menu/>
//     <Slider/> */}
//       <Routes>
//         <Route path="/about" element={<About />} />              
//         <Route path="/home" element={<Home />} />
//         <Route path ="/usestate" element={<UseState/>} /> 
//         <Route path ="/state" element={<StateClassComponent/>} /> 
//         <Route path = "/useeffect" element={<UseEffect/>} />

//         <Route path="/contact/" element={<Contact />} >
//           <Route path = "princy" element={<Princy/>} />
//           <Route path = "pooja" element={<Pooja/>} />
//         </Route>

//         <Route path="*" element={<Page />} />
//       </Routes>
//     </BrowserRouter>
    
//   );
// }

// export default App;

 
//-------------------------------------------------------

// 18-05-2026

// API calls in react using fetch method and useEffect hook

// // eslint-disable-next-line no-unused-vars 
// import React from "react";
// import { BrowserRouter, Routes, Route} from "react-router-dom";
// import Home from "./Home";
// import About from "./About";
// import Page from "./Page";
// import Contact from "./Contact";
// // import Menu from "./Menu";
// // import Slider from "./Slider";
// import Princy from "./Princy";
// import Pooja from "./Pooja";
// import UseState from "./UseStste";  // useState is a hook which is used to manage the state of a component in DOM, it returns an array of two values, first value is the state variable and second value is the function to update the state variable
// import StateClassComponent from "./StateClassComponent";  // state in class component is an object which contains the state of the component, it is used to re-render the component when the state changes
// import UseEffect from "./UseEffect";  // useEffect is a hook which is used to perform side effects in a component, it is called after the component is rendered, it takes two arguments, first argument is a function which contains the side effect and second argument is an array of dependencies which tells the useEffect when to run the side effect
// import Products from "./Products";

// function App() {
//   return (
//     <BrowserRouter>
//     {/* <Menu/> */}
//     {/* <Slider/>  */}
//       <Routes>
//         <Route path="/about" element={<About />} />
//         <Route path="/home" element={<Home />} />

//         <Route path ="/usestate" element={<UseState/>} />
//         <Route path ="/state" element={<StateClassComponent/>} />
//         <Route path = "/useeffect" element={<UseEffect/>} />
//         <Route path = "/products" element={<Products/>} /> 
        
//         <Route path="/contact" element={<Contact />} >
//           <Route path = "princy" element={<Princy/>} />
//           <Route path = "pooja" element={<Pooja/>} />
//         </Route>

//         <Route path="*" element={<Page />} />
//       </Routes>
//     </BrowserRouter>
    
//   );
// }

// export default App;


// ----------------------------------------------------

//  Spring Project

//eslint-disable-next-line no-unused-vars 
import React from "react";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Page from "./Page";
import Contact from "./Contact";
import Menu from "./Menu";
import Slider from "./Slider";
import Princy from "./Princy";
import Pooja from "./Pooja";
// import useState from "./useState";  // useState is a hook which is used to manage the state of a component in DOM, it returns an array of two values, first value is the state variable and second value is the function to update the state variable
import StateClassComponent from "./StateClassComponent";  // state in class component is an object which contains the state of the component, it is used to re-render the component when the state changes
import UseEffect from "./UseEffect";  // useEffect is a hook which is used to perform side effects in a component, it is called after the component is rendered, it takes two arguments, first argument is a function which contains the side effect and second argument is an array of dependencies which tells the useEffect when to run the side effect
import Products from "./Products";
import { useState } from "react";
import InstituteForm from "./InstituteForm";

function App() 
{
  const [openForm, setOpenForm] = useState(false);

function showForm()
{
  setOpenForm(true);
}

  return (
    <>
    <BrowserRouter>
      <div className = "wrapper m-5 w-50">
        <h2 className='text -center text-primary'>CRUD operations using react js</h2>
        <button className = 'btn btn-primary float-end' onClick={() => showForm()}>Add Institute</button>
        <br/><br/>
    

    { 
      openForm && <InstituteForm/>
    }

    <br/>

    </div>
    {/* <Menu/> */}
    {/* <Slider/>  */}
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/home" element={<Home />} />
        <Route path="/slider" element={<Slider/>} />
        <Route path="/menu" element={<Menu/>} />

        <Route path ="/usestate" element={<useState/>} />
        <Route path ="/state" element={<StateClassComponent/>} />
        <Route path = "/useeffect" element={<UseEffect/>} />
        <Route path = "/products" element={<Products/>} /> 
      
        <Route path="/contact" element={<Contact />} > 
          <Route path = "princy" element={<Princy/>} />
          <Route path = "pooja" element={<Pooja/>} />
        </Route>

        <Route path="*" element={<Page />} />
      </Routes>
    </BrowserRouter>
    </>
  )
};

export default App;
