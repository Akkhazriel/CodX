export let select = function() {
    let faqHeader = document.querySelectorAll('.faq-header');
    // let faqItem = document.querySelectorAll('.faq__item');

    faqHeader.forEach(item => {
        item.addEventListener('click', selectToggle);
    })

    function selectToggle() {
        this.parentElement.classList.toggle('active');
    }
}