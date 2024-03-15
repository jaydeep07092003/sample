const form = document.querySelector("form"),
        nextBtn = form.querySelector(".nextBtn"),
        backBtn = form.querySelector(".backBtn"),
        allInput = form.querySelectorAll(".first input");


nextBtn.addEventListener("click", ()=> {
    allInput.forEach(input => {
        if(input.value != ""){
            form.classList.add('secActive');
        }else{
            form.classList.remove('secActive');
        }
    })
})

function toggleOccupationType() {
    var categorySelect = document.getElementById("category");
    var occupationTypeDiv = document.getElementById("occupationType");
  
    if (categorySelect.value === "service_provider") {
      occupationTypeDiv.style.display = "flex";
    } else {
      occupationTypeDiv.style.display = "none";
    }
  }
  

backBtn.addEventListener("click", () => form.classList.remove('secActive'));