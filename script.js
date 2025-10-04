// Style prédéfini de TailwindCSS pour le bouton Retour
const ReturnShow = "font-bold my-8 text-3xl text-white p-2 border-2 rounded-xl border-transparent hover:border-white";

// Style prédéfini de TailwindCSS pour le bouton Retour
const Unselect = "bg-zinc-800 flex flex-col w-lg m-5 p-4";
const Select = "bg-zinc-800 flex flex-col w-6xl m-5";

document.addEventListener('DOMContentLoaded', () => {

    const returnButton = document.getElementById("return");

    returnButton.addEventListener('click', (e)=>{
        HideContent(); 
    });

    
    //Liste des blocs de contenu d'info. 
    const bloc1 = document.getElementById("bloc1");
    const descript1 = document.getElementById("descript1");

    const bloc2 = document.getElementById("bloc2"); 
    const descript2 = document.getElementById("descript2");

    const bloc3 = document.getElementById("bloc3"); 
    const descript3 = document.getElementById("descript3");

    bloc1.addEventListener('click', (e) => {
        ShowContent(1);
    });

    bloc2.addEventListener('click', (e) => {
        ShowContent(2); 
    })

    bloc3.addEventListener('click', (e) => {
        ShowContent(3); 
    })

    function ShowContent(number){
        returnButton.className = ReturnShow;
        bloc1.className = "hidden"; 
        bloc2.className = "hidden"; 
        bloc3.className = "hidden";
        descript1.className = "hidden";
        descript2.className = "hidden";
        descript3.className = "hidden";

        switch(number){
            case 1:
                bloc1.className =Select;
                descript1.className = "";
                break;
            case 2: 
                bloc2.className = Select; 
                descript2.className = "";
                break; 
            case 3:
                bloc3.className = Select; 
                descript3.className = "";
                break; 
        }
    }

    function HideContent(){
        returnButton.className = "hidden"; 
        descript1.className = "hidden";
        descript2.className = "hidden";
        descript3.className = "hidden";
        bloc1.className = Unselect; 
        bloc2.className = Unselect;
        bloc3.className = Unselect; 
    }
});

