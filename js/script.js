const Employee = [];
const hadirButton = document.querySelector(".hadir");
const tidakHadirButton = document.querySelector(".tidak-hadir");
const reasonInput = document.querySelector(".reason-input");
const submitReasonButton = document.getElementById("submit-reason");

document.addEventListener('DOMContentLoaded', function() {

document.getElementById('attendance').addEventListener('click', function (event) {
    event.preventDefault(); // Mencegah perubahan URL

    // Menampilkan halaman absensi dan menyembunyikan yang lainnya
    $('.attendance-page').show();
    $('.container-preview').hide();
    // Anda dapat menambahkan logika lain yang dibutuhkan untuk tampilan halaman absensi
});
document.getElementById('menu').addEventListener('click', function (event) {
    event.preventDefault(); // Mencegah perubahan URL

    // Menampilkan halaman absensi dan menyembunyikan yang lainnya
    $('.attendance-page').hide();
    $('.container-preview').show();
    // Anda dapat menambahkan logika lain yang dibutuhkan untuk tampilan halaman absensi
});



// Fungsi untuk menambahkan karyawan baru


     
 // Anda dapat menambahkan logika JavaScript untuk menangani tindakan tombol di sini
   //document.getElementById("edit-button").addEventListener("click", function() {
    // Logika untuk mengedit karyawan
//});

document.getElementById("add-button").addEventListener("click", function() {
    document.getElementById("add-button").addEventListener("click", addEmployee);

    // Logika untuk menambahkan karyawan
    function addEmployee() {
        // Mengambil nilai input dari formulir
        const nama = prompt('Masukkan nama karyawan:');
        const npk = prompt('Masukkan NPK:');
        const bagian = prompt('Masukkan bagian:');
        //const hadir = confirm('Apakah karyawan ini hadir?'); // Menggunakan confirm untuk pilihan "Hadir" atau "Tidak Hadir"
    
        // Membuat objek karyawan baru
        const newEmployee = {
            nama: nama,
            npk: npk,
            bagian: bagian,
          //  hadir: hadir
        };
    
        // Menambahkan karyawan baru ke dalam daftar karyawan
        Employee.push(newEmployee);
    
        // Memanggil fungsi untuk menampilkan ulang data karyawan
        renderEmployees();
    
     
    function renderEmployees() {
        const tableBody = document.querySelector('.table-container tbody');
        tableBody.innerHTML = ''; // Bersihkan isi tabel
    
        Employee.forEach((employee, index) => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${index + 1}</td>
                <td>${employee.nama}</td>
                <td>${employee.npk}</td>
                <td>${employee.bagian}</td>
                <td>
                    <button class="hadir" onclick="setHadir">Hadir</button>
                    <button class="tidak-hadir" onclick="setTidakHadir">Tidak Hadir</button>
                </td>
            `;
            tableBody.appendChild(row);
                // Memanggil fungsi untuk memperbarui tampilan data karyawan setelah perubahan
                renderEmployees();
        });
            
            // Menambahkan event listener ke tombol "Hadir"
            hadirButton.addEventListener("click", function() {
                const currentTime = new Date().toLocaleTimeString();
                alert(`Karyawan Hadir pada jam ${currentTime}`);
            });
            
            tidakHadirButton.addEventListener("click", () => {
                reasonInput.style.display = "block";
            });
            
            submitReasonButton.addEventListener("click", () => {
                const alasan = document.querySelector("input[type='text']").value;
                alert(`Alasan Tidak Hadir: ${alasan}`);
            });
        };
    }
       
});

//document.getElementById("delete-button").addEventListener("click", function() {
    // Logika untuk mengurangi karyawan
//});


});

