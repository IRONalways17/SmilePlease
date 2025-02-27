// Function to change background color every second
function startColorChange() {
  // Array of vibrant colors
  const colors = [
    '#FFD700', // Gold
    '#FF6B6B', // Light Red
    '#4ECDC4', // Turquoise
    '#A1C3D1', // Light Blue
    '#B8E1FF', // Very Light Blue
    '#F9DC5C', // Yellow
    '#BFDFFF', // Sky Blue
    '#F7ACCF', // Pink
    '#C3E8BD', // Light Green
    '#E8DAFF'  // Light Purple
  ];
  
  let index = 0;
  
  // Change color every second
  setInterval(() => {
    document.body.style.backgroundColor = colors[index];
    index = (index + 1) % colors.length;
  }, 1000);
}

// Start the color changing effect when the page loads
document.addEventListener('DOMContentLoaded', startColorChange);
