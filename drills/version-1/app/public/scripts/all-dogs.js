fetch("/api/dogs")
    .then(response => response.json())
    .then(response => addDogsToPage(response.dogs));

function addDogsToPage(dogsArray){
  let dogList = document.querySelector(".dogs")
  let addButton= document.querySelector(".add-button")
  console.log(addButton);
  for (var i = 0; i < dogsArray.length; i++){
    let dog = document.createElement('li')
    dog.innerHTML = `
    <h3 class="name"><a href="/dogs/${dogsArray[i].id}">${dogsArray[i].name}</a></h3>
    <img class="profile-picture" src="/${dogsArray[i].profilePicture}" alt="${dogsArray[i].name}" />
    <p class="bio">${dogsArray[i].bio}</p>
    `;
    dogList.appendChild(dog)
  }
  let addLink= document.createElement('a');
  addLink.setAttribute('href', 'http://localhost:3000/dogs/new');
  addLink.setAttribute('class', 'add');
  addLink.textContent = "Click to Add a New Dog"
  addButton.appendChild(addLink);
}
