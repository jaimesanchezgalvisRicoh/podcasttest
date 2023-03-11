export function reqListener({ feedUrl = "" }) {
  if (feedUrl === "") {
    return;
  }

  function reqListener1() {
    const description =
      this?.responseXML.getElementsByTagName("description")[0].childNodes[0]
        .nodeValue;
    console.log(description);
  }

  const req = new XMLHttpRequest();
  req.addEventListener("load", reqListener1);
  req.open("GET", `${feedUrl}`);
  req.send();
}
