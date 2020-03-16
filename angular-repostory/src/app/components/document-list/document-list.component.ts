import { Component, OnInit } from '@angular/core';
import { DocumentService } from 'src/app/services/document.service';
import { Document } from '../../common/document';

@Component({
  selector: 'app-document-list',
  templateUrl: './document-list.component.html',
  styleUrls: ['./document-list.component.css']
})
export class DocumentListComponent implements OnInit {

  documents: Document[];

  constructor(private documentService: DocumentService) { }

  ngOnInit(): void {
    this.listDocuments();
  }

  listDocuments(){
    this.documentService.getDocumentList().subscribe(
      data => {
        this.documents = data;
      }
    )
  }

}
