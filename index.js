const nametag = document.getElementById("name").value
const adress = document.getElementById("adress").value
const gender = document.getElementById("gender").value
const contact = document.getElementById("contact").value
const age = document.getElementById("age").value
const classtag = document.getElementById("class").value
const register = document.getElementById("register")
const tab = document.getElementById("tab")


function addUser(){

    tab.innerHTML = `
    <tr>  
    <th>${nametag}</th>
    <th>${age}</th>
    <th>${gender}</th>
    <th>${classtag}</th>
    <th>${contact}</th>
    <th>${adress}</th>
    </tr> `
    
}


