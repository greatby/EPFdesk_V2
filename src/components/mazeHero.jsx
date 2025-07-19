// import React, { useEffect, useRef } from "react";

// const RawMazeGame = () => {
//   const containerRef = useRef(null);

//   useEffect(() => {
//     if (window.__mazeGameInjected) return;

//     const script = document.createElement("script");
//     script.textContent = `
//       (function() {
//         if (!window.MazeGame) {
//           class MazeGame {
//             constructor() {
//               this.gridWidth = window.innerWidth <= 480 ? 10 : window.innerWidth <= 768 ? 12 : 16;
//               this.gridHeight = window.innerWidth <= 480 ? 6 : window.innerWidth <= 768 ? 8 : 10;
//               this.grid = [];
//               this.playerPos = { x: 0, y: 0 };
//               this.goalPos = { x: this.gridWidth - 1, y: this.gridHeight - 1 };
//               this.keys = [];
//               this.collectedKeys = 0;
//               this.powerUps = [];
//               this.obstacles = [];
//               this.trail = [];
//               this.gameWon = false;
//               this.mazeGrid = document.getElementById('mazeGrid');

//               this.initializeGrid();
//               this.generateMaze();
//               this.renderMaze();
//               this.setupControls();
//             }

//             initializeGrid() {
//               for (let y = 0; y < this.gridHeight; y++) {
//                 this.grid[y] = [];
//                 for (let x = 0; x < this.gridWidth; x++) {
//                   this.grid[y][x] = Math.random() < 0.3 ? 'wall' : 'path';
//                 }
//               }
//               this.grid[0][0] = 'path';
//               this.grid[this.goalPos.y][this.goalPos.x] = 'path';
//               this.createPath();
//               this.addSpecialElements();
//             }

//             createPath() {
//               let x = 0, y = 0;
//               const colors = ['colored-path-1','colored-path-2','colored-path-3','colored-path-4','colored-path-5','colored-path-6'];
//               let colorIndex = 0;

//               while (x < this.goalPos.x || y < this.goalPos.y) {
//                 this.grid[y][x] = colors[colorIndex % colors.length];
//                 if (x < this.goalPos.x && (y === this.goalPos.y || Math.random() < 0.6)) x++;
//                 else if (y < this.goalPos.y) y++;
//                 if (Math.random() < 0.3) colorIndex++;
//               }
//             }

//             addSpecialElements() {
//               const tryPlace = (arr, count, className) => {
//                 for (let i = 0; i < count; i++) {
//                   let x, y;
//                   do {
//                     x = Math.floor(Math.random() * this.gridWidth);
//                     y = Math.floor(Math.random() * this.gridHeight);
//                   } while (this.grid[y][x] === 'wall' || (x === 0 && y === 0) || (x === this.goalPos.x && y === this.goalPos.y));
//                   arr.push({ x, y });
//                 }
//               };
//               tryPlace(this.keys, 3, 'key');
//               tryPlace(this.powerUps, 2, 'power-up');
//               tryPlace(this.obstacles, 4, 'obstacle');
//             }

//             generateMaze() {
//               const colors = ['colored-path-1','colored-path-2','colored-path-3','colored-path-4','colored-path-5','colored-path-6'];
//               for (let y = 0; y < this.gridHeight; y++) {
//                 for (let x = 0; x < this.gridWidth; x++) {
//                   if (this.grid[y][x] === 'path' && Math.random() < 0.15) {
//                     this.grid[y][x] = colors[Math.floor(Math.random() * colors.length)];
//                   }
//                 }
//               }
//             }

//             renderMaze() {
//               this.mazeGrid.innerHTML = '';
//               for (let y = 0; y < this.gridHeight; y++) {
//                 for (let x = 0; x < this.gridWidth; x++) {
//                   const cell = document.createElement('div');
//                   cell.className = 'maze-cell ' + this.grid[y][x];
//                   cell.dataset.x = x;
//                   cell.dataset.y = y;
//                   if (x === this.playerPos.x && y === this.playerPos.y) cell.classList.add('player');
//                   if (x === this.goalPos.x && y === this.goalPos.y) cell.classList.add('goal');
//                   this.keys.forEach((key, i) => {
// if (key.x === x && key.y === y && !key.collected) cell.classList.add('key');
//                   });
//                   this.powerUps.forEach(p => {
//                     if (p.x === x && p.y === y && !p.collected) cell.classList.add('power-up');
//                   });
//                   this.obstacles.forEach(o => {
//                     if (o.x === x && o.y === y) cell.classList.add('obstacle');
//                   });
//                   this.trail.forEach(t => {
//                     if (t.x === x && t.y === y) cell.classList.add('trail');
//                   });
//                   this.mazeGrid.appendChild(cell);
//                 }
//               }
//             }

