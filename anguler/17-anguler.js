/*


https://dev.to/this-is-angular/whats-new-in-angular-17-c81#:~:text=Introduction,complete%20rewrite%20of%20the%20framework.

styleUrls: ['./app.component.css'] -----array to non array--->  styleUrl: './app.component.css'


@angular-devkit/build-angular:browser to build a client-side rendering application
@nguniversal/builders:ssr-dev-server to build a server-side rendering application.


 
87% gain on an application build
82% gain on a dev-server of the application



In previous versions, we used structural directives ngIf, ngSwitch, ngFor to manage the structure of our page.
Structural directives are very powerful, thanks to the mycrosyntax of which they are composed. Unfortunately, this mycrosyntax has its limits, and so a new flow code was created.

What does this code flow look like?
@Component({
  standalone: true,
  selector: 'app-root',
  template: `
    @if(name === 'SFEIR'){
      <ul>
         @for(entity of entities; track entity.id) {
           <li>{{ entity.name }}</li>
         }@empty {
           No data
         }
      </ul>

    }@else {
      Name not correct
    }
  `
})
export class AppComponent {
  name = 'SFEIR';
  entities = [{ name: 'Luxembourg', id: 'LU' }];
}


The most waited feature: defer

  Of course, we could do this before. Thanks to EsModules and the *ngComponentOutlet structural directive, it was possible to lazyload our components. However, this technique remains a source of error, in the sense that the developer has to think about the whole loading process (loading, error, etc.) and is limited in scope (complicated prefetching, etc.). In short, the developer experience wasn't there.

With Angular 17, defer comes to the rescue, making it easy to lazyload our components by taking into account all the stages of lazyloading.
@Component({
  selector: 'app-root',
  template: `
    <button type="button" #loadButton>Click Me</button>
    @defer(on interaction(loadButton)) {
      <app-lazy-component />
    }@placeholder {
      showed until the chunk file not begin to load
    }@loading {
      showed during the loading of the chunk
    }@error {
      showed if an error happen during loading
    }
  `
})
export class AppComponent {}