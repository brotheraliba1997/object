var itemArray = [
    {name: "juice", price:50, quantity:3 },
    {name: "cookie", price:30, quantity:9 },
    {name: "shirt", price:880, quantity:1 },
    {name: "pen", price:100, quantity:2 },

];
var add = 0, item = 0;
for(var i = 0; i<itemArray.length; i++ ){
   add+= itemArray[i].price;
   item+= itemArray[i].quantity;
}
console.log("add = " +add )
console.log("item =" +item);



// 2
var data = {
    fullname : "hamza",
    email : "hamzaali1997.h@gmail.com",
    password : "hamza",
    age : 24,
    gender : "male",
    country : "pakistan",
}

console.log("data.age is existing" + (Boolean(data.age)));
console.log("data.country is existing" + (Boolean(data.country)));
console.log("data.fullname is existing" + (Boolean(data.fullname)));

// Q3
function People(first, last, age, id, school){
this.first = first;
this.last =  last;
this.age = age;
this.id = id;
this.school = school;
}

// create a people object 
var student1 = new People("hamza", "ali" , 24, 21565, "saylani")
var student2 = new People("fahad", "ali" , 25, 21000, "saylani")
console.log(student1, student2);


//Q4
function CheckPopulation(name, gender, address, education, profession) {
    this.name = name;
    this.gender = gender;
    this.address = address;
    this.education = education;
    this.profession = profession;
  }
  
  const Peoples = new CheckPopulation(
    "Muzammil",
    "Male",
    "Nazimabad",
    "computer Engineering",
    "Developer"
  );
  console.log(Peoples);
  
  //save vales of education
  function educationData() {
    var select = document.getElementById("education");
    localStorage.setItem("save", select.value);
   
              console.log(select.value)
     
  }
  
  //save values for profession
  function professionPeoples() {
    var profession = document.getElementById("profession");
      profession[localStorage.getItem("save")];
              console.log(profession.value);
      localStorage.setItem("profession", profession.value);
    
  }
  
  //ave values of radio buttons
  function gender(){
  var radio = document.getElementsByName("gender");
  for (var i = 0; i < radio.length; i++) {
    if (radio[i].checked) {
      localStorage.getItem("Male");
      console.log("male")}
      else {
      localStorage.getItem("female");
  
      }
  }
  }