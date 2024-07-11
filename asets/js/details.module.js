import {Ui} from './ui.module.js';

export class Details{
    constructor(id){
        this.ui=new Ui
        document.getElementById("btnClose").addEventListener("click", () => {
            document.querySelector("#hero").classList.remove("d-none");
            document.querySelector("#Game").classList.add("d-none");
         });
         this.gameData(id);

    }
    async gameData(idGame) {
        const loading = document.querySelector(".loading");
        loading.classList.remove("d-none");

        const options = {
            method: 'GET',
            headers: {
                'x-rapidapi-key': '55a2967c85msha67bf96f56a39cdp146b9bjsncb61602a14bb',
                'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
            }
        };
        try {
            const Gapi = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/game?id=${idGame}`, options);
            const result = await Gapi.json();
            this.ui.getDetails(result, result.screenshots)
        } catch (error) {
            console.error(error);
        }finally{
            loading.classList.add("d-none");
        }
    }
    
}