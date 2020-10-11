import { DialogService } from './dialog.service';
import {MatDialog} from '@angular/material/dialog';

describe('DialogService', () => {
  let service: DialogService;
  const dialog: MatDialog = null;

  beforeEach(() => {
    service = new DialogService(dialog);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
