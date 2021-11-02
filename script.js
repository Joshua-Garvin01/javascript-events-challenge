const handleButtonColorChange = () => {
    let button = document.getElementById('target')
    //button.style.backgroundColor = "red"
    if(button.style.backgroundColor === 'green'){
        button.style.backgroundColor = 'red'
    }else{
        button.style.backgroundColor = 'green'
    }
}

function changeTextColor() {
    let PH1 = document.getElementById("PH1")
    if (PH1.style.color === "black") {
        PH1.style.color = "red"

    } else {
            PH1.style.color = "black"

        }
}

function changeTheWords() {
    let mySentence = document.getElementById("discoTime").innerHTML;

    let newSentence = mySentence.replace(/jazz/gi, "DISCO-TIME!!!");

    document.getElementById("discoTime").innerHTML = newSentence;
}

function changeOneWord() {
    let mySentence = document.getElementById("seeYouLater").innerHTML;
    let newSentence = mySentence.replace("hello", "goodbye");
    document.getElementById("seeYouLater").innerHTML = newSentence;
}
