//--------------------------------------------- TEMPLES PAGE  ------------------------------------//

const requestURL = 'https://yamiriv1311.github.io/wdd230/final-project/data/data.json';
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
  let img = document.createElement('img');
  let temple = document.createElement('h5');
  let phone = document.createElement('h6');
  let situation = document.createElement('p');
  let address = document.createElement('a');
  let s = document.createElement('p');
  let s2 = document.createElement('p');
  let s3 = document.createElement('p');
  let s4 = document.createElement('p');





  // Build the image attributes by using the setAttribute method for the src, alt, and loading attribute values. (Fill in the blank with the appropriate variable).
  img.setAttribute('src', company.imageurl);
  img.setAttribute('alt', `Logo of ${company.name}`);
  img.setAttribute('class', "imageIcon");
  img.setAttribute('loading', 'lazy');
  
  card.setAttribute('class', "divJSON");


  // Change the textContent property of the h2 and p elements to contain the companie's name, phone, and email
  temple.innerHTML = `${company.name}`;
  phone.innerHTML = `<b>Phone: </b>${company.phone}`;
  situation.innerHTML = `<b>Current Situation: </b>${company.situation}`;
  s.innerHTML = `<b>Services Offered: </b> <br>${company.services.s} <br>${company.services.s2} <br>${company.services.s3} <br>${company.services.s4}`;


  // Change the content  of the a elements to contain the companie's address and website link
  address.setAttribute('href', `${company.address}`);
  let aAddress = document.createTextNode("Click for Address");
  address.appendChild(aAddress);
  address.setAttribute('class', "address");

  
  // Add/append the section(card) with the h2 element
  card.appendChild(temple);
  card.appendChild(img);
  card.appendChild(phone);
  card.appendChild(situation);
  card.appendChild(address);
  card.appendChild(s);

  // Add/append the existing HTML div with the cards class with the section(card)
  cards.appendChild(card);
}
