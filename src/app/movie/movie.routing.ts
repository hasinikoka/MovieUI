import { RouterModule } from '@angular/router';
import { MoviepageComponent } from './moviepage.component';
import { MovielistComponent } from './movielist.component';
import { MoviedetailComponent } from './moviedetail.component';
import { Form1Component } from './form1.component';

export const Movie_ROUTES = RouterModule.forChild([
    {path:'', component:MoviepageComponent},
    {path:'', component:MoviepageComponent, children: [
        {path:'list1', component:MovielistComponent},
         {path: 'form1', component : Form1Component},
        {path: 'form1/:movieId', component : Form1Component},
       
    ]}
])