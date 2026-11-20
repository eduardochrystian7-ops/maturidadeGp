const laboratories = [
  { id: 'lab01', name: 'Laboratório 01 — Informática Aplicada', capacity: 30, available: true, location: 'Bloco B · Sala 104', resources: '30 computadores · Projetor multimídia' },
  { id: 'lab02', name: 'Laboratório 02 — Redes e Sistemas Distribuídos', capacity: 40, available: false, location: 'Bloco C · Sala 201', resources: '40 estações · Racks de rede' },
  { id: 'lab03', name: 'Laboratório 03 — Prototipagem e Hardware', capacity: 25, available: true, location: 'Bloco A · Sala 102', resources: 'Bancadas técnicas · Osciloscópios' }
];

const labCards = document.querySelector('#labCards');
const labSelect = document.querySelector('#laboratory');
const form = document.querySelector('#reservationForm');
const validation = document.querySelector('#validationMessage');
const body = document.querySelector('#reservationsBody');
const count = document.querySelector('#reservationCount');
const activeMetric = document.querySelector('#activeMetric');
const tableBadge = document.querySelector('#tableBadge');
const toast = document.querySelector('#toast');
let reservations = [];

function renderLabs() {
  labCards.innerHTML = laboratories.map(lab => `
    <article class="lab-card ${lab.available ? '' : 'unavailable'}">
      <div class="lab-top"><span class="lab-code">${lab.id.toUpperCase().replace('LAB', 'LAB-')}</span><span class="status ${lab.available ? 'available' : 'unavailable'}">● ${lab.available ? 'DISPONÍVEL' : 'INDISPONÍVEL'}</span></div>
      <h3>${lab.name}</h3><p class="location">▦ ${lab.location}</p>
      <div class="capacity">♙ Capacidade: ${lab.capacity} alunos</div>
      <p class="lab-detail">${lab.available ? lab.resources : 'Em intervenção técnica. Previsão de retorno: 48h.'}</p>
      <button class="button ${lab.available ? 'primary select-lab' : 'disabled'}" ${lab.available ? `data-id="${lab.id}"` : 'disabled'}>${lab.available ? 'Reservar este laboratório' : 'Indisponível para reserva'}</button>
    </article>`).join('');
  labSelect.innerHTML = '<option value="">Selecione um laboratório</option>' + laboratories.map(lab => `<option value="${lab.id}" ${lab.available ? '' : 'disabled'}>${lab.name} ${lab.available ? `(${lab.capacity} vagas)` : '(indisponível)'}</option>`).join('');
  document.querySelectorAll('.select-lab').forEach(button => button.addEventListener('click', () => {
    labSelect.value = button.dataset.id;
    document.querySelector('#nova-reserva').scrollIntoView({ behavior: 'smooth', block: 'start' });
    labSelect.focus();
  }));
}

function showValidation(message) { validation.textContent = message; validation.hidden = false; }
function hideValidation() { validation.hidden = true; }
function showToast(message) { toast.textContent = message; toast.classList.add('show'); setTimeout(() => toast.classList.remove('show'), 4000); }

function renderReservations() {
  const total = reservations.length;
  count.textContent = total;
  activeMetric.textContent = String(total).padStart(2, '0');
  tableBadge.textContent = `${total} ${total === 1 ? 'reserva' : 'reservas'}`;
  body.innerHTML = total ? reservations.map(item => `<tr><td class="row-lab">${item.lab.name}<br><small>${item.lab.capacity} vagas · ${item.lab.location}</small></td><td>${new Date(item.date + 'T12:00:00').toLocaleDateString('pt-BR')}</td><td>${item.time}</td><td>${item.purpose}</td><td><span class="success">● Confirmada</span></td></tr>`).join('') : '<tr class="empty"><td colspan="5">Nenhuma reserva realizada ainda. Preencha o formulário acima para começar.</td></tr>';
}

form.addEventListener('submit', event => {
  event.preventDefault();
  const lab = laboratories.find(item => item.id === labSelect.value);
  const purpose = document.querySelector('#purpose').value;
  const date = document.querySelector('#date').value;
  const time = document.querySelector('#time').value;
  if (!lab || !purpose || !date || !time) return showValidation('Preencha todos os campos obrigatórios para confirmar a reserva.');
  if (!lab.available) return showValidation('Este laboratório está indisponível e não pode ser reservado.');
  if (purpose === 'Aula regular' && lab.capacity < 30) return showValidation(`${lab.name} possui ${lab.capacity} vagas. Aulas regulares exigem capacidade mínima de 30 alunos.`);
  hideValidation();
  reservations.unshift({ lab, purpose, date, time });
  renderReservations();
  form.reset();
  showToast('Reserva confirmada com sucesso! O comprovante está em Minhas reservas.');
  document.querySelector('#minhas-reservas').scrollIntoView({ behavior: 'smooth', block: 'start' });
});

document.querySelector('.mobile-menu').addEventListener('click', () => document.querySelector('.sidebar').classList.toggle('open'));
document.querySelectorAll('.nav-link').forEach(link => link.addEventListener('click', () => document.querySelector('.sidebar').classList.remove('open')));
renderLabs();
renderReservations();
