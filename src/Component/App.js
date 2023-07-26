import axios from "axios"
import { useState } from "react"

function App (){

    const[photos, setPhotos] = useState([]);
    const getAllPhotos =() =>{
        axios.get("https://jsonplaceholder.typicode.com/posts").then((response) =>{setPhotos(response.data)
    } )
    }
    return <div>
<button onClick={getAllPhotos}>Get data</button>
        {
        photos.map((photo, index) =>(
            <div className="item-parent">
            <div className="item">
           <h3>{photo.title}</h3>
           <p>{photo.body}</p>
            </div>
           </div>
        ))
       

 }
    </div>
}

export default App;