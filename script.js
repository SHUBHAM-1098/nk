document.getElementById("no-btn").addEventListener("mouseover", function() {
    const yesBtn = document.getElementById("yes-btn");
    const noBtn = document.getElementById("no-btn");

    // Get current positions of buttons
    const yesBtnRect = yesBtn.getBoundingClientRect();
    const noBtnRect = noBtn.getBoundingClientRect();

    // Swap positions
    yesBtn.style.position = 'absolute';
    noBtn.style.position = 'absolute';

    yesBtn.style.top = ${noBtnRect.top}px;
    yesBtn.style.left = ${noBtnRect.left}px;

    noBtn.style.top = ${yesBtnRect.top}px;
    noBtn.style.left = $;{yesBtnRect.left}px;
});