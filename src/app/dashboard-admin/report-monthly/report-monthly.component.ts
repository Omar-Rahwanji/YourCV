import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import jsPDF from 'jspdf';

@Component({
  selector: 'app-report-monthly',
  templateUrl: './report-monthly.component.html',
  styleUrls: ['./report-monthly.component.scss']
})
export class ReportMonthlyComponent implements OnInit {
  @ViewChild('resumeBody',{static: false}) element!: ElementRef;

  constructor() { }

  ngOnInit(): void {
  }
  generateResume(){
    let generatedResumePDF = new jsPDF('p','pt','a3');
    generatedResumePDF.html(this.element.nativeElement, {
      callback: (pdfFile)=> pdfFile.save('test.pdf')
    });
  }
}
