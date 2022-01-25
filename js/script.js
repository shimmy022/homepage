const welcome = () => {
console.log("Siemasz jak sie masz");
alert("Congratulations! You won an iPhone 12 :D it,s a prank bro!");
}

welcome (); 


let przycisk = document.querySelector(".button");
let foto = document.querySelector(".main__foto");
przycisk.addEventListener("click", () => {
    foto.remove();
});
