let btn = document.querySelector("button");
let p = document.querySelector("p");

btn.addEventListener("click", async () => {
  let fact = await fetchData();
  console.log(fact);
  p.innerText = fact;
});


let url = "https://catfact.ninja/fact";

/* fatch URL */
/* fetch(url) */
/* .then((response) => {
   console.log(response);
   return response.json();
})
.then((data) => {   
  console.log("data1", data.fact);
  return fetch(url);
})
 .then((response) => {
    return response.json();

 })
.then((data2) => {
    console.log("data2", data2.fact);
})
.catch((error) => {
  console.log(error, "error");
});

console.log("End of the code");
 */

async function fetchData() {
    try {
        let res =await axios.get(url);
        return res.data.fact;


} catch (error) {
    console.log(error);
    return "error";
}
}