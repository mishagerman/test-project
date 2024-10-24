const buttons = document.querySelectorAll('.switch-button');
const indicator = document.querySelector('.indicator');

buttons.forEach(button => {
  button.addEventListener('click', () => {
    buttons.forEach(btn => btn.classList.remove('active'));

    button.classList.add('active');

    const rect = button.getBoundingClientRect();
    
    indicator.style.transform = `translateX(${rect.left + rect.width / 2 - 10}px)`; 
  });
});
const circles = document.querySelectorAll('.circle');

circles.forEach(circle => {
    circle.addEventListener('click', () => {
        circles.forEach(c => c.classList.remove('active'));
        circle.classList.add('active'); 
    });
});

document.querySelector('.shareConteiner').addEventListener('click', function() {
    document.getElementById('sharePopup').style.display = 'block';
});

document.getElementById('closePopup').addEventListener('click', function() {
    document.getElementById('sharePopup').style.display = 'none';
});