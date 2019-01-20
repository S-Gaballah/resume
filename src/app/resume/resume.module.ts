import {NgModule} from "@angular/core";
import {ResumeComponent} from "./resume.component"
import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from '../shared/material.module';

@NgModule({
     imports:[
        SharedModule,
        MaterialModule
     ],
     declarations :[ResumeComponent],
     exports:[ResumeComponent]
})
export class ResumeModule{

}