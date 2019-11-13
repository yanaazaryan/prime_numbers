module.exports = {
    isPrime: function (num) {
      if (num <= 1){
        return false;
      }
  
      let div = 2;
  
      while(div <= Math.sqrt(num)){
        if(num % div === 0){
          return false;
        }
        div++;
      }
      return true;
    },

    printArray: function (zang) {
        if(typeof zang === "string"){
            console.log(zang)
        }else{
            for(let i = 0; i < zang.length; i++){
                console.log(zang[i]);
              }
        }
      }
}