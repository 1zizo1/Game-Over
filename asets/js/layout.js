// // function getavg(...nums) {

// //     let sum =0;
// //     for(const num of nums ){
// //         sum += num;
// //     }
// //     let avg = sum/nums.length;
// //     console.log(avg);
// // }
// // getavg(10,20,30)
// //  let obj1={
// //     age:22,
// //     gender: 'male'
// //  }
// //  let obj2 ={
// //     Name: 'zoz',
// //     salary:90000
// //  }
// //  let person = {
// //     ...obj1,
// //     ...obj2
// //  }
// //  console.log(person);

// // let user ={
// //     fname:'zoz',
// //     age: 22,
// //     sex: 'gender',
// //     family:{
// //         father:'mohamed',
// //         mother:'example',
// //         sibs:{sis:'i',
// //             bro:'b'
// //         }
// //     }
// // }
// // let { fname,}=user
// // let user = new Map();
// // user.set('username', 'ahmed')
// // user.set('age', 23)
// // user.set('gender', 'male')
// // user.set('salary', 90000)
// //  console.log(user.has(''));

// //class based 

// // class table { 
// //     diems;
// //     capacity;
// //     color;
// //     price;
// // }
// // let t1 = new table ('2*5',3 ,'red',1000);
// // let t2 = new table ('2*5',3,'red',1000);
// // let t3 = new table ('2*5',3,'red',1000);
// // let t4 = new table ('2*5',3,'red',1000);
// // console.log(t1); 
// // let Human = {
// // isLive:true,
// // eat:function(){
// //     console.log('eatt');
// // }
// // };
// // class User
// // {
// // constructor(fname,x,gender,salary,friends){
// //     this.fullname= fname;
// //     this.age=x;
// //     this.genders=gender;
// //     this.salary=salary;
// //     this.friends=friends;
// // }
// //     welcome(){
// //         console.log(`welcome ${this.fullname}`);
// //     }
// //     login(){
// //         console.log(`login ${this.fullname}`);
// //     }

// // }
// // let user1 = new User('zoz',22,'male',2111001,['yousry','sief'])
// // let user2 = new User('zozz',22,'male',454545,['z','zccz'])
// // let user3 = new User('zzz',11,'male',6464,['zz','cc'])

// // class Engineer extends User{
// //     constructor(fname,x,gender,salary,friends,depart,uni){
// //         super(fname,x,gender,salary,friends)
// //         this.depart= depart;
// //         this.uni = uni
// //     }
// // }
// // let eng =  new Engineer('ali',30,'male',30000,[],'civil','helwan');
// // console.log(eng);

// async function gameData(id) {
//     const options = {
//         method: 'GET',
//         headers: {
//             'x-rapidapi-key': '55a2967c85msha67bf96f56a39cdp146b9bjsncb61602a14bb',
//             'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
//         }
//     };
//     try {
//         const Gapi = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/game?id=${id}`, options);
//         const result = await Gapi.json();
//         displayGame(result, result.screenshots)
//     } catch (error) {
//         console.error(error);
//     }
// }
// gameData('6')
// function displayGame(res, screen) {
//     let box = `
//                         <div class="row pt-3">
//                         <div class="col-md-4">
//                             <img src="${res.thumbnail}" class="w-100" alt="" srcset="">
//                         </div>
//                         <div class="col-md-8">
//                             <h1>Title: ${res.title}</h1>
//                             <p>Category:<span class="badge text-bg-info">
//                                     ${res.genre} </span></p>
//                             <p>Platform:<span class="badge text-bg-info">${res.platform}</span></p>
//                             <p>Status:<span class="badge text-bg-info">Live</span></p>
//                             <p class="small">
//                                 ${res.description}  
//                             </p>
//                             <a  href="${res.game_url}" class="btn btn-outline-warning text-white">Show Game</a>
//                         </div>
//                     </div>
//                         <div class="row pt-4">
//                         <div class="col-md-12">
//                             <h1>Screenshots:</h1>
//                         </div>

//                         <div class="row pt-3" id="Screenshots">

                       
//                         </div>
//                     </div>
// `
//     document.getElementById('details').innerHTML = box;
//     let cartona = ''
//     for (i = 0; i < screen.length; i++) {

//         cartona += `
//             <div class="col-md-6 pb-3 screenshot">
//             <img src="${screen[i].image}" alt="" class="w-100">
//              </div>
//         `
//         document.getElementById('Screenshots').innerHTML = cartona;
//     }
// }
// displayGame()
