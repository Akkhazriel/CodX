export function nftLoad() {
    document.addEventListener("DOMContentLoaded", function() {
        let nftLoadBtn = document.querySelectorAll('button[data-nft-btn]');
        let butonView = document.querySelector('button[data-btn-view]');
        let butonLock = document.querySelector('button[data-btn-lock]');

        function nftItem(imgPath, titleText, number, buttonView, buttonLock) {
            this.img = imgPath;
            this.title = titleText;
            this.number = number;
            this.number = number;
            this.buttonView = buttonView;
            this.buttonLock = buttonLock;
        }

        // Функция для добавления элементов галереи
        function addNftItems() {
            let nftList = document.querySelector('div[data-nftList]');

            // Создаем новые элементы и добавляем их в галерею
            let nftItem4 = new nftItem('./img/nft/IMAGE-2.png', 'White Bear', '#54385', butonView, butonLock);
            let nftItem5 = new nftItem('./img/nft/IMAGE-1.png', 'Happy Luca', '#54395', butonView, butonLock);
            let nftItem6 = new nftItem('./img/nft/IMAGE.png', 'Dodo', '#54376', butonView, butonLock);

            let nftItemHTML4 = createNftItemHTML(nftItem4);
            let nftItemHTML5 = createNftItemHTML(nftItem5);
            let nftItemHTML6 = createNftItemHTML(nftItem6);

            nftList.appendChild(nftItemHTML4);
            nftList.appendChild(nftItemHTML5);
            nftList.appendChild(nftItemHTML6);
        };

        function createNftItemHTML(item) {
            let listItem = document.createElement('div');
            listItem.className = 'list-item';

            let listItemImg = document.createElement('div');
            listItemImg.className = 'item-img'
            listItem.appendChild(listItemImg);

            let img = document.createElement('img');
            img.src = item.img;
            listItemImg.appendChild(img);

            let listContent = document.createElement('div');
            listContent.className = 'item-content';
            listItem.appendChild(listContent);

            let contentName = document.createElement('div');
            contentName.className = 'content-name';
            contentName.textContent = item.title;
            listContent.appendChild(contentName);

            let spanTitle = document.createElement('span');
            spanTitle.textContent = item.number;
            contentName.appendChild(spanTitle);

            let contentBtns = document.createElement('div');
            contentBtns.className = 'content-btns';
            listContent.appendChild(contentBtns);

            let clonedButtonView = butonView.cloneNode(true);
            let clonedButtonLock = butonLock.cloneNode(true);

            contentBtns.appendChild(clonedButtonView);
            contentBtns.appendChild(clonedButtonLock);

            return listItem;
        }

        //Добавляем обработчик события на кнопку
        nftLoadBtn.forEach(function(btn) {
            btn.addEventListener('click', addNftItems);
        })
    })
}