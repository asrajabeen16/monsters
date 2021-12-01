import CardTemplet from "./CardTemplet";
import React, { useState , useEffect } from "react";

function CardData(){
    const[fetchData, setFetchData] = useState([])
    // const[query, setQuery] = useState();
   
    useEffect(() => {
            fetch("https://jsonplaceholder.typicode.com/users")
            .then(res => {
                return res.json();
            })
            .then(data => {
                setFetchData(data);
            });
       
    },[]);

   

    return(
        <div>
           <div className="search-feild">
           {/* <input type="text" placeholder="Search Monster" onChange={e => setQuery(e.target.value)}/> */}
           </div>
            {fetchData && <CardTemplet data = {fetchData}/>}
        </div>
      
    );
}

export default CardData;