//Make sure that the functions arent ran until the DOM has loaded.
window.onload=function(){

//Using the addEventListener, when the submit button with the ID = 'url-generator' is clicked the function generateURL(event) is called.
document.getElementById('url-generator').addEventListener('submit', generateURL);

//This event is called when the user hits submit
function generateURL(event) {
  //Prevent the submit button from reloading the page
  event.preventDefault();

  //Checking that all the appropriate fields; programme_id, channel_id and redirect_to are filled with a value.
  if (document.getElementById('programme_id').value === '' || document.getElementById('channel_id').value === '' || document.getElementById('redirect_to').value === '') {
    alert('Please make sure all of the fields have their appropriate values.');
  }

  //Using an else, this way when the user hits submit and the input fields are empty a string wont be printed, therefore
  //only when the input fields are filled can a string be printed.
  else {

  //As these are simple string/integer input fields, the .value attribute can be used alongside getElementById method
  var programme_id = document.getElementById('programme_id').value,
      channel_id = document.getElementById('channel_id').value,
      redirect_to = document.getElementById('redirect_to').value;

  //This would need to be changed to whatever the URL has to be, however this is the URL given by the task description
  var generatedURL = ('http://localhost:3000/ww/form_builder/forms/14/completions/new?programme_id=' + programme_id + '&channel_id=' + channel_id + '&redirect_to=/' + redirect_to);

  //log the console
  console.log(generatedURL);

  //Print the new URl for the user
  document.getElementById("newURL").innerHTML = generatedURL;

}

}
}
