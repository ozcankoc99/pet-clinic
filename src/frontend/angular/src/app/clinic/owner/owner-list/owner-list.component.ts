import { Component, OnInit } from '@angular/core';
import { OwnerService } from '../../services/owner.service';
@Component({
  selector: 'app-owner-list',
  templateUrl: './owner-list.component.html',
  styleUrls: ['./owner-list.component.css'],
})
export class OwnerListComponent implements OnInit {
  constructor(private ownerService: OwnerService) {
    console.log(
      '🚀 ~ file: owner-list.component.ts ~ line 11 ~ OwnerListComponent ~ constructor ~ constructor'
    );
  }

  ngOnInit(): void {
    this.ownerService
      .getOneCrudTest(1)
      .subscribe((x) =>
        console.log(
          '🚀 ~ file: owner-list.component.ts ~ line 19 ~ OwnerListComponent ~ ngOnInit ~ x',
          x
        )
      );
  }
}
