// code your solution here
function saturdayFun(activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`;
}

// Examples
console.log(saturdayFun());  // Output: "This Saturday, I want to roller-skate!"
console.log(saturdayFun("hike"));  // Output: "This Saturday, I want to hike!"
console.log(saturdayFun("read a book"));  // Output: "This Saturday, I want to read a book!"
const mondayWork = function(activity = "go to the office") {
    return `This Monday, I will ${activity}.`;
};

// Examples
console.log(mondayWork());  // Output: "This Monday, I will go to the office."
console.log(mondayWork("work on a project"));  // Output: "This Monday, I will work on a project."
console.log(mondayWork("have meetings all day"));  // Output: "This Monday, I will have meetings all day."
function wrapAdjective(flair = "*") {
    return function(adjective = "special") {
        return `You are ${flair}${adjective}${flair}!`;
    };
}

// Example usage:
const encouragingPromptFunction = wrapAdjective("!!!");

console.log(encouragingPromptFunction());  // Output: "You are *special*!"
console.log(encouragingPromptFunction("awesome"));  // Output: "You are !!!awesome!!!"
console.log(encouragingPromptFunction("amazing"));  // Output: "You are !!!amazing!!!"
