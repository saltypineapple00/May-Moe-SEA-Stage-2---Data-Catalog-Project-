/**
 * Data Catalog Project Starter Code - SEA Stage 2
 *
 * This file is where you should be doing most of your work. You should
 * also make changes to the HTML and CSS files, but we want you to prioritize
 * demonstrating your understanding of data structures, and you'll do that
 * with the JavaScript code you write in this file.
 * 
 * The comments in this file are only to help you learn how the starter code
 * works. The instructions for the project are in the README. That said, here
 * are the three things you should do first to learn about the starter code:
 * - 1 - Change something small in index.html or style.css, then reload your 
 *    browser and make sure you can see that change. 
 * - 2 - On your browser, right click anywhere on the page and select
 *    "Inspect" to open the browser developer tools. Then, go to the "console"
 *    tab in thewlpful for debugging.
 *    (These instructions assume you're using Chrome, opening developer tools
 *    may be different on other browsers. We suggest using Chrome.)
 * - 3 - Add another string to the titles array a few lines down. Reload your
 *    browser and observe what happens. You should see a fourth "card" appear
 *    with the string you added to the array, but a broken image.
 * 
 */

let ALL_GROUPS = [
    {group_name: "Virtual Singers", member: "Hatsune Miku", imageURL:"https://static.wikia.nocookie.net/projectsekai/images/d/d0/Miku_3rd_Anniversary.png"},
    {group_name: "Virtual Singers", member: "Kagamine Rin" , imageURL: "https://static.wikia.nocookie.net/projectsekai/images/1/11/Rin_3rd_Anniversary.png"},
    {group_name: "Virtual Singers", member: "Kagamine Len" , imageURL: "https://static.wikia.nocookie.net/projectsekai/images/e/e7/Len_3rd_Anniversary.png"},
    {group_name: "Virtual Singers", member: "Megurine Luka", imageURL: "https://cdn.discordapp.com/attachments/715124388390895697/1227160437527810048/1000.png?ex=66276537&is=6614f037&hm=d17d60a4ca0da4109fc7cc1b6c84972d239dba8c7ea0b0772ce06ce58cd08ba2&" },
    {group_name: "Virtual Singers", member: "Kaito" , imageURL: "https://static.wikia.nocookie.net/projectsekai/images/2/21/KAITO_3rd_Anniversary.png"},
    {group_name: "Virtual Singers", member: "Meiko" , imageURL: "https://static.wikia.nocookie.net/projectsekai/images/7/7a/MEIKO_3rd_Anniversary.png" },
    {group_name: "Wonderland X Showtime",member: "Otori Emu", imageURL:"https://static.wikia.nocookie.net/projectsekai/images/9/9c/Emu_3rd_Anniversary.png"},
    {group_name: "Wonderland X Showtime",member: "Tenma Tsukasa", imageURL:"https://static.wikia.nocookie.net/projectsekai/images/5/59/Tsukasa_3rd_Anniversary.png"},
    {group_name: "Wonderland X Showtime",member: "Kusanagi Nene", imageURL:"https://static.wikia.nocookie.net/projectsekai/images/6/66/Nene_3rd_Anniversary.png"},
    {group_name: "Wonderland X Showtime",member: "Kamishiro Rui", imageURL:"https://static.wikia.nocookie.net/projectsekai/images/3/3f/Rui_3rd_Anniversary.png"},
    {group_name: "Leo/need", member: "Hoshino Ichika", imageURL:"https://static.wikia.nocookie.net/projectsekai/images/7/71/Ichika_3rd_Anniversary.png"},
    {group_name: "Leo/need", member: "Tenma Saki", imageURL:"https://static.wikia.nocookie.net/projectsekai/images/e/e4/Saki_3rd_Anniversary.png"},
    {group_name: "Leo/need", member: "Mochizuki Honami", imageURL:"https://static.wikia.nocookie.net/projectsekai/images/a/a3/Honami_3rd_Anniversary.png"}, 
    {group_name: "Leo/need", member: "Hinomori Shiho", imageURL:"https://static.wikia.nocookie.net/projectsekai/images/4/4c/Shiho_3rd_Anniversary.png"},
    {group_name: "More More Jump", member: "Hanasato Minori", imageURL:"https://static.wikia.nocookie.net/projectsekai/images/b/b8/Minori_3rd_Anniversary.png"},    
    {group_name: "More More Jump", member: "Kiritani Haruka", imageURL:"https://static.wikia.nocookie.net/projectsekai/images/4/47/Haruka_3rd_Anniversary.png"},    
    {group_name: "More More Jump", member: "Momoi Airi", imageURL:"https://static.wikia.nocookie.net/projectsekai/images/1/1f/Airi_3rd_Anniversary.png"},
    {group_name: "More More Jump", member: "Hinomori Shizuku", imageURL:"https://static.wikia.nocookie.net/projectsekai/images/a/ae/Shizuku_3rd_Anniversary.png"},
    {group_name: "Vivid BAD SQUAD", member: "Azusawa Kohane", imageURL:"https://static.wikia.nocookie.net/projectsekai/images/1/19/Kohane_3rd_Anniversary.png"},
{group_name: "Vivid BAD SQUAD", member: "Shiraishi An", imageURL:"https://static.wikia.nocookie.net/projectsekai/images/5/5f/An_3rd_Anniversary.png"},
{group_name: "Vivid BAD SQUAD", member: "Shinonome Akito", imageURL:"https://static.wikia.nocookie.net/projectsekai/images/f/f2/Akito_3rd_Anniversary.png"},
{group_name: "Vivid BAD SQUAD", member: "Aoyagi Toya", imageURL:"https://static.wikia.nocookie.net/projectsekai/images/a/a5/Toya_3rd_Anniversary.png"}
]

