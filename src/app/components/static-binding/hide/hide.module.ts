import { NgModule} from '@angular/core';
import { RouterModule } from '@angular/router';


import { HIDE_COMPONENT_EXAMPLE_CONSTANT } from "src/app/components/static-binding/hide/hide.constants";

import { COMPONENT_EXAMPLE } from "src/app/domain/application.const";
import { HIDE_ROUTING } from "src/app/components/static-binding/hide/hide.routing";
import { PageModule } from "src/app/components/page/page.module";



@NgModule({
  imports: [HIDE_ROUTING,PageModule],
  exports: [RouterModule],
    providers:[{ provide: COMPONENT_EXAMPLE, useValue: HIDE_COMPONENT_EXAMPLE_CONSTANT }]
  })
export class HideModule { }



