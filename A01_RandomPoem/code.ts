namespace poem {
        let subjekt = [ "Tsukki", "Deku", "Levi", "Rin", "Asuna", "Hanako"];
        let prädikat = ["bekämpft", "liebt", "studiert", "hasst", "verzaubert", "zerstört"];
        let objekt = [ "Sukuna", "Karma", "Yuki", "Hinase", "Power", "Momo"];

        console.log("Subjekte:", subjekt);
        console.log("Prädikate:", prädikat);
        console.log("Objekte:", objekt);

        for (let  i = subjekt.length; i >= 1; i--) {
            console.log("Laufvariable: " + i);
        }

        function getVerse(_subjekt, _prädikat, _objekt) {
                 let verse = "";

                 let randomSubjektIndex = Math.floor(Math.random() * _subjekt.length);
                 let randomSubject = _subjekt.splice(randomSubjektIndex, 1)[0];
                 verse += randomSubject + " ";

                 let randomPrädikatIndex = Math.floor(Math.random() * _prädikat.length);
                 let randomPrädikat = _prädikat.splice(randomPrädikatIndex, 1)[0];
                 verse += randomPrädikat + " ";

                 let randomObjektIndex = Math.floor(Math.random() * _objekt.length);
                 let randomObjekt = _objekt.splice(randomObjektIndex, 1)[0];
                 verse += randomObjekt;

                 return verse;
        }

        let verse = getVerse(subjekt.slice(), prädikat.slice(), objekt.slice());

        console.log("Erzeugter Vers:", verse);
}