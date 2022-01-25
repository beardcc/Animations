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
                id: 'red-box',
                display: 'none',
                type: 'image',
                rect: ['212px', '336px','1776px','860px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"red-box.png",'0px','0px']
            },
            {
                id: 'blue-box',
                display: 'none',
                type: 'image',
                rect: ['451px', '529px','576px','468px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"blue-box.png",'0px','0px','100%','100%']
            },
            {
                id: 'Text3',
                display: 'none',
                type: 'text',
                rect: ['1766px', '1037px','652px','auto','auto', 'auto'],
                text: "802.11n expanded<br>20 MHz to 40 MHz.",
                align: "left",
                font: ['\'Times New Roman\', Times, serif', [375, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: 'Text6',
                display: 'none',
                type: 'text',
                rect: ['1806px', '1020px','627px','auto','auto', 'auto'],
                text: "802.11ac expands to<br>eight 20 MHz channels<br>to equal 160 MHz.",
                align: "left",
                font: ['\'Times New Roman\', Times, serif', [375, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: 'Text7',
                display: 'none',
                type: 'text',
                rect: ['586px', '1236px','583px','auto','auto', 'auto'],
                text: "802.11ac supports 8x8 MIMO for eight parallel streams.",
                align: "left",
                font: ['\'Times New Roman\', Times, serif', [375, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: 'Text9',
                display: 'none',
                type: 'text',
                rect: ['926px', '128px','1041px','auto','auto', 'auto'],
                  text: "Expansion from 64 QAM to 256 QAM maximum modulation. Increases rate by 8/6 = 4/3.",
                align: "left",
                font: ['\'Times New Roman\', Times, serif', [375, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: 'Text4',
                display: 'none',
                type: 'text',
                rect: ['931px', '108px','637px','auto','auto', 'auto'],
                text: "802.11n can use 64QAM at a coding rate of 5/6.",
                align: "left",
                font: ['\'Times New Roman\', Times, serif', [375, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: 'Text5',
                display: 'none',
                type: 'text',
                rect: ['571px', '1271px','691px','auto','auto', 'auto'],
                text: "802.11n supports four parallel spatial streams.",
                align: "left",
                font: ['\'Times New Roman\', Times, serif', [375, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: 'Text',
                type: 'text',
                rect: ['479px', '1688px','auto','auto','auto', 'auto'],
                text: "Figure 11.17 IEEE 802.11 Performance Factors",
                font: ['Times New Roman, Times, serif', [475, "%"], "rgba(0,0,0,1)", "700", "none", ""]
            },
            {
                id: 'Text2',
                display: 'block',
                type: 'text',
                rect: ['523px', '1586px','auto','auto','auto', 'auto'],
                text: "Click or Touch on Figure for Each Step of the Animation",
                align: "left",
                font: ['\'Times New Roman\', Times, serif', [375, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: 'axis',
                display: 'none',
                type: 'image',
                rect: ['118px', '35px','2288px','1328px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"axis.png",'0px','0px']
            }],
            symbolInstances: [

            ]
        },
    states: {
        "Base State": {
            "${_red-box}": [
                ["style", "top", '810px'],
                ["style", "display", 'none'],
                ["style", "height", '0px'],
                ["style", "left", '680px'],
                ["style", "width", '0px']
            ],
            "${_Text7}": [
                ["style", "display", 'none'],
                ["style", "top", '1236px'],
                ["style", "left", '586px'],
                ["style", "width", '583px']
            ],
            "${_Text3}": [
                ["style", "display", 'none'],
                ["style", "top", '1037px'],
                ["style", "left", '1766px'],
                ["style", "width", '652px']
            ],
            "${_Text5}": [
                ["style", "display", 'none'],
                ["style", "top", '1271px'],
                ["style", "left", '571px'],
                ["style", "width", '691px']
            ],
            "${_axis}": [
                ["style", "top", '35px'],
                ["style", "left", '118px'],
                ["style", "display", 'none']
            ],
            "${_Text6}": [
                ["style", "display", 'none'],
                ["style", "top", '1020px'],
                ["style", "left", '1806px'],
                ["style", "width", '627px']
            ],
            "${_Text}": [
                ["style", "top", '1688px'],
                ["style", "font-weight", '700'],
                ["style", "font-family", 'Times New Roman, Times, serif'],
                ["style", "left", '479px'],
                ["style", "font-size", '475%']
            ],
            "${_blue-box}": [
                ["style", "top", '806px'],
                ["style", "display", 'none'],
                ["style", "height", '0px'],
                ["style", "left", '676px'],
                ["style", "width", '0px']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(255,255,255,1)'],
                ["style", "overflow", 'hidden'],
                ["style", "height", '1800px'],
                ["style", "width", '2500px']
            ],
            "${_Text9}": [
                ["style", "display", 'none'],
                ["style", "top", '72px'],
                ["style", "left", '895px'],
                ["style", "width", '1041px']
            ],
            "${_Text2}": [
                ["style", "display", 'block'],
                ["style", "top", '1586px'],
                ["style", "left", '523px'],
                ["style", "font-size", '375%']
            ],
            "${_Text4}": [
                ["style", "display", 'none'],
                ["style", "top", '270px'],
                ["style", "left", '850px'],
                ["style", "width", '637px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 4657,
            autoPlay: true,
            timeline: [
                { id: "eid41", tween: [ "style", "${_red-box}", "height", '860px', { fromValue: '0px'}], position: 2685, duration: 1500 },
                { id: "eid50", tween: [ "style", "${_Text2}", "display", 'none', { fromValue: 'block'}], position: 4657, duration: 0 },
                { id: "eid43", tween: [ "style", "${_red-box}", "width", '1776px', { fromValue: '0px'}], position: 2685, duration: 1500 },
                { id: "eid44", tween: [ "style", "${_Text6}", "display", 'block', { fromValue: 'none'}], position: 4464, duration: 0 },
                { id: "eid49", tween: [ "style", "${_Text6}", "display", 'none', { fromValue: 'block'}], position: 4657, duration: 0 },
                { id: "eid26", tween: [ "style", "${_blue-box}", "top", '529px', { fromValue: '806px'}], position: 500, duration: 1500 },
                { id: "eid45", tween: [ "style", "${_Text9}", "display", 'block', { fromValue: 'none'}], position: 4320, duration: 0 },
                { id: "eid48", tween: [ "style", "${_Text9}", "display", 'none', { fromValue: 'block'}], position: 4657, duration: 0 },
                { id: "eid39", tween: [ "style", "${_red-box}", "display", 'block', { fromValue: 'none'}], position: 2685, duration: 0 },
                { id: "eid34", tween: [ "style", "${_Text4}", "display", 'block', { fromValue: 'none'}], position: 2360, duration: 0 },
                { id: "eid37", tween: [ "style", "${_Text4}", "display", 'none', { fromValue: 'block'}], position: 2685, duration: 0 },
                { id: "eid33", tween: [ "style", "${_Text3}", "display", 'block', { fromValue: 'none'}], position: 2290, duration: 0 },
                { id: "eid38", tween: [ "style", "${_Text3}", "display", 'none', { fromValue: 'block'}], position: 2685, duration: 0 },
                { id: "eid46", tween: [ "style", "${_Text7}", "display", 'block', { fromValue: 'none'}], position: 4447, duration: 0 },
                { id: "eid47", tween: [ "style", "${_Text7}", "display", 'none', { fromValue: 'block'}], position: 4657, duration: 0 },
                { id: "eid42", tween: [ "style", "${_red-box}", "left", '212px', { fromValue: '680px'}], position: 2685, duration: 1500 },
                { id: "eid29", tween: [ "style", "${_blue-box}", "left", '451px', { fromValue: '676px'}], position: 500, duration: 1500 },
                { id: "eid27", tween: [ "style", "${_blue-box}", "display", 'block', { fromValue: 'none'}], position: 500, duration: 0 },
                { id: "eid1", tween: [ "style", "${_axis}", "display", 'block', { fromValue: 'none'}], position: 250, duration: 0 },
                { id: "eid40", tween: [ "style", "${_red-box}", "top", '336px', { fromValue: '810px'}], position: 2685, duration: 1500 },
                { id: "eid35", tween: [ "style", "${_Text5}", "display", 'block', { fromValue: 'none'}], position: 2440, duration: 0 },
                { id: "eid36", tween: [ "style", "${_Text5}", "display", 'none', { fromValue: 'block'}], position: 2685, duration: 0 },
                { id: "eid30", tween: [ "style", "${_blue-box}", "width", '576px', { fromValue: '0px'}], position: 500, duration: 1500 },
                { id: "eid28", tween: [ "style", "${_blue-box}", "height", '468px', { fromValue: '0px'}], position: 500, duration: 1500 }            ]
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
})(jQuery, AdobeEdge, "EDGE-846584870");
