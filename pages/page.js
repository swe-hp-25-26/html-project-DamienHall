window.onload = () => {
    let filename = window.location.pathname.split("/").pop().split(".").shift();
    document.getElementById(filename).className += " current";

    let files = Array.from(document.getElementsByClassName("file"));
    console.log(files);
    files.forEach((element, index) => {
        element.onclick = (e) => {
            let parentID = e.target.parentElement.id;
            let iframe = document.getElementById("content-iframe");
            let currentContent = iframe.src.split("/").pop().split(".").shift();
            iframe.src = iframe.src.replace(currentContent, parentID);
        }
    });
}
