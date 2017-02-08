function multiplication([text]) {
    text = text.replace(/(-?\d+)\s*\*\s*(-?\d+(\.\d+)?)/g, (match, num, offset) => Number(num) * Number(offset));
    console.log(text);
}