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
        children: ["mj-accordion", "mj-button"]
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
            children: []
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
        children: []
    }
};

export default mjmlSchema;
