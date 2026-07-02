/* eslint-disable react-hooks/immutability */
// import axios from "axios";   // command for installing axios: npm install axios
// import { useEffect } from "react";

// function Products() {

//     async function fetchData() {
//         let result = await axios.get('http://localhost:8080/print'); // Connectiong spring to react using axios and @croeeOrigin in SPring Boot, here we are fetching the data from the spring boot application and displaying it in the console, we are using axios to fetch the data from the spring boot application, we are using async await to fetch the data from the spring boot application, we are using useEffect hook to fetch the data from the spring boot application when the component is mounted
//         console.log(result.data);
//     }

//     useEffect(() => {
//         fetchData();

//     }, []);

//     return (
//         <>
//             <h1>Products Component</h1>
//         </>
//     );
// }
// export default Products; 

//-----------------------------------------

// getting output in DOM using fake API in useEffect hook in react 

// import { useEffect, useState } from "react"
// import axios from 'axios'
// import List from "./List";
// function Products() {

//     let [products, updateProduct] = useState([]);

//     useEffect(() => {

//         getproduct();

//     }, [])

//     async function getproduct() {
//         let result = await axios.get('https://fakestoreapi.com/products');
//         updateProduct(result.data);
//     }
    
//     if (products.length == 0) {
//         return (
//             <>
//                 <div className="spinner-border" role="status">
//                     <span className="visually-hidden">loading....</span>
//                 </div>
//             </>
//         );
//     } else {

//         return (
//             <>
//                 {

//                     products.map((p) => {
//                         return <List key={p.id} {...p}></List>
//                     })
//                 }

//             </>
//         );
//     }
// }
// export default Products;



// promise : it is a js object that represents the eventual completion (or failure) of an asynchronous operation and its resulting value. A promise is in one of three states: pending, fulfilled, or rejected.
// A promise is a way to handle asynchronous operations in JavaScript, it allows us to write asynchronous code in a more synchronous way, it also allows us to handle errors in a more elegant way. A promise is created using the Promise constructor,
// it takes a function as an argument, this function is called the executor function, it takes two arguments, resolve and reject, resolve is a function that is called when the promise is fulfilled, reject is a function that is called when the promise is rejected.


//----------------------------------------------------------

// 18-05-2026
// Using fake API to get the data and display it in the DOM using useEffect hook in react, we are using axios to fetch the data from the fake API, we are using async await to fetch the data from the fake API, we are using useEffect hook to fetch the data from the fake API when the component is mounted, we are using useState hook to store the data fetched from the fake API, we are using conditional rendering to display a loading spinner while the data is being fetched from the fake API, we are using map function to iterate over the data fetched from the fake API and display it in the DOM using a List component.
// Adding delete Button and printing the data of deleted product in console, we are passing the delete function as a prop to the List component, we are calling the delete function when the delete button is clicked, we are passing the product details as an argument to the delete function, we are printing the product details in the console when the delete button is clicked.

// import { useEffect, useState } from "react";
// import axios from "axios";
// import List from "./List";

// function Products() {

//     let [products, updateProduct] = useState([]);

//     useEffect(() => {

//         getproduct();

//     }, []);

//     async function getproduct() {

//         let result = await axios.get("https://fakestoreapi.com/products");

//         updateProduct(result.data);

//     }

//     // delete function
//     function deleteProduct(product) {

//         console.log("Deleted Product Details");

//         console.log(product);

//     }

//     return (
//         <>
//             {
//                 products.map((p) => {

//                     return (
//                         <List
//                             key={p.id}
//                             {...p}
//                             deleteProduct={deleteProduct}
//                         />
//                     );

//                 })
//             }
//         </>
//     );
// }

// export default Products;

//----------------------------------------------------------
// 19-05-2026
// When we are clicking the delete button ,hides the delete button and display item deleted in the DOM, we are using useState hook to store the state of the delete button, we are using conditional rendering to hide the delete button and display item deleted in the DOM when the delete button is clicked.


// import axios from "axios";
// import { useEffect, useState } from "react";
// import List from "./List";
// function Product() {

//     let [products, updateProducts] = useState([]);

//     useEffect(() => {
//         getProducts();
//     }, []);

//     async function getProducts() 
//     {
//         let result = await axios.get("https://fakestoreapi.com/products");
//         updateProducts(result.data);
//     }

//     async function deleteProduct(id) 
//     {
//         let result =await axios.delete(`https://fakestoreapi.com/products/${id}`);
//         console.log(result.data);
//         let updated = products.map((p) => {
//             if (p.id == id) {
//                 p.deleted = true;
//             }
//             return p;
//         });
//         updateProducts([...updated]);
//     }
//     return (
//         <>
//             {
//                 products.map((p) => {
//                     return (
//                         <List
//                             key={p.id}
//                             {...p}
//                             remove={deleteProduct}
//                         >
//                         </List>
//                     );
//                 })
//             }
//         </>
//     );
// }

// export default Product;


// --------------------------------------------------

// 22-05-2026

// preventDefault() method is used to prevent the default action of an event from being triggered. For example, if we have a form and we want to prevent the form from being submitted when the user clicks the submit button, we can use the preventDefault() method in the onSubmit event handler of the form. This will prevent the form from being submitted and allow us to handle the form submission in our own way, such as sending an AJAX request to the server or updating the state of our component
// write code for get,put,post and delete http requests using axios in react, we are using axios to make http requests to the server, we are using async await to make http requests to the server, we are using useEffect hook to make http requests to the server when the component is mounted, we are using useState hook to store the data fetched from the server, we are using conditional rendering to display a loading spinner while the data is being fetched from the server, we are using map function to iterate over the data fetched from the server and display it in the DOM using a List component.
// we are using axios to make http requests to the server, we are using async await to make http requests to the server, we are using useEffect hook to make http requests to the server when the component is mounted, we are using useState hook to store the data fetched from the server, we are using conditional rendering to display a loading spinner while the data is being fetched from the server, we are using map function to iterate over the data fetched from the server and display it in the DOM using a List component.
// using spring project to perform CRUD operations using axios in react, we are using axios to make http requests to the spring boot application, we are using async await to make http requests to the spring boot application, we are using useEffect hook to make http requests to the spring boot application when the component is mounted, we are using useState hook to store the data fetched from the spring boot application, we are using conditional rendering to display a loading spinner while the data is being fetched from the spring boot application, we are using map function to iterate over the data fetched from the spring boot application and display it in the DOM using a List component.
// create cafeteria project to add,delete,update... ethod in project 

  
// --------------------------------------------------

// Spring Project

import { useEffect, useState } from "react";
import axios from "axios";
import List from "./List";

function Products() {

    const [products, setProducts] = useState([]);

    useEffect(() => {

        getProducts();

    }, []);

    async function getProducts() {

        try {

            let result = await axios.get(
                "http://localhost:8080/institutes/findAll"
            );

            console.log(result.data);

            setProducts(result.data);

        } catch (error) {

            console.log(error);
        }
    }

    return (
        <>
            {
                products.map((product) => (

                    <List
                        key={product.id}
                        {...product}
                    />

                ))
            }
        </>
    );
}

export default Products;
