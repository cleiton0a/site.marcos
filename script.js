// Handling click on elements with the class "email"
const gmail = document.querySelector(".email");
if (gmail) {
  gmail.addEventListener("click", function(e) {
    window.location.href = "mailto:marcosagoliveira10@gmail.com";
  });
} else {
  console.error("Element with class 'email' not found");
}

// Continue with the same pattern for other elements...


// Handling click on elements with the class "facebook"
// Handling click on elements with the class "facebook"
const facebok = document.querySelector(".facebook");
if (facebok) {
  facebok.addEventListener("click", function(e) {
    window.location.href = "https://www.facebook.com/pintmais?locale=pt_BR";
  });
} else {
  console.error("Element with class 'facebook' not found");
}

// Continue with the same pattern for other elements...

// Handling click on elements with the class "whatsapp"
const whatsapp = document.querySelector(".whatsapp");
whatsapp.addEventListener("click", function(e) {
  window.location.href = "https://wa.me/+5551996730376";
});

// Handling click on elements with the class "facebo"
// Handling click on elements with the class "facebo"
const face = document.querySelector(".facebo");
if (face) {
  face.addEventListener("click", function(e) {
    window.location.href = "https://www.facebook.com/pintmais?locale=pt_BR";
  });
} else {
  console.error("Element with class 'facebo' not found");
}
// Handling click on elements with the class "instagram"
const instagram = document.querySelector(".instagram");
if (instagram) {
  instagram.addEventListener("click", function(e) {
    window.location.href = "https://www.instagram.com/marquinhospinturas10/?igshid=OGQ5ZDc2ODk2ZA%3D%3D";
  });
} else {
  console.error("Element with class 'instagram' not found");
}
