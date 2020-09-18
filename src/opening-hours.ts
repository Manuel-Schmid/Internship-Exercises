import * as data from './data.json'

type OriginalOpeningHour = { open: string; close: string; };
type OriginalOpeningHourSpecial = { date: string; openingHours: OriginalOpeningHour[]; };
type OpeningHour = { open: number; close: number; };
type CurrentDay = { dayNumber?: number; date?: string; openingHours: OriginalOpeningHour[]; }

class OpeningHours {

    getOpeningHours(date: Date): OpeningHour[] {
        const day: number = date.getDay();
        let currentDay: CurrentDay[] | null = null;
        if (this.isSpecial(date)) {
            const specialdate: string = date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate();
            currentDay = data.special.filter(item => item.date === specialdate);
        }
        else {
            currentDay = data.weekly.filter(item => item.dayNumber === day);
        }

        const originalOpeningHours: OriginalOpeningHour[] = currentDay[0].openingHours;

        const openingHours: OpeningHour[] = originalOpeningHours.map(function(originalOpeningHour: OriginalOpeningHour) {
            const open: number[] = originalOpeningHour.open.split(':').map(function(openItem: string): number {
                return Number(openItem);
            });
            const close: number[] = originalOpeningHour.close.split(':').map(function(closeItem: string): number {
                return Number(closeItem);
            });
            
            const openDate: Date = new Date(date.getFullYear(), date.getMonth(), date.getDate(), open[0], open[1], 0, 0);
            const closeDate: Date = new Date(date.getFullYear(), date.getMonth(), date.getDate(), close[0], close[1], 0, 0);
            return {
                open: openDate.getTime(),
                close: closeDate.getTime()
            }
        })
        return openingHours;
    }

    isSpecial (date: Date): boolean {
        const originalOpeningHourSpecials: OriginalOpeningHourSpecial[] = data.special;

        for (let i: number = 0; i < originalOpeningHourSpecials.length; i++) {
            const originalOpeningHourSpecial: OriginalOpeningHourSpecial = originalOpeningHourSpecials[i];
            const specialDayStr: string = originalOpeningHourSpecial.date;
            const specialDayArr: string[] = specialDayStr.split('-');
            const specialDay: Date = new Date(Number(specialDayArr[0]), Number(specialDayArr[1]) - 1, Number(specialDayArr[2]), 0, 0, 0, 0);
            
            if (date.getMonth() === specialDay.getMonth() && date.getDate() === specialDay.getDate()) {
                return true;
            }
        }
        return false;    
    }

    isOpen(date: Date): boolean{
        const time: number = date.getTime();
        const openingHours: OpeningHour[] = this.getOpeningHours(date);
        if (openingHours.length === 0) {
            return false;
        }
        for (let i: number = 0; i < openingHours.length; i++) {
            if(time > openingHours[i].open &&  time < openingHours[i].close) {
                return true;
            }
        }
        return false;   
    }

    getInformation(date: Date): string{
        
        if (this.isOpen(date)) {           
            return "The store is currently open.";
        } 
        const time: number = date.getTime();
        const openingHours: OpeningHour[] = this.getOpeningHours(date);

        for (let i = 0; i < openingHours.length; i++) {
            if (time < openingHours[i].open) {
                const nextTime: number = openingHours[i].open;
                const nextTimeObject: Date = new Date(nextTime);
                const nextOpen: string = nextTimeObject.toLocaleString();
                return "The store is open again on " + nextOpen;
            }
        }
        let nextDay: Date = new Date(date.getFullYear(), date.getMonth(), (date.getDate() + 1), date.getHours(), date.getMinutes(), 0, 0);
        let nextOpeningHour: OpeningHour | null = null;
        let counter: number = 0;
        while (nextOpeningHour === null) {
            if (counter > 5) {
                return "Error: The store is never open";
            }
            const nextDayOpeningHours: OpeningHour[] = this.getOpeningHours(nextDay);
            if (nextDayOpeningHours.length > 0) {
                nextDayOpeningHours.sort(function compare(a: OpeningHour, b: OpeningHour) {
                    if (a.open < b.open){
                        return -1;
                    }
                    if (a.open > b.open){
                        return 1;
                    }
                    return 0;
                });
                nextOpeningHour = nextDayOpeningHours[0];
            }
            nextDay = new Date(nextDay.getFullYear(), nextDay.getMonth(), (nextDay.getDate() + 1), nextDay.getHours(), nextDay.getMinutes(), 0, 0);
            counter++;
        }
        const nextTime: number = nextOpeningHour.open;
        const nextTimeObject: Date = new Date(nextTime);
        const nextOpen: string = nextTimeObject.toLocaleString();
        return "The store is open again on " + nextOpen;
    }
}
export default OpeningHours;