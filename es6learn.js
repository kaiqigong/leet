function* anotherGenerator(i) {
  yield i + 1;
  console.log(1);
  yield i + 2;
  console.log(2);
  yield i + 3;
}

function* generator(i) {
  yield i;
  console.log(3);
  yield* anotherGenerator(i);
  console.log(4);
  yield i + 10;
}

var gen = generator(10);
