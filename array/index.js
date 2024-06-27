const arr=[2,4,6,8,133]
const res = arr.forEach((item) => {
    return item * item;
  });

// it will return new array after performing operation
  const ret= arr.map((val)=>{
    return val *val
  })
console.log(ret)
  //console.log(typeof ret)

  // array of object
  const arrObj=[
    {
        name:'Raj',
        age:22,
        profession:'Mern Stack'
    },
    {
        name:'kiara',
        age:28,
        profession:' Software Engineer'
    },
    {
        name:'sheena',
        age:30,
        profession:'Frontend developer'
    },
    {
        name:'Preeti',
        age:30,
        profession:'Frontend developer'
    },
    {
        name:'Mayank',
        age:37,
        profession:'Frontend developer'
    },
    {
        name:'ram',
        age:70,
        profession:'software developer'
    },
]

  const newArr= arrObj.filter((val)=>{
              return val.profession=='Frontend developer';
  })
  console.log(newArr)


  const red= arr.reduce((curr,total,index,array)=>{
    
    return curr
  })
  console.log(red)