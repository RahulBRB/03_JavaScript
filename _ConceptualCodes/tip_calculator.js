const tipCalculator = (quality, total) =>{
    quality=quality.toLowerCase();
    switch(quality){
      case 'bad': return total*(5/100);
      case 'ok': return total*(15/100);
      case 'good': return total * (20/100);
      case 'excellent': return total*(30/100);
      default: 
      return total*(18/100);
    }
  }
  
  
  console.log(tipCalculator('BAD', 100)) 
  console.log(tipCalculator('GooD', 1000)) 
  console.log(tipCalculator('excellent', 400)) 
  console.log(tipCalculator('Ok', 400)) 

