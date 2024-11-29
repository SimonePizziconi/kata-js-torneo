// Funzione per ottenere e rimuovere un elemento casuale da un array
export function getRandomAndRemove(array) {
  const randomIndex = Math.floor(Math.random() * array.length);
  return array.splice(randomIndex, 1)[0];
}
