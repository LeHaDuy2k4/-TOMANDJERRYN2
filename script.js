document.querySelector("button").addEventListener("click", function() {
    const memberList = ["Tom", "Jerry", "Spike"];
    const ul = document.createElement("ul");
    memberList.forEach(name => {
        const li = document.createElement("li");
        li.textContent = name;
        ul.appendChild(li);
    });
    document.body.appendChild(ul);
});
