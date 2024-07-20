let raceNumber = Math.floor(Math.random() * 1000);
let registeredEarly  = true;
let runnerAge = 20;

if(runnerAge >= 18 && registeredEarly){
  raceNumber+=1000;
  console.log(`#${raceNumber} will race at 9:30 am. (Registered Adults)`);
} else if(runnerAge>=18 && !registeredEarly){
  console.log(`#${raceNumber} will race at 11:00am. (Non-Registered Adults)`);
} else if(runnerAge<=18){
  console.log(`#${raceNumber} will race at 12:30pm (Youth Registrants)`);
}