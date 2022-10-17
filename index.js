const input = document.querySelector("#input");
const button = document.querySelector("#find-btn");
const data = document.querySelector("#data");

async function submit(e) {
  console.log(input.value);

  const response = await fetch(
    `https://pokeapi.co/api/v2/pokemon/${input.value}`
  );
  const result = await response.json();

  console.log(result);
  data.innerHTML = JSON.stringify(result);
}
