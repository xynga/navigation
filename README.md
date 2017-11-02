<img src="https://s3.amazonaws.com/xynga/images/XYNGA.png" width="400" alt="Xynga Community Logo"/>

# Navigation

# Synopisis

Xynga-Navigation is an Angular 4 library that is made up of the following components: <br/>

-Menu Directive: which is an attribute that can be added to an HTML element that converts its contents into a popup menu with various customization options. <br/>
-Tab List Component: which is a list of tabs that are designed to contain a clickable link to another webpage   <br/>

# Motivation

Xynga-Containers is one of the 7 Xynga libraries. Each of the 7 libraries are made up of components, services, and directives that were originally developed for Vertex's Country-By-Country Reporting application. They were repackaged under the Xynga name and published on npm so that they could be made available to anyone that wishes to use them in their Angular 4 application.

# Installation

To install Xynga-Navigation, run the command <code>npm install xynga-navigation</code from Angular project directory that you wish to install the library to. It will then be available in the project's node_modules directory. All Xynga-Containers's third party dependencies will be automatically downloaded and placed in the project's node_modules directory as well. Then, simply import <code>NavigationModule</code> (from 'xynga-navigation') to the appropiate module in the project. 

Additionally, it is important that <code>"types" : ["node"]</code> and <code>"typeRoots" : ["../node_modules/@types"]</code> are added to the <code>"compilerOptions"</code> array in the project's tsconfig.app.json file, or else the project might not compile properly.

# Additional Information

Detailed descriptions on how to use each each component in Xynga-Navigation, along with examples and APIs, can be found at [XYNGA WEBSITE]

# Contact

If you have a question about how a particular component or directive works, or would like to report a bug, please email xyngaba@gmail.com <br/>

Xynga website: [XYNGA WEBSITE] <br/> <br/>
github: github.com/xynga/navigation <br/> <br/>
npm: https://www.npmjs.com/package/xynga-navigation <br/> <br/>

# License

The MIT License (MIT)

Copyright (c) 2017 [ADD NAME]

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
