function getDateAgo(date, days) {
  const firstDate = new Date(date);
  const secondDate = new Date(Date.parse(firstDate) - days * 24 * 3600 * 1000);
  return `${
    secondDate.getMonth() + 1
  }-${secondDate.getDate()}-${secondDate.getFullYear()}`;
}
