// This function returns true 50% of the time.
let randomSuccess = () => {
    let num = Math.random();
    if (num < .5 ){
      return true;
    } else {
      return false;
    }
   };
   
   // This function returns a promise that resolves half of the time and rejects half of the time
   let cookBeanSouffle = () => {
    return new Promise((resolve, reject) => {
      console.log('Fingers crossed... Putting the Bean Souffle in the oven');
      setTimeout(()=>{
        let success = randomSuccess();
        if(success){
          resolve('Bean Souffle');
        } else {
          reject('Dinner is ruined!');
        }
      }, 1000);
    });
   };
   

   async function hostDinnerParty(){
     try{
       let value = await cookBeanSouffle();
       console.log(`${value} is served!`);
     }catch(error){
       console.log(error);
       console.log('Ordering a pizza!')
     }
   }
   
   hostDinnerParty();
   