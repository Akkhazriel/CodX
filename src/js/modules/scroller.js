export function scroller() {
    document.addEventListener('DOMContentLoaded', function() {
        const scrollers = document.querySelectorAll(".scroller__container");

        if(!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
            addAnimation();
        }

        function addAnimation() {
            scrollers.forEach(scroller => {
                scroller.setAttribute('data-animated', true);

                const scrollerInner = document.querySelector('.scroller__inner');
                const scrollerContent = Array.from(scrollerInner.children);

                scrollerContent.forEach(item => {
                    const duplicatedItem = item.cloneNode(true);
                    duplicatedItem.setAttribute('aria-hidden', true);
                    scrollerInner.appendChild(duplicatedItem);
                });
            });
        }
    })
}