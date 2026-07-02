// 18-05 and  19-05-2026

// getting output in DOM using fake API in useEffect hook in react
// Object destructuring in List component
// Adding Delete button and printing the data of deleted product in console
// function List({id,title,category,description,image,price,rating,deleteProduct}) {

//     return (
//         <>
//             {id} <br />
//             {title} <br />
//             {category} <br />
//             {description} <br />

//             <img src={image} width={150} height={150} />
//             <br />

//             {price} <br />
//             {rating.rate} <br /><br />

//             <button
//                 onClick={() =>
//                     deleteProduct({id,title,category,description,image,price,rating,deleteProduct})
//                 }
//             >
//                 Delete
//             </button>

//             <hr />
//         </>
//     );
// }

// export default List;


//----------------------------------

// Spring Project


import axios from "axios";

function List(props) {
    // deleting an item from the list using axios and printing the deleted item in console
    async function deleteItem() {

        try {

            await axios.delete(
                `http://localhost:8080/institutes/delete/${props.id}`
            );

            alert("Deleted Successfully");

            window.location.reload();

        } catch (error) {

            console.log(error);
        }
    }

    // getting the details of an item using axios and printing it in console

    async function getItem() {
        try {

            const response = await axios.get(
                `http://localhost:8080/institutes/get/${props.id}`
            );
            console.log(response.data);

        } catch (error) {

            console.log(error);
        }   
    }   

    // Posting the details of an item using axios and printing it in console

    //  async function postItem() {
    //     try {   
    //         const response = await axios.post(
    //             "http://localhost:8080/institutes/save",
    //             {
    //                 faculty: props.faculty, 
    //                 name: props.name,
    //                 location: props.location,
    //                 fee: props.fee,
    //                 address: props.address
    //             }
    //         );
    //         console.log(response.data);
    //     } catch (error) {
    //         console.log(error);
    //     }   
    // }

    return (
        <>
            <h3>Institute Details</h3>

            ID : {props.id} <br/>
            Faculty : {props.faculty} <br/>
            Name : {props.name} <br/>
            Location : {props.location} <br/>
            Fee : {props.fee} <br/>
            Address : {props.address} <br/>

            <br/>

            <button onClick={deleteItem}>Delete</button>
            <button onClick={getItem}>Get Details</button>
            {/* <button onClick={postItem}>Post Details</button> */}
            <hr/>
        </>
    );
}

export default List;

