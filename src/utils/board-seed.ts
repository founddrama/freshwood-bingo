function generateSeed(): string {
  return Math.random().toString(36).slice(2, 10);
}

export default function getOrCreateBoardSeed(location = window.location): string {
  const existingSeed = location.hash.slice(1);
  if (existingSeed) {
    return existingSeed;
  }

  const seed = generateSeed();
  window.history.replaceState(null, '', `${location.pathname}${location.search}#${seed}`);

  return seed;
}
