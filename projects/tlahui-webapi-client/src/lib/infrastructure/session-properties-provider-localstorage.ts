import { ISessionPropertiesProvider } from ".";

import { Component, Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';

@Injectable({
  providedIn: 'root',
})

export class SessionPropertiesProviderLocalstorage implements ISessionPropertiesProvider {
    private KEY_BUCKETID = "tlahui.user.session.bucketid";
    private KEY_LNAG = "tlahui.user.session.bucketid";

    
    constructor(){

    }
    
    public GetBuckedId(): string {
        var bucketid: string = localStorage[this.KEY_BUCKETID];

        if (!bucketid) {
            bucketid = 'demo_bucket';
        }
        return bucketid;
    }

    
    SetBuckedId(BucketId: string) {
        localStorage.setItem(this.KEY_BUCKETID, BucketId);
    }

    public GetLanguage(): string {
        var language: string = localStorage[this.KEY_LNAG];

        if (!language) {
            language = 'es-MX';
        }

        return language;
    }

    SetLanguage(Language: string) {
        localStorage.setItem(this.KEY_LNAG, Language);
    }
}