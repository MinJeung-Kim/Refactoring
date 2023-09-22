function foundPerson(people) {
  // 1. 찾고자 하는 data들은 하나의 변수에 정의해 준다.
  const candidates = ["Don", "John", "Kent"];
  // 2. people의 첫번째부터 찾은걸 return,  아무것도 못찾았다면 빈문자열 리턴.
  return people.find((p) => candidates.includes(p)) || "";
}

console.log(foundPerson(["John"]));
console.log(foundPerson(["Don", "John"]));
console.log(foundPerson(["Kent", "Don", "John"]));
console.log(foundPerson(["Lisa", "Don", "Tom"]));
