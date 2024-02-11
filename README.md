# RHprint

A modern user interface for releasing prints on Rose-Hulman's campus

## Requirements
- Credentials for the print server
- Chromium or Firefox-based browser
- [RHITweaks extension](https://github.com/cm090/rhitweaks)
  - **Why?** The APIs used to communicate with printers are protected by CORS policies. To circumvent this, we use the extension as an intermediate data processor. API requests are sent to extension storage through event handlers, and results are sent back with promises.

## How to use
Visit [print.rhit.cf](https://print.rhit.cf) and sign in with your Rose-Hulman credentials. On the website you can view available printers, release prints, and learn how to use the system.

### Why can't I used this on my phone?
RHprint is not mobile-optimized because a browser extension is required to use the service.

### I installed RHITweaks and the website still says the extension's missing. What happened?
Make sure RHITweaks is active (you can see its icon in your list of extensions) and click "Return to homepage." If that doesn't work, report an [issue](https://github.com/cm090/rhprint/issues).

## Data privacy
Neither RHprint or RHITweaks will collect your personal information. Login credentials are stored locally on your device and will be automatically deleted after the request is complete. After successfully logging in, your username is save to your browser along with an authentication token. This information is used to restart your session at a later time without a password. If you log into RHprint or the original print release system on another device, your authentication token will expire and you will be asked to reauthenticate. Both RHprint and RHITweaks are open-source, so you can review and confirm our source code.
