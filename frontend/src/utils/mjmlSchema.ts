const mjmlSchema = 
    {
    "!top": ["mjml"],
    "!attrs": {
        id: null,
        class: []
    },
    mjml: {
        attrs: {
            owa: "",
            lang: "",
            dir: ""
        },
        children: ["mj-head", "mj-body"]
    },
    "mj-head": {
        attrs: {},
        children: ["mj-attributes", "mj-breakpoint", "mj-font", "mj-html-attributes", "mj-preview", "mj-style", "mj-title"]
    },

    "mj-attributes": {
        attrs: {},
        children: []
    },
    "mj-breakpoint": {
        attrs: {
            width: ["px"]
        }
    },
    "mj-font": {
        attrs: {
            href: "",
            name: ""
        }
    },
    "mj-html-attributes": {
        children: []
    },
    "mj-preview": {},
    "mj-style": {
        attrs: {
            inline: ["inline"]
        }
    },
    "mj-title": {},
    "mj-body": {
        attrs: {
            "background-color": "",
            "css-class": "",
            width: ["600px"]
        },
        children: [
            "mj-accordion", 
            "mj-button", 
            "mj-carousel",
            "mj-column",
            "mj-divider",
            "mj-group",
            "mj-hero",
            "mj-image",
            "mj-navbar",
            "mj-raw",
            "mj-section",
            "mj-social",
            "mj-spacer",
            "mj-table",
            "mj-text",
            "mj-wrapper"
        ]
    },
    "mj-accordion": {
        attrs: {
            border: ["2px solid black"],
            "container-background-color": "",
            "css-class": "",
            "font-family": ["Ubuntu, Helvetica, Arial, sans-serif"],
            "icon-align": ["middle"],
            "icon-height": ["32px"],
            "icon-position": ["right"],
            "icon-unwrapped-alt": "-",
            "icon-unwrapped-url": ["https://i.imgur.com/w4uTygT.png"],
                "icon-width": ["32px"],
            "icon-wrapped-alt": "+",
            "icon-wrapped-url": ["https://i.imgur.com/bIXv1bk.png"]
        },
            children: ["mj-accordion-element", "mj-accordion-title", "mj-accordion-text"]
    },
    "mj-accordion-element": {
        attrs: {
            "background-color": "",
            border: "",
            "css-class": "",
            "font-family": ["Ubuntu, Helvetica, Arial, sans-serif"],
            "icon-align": ["middle"],
            "icon-height": ["32px"],
            "icon-position": ["right"],
            "icon-unwrapped-alt": ["-"],
            "icon-unwrapped-url": ["https://i.imgur.com/w4uTygT.png"],
            "icon-width": ["32px"],
            "icon-wrapped-al": ["+"],
            "icon-wrapped-url": ["https://i.imgur.com/bIXv1bk.png"]
        }
    },
    "mj-accordion-title": {
        attrs: {
            "background-color": "",
            color: "",
            "css-class": "",
            "font-family": ["Ubuntu, Helvetica, Arial, sans-serif"],
            "font-size": ["13px"],
            padding: ["16px"],
            "padding-bottom": "",
            "padding-left": "",
            "padding-rigth": "",
            "padding-top": ""
        }
    },
    "mj-accordion-text": {
        attrs: {
            "background-color": "",
            color: "",
            "css-class": "",
            "font-family": ["Ubuntu, Helvetica, Arial, sans-serif"],
            "font-size": ["13px"],
            "font-weight": "",
            "letter-spacing": ["none"],
            "line-height": [1],
            padding: ["16px"],
            "padding-bottom": "",
            "padding-left": "",
            "padding-right": "",
            "padding-top": ""
        }
    },
    "mj-button": {
        attrs: {
            align: ["center"],
            "background-color": ["#414141"],
            border: ["none"],
            "border-bottom": "",
            "border-left": "",
            "border-radius": ["3px"],
            "border-right": "",
            "border-top": "",
            color: ["#FFFFFF"],
            "container-background-color": "",
            "css-class": "",
            "font-family": ["Ubuntu, Helvetica, Arial, sans-serif"],
            "font-size": ["13px"],
            "font-style": "",
            "font-weight": ["normal"],
            height: "",
            href: "",
            "inner-padding": ["10px 25px"],
            "letter-spacing": "",
            "line-height": ["120%"],
            padding: ["10px 25px"],
            "padding-bottom": "",
            "padding-left": "",
            "padding-right": "",
            "padding-top": "",
            rel: "",
            target: ["_blank"],
            "text-align": ["none"],
            "text-decoration": ["none"],
            "text-transform": ["none"],
            title: "",
            "vertical-align": ["middle"],
            width: ""
        }
    },
    "mj-carousel": {
        attrs: {
            align: ["center"],
            "container-background-color": ["none"],
            "border-radius": "",
            "css-class": "",
            "icon-width": ["44px"],
            "left-icon": ["https://i.imgur.com/xTh3hln.png"],
                "right-icon": ["https://i.imgur.com/xTh3hln.png"],
            "tb-border": ["none"],
            "tb-border-radius": ["none"],
            "tb-hover-border-color": ["none"],
            "tb-selected-border-color": ["none"],
            "tb-width": "",
            thumbnails: ["visible", "hidden"]
        },
        children: ["mj-carousel-image"]
    },
    "mj-carousel-image":{
        attrs: {
            alt: "",
            "css-class": "",
            href: "",
            rel: "",
            src: "",
            target: ["_blank"],
            "thumbnails-src": "",
            title: ""
        }
    },
    "mj-column": {
        attrs: {
            "background-color": "",
            "inner-background-color": "",
            border: ["none"],
            "border-bottom": "",
            "border-left": "",
            "border-right": "",
            "border-top": "",
            "border-radius": "",
            "inner-border": "",
            "inner-border-bottom": "",
            "inner-border-left": "",
            "inner-border-right": "",
            "inner-border-top": "",
            "inner-border-radius": "",
            width: "",
            "vertical-align": ["top"],
            padding: "",
            "padding-top": "",
            "padding-bottom": "",
            "padding-left": "",
            "padding-right": "",
            "css-class": "",
        },
        children: [
            "mj-accordion", 
            "mj-button", 
            "mj-carousel",
            "mj-divider",
            "mj-image",
            "mj-navbar",
            "mj-social",
            "mj-spacer",
            "mj-table",
            "mj-text"
        ]
    },
    "mj-divider": {
        attrs: {
            align: ["left","center","right"],
            "border-color": ["#000000"],
            "border-style": ["dashed", "dotted", "solid"],
            "border-width": ["4px"],
            "container-background-color": "",
            "css-class": "",
            padding: ["10px 25px"],
            "padding-bottom": "",
            "padding-left": "",
            "padding-right": "",
            "padding-top": "",
            width: ["100%"]
        }
    },
    "mj-group": {
        attrs: {
            width: "",
            "vertical-align": ["bottom", "middle", "top"],
            "background-color": "",
            "direction": ["ltr", "rtl"],
            "css-class": ""
        },
        children: ["mj-column"]
    },
    "mj-hero": {
        attrs: {
            "background-color": ["#FFFFFF"],
            "background-height": ["none"],
            "background-position": ["top", "center", "bottom", "left", "center", "right"],
            "background-url": "",
            "background-width": "",
            "border-radius": "",
            "height": ["0px"],
            "mode": ["fluid-height", "fixed-height"],
            padding: ["0px"],
            "padding-bottom": ["0px"],
            "padding-left": ["0px"],
            "padding-right": ["0px"],
            "padding-top": ["0px"],
            "vertical-align": ["top", "middle", "bottom"]
        },
        children: ["mj-button", "mj-text"]
    },
    "mj-image": {
        attrs: {
            align: ["center"],
            alt: "",
            border: ["none"],
            "border-top": ["none"],
            "border-bottom": ["none"],
            "border-left": ["none"],
            "border-right": ["none"],
            "border-radius": "",
            "container-background-color": "",
            "css-class": "",
            "fluid-on-mobile": "",
            height: ["auto"],
            href: "",
            name: "",
            padding: ["10px 25px"],
            "padding-bottom": "",
            "padding-left": "",
            "padding-right": "",
            "padding-top": "",
            rel: "",
            sizes: "",
            src: "",
            srcset: "",
            target: ["_blank"],
            title: "",
            usemap: "",
            width: ""
        }
    },
    "mj-navbar": {
        attrs: {
            align: ["left", "center", "right"],
            "base-url": "",
            "css-class": "",
            hamburger: "",
            "ico-align": ["left", "center", "right"],
            "ico-close": ["8855"],
            "ico-color": ["#000000"],
            "ico-font-family": ["ubuntu, helvetica, arial, sans-serif"],
            "ico-font-size": ["30px"],
            "ico-line-heght": ["30px"],
            "ico-open": ["9776"],
            "ico-padding": ["10px"],
            "ico-padding-bottom": ["10px"],
            "ico-padding-left": ["10px"],
            "ico-padding-right": ["10px"],
            "ico-padding-top": ["10px"],
            "ico-text-decoration": ["none"],
            "ico-text-transform": ["none"]
        },
        children: ["mj-navbar-link"]
    },
    "mj-navbar-link": {
        attrs: {
            color: ["#000000"],
            "css-class": "",
            "font-family": ["Ubuntu, Helvetica, Arial, sans-serif"],
            "font-size": ["13px"],
            href: "",
            "letter-spacing": "",
            "line-height": ["22px"],
            padding: ["15px 10px"],
            "padding-bottom": "",
            "padding-left": "",
            "padding-right": "",
            "padding-top": "",
            rel: "",
            target: "",
            "text-decoration": "",
            "text-transform": ["capitalize", "uppercase", "lowercase", "none"],
        }
    },
    "mj-raw": {},
    "mj-section": {
        attrs: {
            "background-color": "",
            "background-position": ["top center"],
            "background-position-x": ["none"],
            "background-position-y": ["none"],
            "background-repeat": ["repeat"],
            "background-size": ["auto"],
            "background-url": "",
            border: ["none"],
            "border-bottom": "",
            "border-left": "",
            "bordder-radius": "",
            "border-right": "",
            "border-top": "",
            "css-class": "",
            direction: ["ltr", "rtl"],
            "full-width": "",
            padding: ["20px 0"],
            "padding-bottom": "",
            "padding-left": "",
            "padding-right": "",
            "padding-top": "",
            "text-align": ["center"]
        },
        children: ["mj-column", "mj-group"]
    },
    "mj-social": {
        attrs: {
            align: ["left", "right", "center"],
            "border-radius": ["3px"],
            color: ["#333333"],
            "css-class": "",
            "container-background-color": "",
            "font-family": ["Ubuntu, Helvetica, Arial, sans-serif"],
            "font-size": ["13px"],
            "font-style": ["normal"],
            "font-weight": ["normal"],
            "icon-height": "",
            "icon-size": ["20px"],
            "inner-padding": ["4px"],
            "line-height": ["22px"],
            mode: ["horizontal"],
            padding: ["10px 25px"],
            "padding-bottom": "",
            "padding-left": "",
            "padding-right": "",
            "padding-top": "",
            "icon-padding": ["0px"],
            "text-padding": ["4px 4px 4px 0"],
            "text-decoration": ["none"]
        },
        children: ["mj-social-element"]
    },
    "mj-social-element": {
       attrs: {
           align: ["left", "right", "center"],
           alt: ["none"],
           "background-color": "",
           "border-radius": ["3px"],
           color: ["#333333"],
           "css-class": "",
           "font-family": ["Ubuntu, Helvetica, Arial, sans-serif"],
           "font-size": ["13px"],
           "font-style": ["normal"],
           "font-weight": ["normal"],
           href: ["none"],
           "icon-height": "",
           "icon-size": ["20px"],
           "line-height": ["22px"],
           name: [
               "facebook", 
               "twitter", 
               "google", 
               "pintarest", 
               "linkedin", 
               "tumblr", 
               "xing",
               "github",
               "instagram",
               "web",
               "snapchat",
               "youtube",
               "vimeo",
               "medium",
               "soundcloud",
               "dribble"
           ],
           padding: ["4px"],
           "padding-bottom": "",
           "padding-left": "",
           "padding-right": "",
           "padding-top": "",
           "icon-padding": ["0px"],
           "text-padding": ["4px 4px 4px 0"],
           sizes: "",
           src: "",
           srcset: "",
           rel: "",
           target: ["_blank"],
           title: ["none"],
           "text-decoration": ["underline", "overline", "none"],
           "vertical-align": ["top", "middle", "bottom"]
       }
    },
    "mj-spacer": {
        attrs: {
            "container-background-color": "",
            "css-class": "",
            height: ["20px"],
            padding: ["none"],
            "padding-bottom": "",
            "padding-left": "",
            "padding-right": "",
            "padding-top": ""
        }
    },
    "mj-table": {
        attrs: {
            align: ["left", "right", "center"],
            border: ["none"],
            cellpadding: "",
            callspacing: "",
            color: ["#000000"],
            "container-background-color": "",
            "css-class": "",
            "font-family": ["Ubuntu, Helvetica, Arial, sans-serif"],
            "font-size": ["13px"],
            "line-height": ["22px"],
            padding: ["10px 25px"],
            "padding-bottom": "",
            "padding-left": "",
            "padding-right": "",
            "padding-top": "",
            role: "",
            "table-layout": ["auto", "fixed", "initial", "inherit"],
            width: ["100%"]
        }
    },
    "mj-text": {
        attrs: {
            color: ["#000000"],
            "font-family": ["Ubuntu, Helvetica, Arial, sans-serif"],
            "font-size": ["13px"],
            "font-style": ["normal", "italic", "oblique"],
            "font-weight": "",
            "line-height": ["1"],
            "letter-spacing": ["none"],
            height: "",
            "text-decoration": "",
            "text-transform": "",
            align: ["left", "right", "center", "justify"],
            "container-background-color": "",
            padding: ["10px 25px"],
            "padding-top": "",
            "padding-bottom": "",
            "padding-left": "",
            "padding-right": "",
            "css-class": ""
        }
    },
    "mj-wrapper": {
        attrs: {
            "background-color": "",
            "background-position": ["top center"],
            "background-position-x": ["none"],
            "background-position-y": ["none"],
            "backgrond-repeat": ["repeat"],
            "background-size": ["auto"],
            "background-url": "",
            border: ["none"],
            "border-bottom": "",
            "border-left": "",
            "border-radius": "",
            "border-right": "",
            "border-top": "",
            "css-class": "",
            "full-width": "",
            padding: ["20px 0"],
            "padding-bottom": "",
            "padding-left": "",
            "padding-right": "",
            "padding-top": "",
            "text-align": ["center"]
        },
        children: ["mj-section"]
    },

};

export default mjmlSchema;
