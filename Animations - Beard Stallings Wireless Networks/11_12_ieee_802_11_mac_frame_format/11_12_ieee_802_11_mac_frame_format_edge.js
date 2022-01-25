/**
 * Adobe Edge: symbol definitions
 */
(function($, Edge, compId){
//images folder
var im='images/';

var fonts = {};
var opts = {
    'gAudioPreloadPreference': 'auto',

    'gVideoPreloadPreference': 'auto'
};
var resources = [
];
var symbols = {
"stage": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "both",
    centerStage: "both",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
            {
                id: 'Text',
                display: 'none',
                type: 'text',
                rect: ['273px', '72px','auto','auto','auto', 'auto'],
                text: "Variable-sized MAC frame - Fixed header and trailer; variable data.",
                font: ['Times New Roman, Times, serif', [94, "%"], "rgba(0,0,0,1)", "700", "none", ""]
            },
            {
                id: 'frame-field2',
                display: 'none',
                type: 'image',
                rect: ['357px', '522px','172px','37px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"frame-field.png",'0px','0px']
            },
            {
                id: 'Text2',
                display: 'none',
                type: 'text',
                rect: ['557px', '329px','auto','auto','auto', 'auto'],
                text: "Bits of the 2 octet frame control [FC] field.",
                align: "left",
                font: ['\'Times New Roman\', Times, serif', [94, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: 'Text3',
                display: 'block',
                type: 'text',
                rect: ['264px', '611px','auto','auto','auto', 'auto'],
                text: "Click or Touch on Figure for Each Step of the Animation",
                align: "center",
                font: ['\'Times New Roman\', Times, serif', [94, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: 'Text4',
                type: 'text',
                rect: ['255px', '656px','auto','auto','auto', 'auto'],
                text: "Figure 11.12 IEEE 802.11 MAC Frame  Format",
                align: "center",
                font: ['\'Times New Roman\', Times, serif', [119, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: 'mac-frame-heading2',
                display: 'none',
                type: 'image',
                rect: ['372px', '278px','135px','39px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"mac-frame-heading.png",'0px','0px']
            },
            {
                id: 'frame12',
                display: 'none',
                type: 'image',
                rect: ['130px', '123px','678px','58px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"frame1.png",'0px','0px']
            },
            {
                id: 'frame-length2',
                display: 'none',
                type: 'image',
                rect: ['117px', '164px','689px','54px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"frame-length.png",'0px','0px']
            },
            {
                id: 'always-present-text2',
                display: 'none',
                type: 'image',
                rect: ['556px', '208px','114px','18px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"always-present-text.png",'0px','0px']
            },
            {
                id: 'frame222',
                display: 'none',
                type: 'image',
                rect: ['123px', '122px','680px','61px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"frame22.png",'0px','0px']
            },
            {
                id: 'present-in-some2',
                display: 'none',
                type: 'image',
                rect: ['539px', '231px','247px','55px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"present-in-some.png",'0px','0px']
            },
            {
                id: 'complete-frame2',
                display: 'none',
                type: 'image',
                rect: ['134px', '125px','674px','53px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"complete-frame.png",'0px','0px']
            },
            {
                id: 'octets2',
                display: 'none',
                type: 'image',
                rect: ['86px', '105px','707px','43px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"octets.png",'0px','0px']
            },
            {
                id: 'naming2',
                display: 'none',
                type: 'image',
                rect: ['126px', '200px','443px','73px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"naming.png",'0px','0px']
            },
            {
                id: 'arrow',
                display: 'none',
                type: 'image',
                rect: ['249px', '272px','425px','10px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"arrow.png",'0px','0px'],
                transform: [[],['-160'],[],['1.44705']]
            },
            {
                id: 'arrow2',
                display: 'none',
                type: 'image',
                rect: ['-51px', '272px','425px','10px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"arrow.png",'0px','0px'],
                transform: [[],['-98'],[],['0.49768']]
            },
            {
                id: 'naming-22',
                display: 'none',
                type: 'image',
                rect: ['141px', '436px','450px','95px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"naming-2.png",'0px','0px']
            },
            {
                id: 'frame-32',
                display: 'none',
                type: 'image',
                rect: ['126px', '356px','653px','75px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"frame-3.png",'0px','0px']
            }],
            symbolInstances: [

            ]
        },
    states: {
        "Base State": {
            "${_always-present-text2}": [
                ["style", "top", '208px'],
                ["style", "left", '925px'],
                ["style", "display", 'none']
            ],
            "${_octets2}": [
                ["style", "top", '-70px'],
                ["style", "left", '86px'],
                ["style", "display", 'none']
            ],
            "${_mac-frame-heading2}": [
                ["style", "top", '278px'],
                ["style", "left", '372px'],
                ["style", "display", 'none']
            ],
            "${_Text2}": [
                ["style", "top", '329px'],
                ["style", "left", '557px'],
                ["style", "display", 'none']
            ],
            "${_frame222}": [
                ["style", "top", '-70px'],
                ["style", "left", '123px'],
                ["style", "display", 'none']
            ],
            "${_arrow2}": [
                ["style", "top", '272px'],
                ["transform", "rotateZ", '-98deg'],
                ["transform", "scaleX", '-0.01969'],
                ["style", "left", '-51px'],
                ["style", "display", 'none']
            ],
            "${_naming2}": [
                ["style", "top", '200px'],
                ["style", "left", '126px'],
                ["style", "display", 'none']
            ],
            "${_present-in-some2}": [
                ["style", "display", 'none'],
                ["style", "left", '925px'],
                ["style", "top", '226px']
            ],
            "${_frame-32}": [
                ["style", "top", '356px'],
                ["style", "left", '126px'],
                ["style", "display", 'none']
            ],
            "${_frame-length2}": [
                ["style", "top", '-70px'],
                ["style", "left", '117px'],
                ["style", "display", 'none']
            ],
            "${_frame-field2}": [
                ["style", "top", '522px'],
                ["style", "left", '357px'],
                ["style", "display", 'none']
            ],
            "${_complete-frame2}": [
                ["style", "top", '125px'],
                ["style", "left", '134px'],
                ["style", "display", 'none']
            ],
            "${_Text4}": [
                ["style", "top", '656px'],
                ["style", "text-align", 'center'],
                ["style", "left", '255px'],
                ["style", "font-size", '119%']
            ],
            "${_Text}": [
                ["style", "top", '72px'],
                ["style", "font-weight", '700'],
                ["style", "display", 'none'],
                ["style", "font-family", 'Times New Roman, Times, serif'],
                ["style", "left", '273px'],
                ["style", "font-size", '94%']
            ],
            "${_frame12}": [
                ["style", "top", '-70px'],
                ["style", "left", '130px'],
                ["style", "display", 'none']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(255,255,255,1)'],
                ["style", "overflow", 'hidden'],
                ["style", "height", '750px'],
                ["style", "width", '900px']
            ],
            "${_naming-22}": [
                ["style", "top", '436px'],
                ["style", "left", '141px'],
                ["style", "display", 'none']
            ],
            "${_arrow}": [
                ["style", "top", '272px'],
                ["transform", "rotateZ", '-160deg'],
                ["transform", "scaleX", '0.03665'],
                ["style", "left", '249px'],
                ["style", "display", 'none']
            ],
            "${_Text3}": [
                ["style", "top", '635px'],
                ["style", "text-align", 'center'],
                ["style", "left", '264px'],
                ["style", "display", 'block']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 11000,
            autoPlay: true,
            timeline: [
                { id: "eid45", tween: [ "style", "${_frame12}", "display", 'block', { fromValue: 'none'}], position: 500, duration: 0 },
                { id: "eid72", tween: [ "style", "${_arrow}", "display", 'block', { fromValue: 'none'}], position: 7750, duration: 0 },
                { id: "eid81", tween: [ "style", "${_arrow}", "display", 'none', { fromValue: 'block'}], position: 9750, duration: 0 },
                { id: "eid71", tween: [ "style", "${_frame-field2}", "display", 'block', { fromValue: 'none'}], position: 7500, duration: 0 },
                { id: "eid51", tween: [ "style", "${_always-present-text2}", "display", 'block', { fromValue: 'none'}], position: 2700, duration: 0 },
                { id: "eid80", tween: [ "style", "${_frame-32}", "display", 'block', { fromValue: 'none'}], position: 9500, duration: 0 },
                { id: "eid70", tween: [ "style", "${_naming2}", "display", 'block', { fromValue: 'none'}], position: 6700, duration: 0 },
                { id: "eid60", tween: [ "style", "${_present-in-some2}", "display", 'block', { fromValue: 'none'}], position: 4750, duration: 0 },
                { id: "eid79", tween: [ "transform", "${_arrow2}", "scaleX", '0.49768', { fromValue: '-0.01969'}], position: 7750, duration: 1500 },
                { id: "eid48", tween: [ "style", "${_frame-length2}", "display", 'block', { fromValue: 'none'}], position: 1600, duration: 0 },
                { id: "eid76", tween: [ "transform", "${_arrow}", "scaleX", '1.44705', { fromValue: '0.03665'}], position: 7750, duration: 1500 },
                { id: "eid69", tween: [ "style", "${_octets2}", "top", '105px', { fromValue: '-70px'}], position: 5850, duration: 600 },
                { id: "eid44", tween: [ "style", "${_mac-frame-heading2}", "display", 'block', { fromValue: 'none'}], position: 250, duration: 0 },
                { id: "eid83", tween: [ "style", "${_naming-22}", "display", 'block', { fromValue: 'none'}], position: 10000, duration: 0 },
                { id: "eid43", tween: [ "style", "${_Text3}", "display", 'none', { fromValue: 'block'}], position: 10750, duration: 0 },
                { id: "eid41", tween: [ "style", "${_Text2}", "display", 'block', { fromValue: 'none'}], position: 10250, duration: 0 },
                { id: "eid42", tween: [ "style", "${_Text2}", "display", 'none', { fromValue: 'block'}], position: 10500, duration: 0 },
                { id: "eid58", tween: [ "style", "${_frame222}", "top", '122px', { fromValue: '-70px'}], position: 3750, duration: 800 },
                { id: "eid47", tween: [ "style", "${_frame12}", "top", '123px', { fromValue: '-70px'}], position: 500, duration: 800 },
                { id: "eid63", tween: [ "style", "${_present-in-some2}", "left", '546px', { fromValue: '925px'}], position: 4750, duration: 600 },
                { id: "eid67", tween: [ "style", "${_octets2}", "display", 'block', { fromValue: 'none'}], position: 5850, duration: 0 },
                { id: "eid50", tween: [ "style", "${_frame-length2}", "top", '164px', { fromValue: '-70px'}], position: 1600, duration: 800 },
                { id: "eid55", tween: [ "style", "${_always-present-text2}", "left", '556px', { fromValue: '925px'}], position: 2700, duration: 800 },
                { id: "eid56", tween: [ "style", "${_frame222}", "display", 'block', { fromValue: 'none'}], position: 3750, duration: 0 },
                { id: "eid87", tween: [ "style", "${_Text3}", "top", '635px', { fromValue: '635px'}], position: 7113, duration: 0 },
                { id: "eid25", tween: [ "style", "${_Text}", "display", 'block', { fromValue: 'none'}], position: 6950, duration: 0 },
                { id: "eid26", tween: [ "style", "${_Text}", "display", 'none', { fromValue: 'block'}], position: 7250, duration: 0 },
                { id: "eid66", tween: [ "style", "${_complete-frame2}", "display", 'block', { fromValue: 'none'}], position: 5600, duration: 0 },
                { id: "eid77", tween: [ "style", "${_arrow2}", "display", 'block', { fromValue: 'none'}], position: 7750, duration: 0 },
                { id: "eid82", tween: [ "style", "${_arrow2}", "display", 'none', { fromValue: 'block'}], position: 9750, duration: 0 }            ]
        }
    }
}
};


Edge.registerCompositionDefn(compId, symbols, fonts, resources, opts);

/**
 * Adobe Edge DOM Ready Event Handler
 */
$(window).ready(function() {
     Edge.launchComposition(compId);
});
})(jQuery, AdobeEdge, "EDGE-50689329");
