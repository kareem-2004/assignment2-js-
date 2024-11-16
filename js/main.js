const texts = [
["It's not what happens to you, but how you react to it that matters.", "--Epictetus"],
["You miss 100% of the shots you don't take.", "--Wayne Gretzy"],
["Resentment is like drinking poison and waiting for your enemies to die.", "--Nelson Mandela"],
["Do not take life too seriously. You will not get out alive.", "--Elbert Hubbard"]
];
let currentIndex = 0;
function ChangeQuote() {
const [text1, text2] = texts[currentIndex];
document.getElementById("text1").textContent = text1;
document.getElementById("text2").textContent = text2;
currentIndex = (currentIndex + 1) % texts.length;
}