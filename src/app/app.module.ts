// --- Modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// --- Components
import { AppComponent } from './app.component';
import { HeroComponent } from './hero/hero.component';
import { AboutComponent } from './about/about.component';
import { ServicesComponent } from './services/services.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { NavigationComponent } from './navigation/navigation.component';
import { TrianglesComponent } from './triangles/triangles.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroComponent,
    AboutComponent,
    ServicesComponent,
    PortfolioComponent,
    ContactComponent,
    FooterComponent,
    NavigationComponent,
    TrianglesComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpModule,
    RouterModule.forRoot([
      {
      path: 'home' , component: HeroComponent
      },
      {
      path: 'about' , component: AboutComponent
      },
      {
      path: 'services' , component: ServicesComponent
      },
      {
      path: 'portfolio' , component: PortfolioComponent
      },
      {
      path: 'contact' , component: ContactComponent
      },
      {
        path: '**',
        redirectTo: 'home',
        pathMatch: 'full'
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
