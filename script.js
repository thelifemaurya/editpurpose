const barIds = ['s-special', 's-stamina', 's-shooting', 's-strength', 's-stealth', 's-flying', 's-diving', 's-lung'];

const config = [
    { 
        color: "#7E261F", // Brownish Red
        stats: [85, 75, 90, 60, 45, 50, 30, 80] 
    },
    { 
        color: "#59F8F6", // Cyan/Blue
        stats: [45, 95, 65, 80, 90, 35, 70, 55] 
    },
    { 
        color: "#FBAE67", // Orange
        stats: [90, 55, 75, 70, 65, 95, 40, 85] 
    }
];

let currentIndex = 0;

function updateStats() {
    const data = config[currentIndex];
    
    barIds.forEach((id, i) => {
        const bar = document.getElementById(id);
        bar.style.backgroundColor = data.color;
        bar.style.width = data.stats[i] + '%';
    });

    // Cycle index (0 -> 1 -> 2 -> 0...)
    currentIndex = (currentIndex + 1) % config.length;
}

// Fixed 2-second timer
setInterval(updateStats, 2000);

// Initial trigger
updateStats();
