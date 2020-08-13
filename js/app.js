
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
 Use jQuery get ID formatting or any other way to get value
 In the animalAray forEach function, before renderAnimal create an IF statement
 If keyword === value of dropdown (which is set as var) then call render function and append the element*/
//Dont't forget to clear out old items // would have to clear all out

//LAB 03
TODO: //create event handler and have the event handler  respond when the user chooses an option from the select menu. Hide all of the images, then show those whose keyword matches the option chosen

TODO:// Add the ability for the user to sort the images by either title or by number of horns.
TODO: //Add navigation for the user to switch between two pages. Each page should render a unique set of images from one of the two provided JSON files.
TODO://Reset the filters, then repopulate them using only keywords from the images currently being displayed.
TODO: //Create the appropriate Mustache template in your HTML with the same <h2>, <img>, and <p> elements as the jQuery template from the prior lab.
TODO: //Refactor the method that renders your images to use Mustache instead of making a copy with jQuery.
TODO://Add the ability for the user to sort the images by either title or by number of horns.
TODO://Sort the images by one of the properties on page load. This should also apply to the second page of images.

const dropdown = []; // add keywords into array
const animalArray = [];
function hornedAnimal(data) {
  // passed in entire object instead of individual params
  this.image_url = data.image_url;
  this.title = data.title;
  this. description = data.description;
  this.keyword = data.keyword;
  this.horns = data.horns;
}



//TODO:make button in html and use jQuery hide to show the second set of animals when it is clicked
//TODO:make new button for html for other part of button challenge in class requirements

// const templateHtml = $('#pet-template').innerHTML;
// const newElement = Mustache.render(templateHTML, hornedAnimal);

// const renderMustacheAndJquery = (obj) => {
// const template =$('#pet-template').html();
// const newElement = Mustache.render(template, obj);
// $('section').append(newElement);
// };
// renderMustacheAndJquery(hornedAnimal);

//Generating html elements


hornedAnimal.prototype.renderElement = function() {
  let section = $('#photo-template').clone();
  section.find('h2').text(this.title);
  section.find('img').attr('src',this.image_url);
  section.find('p').text(this.description);



  return section;
};


// making a call to ajax using jQuery to get data
function fetchData() {
  $.get('data/page-1.json')
    .then((data) => {
      console.log(data);
      data.forEach(animalData => {
        const newAnimal = new hornedAnimal(animalData)
        if(!dropdown.includes(newAnimal.keyword)) {
          dropdown.push(newAnimal.keyword);
          let options =$('#keyword').clone();
          options.attr('value', animalData.keyword).text(animalData.keyword);
          $('#dropdown-menu').append(options);
        }
        animalArray.push(newAnimal);
      })
      console.log(animalArray);
      const article = $('#all-animals');
      animalArray.forEach(animal => {
        const renderAnimal = animal.renderElement();
        console.log(renderAnimal);
        article.append(renderAnimal);
      })
    })
}
fetchData();


















