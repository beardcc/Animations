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
                id: 'circle',
                display: 'block',
                type: 'image',
                rect: ['0px', '11px','297px','264px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"circle.png",'0px','0px']
            },
            {
                id: 'Text6',
                display: 'block',
                type: 'text',
                rect: ['235px', '6px','188px','40px','auto', 'auto'],
                text: "Cellular systems are defined by geographic areas.",
                align: "left",
                font: ['\'Times New Roman\', Times, serif', [94, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: 'circle-2',
                display: 'block',
                type: 'image',
                rect: ['258px', '5px','297px','264px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"circle-2.png",'0px','0px']
            },
            {
                id: 'circle-3',
                display: 'block',
                type: 'image',
                rect: ['142px', '320px','297px','264px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"circle-3.png",'0px','0px']
            },
            {
                id: 'Text4',
                display: 'block',
                type: 'text',
                rect: ['393px', '289px','162px','54px','auto', 'auto'],
                text: "Conventional ad hoc systems cluster by non-overlapping areas.",
                align: "left",
                font: ['Times New Roman, Times, serif', [94, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: 'Text5',
                display: 'block',
                type: 'text',
                rect: ['20px', '313px','142px','107px','auto', 'auto'],
                text: "Bluetooth scatternets consist of several piconets that can overlap in the same geographic area.",
                align: "left",
                font: ['Times New Roman, Times, serif', [94, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: 'WNC_sample',
                type: 'image',
                rect: ['20px', '46px','509px','533px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"WNC_sample.png",'0px','0px']
            },
            {
                id: 'Text',
                type: 'text',
                rect: ['85px', '610px','auto','auto','auto', 'auto'],
                text: "Figure 12.3 Wireless Network Configurations",
                font: ['Times New Roman, Times, serif', [119, "%"], "rgba(0,0,0,1)", "700", "none", ""]
            },
            {
                id: 'Text2',
                display: 'block',
                type: 'text',
                rect: ['111px', '583px','auto','auto','auto', 'auto'],
                text: "Click or Touch on Figure for Each Step of the Animation.",
                align: "left",
                font: ['Times New Roman, Times, serif', [94, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
            }],
            symbolInstances: [

            ]
        },
    states: {
        "Base State": {
            "${_Text2}": [
                ["style", "top", '584px'],
                ["style", "display", 'block'],
                ["style", "font-family", 'Times New Roman, Times, serif'],
                ["style", "left", '85px'],
                ["style", "font-size", '94%']
            ],
            "${_Text5}": [
                ["style", "top", '313px'],
                ["style", "display", 'block'],
                ["style", "height", '107px'],
                ["style", "font-family", 'Times New Roman, Times, serif'],
                ["style", "left", '20px'],
                ["style", "width", '142px']
            ],
            "${_Text6}": [
                ["style", "display", 'block'],
                ["style", "width", '188px']
            ],
            "${_WNC_sample}": [
                ["style", "left", '20px'],
                ["style", "top", '46px']
            ],
            "${_Text}": [
                ["style", "top", '610px'],
                ["style", "font-weight", '700'],
                ["style", "font-family", 'Times New Roman, Times, serif'],
                ["style", "left", '85px'],
                ["style", "font-size", '119%']
            ],
            "${_circle-2}": [
                ["style", "top", '5px'],
                ["style", "left", '258px'],
                ["style", "display", 'block']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(255,255,255,1)'],
                ["style", "width", '550px'],
                ["style", "height", '640px'],
                ["style", "overflow", 'hidden']
            ],
            "${_circle}": [
                ["style", "top", '11px'],
                ["style", "left", '0px'],
                ["style", "display", 'block']
            ],
            "${_circle-3}": [
                ["style", "top", '320px'],
                ["style", "left", '142px'],
                ["style", "display", 'block']
            ],
            "${_Text4}": [
                ["style", "top", '289px'],
                ["style", "display", 'block'],
                ["style", "height", '54px'],
                ["style", "font-family", 'Times New Roman, Times, serif'],
                ["style", "left", '393px'],
                ["style", "width", '149px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 1750,
            autoPlay: true,
            timeline: [
                { id: "eid11", tween: [ "style", "${_circle-3}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid12", tween: [ "style", "${_circle-3}", "display", 'block', { fromValue: 'none'}], position: 1250, duration: 0 },
                { id: "eid19", tween: [ "style", "${_circle-3}", "display", 'none', { fromValue: 'block'}], position: 1750, duration: 0 },
                { id: "eid9", tween: [ "style", "${_Text4}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid10", tween: [ "style", "${_Text4}", "display", 'block', { fromValue: 'none'}], position: 1000, duration: 0 },
                { id: "eid13", tween: [ "style", "${_Text4}", "display", 'none', { fromValue: 'block'}], position: 1250, duration: 0 },
                { id: "eid39", tween: [ "style", "${_Text6}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid40", tween: [ "style", "${_Text6}", "display", 'block', { fromValue: 'none'}], position: 500, duration: 0 },
                { id: "eid41", tween: [ "style", "${_Text6}", "display", 'none', { fromValue: 'block'}], position: 700, duration: 0 },
                { id: "eid14", tween: [ "style", "${_Text5}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid15", tween: [ "style", "${_Text5}", "display", 'block', { fromValue: 'none'}], position: 1500, duration: 0 },
                { id: "eid17", tween: [ "style", "${_Text5}", "display", 'none', { fromValue: 'block'}], position: 1750, duration: 0 },
                { id: "eid26", tween: [ "style", "${_Text4}", "width", '149px', { fromValue: '149px'}], position: 1165, duration: 0 },
                { id: "eid16", tween: [ "style", "${_Text2}", "display", 'none', { fromValue: 'block'}], position: 1750, duration: 0 },
                { id: "eid7", tween: [ "style", "${_circle-2}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid8", tween: [ "style", "${_circle-2}", "display", 'block', { fromValue: 'none'}], position: 750, duration: 0 },
                { id: "eid18", tween: [ "style", "${_circle-2}", "display", 'none', { fromValue: 'block'}], position: 1250, duration: 0 },
                { id: "eid1", tween: [ "style", "${_circle}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid2", tween: [ "style", "${_circle}", "display", 'block', { fromValue: 'none'}], position: 250, duration: 0 },
                { id: "eid5", tween: [ "style", "${_circle}", "display", 'none', { fromValue: 'block'}], position: 750, duration: 0 }            ]
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
})(jQuery, AdobeEdge, "EDGE-1819508781");
