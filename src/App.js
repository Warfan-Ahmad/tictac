import React from "react";
import Board from "./components/board";
import "./App.css";
import axios from "axios";

class App extends React.Component{
    render()
    {
        return(
            <div className = "game">
                <div className = "game-info">
                <Board />
                </div>
            </div>
        )
    }
}


// class App extends React.Component{
//     state = {
//         loading : true,
//         data : []
//     }
//     componentDidMount()
//     {
//         axios.get("https://type.fit/api/quotes").then((res)=>{
//             this.setState({loading:false, data : res.data})
//         }).catch((err)=>
//         {
//             console.log("error");
//         })
//     }
//     render(){
//         if(this.state.loading)
//             return(<h1>Loading</h1>)
//         else
//             return this.state.data.map((data) =>
//                 {
//                     return <div>{data.text} by {data.author} </div> 
//                 })
//     }
// }

export default App;