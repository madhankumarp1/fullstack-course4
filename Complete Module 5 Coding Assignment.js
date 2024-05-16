// STEP 0: Make an array of category short names
var categoryShortNames = ["L", "D", "SP", "VG", "DS", "CU1", "CU2", "CU3"];

// STEP 1: Randomly choose a category short name
var randomCategoryShortName = categoryShortNames[Math.floor(Math.random() * categoryShortNames.length)];

// STEP 2: Replace {{randomCategoryShortName}} in home-snippet.html with chosen category short name
document.addEventListener("DOMContentLoaded", function (event) {
  // STEP 3: Load home-snippet.html
  $ajaxUtils.sendGetRequest(
    homeHtmlUrl,
    function (responseText) {
      // STEP 4: Update the content
      responseText = insertProperty(responseText, "randomCategoryShortName", randomCategoryShortName);
      insertHtml("#main-content", responseText);
    },
    false); // Don't process as JSON, since it's just HTML
});
