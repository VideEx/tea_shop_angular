import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnChanges,
  OnDestroy,
  Output,
  ViewChild
} from '@angular/core';
import {Modal} from "bootstrap";


@Component({
  selector: 'modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})


export class ModalComponent implements OnChanges, OnDestroy {
  @Input()
  get isModal() {
    return this._isModal
  }
  set isModal(param:boolean) {
    this._isModal = param
  }

  @ViewChild('modal', {static: true})
  private modalRef!: ElementRef<HTMLDivElement>;
  private modal!: Modal;
  private _isModal: boolean = false;

  @Output()
  showModalEvent: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor() { }

  ngOnChanges(): void {
    if (this.isModal) {
      this.modal = new Modal(this.modalRef.nativeElement);
      this.modal.show();
      this.modalRef.nativeElement.addEventListener('hide.bs.modal', ()=> this.showModalEvent.emit(!this._isModal));
    }
  }

  ngOnDestroy() {
    this.modal.hide();
  }
  toggleModal() {
    this.showModalEvent.emit(!this._isModal);
  }

}
