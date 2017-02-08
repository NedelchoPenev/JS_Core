function cardDeckBuilder(selector) {
    return {
        addCard: function addCard(face, suit) {
            let suits = '';
            switch (suit){
                case 'C':
                    suits = '\u2663';
                    break;
                case 'D':
                    suits = '\u2666';
                    break;
                case 'H':
                    suits = '\u2665';
                    break;
                case 'S':
                    suits = '\u2660';
                    break;
            }
            let cardToAppend = face + suits;
            let card = $('<div>').addClass('card').text(cardToAppend)
                .click(function () {
                $('.card').each(function() {
                    $(this).prependTo(this.parentNode);
                });
            });

            $(selector).append(card)
        }
    }
}
