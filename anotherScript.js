function changeTheWords() {
    let mySentence = document.getElementById("discoTime").innerHTML;

    let newSentence = mySentence.replace(/jazz/gi, "disco");

    document.getElementById("discoTime").innerHTML = newSentence;
}