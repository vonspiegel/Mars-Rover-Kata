// Rover Object Goes Here
// ======================
var rover = {
  direction: "N",
  x: 0,
  y: 0,
  travelLog: []
}
// ======================
var grid = [
  [null, null, null, "X", null],
  [null, "X", null, "X", null ],
  ["X", null, null, null, null ],
  [null, "X", null, null, null],
  [null, null, null, null, "X"]
];

function turnLeft(rover){
  if (rover.direction === "N") {
    rover.direction = "W";
  } else if (rover.direction === "W") {
    rover.direction = "S";
  } else if (rover.direction === "S") {
    rover.direction = "E";
  } else if (rover.direction === "E") {
    rover.direction = "N";
  }
  
  console.log("turnLeft was called!");
}

function turnRight(rover){
  if (rover.direction === "N") {
    rover.direction = "E";
  } else if (rover.direction === "E") {
    rover.direction = "S";
  } else if (rover.direction === "S") {
    rover.direction = "W"
  } else if (rover.direction === "W") {
    rover.direction = "N";
  }
  
  console.log("turnRight was called!");
}

function moveForward(rover){
  if (rover.direction === "N") {
    rover.y -= 1;
  } else if (rover.direction === "E") {
    rover.x += 1;
  } else if (rover.direction === "S") {
    rover.y += 1;
  } else if (rover.direction === "W") {
    rover.x -= 1;
  }

  console.log("moveForward was called");
}

function moveBackward(rover) {
  if (rover.direction === "N") {
    rover.y += 1;
  } else if (rover.direction === "E") {
    rover.x -= 1;
  } else if (rover.direction === "S") {
    rover.y -= 1;
  } else if (rover.direction === "W") {
    rover.x += 1;
  }

  console.log("moveBackward was called");
}

function coordinates(rover) {
  return rover.travelLog.push([rover.x, rover.y]);
}

function tracer(commands) {
  for (var i = 0; i < commands.length; i++) {
    var cmd = commands[i];

    if (cmd === "r") {
      turnRight(rover);
    } else if (cmd === "f") {
      if (grid[rover.y][rover.x] === "X") {
        console.log("Obstacle!");
      }
      moveForward(rover);
    } else if (cmd === "l") {
      turnLeft(rover);
    } else if (cmd === "b") {
      moveBackward(rover);
    }

    coordinates(rover);
  }
}