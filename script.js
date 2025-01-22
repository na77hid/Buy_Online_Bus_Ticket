// Total Seats and Booking State
const totalSeats = 40;
let bookedSeats = [];

// Generate Seats
const seatContainer = document.querySelector('.seat-container');
for (let i = 1; i <= totalSeats; i++) {
    const seat = document.createElement('div');
    seat.classList.add('seat');
    seat.textContent = i;
    seat.dataset.seatNumber = i;

    // Check if seat is already booked
    if (bookedSeats.includes(i)) {
        seat.classList.add('booked');
    }

    seat.addEventListener('click', () => {
        if (!seat.classList.contains('booked')) {
            seat.classList.toggle('selected');
        }
    });

    seatContainer.appendChild(seat);
}

// Book Now Button
const bookNowBtn = document.getElementById('book-now');
const status = document.getElementById('status');

bookNowBtn.addEventListener('click', () => {
    const selectedSeats = document.querySelectorAll('.seat.selected');
    if (selectedSeats.length === 0) {
        status.textContent = 'দুঃখিত, আপনি কোন সিট নির্বাচন করেননি।';
        return;
    }

    selectedSeats.forEach((seat) => {
        seat.classList.remove('selected');
        seat.classList.add('booked');
        bookedSeats.push(parseInt(seat.dataset.seatNumber));
    });

    status.textContent = 'সিট সফলভাবে বুক করা হয়েছে!';
});
