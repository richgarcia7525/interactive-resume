// Select the skill section and progress bars
const skillSection = document.getElementById("skills");
const skillBars = document.querySelectorAll(".progress");
let soundPlayed = false; // Ensures the sound only plays once

// Skill bar animation and sound on scroll
window.addEventListener("scroll", () => {
    const sectionPos = skillSection.getBoundingClientRect().top;
    const screenPos = window.innerHeight / 1.2;

    if (sectionPos < screenPos && !soundPlayed) {
        skillBars.forEach((bar) => {
            const targetWidth = bar.getAttribute("data-width"); // Use a data attribute for the target width
            bar.style.width = "0"; // Reset width
            setTimeout(() => {
                bar.style.transition = "width 1s ease-in-out";
                bar.style.width = targetWidth; // Animate to target width
            }, 200);
        });

        // Play the level-up sound
        const levelUpSound = document.getElementById("levelUpSound");
        levelUpSound.play();
        soundPlayed = true; // Prevents the sound from playing again
    }
});

// Comet trail effect on mousemove
document.addEventListener("mousemove", (e) => {
    const comet = document.createElement("div");
    comet.className = "comet";
    comet.style.left = `${e.pageX}px`;
    comet.style.top = `${e.pageY}px`;

    document.body.appendChild(comet);

    setTimeout(() => {
        comet.remove();
    }, 500); // Removes after 500ms
});
