// Your code here
function saturdayFun(activity = "roller-skate") {
  const sat = `This Saturday, I want to ${activity}!`;
  return sat
};

const mondayWork = function(activity = "go to the office") {
  const mon = `This Monday, I will ${activity}.`;
  return mon
};

function wrapAdjective(flair = "*") {
  return function(gasMeUp = "special") {
    return `You are ${flair}${gasMeUp}${flair}!`
  }
};

const Calculator = {
  
  add: function(num1, num2) {
    return num1 + num2
  },

  subtract: function(num1, num2) {
    return num1 - num2
  },

  multiply: function(num1, num2) {
    return num1 * num2
  },

  divide: function(num1, num2) {
    return num1 / num2
  },
};

function actionApplyer(num, arr) {
  for (let i = 0; i < arr.length; i++) {
    num = arr[i](num);
  }
  return num;
}