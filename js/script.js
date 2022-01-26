const cats = [
    {
        name: "Blob",
        age: 10
    },
    {
        name: "Harold",
    },
    {
        name: "Blurt",
        age: 21
    }
];

// Question 1

const cat = {
    complain: function() {
        console.log("Meow!");
    }
};

cat.complain();

// Question 2

const heading = document.querySelector("h3");

heading.innerHTML = "Updated heading";

// Question 3

heading.style.fontSize = "2em";

// Question 4

heading.classList.add("subheading");

// Question 5

const paragraphs = document.querySelectorAll("p");

for (let i = 0; i < paragraphs.length; i++ ) {
    paragraphs[i].style.color ="red";
}

// Question 6

const resultsContainer = document.querySelector(".results"); 

resultsContainer.innerHTML = "<p>New paragraph</p>";
resultsContainer.style.backgroundColor = "yellow";

// Question 7

function catList(list) {
    for (let i = 0; i < list.length; i++) {
        console.log(list[i].name);
    } 
}
catList(cats);

// Question 8

const container = document.querySelector(".cat-container");

let html = "";

function createCats(cats) {
    for (let i = 0; i < cats.length; i++) {

        let howOld = cats[i].age;
        if (!cats[i].age) {
            howOld = "Age unknown";
        }

        html += `<div>
                    <h5>Name: ${cats[i].name}</h5>
                    <p>Age: ${howOld}</p>
                </div>`;
    }
    return(html);
}

createCats(cats); 
container.innerHTML = html;