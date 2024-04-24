const calculations = {
  sum: (a, b) => {
    return a + b;
  },

  diff: (a, b) => {
    return a - b;
  },

  product: (a, b) => {
    let result = 0;
    const count = Math.abs(b);

    if(b < 0){
      a = a * -1;
    }

    for (let i = 0; i < count; i++){
      result += a;
    } 

    return result;
  },

  divide: (a, b) => {
    return a / b;
  },
};

module.exports = calculations;
