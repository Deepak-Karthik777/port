(() => {
  document.querySelectorAll('#year').forEach(e => e.textContent = new Date().getFullYear());
  const toggle=document.querySelector('.menu-toggle'), nav=document.querySelector('#nav');
  if(toggle && nav){toggle.addEventListener('click',()=>{const open=toggle.getAttribute('aria-expanded')==='true';toggle.setAttribute('aria-expanded',String(!open));nav.classList.toggle('open',!open);toggle.setAttribute('aria-label',open?'Open navigation':'Close navigation');});}
  const form=document.querySelector('#contact-form'), status=document.querySelector('#form-status');
  if(form && status){form.addEventListener('submit',e=>{e.preventDefault();if(!form.checkValidity()){status.textContent='Please complete all required fields correctly.';form.querySelector(':invalid')?.focus();return;}status.textContent='Thanks! Your message passed validation. Connect this form to your preferred email/backend service to receive submissions.';form.reset();});}
})();