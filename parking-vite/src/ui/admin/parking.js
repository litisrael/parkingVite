



export const parkingUi = (inputPlaces,ArrPlacesAvailable) => {
  const parkingContainer = document.createElement("div");
  const parkingArea = document.getElementById("parking");

  parkingArea.innerHTML = "";

  parkingContainer.classList.add("parking-container");

  // Create the parking spots and add them to the container
  for (let i = 0; i < inputPlaces; i++) {
    const plaza = document.createElement("div");
    plaza.classList.add("plaza");

    parkingContainer.appendChild(plaza);
    plaza.id = `plaza-${i + 1}`;

    plaza.innerText = (i + 1).toString();

    ArrPlacesAvailable[i] = true;
  }

  // Add the parking container to the parking area
  document.getElementById("parking").appendChild(parkingContainer);
};
