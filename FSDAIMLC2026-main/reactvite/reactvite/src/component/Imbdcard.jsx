import React from 'react'
import pic from '../images/istockphoto-814423752-612x612.jpg'
function ImdbCard() {
  const movies = [
    { id: 1, name: "Superman" },
    { id: 2, name: "Weapons" },
    { id: 3, name: "Sinners" },
    { id: 4, name: "One Battle After Another" },
    { id: 5, name: "Jurassic World: Rebirth" },
    { id: 6, name: "Frankenstein" },
    { id: 7, name: "Happy Gilmore 2" },
    { id: 8, name: "Thunderbolts" },
    { id: 9, name: "Mission Impossible - The Final Reckoning" },
    { id: 10, name: "F1" }
  ]
  return (
    <>

      <div style={{ marginLeft: '20px' }}>{/*first*/}

        <div style={{ display: 'flex', flexDirection: 'row' }}>
          <div><h1><b>IMDb</b></h1></div>
          <div style={{ display: 'flex', flexDirection: 'column', marginLeft: '20px', gap: '10px' }}>
            <div style={{ display: 'inline' }}><h3 style={{ backgroundColor: 'yellow', color: 'blue', margin: '10px 0 2px 0', borderRadius: '10px' }}>BEST OF</h3></div>
            <div ><h2 style={{ margin: '-20px 0 0 0', fontSize: '45px' }}>2025</h2></div>
          </div>
        </div>
        <h1 style={{ textAlign: 'left', color: 'pink', margin: '0' }}><b>MOST POPULAR MOVIES</b></h1>
        <h3 style={{ textAlign: 'left', color: 'white' }}>AS OF 12/2/25</h3>

      </div>

      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', margin: '15px', gap: '10px' }}>{/*Second*/}

        {movies.map((movie) => (
          <div style={{ display: 'flex', flexDirection: 'row', width: '320px', border: '1px solid white' }}>
            <img src={pic} height="150px" width="150px" style={{ borderRadius: '50%' }} />
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <h1 style={{ color: 'pink', margin: '10px', textAlign: 'left' }}>
                {movie.id}
              </h1>
              <h2 style={{ color: 'white', textAlign: 'left', margin: '2px 0 0 15px' }}>
                <b>{movie.name}</b>
              </h2>
            </div>
          </div>
        ))}

      </div>

    </>
  )
}
export default ImdbCard  