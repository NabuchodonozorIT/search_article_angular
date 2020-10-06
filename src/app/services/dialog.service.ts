import {Injectable} from '@angular/core';
import {MatDialog, MatDialogConfig} from '@angular/material/dialog';
import {ShowDetailsComponent} from '../components/show-details/show-details.component';
import {ArticleData} from '../model/articleData';

@Injectable()
export class DialogService {

  constructor(public dialog: MatDialog) {
  }

  public openModal(item: ArticleData): void {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.autoFocus = true;
    dialogConfig.data = item;
    dialogConfig.minWidth = 400;

    const dialogRef = this.dialog.open(ShowDetailsComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        // TODO
      }
    });
  }
}
