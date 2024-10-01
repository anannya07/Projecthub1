/****************project topic hrefs************** */
document.getElementById('clickable-card').addEventListener('click', function() {
    window.location.href = 'ai-ml.html'; // Redirect to the new page
  });
  document.getElementById('clickable-card2').addEventListener('click', function() {
    window.location.href = 'data_science.html'; // Redirect to the new page
  });
  document.getElementById('clickable-card3').addEventListener('click', function() {
    window.location.href = 'cyber_security.html'; // Redirect to the new page
  });
  document.getElementById('clickable-card4').addEventListener('click', function() {
    window.location.href = 'web3.html'; // Redirect to the new page
  });
  document.getElementById('clickable-card5').addEventListener('click', function() {
    window.location.href = 'IoT.html'; // Redirect to the new page
  });
  document.getElementById('clickable-card6').addEventListener('click', function() {
    window.location.href = 'home_automation.html'; // Redirect to the new page
  });
  document.getElementById('clickable-card7').addEventListener('click', function() {
    window.location.href = 'ar_vr.html'; // Redirect to the new page
  });
  document.getElementById('clickable-card8').addEventListener('click', function() {
    window.location.href = 'finance.html'; // Redirect to the new page
  });
  document.getElementById('clickable-card9').addEventListener('click', function() {
    window.location.href = 'health_care.html'; // Redirect to the new page
  });



  /*******batch page hrefs*********** */
  // Define an object with batch IDs as keys and their corresponding links
const batchLinks = {
  "batch-2024": "Batch-2024.html",
  "batch-2023": "Batch-2023.html",
  "batch-2022": "Batch-2022.html",
  "batch-2021": "Batch-2021.html",
  "batch-2020": "Batch-2020.html"
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
  "card-csbs": "Dept-CSBS.html",
  "card-ece": "Dept-ECE.html",
  "card-eee": "Dept-EEE.html",
  "card-ee": "Dept-EE.html",
  "card-me": "Dept-ME.html",
  "card-mca": "Dept-MCA.html"
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

