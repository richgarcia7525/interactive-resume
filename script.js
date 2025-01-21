document.addEventListener("mousemove", function (e) {
    const comet = document.createElement("div");
    comet.className = "comet";
    comet.style.left = `${e.pageX}px`;
    comet.style.top = `${e.pageY}px`;

    document.body.appendChild(comet);

    setTimeout(() => {
        comet.remove();
    }, 500); // Removes after 500ms
});
