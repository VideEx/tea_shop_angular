declare var $: any;
import {Component, OnDestroy, OnInit} from '@angular/core';
import {Observable, Subscription} from "rxjs";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit, OnDestroy {
  isModal: boolean = false;
  private observable: Observable<boolean>;
  private subscription: Subscription | null = null;

  constructor() {
    this.observable = new Observable<boolean>((observer) => {
      const timeout = setTimeout(() => {
        observer.next(true)
      }, 10000);

      return {
        unsubscribe() {
          clearTimeout(timeout)
        }
      }
    })
  }

  ngOnInit(): void {
    $('#accordion').accordion({
      heightStyle: "content",
      icons: false
    });
    this.subscription = this.observable.subscribe((param: boolean) => {
      if (param) this.isModal = param;
    })

  }

  ngOnDestroy() {
    this.subscription?.unsubscribe()
  }

  toggleModal(param:boolean) {
    this.isModal = param;
  }

}
