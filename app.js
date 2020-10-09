
(async () => {
  const responseObj = await fetch("http://api.github.com/repos/lerna/lerna")
  const data = await responseObj.json()
  const num1 = data.stargazers_count.toString().slice(0, 2)
  const num2 = data.stargazers_count.toString().slice(2, 3)
  const str = `${num1},${num2}k`
  document.querySelector('#stargazers').innerHTML = str
})()