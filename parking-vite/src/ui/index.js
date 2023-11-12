import {  parkingUi } from "./admin/parking.js";
import {  carInByButton} from "./client/car-in-ballet.js";
import { carInByClick } from "./client/car-in-click.js";

 let inputPlaces;
 export const objData = {
    paymentHistory: [],
    currentCars: {}
  };
  

 const ArrPlacesAvailable = [];

export const createParking = () => {
    const button = document.getElementById("button1");
    const placesParking = document.getElementById("placesParking");
    button.onclick = () => {
      inputPlaces = parseInt(document.getElementById("numeroPlazas").value);
      if (isNaN(inputPlaces) || inputPlaces < 1) {
        errorMessage.textContent = "Please enter a valid positive number.";
        return; // Salir de la función si no es un número positivo
      }
      errorMessage.textContent = "";
      parkingUi(inputPlaces,ArrPlacesAvailable);
  
      carInByButton(ArrPlacesAvailable,inputPlaces, objData)
      const addCarDiv = document.getElementById("divAddCar");
      addCarDiv.style.display = "block";
      placesParking.style.display = "none";
  
      carInByClick(ArrPlacesAvailable,inputPlaces, objData);
    };
   
  };