const tag1 = "Tag 1";
const tag2 = "Tag 2";
const tag3 = "Tag 3";
const tag4 = "Tag 4";
const tag5 = "Tag 5";
const tag6 = "Tag 6";
const tag7 = "Tag 7";
const tag8 = "Tag 8";
let tags = [tag1, tag2, tag3, tag4, tag5, tag6, tag7, tag8, tag4, tag5, tag6, tag7, tag8,tag1, tag2, tag3, tag4, tag5, tag6, tag7, tag8, tag4, tag5, tag6, tag7, tag8];
const seeMoreBtn = document.getElementById("seeMoreBtn");
const addTagBtn = document.getElementById("addTagBtn");
const tagDropdown = document.getElementById("tagDropdown");
const dropdownContainer = document.getElementById("dropdownContainer");


// function showTags() {
//     const buttonContainer = document.getElementsByClassName("buttonContainer")[0];
//     tags.forEach((text, index) => {
//         const button = document.createElement('button');
//         button.textContent = text;
//         buttonContainer.append(button);
//     });
// }

function showTags() {
    const buttonContainer = document.querySelector(".buttonContainer");

    // Check if the container element exists
    if (buttonContainer) {
        tags.forEach((text, index) => {
            const button = document.createElement('button');
            button.textContent = text;
            buttonContainer.append(button);
        });
    } else {
        console.error('Element with class "buttonContainer" not found.');
    }
}


// showTags();

// See More

seeMoreBtn.addEventListener("click", function () {
    if (seeMoreBtn.innerText == "See more") {
        showPrompt()
        seeMoreBtn.innerText = "See less";
    } else if (seeMoreBtn.innerText == "See less") {
        const modal = document.getElementsByClassName("modal")[0];
        document.body.removeChild(modal);
        seeMoreBtn.innerText = "See more";
    }
    // showTags();
});

// Show Prompt

function showPrompt() {
    const buttonContainer = document.createElement('div');
    buttonContainer.classList.add("buttonContainer");
    Object.assign(buttonContainer.style, {
        display: 'flex',
        flexWrap: "wrap",
        justifyContent: "space-around",
        alignItems: "center",
        height: "200px",
        width: "335px",
        overflowY: "scroll"
    });
    buttonContainer.innerHTML = '';

    // Loop through the array and create buttons
    tags.forEach((text, index) => {
        const button = document.createElement('button');
        button.textContent = text;
        buttonContainer.appendChild(button);
    });

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
        seeMoreBtn.innerText = "See more";
    };

    const input = document.createElement('input');
    input.placeholder = 'Enter tag';

    const addButton = document.createElement('button');
    addButton.textContent = 'Add';


    addButton.onclick = () => {
        const text = input.value;
        if (text.trim() !== '') {
            tags.push(text);
            showTags();
            console.log(tags)
            input.value = "";
        }
    };

    modal.appendChild(closeButton);
    modal.appendChild(buttonContainer);
    modal.appendChild(input);
    modal.appendChild(addButton);
    document.body.appendChild(modal);
    seeMoreBtn.innerText = "See less";
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
