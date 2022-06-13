//Practice question
const data=[
  {
    "_id": "62a372cbe5bb83afa31760a8",
    "name": "Nikki Mosley",
    "address": "782 Prince Street, Gallina, Utah, 4156"
  },
  {
    "_id": "62a372cb48e56aa3d6016871",
    "name": "Sampson Mercado",
    "address": "148 Crystal Street, Macdona, South Dakota, 8488"
  },
  {
    "_id": "62a372cb4aad1e8bc0525d17",
    "name": "Johnston Myers",
    "address": "846 Eldert Lane, Cashtown, North Dakota, 5586"
  }
  
  
]


// output ["Nikki Mosley","Sampson Mercado","Johnston Myers"]





/// filter --->function --->

// 1- your input is an array 
// 2- you want the output to be an array 
// 3- you want the output array's length to be less than or equal to input arrays length
// 4 - you want to select soeme elements from inoput array


const inputArr=[1,2,3,4,5,6,7,8,11,56,78];


const outputArr=inputArr.filter(function cb(ele){
  //console.log(ele);
 if(ele>=11){  //selecting condition 
   return ele;
 }
  
});

console.log(outputArr);

//Given an array 
// ["AB","BC","AD","AK"]  -->input
//  ["AB","AD","AK"]  ---->output

let text = ["AB","BD","AF","AK"];
let output = text.filter(function cb(ele){

  if(ele.startsWith("A")){
    return ele;
  }
  
  
})


let outputwithmap=text.map(function cb(ele){

  if(ele.startsWith("A")){
    return ele;
  }
  
  
})

console.log(outputwithmap)







