import React from 'react';
import cat from '../images/cat.jpg';

function Imagemanipulation() {

    const[catheight,setCatHeight]=useState(200);
    const [catwidth, setCatWidth] = useState(200);
    function setHeight(){
        setCatHeight(catheight+10);
}
    function setWidth() { 
    setCatWidth(catwidth + 10);
 }
  return (
    <div>
      <h2 style={{ color: 'red', backgroundColor: 'black' }}> Image Manipulation</h2>

      <div style={{border: '2px solid red', height: '400px', width: '400px', marginLeft: '10px', }}>
        <img src={cat} height={catheight} width={catwidth} />
      </div>
      <button onClick={setHeight}>Enhance Height</button>
      <button onClick={setWidth}>Enhance Width</button>
    </div>
  );
}

export default Imagemanipulation;