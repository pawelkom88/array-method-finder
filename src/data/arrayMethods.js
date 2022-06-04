const arrayMethods = [
  {
    name: 'Array.splice()',
    usage: {
      example1: 'let arr = [1, 2, 3];',
      example2: "arr.splice(2, 0, 'HTML');",
    },
    output: "[1, 2, 'HTML', 3];",
    type: 'add',
    desc: 'Adds and/or removes elements from an array.',
    doc: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice',
  },
  {
    name: 'Array.push()',
    usage: {
      example1: 'let arr = [1, 2, 3];',
      example2: "arr.push('HTML');",
    },
    output: "[1, 2, 3, 'HTML'];",
    type: 'addEnd',
    desc: 'Adds one or more elements to the end of an array and returns the new length of the array.',
    doc: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push',
  },
  {
    name: 'Array.unshift()',
    usage: {
      example1: 'let arr = [1, 2, 3];',
      example2: "arr.unshift('HTML', 'CSS');",
    },
    output: "['HTML','CSS', 1, 2, 3];",
    type: 'addFront',
    desc: 'Adds one or more elements to the front of an array and returns the new length of the array.',
    doc: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/unshift',
  },

  {
    name: 'Array.concat()',
    usage: {
      example1: 'let arr = [1, 2, 3];',
      example2: 'let arr1 = [4, 5, 6];',
      example3: 'arr.concat(arr1);',
    },
    output: '[1, 2, 3, 4, 5, 6];',
    type: 'addOther',
    desc: 'Returns a new array comprised of this array joined with other array(s) and/or value(s).',
    doc: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat',
  },
  {
    name: 'Array.splice()',
    usage: {
      example1: 'let arr = [1, 2, 3];',
      example2: "arr.splice(2, 0, 'HTML');",
    },
    output: "[1, 2, 'HTML', 3];",
    type: 'remove',
    desc: 'Adds and/or removes elements from an array.',
    doc: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice',
  },
  {
    name: 'Array.pop()',
    usage: {
      example1: 'let arr = [1, 2, 3];',
      example2: 'arr.pop();',
    },
    output: '[1, 2];',
    type: 'removeLast',
    desc: 'Removes the last element from an array and returns that element.',
    doc: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/pop',
  },

  {
    name: 'Array.shift()',
    usage: {
      example1: 'let arr = [1, 2, 3];',
      example2: 'arr.shift();',
    },
    output: '[2, 3];',
    type: 'removeFirst',
    desc: 'Removes the first element from an array and returns that element.',
    doc: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/shift',
  },

  {
    name: 'Array.slice()',
    usage: {
      example1: 'let arr = [1, 2, 3];',
      example2: 'let slicedArr = arr.slice(1);',
    },
    output: '[2, 3];',
    type: 'removeOther',
    desc: 'The slice() method returns a shallow copy of a portion of an array into a new array object. You can specify either just the beginning element (where end will default to the arrays length) or both the beginning and the end, comma-separated. The original array will not be modified.',
    doc: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice',
  },
];

export default arrayMethods;
