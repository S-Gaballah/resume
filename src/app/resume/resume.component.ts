
import {Component, OnInit} from "@angular/core"
import {ResumeService} from "./resume.service"

@Component({
    selector:"app-resume",
    templateUrl:"./resume.component.html",
    styleUrls :["./resume.css"]
})
export class ResumeComponent implements OnInit{
    skillSet;
    profile;
    workHistory
    ngOnInit(): void {
        this.resumeService.getSkillset().subscribe(skills=>this.skillSet = skills);
        this.resumeService.getProfile().subscribe(results => this.profile = results);
        this.resumeService.getWorkHistory().subscribe(results => this.workHistory = results);
    }
    
    constructor(private resumeService : ResumeService){}


}