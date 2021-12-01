function cleanUpIndex() {
    let nodes = document.querySelectorAll(".contact")

    for (let i = 0; i < nodes.length; i++) {
        nodes[i].remove()
    }
}


function createSingleIndex (object) {
    let main = document.querySelectorAll(".main");

    let newContactA = document.createElement("a");
    let newContactDiv = document.createElement("div");
    let newContactDivP = document.createElement("p");

    newContactDivP.append(object.name);
    newContactDiv.append(newContactDivP);
    newContactA.append(newContactDiv);

    newContactDiv.classList.add("contact")
    newContactA.href = "page3.html";

    main[0].appendChild(newContactA);

    newContactA.addEventListener("click", event => {
        event.preventDefault();
        cleanUpIndex();
        renderView(object);
    })
}


let contactList = [
    {
      name: "Roberta Dobbs",
      phone: "778-555-1234",
      address: "101 Main St, Anytown, USA",
      email: "subgenius@slack.example.com",
    },
    {
      name: "Bugs Bunny",
      phone: "123-867-5309",
      address: "Warner Brothers Animation Lot",
      email: "whatsup@doc.example.com",
    },
  ]
        // list of displayed contacts

function cleanUpIndex() {
    let nodes = document.querySelectorAll(".contact")

    for (let i = 0; i < nodes.length; i++) {
        nodes[i].remove()
    }
}


function renderIndex (contactArray) {
    // let main = document.querySelectorAll(".main")

    for (let i = 0; i < contactArray.length; i++) {
        // let newContactDiv = document.createElement("div");
        // let newContactDivP = document.createElement("p");
        // let newContactA = document.createElement("a");

        // newContactDivP.append(contactArray[i].name);
        // newContactDiv.appendChild(newContactDivP);
        // newContactDiv.classList.add("contact");

        // newContactA.appendChild(newContactDiv);
        // newContactA.href = "page3.html";
        

        // // main[0].appendChild(newContactA);
        // main.appendChild(newContactA)

        createSingleIndex(contactArray[i])
    }
}

function cleanUpView() {
    let nodes = document.querySelectorAll(".contactinfo")

    nodes[0].remove()
}

function renderView(contact) {
    let main = document.querySelectorAll(".main")

    let contactInfo = document.createElement("div");
    contactInfo.classList.add("contactinfo");

    let contactName = document.createElement("div");
    contactName.classList.add("contactname");
    contactName.append(contact.name);

    let profilePic = document.createElement("img");
    profilePic.classList.add("profilepic")
    profilePic.src = "./img/profile.jpg";
    profilePic.alt = "Profile picture";
    contactName.appendChild(profilePic)

    let contactEmail = document.createElement("div");
    contactEmail.classList.add("contactemail");
    contactEmail.append(`email: ${contact.email}`);

    let contactPhone = document.createElement("div");
    contactPhone.classList.add("contactphone");
    contactPhone.append(`cell: ${contact.phone}`);

    let contactAddress = document.createElement("div");
    contactAddress.classList.add("contactaddress");
    contactAddress.append(`address: ${contact.address}`);

    let button = document.createElement("div");
    button.classList.add("buttons")

    let buttonEdit = document.createElement("button");
    buttonEdit.classList.add("button");
    buttonEdit.classList.add("edit")
    buttonEdit.value = "Edit"
    buttonEdit.append("Edit")
    button.appendChild(buttonEdit);

    buttonEdit.addEventListener("click", event => {
        console.log("bruh")
    })

    let buttonClose = document.createElement("button");
    buttonClose.classList.add("button");
    buttonClose.classList.add("close")
    buttonClose.value = "Close";
    buttonClose.append("Close")
    button.appendChild(buttonClose)

    buttonClose.addEventListener("click", event => {
        cleanUpView();
        renderIndex(contactList);
    })

    contactInfo.appendChild(contactName);
    contactInfo.appendChild(contactEmail);
    contactInfo.appendChild(contactPhone);
    contactInfo.appendChild(contactAddress);
    contactInfo.appendChild(button);

    main[0].appendChild(contactInfo)
}

function cleanUpCreate() {
    let nodes = document.querySelectorAll(".contactedit")

    nodes[0].remove()
}

