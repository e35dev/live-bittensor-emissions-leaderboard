// Compact relative time for the "updated Xs ago" freshness label.
export function relativeTime(iso){
  const s = Math.max(0, (Date.now() - new Date(iso).getTime())/1000);
  if (s < 60) return Math.floor(s)+'s ago';
  if (s < 3600) return Math.floor(s/60)+'m ago';
  return Math.floor(s/3600)+'h ago';
}
