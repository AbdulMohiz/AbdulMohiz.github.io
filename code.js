function autoRefreshParagraph(){
    const arr = ["Front End Developer", "Python Developer", "Software Engineer"];
    const randomNumber = Math.floor(Math.random() * (arr.length));
    document.getElementById("change").innerHTML = arr[randomNumber];
}

setInterval(autoRefreshParagraph, 2500);