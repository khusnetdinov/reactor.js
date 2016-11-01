# reactor.js
[WIP]

## Features

- Auto building project using [Brunch](https://brunch.io)
- Auto re-building on changing files
[auto-reload-brunch](https://github.com/brunch/auto-reload-brunch)
- Hot Module Reloading
[hrm-brunch](https://github.com/brunch/hmr-brunch)
- Linting with [Eslint-Brunch](https://github.com/brunch/eslint-brunch)
- Flowtype controll with [Flow](https://flowtype.org/)

### Files structure
```
├── /app/                       # The source code of the application
│   ├── /assets/                # Files in this folder just copy to public
│   │   ├── /images/            # Images folder
│   │   ├── /fonts/             # Fonts folder
│   │   ├── favicon.ico         # Project Favicon
│   │   └── index.html          # Layout html file
│   ├── /javascripts/           # Not compiled javascripts files
│   │   └── appliction.js       # Entry point for js file
│   └── /stylessheets/          # Not compiled stylessheets files
│       └── appliction.css      # Entry point for css file
│
├── /public/                    # Brunch builded and compiled project files
│   ├── /images/                # Images copied folder
│   ├── /.. other ../           # Other static folders
│   ├── /javascripts/           # Project javascript files
│   │   ├── vendor.js           # Vendor javascript
│   │   └── application.js      # Main javascript file
│   ├── /stylesheets/           # Project stylesheet files
│   │   ├── vendor.css          # Vendor styles
│   │   └── appliction.css      # Main css file
│   ├── favicon.ico             # Project favicon
│   └── index.html              # Builded index page
│
├── /build/                     # Production files
│
├── /node_modules/              # Node (Brunch) 3rd-party libraries
│
│── package.json                # The list of Node (Brunch) 3rd party libraries
│── brunch-config.js            # Brunch config for project
│── README.md                   # Project description
│── LICENSE                     # License
│── .editorconfig               # Global editor config
│── .eslintrc.json              # Eslint config
│── .flowconfig                 # Flow config
└── .gitignore                  # Git ignored files
```

### Commands

`development` - Run development server

`build`       - Create build for production

`lint`        - Linting of code

`flow`        - Check flow errors

## Requirements

  You need to install [Node](https://nodejs.org/en/),[Flow](https://flowtype.org/)

## Installation

  `git clone https://github.com/khusnetdinov/reactor.js`

  `cd reactor.js`

  `npm install`

  `npm run development`

# License

### This code is free to use under the terms of the MIT license.

  Permission is hereby granted, free of charge, to any person obtaining
  a copy of this software and associated documentation files (the
  "Software"), to deal in the Software without restriction, including
  without limitation the rights to use, copy, modify, merge, publish,
  distribute, sublicense, and/or sell copies of the Software, and to
  permit persons to whom the Software is furnished to do so, subject to
  the following conditions:

  The above copyright notice and this permission notice shall be included
  in all copies or substantial portions of the Software.

  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
  EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
  MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
  IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
  CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
  TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
  SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

