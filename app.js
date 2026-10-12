const roles = ['Žaliosios energetikos ekspertas', 'Geodezijos ir matavimų specialistė', 'Automatikos ir robotikos tyrėjas', 'Pramoninio dizaino inžinierė', 'Mokslo ir verslo bendradarbiavimo ekspertas', 'Tvarių technologijų tyrėja', 'Inžinerinių studijų dėstytojas', 'Inovacijų ir projektų vadovė', 'Gamybos technologijų specialistas', 'Inžinerijos studentė'];
document.querySelector('#speakers').innerHTML = roles.map((role, i) => `<article class="speaker"><img src="https://i.pravatar.cc/160?img=${[12,47,13,44,14,49,33,45,53,48][i]}" alt="Iliustracinis dalyvio portretas" loading="lazy" width="76" height="76"><div><h3>Pranešėjas ${String(i + 1).padStart(2, '0')}</h3><p>${role}</p></div></article>`).join('');
const photos = ['photo-1540575467063-178a50c2df87', 'photo-1511578314322-379afb476865', 'photo-1511795409834-ef04bbd61622'];
const captions = ['Konferencijos salė', 'Susitikimai ir pokalbiai', 'Renginio erdvė'];
document.querySelector('#gallery').innerHTML = photos.map((photo, i) => `<button aria-label="Atverti nuotrauką: ${captions[i]}" data-photo="${i}"><img src="https://images.unsplash.com/${photo}?auto=format&fit=crop&w=900&q=85" alt="${captions[i]} — iliustracinė nuotrauka" loading="lazy" width="900" height="600"></button>`).join('');
const toggle = document.querySelector('.menu-toggle');
const menu = document.querySelector('#mobile-menu');
toggle.addEventListener('click', () => {const open = toggle.getAttribute('aria-expanded') !== 'true'; toggle.setAttribute('aria-expanded', String(open)); menu.hidden = !open;});
menu.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {menu.hidden = true; toggle.setAttribute('aria-expanded', 'false');}));
document.addEventListener('keydown', e => {if(e.key === 'Escape' && !menu.hidden) {menu.hidden = true; toggle.setAttribute('aria-expanded','false'); toggle.focus();}});
const contact = document.querySelector('#contact-dialog');
document.querySelector('#contact-button').addEventListener('click', () => contact.showModal());
document.querySelector('.hero-registration').addEventListener('click', () => document.querySelector('#registration-dialog').showModal());
const lightbox = document.querySelector('#lightbox');
document.querySelector('#gallery').addEventListener('click', e => {const button = e.target.closest('[data-photo]'); if (!button) return; const i = Number(button.dataset.photo); const img = lightbox.querySelector('img'); img.src = `https://images.unsplash.com/${photos[i]}?auto=format&fit=crop&w=1600&q=90`; img.alt = `${captions[i]} — iliustracinė nuotrauka`; lightbox.showModal();});
document.querySelectorAll('dialog').forEach(dialog => {dialog.querySelector('.dialog-close').addEventListener('click', () => dialog.close()); dialog.addEventListener('click', e => {if(e.target === dialog){const r = dialog.getBoundingClientRect(); if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom) dialog.close();}});});
const observer = new IntersectionObserver(entries => {entries.forEach(entry => {if(entry.isIntersecting){document.querySelectorAll('.nav a, .mobile-menu a').forEach(a => a.classList.toggle('active', a.hash === `#${entry.target.id}`));}});}, {rootMargin:'-10% 0px -65% 0px'});
document.querySelectorAll('main section[id]').forEach(section => observer.observe(section));

