function moviePrices([movie, day]) {
    movie = movie.toLowerCase();
    day = day.toLowerCase();

    if (movie == 'the godfather'){
        switch (day){
            case 'monday': return 12;
            case 'tuesday': return 10;
            case 'wednesday':
            case 'friday':
                return 15;
            case 'thursday': return 12.5;
            case 'saturday': return 25;
            case 'sunday': return 30;
            default: return "error";
        }
    } else if (movie == "schindler's list"){
        switch (day){
            case "monday":
            case "tuesday":
            case "wednesday":
            case "thursday":
            case "friday":
                return 8.5;
            case "saturday":
            case "sunday":
                return 15;
            default: return "error";
        }
    } else if (movie == "casablanca"){
        switch (day){
            case "monday":
            case "tuesday":
            case "wednesday":
            case "thursday":
            case "friday":
                return 8;
            case "saturday":
            case "sunday":
                return 10;
            default: return "error";
        }
    } else if (movie == "the wizard of oz"){
        switch (day){
            case "monday":
            case "tuesday":
            case "wednesday":
            case "thursday":
            case "friday":
                return 10;
            case "saturday":
            case "sunday":
                return 15;
            default: return "error";
        }
    } else {
        return "error";
    }
}