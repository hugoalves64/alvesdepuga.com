//View Counter
const updateCounter = async() => {
  const data = await fetch("https://api.countapi.xyz/hit/alvesdepuga/counter")
  const count = await data.json()
  console.log(count.value)
  document.getElementById('counter').innerHTML = count.value
};
updateCounter();