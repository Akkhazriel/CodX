export function employersBtnToggle() {
    document.addEventListener('DOMContentLoaded', function() {
        const employersBtns = document.querySelectorAll('button[data-choose-btn]');

        employersBtns.forEach(item => {
            item.addEventListener('click', function(){
                const active = item.classList.contains('active');

                //  Удаляем класс у всех кроме нажатой
                employersBtns.forEach(btn => {
                    btn.classList.toggle('active', btn === item);
                });
            })
        })
    })
}