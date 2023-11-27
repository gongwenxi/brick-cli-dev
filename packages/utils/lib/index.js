'use strict';

module.exports = utils;

function utils() {
  
  console.log("start");
  
  
    setTimeout(() => {
      console.log('setTimeOut');
    }, 0);
    new Promise(()=>{
      let chain = Promise.resolve();
      chain.then(() => console.log('chain1'));
      chain.then(() => console.log('chain2'));
      chain.then(() => console.log('chain3'));
  
      });
      let chain = Promise.resolve();
      chain.then(()=>console.log("chain4"));
    console.log("end");
  return 'Hello from utils';
}
