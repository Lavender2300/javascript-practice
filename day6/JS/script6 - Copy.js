const displayArea =
document.getElementById("body")

const myButton = 
document.createElement("button");

myButton.innerText = "submit";
displayArea.appendChild(myButton);

function retrieveAnimals(){
    fetch ('https://cat-fact.herokuapp.com/facts/random?animal_type=cat&amount=3').then(res => res.json ()) .then(data => data.map(d => console.log(d.text)));
    }
retrieveAnimals();
