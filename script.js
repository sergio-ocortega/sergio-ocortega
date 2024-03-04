let contactButton = document.getElementById('contactButton')
let contactDetails = document.getElementById('contact-details');

contactButton.addEventListener('click', function() {
    if (contactDetails.style.display === 'none') {
        contactDetails.style.display = 'block';
    } else {
        contactDetails.style.display = 'none';
    }
})

