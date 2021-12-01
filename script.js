const mainDiv = document.querySelector(".main");
const contactDiv = document.querySelector("contact")

function cleanUpIndex() {

    let children = mainDiv.chilldren

    for (var i=0; i < children.length + 1; i++) {
        children[i].remove()
    };

    while (mainDiv.lastChild) {
        mainDiv.lastChild.remove()
    }
}



function cleanUpView() {

    let contactinfo = document.querySelector('.contactinfo');
    if (contactinfo) {
        contactinfo.remove();
    }
}


