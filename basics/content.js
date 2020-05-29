console.log("Chrome extension runing!!!!!");

chrome.runtime.onMessage.addListener(gotMessage)

function gotMessage(message,sender,response){
    if(message){
        let paragraphs = document.getElementsByTagName("p");
        for(elt of paragraphs){
            elt.style['background-color'] = '#FF00FF';
        }
    }
    console.log(message.txt);
}