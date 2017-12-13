fetch(`/api/dogs/${findId()}`)
    .then(response => response.json())
    .then(response => addDogToPage(response.dog));

function addDogToPage(dog){
    const $section = document.querySelector("section");
    $section.innerHTML = `
        <h3 class="name"><a href="/dogs/${dog.id}">${dog.name}</a></h3>
        <img class="profile-picture" src="/${dog.profilePicture}" alt="${dog.name}" />
        <p class="bio">${dog.bio}</p>
    `;
}

function findId(){
  let path = new URL(window.location.href).pathname.split('/')
  console.log(path)
  return path[2]
}