function renderCreate() {
    let main = document.querySelectorAll(".main")

    let contactEdit = document.createElement("div");
    contactEdit.classList.add("contactedit")

    let contactImage = document.createElement("div");
    contactImage.classList.add("contactimg")

    let profilePic = document.createElement("img");
    profilePic.classList.add("profilepic");
    profilePic.src = "./img/profile.jpg";
    profilePic.alt = "Profile picture";
    contactImage.appendChild(profilePic);

    let form = document.createElement("form");

    let inputContainer1 = document.createElement("div");
    inputContainer1.classList.add("inputcontainer");
    form.appendChild(inputContainer1)

    let contactName = document.createElement("input")
    contactName.type = "text";
    contactName.id = "contactname";
    contactName.name = "contactname";
    contactName.placeholder = "Contact Name";
    // contactName.value = contact.name;
    inputContainer1.appendChild(contactName);

    let extrafield1 = document.createElement("button")
    extrafield1.classList.add("extrafield");
    extrafield1.id = "extranamefield";
    extrafield1.name = "extranamefield";
    extrafield1.append("+");
    inputContainer1.appendChild(extrafield1);

    let inputContainer2 = document.createElement("div");
    inputContainer2.classList.add("inputcontainer");
    form.appendChild(inputContainer2);

    let contactPhone = document.createElement("input");
    contactPhone.type = "tel";
    contactPhone.id = "contactphone";
    contactPhone.name = "contactphone";
    contactPhone.placeholder ="Contact Phone";
    // contactPhone.value = contact.phone;
    inputContainer2.appendChild(contactPhone);

    let extrafield2 = document.createElement("button")
    extrafield2.classList.add("extrafield");
    extrafield2.id = "extraphonefield";
    extrafield2.name = "extraphonefield";
    extrafield2.append("+");
    inputContainer2.appendChild(extrafield2);


    let inputContainer3 = document.createElement("div");
    inputContainer3.classList.add("inputcontainer");
    form.appendChild(inputContainer3);

    let contactAddress = document.createElement("input");
    contactAddress.type = "text";
    contactAddress.id = "contactaddress";
    contactAddress.name = "contactaddress";
    contactAddress.placeholder = "Contact Address";
    // contactAddress.value = contact.address;
    inputContainer3.appendChild(contactAddress);

    let extrafield3 = document.createElement("button");
    extrafield3.classList.add("extrafield");
    extrafield3.id = "extraaddressfield";
    extrafield3.name = "extraaddressfield";
    extrafield3.append("+");
    inputContainer3.appendChild(extrafield3);

    let inputContainer4 = document.createElement("div");
    inputContainer4.classList.add("inputcontainer");
    form.appendChild(inputContainer4);

    let contactEmail = document.createElement("input")
    contactEmail.type = "email";
    contactEmail.id = "contactemail";
    contactEmail.name = "contactemail";
    contactEmail.placeholder = "Contact Email";
    // contactEmail.value = contact.email;
    inputContainer4.appendChild(contactEmail);

    let extrafield4 = document.createElement("button");
    extrafield4.classList.add("extrafield");
    extrafield4.id = "extraemailfield";
    extrafield4.name = "extraemailfield";
    extrafield4.append("+");
    inputContainer4.appendChild(extrafield4);

    let buttons = document.createElement("div");
    buttons.classList.add("buttons");
    form.appendChild(buttons);

    let buttonSave = document.createElement("button");
    buttonSave.classList.add("button");
    buttonSave.classList.add("save")
    buttonSave.type = "submit";
    buttonSave.id = "savecontact";
    buttonSave.name = "savecontact";
    buttonSave.append("Save Contact");
    buttons.appendChild(buttonSave);

    buttonSave.addEventListener("click", event => {
        event.preventDefault();
        let contactForm = document.querySelector("form");
        let contactObjectName = contactForm.elements["contactname"];
        let contactObjectPhone = contactForm.elements["contactphone"];
        let contactObjectAddress = contactForm.elements["contactaddress"];
        let contactObjectEmail = contactForm.elements["contactemail"];
        let contactObject = {
            name: contactObjectName.value,
            phone: contactObjectPhone.value,
            address: contactObjectAddress.value,
            email: contactObjectEmail.value
        }
        contactList.push(contactObject);
        cleanUpCreate();
        renderView(contactObject);
    })

    let buttonCancel = document.createElement("button");
    buttonCancel.type = "reset";
    buttonCancel.classList.add("button");
    buttonCancel.classList.add("cancel")
    buttonCancel.id = "cancel";
    buttonCancel.name = "cancel"
    buttonCancel.value = "Close";
    buttonCancel.append("Cancel");
    buttons.appendChild(buttonCancel);

    buttonCancel.addEventListener("click", event => {
        event.preventDefault();
        cleanUpCreate();
        renderIndex(contactList);
    })

    contactEdit.appendChild(contactImage);
    let formDiv = document.createElement("div")
    formDiv.classList.add("form")
    formDiv.appendChild(form)
    contactEdit.appendChild(formDiv);

    main[0].appendChild(contactEdit);
}

let homeButton = document.querySelector("#contactshome");
let newContactButton = document.querySelector("#newcontact")

homeButton.addEventListener("click", event => {
    event.preventDefault();
    let create = document.querySelectorAll(".contactedit")
    let view = document.querySelectorAll(".contactinfo")
    let index = document.querySelectorAll(".contact")
    if (create.length != 0) {
        cleanUpCreate();
    } else if (view.length != 0) {
        cleanUpView();
    } else if (index.length != 0) {
        cleanUpIndex();
    }
    renderIndex(contactList)
})


newContactButton.addEventListener("click", event => {
    event.preventDefault();
    let create = document.querySelectorAll(".contactedit")
    let view = document.querySelectorAll(".contactinfo")
    let index = document.querySelectorAll(".contact")
    if (create.length != 0) {
        cleanUpCreate();
    } else if (view.length != 0) {
        cleanUpView();
    } else if (index.length != 0) {
        cleanUpIndex();
    }

    renderCreate();
})

renderIndex(contactList)