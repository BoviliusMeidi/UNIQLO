// Ambil elemen tombol dan input
const decrementButton = document.getElementById("decrement");
const incrementButton = document.getElementById("increment");
const quantityInput = document.getElementById("quantity");

// Tambahkan event listener untuk tombol decrement (-)
decrementButton.addEventListener("click", () => {
    let currentValue = parseInt(quantityInput.value); // Ambil nilai input sebagai angka
    if (currentValue > 0) { // Cegah nilai negatif
        quantityInput.value = currentValue - 1;
    }
});

// Tambahkan event listener untuk tombol increment (+)
incrementButton.addEventListener("click", () => {
    let currentValue = parseInt(quantityInput.value); // Ambil nilai input sebagai angka
    quantityInput.value = currentValue + 1;
});

document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.size-selection button');
    const selectedSizeDisplay = document.getElementById('selected-size');

    buttons.forEach(button => {
        button.addEventListener('click', function() {
            // Hapus kelas 'active' dari semua tombol
            buttons.forEach(btn => btn.classList.remove('active'));
            
            // Tambahkan kelas 'active' ke tombol yang diklik
            this.classList.add('active');
            
            // Perbarui teks ukuran yang dipilih
            const selectedSize = this.getAttribute('data-size');
            selectedSizeDisplay.textContent = `Selected Size: ${selectedSize}`;
        });
    });
});