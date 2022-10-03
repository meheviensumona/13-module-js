//object
var student = { id:19-01-51-0043, phone:0164343434344, Name:"othy"};
var student2 = { id:19-01-51-0044, phone:43443434456, Name:"sayma"};
console.log(student);
console.log(student2);
//1st way
var phoneNo = student.phone;
var name = student.Name;
console.log(phoneNo);
console.log(name)
//second way
var phoneNo = student["phone"];
console.log(phoneNo)
//3rd way
var phonePropName ="phone"; 
var phoneNo = student[phonePropName];
console.log(phoneNo)

//update phone num student-2
//1st way
student2.phone = 4857857;
console.log(student2)
//2nd way
student2["phone"] = 6668888;
console.log(student2)
//3rd way
student2[phonePropName] =999911111;
console.log(student2)

