import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/Service/admin.service';

@Component({
  selector: 'app-inbox',
  templateUrl: './inbox.component.html',
  styleUrls: ['./inbox.component.scss']
})
export class InboxComponent implements OnInit {

  constructor(public adminService:AdminService) { }

  ngOnInit(): void {
    this.adminService.getContactInbox()
  }

}
