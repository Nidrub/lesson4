var num = prompt('Enter a number');
num = num % 5;

var quotes = [
    "If you love life, don't waste time",
    "Life is about creating yourself",
    "Not all those who wander are lost",
    "Speak softly and carry a big stick",
    "Nothing in the world is more dangerous"
];

var websites = [
    "https://www.crunchyroll.com/",
    "https://www.youtube.com/",
    "https://www.utdallas.edu/"
]
var add_website = prompt('Add favorite website');
//adds in the last part of the array
websites.push(add_website);
//removes the first in the array
websites.shift()


window.onload = function() {
    document.getElementById("quotes-id").innerText = quotes[num];
    //add the links to the list
    const linkList = document.getElementById('links');
    // clear the list
    linkList.innerHTML = "";
    //loop around
    websites.forEach(url => {
        const listItem = document.createElement("li");
        const anchor = document.createElement("a");
        anchor.href = url;
        anchor.textContent = url;
        //add so that it opens in a new tab
        anchor.target = "_blank";
        listItem.appendChild(anchor);
        linkList.appendChild(listItem);
    })
};