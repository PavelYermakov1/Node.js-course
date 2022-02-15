function cleanRoom(dirtyLevel) {
  return new Promise((resolve, reject) => {
    if (dirtyLevel < 0 || dirtyLevel > 10) {
      resolve(
        "Неверно указан уровень загрязнения. Уборка проводиться не будет"
      );
      return;
    }

    setTimeout(() => resolve(dirtyLevel), dirtyLevel * 1000);
  });
}

const cleanRoomsAll = (dirtyLevel_1, dirtyLevel_2, dirtyLevel_3) => {
  Promise.all([
    cleanRoom(dirtyLevel_1),
    cleanRoom(dirtyLevel_2),
    cleanRoom(dirtyLevel_3),
  ]).then((result) => {
    result.forEach((e) => {
      if (isNaN(e)) {
        console.log(e);
      } else {
        console.log(`Уборка проведена успешно за ${e} секунд`);
      }
    });
  });
};
