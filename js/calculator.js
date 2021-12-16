const wordToLetter = {'a':1,'b':2,'c':3,'d':4,'e':5,
                    'f':6,'g':7,'h':8,'i':9,'j':10,
                    'k':11,'l':12,'m':13,'n':14,'o':15,
                    'p':16,'q':17,'r':18,'s':19,'t':20,
                    'u':21,'v':22,'w':23,'x':24,'y':25,'z':26}

function clearCalculator() {
    document.getElementById("result").style.display = "none";
    document.getElementById("calcClear").style.display = "none";
    document.getElementById("inputOne").value = "";
    document.getElementById("inputTwo").value = "";

}

function runCalculator() {
    const nameOne = String(document.getElementById("inputOne").value);
    const nameTwo = String(document.getElementById("inputTwo").value);
    console.log("test1")

    if (nameOne.toLowerCase().includes("jacob") || nameTwo.toLowerCase().includes("jacob")) {
        
        let loveOdds = 17;
        console.log("test2")

    } else {
        console.log("test3")
        let nameOneAverage = nameAverage(nameOne);
        let nameTwoAverage = nameAverage(nameTwo);
    
        let loveOdds = calculateOdds(nameOneAverage, nameTwoAverage);
    }
    console.log("test4")
    let loveOutput = outputGenerator(loveOdds);
    
    const container = document.getElementById("result");
    let htmlOutput = "";
    htmlOutput = nameOne + " and " + nameTwo + " are " + loveOdds + "% compatible; " + loveOutput;

    document.getElementById("result").style.display = "block";
    container.innerHTML = htmlOutput;
    document.getElementById("calcClear").style.display = "block";

}

function nameAverage(nameIn) {
    let nameInLower = nameIn.toLowerCase();
    let nameInList = nameInLower.split("");

    for (let i = 0; i < nameInList.length; i++) {
        if (nameInList[i] === " "){
            nameInList.splice(i, 1);
        }
    }

    for (let i = 0; i < nameInList.length; i++) {
        nameInList[i] =  wordToLetter[nameInList[i]];
    }
    const reducer = (accumulator, currentValue) => accumulator + currentValue;
    let nameSum = nameInList.reduce(reducer);

    return (nameSum / nameInList.length);
}

function calculateOdds(avgOne, avgTwo) {
    let finalRating = 1 - (Math.abs(avgOne - avgTwo) / 25 );
    return Math.round(finalRating*100);
}

function outputGenerator(loveNumber) {
    if (loveNumber <= 10) {
        return "I'm sorry, but it's hopeless."
    } else if (loveNumber <= 20) {
        return "the odds do not look good."
    } else if (loveNumber <= 30) {
        return "those are long odds, but crazier things have happened."
    } else if (loveNumber <= 40) {
        return "It's not great, but there is a chance."
    } else if (loveNumber <= 50) {
        return "that is almost a toss-up!"
    } else if (loveNumber <= 60) {
        return "that compatibility is good enough for a first date!"
    } else if (loveNumber <= 70) {
        return "this could be a successful relationship!"
    } else if (loveNumber <= 80) {
        return "I like those odds!"
    } else if (loveNumber <= 90) {
        return "they're like white on rice!"
    } else {
        return "somebody call the fire department, this perfect match is hot, hot, hot!"
    }
}