//             setupControls() {
//               document.addEventListener('keydown', (e) => {
//                 if (this.gameWon) return;
//                 let newX = this.playerPos.x;
//                 let newY = this.playerPos.y;
//                 const map = { 'ArrowUp': [0,-1], 'w':[0,-1],'W':[0,-1], 'ArrowDown':[0,1],'s':[0,1],'S':[0,1], 'ArrowLeft':[-1,0],'a':[-1,0],'A':[-1,0], 'ArrowRight':[1,0],'d':[1,0],'D':[1,0] };
//                 if (map[e.key]) {
//                   e.preventDefault();
//                   newX += map[e.key][0];
//                   newY += map[e.key][1];
//                   this.movePlayer(newX, newY);
//                 }
//               });

//               let startX, startY;
//               this.mazeGrid.addEventListener('touchstart', (e) => {
//                 e.preventDefault();
//                 startX = e.touches[0].clientX;
//                 startY = e.touches[0].clientY;
//               });
//               this.mazeGrid.addEventListener('touchend', (e) => {
//                 e.preventDefault();
//                 const dx = startX - e.changedTouches[0].clientX;
//                 const dy = startY - e.changedTouches[0].clientY;
//                 if (Math.abs(dx) > Math.abs(dy)) {
//                   if (dx > 20) this.movePlayer(this.playerPos.x - 1, this.playerPos.y);
//                   else if (dx < -20) this.movePlayer(this.playerPos.x + 1, this.playerPos.y);
//                 } else {
//                   if (dy > 20) this.movePlayer(this.playerPos.x, this.playerPos.y - 1);
//                   else if (dy < -20) this.movePlayer(this.playerPos.x, this.playerPos.y + 1);
//                 }
//               });
//             }

//             movePlayer(newX, newY) {
//               if (this.grid[newY]?.[newX] === 'wall') return this.createShakeEffect(newX, newY);
//               if (this.obstacles.some(o => o.x === newX && o.y === newY)) return this.createShakeEffect(newX, newY);
//               this.trail.push({ ...this.playerPos });
//               if (this.trail.length > 5) this.trail.shift();
//               this.playerPos = { x: newX, y: newY };

//               this.keys.forEach((key, i) => {
//                if (key.x === newX && key.y === newY && !key.collected) {
//   key.collected = true;
//   this.collectedKeys++;
//   this.createParticleEffect(newX, newY, '#fdcb6e');
// }

//               });
//               this.powerUps.forEach(p => {
//                 if (p.x === newX && p.y === newY && !p.collected) {
//                   p.collected = true;
//                   this.createParticleEffect(newX, newY, '#a29bfe');
//                 }
//               });
//               if (newX === this.goalPos.x && newY === this.goalPos.y && this.collectedKeys >= this.keys.length) {
//                 this.winGame();
//               }
//               this.renderMaze();
//             }

//             createParticleEffect(x, y, color) {
//               const cell = document.querySelector('[data-x="' + x + '"][data-y="' + y + '"]');
//               if (!cell) return;
//               for (let i = 0; i < 8; i++) {
//                 const particle = document.createElement('div');
//                 particle.className = 'particle';
//                 particle.style.background = color;
//                 particle.style.left = Math.random() * 100 + '%';
//                 particle.style.top = Math.random() * 100 + '%';
//                 cell.appendChild(particle);
//                 setTimeout(() => particle.remove(), 2000);
//               }
//             }

//             createShakeEffect(x, y) {
//               const cell = document.querySelector('[data-x="' + x + '"][data-y="' + y + '"]');
//               if (!cell) return;
//               cell.style.animation = 'none';
//               setTimeout(() => {
//                 cell.style.animation = 'blockedShake 0.5s ease-in-out';
//               }, 10);
//             }

//             winGame() {
//               this.gameWon = true;
//               const victory = document.createElement('div');
//               victory.className = 'victory-effect';
//               document.querySelector('.game-container').appendChild(victory);
//               for (let i = 0; i < 30; i++) {
//                 setTimeout(() => {
//                   this.createParticleEffect(
//                     Math.floor(Math.random() * this.gridWidth),
//                     Math.floor(Math.random() * this.gridHeight),
//                     ['#ff6b6b', '#ffe66d', '#4ecdc4', '#a8e6cf', '#74b9ff'][Math.floor(Math.random() * 5)]
//                   );
//                 }, i * 100);
//               }
//               setTimeout(() => {
//                 this.resetGame();
//                 victory.remove();
//               }, 3000);
//             }

