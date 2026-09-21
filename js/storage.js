/* ============================================================
   STORAGE — semua akses localStorage (data layer / "backend" lokal)
   ============================================================ */
const STORE_KEYS = { users: 'taskify_users', session: 'taskify_session', tasks: 'taskify_tasks' };
const DEMO_ACCOUNT = { name: 'Demo User', email: 'demo@taskify.com', password: 'taskify123' };

const CATEGORIES = [
  { id: 'work',     label: 'Work',     color: '#2E86D8' },
  { id: 'study',    label: 'Study',    color: '#7C5CE0' },
  { id: 'personal', label: 'Personal', color: '#1FB6A6' },
  { id: 'creative', label: 'Creative', color: '#E4694F' },
  { id: 'health',   label: 'Health',   color: '#33A867' },
];

/* ---------------- storage helpers: user & session ---------------- */
function loadUsers(){ return JSON.parse(localStorage.getItem(STORE_KEYS.users) || '[]'); }
function saveUsers(u){ localStorage.setItem(STORE_KEYS.users, JSON.stringify(u)); }
function loadSession(){ return JSON.parse(localStorage.getItem(STORE_KEYS.session) || 'null'); }
function saveSession(s){ localStorage.setItem(STORE_KEYS.session, JSON.stringify(s)); }
function clearSession(){ localStorage.removeItem(STORE_KEYS.session); }

function uid(){ return Math.random().toString(36).slice(2,10) + Date.now().toString(36); }

function ensureDemoUser(){
  const users = loadUsers();
  if (!users.some(u => u.email === DEMO_ACCOUNT.email)) {
    users.push({ id: uid(), ...DEMO_ACCOUNT });
    saveUsers(users);
  }
}