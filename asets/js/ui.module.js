export class Ui{
     getGames(arr) {
        let cart = ''
        for (let i = 0; i < arr.length; i++) {
    
            cart += `
                             <div class="col-lg-3 col-md-6 mb-4" >
                            <div class="">
                                <div data-id="${arr[i].id}" class="card h-100 bg-transparent" id="gameCard">
                                    <div class="p-3">
                                        <img src="${arr[i].thumbnail}" class="card-img rounded-top rounded-0" alt="">
    
                                    </div>
                                    <div class="card-body">
                                        <div class="game-info d-flex justify-content-between pb-3">
                                            <h5> ${arr[i].title}</h5>
                                            <span class="badge text-bg-primary p-2"> free </span>
                                        </div>
                                        <p class="m-0 card-text text-center small opacity-50">${arr[i].short_description}</p>
                                    </div>
                                    <div class="card-footer d-flex justify-content-between">
                                        <span class="badge">${arr[i].genre}</span>
                                        <span class="badge">${arr[i].platform}</span>
                                    </div>
                                </div>
    
                            </div>
                        </div>
    
          `
            document.getElementById('homeContainer').innerHTML = cart;
        }
    };
    getDetails(res, screen) {
        console.log(res);
        let box = `
                            <div class="row pt-3">
                            <div class="col-md-4">
                                <img src="${res.thumbnail}" class="w-100" alt="" srcset="">
                            </div>
                            <div class="col-md-8">
                                <h1>Title: ${res.title}</h1>
                                <p>Category:<span class="badge text-bg-info">${res.genre} </span></p>
                                <p>Platform:<span class="badge text-bg-info">${res.platform}</span></p>
                                <p>Status:<span class="badge text-bg-info">Live</span></p>
                                <p class="small">
                                    ${res.description}  
                                </p>
                                <a  href="${res.game_url}" class="btn btn-outline-warning text-white">Show Game</a>
                            </div>
                        </div>
                            <div class="row pt-4">
                            <div class="col-md-12">
                                <h1>Screenshots:</h1>
                            </div>
    
                            <div class="row pt-3" id="Screenshots">
    
                           
                            </div>
                        </div>
    `
        document.getElementById('details').innerHTML = box;
        let cartona = ''
        for (let i = 0; i < screen.length; i++) {
            console.log(screen.length);
            cartona += `
                <div class="col-md-6 pb-3 screenshot">
                <img src="${screen[i].image}" alt="" class="w-100">
                 </div>
            `
            document.getElementById('Screenshots').innerHTML = cartona;
        }
    }    
}