import { NgModule }             from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent }         from './components/home/home.component';
import { AboutComponent }        from './components/about/about.component';
import { PostsModule }           from './components/posts/posts.module';
import { ContactComponent }      from './components/contact/contact.component';
import { PageNotFoundComponent } from './components/notfound/not-found.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'posts', loadChildren: () => PostsModule },
  { path: 'contact', component: ContactComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [PageNotFoundComponent],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
