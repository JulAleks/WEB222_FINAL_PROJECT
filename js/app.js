/**
 * WEB222 – FINAL WEB
 *
 * I declare that this assignment is my own work in accordance with
 * Seneca Academic Policy. No part of this assignment has been
 * copied manually or electronically from any other source
 * (including web sites) or distributed to other students.
 *
 * Please update the following with your information:
 *
 *      Name:       Julia Alekseev
 *      Student ID: 051292134
 *      Date:       2023-08-05
 */
const { reviews } = window;


// Review button function
function generateReviewButton() {
  const navBar = document.querySelector(".headNav"); 
  reviews.forEach((review) => {
    const reviewButton = document.createElement("button");
    reviewButton.textContent = review.name;
    reviewButton.className = "reviewButton";
    reviewButton.addEventListener("click", () => displayReview(review.id)); 
    navBar.appendChild(reviewButton);
  });
}

//submit review function
function submitReview() {
    const name = document.getElementById("name").value;
    const stars = document.querySelector('input[name="starRatings"]:checked').value;
    const revHeader = document.getElementById("revHeader").value;
    const reviewContent = document.getElementById("postContent").value;
  
    //new review
    const newReview = {
      id: reviews.length + 1, 
      name: name,
      stars: "★".repeat(parseInt(stars)), 
      imageUrl: "images/racoon.jpg", 
      revHeader: revHeader, 
      revBod: reviewContent,
    };
  
    reviews.push(newReview); // adding the new review to the array
  
    // displaying all reviews including the new one
    displayAllreviews();
  }
  
  //display function
function displayReview(reviewID) {
  const reviewPage = document.querySelector("#reviewPage");
  reviewPage.innerHTML = ""; 
  reviews.forEach((review) => {
    if (reviewID === review.id) {
      
      //Creating elements
      const card = document.createElement("div");
      const reviewImg = document.createElement("img");
      const starElement = document.createElement("p");
      const reviewNameElement = document.createElement("h3");
      const revHeaderElement = document.createElement("p");
      const revBodElement = document.createElement("p");

      //creating contant
      revHeaderElement.textContent = review.revHeader;
      reviewNameElement.textContent = review.name;
      starElement.innerHTML = review.stars; 
      revBodElement.textContent = review.revBod;
      reviewImg.src = review.imageUrl; 

      // adding class names for CSS
      card.className = "cards";
      reviewImg.className = "imgCard";
      starElement.classList.add("starRatings"); 
      reviewNameElement.classList.add("reviewName"); 
      revHeaderElement.classList.add("headReview"); 
      revBodElement.className = "reviewText";

      // appending elements
      card.appendChild(reviewImg);
      card.appendChild(reviewNameElement);
      card.appendChild(starElement);
      card.appendChild(revHeaderElement);
      card.appendChild(revBodElement);
      reviewPage.appendChild(card);
    }
  });
}

function displayAllreviews() {
    const reviewPage = document.querySelector("#reviewPage");
    reviewPage.innerHTML = ""; // Clear the previous review cards
  
    //displaying cards
    reviews.forEach((review, index) => {
      // creating elements
      const card = document.createElement("div");
      const reviewImg = document.createElement("img");
      const starElement = document.createElement("p");
      const reviewNameElement = document.createElement("h3");
      const revHeaderElement = document.createElement("p");
      const revBodElement = document.createElement("p");
  
      // creating content
      revHeaderElement.textContent = review.revHeader;
      reviewNameElement.textContent = review.name;
      starElement.innerHTML = review.stars;
      revBodElement.textContent = review.revBod;
      reviewImg.src = review.imageUrl;
  
      // adding class names for CSS
      card.className = "card";
      reviewImg.className = "imgCard";
      starElement.classList.add("starRatings");
      reviewNameElement.classList.add("reviewName");
      revHeaderElement.classList.add("headReview");
      revBodElement.className = "reviewText";
  
      // appending elements to the card div
      card.appendChild(reviewImg);
      card.appendChild(reviewNameElement);
      card.appendChild(starElement);
      card.appendChild(revHeaderElement);
      card.appendChild(revBodElement);
  
      // check if it's the first card of a new row
      if (index % 3 === 0) {
        // Create a new row container
        row = document.createElement("div");
        row.className = "upReview";
        reviewPage.appendChild(row);
      }
  
      // append the card to the current row container
      row.appendChild(card);
    });
  }

  //loading fucntion
function onLoad() {
  console.log("loaded");
  displayAllreviews(); 
}

window.addEventListener("load", onLoad);
