const seeMoreBtn = document.getElementById("seeMoreBtn");
const addTagBtn = document.getElementById("addTagBtn");
const tagDropdown = document.getElementById("tagDropdown");
const dropdownContainer = document.getElementById("dropdownContainer");
let hiddenButtons = document.querySelectorAll(".hidden");

function showTags() {
    const buttons = document.querySelectorAll('.hiddenElement');
    console.log(buttons)
    buttons.forEach(button => {
        button.classList.toggle('hidden');
    });
}

showTags();
// See More

seeMoreBtn.addEventListener("click", function () {
    if (seeMoreBtn.innerText == "See more") {
        seeMoreBtn.innerText = "See less";
    } else {
        seeMoreBtn.innerText = "See more";
    }
    showTags();
});

// Show Prompt

function showPrompt() {
    const modal = document.createElement('div');
    modal.className = 'modal';

    Object.assign(modal.style, {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: "space-around",
        alignItems: "center"
    });

    const closeButton = document.createElement('div');
    closeButton.className = 'close-button';
    closeButton.textContent = '✕';
    closeButton.onclick = () => {
        document.body.removeChild(modal);
    };

    const input = document.createElement('input');
    input.placeholder = 'Enter tag';

    const addButton = document.createElement('button');
    addButton.textContent = 'Add';


    addButton.onclick = () => {
        const text = input.value;
        if (text.trim() !== '') {
            const output = document.getElementById('buttonSets');
            const newElement = document.createElement('button');
            newElement.classList.add("hiddenElement");
            if (seeMoreBtn.innerText !== "See less") 
                newElement.classList.add("hidden");
            newElement.textContent = text;
            output.appendChild(newElement);
            input.value = "";
        }
    };
    

    modal.appendChild(closeButton);
    modal.appendChild(input);
    modal.appendChild(addButton);
    document.body.appendChild(modal);
}

// Add Tag
addTagBtn.addEventListener("click", showPrompt);


// Download PDF
// Export as PDF
document.getElementById("exportPdfButton").addEventListener("click", function () {
    const table = document.getElementById("myTable");
    const pdf = new jsPDF();
    pdf.autoTable({ html: table });
    pdf.save("table.pdf");
});

// Export as PNG
// document.getElementById("exportPdfButton").addEventListener("click", function () {
//     const table = document.getElementById("myTable");
//     html2canvas(table).then(function (canvas) {
//         const pngDataUrl = canvas.toDataURL("image/png");
//         const a = document.createElement("a");
//         a.href = pngDataUrl;
//         a.download = "table.png";
//         a.click();
//     });
// });
