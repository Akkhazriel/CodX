export function collectionLoad() {
    document.addEventListener("DOMContentLoaded", function() {
        let collectionLoadBtn = document.querySelectorAll('button[data-collection-btn]');
        function collectionItem(imgPath, titleText) {
            this.img = imgPath;
            this.title = titleText;
        }

        // Функция для добавления элементов галереи
        function addCollectionItems() {
            let collectionList = document.querySelector('div[data-collectionList]');
            // Создаем новые элементы и добавляем их в галерею
            let collectionItem4 = new collectionItem('./img/collection/IMAGE.png', 'Collectibles');
            let collectionItem5 = new collectionItem('./img/collection/IMAGE-2.png', 'Art');
            let collectionItem6 = new collectionItem('./img/collection/IMAGE-3.png', 'Photography');

            let collectionItemHTML4 = createGalleryItemHTML(collectionItem4);
            let collectionItemHTML5 = createGalleryItemHTML(collectionItem5);
            let collectionItemHTML6 = createGalleryItemHTML(collectionItem6);

            collectionList.appendChild(collectionItemHTML4);
            collectionList.appendChild(collectionItemHTML5);
            collectionList.appendChild(collectionItemHTML6);
        };

        function createGalleryItemHTML(item) {
            let listItem = document.createElement('div');
            listItem.className = 'list-item';

            let listItemImg = document.createElement('div');
            listItemImg.className = 'item-img'
            listItem.appendChild(listItemImg);

            let img = document.createElement('img');
            img.src = item.img;
            listItemImg.appendChild(img);

            let title = document.createElement('h3');
            title.className = 'item-title';
            title.textContent = item.title;
            listItem.appendChild(title);

            return listItem;
        }

        //Добавляем обработчик события на кнопку
        collectionLoadBtn.forEach(function(btn) {
            btn.addEventListener('click', addCollectionItems);
        })
    })
}