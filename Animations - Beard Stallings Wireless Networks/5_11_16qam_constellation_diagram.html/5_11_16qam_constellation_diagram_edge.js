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
                id: '_7_11_16qam_constellation_diagram',
                display: 'none',
                type: 'image',
                rect: ['105px', '-21px','2124px','2124px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"7_11_16qam_constellation_diagram.png",'0px','0px']
            },
            {
                id: '_16qam3',
                display: 'none',
                type: 'image',
                rect: ['105px', '-11px','2152px','2136px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"16qam3.png",'0px','0px']
            },
            {
                id: 'Text',
                type: 'text',
                rect: ['471px', '2380px','auto','auto','auto', 'auto'],
                text: "Figure 5.11 16QAM Constellation diagram",
                font: ['Times New Roman, Times, serif', [475, "%"], "rgba(0,0,0,1)", "700", "none", ""]
            },
            {
                id: 'Text2',
                display: 'block',
                type: 'text',
                rect: ['474px', '2296px','auto','auto','auto', 'auto'],
                text: "Click or Touch on Figure for Each Step for Animation",
                align: "left",
                font: ['\'Times New Roman\', Times, serif', [375, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: 'arr',
                display: 'none',
                type: 'image',
                rect: ['1475px', '1441px','754px','120px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"arr.png",'0px','0px'],
                transform: [[],['-105'],[],['1.45089']]
            },
            {
                id: 'lastcomm',
                display: 'none',
                type: 'image',
                rect: ['1230px', '1956px','1232px','176px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"lastcomm.png",'0px','0px']
            }],
            symbolInstances: [

            ]
        },
    states: {
        "Base State": {
            "${_lastcomm}": [
                ["style", "top", '1956px'],
                ["style", "left", '1230px'],
                ["style", "display", 'none']
            ],
            "${_Text2}": [
                ["style", "display", 'block'],
                ["style", "top", '2296px'],
                ["style", "left", '474px'],
                ["style", "font-size", '375%']
            ],
            "${_Text}": [
                ["style", "top", '2380px'],
                ["style", "font-family", 'Times New Roman, Times, serif'],
                ["style", "font-weight", '700'],
                ["style", "left", '471px'],
                ["style", "font-size", '475%']
            ],
            "${_arr}": [
                ["style", "top", '1441px'],
                ["transform", "rotateZ", '-105deg'],
                ["transform", "scaleX", '1.45089'],
                ["style", "display", 'none'],
                ["style", "left", '1475px'],
                ["style", "width", '754px']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(255,255,255,1)'],
                ["style", "overflow", 'hidden'],
                ["style", "height", '2500px'],
                ["style", "width", '2500px']
            ],
            "${__7_11_16qam_constellation_diagram}": [
                ["style", "top", '-21px'],
                ["style", "left", '105px'],
                ["style", "display", 'none']
            ],
            "${__16qam3}": [
                ["style", "top", '-11px'],
                ["style", "left", '105px'],
                ["style", "display", 'none']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 820,
            autoPlay: true,
            timeline: [
                { id: "eid17", tween: [ "style", "${_arr}", "display", 'block', { fromValue: 'none'}], position: 545, duration: 0 },
                { id: "eid18", tween: [ "style", "${_arr}", "display", 'none', { fromValue: 'block'}], position: 820, duration: 0 },
                { id: "eid3", tween: [ "style", "${_Text2}", "display", 'none', { fromValue: 'block'}], position: 820, duration: 0 },
                { id: "eid4", tween: [ "style", "${__7_11_16qam_constellation_diagram}", "display", 'block', { fromValue: 'none'}], position: 820, duration: 0 },
                { id: "eid19", tween: [ "style", "${_lastcomm}", "display", 'block', { fromValue: 'none'}], position: 545, duration: 0 },
                { id: "eid20", tween: [ "style", "${_lastcomm}", "display", 'none', { fromValue: 'block'}], position: 820, duration: 0 },
                { id: "eid15", tween: [ "style", "${__16qam3}", "display", 'block', { fromValue: 'none'}], position: 250, duration: 0 },
                { id: "eid16", tween: [ "style", "${__16qam3}", "display", 'none', { fromValue: 'block'}], position: 820, duration: 0 }            ]
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
})(jQuery, AdobeEdge, "EDGE-692862803");
