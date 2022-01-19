import { AlertModalComponent } from './components/alert-modal/alert-modal.component';
import { Injectable } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

enum AlertTypes {
  DANGER = 'danger',
}

@Injectable()
export class AlertModalService {
  constructor(private modalService: BsModalService) {}

  private showAlert(message: string, type: AlertTypes) {
    const bsModalRef: BsModalRef = this.modalService.show(AlertModalComponent);
    bsModalRef.content.type = type;
    bsModalRef.content.message = message;
  }

  showAlertDanger(message: string) {
    this.showAlert(message, AlertTypes.DANGER);
  }
}
