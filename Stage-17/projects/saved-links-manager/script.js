let myLinks = []

const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")

const ulEl = document.getElementById("ul-el")

const deleteBtn = document.getElementById("delete-btn")

const linksLocalStorage = JSON.parse( localStorage.getItem("myLinks") )
const tabBtn = document.getElementById("tab-btn")

const downloadBtn = document.getElementById("download-btn")
const modal = document.getElementById("modal");
const confirmDownload = document.getElementById("confirmDownload");
const cancelDownload = document.getElementById("cancelDownload");
const fileNameInput = document.getElementById("fileName");

if (linksLocalStorage) {
    myLinks = linksLocalStorage
    render(myLinks)
}

tabBtn.addEventListener('click', () => {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
        myLinks.push(tabs[0].url)
        localStorage.setItem("myLinks", JSON.stringify(myLinks) )
        render(myLinks)
    })
})

function render(links) {
    if (links.length === 0) {
        ulEl.innerHTML = ""
        downloadBtn.style.display = "none"
        return
    }

    let listItems = ""
    for (let link of links) {
        listItems += `
            <li>
                <a target='_blank' href='${link}'>
                    ${link}
                </a>
            </li>
        `
    }
    ulEl.innerHTML = listItems
    downloadBtn.style.display = "inline"
}

deleteBtn.addEventListener('dblclick', () => {
    localStorage.clear()
    myLinks = []
    render(myLinks)
})

inputBtn.addEventListener('click', () => {
    if (inputEl.value === "") {
        return
    }

    if (myLinks.includes(inputEl.value)) {
        inputBtn.textContent = "ALREADY ADDED"
        return
    }

    inputEl.addEventListener('change', () => {
        inputBtn.textContent = "SAVE INPUT"
    })

    myLinks.push(inputEl.value)
    inputEl.value = ""
    localStorage.setItem("myLinks", JSON.stringify(myLinks) )
    render(myLinks)
})

downloadBtn.addEventListener('click', () => {
    modal.style.display = 'flex';
})

cancelDownload.addEventListener('click', () => {
    modal.style.display = 'none'; // Hide Modal
});

confirmDownload.addEventListener('click', () => {
    const fileName = fileNameInput.value.trim() || 'links.txt'; // Default value or input
    const content = myLinks.join("\n");
    const blob = new Blob([content], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
  
    const a = document.createElement('a');
    a.href = url;
    a.download = fileName;
    a.click();
  
    URL.revokeObjectURL(url);
    modal.style.display = 'none'; // Hide Modal
});