// Your final submission should have much more data than this, and 
// you should use more than just an array of strings to store it all.

// This function adds cards the page to display the data in the array
// function showCards() {
//     const cardContainer = document.getElementById("card-container");
//     cardContainer.innerHTML = "";
//     const templateCard = document.querySelector(".card");
    
//     for (let i = 0; i < titles.length; i++) {
//         let title = titles[i];

//         // This part of the code doesn't scale very well! After you add your
//         // own data, you'll need to do something totally different here.
//         let imageURL = "";
//         if (i == 0) {
//             imageURL = FRESH_PRINCE_URL;
//         } else if (i == 1) {
//             imageURL = CURB_POSTER_URL;
//         } else if (i == 2) {
//             imageURL = EAST_LOS_HIGH_POSTER_URL;
//         }
//         else if (i == 3) {
//             imageURL = FOURTH_IMAGE;
//         }

//         const nextCard = templateCard.cloneNode(true); // Copy the template card
//         editCardContent(nextCard, title, imageURL); // Edit title and image
//         cardContainer.appendChild(nextCard); // Add new card to the container
//     }
// }
// function editCardContent(card, newTitle, newImageURL) {
//     card.style.display = "block";

//     const cardHeader = card.querySelector("h2");
//     cardHeader.textContent = newTitle;

//     const cardImage = card.querySelector("img");
//     cardImage.src = newImageURL;
//     cardImage.alt = newTitle + " Poster";

//     // You can use console.log to help you debug!
//     // View the output by right clicking on your website,
//     // select "Inspect", then click on the "Console" tab
//     console.log("new card:", newTitle, "- html: ", card);
// }

function filter(value) {
    if(value == "ALL")
    {
        return showCards(ALL_GROUPS);
    }
    const filteredGroups = ALL_GROUPS.filter(group => group.group_name == value);
    return showCards(filteredGroups);
}
// function search(value)
// {
//     const searchInput = document.getElementById("searchInput").value;
//     return showCards(searchInput);`
// }


function showCards(value) { 

        const cardContainer = document.getElementById("card-container");
        cardContainer.innerHTML = ""; // Clear existing content
        const templateCard = document.querySelector(".card"); // Get the template card
        cardContainer.classList.add("hide");

        // Loop each group
        value.forEach
            (group => 
            {
                const nextCard = templateCard.cloneNode(true); // Clone the template card
            
                nextCard.style.display = "block"; // Make the card visible
                nextCard.querySelector("h2").textContent = group.name; // Set the group name
    
                const img = nextCard.querySelector("img");
                img.src = group.imageURL; // Set the image URL
                img.alt = group.name + " Image"; // Set the alt attribute
    
                const bulletList = nextCard.querySelector("ul");
                bulletList.innerHTML = ""; // Clear existing bullet points
            
                const li = document.createElement("li"); // Populate bullet points for the group member
                li.textContent = group.group_name + "\nName: " + group.member;
                bulletList.appendChild(li);
                cardContainer.appendChild(nextCard);
            }); 

            const button = document.getElementById("buttons");
        button.addEventListener("showFilter", showFilteredCards);


    }


// This calls the addCards() function when the page is first loaded
// document.addEventListener("DOMContentLoaded", showCards);
document.addEventListener("DOMContentLoaded", function()
{
    showCards(ALL_GROUPS);
}
);


// function quoteAlert() {
//     console.log("Button Clicked!")
//     alert("I guess I can kiss heaven goodbye, because it got to be a sin to look this good!");
// }

// function removeLastCard() {
//     titles.pop(); // Remove last item in titles array
//     showCards(); // Call showCards again to refresh
// }
