function tickets(ticketsArr, sortCriteria) {
    class Ticket{
        constructor(destination, price, status){
            this.destination = destination;
            this.price = price;
            this.status = status;
        }
    }

    let ticket = [];
    for (let line of ticketsArr) {
        let [destination, price, status] = line.split('|');
        price = Number(price);
        ticket.push(new Ticket(destination, price, status));
    }

    switch (sortCriteria){
        case 'destination':
            ticket = ticket.sort((a, b) => a.destination.localeCompare(b.destination));
            break;
        case 'price':
            ticket = ticket.sort((a, b) => a.price - b.price);
            break;
        case 'status':
            ticket = ticket.sort((a, b) => a.status.localeCompare(b.status));
            break;
    }

    return ticket;
}

console.log(tickets(['Philadelphia|94.20|available',
        'New York City|95.99|available',
        'New York City|95.99|sold',
        'Boston|126.20|departed'],
    'destination'
));