# Create WhatsApp Group Automation

Note that this project uses Protractor.


## Getting started

This package.json references the local protractor directory with `"protractor": "file: ../"`.
For the type declarations to work, from the protractor directory run an `npm install` to generate the declarations file.
Next, install node_modules with:

```
npm install
```
To start selenium server you may use webdriver-manager.
```
webdriver-manager update
```
```
webdriver-manager start
```
To execute the protractor script:
```
protractor conf.js
```


## Or you can use this Script

```
run ./start.sh script
```
## WhatsApp will require visual QRcode authentication via you personal mobilephone.
