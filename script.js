function changeTextColor() {
    let PH1 = document.getElementById("PH1")
    if (PH1.style.color === "black") {
        PH1.style.color = "red"

        //console.log("turning red")
    } else {
            PH1.style.color = "black"
            // console.log("turning black")
        }
}



const handleButtonColorChange = () => {
    let button = document.getElementById('target')
    //button.style.backgroundColor = "red"
    if(button.style.backgroundColor === 'green'){
        button.style.backgroundColor = 'red'
    }else{
        button.style.backgroundColor = 'green'
    }
}

function changeWords() {
    let mySentence = document.getElementById("discoTime").innerHTML;

   // mySentence.replace("jazz", "disco");
    let newSentence = mySentence.replace(/jazz/gi, "disco");

    document.getElementById("discoTime").innerHTML = mySentence;

    // This replaces multiple words
    // let newSentence = mySentence.replace(/jazz/g, "disco");


}

// function changeTheWords() {
//     let mySentence = document.getElementById("changeIt").innerHTML;
//
//     //let newSentence = mySentence.replace("monkey", "tasmanian devil");
//
//     // This replaces multiple words
//     let newSentence = mySentence.replace(/monkey/g, "tasmanian devil");
//
//     document.getElementById("changeIt").innerHTML = newSentence;
// }

function changeTheWords() {
    let mySentence = document.getElementById("sample").innerHTML;

    //let newSentence = mySentence.replace("monkey", "tasmanian devil");

    // This replaces multiple words
    let newSentence = mySentence.replace(/monkey/g, "tasmanian devil");

    document.getElementById("sample").innerHTML = newSentence;
}

