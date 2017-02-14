var link = document.querySelector(".button-search");
var popup = document.querySelector(".popup-form");
var form = popup.querySelector(".search-hotel-sedona");
var adults = popup.querySelector(".popup-age-adults");
var children = popup.querySelector(".popup-age-children");
var StorageAdults = localStorage.getItem("adults");
var StorageChildren = localStorage.getItem("children");


link.addEventListener("click", function(event) {
   event.preventDefault();
   popup.classList.toggle("popup-form-show");
    
   if (StorageAdults) {
       adults.value = StorageAdults;
   }
   if (StorageChildren) {
       children.value = StorageChildren;
   } 
});

form.addEventListener("submit", function(event) {
   if (!adults.value || !children.value) {
   event.preventDefault();
   console.log("Приветики!")
   } else {
   localStorage.setItem("adults", adults.value);
   localStorage.setItem("children", children.value);
   }
});

window.addEventListener("keydown", function(event)
   {
  if (event.keyCode === 27) {
    if (popup.classList.contains("popup-form-show")) {
    popup.classList.remove("popup-form-show");
    }
  }
});