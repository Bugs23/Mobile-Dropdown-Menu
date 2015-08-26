// Create a select and append to #menu
var $select = $("<select></select>");
$("#menu").append($select);

// Cycle over menu links
$("#menu a").each(function(){
  var $anchor = $(this);
  // Create an option
  var $option = $("<option></option>");  
  // Deal with selected options depending on current page
  if ($anchor.parent().hasClass("selected")) {
    $option.prop("selected", true);
  };
  // Set option's value to href
  $option.val($anchor.attr("href"));
  // Option's text is the text of the link
  $option.text($anchor.text());
  // Append option to select
  $select.append($option);
})
// Bind change listener to the select
$select.change(function(){
  // Go to "select" location
  window.location = $select.val();
});