const keyboard = document.querySelector(".keyboard");
const textArea = document.querySelector(".text-area");

function createKey(arr) {
    for (let i = 0; i < arr.length; i++) {
        let keyButton = document.createElement("button");
        keyButton.setAttribute("id", `${arr[i].id}`);
        keyButton.innerText = `${arr[i].key}`;
        keyButton.classList.add("key");
        keyboard.appendChild(keyButton);
        // if (arr[i].before) {

        // }
    }
}
createKey(keyArr);

document.addEventListener("keydown", (event) => {
    textArea.innerText += event.key;
    // console.log(`You pressed the ${event.key} key with keyCode ${event.code}`);
    console.dir(event);
    console.log(document.querySelector(`#${event.code}`));
    document.querySelector(`#${event.code}`).classList.add('active');
    // for(let i = 0; i < keyArr.length; i++){
    //   if(event.key === keyArr[i].key) {

    //   }q
    // }1
});
document.addEventListener("keyup", (event) => {
    document.querySelector(`#${event.code}`).classList.remove('active');
});
