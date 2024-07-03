import { Component } from '@angular/core';
import { HeaderComponent } from "../../modules/pages/header/header.component";
import { FooterComponent } from "../../modules/pages/footer/footer.component";
import { AboutComponent } from "../../modules/pages/about/about.component";
import { ServicesComponent } from "../../modules/pages/services/services.component";
import { BlogsComponent } from "../../modules/pages/blogs/blogs.component";
import { ContactusComponent } from "../../modules/pages/contactus/contactus.component";
import { LandingComponent } from "../../modules/pages/landing/landing.component";

@Component({
    selector: 'app-homelayout',
    standalone: true,
    templateUrl: './homelayout.component.html',
    styleUrl: './homelayout.component.scss',
    imports: [HeaderComponent, FooterComponent, AboutComponent, ServicesComponent, BlogsComponent, ContactusComponent, LandingComponent]
})
export class HomelayoutComponent
{
   
}
