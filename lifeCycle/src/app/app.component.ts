import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'lifeCycle';

  fromParent='FromParent';
  constructor() { console.log('parent constructor...');}
  ngOnChanges(){ console.log('Parent OnChange...'); }
  ngOnInit() { console.log('Parent OnInit...'); }
  ngDoCheck(){ console.log('Parent DoCheck...'); }
  ngAfterContentInit(){ console.log('Parent AfterContentInit...'); }
  ngAfterContentChecked(){ console.log('Parent AfterContentChecked...'); }
  ngAfterViewInit(){ console.log('Parent AfterViewInit...'); }
  ngAfterViewChecked(){ console.log('Parent AfterViewChecked...'); }
  ngOnDestroy(){ console.log('Parent OnDestroy...'); }
}
