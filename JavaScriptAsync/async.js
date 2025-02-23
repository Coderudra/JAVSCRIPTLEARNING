async function fetchapidata(){
    try{
        const apicall= await fetch("https://jsonplaceholder.typicode.com/posts/1")
        const res= await apicall.json();
        console.log(res)
    }
    catch(error){
         console.error(error)
    }
 
}
console.log(fetchapidata());