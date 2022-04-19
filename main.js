

const el = document.querySelector(".heading-primary");
el.textContent = "new york times";

const sectionOneHead = document.querySelectorAll(".heading-secondary");
for (let i = 0; i < data.results.length; i++) {
    sectionOneHead[i].textContent = data.results[i].title;   
}


const sectionOneHeadContent = document.querySelectorAll(".paragraph");
for (let i = 0; i < data.results.length; i++) {
    sectionOneHeadContent[i].textContent = data.results[i].url;
}