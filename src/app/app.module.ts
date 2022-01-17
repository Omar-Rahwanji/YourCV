import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { ToastrModule, ToastNoAnimation,  ToastNoAnimationModule} from 'ngx-toastr';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from "@angular/material/form-field";
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { NgxSpinnerModule } from "ngx-spinner";
import {HTTP_INTERCEPTORS} from '@angular/common/http'
import { TokenInterceptor } from './interceptors/token.interceptor';

@NgModule({
  
  declarations: [AppComponent],

  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ToastNoAnimationModule.forRoot(),
    ToastrModule.forRoot(),
    SharedModule,
    NgxSkeletonLoaderModule,
    MatInputModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    FormsModule,
    NgxSpinnerModule,
  ],
  bootstrap: [AppComponent],  
 
  providers: [
    {
      provide:HTTP_INTERCEPTORS,
      useClass:TokenInterceptor,
      multi: true
    }
  ],
})
export class AppModule { }
