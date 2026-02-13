// ⚠️ Замените дату на вашу!
const startDate = new Date('2022-10-28T00:21:00');

function updateCounter() {
    // Проверяем, существуют ли элементы
    const daysElement = document.getElementById('days');
    const hoursElement = document.getElementById('hours');
    const minutesElement = document.getElementById('minutes');
    
    if (!daysElement || !hoursElement || !minutesElement) {
        console.error('Элементы счётчика не найдены!');
        return;
    }

    const now = new Date();
    const diff = now - startDate;
    
    // Дни
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    daysElement.textContent = days;
    
    // Часы
    const hours = Math.floor(diff / (1000 * 60 * 60));
    hoursElement.textContent = hours;
    
    // Минуты
    const minutes = Math.floor(diff / (1000 * 60));
    minutesElement.textContent = minutes;
}

// Запускаем ТОЛЬКО после полной загрузки страницы
document.addEventListener('DOMContentLoaded', () => {
    console.log('Страница загружена. Запускаю счётчик...');
    updateCounter();
    setInterval(updateCounter, 1000);
});