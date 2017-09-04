import { Component } from '@angular/core';
import {animate, group, query, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('panelState', [
      transition(':enter', [
        group([
          style({
            opacity: 0,
            transform: 'translateX(100%)'
          }),
          animate(200),

          query(':self',[
            style({transform:'translateY(-300px)', opacity:0}),
            animate(300)
          ]),
          query('.panel-heading',[
            style({transform:'translateY(-300px)', opacity:1}),
            animate(300)
          ]),
          query('.panel-body',[
            style({transform:'translateY(-100%)', opacity:1}),
            animate(300)
          ]),

          query('.panel-footer',[
            style({transform:'translateY(300px)', opacity:1}),
            animate(300)
          ]),
        ]),

      ]),
      transition(':leave', [
        animate(200, style({
          transform: 'translateX(-100%)',
          opacity: 0
        }))
      ]),
      transition('* => *',[
        query(':enter',[
          style({transform:'scale(1)'}),
          animate(200, style({transform:'scale(1.5)'})),
          animate(100)
        ],{optional:true}),
        query('div > p, button',[
          group([
            animate(300, style({color:'red'})),
            animate(300, style({transform:'scale(1.5)'}))
          ])

        ])
      ])
    ])
  ]
})
export class AppComponent {
  showPanel = false;
  showParagraph = true;
}
