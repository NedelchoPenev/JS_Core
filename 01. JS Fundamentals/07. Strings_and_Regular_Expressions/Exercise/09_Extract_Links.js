function extractLinks(input) {
    let pattern = /www\.[A-Za-z0-9\-]+\.[a-z]+(?:\.[a-z]+)/g;
    let text = input.join(' ');
    let matches = text.match(pattern);
    if (matches != undefined) {
        console.log(matches.join("\n"));
    }
}
extractLinks(['Join WebStars now for free, at www.web-stars.com',
'You can also support our partners:',
   ' Internet - www.internet.com.org.net.bg',
'WebSpiders - www.webspiders101.com',
'Sentinel - www.sentinel.-ko'
])