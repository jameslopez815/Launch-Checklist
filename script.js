// Write your JavaScript code here!

// wait for the window to load and then execute the code
window.addEventListener("load", function() {
    myFetch().then((listedPlanets) => {
      const planet = pickPlanet(listedPlanets);
      addDestinationInfo(document, planet.name, planet.diameter, planet.star, planet.distance, planet.moon, planet.image);
    });
  
    // Get the button element with the id "formSubmit"
    const button = document.getElementById("formSubmit");
  
    // Add a click event listener to the button
    button.addEventListener("click", function(event) {
      event.preventDefault();
     
      // Call the formSubmission function with input values when the button is clicked
      formSubmission(
        document,
        document.getElementById("faultyItems"),
        document.querySelector("input[name=pilotName]").value,
        document.querySelector("input[name=copilotName]").value,
        document.querySelector("input[name=fuelLevel]").value,
        document.querySelector("input[name=cargoMass]").value
      );
    });
  });
  
  