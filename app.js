const body = document.body;
// let lang = 'English';
const mainSection = document.createElement("section");
const keyboard = document.createElement("div");
const textArea = document.createElement("textarea");

const h1 = document.createElement("h1");
h1.textContent = "Virtual Keyboard for Windows";
const p = document.createElement("p");
p.innerHTML = "Press <strong>rightCtrl + rightAlt</strong> to change language";

mainSection.classList.add("main");
body.insertAdjacentElement("afterbegin", mainSection);

textArea.setAttribute("rows", "5");
textArea.setAttribute("cols", "46");
textArea.setAttribute("wrap", "hard");
textArea.setAttribute("autofocus", "autofocus");
textArea.setAttribute("placeholder", "Start writing...");
textArea.classList.add("text-area");

keyboard.classList.add("keyboard");

mainSection.append(h1);
mainSection.append(p);
mainSection.append(textArea);
mainSection.append(keyboard);

//capslock indikator
const orangeRound = document.createElement("div");
orangeRound.classList.add("orangeRound");

//sound
const soundTag = document.createElement("audio");

// createKey(keyArr);
start();
//create keys
function createKey(arr) {
    keyboard.innerHTML = "";
    for (let i = 0; i < arr.length; i++) {
        let keyButton = document.createElement("button");
        let keyButtonKey2 = document.createElement("p");

        keyButton.setAttribute("id", `${arr[i].id}`);
        keyButton.classList.add("btn");

        keyButton.style.background = hexaColor();
        keyButtonKey2.classList.add("key2");
        keyButtonKey2.textContent = arr[i].key2;

        if (keyButton.textContent) {
            keyButton.innerText = keyButton.textContent;
        } else {
            keyButton.innerText = `${arr[i].key}`;
        }
        if (arr[i].key2) {
            keyButton.append(keyButtonKey2);
        }
        keyboard.appendChild(keyButton);
    }
    try {
        const capsLock = document.querySelector("#CapsLock");
        capsLock.style.position = "relative";
        capsLock.append(orangeRound);
    } catch (err) {
        console.log(err);
    }
    const ukFlag = document.createElement("div");
    ukFlag.setAttribute("class", "flag");
    const space = document.querySelector("#Space");
    space.append(ukFlag);
}
createAudio();

document.addEventListener("keydown", (event) => {
    const ukFlag = document.querySelector(".flag");
    textArea.focus();
    let eventCode = document.querySelector(`#${event.code}`);
    eventCode.classList.add("active"); //active class for button
    console.log(event);
    // console.log(event.code);
    if (event.code === "Enter") {
        event.preventDefault();
        console.log(textArea.value);
        textArea.value += "\n";
    } else if (event.code === "Backspace") {
        textArea.innerText = textArea.innerText.slice(0, -1);
    }
    //caps
    if (event.code === "CapsLock") {
        orangeRound.classList.toggle("orange");
    }
    //del+tab
    const cursorPosition = textArea.selectionStart;
    if (event.key === "Tab") {
        event.preventDefault();
        const text = textArea.value;
        textArea.value =
            text.substring(0, cursorPosition) +
            "    " +
            text.substring(cursorPosition);
    }
    if (event.key === "Delete") {
        const end = textArea.selectionEnd;
        if (cursorPosition === end) {
            textArea.value =
                textArea.value.slice(0, cursorPosition) +
                textArea.value.slice(cursorPosition + 1);
            textArea.setSelectionRange(cursorPosition, cursorPosition);
        } else {
            textArea.value =
                textArea.value.slice(0, cursorPosition) +
                textArea.value.slice(end);
            textArea.setSelectionRange(cursorPosition, cursorPosition);
        }
        event.preventDefault();
    }
    //change lang
    if (event.ctrlKey && event.altKey) {
        if (localStorage.getItem("language") !== "Polish") {
            createKey(keyArrPolish);
            const ukFlag = document.querySelector(".flag");
            ukFlag.classList.add("flag_pol");
            localStorage.setItem("language", "Polish");
        } else if (localStorage.getItem("language") !== "English") {
            createKey(keyArr);
            const ukFlag = document.querySelector(".flag");
            ukFlag.classList.remove("flag_pol");
            localStorage.setItem("language", "English");
        }
    }
    soundTag.play();
});

//animate btn remove when keyup
document.addEventListener("keyup", (event) => {
    let eventCode = document.querySelector(`#${event.code}`);
    eventCode.classList.remove("active");
    textArea.focus();
});

//shft=>UpperCase
document.querySelectorAll(".btn").forEach(function (key) {
    key.addEventListener("click", function () {
        let letter = key.textContent;
        if (shiftPressed) {
            letter = letter.toUpperCase();
        }
    });
});

//arrows
document.addEventListener("keydown", function (event) {
    if (event.key === "ArrowUp") {
        arrowsEvent(event, "↑");
    } else if (event.key === "ArrowDown") {
        arrowsEvent(event, "↓");
    } else if (event.key === "ArrowRight") {
        arrowsEvent(event, "→");
    } else if (event.key === "ArrowLeft") {
        arrowsEvent(event, "←");
    }
});

//function for arrows when arrow arg is arrow symbol as a string "←"
function arrowsEvent(event, arrow) {
    event.preventDefault();
    const cursorPosition = textArea.selectionStart;
    const text = textArea.value;
    textArea.value =
        text.substring(0, cursorPosition) +
        `${arrow}` +
        text.substring(cursorPosition); // insert "↑" symbol at the cursor position
    textArea.selectionEnd = cursorPosition + 1; // move cursor one position to the right
}

document.addEventListener("click", () => {
    soundTag.play();
});

//change language

// function flagFromStorage() {
//     const ukFlag = document.querySelector(".flag");
//     if (localStorage.getItem("language") === "Polish") {
//         ukFlag.classList.add("flag_pol");
//         // localStorage.setItem("language", "English");
//         createKey(keyArrPolish);
//     } else if (localStorage.getItem("language") === "English") {
//         ukFlag.classList.remove("flag_pol");
//         // localStorage.setItem("language", "Polish");
//         createKey(keyArr);
//     }
// }

function start() {
    if (
        localStorage.getItem("language") === "English" ||
        !localStorage.getItem("language")
    ) {
        createKey(keyArr);
        localStorage.setItem("language", "English");
        const ukFlag = document.querySelector(".flag");
        ukFlag.classList.remove("flag_pol");
    }
    if (localStorage.getItem("language") === "Polish") {
        createKey(keyArrPolish);
        const ukFlag = document.querySelector(".flag");
        ukFlag.classList.add("flag_pol");
    }
}
