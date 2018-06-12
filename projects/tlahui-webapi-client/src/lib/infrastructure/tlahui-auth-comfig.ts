export let TlahuiAuthConfig = {
    Settings: {
      clientID: '62d71c94-71b5-4b26-af40-e1f427597a63',
      authority: 'https://login.microsoftonline.com/tfp/eccordion.onmicrosoft.com/B2C_1_SiUpIn',
      b2cScopes: ['https://eccordion.onmicrosoft.com/tapi/read','https://eccordion.onmicrosoft.com/tapi/write'],
      loginRedirect: 'http://localhost:4200/home',
      logoutRedirect: 'http://localhost:4200/login',
    }
  };
