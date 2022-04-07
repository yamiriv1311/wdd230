//--------------------------------------------- DIRECTORY PAGE  ------------------------------------//

const requestURL = 'https://yamiriv1311.github.io/wdd230/chamber/data/data.json';
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
  let logo = document.createElement('img');
  let card = document.createElement('section');
  let name = document.createElement('h2');
  let phone = document.createElement('p');
  let email = document.createElement('p');
  let address = document.createElement('a');
  let website = document.createElement('a');

  // Build the image attributes by using the setAttribute method for the src, alt, and loading attribute values. (Fill in the blank with the appropriate variable).
  logo.setAttribute('src', company.imageurl);
  logo.setAttribute('alt', `Lofo of ${company.name}`);
  logo.setAttribute('loading', 'lazy');
 

  // Change the textContent property of the h2 and p elements to contain the companie's name, phone, and email
  name.innerHTML = `${company.name}`;
  phone.innerHTML = `<strong>Phone: </strong>${company.phone}`;
  email.innerHTML = `<strong>Email: </strong>${company.email}`;

  // Change the content  of the a elements to contain the companie's address and website link
  address.setAttribute('href', `${company.addres}`);
  let aAddress = document.createTextNode("Adress");
  address.appendChild(aAddress);

  website.setAttribute('href', `${company.Website}`);
  let aWebsite = document.createTextNode("Website");
  website.appendChild(aWebsite);


  // Add/append the section(card) with the h2 element
  card.appendChild(logo);
  card.appendChild(name);
  card.appendChild(phone);
  card.appendChild(email);
  card.appendChild(address);
  cards.appendChild(website);

  // Add/append the existing HTML div with the cards class with the section(card)
  cards.appendChild(card);
}
