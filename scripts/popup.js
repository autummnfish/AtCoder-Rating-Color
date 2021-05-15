const submit = document.querySelector('#form');
const id = document.querySelector('#userid')

submit.addEventListener("submit", () => {
    sendId(id.value);
});

async function sendId(userId){

    await  chrome.tabs.query( {active:true, currentWindow:true}, function(tabs){
        chrome.tabs.sendMessage(tabs[0].id,userId);
    });
    // console.log(userId);
    
}