"use strict";
var feuerwerkEndabgabe;
(function (feuerwerkEndabgabe) {
    function generateRocket(_titelList) {
        let group = null;
        let fieldset = document.querySelector("fieldset#fireworkTitel");
        group = createSelect(_titelList);
        if (fieldset && group) //wenn das Fieldset UND (&&) die Gruppe definiert ist, dann kannst du die group als Kind anhängen
            fieldset.appendChild(group);
    }
    feuerwerkEndabgabe.generateRocket = generateRocket;
    function createSelect(_titelList) {
        // let group: HTMLDivElement = document.createElement("div");
        let selection = document.createElement("select");
        selection.name = "LoadedTitels";
        selection.addEventListener("change", feuerwerkEndabgabe.getDataFromServer);
        //selection.id = "Test";
        for (let titel of _titelList) {
            let option = document.createElement("option");
            option.setAttribute("name", titel.rocketTitel);
            option.value = option.textContent = titel.rocketTitel;
            selection.appendChild(option);
        }
        return selection;
    }
})(feuerwerkEndabgabe || (feuerwerkEndabgabe = {}));
//# sourceMappingURL=generateRocket.js.map