function captureTheNumber(input) {
    let text = input.join(' ');
    let numbers = text.match(/\d+/g);
    console.log(numbers.join(' '));
}
captureTheNumber([
    'The300',
    'What is that?',
    'I think it’s the 3rd movie.',
    'Lets watch it at 22:45'

])