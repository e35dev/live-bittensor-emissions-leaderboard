// Tracks which column the leaderboard is sorted by, toggling direction on repeat clicks.
export function nextSort(current, col){
  if (current.col === col) return { col, dir: -current.dir };
  return { col, dir: -1 };
}
