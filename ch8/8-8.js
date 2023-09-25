export function acquireData(input) {
  return input
    .split("\n") // [ 'office, country, telephone', '', 'Chicago, USA, +1 312 373 1000', '', ... ]
    .splice(1) // 제목 제외('office, country, telephone')
    .filter((line) => line.trim() !== "") // 빈문자열 제외
    .map((line) => line.split(",")) // [ [ 'Chicago', ' USA', ' +1 312 373 1000' ], [ 'Beijing', ' China', ' +86 4008 900 505' ], ... ]
    .filter((line) => line[1].trim() === "India") // [ [ 'Bangalore', ' India', ' +91 80 4064 9570' ], [ 'Chennai', ' India', ' +91 44 660 44766' ] ]
    .map((line) => ({ city: line[0].trim(), phone: line[2].trim() }));
  // [ { city: 'Bangalore', phone: '+91 80 4064 9570' }, { city: 'Chennai', phone: '+91 44 660 44766' } ]
}

const input = `office, country, telephone\n
Chicago, USA, +1 312 373 1000\n
Beijing, China, +86 4008 900 505\n
Bangalore, India, +91 80 4064 9570\n
Porto Alegre, Brazil, +55 51 3079 3550\n
Chennai, India, +91 44 660 44766`;
const result = acquireData(input);
console.log(result);
