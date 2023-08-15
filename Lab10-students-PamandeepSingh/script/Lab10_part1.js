function changeColor(){
    
    const radioButtons = document.getElementsByName("color");
    let selectedColor;

    for (const radioButton of radioButtons) 
    {
        if (radioButton.checked) 
        {
            selectedColor = radioButton.value;
            break;
        }
    }

    if (selectedColor)
    {
        document.getElementById("text").style.color = selectedColor;
    }
    

}

// var fontColorArray = ["gray","slategray","darkblue","teal","maroon","black"];
// var bgColorArray = ["azure","linen","snow","powderblue","ivory","lightpink","lightyellow"];

// var curFontColor=1;
// var curBgColor=1;

// function changeFontColor(){
// }

// function changeBgColor(){
// }

function changeBg(){
    
    const selectElement = document.getElementById("colorsel");
    const selectedColor = selectElement.value;

    if (selectedColor === "nothing") 
    {
        document.getElementById("td_text").style.backgroundColor = "initial";
    } 
    else 
    {
        document.getElementById("td_text").style.backgroundColor = selectedColor;
    }
    

}
