const arr = [
  'hello',
  function setHello() {
    console.log('hello');
  },
  15,
];
const [message, setMessage, age] = arr;
console.log(message);
console.log(setMessage);
