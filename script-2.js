function cleanRoom(dirtyLevel) {
  return new Promise((resolve) => {
    setTimeout(() => resolve(dirtyLevel), dirtyLevel * 1000);
  });
}
cleanRoom(3).then((result) => {
  console.log(`Уборка проведена успешно за ${result} секунд`);
});
