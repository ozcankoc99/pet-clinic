import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-owner-list',
  templateUrl: './owner-list.component.html',
  styleUrls: ['./owner-list.component.css'],
})
export class OwnerListComponent implements OnInit {
  constructor() {
    console.log(
      '🚀 ~ file: owner-list.component.ts ~ line 11 ~ OwnerListComponent ~ constructor ~ constructor'
    );
  }

  ngOnInit(): void {}
}
