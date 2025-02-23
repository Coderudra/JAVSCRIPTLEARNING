function fetchdata(callback) {
  setTimeout(() => {
    console.log("called");
    callback();
  }, 2000);
  return "fethichstarted";
}
function processData() {
  console.log("call teh function");
}
console.log(fetchdata(processData));


function concepts(data){
    setTimeout(()=>{
        console.log("Hi data not loaded")
        data();
    },2000);
 return "written the function"
}
function datadetails(){
    console.log("data started loaind")
}
console.log(concepts(datadetails))