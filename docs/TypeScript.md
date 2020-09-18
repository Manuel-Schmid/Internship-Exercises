# TypeScript Zusammenfassung


## Was ist TypeScript



## Eigene Datentypen (types) erstellen

    type number | string[]   //kann ein wert vom Typ number oder ein String-Array sein.
    type OpeningHour = { open: string; close: string; };   //Erstellt den Datentyp "OpeningHour"
    type Wealth = { isRich?: number; wealth: number; }   //Im Objekt muss "isRich" nicht vorhanden sein, kann aber. "wealth" muss zwingend vorhanden sein.