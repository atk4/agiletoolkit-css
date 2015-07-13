# Agile CSS

Agile CSS is a modern web framework specifically designed for building
extensible and flexible Web UI for applications.

Here are some of the items which make Agile CSS stand out from other CSS
Frameworks:

 - Customization through LESS (CSS Extension)
   - define color swatches through LESS
   - define responsive viewports through Mixins
   - define sizing parameters through LESS
   - define base variables to control UI

Note: Once the above settings are defined, framework makes use of your
 settings by applying them on all the CSS elements. You also get to decide
 which units you want to use, if your layout will be flexible and how many
 columns you want in your grid system for each viewport (mobile, tablet, etc)

 - Extensibility through LESS
   - add more of your LESS code to define your own mix-ins
   - integrate with other frameworks

 - Strong implementation of various form styles
   - horizontal, vertical, stacked or minimal forms
   - combined form styles
   - field extensions

 - jQuery UI support
   - supports all 3rd party jQuery plugins which use jQuery UI styles

 - Integration with Agile Toolkit PHP
   - Add PHP code for your back-end that matches your theme
   - Your theme will work with all existing Agile Toolkit PHP apps


[More information on Agile CSS](framework/readme.md)
   
## Where is everything?

We are supplying you with a working "playground", which is already configured with one of our themes. Start by looking at the following files:

- [playground/index.html]() in your browser
- [playground/includes/]() for JADE sources on how to use Agile CSS in your HTML
- [playgnound/less/theme.less]() for example on how to create a theme
- [themes/]() for more themes

### Important Agile Toolkit CSS files

 - [framework/less/variables.less]() Default variables which you can override
 - [framework/less/widgets.less]() 
 
### Documentation

Most of the documentation is still work in progress, but there is the outline:

 - [docs/components.md]() Full list of "components" you can use
 - [docs/widgets.md]() Standard "widgets" created out of the components
 - [docs/forms.md]() How to build forms
 - [docs/swatches.md]() How to create color palette (swatches)
 - [docs/viewports.md]() How you can define Viewports (responsive design)
 - [docs/themes.md]() Everything you need to know about building custom theme
 
## Getting Started
 
One great way to use Agile CSS is to download it along with PHP framework from 
[http://agiletoolkit.org]().

If you do want to focus on HTML theme only you would need to set up JADE and LESS compiler (We recommend using CodeKit on Mac) as well as go through the following steps:

1. Clone Agile CSS inside any folder, e.g. `/Sites/agiletoolkit-css/`
1. Add `Sites/agiletoolkit-css/framework` as a "Framework" into CodeKit.
1. Create your own folder `/Sites/project` and also add it into Codekit as Project.
1. Copy files from `boilerplate/*` inside your "project"
1. OPTIONAL: Add `agiletoolkit-css/playground` as a "Project" into Codekit, if you want to change Agile CSS and submit contributions back.

Take a moment to test:

 - You should see playground at [http://localhost/agiletoolkit-css/playground/]()
 - Your project files should compile creating `index.html` and `theme.css`
 - You should see a test-page at [http://localhost/project]()
 
 
### Customizing Icons
 
Because each project would want to have a slightly different set of icons, you can customize your icons, but you can use a stardard configuration as a foundation:

1. go to [http://fontello.com]()
2. Drag `font/config.json` and drop it anywhere on the fontello.com page
3. Customize icons, add custom glyphs then download webfont
4. Replace your `font` folder with a new one
5. Replace your `css/fontello.css` with thethe new one

## License and Contributing to Agile CSS

Agile CSS has is distributed under MIT License, which means you can use it free of charge in
your project. As exchange we ask you to help us:

 - Share your `theme.less` with others for free when you are done
 - If you have developed any new Widgets, please email us at css@agiletoolkit.org, we might get them included into our standard distribution.
 - Give us a mention on twitter (#agile-css) or Facebook.
 - Send us your feedback.
 
 
## Community and Help

If you have any questions or would like to discuss Agile CSS, use Agile Toolkit forums: [http://forum.agiletoolkit.org]()

