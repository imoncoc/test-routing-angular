import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { ServersComponent } from './servers/servers.component';
import { UserComponent } from './users/user/user.component';
import { ServerComponent } from './servers/server/server.component';
import { EditServerComponent } from './servers/edit-server/edit-server.component';
import { ServersService } from './servers/servers.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AuthService } from './auth.service';
import { AuthGuard } from './auth-guard.service';
import { ProductsComponent } from './products/products.component';
import { ProductComponent } from './products/product/product.component';
import { ProductDetailsComponent } from './products/product-details/product-details.component';
import { canDeactivateGuard } from './servers/edit-server/can-deactivated-guard.service';
import { ErrorPageComponent } from './error-page/error-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UsersComponent,
    ServersComponent,
    ServerComponent,
    EditServerComponent,
    UserComponent,
    PageNotFoundComponent,
    ProductsComponent,
    ProductComponent,
    ProductDetailsComponent,
    ErrorPageComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, ReactiveFormsModule],
  providers: [ServersService, AuthService, AuthGuard, canDeactivateGuard],
  bootstrap: [AppComponent],
})
export class AppModule {}
