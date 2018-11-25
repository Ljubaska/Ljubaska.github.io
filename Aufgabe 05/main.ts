
namespace A5v2 {
    window.addEventListener("load", init);

    let treeboolean: boolean = false;
    let holderboolean: boolean = false;
    let shipmentboolean: boolean = false;

    function init(): void {
        displayFieldsets(data);
        document.getElementsByTagName("body")[0].addEventListener("change", handleChange);
        document.getElementById("check").addEventListener("click", check);
    }


    function displayFieldsets(_item: Item): void {



        for (let key in _item) {
            //console.log(key);
            let value: Product[] = _item[key];
            let node: Element = document.getElementsByTagName("body")[0];
            let h2: HTMLElement = document.createElement("h2");
            node.appendChild(h2);
            h2.innerText = key;
            let fieldset: HTMLFieldSetElement = document.createElement("fieldset");
            node.appendChild(fieldset);
            fieldset.setAttribute("name", key);
            fieldset.setAttribute("id", key);

            for (let i: number = 0; i < value.length; i++) {
                createInnerFieldset(value[i], fieldset, key);
            }
        }
    }

    function createInnerFieldset(_heteroPredef: Product, _fieldset: Element, _key: string): void {

        if (_key == "tree" || _key == "holder" || _key == "shipment") {
            //console.log(_fieldset.childNodes.length);
            let forID: number = _fieldset.childNodes.length;


            let label: HTMLElement = document.createElement("label");
            _fieldset.appendChild(label);
            label.setAttribute("for", _key + forID);
            label.innerText = _heteroPredef.name;
            let input: HTMLInputElement = document.createElement("input");
            label.appendChild(input);
            input.setAttribute("price", _heteroPredef.price.toString());
            input.setAttribute("type", "radio");
            input.setAttribute("name", "radio" + _key);
            input.setAttribute("id", _key + forID);
            input.setAttribute("hiddenName", _heteroPredef.name);
            input.setAttribute("category", _key);

        }

        else {
            let p: HTMLElement = document.createElement("p");
            _fieldset.appendChild(p);
            let input: HTMLInputElement = document.createElement("input");
            _fieldset.appendChild(input);
            input.setAttribute("price", _heteroPredef.price.toString());
            input.setAttribute("value", "0");
            input.setAttribute("pattern", "[0-9]{1,}");
            input.setAttribute("name", _heteroPredef.name);
            input.setAttribute("category", _key);
            p.innerText = _heteroPredef.name;
        }
    }

    function handleChange(_event: Event): void {
        let target: HTMLInputElement = <HTMLInputElement>_event.target;
        target.setAttribute("value", target.value);
        if (target.name == "radiotree") {
            treeboolean = true;
            for (let i: number = 0; i < data["tree"].length; i++) {
                let dom: HTMLElement = document.getElementById("tree" + i);
                dom.setAttribute("value", "off");
            }
            target.setAttribute("value", "on");
        }

        if (target.name == "radioholder") {
            holderboolean = true;
            for (let i: number = 0; i < data["holder"].length; i++) {
                let dom: HTMLElement = document.getElementById("holder" + i);
                dom.setAttribute("value", "off");
            }
            target.setAttribute("value", "on");
        }

        if (target.name == "radioshipment") {
            shipmentboolean = true;
            for (let i: number = 0; i < data["shipment"].length; i++) {
                let dom: HTMLElement = document.getElementById("shipment" + i);
                dom.setAttribute("value", "off");
            }
            target.setAttribute("value", "on");
        }

        let articles: NodeListOf<HTMLInputElement> = document.getElementsByTagName("input");
        let checkout: HTMLElement = document.getElementById("checkout");
        checkout.innerText = "";
        for (let i: number = 0; i < articles.length; i++) {
            let article: HTMLInputElement = articles[i];
            let articleName: string = article.getAttribute("name");
            if (articleName == "radiotree" || articleName == "radioholder" || articleName == "radioshipment") {
                articleName = article.getAttribute("hiddenName");
            }


            let articleValue: number = Number(article.getAttribute("value"));
            let articlePrice: number = Number(article.getAttribute("price"));
            if (articleValue > 0 || article.getAttribute("value") == "on") {
                let articleCategory: string = article.getAttribute("category");
                if (articleCategory == "tree" || articleCategory == "holder" || articleCategory == "shipment") {
                    articleValue = 1;
                }
                let price: number = articleValue * articlePrice;

                let createArticle: HTMLElement = document.createElement("p");
                checkout.appendChild(createArticle);
                createArticle.setAttribute("price", price.toString());
                createArticle.innerText = articleCategory + ": " + articleName + " x " + articleValue;

            }


        }
        calcPrice();
    }


    function calcPrice(): void {
        let co: HTMLElement = document.getElementById("checkout");
        let gesPrice: number = 0;
        for (let i: number = 0; i < co.childNodes.length; i++) {
            let price: number = Number(document.getElementsByTagName("p")[i].getAttribute("price"));
            gesPrice += price;
            document.getElementById("price").innerText = gesPrice.toString();
        }
        console.log(gesPrice);
    }

    function check(): void {
        let prompt: string = "Bitte noch auswaehlen:";
        if (treeboolean == false || holderboolean == false || shipmentboolean == false) {
            if (treeboolean == false) {
                prompt += "Baum ";
            }
            if (holderboolean == false) {
                prompt += "Halter ";
            }
            if (shipmentboolean == false) {
                prompt += "Lieferung";
            }
            alert(prompt);
        }
        else {
            alert("Alles in Ordnung!");
        }

    }
}