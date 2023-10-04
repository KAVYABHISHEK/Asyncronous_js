'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////

// setTimeout(()=> console.log("hellooo"),5000);
// setTimeout(()=> console.log("hellooo"),7000);

// console.log("its working");

// const current_year = 2023;
// const birth_Year = 2001;
// let calcAge = function calcage (){
// return current_year - birth_Year;
// }
// console.log(calcAge());


// //    constructor function

// function person (FirstName,LastName,job,salary,hobbies,FullName){
// this.FirstName = FirstName;
// this.LastName = LastName;
// this.job = job;
// this.salary = salary;
// this.hobbies = hobbies;
// this.FullName = FirstName + LastName;
// }

// const Ross = new person("Ross","Galler","Dianosurs",50000,["Games","Travelling"]);
// const Chandler = new person("Chandler","Bing","Transposter",50000,["Sarcasm","Watcing TV"]);
// const Joey = new person("Joey","Tribiyani","Actor",50000,["Late Realisation","Watcing TV"]);
// console.log(Ross);
// console.log(Chandler);
// console.log(Joey);




















// const getCountryData = function (country){

    

// // const request =  new XMLHttpRequest();
// // request.open('GET',`https://restcountries.com/v3.1/name/${country}`);
// // request.send();


// // request.addEventListener('load', function(){

// //     const [data] = JSON.parse(this.responseText);
// //     //console.log(data);

//     const html = `
//     <article class="country">
//     <img class="country__img" src="${data.flags.png}" />
//     <div class="country__data">
//       <h3 class="country__name">${data.name.common}</h3>
//       <h4 class="country__region">${data.region}</h4>
//       <p class="country__row"><span>📍</span>${data.capital}</p>
//       <p class="country__row"><span>👫</span>${(+data.population/1000000).toFixed(1)} M People</p>
//       <p class="country__row"><span>🗣️</span>${data.languages}</p>
   
//     </div>
//   </article> `;

//   countriesContainer.insertAdjacentHTML('beforeend', html)
//   countriesContainer.style.opacity = 1;
// // })
// // };

//getCountryData('portugal');
// getCountryData('india');
// getCountryData('usa');
// getCountryData('Japan')


// const renderCountry = function(data, calssName=''){

//     const html = `
//     <article class="country ${calssName}">
//     <img class="country__img" src="${data.flags.png}" />
//     <div class="country__data">
//       <h3 class="country__name">${data.name.common}</h3>
//       <h4 class="country__region">${data.region}</h4>
//       <p class="country__row"><span>📍</span>${data.capital}</p>
//       <p class="country__row"><span>👫</span>${(+data.population/1000000).toFixed(1)} M People</p>
//       <p class="country__row"><span>🗣️</span>${data.languages}</p>
   
//     </div>
//   </article> `;

//   countriesContainer.insertAdjacentHTML('beforeend', html)
//   countriesContainer.style.opacity = 1;
// }



// const getCountryAndNeighbour = function (country){

//     //AJAX call country one

//     const request =  new XMLHttpRequest();
//     request.open('GET',`https://restcountries.com/v3.1/name/${country}`);
//     request.send();
    
    
//     request.addEventListener('load', function(){
    
      // const [data] = JSON.parse(this.responseText);
//         console.log(data);

//         //  Get neighbour 1
//        renderCountry(data);

//        const [neighbour] = data.borders;
//        if(!neighbour) return;

//          //AJAX call country two

//     const request2 =  new XMLHttpRequest();
//     request2.open('GET',`https://restcountries.com/v3.1/alpha/${neighbour}`);
//     request2.send();

//     request2.addEventListener('load', function(){
//       //console.log(this.responseText);
//     const [data2] = JSON.parse(this.responseText);
//     console.log(data2)

//      renderCountry(data2,'neighbour');
//     });
//     });
//     };

// // getCountryAndNeighbour('portugal');
// getCountryAndNeighbour('India');


///////////////////////////////     using promises     /////////////////////
const renderCountry = function(data, calssName=''){

    const html = `
    <article class="country ${calssName}">
    <img class="country__img" src="${data.flags.png}" />
    <div class="country__data">
      <h3 class="country__name">${data.name.common}</h3>
      <h4 class="country__region">${data.region}</h4>
      <p class="country__row"><span>📍</span>${data.capital}</p>
      <p class="country__row"><span>👫</span>${(+data.population/1000000).toFixed(1)} M People</p>
      <p class="country__row"><span>🗣️</span>${data.languages}</p>
   
    </div>
  </article> `;

  countriesContainer.insertAdjacentHTML('beforeend', html)
  countriesContainer.style.opacity = 1;
}

// const getCountryData2 = function(country){
//   fetch(`https://restcountries.com/v3.1/name/${country}`)
//   .then(function (response){
//     console.log(response);
//     return response.json();
    
//    })
//   .then(function(data){
//    console.log(data);
//    renderCountry(data[0]);
//  });
//  };

//  getCountryData2('India');
// getCountryData2('portugal');
// getCountryData2('Japan');

const getCountryData2 = function(country){
  //country 1

  fetch(`https://restcountries.com/v3.1/name/${country}`)
  .then(response=>response.json())
   .then(data=> {
    renderCountry(data[0]);
    // const [data2] = JSON.parse('response');
    // console.log(data);

   const neighbour = data[0].borders[0];
  //  console.log(data[0]);
   if (!neighbour) return;
//county2

  return fetch(`https://restcountries.com/v3.1/alpha/${neighbour}`)
.then(response=>response.json())

 .then(data=>renderCountry(data[0],'neighbour'));
})
// console.log(response)
  };

getCountryData2('india');
