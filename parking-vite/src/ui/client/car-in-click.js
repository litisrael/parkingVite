// import { inputPlaces, placesAvailable as ArrPlacesAvailable } from "../admin/parking.js";


export const carInByClick = (ArrPlacesAvailable,inputPlaces, objData) => {
  const input = document.getElementById("entryId");
  // Obtener todos los elementos con la clase "plaza"
  const plazas = document.querySelectorAll(".plaza");

  // Agregar un evento de clic a cada elemento
  plazas.forEach((plaza, index) => {
    plaza.addEventListener("click", () => {
      // Obtener el id del elemento clicado
      if (input.value.length < 1) {
        errorMessage.textContent = "The field cannot be empty.";
        return;
      }
      errorMessage.textContent = "";

      const plazaIndex = index;

      parkingInByClick(input.value, parseInt(inputPlaces), plazaIndex,ArrPlacesAvailable ,objData);
      input.value = "";
    });
  });
};


export const parkingInByClick = (
  entryId,
  places,
  index,
  ArrPlacesAvailable,
  objData,
  currentTime = new Date()
) => {
  if (objData.currentCars[entryId]) {
    errorMessage.textContent = "There is already a car with the same ID";
    return;
  }

  if (Object.keys(objData.currentCars).length >= places) {
    console.log("not places available");
    return;
  }
  if (index !== null && ArrPlacesAvailable[index] == true) {
    ArrPlacesAvailable[index] = false;
    let red = document.getElementById(`plaza-${index + 1}`);
    red.style.backgroundColor = "red";

    // const entryId = generateEntryId(); // Puedes implementar tu propia lógica para generar un ID único
    objData.currentCars[entryId] = {
      timeIn: currentTime,
      day: currentTime.toLocaleDateString()
    };

    console.log("Updated parkingLog:", objData.currentCars);
    console.log(
      `Places available: ${places - Object.keys(objData.currentCars).length}`
    );
  } else {
    console.log("Invalid click or parking space is already taken");
  }
};
