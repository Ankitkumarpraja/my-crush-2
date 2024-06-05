let highestZ = 1;
let currentPaperIndex = 0;
const positions = [
  { x: 50, y: 100 },
  { x: 100, y: 100 },
  { x: 150, y: 150 },
  { x: 200, y: 200 },
  { x: 250, y: 250 },
  { x: 300, y: 300 },
  { x: 350, y: 350 }
];

function moveNextPaper() {
  const papers = Array.from(document.querySelectorAll('.paper'));
  if (currentPaperIndex < papers.length) {
    const paper = papers[currentPaperIndex];
    const pos = positions[currentPaperIndex];
    paper.style.transform = `translateX(${pos.x}px) translateY(${pos.y}px) rotateZ(${Math.random() * 30 - 15}deg)`;
    paper.style.zIndex = highestZ;
    highestZ += 1;
    currentPaperIndex += 1;
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const randomizeButton = document.getElementById('randomizeButton');
  randomizeButton.addEventListener('click', moveNextPaper);
});
