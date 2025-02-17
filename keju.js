document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

document.getElementById('queryForm').addEventListener('submit', function (e) {
    e.preventDefault(); 
    const formData = new FormData(this);
    fetch('submit_query.php', {
        method: 'POST',
        body: formData
    })
    .then(response => response.text())
    .then(data => {
        alert(data);
        document.getElementById('queryForm').reset(); 
    })
    .catch(error => {
        console.error('Error:', error);
    });
});