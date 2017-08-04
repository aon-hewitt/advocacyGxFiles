//custom events section

//This function is specified in the walmart config file and is needed only for walmart to handle 'back to main menu' hotspot
function backToMainMenuEvent() {
    homeEventHandler("returnIntro");
}


var codeString = "";
function tallyAnswerA1(d) {
    if (codeString.search("A1") == -1) {
        codeString += "A1";
    }  
    defaultEventHandler(d);
}
function tallyAnswerA2(d) {
    if (codeString.search("A2") == -1) {
        codeString += "A2";
    } 
    defaultEventHandler(d);
}
function tallyAnswerA3(d) {
    if (codeString.search("A3") == -1) {
        codeString += "A3";
    } 
    defaultEventHandler(d);
}
function tallyAnswerA4(d) {
    if (codeString.search("A4") == -1) {
        codeString += "A4";
    } 
    defaultEventHandler(d);
}
function tallyAnswerA5(d) {
    if (codeString.search("A5") == -1) {
        codeString += "A5";
    } 
    defaultEventHandler(d);
}

function tallyAnswerB1(d) {
    if (codeString.search("B1") == -1) {
        codeString += "B1";
    }
    defaultEventHandler(d);
}
function tallyAnswerB2(d) {
    if (codeString.search("B2") == -1) {
        codeString += "B2";
    }
    defaultEventHandler(d);
}
function tallyAnswerB3(d) {
    if (codeString.search("B3") == -1) {
        codeString += "B3";
    }
    defaultEventHandler(d);
}
function tallyAnswerB4(d) {
    if (codeString.search("B4") == -1) {
        codeString += "B4";
    }
    defaultEventHandler(d);
}
function tallyAnswerB5(d) {
    if (codeString.search("B5") == -1) {
        codeString += "B5";
    }
    defaultEventHandler(d);
}

function tallyAnswerC1(d) {
    if (codeString.search("C1") == -1) {
        codeString += "C1";
    }
    defaultEventHandler(d);
}
function tallyAnswerC2(d) {
    if (codeString.search("C2") == -1) {
        codeString += "C2";
    }
    defaultEventHandler(d);
}
function tallyAnswerC3(d) {
    if (codeString.search("C3") == -1) {
        codeString += "C3";
    }
    defaultEventHandler(d);
}
function tallyAnswerC4(d) {
    if (codeString.search("C4") == -1) {
        codeString += "C4";
    }
    defaultEventHandler(d);
}


//This function is an example of a custom event handler. It can replace a default behavior and sends the user to topQuestions every thursday.
function myEvent(onscreenElementIndex) {
    var video;
    var date = new Date().getDay();
    if (date != 4) { //on every day except thursday
        defaultEventHandler(onscreenElementIndex);
        return;
    } else {     
        video = "topQuestions"
    }
    loadNewVideo(video, true);
    $("#myPlayerIDContainer").css("display", "block");
    waitSequenceShowing = false;
}
