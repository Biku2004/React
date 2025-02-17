// import { data } from "autoprefixer"
// import { useState } from "react"
// import { useEffect } from "react"
// import { githubInfoLoader } from "./GitInfoLoader";

import { useLoaderData } from "react-router-dom";

function Github() {
    const data = useLoaderData();

    // Fetching type - 1 : 
    /*
    const [data,setData] = useState([]);

    useEffect(() => {
        fetch("https://api.github.com/users/hiteshchoudhary")
            .then(response => response.json())
            .then(
                data => {
                    console.log(data);
                    setData(data);
                }
            )
    }, [])
    
    */
  return (

    <div className="bg-gray-600 p-4 text-white text-2xl"> Github : {data.followers}
        <img src={data.avatar_url} alt="Git Picture" width={200}></img>
    </div>
  )
}

export default Github

// Finding the Data - 2
// export const githubInfoLoader = async() => {
//     const response = await fetch("https://api.github.com/users/hiteshchoudhary");
//     return response.json();
// }