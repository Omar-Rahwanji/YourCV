import { BreakpointObserver } from '@angular/cdk/layout';
import { Token } from '@angular/compiler/src/ml_parser/lexer';
import { Component, EventEmitter, HostListener, Input, OnInit, Output } from '@angular/core';
import jwtDecode from 'jwt-decode';
import { HomeService } from 'src/app/service/home.service';
import { menuList as staticMenuList } from '../../data/menus';

@Component({
  selector: 'll-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input() topFixed: boolean;
  @Output() toggleSidenav = new EventEmitter();
  isScrolled: boolean;
  menuList = [];
  isLessThenLargeDevice;
  logo = this.homeService.webPageData.logo;
  constructor(private breakpointObserver: BreakpointObserver, public homeService: HomeService) { }
  userRole: any=0;
  ngOnInit(): void {
    this.menuList = staticMenuList;
    this.breakpointObserver.observe(['(max-width: 1199px)']).subscribe(({ matches }) => {
      this.isLessThenLargeDevice = matches;
    });
    let StringToken = localStorage.getItem('token');
    if (StringToken != null) {
      let Token: any = jwtDecode(StringToken);
      this.userRole = Token.role;
    }
  }

  @HostListener('window:scroll', ['$event'])
  checkScroll() {
    this.isScrolled = window.pageYOffset > 15;
  }

  logout() {
    localStorage.clear();
    window.location.reload();
  }
}