//             resetGame() {
//               this.playerPos = { x: 0, y: 0 };
//               this.collectedKeys = 0;
//               this.trail = [];
//               this.gameWon = false;
//               this.powerUps.forEach(p => p.collected = false);
//               this.initializeGrid();
//               this.generateMaze();
//               this.renderMaze();
//             }
//           }

//           window.MazeGame = MazeGame;
//         }

//         new window.MazeGame();
//         window.__mazeGameInjected = true;
//         window.addEventListener('resize', () => location.reload());
//       })();
//     `;

//     containerRef.current.appendChild(script);
//   }, []);

//   return (
//     <div ref={containerRef} className="game-container">
//       <div className="maze-background"></div>

//       <div className="floating-elements">
//         <div className="floating-circle"></div>
//         <div className="floating-circle"></div>
//         <div className="floating-circle"></div>
//       </div>

//       <div className="maze-border border-top"></div>
//       <div className="maze-border border-bottom"></div>
//       <div className="maze-border border-left"></div>
//       <div className="maze-border border-right"></div>
//       <div id="mazeGrid" className="maze-grid"></div>
//     </div>
//   );
// };

// export default RawMazeGame;


import React, { useState, useEffect, useCallback } from 'react';


const CELL_TYPES = ['wall', 'path', 'colored-path-1', 'colored-path-2', 'colored-path-3', 'colored-path-4', 'colored-path-5', 'colored-path-6'];

const getGridSize = () => {
  if (window.innerWidth <= 480) return [10, 6];
  if (window.innerWidth <= 768) return [12, 8];
  return [16, 10];
};

const getRandomColorPath = () => {
  const colors = ['colored-path-1', 'colored-path-2', 'colored-path-3', 'colored-path-4', 'colored-path-5', 'colored-path-6'];
  return colors[Math.floor(Math.random() * colors.length)];
};

const generateGrid = (width, height) => {
  const grid = Array.from({ length: height }, () =>
    Array.from({ length: width }, () => (Math.random() < 0.3 ? 'wall' : 'path'))
  );
  grid[0][0] = 'path';
  grid[height - 1][width - 1] = 'path';
  return grid;
};

const createPath = (grid, goalX, goalY) => {
  let x = 0, y = 0;
  while (x < goalX || y < goalY) {
    grid[y][x] = getRandomColorPath();
    if (x < goalX && (y === goalY || Math.random() < 0.6)) x++;
    else if (y < goalY) y++;
  }
};

const placeItems = (grid, count, width, height, avoid) => {
  const items = [];
  while (items.length < count) {
    const x = Math.floor(Math.random() * width);
    const y = Math.floor(Math.random() * height);
    if (!avoid.some(a => a.x === x && a.y === y) && grid[y][x] !== 'wall') {
      items.push({ x, y, collected: false });
    }
  }
  return items;
};

