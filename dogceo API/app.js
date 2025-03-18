let btn = document.querySelector("button");
let image = document.querySelector("#images");
let url = "https://dog.ceo/api/breeds/image/random";

btn.addEventListener("click", async () => {
  let fact = await fetchData();
  console.log(fact);
  image.setAttribute("src", fact);
  
});






async function fetchData() {
    try {
        let res =await axios.get(url);
        return res.data.message;
} catch (error) {
    console.log(error);
    return "error";
}
}