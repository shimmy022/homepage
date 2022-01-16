console.log("Siemasz jak sie masz");
alert("WYGRAŁEŚ IPHONE 12 :D it,s a prank bro!");

let przycisk = document.querySelector(".button");
let foto = document.querySelector(".main__foto");
przycisk.addEventListener("click", () => {
    foto.remove();
});

console.log(przycisk);