window.addEventListener("load", function () {

    let mainInput =  document.getElementById("main-input");
    mainInput.onchange = function(e){
        console.log("change", e);
        console.log(mainInput.value);

        let colorLabel = document.getElementById("main-input-color");
        colorLabel.value = mainInput.value;
        colorLabel.innerHTML = mainInput.value;
    }

});

