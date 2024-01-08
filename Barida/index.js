// Assuming you've already loaded the JSON data into the variable `juices` from db.json

document.addEventListener("DOMContentLoaded", function() {
    const baridaJuiceDiv = document.getElementById("Barida juice");
  
    // Loop through each juice from the JSON data
    juices.forEach((juice, index) => {
      // Create a checkbox element
      const checkbox = document.createElement("input");
      checkbox.type = "checkbox";
      checkbox.id = `juice${index}`;
      checkbox.value = juice.name;
  
      // Create a label for the checkbox
      const label = document.createElement("label");
      label.htmlFor = `juice${index}`;
      label.appendChild(document.createTextNode(juice.name));
  
      // Append checkbox and label to Barida juice div
      baridaJuiceDiv.appendChild(checkbox);
      baridaJuiceDiv.appendChild(label);
      baridaJuiceDiv.appendChild(document.createElement("br"));
    });
  });
  