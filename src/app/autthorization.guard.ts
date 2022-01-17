import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { AuthService } from './service/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AutthorizationGuard implements CanActivate {
  constructor(
    private route: Router,
    private toastr: ToastrService,
    private authService:AuthService, 
     ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const expectedRole = route.data.expectedRole;
      let userRole = this.authService.getRole();
     debugger
     let expectedRoleCheck:Boolean=false
      for (let i = 0; i < expectedRole.length; i++) {
         if (userRole== expectedRole[i])
         {
            expectedRoleCheck=true;
         }
      }
        if (expectedRoleCheck) 
        {
          return true;
        } 
        else 
        {
          this.route.navigate(['auth/login']);
          this.toastr.warning('You do not have access to this page')
          return false;
        }
  }
  canActivateChild(
    childRoute: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return true;
  }  
}
