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
                type: 'text',
                rect: ['145px', '395px','auto','auto','auto', 'auto'],
                text: "Figure 12.5 Examples of Multislot Packets",
                font: ['Times New Roman, Times, serif', [119, "%"], "rgba(0,0,0,1)", "700", "none", ""]
            },
            {
                id: 'Text2',
                display: 'block',
                type: 'text',
                rect: ['186px', '434px','auto','auto','auto', 'auto'],
                text: "Click or Touch on Figure for Each Step of the  Animation",
                align: "left",
                font: ['Times New Roman, Times, serif', [94, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: 'part-1',
                display: 'block',
                type: 'image',
                rect: ['-2px', '10px','721px','125px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"part-1.png",'0px','0px']
            },
            {
                id: 'Text4',
                display: 'block',
                type: 'text',
                rect: ['126px', '147px','387px','auto','auto', 'auto'],
                text: "These packets each use one time slot and use different frequencies f(k), f(k+2), f(k+4), f(k+6).",
                align: "left",
                font: ['Times New Roman, Times, serif', [94, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: 'part-2',
                display: 'block',
                type: 'image',
                rect: ['-2px', '137px','721px','106px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"part-2.png",'0px','0px']
            },
            {
                id: 'Text5',
                display: 'block',
                type: 'text',
                rect: ['140px', '254px','415px','auto','auto', 'auto'],
                text: "The first packet uses three time slots and stays on frequency f(k) for all three slots. The next packet resumes by using the same f(k+4) as if no multislot packet were present.",
                align: "left",
                font: ['Times New Roman, Times, serif', [94, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: 'part-3',
                display: 'block',
                type: 'image',
                rect: ['-2px', '245px','721px','106px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"part-3.png",'0px','0px']
            },
            {
                id: 'Text6',
                display: 'block',
                type: 'text',
                rect: ['120px', '363px','auto','auto','auto', 'auto'],
                text: "Now a five slot packet uses f(k), and the next packet uses f(k+6).",
                align: "left",
                font: ['Times New Roman, Times, serif', [94, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
            }],
            symbolInstances: [

            ]
        },
    states: {
        "Base State": {
            "${_part-1}": [
                ["style", "top", '10px'],
                ["style", "left", '-2px'],
                ["style", "display", 'block']
            ],
            "${_Text2}": [
                ["style", "top", '377px'],
                ["style", "display", 'block'],
                ["style", "font-family", 'Times New Roman, Times, serif'],
                ["style", "left", '173px'],
                ["style", "font-size", '94%']
            ],
            "${_Text6}": [
                ["style", "top", '345px'],
                ["style", "font-family", 'Times New Roman, Times, serif'],
                ["style", "left", '120px'],
                ["style", "display", 'block']
            ],
            "${_Text}": [
                ["style", "top", '395px'],
                ["style", "font-weight", '700'],
                ["style", "font-family", 'Times New Roman, Times, serif'],
                ["style", "left", '183px'],
                ["style", "font-size", '119%']
            ],
            "${_part-2}": [
                ["style", "top", '137px'],
                ["style", "left", '-2px'],
                ["style", "display", 'block']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(255,255,255,1)'],
                ["style", "overflow", 'hidden'],
                ["style", "height", '430px'],
                ["style", "width", '700px']
            ],
            "${_part-3}": [
                ["style", "top", '245px'],
                ["style", "left", '-2px'],
                ["style", "display", 'block']
            ],
            "${_Text5}": [
                ["style", "top", '254px'],
                ["style", "display", 'block'],
                ["style", "font-family", 'Times New Roman, Times, serif'],
                ["style", "left", '140px'],
                ["style", "width", '415px']
            ],
            "${_Text4}": [
                ["style", "top", '147px'],
                ["style", "display", 'block'],
                ["style", "font-family", 'Times New Roman, Times, serif'],
                ["style", "left", '126px'],
                ["style", "width", '387px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 2290,
            autoPlay: true,
            timeline: [
                { id: "eid32", tween: [ "style", "${_Text2}", "left", '173px', { fromValue: '173px'}], position: 2145, duration: 0 },
                { id: "eid3", tween: [ "style", "${_Text4}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid4", tween: [ "style", "${_Text4}", "display", 'block', { fromValue: 'none'}], position: 700, duration: 0 },
                { id: "eid5", tween: [ "style", "${_Text4}", "display", 'none', { fromValue: 'block'}], position: 895, duration: 0 },
                { id: "eid8", tween: [ "style", "${_Text5}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid9", tween: [ "style", "${_Text5}", "display", 'block', { fromValue: 'none'}], position: 1345, duration: 0 },
                { id: "eid10", tween: [ "style", "${_Text5}", "display", 'none', { fromValue: 'block'}], position: 1570, duration: 0 },
                { id: "eid30", tween: [ "style", "${_Text2}", "top", '377px', { fromValue: '377px'}], position: 2145, duration: 0 },
                { id: "eid11", tween: [ "style", "${_part-3}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid12", tween: [ "style", "${_part-3}", "display", 'block', { fromValue: 'none'}], position: 1570, duration: 0 },
                { id: "eid13", tween: [ "style", "${_Text6}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid14", tween: [ "style", "${_Text6}", "display", 'block', { fromValue: 'none'}], position: 2070, duration: 0 },
                { id: "eid15", tween: [ "style", "${_Text6}", "display", 'none', { fromValue: 'block'}], position: 2290, duration: 0 },
                { id: "eid6", tween: [ "style", "${_part-2}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid7", tween: [ "style", "${_part-2}", "display", 'block', { fromValue: 'none'}], position: 895, duration: 0 },
                { id: "eid26", tween: [ "style", "${_Text6}", "top", '345px', { fromValue: '345px'}], position: 2145, duration: 0 },
                { id: "eid1", tween: [ "style", "${_part-1}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid2", tween: [ "style", "${_part-1}", "display", 'block', { fromValue: 'none'}], position: 250, duration: 0 },
                { id: "eid17", tween: [ "style", "${_Text2}", "display", 'none', { fromValue: 'block'}], position: 2290, duration: 0 }            ]
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
})(jQuery, AdobeEdge, "EDGE-232218937");
