export class Person {
  #name;
  #courses;
  constructor(name) {
    this.#name = name;
    this.#courses = [];
  }

  get name() {
    return this.#name;
  }

  get courses() {
    // 새로운 배열을 만들어서 전달
    return [...this.#courses];
  }

  // 강의를 추가하는 함수
  addCourse(course) {
    this.#courses.push(course);
  }

  // 강의를 삭제하는 함수
  removeCourse(course, runIfAbsent) {
    const index = this.#courses.indexOf(course);
    if (index === -1) {
      runIfAbsent();
      return;
    }

    this.#courses.splice(index, 1);
  }
}

export class Course {
  #name;
  #isAdvanced;
  constructor(name, isAdvanced) {
    this.#name = name;
    this.#isAdvanced = isAdvanced;
  }

  get name() {
    return this.#name;
  }

  get isAdvanced() {
    return this.#isAdvanced;
  }
}

const people = new Person("록시");
const course = new Course("리팩토링", true);
people.addCourse(course);
console.log(people.courses.length); // 1
people.removeCourse(course, () => {
  console.log("해당코스는 없다."); // 0
});
people.removeCourse(course, () => {
  console.log("해당코스는 없다."); // 해당코스는 없다.
});
