document.getElementById('messageForm').addEventListener('submit', function(event) {
    event.preventDefault();  // Mencegah pengiriman formulir secara default

    // Mendapatkan nilai dari input
    const name = document.getElementById('name').value;
    const birthdate = document.getElementById('birthdate').value;
    const gender = document.querySelector('input[name="gender"]:checked').value;
    const message = document.getElementById('message').value;
    const currentTime = new Date().toString();

    // Menampilkan output
    const outputDiv = document.getElementById('output');
    outputDiv.innerHTML = `
        <h3>Current time: ${currentTime}</h3>
        <p><strong>Nama:</strong> ${name}</p>
        <p><strong>Tanggal Lahir:</strong> ${birthdate}</p>
        <p><strong>Jenis Kelamin:</strong> ${gender}</p>
        <p><strong>Pesan:</strong> ${message}</p>
    `;
});