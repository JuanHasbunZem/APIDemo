# Currency Exchange (API Demo)

#### A quick demonstration of applying API coding to allow the user to convert the currency of US dollars into a different user selected currency.

#### By Juan Hasbun

## Technologies Used

* HTML
* Github/bash
* Virtual Studio Code
* CSS
* Bootstrap
* Javascript
* Jquery
* Markdown
* Node.js
* Web Pack

## Description
The website will inform the user to enter a dollar amount and to select (from a drop down menu) a type of currency they wish to convert their US Dollar into. Both of these values are stored in variables and passed to an API call function where they will be used as a template literal within the API call.  The API call will use ExchangeRates pair conversion feature that will convert the US dollar amount to the selected type and return the new amount. This will be passed back to the document (unless an error occurs, in which case an error message is displayed to the user) and displayed in a results page for the user.

Currency image used is by Peter Cade of gettyimages.com


## Setup/Installation Requirements

  * Clone from repository (use: $git clone https:github.com/JuanHasbunZem/APIDemo)
  * Once cloned on to your computer, access with GitBash / terminal
  * To install Node and Webpack dependencies, enter into the terminal: $ npm install
  * Once installation is complete, build the program environment with: $ npm run build
  * Finally, to open the application on a developer server in your browser type: $ npm run start
    * Note: If running this on a PC, open up the package.json file and find the following line: "start": "npm run build; webpack-dev-server......" replace the "build;" with "build & ".


## Known Bugs

* Currently when attempting to call the API, the currency.js file does not recognize the two variables being passed into the function.

## License

Copyright 2021 Juan Hasbun

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

## Contact Information

Email at: [zemenareq@hotmail.com](zemenareq@hotmail.com)