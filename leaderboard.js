// Renders the subnet emissions leaderboard. Fetches from the live source and
// shows explicit loading / error / empty states so nothing is faked.
export async function loadLeaderboard(el, fetcher){
  el.setAttribute('aria-busy','true');
  el.innerHTML='<p role="status">Loading live emissions…</p>';
  try{
    const rows = await fetcher();
    if(!rows.length){ el.innerHTML='<p role="status">No subnets reporting yet.</p>'; return; }
    el.innerHTML = table(rows);
    wireSort(el, rows);
  }catch(e){
    el.innerHTML='<p role="alert">Live emissions are temporarily unavailable. Retrying shortly.</p>';
  }finally{ el.removeAttribute('aria-busy'); }
}
function table(rows){
  return '<table><thead><tr>'+
    ['Subnet','Emission %','24h'].map((h,i)=>'<th tabindex="0" data-col="'+i+'" role="columnheader" aria-sort="none">'+h+'</th>').join('')+
    '</tr></thead><tbody>'+rows.map(r=>'<tr><td>'+r.name+'</td><td>'+r.emission.toFixed(1)+'</td><td>'+(r.change>=0?'+':'')+r.change.toFixed(1)+'%</td></tr>').join('')+'</tbody></table>';
}
function wireSort(el){ el.querySelectorAll('th[data-col]').forEach(th=>{ const go=()=>th.dispatchEvent(new CustomEvent('sort',{bubbles:true,detail:+th.dataset.col})); th.onclick=go; th.onkeydown=ev=>{if(ev.key==='Enter'||ev.key===' ')go();}; }); }
