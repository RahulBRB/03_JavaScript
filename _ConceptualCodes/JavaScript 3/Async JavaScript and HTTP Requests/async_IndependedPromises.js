let cookBeans = () => {
    return new Promise ((resolve, reject) => {
     setTimeout(()=>{
       resolve('beans');
     }, 1000);
   });
  };
  
  let steamBroccoli = () => {
   return new Promise ((resolve, reject) => {
     setTimeout(()=>{
       resolve('broccoli');
     }, 1000);
   });
  };
  
  let cookRice = () => {
   return new Promise ((resolve, reject) => {
     setTimeout(()=>{
       resolve('rice');
     }, 1000);
   });
  };
  
  let bakeChicken = () => {
   return new Promise ((resolve, reject) => {
     setTimeout(()=>{
       resolve('chicken')
     }, 1000);
   });
  };
  
  
  async function serveDinner() {
   const vegetablePromise = steamBroccoli();
   const starchPromise = cookRice();
   const proteinPromise = bakeChicken();
   const sidePromise = cookBeans();
   console.log(`Dinner is served. We're having ${vegetablePromise}, ${await starchPromise}, ${await proteinPromise}, and ${await sidePromise}.`);
  }
  
  serveDinner();
  