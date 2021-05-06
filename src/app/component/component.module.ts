import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { ComponentsRoutes } from './component.routing';
import { NgbdpaginationBasicComponent } from './pagination/pagination.component';
import { NgbdAlertBasicComponent } from './alert/alert.component';
import { NgbdDatepickerBasicComponent } from './datepicker/datepicker.component';
import { NgbdDropdownBasicComponent } from './dropdown-collapse/dropdown-collapse.component';
import { NgbdModalBasicComponent } from './modal/modal.component';
import { NgbdtabsBasicComponent } from './tabs/tabs.component';
import { ButtonsComponent } from './buttons/buttons.component';
import { CardsComponent } from './card/card.component';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ComponentsRoutes),
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    FontAwesomeModule
  ],
  declarations: [
    NgbdpaginationBasicComponent,
    NgbdAlertBasicComponent,
    NgbdDatepickerBasicComponent,
    NgbdDropdownBasicComponent,
    NgbdModalBasicComponent,
    NgbdtabsBasicComponent,
    ButtonsComponent,
    CardsComponent,
  ]
})
export class ComponentsModule {}
