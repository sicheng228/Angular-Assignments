import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {

  constructor() { }
  
  @Input() getFromParent;

  propertyOfChild='FromChild';
  ngOnChanges(){ console.log('Child OnChange...'); }
  ngOnInit() { console.log('Child OnInit...'); }
  ngDoCheck(){ console.log('Child DoCheck...'); }
  ngAfterContentInit(){ console.log('Child AfterContentInit...'); }
  ngAfterContentChecked(){ console.log('Child AfterContentChecked...'); }
  ngAfterViewInit(){ console.log('Child AfterViewInit...'); }
  ngAfterViewChecked(){ console.log('Child AfterViewChecked...'); }
  ngOnDestroy(){ console.log('Child OnDestroy...'); }

}
