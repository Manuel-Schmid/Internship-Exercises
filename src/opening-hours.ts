import * as data from './data.json'
class OpeningHours{

    getOpeningHours(date: Date){
        let day = date.getDay()
        let currentDay: any = null;
        if (this.isSpecial(date)) {
            let specialdate = date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate();
            currentDay = data.special.filter(item => item.date === specialdate);
        }
        else {
            currentDay = data.weekly.filter(item => item.dayNumber === day);
        }
        // "8:00" muss in openH gespeichert werden.
        let openH: any = currentDay[0].openingHours;

        let open = openH.map(function(item: any) {
            let open = item.open.split(':').map(function(openItem: any){
                return parseInt(openItem);
            });
            let close = item.close.split(':').map(function(closeItem: any){
                return parseInt(closeItem);
            });
            
            let openDate = new Date(date.getFullYear(), date.getMonth(), date.getDate(), open[0], open[1], 0, 0);
            let closeDate = new Date(date.getFullYear(), date.getMonth(), date.getDate(), close[0], close[1], 0, 0);
            return {
                open: openDate.getTime(),
                close: closeDate.getTime()
            }
        })
        return open;
    }

    isSpecial (date: Date) {

        let special = data.special;

        for (let i = 0; i < special.length; i++){
            let specialDayStr: any = special[i].date;
            let specialDayArr = specialDayStr.split('-');
            let specialDay = new Date(specialDayArr[0], specialDayArr[1] - 1, specialDayArr[2], 0, 0, 0, 0);

            if (date.getMonth() === specialDay.getMonth() && date.getDate() === specialDay.getDate()) {
                return true;
            }
        }
        return false;    
    }

    isOpen(date: Date){
         
        let time = date.getTime();
        let openingHours = this.getOpeningHours(date);
        if (openingHours.length === 0) {
            return false;
        }
        for (let i = 0; i < openingHours.length; i++) {
            if(time > openingHours[i].open &&  time < openingHours[i].close) {
                return true;
            }
        }
        return false;   
    }

    getInformation(date: Date){
        
        if (this.isOpen(date)) {           
            return "The store is currently open.";
        } 
        let time = date.getTime();
        let openingHours = this.getOpeningHours(date);

        for (let i = 0; i < openingHours.length; i++){ // ?
            if (time < openingHours[i].open) {
                let nextTime = openingHours[i].open;
                let nextTimeObject = new Date(nextTime);
                let nextOpen = nextTimeObject.toLocaleString();
                return "The store is open again on " + nextOpen;
            }
        }                  
        let nextDay = new Date(date.getFullYear(), date.getMonth(), (date.getDate() + 1), date.getHours(), date.getMinutes(), 0, 0);
        let nextOpeningHour = null;
        let counter = 0;
        while (nextOpeningHour === null) {
            if (counter > 5) {
                return "Error: The store is never open";
            }
            let nextDayOpeningHours = this.getOpeningHours(nextDay);
            if (nextDayOpeningHours.length > 0) {
                nextDayOpeningHours.sort(function compare(a: any, b: any){
                    if (a.open < b.open){
                        return -1;
                    }
                    if (a.open > b.open){
                        return 1;
                    }
                    return 0;
                })
                nextOpeningHour = nextDayOpeningHours[0];
            }
            nextDay = new Date(nextDay.getFullYear(), nextDay.getMonth(), (nextDay.getDate() + 1), nextDay.getHours(), nextDay.getMinutes(), 0, 0);
            counter++;
        }
        let nextTime = nextOpeningHour.open;
        let nextTimeObject = new Date(nextTime);
        let nextOpen = nextTimeObject.toLocaleString();
        return "The store is open again on " + nextOpen;
    }
}
export default OpeningHours;