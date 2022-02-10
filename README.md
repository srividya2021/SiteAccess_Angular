# sampleApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.1.8.

This sample code uses `angular-oauth2-oidc` package.

First you need to register client application from IBM SSO Provisioner, then create sso.config.ts following the sso.config.ts template:

```
import { AuthConfig } from 'angular-oauth2-oidc';

export const authConfig: AuthConfig = {
    issuer: '--change-me--',
    loginUrl: '--change-me--', //authorize
    tokenEndpoint: '--change-me--',
    userinfoEndpoint: '--change-me--',
    redirectUri: window.location.origin + '--change-me--',
    clientId: '--change-me--',
    scope: 'openid profile email voucher',
  };
```

## Development server

Run `ng serve --ssl` for a dev server. Navigate to `https://localhost:4200/`. The app will automatically reload if you change any of the source files.
