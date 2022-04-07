//--------------------------------------------- DIRECTORY PAGE  ------------------------------------//

const requestURL = 'https://yamiriv1311.github.io/wdd230/chamber/data/datad.json';
const cards = document.querySelector('.cards');

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);  // temporary checking for valid response and data parsing
    const businessSection = jsonObject['business'];
    businessSection.forEach(displayBusiness);
  });
  

function displayBusiness(company) {
  // Create elements to add to the document
  let card = document.createElement('div');
  let logo = document.createElement('img');
  let name = document.createElement('h5');
  let phone = document.createElement('h6');
  let email = document.createElement('p');
  let address = document.createElement('a');
  let website = document.createElement('a');

  // Build the image attributes by using the setAttribute method for the src, alt, and loading attribute values. (Fill in the blank with the appropriate variable).
  logo.setAttribute('src', company.imageurl);
  logo.setAttribute('alt', `Logo of ${company.name}`);
  logo.setAttribute('class', "imageIcon");
  logo.setAttribute('loading', 'lazy');
  
  card.setAttribute('class', "divJSON");
  email.setAttribute('class', "email");


  // Change the textContent property of the h2 and p elements to contain the companie's name, phone, and email
  name.innerHTML = `${company.name}`;
  phone.innerHTML = `<b>Phone: </b>${company.phone}`;
  email.innerHTML = `<b>Email: </b>${company.email}`;


  // Change the content  of the a elements to contain the companie's address and website link
  address.setAttribute('href', `${company.address}`);
  let aAddress = document.createTextNode("Click for Address");
  address.appendChild(aAddress);
  address.setAttribute('class', "address");


  website.setAttribute('href', `${company.website}`);
  let aWebsite = document.createTextNode("Click to visit website");
  website.appendChild(aWebsite);
  website.setAttribute('class', "website");



  
  // Add/append the section(card) with the h2 element
  card.appendChild(name);
  card.appendChild(logo);
  card.appendChild(phone);
  card.appendChild(email);
  card.appendChild(address);
  card.appendChild(website);

  // Add/append the existing HTML div with the cards class with the section(card)
  cards.appendChild(card);
}


//Card and list view
let cardView = function () {
	document.querySelector(".cards").classList.remove("list");
	document.querySelector(".cards").classList.add("card");
};

let listView = function () {
	document.querySelector(".cards").classList.add("list");
	document.querySelector(".cards").classList.remove("card");
};