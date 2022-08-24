export const decodeHTML = function (html: string) {
  const txt = document.createElement("textarea");
  txt.innerHTML = html;
  return txt.value;
};

export const shuffle = <T>(array: T[]) => {
  let currentIndex = array.length,
    randomIndex;

  while (currentIndex != 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
};
