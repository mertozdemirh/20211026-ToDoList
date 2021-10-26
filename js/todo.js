//Ornek data
let gorevler = [
    {
        baslik:"Okula git",
        yapildi: true
    },
    {
        baslik:"Alışveriş yap",
        yapildi: false
    }
];

const ulListe = document.getElementById("liste");
const frmGorev = document.getElementById("gorevForm");
const txtBaslik = document.getElementById("baslik");

frmGorev.onsubmit = function(event){
    event.preventDefault();
    const yeniGorev ={
        baslik: txtBaslik.value,
        yapildi: false
    }
    gorevler.push(yeniGorev)
    Listele();
    this.reset();
}


function Listele(){
    
    ulListe.innerHTML="";
    for(const gorev of gorevler){
        const li = document.createElement("li");
        li.classList.add(gorev.yapildi ? "yapildi" : "yapilmadi");
        li.gorev = gorev
        li.textContent = gorev.baslik
        
        const cbox = document.createElement("input");
        cbox.checked = gorev.yapildi;
        cbox.onchange = durumDegistiginde;
        cbox.setAttribute("type","checkbox");
        li.prepend(cbox);
        ulListe.append(li);
    }
}

function durumDegistiginde(event){
    const gorev = this.parentElement.gorev;
    gorev.yapildi = this.checked;
    Listele();
}

Listele();