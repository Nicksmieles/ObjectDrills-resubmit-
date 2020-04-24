const firstPerson = {
  name: "Jon",
  jobTitle: "Night's Watch"
}
const secondPerson = {
  name: "Rob",
  jobTitle: "King in the North"
}
const thirdPerson = {
  name: "Ned",
  jobTitle: "dying"
}

let myArray = [firstPerson, secondPerson, thirdPerson];

myArray.forEach(element => console.log(element));
