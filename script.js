var arr = [
  {
    name: "John",
    age: "22",
    gender: "Male",
  },
  {
    name: "Doe",
    age: "21",
    gender: "Male",
  },
  {
    name: "Ram",
    age: "25",
    gender: "Male",
  },
  {
    name: "Lisa",
    age: "23",
    gender: "Female",
  },
];
console.log("Day-3 Task Question 1")
for(let i=0; i<arr.length;i++){
    console.log("name", arr[i].name);
}
for(let i in arr){
    console.log("age",arr[i].age);
}
for(let i of arr){
    console.log(i);
}
