function cleanRoom(dirtyLevel) {
  return new Promise((resolve, reject) => {
    if (dirtyLevel < 0 || dirtyLevel > 10) {
      reject(new Error("Неверно указан уровень загрязнения"));
    }
    setTimeout(() => resolve(dirtyLevel), dirtyLevel * 1000);
  }).catch(() => {
    console.log(`Уборка проводится не будет.`);
  });
}

const cleanRoomsStepByStep = (dirtyLevel_1, dirtyLevel_2, dirtyLevel_3) => {
  cleanRoom(dirtyLevel_1)
    .then((result) => {
      if (result) {
        console.log(`Уборка проведена успешно за ${result} секунд`);
      }
      return cleanRoom(dirtyLevel_2);
    })
    .then((result) => {
      if (result) {
        console.log(`Уборка проведена успешно за ${result} секунд`);
      }
      return cleanRoom(dirtyLevel_3);
    })
    .then((result) => {
      if (result) {
        console.log(`Уборка проведена успешно за ${result} секунд`);
      }
    });
};
