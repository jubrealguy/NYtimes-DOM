
const heading = document.querySelector(".heading-primary");
heading.textContent = "new york times";

/*   ............WORKING WITH ALEADY CREATED TAGS IN THE HTML FILE............

const sectionOneHead = document.querySelectorAll(".heading-secondary");
for (let i = 0; i < data.results.length; i++) {
    sectionOneHead[i].textContent = data.results[i].title;   
}


const sectionOneHeadContent = document.querySelectorAll(".paragraph");
for (let i = 0; i < data.results.length; i++) {
    sectionOneHeadContent[i].textContent = data.results[i].url;
}
*/


/*    ...........USING FOR LOOP METHOD TO ITERATE THROUGH JSON DATA, THEN  CREATING ELEMENTS AND NESTING THEM INTO EACH OTHER............

const main = document.createElement("main");

for (let i = 0; i < data.results.length; i++) {

    const mainSection = document.createElement("section");
    const mainSectionHead = document.createElement("h3");
    const mainSectionParagraph = document.createElement("p");
        
    const mainSectionHeadContent = document.createTextNode(data.results[i].title);
    const mainSectionParagraphContent =document.createTextNode(data.results[i].url);
        
    mainSectionHead.appendChild(mainSectionHeadContent);
    mainSectionParagraph.appendChild(mainSectionParagraphContent);
        
    mainSection.appendChild(mainSectionHead)
    mainSection.appendChild(mainSectionParagraph);
    main.appendChild(mainSection);
        
    const position = document.getElementsByTagName("body")[0];
    position.appendChild(main);
}
*/

//    ...........USING .MAP() METHOD TO ITERATE THROUGH JSON DATA, THEN  CREATING ELEMENTS AND NESTING THEM INTO EACH OTHER............

const main = document.querySelector("#main");

let mainContent = data.results.map(eachSection => {
    
    const mainSection = document.createElement("section");
    const mainSectionHead = document.createElement("h3");
    const mainSectionParagraph = document.createElement("p");
    
    const mainSectionHeadContent = document.createTextNode(eachSection["title"]);
    const mainSectionParagraphContent = document.createTextNode(eachSection["url"]);
    
    mainSectionHead.appendChild(mainSectionHeadContent);
    mainSectionParagraph.appendChild(mainSectionParagraphContent);

    mainSection.appendChild(mainSectionHead);
    mainSection.appendChild(mainSectionParagraph);
    
    main.appendChild(mainSection);
})




/*
const listOfMainSections = data.map(s => {
    const p = new Paragraph(s.p)
    const h = new Head(s.h)
    const m = new Main()
    m.children(p,h)

    return m;
})

DOM.writeToDom(listOfMainSections);
*/