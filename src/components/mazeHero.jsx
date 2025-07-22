import React, { useState, useEffect, useCallback } from "react";

const CELL_TYPES = [
  "wall",
  "path",
  "colored-path-1",
  "colored-path-2",
  "colored-path-3",
  "colored-path-4",
  "colored-path-5",
  "colored-path-6",
];

const getGridSize = () => {
  if (window.innerWidth <= 480) return [10, 6];
  if (window.innerWidth <= 768) return [12, 8];
  return [16, 10];
};

const getRandomColorPath = () => {
  const colors = [
    "colored-path-1",
    "colored-path-2",
    "colored-path-3",
    "colored-path-4",
    "colored-path-5",
    "colored-path-6",
  ];
  return colors[Math.floor(Math.random() * colors.length)];
};

const generateGrid = (width, height) => {
  const grid = Array.from({ length: height }, () =>
    Array.from({ length: width }, () => (Math.random() < 0.3 ? "wall" : "path"))
  );
  grid[0][0] = "path";
  grid[height - 1][width - 1] = "path";
  return grid;
};

const createPath = (grid, goalX, goalY) => {
  let x = 0,
    y = 0;
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
    if (!avoid.some((a) => a.x === x && a.y === y) && grid[y][x] !== "wall") {
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
    setKeys(placeItems(newGrid, 3, width, height, avoid));
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
        color: ["#ff6b6b", "#ffe66d", "#4ecdc4", "#a8e6cf", "#74b9ff"][
          Math.floor(Math.random() * 5)
        ],
      });
    }
    setParticles(effects);
    setTimeout(() => setParticles([]), 3000);
  };

  const movePlayer = useCallback(
    (dx, dy) => {
      if (gameWon) return;
      const newX = playerPos.x + dx;
      const newY = playerPos.y + dy;
      if (
        !grid[newY] ||
        grid[newY][newX] === "wall" ||
        obstacles.some((o) => o.x === newX && o.y === newY)
      )
        return;

      setTrail((prev) => [...prev.slice(-4), { ...playerPos }]);
      setPlayerPos({ x: newX, y: newY });

      setKeys((prev) => {
        return prev.map((key) => {
          if (!key.collected && key.x === newX && key.y === newY) {
            setCollectedKeys((k) => k + 1);
            return { ...key, collected: true };
          }
          return key;
        });
      });

      setPowerUps((prev) => {
        return prev.map((p) => {
          if (!p.collected && p.x === newX && p.y === newY) {
            return { ...p, collected: true };
          }
          return p;
        });
      });

      // if (newX === goalPos.x && newY === goalPos.y && collectedKeys + 1 >= keys.length) {
      //   setGameWon(true);
      //   triggerParticles();
      //   setTimeout(() => setupGame(), 4000);
      // }
      if (
        newX === goalPos.x &&
        newY === goalPos.y &&
        keys.every((key) => key.collected)
      ) {
        setGameWon(true);
        triggerParticles();
        setTimeout(() => setupGame(), 4000);
      }
    },
    [playerPos, grid, collectedKeys, gameWon, obstacles, keys.length, goalPos]
  );

  useEffect(() => {
    const handleKey = (e) => {
      const map = {
        ArrowUp: [0, -1],
        // w: [0, -1],
        ArrowDown: [0, 1],
        // s: [0, 1],
        ArrowLeft: [-1, 0],
        // a: [-1, 0],
        ArrowRight: [1, 0],
        // d: [1, 0],
      };
      if (map[e.key]) {
        e.preventDefault();
        movePlayer(...map[e.key]);
      }
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
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
        if (dx > 20) movePlayer(1, 0); // Right
        else if (dx < -20) movePlayer(-1, 0); // Left
      } else {
        // Vertical swipe
        if (dy > 20) movePlayer(0, 1); // Down
        else if (dy < -20) movePlayer(0, -1); // Up
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
            const isKey = keys.some(
              (k) => k.x === x && k.y === y && !k.collected
            );
            const isPower = powerUps.some(
              (p) => p.x === x && p.y === y && !p.collected
            );
            const isObstacle = obstacles.some((o) => o.x === x && o.y === y);
            const isTrail = trail.some((t) => t.x === x && t.y === y);
            const classNames = ["maze-cell", cell];
            if (isPlayer) classNames.push("player");
            if (isGoal) classNames.push("goal");
            if (isKey) classNames.push("key");
            if (isPower) classNames.push("power-up");
            if (isObstacle) classNames.push("obstacle");
            if (isTrail) classNames.push("trail");
            return (
              <div
                key={`${x}-${y}`}
                className={classNames.join(" ")}
                data-x={x}
                data-y={y}
              ></div>
            );
          })
        )}
      </div>
      {gameWon && (
        <div className="victory-effect">
          {particles.map((p) => (
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
