async function getSortedAlbums() {
  const response = await fetch("https://jsonplaceholder.typicode.com/albums");

  if (response.status === 200) {
    const albums = await response.json();
    const sortedAlbums = albums.filter(
      (album) => album.userId === 1 || album.userId === 4
    );
    return sortedAlbums;
  } else {
    console.log("Ошибка HTTP: " + response.status);
  }
}

const sortedAlbums = await getSortedAlbums();

console.log(sortedAlbums);
