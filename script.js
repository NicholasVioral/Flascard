// What should happen is that you click the add term and it gets saved temporarily and then when you click create set it will show your
// Flashcards one at a time where you can go forwards and backwards

const flashcards = [];
let iter = 0;

function handleClick() {
    term = document.getElementById("termText").value;
    definition = document.getElementById("definitionText").value;
    if (!term || !definition) {
        alert("Must enter term and defintion to add card!");
    }
    flashcards.push({ term: term, definition, definition })
    document.getElementById("termText").value='';
    document.getElementById("definitionText").value='';
    console.log("Flashcard saved:", flashcards[iter]);
    iter++;
}

let currentCard = 0;

function createCards(){
    const terms = document.createElement("p"); // Creating an element out of nowhere
    const node = document.createTextNode(flashcards[currentCard].term); // Creating a text node to add to the element previously created

    // Create anchor tag
    const anchor = document.createElement("a");
    anchor.href = "";
    // anchor.target = "_blank"; // Opens up on a new tab
    anchor.onclick = function() {
        oppositeSideTerm(definitions, terms);
        return false;
    };

    anchor.appendChild(node);

    terms.appendChild(anchor); // Appending the text node to the paragraph node
    //terms.classList.add(""); // Adding class to element so it can be styled

    const definitions = document.createElement("p"); // Creating an element out of nowhere
    const node2 = document.createTextNode(flashcards[currentCard].definition); // Creating a text node to add to the element previously created

    // Create anchor tag
    const anchor2 = document.createElement("a");
    anchor2.href = "";
    // anchor2.target = "_blank"; // Opens up on a new tab
    anchor2.onclick = function() {
        oppositeSideDefinition(definitions, terms);
        return false;
    };

    anchor2.appendChild(node2);

    definitions.appendChild(anchor2); // Appending the text node to the paragraph node
    definitions.classList.add("definitionside"); // Adding class to element so it can be styled
    definitions.style.display = "none"; // Hide definition initially

    const element = document.getElementById("test"); // Getting the div that the element will be placed in
    element.appendChild(terms); // Appending element to div
    element.appendChild(definitions);
}

function nextCard() {
    if (flashcards[currentCard + 1]){
        document.getElementById("test").innerHTML = "";
        currentCard++;
        createCards();
    } else {
        console.log("No card");
    }
}

function prevCard() {
    if (flashcards[currentCard - 1]){
        document.getElementById("test").innerHTML = "";
        currentCard--;
        createCards();
    } else {
        console.log("No card");
    }
}


function oppositeSideTerm(definitions, terms) {
    definitions.style.display = "block";
    terms.style.display = "none";
}

function oppositeSideDefinition(definitions, terms) {
    definitions.style.display = "none";
    terms.style.display = "block";
}