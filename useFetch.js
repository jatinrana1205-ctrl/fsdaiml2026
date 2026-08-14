const div =document.getElementById('container')
const button = document.getElementById('btn');
console.log(div);
async function display(){
//div.innerHTML= '<h2>Hello Using DOM</h2>';
const serverdata= await fetch('https://fakestoreapi.com/products');
const jsondata= await serverdata.json();
console.log(jsondata[0].title);
}
button.addEventListener('click',display);