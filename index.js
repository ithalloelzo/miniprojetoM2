class CreateUser {
    constructor(id, nametag, age, gender, classtag, contact, adress) {
        this.id = id
        this.name = nametag
        this.age = age
        this.gender = gender
        this.class = classtag
        this.contact = contact
        this.adress = adress
    }
}
let arrayUser = []

const register = document.getElementById("register")
const tab = document.getElementById("tab")

function generateID() {
    return Math.random().toString(36).substr(2, 5);
}

function addUser() {
    const nametag = document.getElementById("name").value
    const adress = document.getElementById("adress").value
    const gender = document.getElementById("gender").value
    const contact = document.getElementById("contact").value
    const age = document.getElementById("age").value
    const classtag = document.getElementById("class").value
    if ((nametag.length || adress.length || gender.length || contact.length || age.length || classtag.length) < 3) {
        alert("Preencha com no mínimo 3 caracteres")

    }
    else if (contact) {
        alert("Preencha o email corretamente")

    }
    else {
        const id = generateID()

        const newUser = new CreateUser(id, nametag, age, gender, classtag, contact, adress)

        arrayUser.push(newUser)

        tab.innerHTML += `
    <tr id="${newUser.id}">  
    <th>${newUser.name}</th>
    <th>${newUser.age}</th>
    <th>${newUser.gender}</th>
    <th>${newUser.class}</th>
    <th>${newUser.contact}</th>
    <th>${newUser.adress}</th>
    <th>
     <button onclick="deleteUser('${newUser.id}')">Excluir</button>
     <button onclick="editUser('${newUser.id}')">Editar</button>
    </th>
    </tr> `
    }

}

function deleteUser(id) {
    const usertag = document.getElementById(id)
    usertag.remove()
    let indexId = arrayUser.findIndex(user => user.id === id)
    arrayUser.splice(indexId, 1)
}

function closeShow() {
    const editDisplay = document.getElementById('editDisplay')
    let setDisplay = editDisplay.style.display == 'none' ? 'flex' : 'none'
    editDisplay.style.display = setDisplay
}


function editUser(id) {
    let buttonEdit = document.getElementsByClassName("buttonEdit")[0]
    buttonEdit.setAttribute("onclick", `updateUser('${id}')`)
    closeShow()
    let indexId = arrayUser.findIndex(user => user.id === id);


    document.getElementById("nameEdit").value = arrayUser[indexId].name
    document.getElementById("ageEdit").value = arrayUser[indexId].age
    document.getElementById("genderEdit").value = arrayUser[indexId].gender
    document.getElementById("classEdit").value = arrayUser[indexId].class
    document.getElementById("contactEdit").value = arrayUser[indexId].contact
    document.getElementById("adressEdit").value = arrayUser[indexId].adress
}

function updateUser(id) {
    const nametag = document.getElementById("nameEdit").value
    const age = document.getElementById("ageEdit").value
    const gender = document.getElementById("genderEdit").value
    const classtag = document.getElementById("classEdit").value
    const contact = document.getElementById("contactEdit").value
    const adress = document.getElementById("adressEdit").value

    const editUser = new CreateUser(id, nametag, age, gender, classtag, contact, adress)

    let indexId = arrayUser.findIndex(user => user.id === id);

    arrayUser[indexId] = editUser
    let userTab = document.getElementById(id)
    let userTabTh = userTab.getElementsByTagName("th")
    userTabTh[0].innerText = editUser.name
    userTabTh[1].innerText = editUser.age
    userTabTh[2].innerText = editUser.gender
    userTabTh[3].innerText = editUser.class
    userTabTh[4].innerText = editUser.contact
    userTabTh[5].innerText = editUser.adress
    closeShow()
}




