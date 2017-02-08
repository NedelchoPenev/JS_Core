(function formCreation() {
    class Textbox {
        constructor(selector, regex) {
            this.selector = selector;
            this._invalidSymbols = regex;
            this._elements = $(selector);

            let that = this;
            $(selector).on('input change', function () {
                that.value = $(this).val();
            });
        }

        get elements() {
            return this._elements;
        }

        get value() {
            return $(this.selector).val();
        }

        set value(value) {
            $(this.selector).val(value);
        }

        isValid() {
            return !this._invalidSymbols.test($(this.selector).val());
        }
    }

    class Form {
        constructor(...textBoxes) {

            for (let textBox of textBoxes) {
                if (!textBox instanceof Textbox) {
                    throw new Error('Argument is not an instance of TextBox class');
                }
            }

            this._element = $('<div>').addClass('form');
            this._textboxes = textBoxes;
            for (let textBox of textBoxes) {
                this._element.append($(textBox.selector));
            }
        }

        submit() {
            let formValidity = true;
            for (let textBox of this._textboxes){
                if (textBox.isValid()){
                    $(textBox.selector).css('border', '2px solid green');
                } else {
                    $(textBox.selector).css('border', '2px solid red');
                    formValidity = false;
                }
            }

            return formValidity;
        }

        attach(selector) {
            $(selector).append(this._element);
        }


    }
    return {Textbox: Textbox, Form: Form}
})();