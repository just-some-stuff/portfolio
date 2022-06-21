const pTag = document.getElementById("grab");

fetch("https://type.fit/api/quotes")
  .then(function (response) {
    return response.json();
  })
  .then(function (data = []) {
    const randomObj = data[Math.floor(Math.random() * data.length)];
    pTag.innerText = `"${randomObj.text}"${randomObj.author ? ` --- ${randomObj.author}` : ''}`;
  });