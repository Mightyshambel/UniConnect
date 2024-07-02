import { Component } from '@angular/core';
import { HeaderComponent } from "../../modules/pages/header/header.component";
import { FooterComponent } from "../../modules/pages/footer/footer.component";

@Component({
    selector: 'app-homelayout',
    standalone: true,
    templateUrl: './homelayout.component.html',
    styleUrl: './homelayout.component.scss',
    imports: [HeaderComponent, FooterComponent]
})
export class HomelayoutComponent
{
   
}
