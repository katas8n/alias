import './style.css';

const invisible = document.getElementById('invisible');
const visible = document.getElementById('visible');

interface ICard {
    image?: string;
    text: string;
    isVisible?: boolean;
}

class Card {
    constructor({ image, text, isVisible }: ICard) {
        const card = document.createElement('div');

        // I see DRY here

        const img = document.createElement('img');
        img.src = '../public/back-part.png';
        img.className = 'img';

        // I see DRY here
        const textC = document.createElement('p');
        textC.className = !isVisible ? 'text' : 'text--active';
        textC.textContent = text;

        // I see DRY here
        card.append(textC);
        card.append(img);

        card.className = isVisible ? 'card--active' : 'card';
        // card.textContent = text;

        const flip = e => {
            const parentCard = e.target.parentElement;

            [...parentCard.children].forEach(el => {
                console.log(el);
            });

            img.src = image;
            textC.className = 'text--active';

            visible?.append(parentCard);

            // card.removeEventListener('click', flip);
        };

        card.addEventListener('click', flip);

        return card;
    }
}

const card = new Card({ text: 'ACE', image: '../public/front-part.png' });
console.log(card);
invisible?.append(card);
