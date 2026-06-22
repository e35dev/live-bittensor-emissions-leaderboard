// Tiny helper: turn a 24h emission delta into a compact momentum glyph.
export function momentum(change){
  if(change > 1) return {glyph:'▲', cls:'up'};
  if(change < -1) return {glyph:'▼', cls:'down'};
  return {glyph:'•', cls:'flat'};
}
