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

