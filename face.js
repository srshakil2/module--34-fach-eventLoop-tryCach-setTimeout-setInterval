// normal function 2 ta option
function usersPhoto() {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => res.json())
    .then((data) => {
      for (let d of data) {
        console.log(d.id, d.email);
      }
    });
}

async function usersLoad2() {
  const fatchs = await fetch("https://jsonplaceholder.typicode.com/albums");
  const res = await fatchs.json();
  console.log(res);
  for (const data of res) {
    console.log(data);
  }
}
// -------Arrow funtion fatch
const ArrowLoad = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/albums");
  const datas = await res.json();
  console.log(datas);
  for (const data of datas) {
    console.log(data);
  }
};

// atao cole-----------------------eventListener add

document.getElementById("ids").addEventListener("click", async function () {
  const fatchs = await fetch("https://jsonplaceholder.typicode.com/albums");
  const res = await fatchs.json();
  console.log(res);
  for (const data of res) {
    console.log(data);
  }
});
// -----------------------------------
