import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import 'hammerjs';

import { Store, StoreModule } from '@ngrx/store';
import { reducers }  from './main/common/state/reducers';


import { FuseModule } from '@fuse/fuse.module';
import { FuseSharedModule } from '@fuse/shared.module';

import { fuseConfig } from './fuse-config';

import { AppComponent } from './app.component';
import { FuseMainModule } from './main/main.module';
import { FuseSampleModule } from './main/content/sample/sample.module';

import { AuthGuardService } from './auth/auth-guard.service';
import { B2cLoginComponent } from './auth/b2c-login/b2c-login.component';
import { AzureB2cService, TlahuiHttpInterceptor } from 'tlahui-webapi-client';

import { ApiTestComponent } from './api-test/api-test.component';
import { TlahuiApi } from '@API/rest/tlahui-api';

import { SessionPropertiesProviderLocalstorage, ISessionPropertiesProvider  } from 'tlahui-webapi-client'; 

const appRoutes: Routes = [
    {
        path: '',
        component: B2cLoginComponent
    },
    {
        path: 'api',
        component: ApiTestComponent
    }, 
    {
        path: 'editor/:type',
        loadChildren: './components/dynamic-editor/dynamic-editor.module#DynamicEditorModule'
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
        AppComponent, B2cLoginComponent, ApiTestComponent
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
        StoreModule.forRoot(reducers)
    ],
    providers   : [
         AuthGuardService, TlahuiApi,
        {  provide: HTTP_INTERCEPTORS,
            useClass: TlahuiHttpInterceptor,
            multi: true
         }, 
         {provide: 'ISessionPropertiesProvider', useClass: SessionPropertiesProviderLocalstorage}
         
    ],
    bootstrap   : [
        AppComponent
    ]
})
export class AppModule
{
}
