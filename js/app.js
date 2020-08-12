// ajax(file name, ( results => {

// ajax(file name.forEach( results => {
//   new Constructor(results)
//   }

// WE need to fetch json using AJAX
// Loop through json using forEach and arrow function
// For each item in loop create instance of hornedAnimal
// Find Target where we will drop the animal elements (getElbyID)
// Loop through animalArray using forEach and arrow function
// forEach animal in array render element and append to target
// For filtering 

const animalArray = [];
function hornedAnimal(data) {
  // passed in entire object instead of individual params
  this.image_url = data.image_url;
  this.title = data.title;
  this. description = data.description;
  this.keyword = data.keyword;
  this.horns = data.horns;
}

// We are generating html elements
hornedAnimal.prototype.renderElement = function() {
  var section = document.createElement('section');
  // TODO:Add h2 if need be, look at html and project requirements
  const img = document.createElement('img');
  img.src = this.image_url;
  section.appendChild(img);
  return section;
};

// making a call to ajax using jQuery to get data
function fetchData() {
  $.get('data/page-1.json')
    .then((data) => {
      console.log(data);
      data.forEach(animalData => {
        const newAnimal = new hornedAnimal(animalData)
        animalArray.push(newAnimal);
      })
      const main = document.getElementById('animal-home');
      animalArray.forEach(animal => {
        const renderAnimal = animal.renderElement();
        main.appendChild(renderAnimal);
      })
    })
}
fetchData();
















