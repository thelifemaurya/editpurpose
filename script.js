const charData = [
    { color: "#ff5e5e", stats: [80, 70, 90, 50, 40, 60, 30, 80] }, // Top (Red)
    { color: "#64ccff", stats: [40, 80, 50, 60, 90, 40, 70, 50] }, // Right (Blue)
    { color: "#ffac5e", stats: [60, 50, 70, 80, 50, 90, 40, 60] }  // Left (Orange)
];

const barIds = ['s-special', 's-stamina', 's-shooting', 's-strength', 's-stealth', 's-flying', 's-diving', 's-lung'];
let currentIndex = 0;

function updateUI() {
    const slices = document.querySelectorAll('.slice');
    slices.forEach(s => s.classList.remove('active'));

    // Handle cycling 0, 1, 2 (skip 3/bottom)
    const activeSlice = document.querySelector(`.slice[data-id="${currentIndex}"]`);
    if(activeSlice) activeSlice.classList.add('active');

    const stats = charData[currentIndex].stats;
    const color = charData[currentIndex].color;

    barIds.forEach((id, i) => {
        const bar = document.getElementById(id);
        bar.style.width = stats[i] + '%';
        bar.style.backgroundColor = color;
    });

    currentIndex = (currentIndex + 1) % 3;
}

// Start cycling
setInterval(updateUI, 2000);
updateUI();
