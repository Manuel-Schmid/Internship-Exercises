# Angular Zusammenfassung

## Was ist Angular

Angular ist ein TypeScript-basiertes Front-End-Webapplikationsframework. Es wird von verschiedenen Unternehmen, angeführt von Google entwickelt und als Open-Source-Software publiziert. Es zielt auf die Entwicklung von WebAnwendungen und legt Wert auf Struktur und Qualität. Die Vorgängerversion AngularJS war das erste Framework welches im JavaScript-Bereich auch für die Entwicklung grosser Enterprise Anwendungen geeignet war. Die neueste Version trägt nur noch den Namen Angular und ermöglicht effiziente und wartbare Softwareentwicklung auf basis von TypeScript.

## Angular CLI

    npm install -g @angular/cli     //installs the angular CLi using npm

    ng new my-app      // create new app
    ng g / ng generate // generate components, routes, services and pipes
    ng s / ng serve    // run application (localhost:4200)
    ng t / ng test     // run tests

    ng new [projektname] [options]
    ng generate [type] [name]


## Store / State

NgRx stellt eine Möglichkeit zu verfügung, Daten einer Angular App als eine einzige Quelle festzulegen. NgRx interagiert mit einem Daten Store. Dieser Daten Store verbindet die Components und Services und vereinfacht den gesammten Prozess des Datenmanagements in der Angular App. Am sinnvollsten ist die Verwendung eines Stores wenn man eine Applikation mit vielen Benutzerinteraktionen und verschiedenen Datenquellen hat.
<br><br>

