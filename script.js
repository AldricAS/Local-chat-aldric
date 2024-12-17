let friends = []; // Menyimpan daftar teman
let username = localStorage.getItem('username') || 'Pengguna'; // Nama pengguna default

// Fungsi untuk mengirim pesan
function sendMessage() {
    const messageInput = document.getElementById('messageInput');
    const messageText = messageInput.value.trim();

    if (messageText !== '') {
        const messagesContainer = document.getElementById('messages');
        const messageElement = document.createElement('div');
        messageElement.classList.add('message');
        messageElement.innerText = username + ': ' + messageText;
        messagesContainer.appendChild(messageElement);
        messageInput.value = '';
        messagesContainer.scrollTop = messagesContainer.scrollHeight; // Scroll ke bawah otomatis
    }
}

// Menampilkan menu pengaturan
function toggleSettings() {
    const settingsMenu = document.getElementById('settingsMenu');
    settingsMenu.style.display = settingsMenu.style.display === 'none' ? 'block' : 'none';
}

// Menambahkan teman baru menggunakan token
function addFriend() {
    const tokenInput = document.getElementById('token');
    const token = tokenInput.value.trim();

    if (token !== '') {
        friends.push(token);
        alert('Teman berhasil ditambahkan dengan token: ' + token);
        tokenInput.value = '';
    }
}

// Menyimpan nama pengguna jika diubah
const usernameInput = document.getElementById('username');
if (usernameInput) {
    usernameInput.value = username;
    usernameInput.addEventListener('input', (event) => {
        username = event.target.value;
        localStorage.setItem('username', username);
    });
}
