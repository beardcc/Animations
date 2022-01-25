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
                id: 'Part1',
                type: 'image',
                rect: ['153px', '32px','544px','282px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"Part1.png",'0px','0px']
            },
            {
                id: 'OvalCopy2',
                display: 'block',
                type: 'image',
                rect: ['193px', '32px','73px','265px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"Oval.png",'0px','0px']
            },
            {
                id: 'OvalCopy3',
                display: 'block',
                type: 'image',
                rect: ['235px', '32px','73px','265px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"Oval.png",'0px','0px']
            },
            {
                id: 'OvalCopy4',
                display: 'block',
                type: 'image',
                rect: ['280px', '32px','73px','265px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"Oval.png",'0px','0px']
            },
            {
                id: 'Text2',
                type: 'text',
                rect: ['130px', '408px','auto','auto','auto', 'auto'],
                text: "Figure 7.5 Differential Phase-Shift Keying (DPSK)",
                align: "left",
                font: ['Times New Roman, Times, serif', [119, "%"], "rgba(0,0,0,1)", "700", "none", "normal"]
            },
            {
                id: 'Text3',
                display: 'block',
                type: 'text',
                rect: ['219px', '17px','auto','auto','auto', 'auto'],
                text: "Binary \"0\" so no phase shift.",
                align: "left",
                font: ['Times New Roman, Times, serif', [63, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: 'Text3Copy',
                display: 'block',
                type: 'text',
                rect: ['261px', '17px','150px','31px','auto', 'auto'],
                text: "Binary \"1\" so 180 degrees phase shift.",
                align: "left",
                font: ['Times New Roman, Times, serif', [63, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: 'Text3Copy2',
                display: 'block',
                type: 'text',
                rect: ['312px', '23px','auto','auto','auto', 'auto'],
                text: "Another \"1\" so another 180 degrees phase shift.",
                align: "left",
                font: ['Times New Roman, Times, serif', [63, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: 'Text',
                display: 'block',
                type: 'text',
                rect: ['280px', '359px','auto','auto','auto', 'auto'],
                text: "Click or Touch on Figure for Each Step of the  Animation",
                align: "left",
                font: ['Times New Roman, Times, serif', [94, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
            }],
            symbolInstances: [

            ]
        },
    states: {
        "Base State": {
            "${_Text3Copy}": [
                ["style", "top", '12px'],
                ["style", "text-align", 'left'],
                ["style", "font-size", '15px'],
                ["style", "display", 'block'],
                ["style", "font-family", 'Times New Roman, Times, serif'],
                ["style", "left", '289px'],
                ["style", "width", '178px']
            ],
            "${_OvalCopy2}": [
                ["style", "top", '32px'],
                ["style", "height", '265px'],
                ["style", "display", 'block'],
                ["style", "left", '193px'],
                ["style", "width", '73px']
            ],
            "${_OvalCopy4}": [
                ["style", "top", '37px'],
                ["style", "display", 'block'],
                ["style", "height", '265px'],
                ["style", "left", '201px'],
                ["style", "width", '73px']
            ],
            "${_Text3Copy2}": [
                ["style", "top", '20px'],
                ["style", "width", '178px'],
                ["style", "text-align", 'left'],
                ["style", "display", 'block'],
                ["style", "height", '42px'],
                ["style", "font-family", 'Times New Roman, Times, serif'],
                ["style", "left", '235px'],
                ["style", "font-size", '15px']
            ],
            "${_Text2}": [
                ["style", "top", '408px'],
                ["style", "width", '431px'],
                ["style", "font-weight", '700'],
                ["style", "font-family", 'Times New Roman, Times, serif'],
                ["style", "left", '130px'],
                ["style", "font-size", '19px']
            ],
            "${_Text}": [
                ["style", "top", '386px'],
                ["style", "font-size", '15px'],
                ["style", "display", 'block'],
                ["style", "font-family", 'Times New Roman, Times, serif'],
                ["style", "left", '154px'],
                ["style", "width", '379px']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(255,255,255,1)'],
                ["style", "overflow", 'hidden'],
                ["style", "height", '450px'],
                ["style", "width", '700px']
            ],
            "${_Text3}": [
                ["style", "top", '17px'],
                ["style", "text-align", 'left'],
                ["style", "width", '198px'],
                ["style", "display", 'block'],
                ["style", "font-family", 'Times New Roman, Times, serif'],
                ["style", "left", '219px'],
                ["style", "font-size", '15px']
            ],
            "${_OvalCopy3}": [
                ["style", "top", '32px'],
                ["style", "display", 'block'],
                ["style", "height", '265px'],
                ["style", "left", '235px'],
                ["style", "width", '73px']
            ],
            "${_Part1}": [
                ["style", "height", '282px'],
                ["style", "top", '-282px'],
                ["style", "left", '74px'],
                ["style", "width", '544px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 9300,
            autoPlay: true,
            timeline: [
                { id: "eid10", tween: [ "style", "${_Text3}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid16", tween: [ "style", "${_Text3}", "display", 'block', { fromValue: 'none'}], position: 3000, duration: 0 },
                { id: "eid17", tween: [ "style", "${_Text3}", "display", 'none', { fromValue: 'block'}], position: 4000, duration: 0 },
                { id: "eid62", tween: [ "style", "${_Text}", "left", '154px', { fromValue: '154px'}], position: 9110, duration: 0 },
                { id: "eid63", tween: [ "style", "${_Text}", "top", '386px', { fromValue: '386px'}], position: 9110, duration: 0 },
                { id: "eid27", tween: [ "style", "${_Text}", "display", 'none', { fromValue: 'block'}], position: 9250, duration: 0 },
                { id: "eid11", tween: [ "style", "${_OvalCopy3}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid19", tween: [ "style", "${_OvalCopy3}", "display", 'block', { fromValue: 'none'}], position: 5000, duration: 0 },
                { id: "eid22", tween: [ "style", "${_OvalCopy3}", "display", 'none', { fromValue: 'block'}], position: 6500, duration: 0 },
                { id: "eid14", tween: [ "style", "${_OvalCopy4}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid23", tween: [ "style", "${_OvalCopy4}", "display", 'block', { fromValue: 'none'}], position: 7500, duration: 0 },
                { id: "eid26", tween: [ "style", "${_OvalCopy4}", "display", 'none', { fromValue: 'block'}], position: 9250, duration: 0 },
                { id: "eid8", tween: [ "style", "${_Part1}", "top", '32px', { fromValue: '-282px'}], position: 0, duration: 2000 },
                { id: "eid35", tween: [ "style", "${_Part1}", "top", '37px', { fromValue: '32px'}], position: 2000, duration: 7170 },
                { id: "eid12", tween: [ "style", "${_Text3Copy}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid20", tween: [ "style", "${_Text3Copy}", "display", 'block', { fromValue: 'none'}], position: 5000, duration: 0 },
                { id: "eid21", tween: [ "style", "${_Text3Copy}", "display", 'none', { fromValue: 'block'}], position: 6500, duration: 0 },
                { id: "eid13", tween: [ "style", "${_Text3Copy2}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid24", tween: [ "style", "${_Text3Copy2}", "display", 'block', { fromValue: 'none'}], position: 7500, duration: 0 },
                { id: "eid25", tween: [ "style", "${_Text3Copy2}", "display", 'none', { fromValue: 'block'}], position: 9250, duration: 0 },
                { id: "eid9", tween: [ "style", "${_OvalCopy2}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid15", tween: [ "style", "${_OvalCopy2}", "display", 'block', { fromValue: 'none'}], position: 3000, duration: 0 },
                { id: "eid18", tween: [ "style", "${_OvalCopy2}", "display", 'none', { fromValue: 'block'}], position: 4000, duration: 0 }            ]
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
})(jQuery, AdobeEdge, "EDGE-50570933");
