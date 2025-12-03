
    //proměnné
    let roblox =[];
    let soucet=0;
    let Sude=0;
    let Liche=0;
//cyklus
    while(true){
        let vstup=prompt("Zadej cislo");
        let malejroblox=parseInt(vstup);
        if(malejroblox==0){
            break;
        }

        roblox.push(malejroblox); //vypise z pole
        soucet+=malejroblox;
        if(malejroblox%2==0){ // kontrola cisla
            Sude++;
        }
        else{
            Liche++;
        }
    }

if(roblox.length>0){ //pokud pole neni 0 tak to pojede
    let nejvetsiroblox=Math.max(...roblox);
    let prumer = soucet/roblox.length
    console.log(`nejvetši čislo: ${nejvetsiroblox}`)
    console.log(`prumer: ${prumer}`)
    console.log(`sude: ${Sude}`)
    console.log(`liche: ${Liche}`)

}
else {

    sebedestrukce();
}



function sebedestrukce(params) {
    

    console.log("Byla spuštěna sebe destrukce");
    console.log("za 10.");
    console.log("za 9.");
    console.log("za 8.");
    console.log("za 7.");
    console.log("za 6.");
    console.log("za 5.");  
    console.log("za 4.");
    console.log("za 3.");
    console.log("za 2.");
    console.log("za 1.");
    console.log("ERROR protože pole není >00.");

      
}
