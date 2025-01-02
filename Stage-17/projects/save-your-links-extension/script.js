let myLeads = []

const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")

const ulEl = document.getElementById("ul-el")

const deleteBtn = document.getElementById("delete-btn")

const leadsFromLocalStorage = JSON.parse( localStorage.getItem("myLeads") )
const tabBtn = document.getElementById("tab-btn")

const downloadBtn = document.getElementById("download-btn")
const modal = document.getElementById('modal');
const confirmDownload = document.getElementById('confirmDownload');
const cancelDownload = document.getElementById('cancelDownload');
const fileNameInput = document.getElementById('fileName');

if (leadsFromLocalStorage) {
    myLeads = leadsFromLocalStorage
    render(myLeads)
}

tabBtn.addEventListener("click", () => {    
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
        myLeads.push(tabs[0].url)
        localStorage.setItem("myLeads", JSON.stringify(myLeads) )
        render(myLeads)
    })
})

function render(leads) {
    let listItems = ""
    for (let i = 0; i < leads.length; i++) {
        listItems += `
            <li>
                <a target='_blank' href='${leads[i]}'>
                    ${leads[i]}
                </a>
            </li>
        `
    }
    ulEl.innerHTML = listItems
    downloadBtn.style.display = "inline"
}

deleteBtn.addEventListener("dblclick", () => {
    localStorage.clear()
    myLeads = []
    render(myLeads)
    downloadBtn.style.display = "none"
})

inputBtn.addEventListener("click", () => {
    myLeads.push(inputEl.value)
    inputEl.value = ""
    localStorage.setItem("myLeads", JSON.stringify(myLeads) )
    render(myLeads)
})

downloadBtn.addEventListener('click', () => {
    modal.style.display = 'flex';
})

cancelDownload.addEventListener('click', () => {
    modal.style.display = 'none'; // Oculta el modal
});

confirmDownload.addEventListener('click', () => {
    const fileName = fileNameInput.value.trim() || 'links.txt'; // Usa el valor ingresado o un predeterminado
    const content = myLeads.join("\n");
    const blob = new Blob([content], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
  
    const a = document.createElement('a');
    a.href = url;
    a.download = fileName;
    a.click();
  
    URL.revokeObjectURL(url);
    modal.style.display = 'none'; // Oculta el modal
});