# Sperax Docs UI

# Preview

-   Web Preview

[![web preview](https://raw.githubusercontent.com/PJijin/sperax_docs/main/preview.png 'web preview')]()

-   Mobile Bottom Bar

[![Mobile preview](https://raw.githubusercontent.com/PJijin/sperax_docs/main/preview_mobile.png 'Mobile preview')]()

# Live Demo

[https://sperax.vercel.app/](https://sperax.vercel.app/)

# Installation

1. Clone the repo
2. Run `yarn`
3. Run `yarn run dev`

# Features

-   Create documentaion in markdown format
-   Customize the home contents from the json file
-   Search article by title
-   Responsive UI

# Usage

-   Home Page

    -   Quick article - data/QuickArticle.ts
    -   Getting Started - data/GettingStarted.ts
    -   HeaderNav - data/HeaderNav.ts

-   Docs Page

    -   Sidebar menu - data/DocsMenu.ts

-   Docs
    docs/\* - Create md files in the docs folder. the file name will be used as the slug.
    Once new post is created you need to update it on the DocsMenu.ts

# Customize

-   Article style - styles/globals.css
