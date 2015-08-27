// create a select element and append to #menu
var $select = $("<select></select>");
$("#menu").append($select);

// cycle over menu links
$("#menu a").each(function(){
  var $anchor = $(this);
  // create an option
  var $option = $("<option></option>");  
  // deal with selected options depending on current page
  if ($anchor.parent().hasClass("selected")) {
    $option.prop("selected", true);
  };
  // set option's value to href
  $option.val($anchor.attr("href"));
  // option's text is the text of the link
  $option.text($anchor.text());
  // append option to select
  $select.append($option);
})
// bind change listener to the select
$select.change(function(){
  // go to "select" location
  window.location = $select.val();
});