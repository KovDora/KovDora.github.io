let s = ['Árvácska','Begónia','Citromvirág','Dália','Erdei fenyő','Fagyöngy','Golgota','Hibiszkusz','Ízisz','Jácint','Kála','Lótuszvirág','Mályvavirág','Nyárfa','Orchidea','Páfrány','Rózsa','Nyárfa'];
s = s.concat(s);

// terv:
// végigmegyünk a listán, és mindent kicserélünk egy hátrébb lévővel.

keveres(s)

let racs = document.querySelector('#racs'); // globális változók
let divlista = racs.children;

let elso_kattintas = -1;
let masodik_kattintas = -1;


for (const lapocska of divlista) {
    lapocska.addEventListener('mousedown', felfordit);
}

for (let i = 0; i < s.length; i++) {
    divlista[i].innerHTML = '<div class="betu lathatatlan">'+s[i]+'</div>';
}

for (const belso_div of document.querySelectorAll('.betu')) {
    belso_div.addEventListener('mousedown', lefordit )
}

// kisfeladat: ha valamelyikre rákattintunk, akkor fedje fel azt a kártyát!

function felfordit(e) // e mint event
{
    let lapka = e.target; // lokális változó
    let i = hanyadik(lapka, lapka.parentElement);
    console.log(`az ${i}-edik kockát nyomták meg`);
    
    if(elso_kattintas == -1)
    {
        elso_kattintas = i;
        console.log('első kattintás van');
    }
    else if(masodik_kattintas == -1)
    {
        masodik_kattintas = i;
        console.log('második kattintás van');
    }
    else // ez akkor fordul elő, amikor már volt két kattintás!
    {
        console.log('nem első és nem második kattintás van');
        if (s[elso_kattintas]!=s[masodik_kattintas]){
            console.log('nem egyezik a kettő');
            
            lapka.parentElement.children[elso_kattintas].firstChild.classList.toggle('lathatatlan');
            lapka.parentElement.children[masodik_kattintas].firstChild.classList.toggle('lathatatlan');
        }
        elso_kattintas = i;
        masodik_kattintas = -1;
    }
    
    lapka.firstChild.classList.toggle('lathatatlan');

}

function lefordit(e) // e mint event
{
    let betuke = e.target;
    // let i = hanyadik(lapka, lapka.parentElement);
    // console.log(`az ${i}-edik kockát nyomták meg`);
    betuke.classList.toggle('lathatatlan');
}


function hanyadik(gyerek, szulo){
    let i = 0;
    while(szulo.children[i]!=gyerek){
        i++;
    }
    return i;
}

function veletlen(mettol,meddig){
    let oldalszam = meddig-mettol+1; // képzeletbeli dobókocka oldalszáma!
    return mettol+Math.floor(Math.random()*oldalszam);
}

function keveres(lista){
    for (let i = 0; i < lista.length; i++) {
        csere(i, veletlen(i, lista.length-1), lista);        
    }

    /* "forof"
    for (const elem of lista) {
        
    }
    */

}

function csere(i, j, lista){    
    let temp = lista[i];
    lista[i] = lista[j];
    lista[j] = temp;
}