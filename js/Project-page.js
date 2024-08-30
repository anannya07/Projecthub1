/****************project topic hrefs************** */
document.getElementById('clickable-card').addEventListener('click', function() {
    window.location.href = 'ai-ml.html'; // Redirect to the new page
  });
  
  /*******batch page hrefs*********** */
  // Define an object with batch IDs as keys and their corresponding links
const batchLinks = {
  "batch-2024": "Batch-2024.html",
  "batch-2023": "link-for-2023.html",
  "batch-2022": "link-for-2022.html",
  "batch-2021": "link-for-2021.html",
  "batch-2020": "link-for-2020.html"
};

// Iterate through each entry in the object
Object.keys(batchLinks).forEach(batchId => {
  const batchElement = document.getElementById(batchId); // Get the element by its ID
  const link = batchLinks[batchId]; // Get the corresponding link

  // Create an anchor element
  const anchor = document.createElement('a');
  anchor.href = link; // Set the href attribute
  anchor.className = 'batch-link'; // Add a class for styling
  anchor.style.textDecoration = 'none'; // Remove underline
  anchor.style.color = 'inherit'; // Keep the color the same as the parent
  anchor.style.display = 'block'; // Make the entire div clickable
  
  // Move the content (child elements) into the anchor
  while (batchElement.firstChild) {
    anchor.appendChild(batchElement.firstChild);
  }

  // Append the anchor back into the batch element
  batchElement.appendChild(anchor);
});
/*******************Department hrefs***********************/
// Define an object with card IDs as keys and their corresponding links
const cardLinks = {
  "card-cse": "Dept-CSE.html",
  "card-csbs": "csbs.html",
  "card-ece": "ece.html",
  "card-eee": "eee.html",
  "card-ee": "ee.html",
  "card-me": "me.html",
  "card-mca": "mca.html"
};

// Iterate through each entry in the object
Object.keys(cardLinks).forEach(cardId => {
  const cardElement = document.getElementById(cardId); // Get the element by its ID
  const link = cardLinks[cardId]; // Get the corresponding link

  // Create an anchor element
  const anchor = document.createElement('a');
  anchor.href = link; // Set the href attribute
  anchor.className = 'card-link'; // Add a class for styling
  anchor.style.textDecoration = 'none'; // Remove underline
  anchor.style.color = 'inherit'; // Keep the color the same as the parent
  anchor.style.display = 'block'; // Make the entire div clickable
  
  // Move the content (child elements) into the anchor
  while (cardElement.firstChild) {
    anchor.appendChild(cardElement.firstChild);
  }

  // Append the anchor back into the card element
  cardElement.appendChild(anchor);
});

