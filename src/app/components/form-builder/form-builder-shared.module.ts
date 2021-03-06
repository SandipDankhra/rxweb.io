import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from '@angular/router';
import { ParameterItemsComponent } from './parameter-items/parameter-items.component';
import { FormBuilderComponent } from './form-builder.component';
import { FORM_BUILDER_ROUTING } from './form-builder.routing';
import { RxFormsModule } from '@rx/forms';
import { RxViewModule } from '@rx/view';
import { HighlightModule } from 'ngx-highlightjs';
import { ClipboardModule } from 'ngx-clipboard';


@NgModule({
 imports:      [FORM_BUILDER_ROUTING, CommonModule ,FormsModule, ReactiveFormsModule,RouterModule,RxFormsModule, RxViewModule,ClipboardModule, HighlightModule  ],
 declarations: [ ParameterItemsComponent,FormBuilderComponent ],
 exports:      [ ParameterItemsComponent,FormBuilderComponent,RouterModule ]
})
export class FormBuilderSharedModule { }