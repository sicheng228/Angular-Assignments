import { Component, OnInit } from '@angular/core';
import {MatPaginatorModule} from '@angular/material/paginator';
import { CalculatingServiceService }from 'src/app/calculating-service.service'



@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {
  results=this.calculatingService.results;
  // ["1336666668", "133666666T", "133666666U", "133666666V", "13366666M8", "13366666MT", "13366666MU", "13366666MV", "13366666N8", "13366666NT", "13366666NU", "13366666NV", "13366666O8", "13366666OT", "13366666OU", "13366666OV", "1336666M68", "1336666M6T", "1336666M6U", "1336666M6V", "1336666MM8", "1336666MMT", "1336666MMU", "1336666MMV", "1336666MN8", "1336666MNT", "1336666MNU", "1336666MNV", "1336666MO8", "1336666MOT", "1336666MOU", "1336666MOV", "1336666N68", "1336666N6T", "1336666N6U", "1336666N6V", "1336666NM8", "1336666NMT", "1336666NMU", "1336666NMV", "1336666NN8", "1336666NNT", "1336666NNU", "1336666NNV", "1336666NO8", "1336666NOT", "1336666NOU", "1336666NOV", "1336666O68", "1336666O6T", "1336666O6U", "1336666O6V", "1336666OM8", "1336666OMT", "1336666OMU", "1336666OMV", "1336666ON8", "1336666ONT", "1336666ONU", "1336666ONV", "1336666OO8", "1336666OOT", "1336666OOU", "1336666OOV", "133666M668", "133666M66T", "133666M66U", "133666M66V", "133666M6M8", "133666M6MT", "133666M6MU", "133666M6MV", "133666M6N8", "133666M6NT", "133666M6NU", "133666M6NV", "133666M6O8", "133666M6OT", "133666M6OU", "133666M6OV", "133666MM68", "133666MM6T", "133666MM6U", "133666MM6V", "133666MMM8", "133666MMMT", "133666MMMU", "133666MMMV", "133666MMN8", "133666MMNT", "133666MMNU", "133666MMNV"]
  // page=[];
  eachPage=10;
  currentPage=0;
  len=this.results.length;
  constructor( private calculatingService:CalculatingServiceService) {
  }
  ngOnInit(): void {
    // for(let i=1; i<=Math.ceil(this.results.length/this.eachPage);i++){
    //   this.page.push(i);
    // }
    // console.log(this.page);
  }
    pageEvent(event){
      this.currentPage=event.pageIndex;
      this.eachPage=event.pageSize;
    }
}
