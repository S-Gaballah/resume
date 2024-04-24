
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
    workHistory;
    certificates;
    conferences;
    courses;
    education;
    ngOnInit(): void {
        this.resumeService.getSkillset().subscribe(skills=>this.skillSet = skills);
        this.resumeService.getProfile().subscribe(results => this.profile = results);
        this.resumeService.getWorkHistory().subscribe(results => this.workHistory = results);
        this.resumeService.getCertificates().subscribe(results => this.certificates = results);
        this.resumeService.getConferences().subscribe(results => this.conferences = results);
        this.resumeService.getCourses().subscribe(results => this.courses = results);
        this.resumeService.getEducation().subscribe(results => this.education = results);
        
    }

    goToLink(url: string){
        window.open(url, "_blank");
    }

    downloadPDF(path:string){
        this.resumeService.downloadFile(path);
    }
    
    constructor(private resumeService : ResumeService){}


}