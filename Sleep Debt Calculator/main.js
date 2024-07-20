const getSleepHours = (day) => {
    let hours = parseFloat(prompt(`How many hours did you sleep on ${day}? `));
    return isNaN(hours) ? 0 : hours;
  }
  
  const getActualSleepHours = () => {
    return getSleepHours('Monday') +
           getSleepHours('Tuesday') +
           getSleepHours('Wednesday') +
           getSleepHours('Thursday') +
           getSleepHours('Friday') +
           getSleepHours('Saturday') +
           getSleepHours('Sunday');
  }
  
  const getIdealSleepHours = () => {
    let idealHours = parseFloat(prompt("How many hours of sleep do you want each night? "));
    return isNaN(idealHours) ? 0 : idealHours * 7;
  }
  
  const calculateSleepDebt = () => {
    let actualSleepHours = getActualSleepHours();
    let idealSleepHours = getIdealSleepHours();
  
    console.log(`Actual sleep hours: ${actualSleepHours}`);
    console.log(`Ideal sleep hours: ${idealSleepHours}`);
  
    if (actualSleepHours === idealSleepHours) {
      console.log("You got the perfect amount of sleep!");
    } else if (actualSleepHours > idealSleepHours) {
      console.log("You got more sleep than needed.");
    } else {
      let sleepDebt = idealSleepHours - actualSleepHours;
      console.log(`You got less sleep than needed. Sleep debt of ${sleepDebt} hours.`);
    }
  }
  
  calculateSleepDebt();
  