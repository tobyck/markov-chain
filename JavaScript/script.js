var text = fetch("https://raw.githubusercontent.com/TobyCK/markov-chain-training/main/longtraining.txt")
.then(x => x.text())
.then(y => {
    training = y.split(" ").slice(0, y.split(" ").length-1); 
    training.push(y.split(" ")[0]); 
});

function generate() {      
    if ($("#seed").val()[$("#seed").val().length-1] == " ") {
        final = $("#seed").val()
    } else {
        final = $("#seed").val()+" "
    }
    for (let i = 0; i < parseInt($("#length").val()); i++) {
        var list = final.split(" ");
        var lastWord = list.slice(0, list.length-1)[list.slice(0, list.length-1).length-1];
        if (!training.includes(lastWord)) {
            alert("Please enter a different seed.")
            $("#seed").val("");
            return;
        }
        var optionIndicies = [], options = [];
        for (let j = 0; j < training.length-1; j++) if (training[j] == lastWord) optionIndicies.push(j+1);
        for (let k = 0; k < optionIndicies.length; k++) options.push(training[optionIndicies[k]]);
        final += options[Math.floor(Math.random()*options.length)]+" ";
    }
    $("#final").html(final.replace(/\n|\n\n|\(|\)/g, ""))
}

document.addEventListener("keydown", evt => {
    if (evt.keyCode == 13) {
        if ($("#length").val().length < 1 && $("#seed").is(":focus")) {
            $("#length").focus()
        } else {
            generate();
        }
    }
});
