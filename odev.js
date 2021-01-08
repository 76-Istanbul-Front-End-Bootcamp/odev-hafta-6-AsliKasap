window.mockApiUrl = "https://5ff1a861db1158001748b3bf.mockapi.io/pets/";
//5ff1a861db1158001748b3bf
//DELETE pets
window.removePet = (id) => {
    console.log(id) // remove the pet with given id
fetch(`${window.mockApiUrl}${id}`, {
            method: "DELETE",
           // body: data,
            headers: {
                'Accept': "application/json, text/plain, */*",
                'Content-Type': 'application/json'
  }
}
).then(() => {window.location.reload(true) });

}

//Bootstrap modal

window.modalPet = (pet) => {
 
 return `<div class="modal" id="${pet.id}" tabindex="-1">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">Details</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <h3>${pet.name}</h3>
         <div class="modal-body" style="width: 200px; height: 300px;">
                 <img src=${pet.image} class="card-img-top" style="margin: 0 auto; " / >
                 </div>
        
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>`;
};

const divEl=document.createElement("div");
document.querySelector("body").appendChild(divEl);

//DETAİL pets
async function fetchPets() {
  const response = await fetch(window.mockApiUrl);
  const pets = await response.json();
window.openPetDetail = (id) => {
  console.log(id); // show details of the pet with given id
   const pet = pets.find((pet) => parseInt(pet.id) === id);
 const petsHTML= modalPet(pet); 
 divEl.innerHTML =petsHTML;
 $(`#${pet.id}`).modal('show');

};
}
fetchPets();








