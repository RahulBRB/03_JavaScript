const {checkInventory} = require('./library.js');

const order = [['sunglasses', 1], ['bags', 2]];

const handleSuccess = (resolvedValue) => {
  console.log(resolvedValue);
};

const handleFailure = (rejectReason) => {
  console.log(rejectReason);
};

checkInventory(order)
	.then(handleSuccess)
	.catch(handleFailure);

// prom
//     .then((resolvedValue) => {
//       console.log(resolvedValue);
//     })
//     .catch((rejectionReason) => {
//       console.log(rejectionReason);
//     });
