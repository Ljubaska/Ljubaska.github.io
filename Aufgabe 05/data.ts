

namespace A5v2 {
    // Heterogenes assoziatives Array mit vordefinierten Schluesseln
    export interface Product {
        name: string;
        price: number;
    }

    // Homogenes assoziatives Array mit variablen Schluesseln, 
    // ein String wird abgebildet auf ein Array mit Objekten von obigen Typ 
    export interface Item {
        [key: string]: Product[];
    }

    // Beispieldaten auf Basis der oben angegebenen Strukturen
    export let data: Item
        = {
            "christmasBalls": [
                { name: "Rot [15Euro]", price: 15 },
                { name: "Gold [22Euro]", price: 22 },
                { name: "Silber [18Euro]", price: 18 }
            ],
            "lametta": [
                { name: "Rot [3Euro]", price: 3 },
                { name: "Gold [4Euro]", price: 4 },
                { name: "Silber [2.50Euro]", price: 2.5 }
            ],
            "candle": [
                { name: "Rot | breit [12Euro]", price: 12 },
                { name: "Rot | duenn [8Euro]", price: 8 },
                { name: "Gold | breit [15Euro]", price: 15 },
                { name: "Gold | duenn [10Euro]", price: 10 },
                { name: "Silber | breit [20Euro]", price: 20 },
                { name: "Silber | duenn [17Euro]", price: 17 },
                { name: "Weiss [25Euro]", price: 25 }
            ],
           /* Ab hier neue Kategorien einfügen */ 
            
            
            
            
            
          /* Ab hier nur die einzelnen Kategorien anpassen */  
            "tree": [
                { name: "Tanne [55Euro]", price: 55 },
                { name: "Nordmannstanne [75Euro]", price: 75 },
                { name: "Plastiktanne [25Euro]", price: 25 }
            ],
            "holder": [
                { name: "Rund [25Euro]", price: 25 },
                { name: "Viereckig [30Euro]", price: 30 },
                { name: "Sechseckig [28Euro]", price: 28 }
            ],
            "shipment": [
                { name: "DHL [2.99Euro]", price: 2.99 },
                { name: "UPS [2Euro]", price: 2 },
                { name: "Hermes [2.50Euro]", price: 2.5 },
                { name: "FedEx [3Euro]", price: 3 }
            ]
        };
}

