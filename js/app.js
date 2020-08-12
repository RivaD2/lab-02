
/*DISPLAY IMAGES
WE need to fetch json using AJAX
Loop through json using forEach and arrow function
For each item in loop create instance of hornedAnimal
Find Target where we will drop the animal elements (getElbyID)
Loop through animalArray using forEach and arrow function
forEach animal in array render element and append to target


TODO:// reconstitute by passing through constructor

/* FILTER IMAGES STEPS:
 Create an array with just keywords in json file (all of them) and assign to const/var named dropdown
 Loop through the keywords using ForEach and for each of them add option to dropdown menu by creating element and appending it as child (this takes place after parsing of data before rendering animal)
 If dropdown is a form, we can use document.forms to get value or any other way to get value
 In the animalAray forEach function, before renderAnimal create an IF statement
 If keyword === value of dropdown (which is set as var) then call render function and append the element*/

const keywords = []; // add keywords into array
const animalArray = [];
function hornedAnimal(data) {
  // passed in entire object instead of individual params
  this.image_url = data.image_url;
  this.title = data.title;
  this. description = data.description;
  this.keyword = data.keyword;
  this.horns = data.horns;
}
//Mustache
const templateHtml = $('#pet-template').innerHTML;
const newElement = Mustache.render(templateHTML, hornedAnimal);

const renderMustacheAndJquery = (obj) => {
  const template =$('#pet-template').html();
  const newElement = Mustache.render(template, obj);
  $('section').append(newElement);
};
renderMustacheAndJquery(hornedAnimal);

// Generating html elements
/*change all Vanilla JS to jQuery (document,getElementById and doc.Create etc.)*/

hornedAnimal.prototype.renderElement = function() {
  var section = $.create('section');
  // TODO:Add h2 if need be, look at html and project requirements
  const h2Element = $.create('h2');
  const img = $.create('img');
  img.src = this.image_url;
  const pTag = $.create('p');
  section.appendChild(h2);
  section.appendChild(img);
  section.appendChild(p);
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
      const article = $('#animal-home');
      animalArray.forEach(animal => {
        const renderAnimal = animal.renderElement();
        article.appendChild(renderAnimal);
      })
    })
}
fetchData();

















