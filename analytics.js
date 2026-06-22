// Google Analytics + marketing cookie consent banner.
export function initAnalytics(){
  const s=document.createElement('script'); s.src='https://www.googletagmanager.com/gtag/js?id=G-XXとの'; document.head.appendChild(s);
  const b=document.createElement('div'); b.textContent='We use cookies for marketing analytics. Accept?'; document.body.appendChild(b);
}
