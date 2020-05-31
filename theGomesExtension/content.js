console.log("Gomes extension runing!!!!!");

let filenames = [
    "foto1.png",
    "foto2.png",
    "foto3.png",
    "foto4.png",
    "foto5.png",
    "foto6.png",
    "foto7.png",
    "foto8.png",
    "foto9.png"
];

let imgs = document.getElementsByTagName('img');

for(imgElement of imgs){
    let r = Math.floor(Math.random() * filenames.length);
    let file = 'Gomeses/'+filenames[r];
    let url = chrome.extension.getURL(file);
    imgElement.src = url;
    console.log(url);
}