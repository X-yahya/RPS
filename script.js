const paper = document.querySelector("#paper");
const rock = document.querySelector("#rock");
const scissors = document.querySelector("#scissors");
const pScore = document.querySelector("#pnum");
const cmpS = document.querySelector("#cnum");

let pcs = 0;
let cmps = 0;
let round = 0;

function computerChoice() {
    const choices = [paper.id, rock.id, scissors.id];
    const index = Math.floor(Math.random() * choices.length);
    return choices[index];
}

function detWinner(pc, cc) {
    if (cc === pc) {
        return "draw";
    } else if ((pc === "rock" && cc == "scissors") || (pc === "paper" && cc === "rock") || (pc === "scissors" && cc === "paper")) {
        pcs += 1;
        pScore.textContent = pcs;
        return "win";
    } else {
        cmps += 1;
        cmpS.textContent = cmps;
        return "lose";
    }
}
function playRound(pc) {
    const cmp = computerChoice();
    document.getElementById(pc).classList.add("selected");
    document.getElementById(`cmp${cmp}`).classList.add("selected");
    setTimeout(() => {
        document.getElementById(`cmp${cmp}`).classList.remove("selected");
    }, 500);

    const result = detWinner(pc, cmp);
    document.getElementById("result-text").textContent = result.toUpperCase();

    round += 1;

    if (pcs === 3 || cmps === 3) {
        setTimeout(() => {
            alert(`Game Over! Player: ${pcs} , Computer: ${cmps}`);
            alert("Starting New Round ");
            pcs = 0;
            cmps = 0;
            round = 0;
            cmpS.textContent = cmps;
            pScore.textContent = pcs;
            document.getElementById("result-text").textContent = "";
            document.querySelectorAll(".selected").forEach((elem) => elem.classList.remove("selected"));
        }, 1000);
    } else {
        setTimeout(() => {
            document.getElementById("result-text").textContent = "";
            document.querySelectorAll(".selected").forEach((elem) => elem.classList.remove("selected"));
        }, 1000);
    }
}

paper.addEventListener("click", () => {
    playRound("paper");
    round++;
});

rock.addEventListener("click", () => {
    playRound("rock");
    round++;
});

scissors.addEventListener("click", () => {
    playRound("scissors");
    round++;
});
