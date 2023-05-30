var firstname="Sairam";
var lastname="Maddela";
console.log(firstname,lastname);
var a="sairam";
a=1224;
console.log(a,typeof a);
(function callOnce(){
    console.log("Calling only once 1");
})();
(
    ()=>{
        console.log("Calling only once 2");
    }
)();