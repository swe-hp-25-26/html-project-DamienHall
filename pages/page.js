window.onload = () => {
    let filename = window.location.pathname.split("/").pop().split(".").shift();
    document.getElementById(filename).className += " current";

    let files = Array.from(document.getElementsByClassName("file"));
    console.log(files);
    files.forEach((element, index) => {
        element.onclick = () => {
            console.log("FILE CLICKED!");
        }
    });
}
