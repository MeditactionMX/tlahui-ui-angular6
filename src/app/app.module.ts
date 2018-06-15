import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import 'hammerjs';

import { Store, StoreModule } from '@ngrx/store';


import { FuseModule } from '@fuse/fuse.module';
import { FuseSharedModule } from '@fuse/shared.module';

import { fuseConfig } from './fuse-config';

import { AppComponent } from './app.component';
import { FuseMainModule } from './main/main.module';
import { FuseSampleModule } from './main/content/sample/sample.module';

import { AuthGuardService } from './auth/auth-guard.service';
import { B2cLoginComponent } from './auth/b2c-login/b2c-login.component';
import { AzureB2cService, TlahuiHttpInterceptor } from 'tlahui-webapi-client';


import { SessionPropertiesProviderLocalstorage, ISessionPropertiesProvider  } from 'tlahui-webapi-client';
import { HomePageComponent } from './home-page/home-page.component'; 

const appRoutes: Routes = [
    {
        path: '',
        component: HomePageComponent
    },
    {
        path: 'editor/:type',
        loadChildren: './components/dynamic-editor/dynamic-editor.module#DynamicEditorModule',
        canActivate: [AuthGuardService] 
    },
    {   path: 'login',
        component: B2cLoginComponent},
    {
        path      : '**',
        redirectTo: 'sample',
        canActivate: [AuthGuardService] 
    }
];

@NgModule({
    declarations: [
        AppComponent, B2cLoginComponent, HomePageComponent
    ],
    imports     : [
        BrowserModule,
        BrowserAnimationsModule,
        HttpClientModule,
        RouterModule.forRoot(appRoutes, { preloadingStrategy: PreloadAllModules }),
        TranslateModule.forRoot(),
        // Fuse Main and Shared modules
        FuseModule.forRoot(fuseConfig),
        FuseSharedModule,
        FuseMainModule,
        FuseSampleModule,

    ],
    providers   : [
         AuthGuardService, 
        {  provide: HTTP_INTERCEPTORS,
            useClass: TlahuiHttpInterceptor,
            multi: true
         }, 
         {provide: 'ISessionPropertiesProvider', useClass: SessionPropertiesProviderLocalstorage},
         AzureB2cService
         
    ],
    bootstrap   : [
        AppComponent
    ]
})
export class AppModule
{
}
