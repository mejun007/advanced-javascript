const students=[
   {id:11,name:"manna"},
    {id:21,name:"dipjol"},
    {id:41,name:"gangua"},
    {id:61,name:"amit"}
]

const names = students.map(x=>x.name);
const bigger = students.filter(x=> x.id>40);
console.log(bigger);