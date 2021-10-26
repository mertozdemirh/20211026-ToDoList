//Ornek data
let gorevler = [
    {
        baslik:"Okula git",
        yapildi: false
    },
    {
        baslik:"Alışveriş yap",
        yapildi: true
    }
];

const ulListe = document.getElementById("liste");


function Listele(){
    
    for(const gorev of gorevler){
        const li = document.createElement("li");
        li.gorev = gorev
        li.textContent = gorev.baslik
        const cbox = document.createElement("input");
        cbox.setAttribute("type","checkbox");
        li.prepend(cbox);
        ulListe.append(li);
    }
}

Listele();