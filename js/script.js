const body = document.querySelector("body");
const game = document.querySelector(".game");
const h1 = document.querySelector("h1");
const reset = document.querySelector(".reset");

const ash = document.querySelector("#ash");

const charmander = document.querySelector("#charmander");
const pikachu = document.querySelector("#pikachu");
const zubat = document.querySelector("#zubat");

function getRightPosition() {
    return parseInt(ash.style.right) || 2;
};

function getTopPosition() {
    return parseInt(ash.style.top) || 2;
};

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

body.addEventListener("keydown", Event => {
    Event.stopPropagation()

    sleep(100).then(() => {

        console.log(Event.code)

        switch (Event.code) {
            case "KeyS":
                console.log(getTopPosition());
                if ((getTopPosition() + 75) < 675) {
                    ash.style.top = (getTopPosition() + 75) + "px";
                }
                ash.src = "assets/front.png";
                break;

            case "KeyD":
                console.log(getRightPosition());
                if (0 < (getRightPosition() - 75)) {
                    ash.style.right = (getRightPosition() - 75) + "px";
                }
                ash.src = "assets/right.png";
                break;

            case "KeyA":
                console.log(getRightPosition());
                if ((getRightPosition() + 75) < 825) {
                    ash.style.right = (getRightPosition() + 75) + "px";
                }
                ash.src = "assets/left.png";
                break;

            case "KeyW":
                console.log(getTopPosition());
                if (0 < (getTopPosition() - 75)) {
                    ash.style.top = (getTopPosition() - 75) + "px";
                }
                ash.src = "assets/back.png";
                break;

            default:
                break;
        }
    });
});