import React from 'react'

function ICard(props) {
   
  return (
    <div style ={{border:'10px solid black',width:'200px',height:'300px',backgroundcolor:'white'}}>
        <h2 style={{backgroundColor:'brown',color:'white'}}>ABES Engineering College</h2>
        <img src= {props.pic} height={200} width ={200}></img>
      <h3>Roll: {props.roll}</h3>
      <h3>Name:{props.name}</h3>
      <h3>Branch:{props.branch}</h3>
     {/* <h2 style={{color:'red'}}>Welcome to React using Vite</h2> */}
     

    </div>
  )
}

export default ICard 