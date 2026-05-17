

function crack(list, past_g) {
  
  
  let new_list = [];
  let outcomes = [];
  
  list.forEach(odd => {
    new_list.push(Number(odd));
  })
  past_g.forEach(number => {
    outcomes.push(Number(number))
  })
  
  
  
  let odds = [];
  new_list.forEach(odd => {
    odds.push(odd)
  })
//  [1,4,3,2,5,6] ;
  
  let odds_c =[];
    new_list.forEach(odd => {
    odds_c.push(odd)
  })
  
  let odds_c_sens = [];
  new_list.forEach(odd => {
    odds_c_sens.push(odd)
  })
//[1,4,3,2,5,6]



  let hot = Math.min(...odds);
  const hot_index = odds.indexOf(hot);
  odds[hot_index] = 0;
  // console.log(`Hot number: ${hot_index + 1}`)
   //alert(odds)
  
  
  
 odds.sort((a,b) => a - b);
 const warm = odds[1];
 const warm_index = odds_c.indexOf(warm);
 odds[1] = 0;
 //console.log(`Warm number: ${warm_index + 1}`)


 
 
 //Remove biases 
 try {
   odds_c[hot_index] = 0;
   odds_c[warm_index] = 0;
   
   //Drop down Past outcomes
   if(outcomes[0] <= odds_c.length) {
   odds_c[outcomes[0] - 1] = 0;
   }
   if(outcomes[1] <= odds_c.length) {
   odds_c[outcomes[1] - 1] = 0;
   }
   if(outcomes[2] <= odds_c.length) {
   odds_c[outcomes[2] - 1] = 0;
   }
 } catch (e) {
   console.log("error ")
 }
 

 const sensitive_dogs_odds = [];
 
 odds_c.forEach(odd => {
   if(odd > 0) {
     sensitive_dogs_odds.push(odd);
   }
 })

 const sensitive_dogs = [];
 sensitive_dogs_odds.forEach(odd => {
   sensitive_dogs.push(odds_c_sens.indexOf(odd) + 1);
 })

  
  
  
  
  //✨✨✨ Display to UI 
  const show = document.getElementById("show");
  const place = document.getElementById("place");
  const sensitive = document.getElementById("sensetive");
  let counter = 0;
  let frequency = sensitive_dogs.length;
  
let  hot_dog = 0;
let  warm_dog = 0;
   if(outcomes.includes(warm_index + 1)) {
   hot_dog = hot_index + 1;
   warm_dog = warm_index + 1;
   
 } else if(outcomes.includes(hot_index + 1)) {
   hot_dog = warm_index + 1;
   warm_dog = hot_index + 1;
 } else {
   hot_dog = hot_index + 1;
   warm_dog = warm_index + 1;
 }
 
  
  show.innerHTML = `        <label>🧠 : </label> ${hot_dog}`;
  
  place.innerHTML = `      <hr>
      <div class="data-value">${hot_dog}</div><hr>
       <div class="data-value">${warm_dog}</div>
       <hr>`;
       
       let dogs = ""
  while (counter <= frequency - 1) {
   let code = `         <hr>
      <div class="data-value">${sensitive_dogs[counter]}</div>`;
    dogs += code;
   
    counter ++;
  }
  sensitive.innerHTML = dogs;
  showData() 
  

}





function play() {
  const audio = document.getElementById("bgm");
  audio.play()
}







//Metrix effect 
function  metrix() {
  let metrix = document.getElementById("metrix");
  
  const metrix_data = [
   "<//>$...loading model.../🐕",
  "Cracking...",
  "Pip install requirements...🐕",
  "Neutral Network Activation...🐕",
  "Activation==> RELU...",
  "Hacking...",
  "Hacker + AI... logical analysis...🐕",
  "Validation state.."
    
  ];
  
  
  
  let random =  Math.floor(Math.random() * 10);
  metrix.innerHTML = metrix_data[random]
}
setInterval(metrix, 100);