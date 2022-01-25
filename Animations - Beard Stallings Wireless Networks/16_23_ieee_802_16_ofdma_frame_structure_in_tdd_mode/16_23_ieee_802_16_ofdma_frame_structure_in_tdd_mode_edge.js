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
                id: 'freq-time',
                display: 'none',
                type: 'image',
                rect: ['89px', '271px','252px','290px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"freq-time.png",'0px','0px']
            },
            {
                id: 'downlink',
                display: 'none',
                type: 'image',
                rect: ['138px', '151px','370px','361px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"downlink.png",'0px','0px']
            },
            {
                id: 'Text',
                display: 'none',
                type: 'text',
                rect: ['138', '45','auto','auto','auto', 'auto'],
                text: "Downlink starts with preamble for synchronization<br>and DL-MAP to show the mapping of bursts to time<br>and contiguous subcarriers.",
                font: ['Times New Roman, Times, serif', 24, "rgba(0,0,0,1)", "700", "none", ""]
            },
            {
                id: 'part2',
                display: 'none',
                type: 'image',
                rect: ['173px', '168px','370px','361px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"part2.png",'0px','0px']
            },
            {
                id: 'Text2',
                display: 'none',
                type: 'text',
                rect: ['162px', '103px','auto','auto','auto', 'auto'],
                text: "Then come the data bursts and the MAP for the uplink.",
                align: "left",
                font: ['\'Times New Roman\', Times, serif', [94, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: 'timegap',
                display: 'none',
                type: 'image',
                rect: ['451px', '141px','77px','63px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"timegap.png",'0px','0px']
            },
            {
                id: 'Text3',
                display: 'none',
                type: 'text',
                rect: ['451', '61','auto','auto','auto', 'auto'],
                text: "Time gap so that stations can<br>switch to uplink.",
                align: "left",
                font: ['\'Times New Roman\', Times, serif', [94, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: 'uplink',
                display: 'none',
                type: 'image',
                rect: ['381px', '150px','370px','361px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"uplink.png",'0px','0px']
            },
            {
                id: 'Text4',
                display: 'none',
                type: 'text',
                rect: ['490px', '76px','auto','auto','auto', 'auto'],
                text: "Uplink consists of ranging channel<br> (for PHY measurement and control), and<br> data bursts.",
                align: "left",
                font: ['\'Times New Roman\', Times, serif', [94, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: 'Text5',
                display: 'block',
                type: 'text',
                rect: ['254px', '612px','auto','auto','auto', 'auto'],
                text: "Click or Touch on Figure for Each Step of the Animation",
                align: "center",
                font: ['\'Times New Roman\', Times, serif', [94, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: 'Text6',
                type: 'text',
                rect: ['105px', '643px','auto','auto','auto', 'auto'],
                text: "Figure  16.23  IEEE 802.16 OFDMA Frame Structure in TDD Mode",
                align: "center",
                font: ['\'Times New Roman\', Times, serif', [119, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
            }],
            symbolInstances: [

            ]
        },
    states: {
        "Base State": {
            "${_uplink}": [
                ["style", "top", '-380px'],
                ["style", "left", '381px'],
                ["style", "display", 'none']
            ],
            "${_Text3}": [
                ["style", "display", 'none']
            ],
            "${_Text2}": [
                ["style", "top", '103px'],
                ["style", "left", '162px'],
                ["style", "display", 'none']
            ],
            "${_Text5}": [
                ["style", "top", '618px'],
                ["style", "left", '189px'],
                ["style", "display", 'block']
            ],
            "${_Text6}": [
                ["style", "top", '643px'],
                ["style", "left", '105px'],
                ["style", "font-size", '119%']
            ],
            "${_freq-time}": [
                ["style", "top", '271px'],
                ["style", "left", '89px'],
                ["style", "display", 'none']
            ],
            "${_Text}": [
                ["style", "top", '67px'],
                ["style", "font-family", 'Times New Roman, Times, serif'],
                ["style", "display", 'none'],
                ["style", "font-weight", '700'],
                ["style", "left", '162px'],
                ["style", "font-size", '94%']
            ],
            "${_part2}": [
                ["style", "top", '-380px'],
                ["style", "left", '173px'],
                ["style", "display", 'none']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(255,255,255,1)'],
                ["style", "width", '750px'],
                ["style", "height", '725px'],
                ["style", "overflow", 'visible']
            ],
            "${_timegap}": [
                ["style", "top", '-150px'],
                ["style", "left", '451px'],
                ["style", "display", 'none']
            ],
            "${_downlink}": [
                ["style", "top", '-380px'],
                ["style", "left", '138px'],
                ["style", "display", 'none']
            ],
            "${_Text4}": [
                ["style", "top", '76px'],
                ["style", "left", '438px'],
                ["style", "display", 'none']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 10750,
            autoPlay: true,
            timeline: [
                { id: "eid31", tween: [ "style", "${_Text5}", "top", '618px', { fromValue: '618px'}], position: 10086, duration: 0 },
                { id: "eid23", tween: [ "style", "${_Text4}", "display", 'block', { fromValue: 'none'}], position: 10000, duration: 0 },
                { id: "eid24", tween: [ "style", "${_Text4}", "display", 'none', { fromValue: 'block'}], position: 10290, duration: 0 },
                { id: "eid28", tween: [ "style", "${_Text5}", "left", '189px', { fromValue: '189px'}], position: 10086, duration: 0 },
                { id: "eid22", tween: [ "style", "${_uplink}", "top", '150px', { fromValue: '-380px'}], position: 7750, duration: 2000 },
                { id: "eid13", tween: [ "style", "${_Text2}", "display", 'block', { fromValue: 'none'}], position: 5500, duration: 0 },
                { id: "eid14", tween: [ "style", "${_Text2}", "display", 'none', { fromValue: 'block'}], position: 5750, duration: 0 },
                { id: "eid1", tween: [ "style", "${_freq-time}", "display", 'block', { fromValue: 'none'}], position: 250, duration: 0 },
                { id: "eid18", tween: [ "style", "${_Text3}", "display", 'block', { fromValue: 'none'}], position: 7250, duration: 0 },
                { id: "eid19", tween: [ "style", "${_Text3}", "display", 'none', { fromValue: 'block'}], position: 7500, duration: 0 },
                { id: "eid20", tween: [ "style", "${_uplink}", "display", 'block', { fromValue: 'none'}], position: 7750, duration: 0 },
                { id: "eid25", tween: [ "style", "${_Text5}", "display", 'none', { fromValue: 'block'}], position: 10500, duration: 0 },
                { id: "eid17", tween: [ "style", "${_timegap}", "top", '141px', { fromValue: '-150px'}], position: 6000, duration: 1000 },
                { id: "eid10", tween: [ "style", "${_part2}", "display", 'block', { fromValue: 'none'}], position: 3250, duration: 0 },
                { id: "eid2", tween: [ "style", "${_downlink}", "display", 'block', { fromValue: 'none'}], position: 500, duration: 0 },
                { id: "eid4", tween: [ "style", "${_downlink}", "top", '151px', { fromValue: '-380px'}], position: 500, duration: 2000 },
                { id: "eid8", tween: [ "style", "${_Text}", "display", 'block', { fromValue: 'none'}], position: 2750, duration: 0 },
                { id: "eid9", tween: [ "style", "${_Text}", "display", 'none', { fromValue: 'block'}], position: 3000, duration: 0 },
                { id: "eid15", tween: [ "style", "${_timegap}", "display", 'block', { fromValue: 'none'}], position: 6000, duration: 0 },
                { id: "eid12", tween: [ "style", "${_part2}", "top", '168px', { fromValue: '-380px'}], position: 3195, duration: 2055 }            ]
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
})(jQuery, AdobeEdge, "EDGE-5736021");
