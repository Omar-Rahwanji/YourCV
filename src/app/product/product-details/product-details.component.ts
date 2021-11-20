import { HtmlParser } from '@angular/compiler';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { Router } from '@angular/router';
import jsPDF from 'jspdf';
import { ProductService } from 'src/app/service/product.service';
import { BuyResumeComponent } from './buy-resume/buy-resume.component';
import { CreateResumeComponent } from './create-resume/create-resume.component';

@Component({
  selector: 'll-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})

export class ProductDetailsComponent implements OnInit {
  @ViewChild('resumeBody', { static: false }) element!: ElementRef;
  constructor(public productService: ProductService, private dialog: MatDialog, private router: Router) { }
  selectedTemplateDocument: any = {};
  ngOnInit(): void {
    this.productService.getProductById(parseInt(this.router.url.split('/')[2]));
  }

  openDialog() {
    const dialogRef = this.dialog.open(CreateResumeComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  openPayDialog() {
    if (localStorage.getItem('token') != null) {
      const dialogRef = this.dialog.open(BuyResumeComponent);

      dialogRef.afterClosed().subscribe(result => {
        console.log(`Dialog result: ${result}`);
        this.productService.buyResume();
      });
    }
    else
      this.router.navigate(['auth/login']);

  }

  generateResume() {
    let generatedResumePDF = new jsPDF('p', 'pt', 'a3');
    generatedResumePDF.html(this.element.nativeElement, {
      callback: (pdfFile) => {
        pdfFile.save('test.pdf')
        window.location.reload()
      }
    });
  }

}
