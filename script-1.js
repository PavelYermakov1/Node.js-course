function cleanRoom() {
  setTimeout(() => console.log("Команата убрана"), 5000);
}

const cleanRoomPromise = new Promise((resolve) => {
  setTimeout(() => resolve("Команата убрана"), 5000);
});
cleanRoomPromise.then(console.log);
