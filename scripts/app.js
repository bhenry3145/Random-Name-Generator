let firstName = document.getElementById("firstName");
let lastName = document.getElementById("lastName");
let codestackEmail = document.getElementById("codestackEmail");
let regularEmail = document.getElementById("regularEmail");
let randomStudent = document.getElementById("randomStudent");
let resetData = document.getElementById("resetData");
let displayList = document.getElementById("displayList");


function getPeopleData(){
    return fetch('./data/data.json')
    .then(response => response.json())
    .then(data => {console.log(data)
        return data.codestack;
    })
}

getPeopleData();

function getRandomPerson(codestack){
    let randomIndex = Math.floor(Math.random() * codestack.length);
    return codestack[randomIndex];
}

randomStudent.addEventListener('click', function(){
    getPeopleData().then(codestack => {
        let randomPerson = getRandomPerson(codestack);
        firstName.innerText = randomPerson.firstName;
        lastName.innerText = randomPerson.lastName;
        codestackEmail.innerText = randomPerson.codestackEmail;
        regularEmail.innerText = randomPerson.regularEmail;
        let randomFirstName = document.createElement("li");
        let randomLastName = document.createElement("li");
        let randomCodestackEmail = document.createElement("li");
        let randomRegularEmail = document.createElement("li");
        let space = document.createElement("br");
        space.textContent = " ";
        randomFirstName.textContent = randomPerson.firstName;
        randomLastName.textContent = randomPerson.lastName;
        randomCodestackEmail.textContent = randomPerson.codestackEmail;
        randomRegularEmail.textContent = randomPerson.regularEmail;
        if(displayList.children.length >= 25){
            displayList.removeChild(displayList.firstChild);
        }
        if(displayList.children.length >= 24){
            displayList.removeChild(displayList.firstChild);
        }
        if(displayList.children.length >= 23){
            displayList.removeChild(displayList.firstChild);
        }
        if(displayList.children.length >= 22){
            displayList.removeChild(displayList.firstChild);
        }
        if(displayList.children.length >= 21){
            displayList.removeChild(displayList.firstChild);
        }
       
        displayList.appendChild(randomFirstName);
        displayList.appendChild(randomLastName);
        displayList.appendChild(randomCodestackEmail);
        displayList.appendChild(randomRegularEmail);
        displayList.appendChild(space);
        
    })
})