![NGRX-Store](https://ngrx.io/generated/images/guide/store/state-management-lifecycle.png)

### Was sind Actions

Actions drücken *einzigartige* events aus, die in der Applikation vorkommen. Beispiele: Benutzerinteraktion mit der Seite, externe Interaktion durch Netzwerkanfragen und Interaktion mit der API werden mit actions beschrieben.

Codebeispiel:

    interface Action {
    type: '[Auth API] Login Success'
    }

API:

    {
    type: '[Login Page] Login',
    username: string;
    password: string;
    }


### Was sind Reducer

Reducer sind für die tranitions vom einem state in der Applikation in den nächsten zuständig. Reducer functions behandeln diese transitions indem sie basierend auf dem Aktionstyp bestimmen, welche Aktionen behandelt werden sollen. Reducer functions produzieren den gleichen Output für einen bestimmten Input. Jede Funktion verwendet die zuletzt gesendete Action und den momentanen State und bestimmt, ob ein new modifizierter state oder der original state zurückgegeben werden soll. 

Codebeispiel:<br>
scoreboard-page.**actions**.ts

    import { createAction, props } from '@ngrx/store';

    export const homeScore = createAction('[Scoreboard Page] Home Score');
    export const awayScore = createAction('[Scoreboard Page] Away Score');
    export const resetScore = createAction('[Scoreboard Page] Score Reset');
    export const setScores = createAction('[Scoreboard Page] Set Scores', props<{game: Game}>());
scoreboard.**reducer**.ts

    const scoreboardReducer = createReducer(
    initialState,
    on(ScoreboardPageActions.homeScore, state => ({ ...state, home: state.home + 1 })),
    on(ScoreboardPageActions.awayScore, state => ({ ...state, away: state.away + 1 })),
    on(ScoreboardPageActions.resetScore, state => ({ home: 0, away: 0 })),
    on(ScoreboardPageActions.setScores, (state, { game }) => ({ home: game.home, away: game.away }))
    );

    export function reducer(state: State | undefined, action: Action) {
    return scoreboardReducer(state, action);
    }

### Was sind Selektoren

Selektoren in NgRx werden dazu verwendet, bestimmte Schichten des store states abzurufen. 

Codebeispiel:

    import { createSelector } from '@ngrx/store';

    export interface FeatureState {
    counter: number;
    }

    export interface AppState {
    feature: FeatureState;
    }

    export const selectFeature = (state: AppState) => state.feature;

    export const selectFeatureCount = createSelector(
    selectFeature,
    (state: FeatureState) => state.counter
    );


## Script-file

    // imports
    import { xxx } from 'xxx';
    import * as fromGallery from './gallery.reducer'; // import everything from ./gallery.reducer' as fromGallery so you can access it with: fromGallery.xxx

    @Component({
    selector: 'app-news-item-container', //selector
    templateUrl: './news-item-container.component.html', //link to html-file
    styleUrls: ['./news-item-container.component.scss'] //link to scss file
    });

    export class MyClass implements OnInit { //export own class
        
        // variables
        trustedUrl: SafeUrl

        // functions
        constructor() {
        }
        ngOnInit(): void {
        }
    }


## HTML-file

### container-component

    <app-news-detail-item [news]="news$ | async"></app-news-detail-item> // übergibt das observable "news$" an news

### component

    // the view gets created here (no general syntax)

## (S)CSS-file

    // design for the view

    // example chained styles

    .event-info {
        margin: auto; 
        background-color: white;

        &-title { // class: event-info-title
            font-weight: bold;
            color: darkblue;
        }
        &-text { // class: event-info-text
            font-weight: normal
            color: black;
        }
    }

## Was ist ein Component?

Ein component kontroliert einen Bereich des Screens der *view* genannt wird. Während seinem Lifecycle kann der Component kreiert, geupdatet oder zerstört werden durch sogenannte *lyfecycle hooks*, wie zum Beispiel ngOnInit();

Lifecycle hooks:

    ngOnInit - Komponente wird Initialisiert (nach erstem ngOnChanges → Eigenschaften initialisiert)
    ngOnDestroy - bevor Komponente zerstört wird
    ngDoCheck - eigene Änderungserkennung
    ngOnChanges(changes) - Änderungen in Bindings wurden erkannt
    ngAfterContentInit - Inhalt wurde initialisiert
    ngAfterContentChecked - jedes Mal, wenn Inhalt überprüft wurde
    ngAfterViewInit - Views wurden initialisiert
    ngAfterViewChecked - jedes Mal, wenn Views überprüft wurden

## Smart Component vs Dumb Component

Dumb components haben keine langlebigen states. Sie haben keinen Zugriff zu services und speichern keine Daten.
Sie sind für die visuelle Präsentation zuständig.
Als Beispiel gibt es dumb components, die einfach nur Daten empfangen und sie zum HTML template binden.

Smart components sind die Komponenten, die states, services oder sonstige Programmlogik beinhalten. Sie fokusieren
sich nicht auf die Präsentation, sondern auf die Programmlogik die im component geschieht

## Wie wird zwischen den Components kommuniziert?

>Es gibt verschiedene Wege, zum Beispiel @Input(), @Output(), durch eine Parent-Child Verbindung oder durch die Verwendung von Services.

example parent:

    @Component({
        selector: ‘parent-component’,
        template: `<child-component [name]=”childName”></child-component>`,
        directives: [ChildComponent]
    })
    
    export class ParentComponent implements OnInit {
    
        private childName: string;
        
        constructor() { }
        ngOnInit() { 
        this.childName = ‘Boo’;
        }
    }

example child:

    @Component({
        selector: ‘child-component’,
        template: `I’m {{ name }}`
    })
    export class ChildComponent implements OnInit {
        @Input() name: string;
        constructor() { }
        ngOnInit() { }
    }

## Was ist ein Guard?

Route Guards können User von unauthorisierter Navigation zu Teilen der App abhalten. In Angular gibt es folgende Route Guards: 

* CanActivate
* CanActivateChild
* CanDeactivate
* Resolve
* CanLoad

Angular route guards are interfaces which can tell the router whether or not it should allow navigation to a requested route. They make this decision by looking for a true or false return value from a class which implements the given guard interface. 

## Synchron vs Asynchron?

Bei einer asynchronen Funktion muss, was auch immer sie tut, nicht zwingend gleichzeitig mit Ihrem Aufruf geschiehen, bei
einer synchronen schon.
### Beispiel:

*Situation: Eine Task T1 startet eine zweite Task T2*

>   Synchron: Wir wissen, wann es passieren wird (T2 wird ausgeführt sobald die blockierende T1 endet).

>Asynchron: Wir wissen nicht, wann es passieren wird. (T2 kann gleichzeitig mit T1, kurz danach, oder auch erst lange nach Beendung von T1 ausgeführt werden)

## Was sind Observables?

*Observables are being used to listen for and respond to user-input events.*
The AsyncPipe subscribes to an observable or promise and returns the latest value it has emitted.
<br>example:

    <div><code>observable | async</code>: Time: {{ time | async }}</div>

Im folgenden Beispiel ist in ActivatedRoute.url ein obervable gespeichert. Sobald dieses verändert wird wird es mit der ngOnInit() ... Funktion ausgegeben:

    import { ActivatedRoute } from '@angular/router';

    @Component({
        selector: 'app-routable',
        templateUrl: './routable.component.html',
        styleUrls: ['./routable.component.css']
    })
    export class Routable2Component implements OnInit {
        constructor(private activatedRoute: ActivatedRoute) {}

    ngOnInit() {
        this.activatedRoute.url
            .subscribe(url => console.log('The URL changed to: ' + url));
        }
    }

Syntax Initialisierung:

    news$: Observable<NewsItem>; //creates Observable (always use a $ at the end of the name to recognize it)

## Observables vs Promises vs Callbacks vs AsyncAwait
----
**Callbacks** are the oldest way of working with data once it's there and letting other code execute while the async code is executing. When multiple callbacks are nested into each other it gets very complicated.

    const getUser = cb => {
         setTimeout(() => {
            cb({ name: 'Max' })
        }, 2000)
    }
    getUser(user => {
        console.log(user.name) // Prints 'Max' after 2 seconds
    })
    console.log('This prints before "Max" gets printed!') // <- This does indeed print before 'Max'
---
**Promisses** are much more readable and can retceive multiple arguments without problems. <br>
Inside then(), you can simply return the result of a function call. And the result of that function call can be used in the next then() block - you’ll receive it as an argument there. If the returned result is a promise, JavaScript will wait for its completion and resolve it for you.

    checkAuth()
      .then(authStatus => {
        return getUser(authStatus) // returns a new promise which may use the authStatus we fetched
        })
      .then(user => {
       console.log(user.name) // prints the user name
       })
----
**Observables** have two main advantages for using them over promises:

* They work with **streams of data** instead of single values
* They bring a **big toolset of operators** to manipulate, transform and work with the async data

Whenever a new piece appears, our subscription gets informed. The function we pass to subscribe() gets executed whenever a new value is emitted. In the example below, whenever the button gets clicked.

    const button = document.querySelector('button')
    const observable = Rx.Observable.fromEvent(button, 'click')
    observable.subscribe(event => {
        console.log(event.target)
    })

**Async & Await** make it possible, to mix asynchronous code with the synchronous code without condig "in block".

    async function fetchUser() {
      const auth = await checkAuth() // <- async operation
      const user = await getUser(auth) // <- async operation
      return user
    }
    fetchUser().then(user => console.log(user.name))