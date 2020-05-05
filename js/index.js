const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

let navItems = Array.from(document.querySelectorAll('nav'));
navItems.forEach(item =>{
  item.firstElementChild.textContent = siteContent.nav["nav-item-1"];

  item.firstElementChild.nextElementSibling.textContent = siteContent.nav["nav-item-2"];

  item.firstElementChild.nextElementSibling.nextElementSibling.textContent = siteContent.nav["nav-item-3"];

  item.firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling.textContent = siteContent.nav["nav-item-4"];

  item.firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.textContent = siteContent.nav["nav-item-5"];

  item.firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.textContent = siteContent.nav["nav-item-6"];
});

let h1Item = document.querySelector('h1');
h1Item.textContent = siteContent.cta.h1;

let buttonItem = document.querySelector('button');
buttonItem.textContent = siteContent.cta.button;

let ctaImage = document.getElementById("cta-img");
ctaImage.setAttribute('src', siteContent["cta"]["img-src"])

let feath4 = Array.from(document.getElementsByClassName('top-content'));

console.log(feath4);

feath4.forEach(item =>{
  item.firstElementChild.firstElementChild.textContent = siteContent["main-content"]["features-h4"];
});

feath4.forEach(item => {
  item.firstElementChild.firstElementChild.nextElementSibling.textContent = siteContent["main-content"]["features-content"];
});

feath4.forEach(item => {
  item.firstElementChild.nextElementSibling.firstElementChild.textContent = siteContent["main-content"]["about-h4"];
});

feath4.forEach(item => {
  item.firstElementChild.nextElementSibling.firstElementChild.nextElementSibling.textContent = siteContent["main-content"]["about-content"];
});

let middleImage = document.getElementById('middle-img');
middleImage.setAttribute('src', siteContent["main-content"]["middle-img-src"]);

let bottomCont = Array.from(document.getElementsByClassName('bottom-content'));

bottomCont.forEach(item => {
  item.firstElementChild.firstElementChild.textContent = siteContent["main-content"]["services-h4"];

  item.firstElementChild.firstElementChild.nextElementSibling.textContent = siteContent["main-content"]["services-content"];

  item.firstElementChild.nextElementSibling.firstElementChild.textContent = siteContent["main-content"]["product-h4"];

  item.firstElementChild.nextElementSibling.firstElementChild.nextElementSibling.textContent = siteContent["main-content"]["product-content"];

  item.firstElementChild.nextElementSibling.nextElementSibling.firstElementChild.textContent = siteContent["main-content"]["vision-h4"];

  item.firstElementChild.nextElementSibling.nextElementSibling.firstElementChild.nextElementSibling.textContent = siteContent["main-content"]["vision-content"];
});

let contact = Array.from(document.getElementsByClassName('contact'));

contact.forEach(item => {
  item.firstElementChild.textContent = siteContent.contact["contact-h4"];

  item.firstElementChild.nextElementSibling.textContent = siteContent.contact.address;

  item.firstElementChild.nextElementSibling.nextElementSibling.textContent = siteContent.contact.phone;

  item.firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling.textContent = siteContent.contact.email;
});

let footer = Array.from(document.getElementsByTagName('footer'));

footer.forEach(item => {
  item.firstElementChild.textContent = siteContent.footer.copyright;
});

let anchors = Array.from(document.getElementsByTagName('a'));

anchors.forEach(item => {
  item.style.color = 'green';
});

document.body.firstElementChild.firstElementChild.firstElementChild.prepend('nav 1');

document.body.firstElementChild.firstElementChild.firstElementChild.append('nav 2');


