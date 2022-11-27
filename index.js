let enrichData = async function () {
  let response = await fetch(
    "https://amplitude-hack-node.onrender.com/enrich",
    {
      method: "POST",
      mode: "no-cors",
    }
  );

  console.log(response.status);
};

let appendCode = function () {
  let target = document.querySelector("#code-container");
  let code = document.createElement("code");
  code.innerHTML = `[
    { date: "2022-02-02", label: "Storm Albert" },
    { date: "2022-04-11", label: "Storm Boycie" },
    { date: "2022-05-09", label: "Storm Cassandra" },
    { date: "2022-08-28", label: "Storm Denzil" },
    { date: "2022-10-20", label: "Storm Edward" },
    { date: "2022-11-15", label: "Storm Freddie" },
  ]`

  target.appendChild( code, target);
};

let clickHandler = function (event) {
  if (event.target.matches("#enrich")) {
    console.log("Clicked enrich");
    enrichData();
  } else if (event.target.matches("#external")) {
    setTimeout(appendCode, 2000)
  }
};

document.addEventListener("click", clickHandler);
