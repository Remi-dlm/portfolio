document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.navigation');
  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      const open = nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', String(open));
    });
  }

  const filterButtons = [...document.querySelectorAll('.filter-btn[data-filter]')];
  const projectCards = [...document.querySelectorAll('.project-grid .project-card[data-category]')];
  filterButtons.forEach((button) => {
    button.addEventListener('click', (event) => {
      event.preventDefault();
      const selected = button.dataset.filter;
      filterButtons.forEach((item) => {
        const active = item === button;
        item.classList.toggle('active', active);
        item.setAttribute('aria-pressed', String(active));
      });
      projectCards.forEach((card) => {
        const categories = (card.dataset.category || '').trim().split(/\s+/).filter(Boolean);
        card.hidden = selected !== 'all' && !categories.includes(selected);
      });
    });
  });
  document.querySelectorAll('#year').forEach((el) => { el.textContent = new Date().getFullYear(); });
});

const translations = {fr:{home:'Accueil',projects:'Projets',experience:'Expériences',profile:'Profil',contact:'Contact',explore:'Explorer les projets ↗',all:'Tous les projets ↗',contactme:'Me contacter ↗',top:'Retour en haut ↑',allprojects:'Tous les projets',acoustics:'Acoustique',vibrations:'Vibrations',simulation:'Simulation',innovation:'Innovation',viewproject:'Voir le projet ↗'},en:{home:'Home',projects:'Projects',experience:'Experience',profile:'About',contact:'Contact',explore:'Explore projects ↗',all:'All projects ↗',contactme:'Get in touch ↗',top:'Back to top ↑',allprojects:'All projects',acoustics:'Acoustics',vibrations:'Vibrations',simulation:'Simulation',innovation:'Innovation',viewproject:'View project ↗'}};
function setLanguage(lang){document.documentElement.lang=lang;localStorage.setItem('portfolio-lang',lang);document.querySelectorAll('[data-fr][data-en]').forEach(el=>{el.textContent=el.dataset[lang]});document.querySelectorAll('[data-i18n]').forEach(el=>{el.textContent=translations[lang][el.dataset.i18n]||el.textContent});document.querySelectorAll('.lang-switch').forEach(b=>{b.textContent=lang==='fr'?'EN':'FR';b.setAttribute('aria-label',lang==='fr'?'Switch to English':'Passer en français')})}
document.addEventListener('DOMContentLoaded',()=>{document.querySelectorAll('.lang-switch').forEach(b=>b.addEventListener('click',()=>setLanguage(document.documentElement.lang==='fr'?'en':'fr')));setLanguage(localStorage.getItem('portfolio-lang')==='en'?'en':'fr')});
