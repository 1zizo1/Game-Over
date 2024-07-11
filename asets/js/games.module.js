import { Ui } from './ui.module.js';
import { Details } from "./details.module.js";

export class Game {
    constructor() {
        this.Getdata("mmorpg");

        document.querySelectorAll(".navbar-nav .nav-item a").forEach((link) => {
            link.addEventListener("click", (e) => {
                document.querySelector(".navbar-nav .active").classList.remove("active");
                e.target.classList.add("active");
                // console.log(e.target);
                this.Getdata(e.target.dataset.category);
            });
        });
        this.ui = new Ui;
    }

    async Getdata(category) {
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
            
            const api = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/games?category=${category}`, options);
            let response = await api.json();
            this.ui.getGames(response);
            this.startEvent();
        }
        catch (error) {
            console.error(error);
        }finally{
            loading.classList.add("d-none");

        }
    }
    startEvent() {
        document.querySelectorAll(".card").forEach((item) => {
            item.addEventListener("click", () => {
                const id = item.dataset.id;
                this.showDetails(id);
            });
        });
    }
    showDetails(idGame) {
        const details = new Details(idGame);
        document.querySelector("#hero").classList.add("d-none");
        document.querySelector("#Game").classList.remove("d-none");
    }
}


