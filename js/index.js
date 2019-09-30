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
logo.setAttribute('src', siteContent["nav"]["img-src"]);
const button=document.querySelector('button');
button.addEventListener('click', () => {
  alert('Button Was Clicked!');
});
const link= document.querySelectorAll('a');
console.log(link);
link[0].textContent= "Services";
link[1].textContent= "Product";
link[2].textContent="Visions";
link[3].textContent="Features";
link[4].textContent="About";
link[5].textContent="Contact";
// link.style.color="green"; For some reason this won't work?
link[0].style.color= "green";
link[1].style.color= "green";
link[2].style.color="green";
link[3].style.color="green";
link[4].style.color="green";
link[5].style.color="green";
let codeSnippet= document.querySelector("#cta-img");
codeSnippet.src= "img/header-img.png";
const newNav= document.createElement("a");
const newNav2= document.createElement("a");
newNav.textContent="Blog";
newNav2.textContent="Factory";
newNav.style.color="green";
newNav2.style.color="green";
const nav= document.querySelector('nav');
nav.appendChild(newNav);
nav.prepend(newNav2);
let awesomeDom= document.querySelector('.cta-text h1');
awesomeDom.textContent="Dom Is Awesome";

const buttonText=document.querySelector('.cta-text button');
buttonText.textContent="Get Started";

const features= document.querySelector('.text-content h4');
features.textContent="Features";
const featuresText=document.querySelector('.text-content p');
featuresText.textContent="Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";
let paragraphHeadlines= document.querySelectorAll("h4");
console.log(paragraphHeadlines);
let paragraphs = document.querySelectorAll("p");

paragraphs[1].textContent="Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";

paragraphHeadlines[1].textContent="About";

paragraphs[2].textContent="Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."
const midPageImg= document.querySelector("#middle-img");
midPageImg.src="img/mid-page-accent.jpg";
paragraphHeadlines[2].textContent="Services";
paragraphs[3].textContent="Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."
paragraphHeadlines[3].textContent="Products";
paragraphs[4].textContent="Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."
paragraphHeadlines[4].textContent="Vision";
paragraphHeadlines[5].textContent="Contact"
paragraphs[5].textContent="123 Way 456 Street Somewhere, USA";
paragraphs[6].textContent="1 (888) 888-8888";
paragraphs[7].textContent="Copyright Great Idea! 2018";