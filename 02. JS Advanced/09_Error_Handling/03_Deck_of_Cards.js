function printDeckOfCards(cards) {
    class Card {
        constructor(face, suit) {
            this.face = face;
            this.suit = suit;
        }

        get face() {
            return this._face;
        }

        set face(face) {
            const validFaces = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
            if (!validFaces.includes(face)) {
                throw new Error("Invalid card face: " + face);
            }
            this._face = face;
        }

        get suit() {
            return this._suit;
        }

        set suit(value) {
            const validSuits = ['S', 'H', 'D', 'C'];
            if (!validSuits.includes(value)) {
                throw new Error('Invalid card suit' + value)
            }
            this._suit = value;
        }

        toString() {
            let suitToChar = {
                'S': "\u2660",
                'H': "\u2665",
                'D': "\u2666",
                'C': "\u2663",
            };

            return this.face + suitToChar[this.suit];
        }
    }

    let deck = [];
    for (let card of cards) {
        let face = card.substring(0, card.length - 1);
        let suit = card.substr(card.length - 1, 1);
        try {
            deck.push(new Card(face, suit));
        } catch (ex) {
            console.log("Invalid card: " + card);
            return;
        }
    }

    console.log(deck.join(', '));
}

printDeckOfCards(['AS', '10D', 'KH', '2C']);
printDeckOfCards(['5S', '3D', 'QD', '1C']);
