const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

let newArray =[]

const titleCased = (() => {
  debugger;
  for (const item of tutorials) {
    const str = item.split (' ')
    let capArray = str.map( (string) => {
      return string [0].toUpperCase() + string.slice(1);})
    let joinArray = capArray.join(" ")
    newArray.push(joinArray)
    }
    tutorials.splice(0,10)
    tutorials.push(...newArray)
  return tutorials
})

function capitalize(string) {
  return string [0].toUpperCase() + string.slice(1);
}


titleCased();
console.log(tutorials)