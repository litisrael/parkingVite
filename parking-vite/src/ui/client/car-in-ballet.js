// import { inputPlaces, ArrPlacesAvailable } from "../admin/parking.js";





export const carInByButton = (ArrPlacesAvailable,inputPlaces,objData) => {
  const button = document.getElementById("addCar");
  // const input =  document.getElementById("entryId").value
  const input = document.getElementById("entryId");
  button.onclick = () => {
    if (input.value.length < 1) {
      errorMessage.textContent = "El campo no puede estar vacío.";
      return;
    }
    errorMessage.textContent = "";
    parkingInButton(ArrPlacesAvailable, input.value, parseInt(inputPlaces) , objData);
    input.value = ""; // Borra el contenido del input estableciéndolo como una cadena vacía
  };
};

export const parkingInButton = (ArrPlacesAvailable , entryId, places,objData, currentTime = new Date()) => {
  if (objData.currentCars[entryId]) {
   
      errorMessage.textContent = "There is already a car with the same ID";
    return;

  }

  if (Object.keys(objData.currentCars).length >= places) {
    console.log("not places available");
    return;
  }

  const index = ArrPlacesAvailable.indexOf(true);
  console.log("index", index);
  ArrPlacesAvailable[index] = false;
  let red = document.getElementById(`plaza-${index + 1}`);
  red.style.backgroundColor = "red";
  console.log(`plaza-${index + 1}`);

  objData.currentCars[entryId] = {
    timeIn: currentTime,
    day: currentTime.toLocaleDateString()
  };
  console.log(
    "Object.keys(data.currentCars).length",
    Object.keys(objData.currentCars).length
  );

  console.log("Updated parkingLog:", objData.currentCars);
  console.log(
    `places available  ${places - Object.keys(objData.currentCars).length}`
  );
};


