//--------------------------------------------- TEMPLES PAGE  ------------------------------------//

const requestURL = 'https://yamiriv1311.github.io/wdd230/final-project/data/data1.json';
const cards = document.querySelector('.cards');

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);  // temporary checking for valid response and data parsing
    const templeSection = jsonObject['temples'];
    templeSection.forEach(displayTemple);
  });
  

function displayTemple(templeInfo) {
  // Create elements to add to the document
  let card = document.createElement('div');
  let img = document.createElement('img');
  let temple = document.createElement('h5');
  let phone = document.createElement('h6');
  let situation = document.createElement('p');
  let address = document.createElement('a');
  let services = document.createElement('ul');
  let s = document.createElement('li');
  let s2 = document.createElement('li');
  let s3 = document.createElement('li');
  let s4 = document.createElement('li');
  let appointment = document.createElement('a');

  // Build the image attributes by using the setAttribute method for the src, alt, and loading attribute values. (Fill in the blank with the appropriate variable).
  img.setAttribute('src', templeInfo.imageurl);
  img.setAttribute('alt', `Image of ${templeInfo.name}`);
  img.setAttribute('class', "templeImage");
  img.setAttribute('loading', 'lazy');
  
  card.setAttribute('class', "divJSON");


  // Change the textContent property of the h2 and p elements to contain the companie's name, phone, and email
  temple.innerHTML = `${templeInfo.name}`;
  temple.setAttribute('class', "name");
  phone.innerHTML = `<b>Phone: </b>${templeInfo.phone}`;
  phone.setAttribute('class', "phone");
  situation.innerHTML = `<b>Current Situation: </b>${templeInfo.situation}`;
  situation.setAttribute('class', "situation");
  services.innerHTML = `<b>Services Offered: </b> <br>-${templeInfo.services.s} <br>-${templeInfo.services.s2} <br>-${templeInfo.services.s3} <br>-${templeInfo.services.s4}`;
  services.setAttribute('class', "services");
  s.setAttribute('class', "servicePoint");
  s2.setAttribute('class', "servicePoint");
  s3.setAttribute('class', "servicePoint");
  s4.setAttribute('class', "servicePoint");


  // Change the content  of the a elements to contain the companie's address and website link
  address.setAttribute('href', `${templeInfo.address}`);
  let aAddress = document.createTextNode("Click for Address");
  address.appendChild(aAddress);
  address.setAttribute('class', "address");

  
  appointment.setAttribute('href', `${templeInfo.appointment}`);
  let aAppointmet = document.createTextNode("Click to set appointment");
  appointment.appendChild(aAppointmet);
  appointment.setAttribute('class', "appointment");

  
  // Add/append the section(card) with the h2 element
  card.appendChild(temple);
  card.appendChild(img);
  card.appendChild(phone);
  card.appendChild(situation);
  card.appendChild(address);
  card.appendChild(services);
  card.appendChild(appointment);

  // Add/append the existing HTML div with the cards class with the section(card)
  cards.appendChild(card);
}
