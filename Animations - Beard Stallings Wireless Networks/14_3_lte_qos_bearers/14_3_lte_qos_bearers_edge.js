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
                id: 'part1',
                display: 'none',
                type: 'image',
                rect: ['60px', '224px','94.2%','61.2%','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"part1.png",'0%','0%','3532px','1376px']
            },
            {
                id: 'part-2',
                display: 'none',
                type: 'image',
                rect: ['523px', '97px','2548px','1656px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"part-2.png",'0px','0px']
            },
            {
                id: 'part3',
                display: 'none',
                type: 'image',
                rect: ['652px', '34px','2968px','248px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"part3.png",'0px','0px']
            },
            {
                id: 'Text4',
                display: 'block',
                type: 'text',
                rect: ['1123px', '2020px','auto','auto','auto', 'auto'],
                text: "Click or Touch on Figure for Each Step  of the Animation",
                align: "left",
                font: ['\'Times New Roman\', Times, serif', [375, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: 'end-to-end',
                display: 'none',
                type: 'image',
                rect: ['210px', '570px','83.8%','13.3%','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"end-to-end.png",'0%','0%','3144px','300px']
            },
            {
                id: 'eps',
                display: 'none',
                type: 'image',
                rect: ['209px', '831px','3144px','300px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"eps.png",'0px','0px']
            },
            {
                id: 'radio',
                display: 'none',
                type: 'image',
                rect: ['-149px', '1114px','3144px','300px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"radio.png",'0px','0px']
            },
            {
                id: 'Text5',
                type: 'text',
                rect: ['1372px', '2108px','auto','auto','auto', 'auto'],
                text: "Figure  14.3  LTE QoS Bearers",
                align: "left",
                font: ['\'Times New Roman\', Times, serif', [475, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: 'Text',
                display: 'none',
                type: 'text',
                rect: ['779px', '1708px','auto','auto','auto', 'auto'],
                text: "End-to-end service crosses the E-UTRAN and EPC and networks outside LTE.",
                font: ['Times New Roman, Times, serif', [375, "%"], "rgba(0,0,0,1)", "700", "none", ""]
            },
            {
                id: 'Text2',
                display: 'none',
                type: 'text',
                rect: ['1117px', '1733px','auto','auto','auto', 'auto'],
                text: "The EPS bearer is established from the UE to the PDN-GW.",
                align: "left",
                font: ['\'Times New Roman\', Times, serif', [375, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: 'Text3',
                display: 'none',
                type: 'text',
                rect: ['1448px', '1688px','auto','auto','auto', 'auto'],
                text: "Individual bearers cross interfaces.",
                align: "left",
                font: ['\'Times New Roman\', Times, serif', [375, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
            }],
            symbolInstances: [

            ]
        },
    states: {
        "Base State": {
            "${_end-to-end}": [
                ["style", "top", '570px'],
                ["style", "left", '-3250px'],
                ["style", "display", 'none']
            ],
            "${_Text5}": [
                ["style", "top", '2108px'],
                ["style", "left", '1372px'],
                ["style", "font-size", '500%']
            ],
            "${_Text2}": [
                ["style", "top", '1863px'],
                ["style", "left", '1138px'],
                ["style", "display", 'none']
            ],
            "${_eps}": [
                ["style", "top", '831px'],
                ["style", "left", '-3250px'],
                ["style", "display", 'none']
            ],
            "${_part3}": [
                ["style", "top", '-300px'],
                ["style", "left", '652px'],
                ["style", "display", 'none']
            ],
            "${_Text}": [
                ["style", "top", '1804px'],
                ["style", "font-weight", '700'],
                ["style", "display", 'none'],
                ["style", "font-family", 'Times New Roman, Times, serif'],
                ["style", "left", '872px'],
                ["style", "font-size", '375%']
            ],
            "${_part1}": [
                ["style", "top", '224px'],
                ["style", "display", 'none'],
                ["style", "left", '148px'],
                ["style", "width", '1.18%']
            ],
            "${_part-2}": [
                ["style", "display", 'none'],
                ["style", "top", '1657px'],
                ["style", "left", '523px'],
                ["style", "height", '6px']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(255,255,255,1)'],
                ["style", "width", '3750px'],
                ["style", "height", '2250px'],
                ["style", "overflow", 'hidden']
            ],
            "${_Text3}": [
                ["style", "top", '1804px'],
                ["style", "left", '1426px'],
                ["style", "display", 'none']
            ],
            "${_radio}": [
                ["style", "top", '1114px'],
                ["style", "left", '-3600px'],
                ["style", "display", 'none']
            ],
            "${_Text4}": [
                ["style", "top", '2031px'],
                ["style", "left", '1177px'],
                ["style", "display", 'block']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 14500,
            autoPlay: true,
            timeline: [
                { id: "eid25", tween: [ "style", "${_radio}", "display", 'block', { fromValue: 'none'}], position: 11750, duration: 0 },
                { id: "eid11", tween: [ "style", "${_part3}", "display", 'block', { fromValue: 'none'}], position: 4500, duration: 0 },
                { id: "eid15", tween: [ "style", "${_end-to-end}", "display", 'block', { fromValue: 'none'}], position: 6250, duration: 0 },
                { id: "eid20", tween: [ "style", "${_eps}", "display", 'block', { fromValue: 'none'}], position: 9000, duration: 0 },
                { id: "eid8", tween: [ "style", "${_part-2}", "height", '1656px', { fromValue: '6px'}], position: 2250, duration: 2000 },
                { id: "eid1", tween: [ "style", "${_part1}", "display", 'block', { fromValue: 'none'}], position: 500, duration: 0 },
                { id: "eid17", tween: [ "style", "${_end-to-end}", "left", '210px', { fromValue: '-3250px'}], position: 6250, duration: 2000 },
                { id: "eid22", tween: [ "style", "${_eps}", "left", '209px', { fromValue: '-3250px'}], position: 9000, duration: 2000 },
                { id: "eid28", tween: [ "style", "${_Text3}", "display", 'block', { fromValue: 'none'}], position: 14000, duration: 0 },
                { id: "eid29", tween: [ "style", "${_Text3}", "display", 'none', { fromValue: 'block'}], position: 14250, duration: 0 },
                { id: "eid10", tween: [ "style", "${_part-2}", "top", '97px', { fromValue: '1657px'}], position: 2250, duration: 2000 },
                { id: "eid3", tween: [ "style", "${_part1}", "width", '94.19%', { fromValue: '1.18%'}], position: 500, duration: 1500 },
                { id: "eid39", tween: [ "style", "${_Text4}", "top", '2031px', { fromValue: '2031px'}], position: 11353, duration: 0 },
                { id: "eid23", tween: [ "style", "${_Text2}", "display", 'block', { fromValue: 'none'}], position: 11250, duration: 0 },
                { id: "eid24", tween: [ "style", "${_Text2}", "display", 'none', { fromValue: 'block'}], position: 11500, duration: 0 },
                { id: "eid30", tween: [ "style", "${_Text4}", "display", 'none', { fromValue: 'block'}], position: 14500, duration: 0 },
                { id: "eid37", tween: [ "style", "${_Text4}", "left", '1177px', { fromValue: '1177px'}], position: 11353, duration: 0 },
                { id: "eid6", tween: [ "style", "${_part-2}", "display", 'block', { fromValue: 'none'}], position: 2250, duration: 0 },
                { id: "eid27", tween: [ "style", "${_radio}", "left", '-149px', { fromValue: '-3600px'}], position: 11750, duration: 2000 },
                { id: "eid18", tween: [ "style", "${_Text}", "display", 'block', { fromValue: 'none'}], position: 8500, duration: 0 },
                { id: "eid19", tween: [ "style", "${_Text}", "display", 'none', { fromValue: 'block'}], position: 8750, duration: 0 },
                { id: "eid13", tween: [ "style", "${_part3}", "top", '34px', { fromValue: '-300px'}], position: 4500, duration: 1500 },
                { id: "eid5", tween: [ "style", "${_part1}", "left", '60px', { fromValue: '148px'}], position: 500, duration: 1500 }            ]
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
})(jQuery, AdobeEdge, "EDGE-26507489");
