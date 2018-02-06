import { RouterModule } from '@angular/router';
import { MovieComponent } from "app/movie/movie.component";


export const APP_ROUTES = RouterModule.forChild([
    {path:'movies', loadChildren:'app/movie/movie.module#MovieModule'}
])