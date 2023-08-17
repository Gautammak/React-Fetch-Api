// import React, { useState ,useEffect} from 'react';

// const FetchApi = () => {
//    const[records,setRecords] = useState([]);

//     useEffect(() => {
//         fetch('https://jsonplaceholder.typicode.com/users')
//         .then(response => response.json())
//         .then(data => setRecords(data) )
//         .catch(err => console.log(err))

//     },[])

//     return(
//         <div>
//             <div>
//                 {records.map((list , index) => (

//                     <div key = {index}> {list.id} | {list.name} |{list.username} | {list.email}</div>
//                 ))}
//             </div>
//         </div>
//     )
// }

// export default FetchApi;


// import React, { useState ,useEffect} from 'react';
// import axios from 'axios';

// const FetchApi = () => {
//    const[records,setRecords] = useState([]);

//     useEffect(() => {
//         axios.get('https://jsonplaceholder.typicode.com/users')
      
//         .then(res => setRecords(res.data) )
//         .catch(err => console.log(err))

//     },[])

//     return(
//         <div>
//             <div>
//                 {records.map((list , index) => (

//                     <div key = {index}> {list.id} | {list.name} |{list.username} | {list.email}</div>
//                 ))}
//             </div>
//         </div>
//     )
// }

// export default FetchApi;

import React from "react";
import userData from "./Data";

const FetchApi =()=>{
  return(
    <>
    {userData.map((val)=>{
        return(
            <div>{val.id} {val.name} {val.des}</div>
        )
    })}

    
    </>
  )
}

export default FetchApi;

