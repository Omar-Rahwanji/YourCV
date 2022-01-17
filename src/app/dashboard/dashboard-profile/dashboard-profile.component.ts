import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import jwtDecode from 'jwt-decode';
import { ProfileUserService } from 'src/app/Service/profile-user.service';

@Component({
  selector: 'll-dashboard-profile',
  templateUrl: './dashboard-profile.component.html',
  styleUrls: ['./dashboard-profile.component.scss']
})
export class DashboardProfileComponent implements OnInit {

  @Input() id: number | undefined;
  @Input() firstName: string = 'N/A';
  @Input() lastName: string = 'N/A';
  @Input() email: string = 'N/A';
  @Input() userName: string = 'N/A';
  @Input() password: string | undefined;
  @Input() city: string = 'N/A';
  @Input() country: string = 'N/A';
  @Input() personalPhoto: string = 'N/A';
  @Input() roleId: number | undefined;
  @Input() role: string = 'N/A';
  constructor(private router: Router, public UserProfile: ProfileUserService) { }
  ngOnInit(): void {
    debugger
    let StringToken = localStorage.getItem('token');
    let Token: any = jwtDecode(StringToken);
    this.UserInfo(Token.nameid);
  }
  UserInfo(id: number) {
    debugger
    this.UserProfile.getUserById(id)

  }


}
