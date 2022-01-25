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
                id: '_10_17_sliding_window_depiction',
                display: 'block',
                type: 'image',
                rect: ['7px', '7px','687px','506px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"10_17_sliding_window_depiction.png",'0px','0px']
            },
            {
                id: 'Text',
                type: 'text',
                rect: ['185px', '605px','332px','32px','auto', 'auto'],
                text: "Figure 10.18 Sliding Window Depiction ",
                font: ['Times New Roman, Times, serif', [119, "%"], "rgba(0,0,0,1)", "700", "none", ""]
            },
            {
                id: 'Text2',
                display: 'block',
                type: 'text',
                rect: ['156px', '579px','auto','auto','auto', 'auto'],
                text: "Click or Touch on Figure for Each Step of the Animation",
                align: "left",
                font: ['\'Times New Roman\', Times, serif', [94, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: 'Text4',
                display: 'block',
                type: 'text',
                rect: ['31px', '498px','165px','64px','auto', 'auto'],
                text: "Please see Figure 10.19 for the full animation of this sliding window process.",
                align: "left",
                font: ['\'Times New Roman\', Times, serif', [94, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
            }],
            symbolInstances: [

            ]
        },
    states: {
        "Base State": {
            "${_Text}": [
                ["style", "top", '605px'],
                ["style", "width", '332px'],
                ["style", "font-family", 'Times New Roman, Times, serif'],
                ["style", "font-weight", '700'],
                ["style", "left", '185px'],
                ["style", "font-size", '119%']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(255,255,255,1)'],
                ["style", "width", '700px'],
                ["style", "height", '650px'],
                ["style", "overflow", 'hidden']
            ],
            "${_Text2}": [
                ["style", "top", '578px'],
                ["style", "display", 'block'],
                ["style", "font-size", '94%'],
                ["style", "left", '165px'],
                ["style", "width", '371px']
            ],
            "${__10_17_sliding_window_depiction}": [
                ["style", "top", '7px'],
                ["style", "left", '7px'],
                ["style", "display", 'block']
            ],
            "${_Text4}": [
                ["style", "top", '498px'],
                ["style", "display", 'block'],
                ["style", "left", '31px'],
                ["style", "width", '187px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 750,
            autoPlay: true,
            timeline: [
                { id: "eid14", tween: [ "style", "${_Text2}", "left", '165px', { fromValue: '165px'}], position: 560, duration: 0 },
                { id: "eid1", tween: [ "style", "${__10_17_sliding_window_depiction}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid2", tween: [ "style", "${__10_17_sliding_window_depiction}", "display", 'block', { fromValue: 'none'}], position: 250, duration: 0 },
                { id: "eid6", tween: [ "style", "${_Text2}", "display", 'none', { fromValue: 'block'}], position: 750, duration: 0 },
                { id: "eid13", tween: [ "style", "${_Text2}", "width", '371px', { fromValue: '371px'}], position: 560, duration: 0 },
                { id: "eid12", tween: [ "style", "${_Text2}", "top", '578px', { fromValue: '578px'}], position: 560, duration: 0 },
                { id: "eid7", tween: [ "style", "${_Text4}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid8", tween: [ "style", "${_Text4}", "display", 'block', { fromValue: 'none'}], position: 560, duration: 0 },
                { id: "eid9", tween: [ "style", "${_Text4}", "display", 'none', { fromValue: 'block'}], position: 750, duration: 0 }            ]
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
})(jQuery, AdobeEdge, "EDGE-591146171");
