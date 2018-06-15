import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dynamic-editor',
  templateUrl: './dynamic-editor.component.html',
  styleUrls: ['./dynamic-editor.component.scss']
})
export class DynamicEditorComponent implements OnInit {
public ComponentName:string;
private sub: any;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
       this.ComponentName = params['type'];
 
 
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
