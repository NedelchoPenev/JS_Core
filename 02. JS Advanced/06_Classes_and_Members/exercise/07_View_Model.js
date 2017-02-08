class Textbox {
    constructor (selector, regex){
        this.selector = selector;
        this._invalidSymbols = regex;
        this._elements = $(selector);

        let that = this;
        $(selector).on('input change', function () {
            that.value = $(this).val();
        });
    }

    get elements(){
        return this._elements;
    }

    get value(){
        return $(this.selector).val();
    }

    set value(value){
        $(this.selector).val(value);
    }

    isValid() {
        return !this._invalidSymbols.test($(this.selector).val());
    }
}
