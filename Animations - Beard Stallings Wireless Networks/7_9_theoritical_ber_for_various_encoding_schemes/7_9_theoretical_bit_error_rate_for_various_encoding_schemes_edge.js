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
                id: 'axis',
                display: 'none',
                type: 'image',
                rect: ['88px', '90px','413px','369px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"axis.png",'0px','0px']
            },
            {
                id: 'Text',
                display: 'none',
                type: 'text',
                rect: ['351px', '167px','auto','auto','auto', 'auto'],
                text: "ASK, BFSK",
                font: ['Times New Roman, Times, serif', [94, "%"], "rgba(0,0,0,1)", "700", "none", ""]
            },
            {
                id: 'Text5',
                display: 'none',
                type: 'text',
                rect: ['491px', '186','auto','auto','auto', 'auto'],
                text: " Simple amplitude and<br>binary frequency-shift<br>keying. ",
                align: "left",
                font: ['Times New Roman, Times, serif', [94, "%"], "rgba(0,0,0,1)", "700", "none", "normal"]
            },
            {
                id: 'Text6',
                display: 'none',
                type: 'text',
                rect: ['491px', '263px','auto','auto','auto', 'auto'],
                text: "Differential phase shift <br>keying is simple and<br>performs better.",
                align: "left",
                font: ['\'Times New Roman\', Times, serif', [94, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: 'Text7',
                display: 'none',
                type: 'text',
                rect: ['483px', '230px','auto','auto','auto', 'auto'],
                text: "BPSK requires accurate <br>local oscillator phase <br>match at the receiver<br>but provides lower BER <br>with least signal energy.",
                align: "left",
                font: ['\'Times New Roman\', Times, serif', [94, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: 'Text8',
                display: 'block',
                type: 'text',
                rect: ['146px', '495px','auto','auto','auto', 'auto'],
                text: "Click or Touch on Figure for Each Step of the Animation",
                align: "left",
                font: ['\'Times New Roman\', Times, serif', [94, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: 'Text9',
                type: 'text',
                rect: ['20px', '494px','auto','auto','auto', 'auto'],
                text: "Figure 7.9 Theoretical Bit Error Rate for Various Encoding Schemes",
                align: "left",
                font: ['\'Times New Roman\', Times, serif', [119, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: 'Text2',
                display: 'none',
                type: 'text',
                rect: ['182px', '216px','auto','auto','auto', 'auto'],
                text: "DPSK",
                align: "left",
                font: ['\'Times New Roman\', Times, serif', [94, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: 'Text3',
                display: 'none',
                type: 'text',
                rect: ['275px', '253px','auto','auto','auto', 'auto'],
                text: "BPSK",
                align: "left",
                font: ['\'Times New Roman\', Times, serif', [94, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: '_79-purplecurve',
                display: 'none',
                type: 'image',
                rect: ['169px', '114px','322px','298px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"7.9-purplecurve.png",'0px','0px']
            },
            {
                id: '_79-redcurves2',
                display: 'none',
                type: 'image',
                rect: ['162px', '129px','264px','281px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"7.9-redcurves.png",'0px','0px']
            },
            {
                id: 'arrow12',
                display: 'none',
                type: 'image',
                rect: ['197px', '150px','31px','63px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"arrow1.png",'0px','0px'],
                transform: [[],['40']]
            },
            {
                id: '_79-greencurves2',
                display: 'none',
                type: 'image',
                rect: ['169px', '145px','251px','274px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"7.9-greencurves.png",'0px','0px']
            }],
            symbolInstances: [

            ]
        },
    states: {
        "Base State": {
            "${_Text7}": [
                ["style", "top", '230px'],
                ["style", "left", '483px'],
                ["style", "display", 'none']
            ],
            "${_Text8}": [
                ["style", "top", '459px'],
                ["style", "left", '141px'],
                ["style", "display", 'block']
            ],
            "${_Text3}": [
                ["style", "top", '-36px'],
                ["style", "left", '270px'],
                ["style", "display", 'none']
            ],
            "${_arrow12}": [
                ["style", "top", '96px'],
                ["transform", "scaleY", '-0.12288'],
                ["transform", "rotateZ", '40deg'],
                ["style", "height", '63px'],
                ["style", "left", '177px'],
                ["style", "display", 'none']
            ],
            "${_Text5}": [
                ["style", "font-weight", '700'],
                ["style", "display", 'none'],
                ["style", "font-family", 'Times New Roman, Times, serif'],
                ["style", "left", '491px'],
                ["style", "font-size", '94%']
            ],
            "${_axis}": [
                ["style", "top", '36px'],
                ["style", "left", '68px'],
                ["style", "display", 'none']
            ],
            "${__79-purplecurve}": [
                ["style", "top", '60px'],
                ["style", "left", '149px'],
                ["style", "display", 'none']
            ],
            "${__79-redcurves2}": [
                ["style", "top", '75px'],
                ["style", "left", '142px'],
                ["style", "display", 'none']
            ],
            "${_Text}": [
                ["style", "top", '-36px'],
                ["style", "font-weight", '700'],
                ["style", "display", 'none'],
                ["style", "font-family", 'Times New Roman, Times, serif'],
                ["style", "left", '355px'],
                ["style", "font-size", '94%']
            ],
            "${_Text6}": [
                ["style", "top", '263px'],
                ["style", "left", '491px'],
                ["style", "display", 'none']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(255,255,255,1)'],
                ["style", "overflow", 'hidden'],
                ["style", "height", '550px'],
                ["style", "width", '650px']
            ],
            "${_Text9}": [
                ["style", "top", '494px'],
                ["style", "left", '20px'],
                ["style", "font-size", '119%']
            ],
            "${_Text2}": [
                ["style", "top", '-36px'],
                ["style", "left", '149px'],
                ["style", "display", 'none']
            ],
            "${__79-greencurves2}": [
                ["style", "top", '91px'],
                ["style", "left", '149px'],
                ["style", "display", 'none']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 6385,
            autoPlay: true,
            timeline: [
                { id: "eid77", tween: [ "style", "${__79-redcurves2}", "display", 'block', { fromValue: 'none'}], position: 2250, duration: 0 },
                { id: "eid72", tween: [ "style", "${_Text3}", "display", 'block', { fromValue: 'none'}], position: 4847, duration: 0 },
                { id: "eid80", tween: [ "transform", "${_arrow12}", "scaleY", '1', { fromValue: '-0.12288'}], position: 3305, duration: 500 },
                { id: "eid69", tween: [ "style", "${_Text2}", "display", 'block', { fromValue: 'none'}], position: 2250, duration: 0 },
                { id: "eid81", tween: [ "style", "${__79-greencurves2}", "display", 'block', { fromValue: 'none'}], position: 4600, duration: 0 },
                { id: "eid9", tween: [ "style", "${_Text5}", "display", 'block', { fromValue: 'none'}], position: 1750, duration: 0 },
                { id: "eid10", tween: [ "style", "${_Text5}", "display", 'none', { fromValue: 'block'}], position: 2000, duration: 0 },
                { id: "eid71", tween: [ "style", "${_Text2}", "top", '165px', { fromValue: '-36px'}], position: 2250, duration: 800 },
                { id: "eid50", tween: [ "style", "${_Text7}", "display", 'block', { fromValue: 'none'}], position: 5912, duration: 0 },
                { id: "eid51", tween: [ "style", "${_Text7}", "display", 'none', { fromValue: 'block'}], position: 6122, duration: 0 },
                { id: "eid38", tween: [ "style", "${_Text6}", "display", 'block', { fromValue: 'none'}], position: 4110, duration: 0 },
                { id: "eid39", tween: [ "style", "${_Text6}", "display", 'none', { fromValue: 'block'}], position: 4365, duration: 0 },
                { id: "eid68", tween: [ "style", "${_Text}", "top", '137px', { fromValue: '-36px'}], position: 750, duration: 800 },
                { id: "eid76", tween: [ "style", "${__79-purplecurve}", "display", 'block', { fromValue: 'none'}], position: 500, duration: 0 },
                { id: "eid55", tween: [ "style", "${_Text8}", "display", 'none', { fromValue: 'block'}], position: 6385, duration: 0 },
                { id: "eid74", tween: [ "style", "${_Text3}", "top", '221px', { fromValue: '-36px'}], position: 4847, duration: 800 },
                { id: "eid66", tween: [ "style", "${_Text}", "display", 'block', { fromValue: 'none'}], position: 750, duration: 0 },
                { id: "eid75", tween: [ "style", "${_axis}", "display", 'block', { fromValue: 'none'}], position: 200, duration: 0 },
                { id: "eid78", tween: [ "style", "${_arrow12}", "display", 'block', { fromValue: 'none'}], position: 3305, duration: 0 }            ]
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
})(jQuery, AdobeEdge, "EDGE-26116182");
