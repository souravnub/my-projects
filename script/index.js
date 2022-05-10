const linkList = document.querySelector(".container .link-container");

Links.forEach((link) => {
    let li = linkList.appendChild(document.createElement("li"));
    let a = li.appendChild(document.createElement("a"));
    a.setAttribute("href", link.url);
    a.classList.add("link");
    a.setAttribute("target", "_blank");
    a.innerHTML = link.text;
});
