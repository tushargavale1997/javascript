let a=[1,2,3,4,5,6,7,8,9]
console.log(a)
//=>[1,2,3,4,5,6,7,8,9]
a[2]=111
console.log(a)
//=>[1, 2, 111, 4, 5, 6, 7, 8, 9]
a=["Tushar",45,BigInt(9689870321)]
console.log(a)
//=>['Tushar', 45, 9689870321n]
console.log(a.length)
//=>3

a[3]=444
console.log(a[3])
//=>444

/* Arrays are mutable  */
// String are immutable

console.log(typeof(a))
//=> it will print "OBJECT"
// because array are object