const RawMazeGame = () => {
  const [width, height] = getGridSize();
  const [grid, setGrid] = useState([]);
  const [playerPos, setPlayerPos] = useState({ x: 0, y: 0 });
  const [goalPos] = useState({ x: width - 1, y: height - 1 });
  const [keys, setKeys] = useState([]);
  const [powerUps, setPowerUps] = useState([]);
  const [obstacles, setObstacles] = useState([]);
  const [trail, setTrail] = useState([]);
  const [collectedKeys, setCollectedKeys] = useState(0);
  const [gameWon, setGameWon] = useState(false);
  const [particles, setParticles] = useState([]);

  const setupGame = () => {
    const newGrid = generateGrid(width, height);
    createPath(newGrid, goalPos.x, goalPos.y);
    const avoid = [{ x: 0, y: 0 }, goalPos];
    setGrid(newGrid);
    setPlayerPos({ x: 0, y: 0 });
    setCollectedKeys(0);
    setTrail([]);
    setGameWon(false);
    setKeys(placeItems(newGrid, 4, width, height, avoid));
    setPowerUps(placeItems(newGrid, 2, width, height, avoid));
    setObstacles(placeItems(newGrid, 4, width, height, avoid));
  };

  useEffect(() => {
    setupGame();
  }, [width, height, goalPos]);

  const triggerParticles = () => {
    const effects = [];
    for (let i = 0; i < 30; i++) {
      effects.push({
        id: Math.random(),
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        color: ['#ff6b6b', '#ffe66d', '#4ecdc4', '#a8e6cf', '#74b9ff'][Math.floor(Math.random() * 5)]
      });
    }
    setParticles(effects);
    setTimeout(() => setParticles([]), 3000);
  };

  const movePlayer = useCallback((dx, dy) => {
    if (gameWon) return;
    const newX = playerPos.x + dx;
    const newY = playerPos.y + dy;
    if (!grid[newY] || grid[newY][newX] === 'wall' || obstacles.some(o => o.x === newX && o.y === newY)) return;

    setTrail(prev => [...prev.slice(-4), { ...playerPos }]);
    setPlayerPos({ x: newX, y: newY });

    setKeys(prev => {
      return prev.map((key) => {
        if (!key.collected && key.x === newX && key.y === newY) {
          setCollectedKeys(k => k + 1);
          return { ...key, collected: true };
        }
        return key;
      });
    });

    setPowerUps(prev => {
      return prev.map(p => {
        if (!p.collected && p.x === newX && p.y === newY) {
          return { ...p, collected: true };
        }
        return p;
      });
    });

    if (newX === goalPos.x && newY === goalPos.y && collectedKeys + 1 >= keys.length) {
      setGameWon(true);
      triggerParticles();
      setTimeout(() => setupGame(), 4000);
    }
  }, [playerPos, grid, collectedKeys, gameWon, obstacles, keys.length, goalPos]);

  useEffect(() => {
    const handleKey = (e) => {
      const map = {
        ArrowUp: [0, -1], w: [0, -1],
        ArrowDown: [0, 1], s: [0, 1],
        ArrowLeft: [-1, 0], a: [-1, 0],
        ArrowRight: [1, 0], d: [1, 0],
      };
      if (map[e.key]) {
        e.preventDefault();
        movePlayer(...map[e.key]);
      }
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [movePlayer]);

  useEffect(() => {
  let startX = 0;
  let startY = 0;

  const handleTouchStart = (e) => {
    const touch = e.touches[0];
    startX = touch.clientX;
    startY = touch.clientY;
  };

  const handleTouchEnd = (e) => {
    const touch = e.changedTouches[0];
    const dx = touch.clientX - startX;
    const dy = touch.clientY - startY;

    if (Math.abs(dx) > Math.abs(dy)) {
      // Horizontal swipe
      if (dx > 20) movePlayer(1, 0);     // Right
      else if (dx < -20) movePlayer(-1, 0);  // Left
    } else {
      // Vertical swipe
      if (dy > 20) movePlayer(0, 1);     // Down
      else if (dy < -20) movePlayer(0, -1);  // Up
    }
  };

  const maze = document.getElementById("mazeGrid");
  if (maze) {
    maze.addEventListener("touchstart", handleTouchStart, { passive: false });
    maze.addEventListener("touchend", handleTouchEnd, { passive: false });
  }

  return () => {
    if (maze) {
      maze.removeEventListener("touchstart", handleTouchStart);
      maze.removeEventListener("touchend", handleTouchEnd);
    }
  };
}, [movePlayer]);


  return (
    <div className="game-container">
         <div className="maze-background"></div>
        
        <div className="floating-elements">
            <div className="floating-circle"></div>
            <div className="floating-circle"></div>
            <div className="floating-circle"></div>
        </div>

        <div className="maze-border border-top"></div>
        <div className="maze-border border-bottom"></div>
        <div className="maze-border border-left"></div>
        <div className="maze-border border-right"></div>
      <div id="mazeGrid" className="maze-grid">
        {grid.map((row, y) =>
          row.map((cell, x) => {
            const isPlayer = playerPos.x === x && playerPos.y === y;
            const isGoal = goalPos.x === x && goalPos.y === y;
            const isKey = keys.some((k) => k.x === x && k.y === y && !k.collected);
            const isPower = powerUps.some(p => p.x === x && p.y === y && !p.collected);
            const isObstacle = obstacles.some(o => o.x === x && o.y === y);
            const isTrail = trail.some(t => t.x === x && t.y === y);
            const classNames = ['maze-cell', cell];
            if (isPlayer) classNames.push('player');
            if (isGoal) classNames.push('goal');
            if (isKey) classNames.push('key');
            if (isPower) classNames.push('power-up');
            if (isObstacle) classNames.push('obstacle');
            if (isTrail) classNames.push('trail');
            return <div key={`${x}-${y}`} className={classNames.join(' ')} data-x={x} data-y={y}></div>;
          })
        )}
      </div>
      {gameWon && (
        <div className="victory-effect">
          {particles.map(p => (
            <div
              key={p.id}
              className="particle"
              style={{ left: p.left, top: p.top, backgroundColor: p.color }}
            />
          ))}
          🎉
        </div>
      )}
    </div>
  );
};

export default RawMazeGame;



