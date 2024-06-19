const filePath = process.platform === 'linux' ? '/dev/stdin' : './예제.txt';
let input = require('fs').readFileSync(filePath).toString().trim().split('\n');

const [M, N] = input.shift().split(' ').map(Number);

class WaitingRoom {
  constructor() {
    this.room = [];
  }

  createRoom(player) {
    const [playerLevel, playerNickname] = player.split(' ');

    const room = {
      index: this.room.length,
      status: 'Waiting!',
      players: [player],
      minLevel: +playerLevel - 10,
      maxLevel: +playerLevel + 10,
    };
    this.room.push(room);
    this.sortPlayers(this.room.length - 1);

    if (this.checkIsFulled(this.room.length - 1)) {
      this.room[this.room.length - 1].status = 'Started!';
    }
  }

  insertPlayer(player) {
    const [playerLevel, playerNickname] = player.split(' ');

    for (let i = 0; i < this.room.length; i++) {
      if (
        this.room[i].status === 'Waiting!' &&
        this.room[i].minLevel <= +playerLevel &&
        this.room[i].maxLevel >= +playerLevel
      ) {
        this.room[i].players.push(player);
        this.sortPlayers(i);
        if (this.checkIsFulled(i)) {
          this.room[i].status = 'Started!';
        }
        return;
      }
    }

    this.createRoom(player);
  }

  sortPlayers(roomIndex) {
    this.room[roomIndex].players.sort((a, b) =>
      a.split(' ')[1].localeCompare(b.split(' ')[1])
    );
  }

  checkIsFulled(roomIndex) {
    if (this.room[roomIndex] && this.room[roomIndex].players.length === N) {
      return true;
    }

    return false;
  }
}

const waitingRoom = new WaitingRoom();

input.forEach((player) => {
  waitingRoom.insertPlayer(player);
});

waitingRoom.room.forEach((room) => {
  console.log(room.status);
  room.players.forEach((player) => {
    console.log(player);
  });
});
