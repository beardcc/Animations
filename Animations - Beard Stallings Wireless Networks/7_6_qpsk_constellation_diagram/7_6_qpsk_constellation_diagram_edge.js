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
                rect: ['116px', '1332px','auto','auto','auto', 'auto'],
                text: "Figure 7.6 QPSK Constellation Diagram<br>",
                font: ['Times New Roman, Times, serif', [475, "%"], "rgba(0,0,0,1)", "700", "none", ""]
            },
            {
                id: 'Text2',
                display: 'block',
                type: 'text',
                rect: ['71px', '1236px','auto','auto','auto', 'auto'],
                text: "Click or Touch on Figure for Each Step of Animation",
                align: "left",
                font: ['\'Times New Roman\', Times, serif', [375, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: 'Ellipse',
                type: 'ellipse',
                rect: ['635px', '1346px','13px','2px','auto', 'auto'],
                borderRadius: ["50%", "50%", "50%", "50%"],
                fill: ["rgba(192,192,192,1)"],
                stroke: [0,"rgba(0,0,0,1)","none"]
            },
            {
                id: 'comment',
                display: 'none',
                type: 'image',
                rect: ['30px', '10px','1468px','180px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"comment.png",'0px','0px']
            },
            {
                id: '_7_6_qpsk_constellation_diagram2',
                display: 'none',
                type: 'image',
                rect: ['213px', '148px','1072px','1032px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"7_6_qpsk_constellation_diagram2.png",'0px','0px']
            },
            {
                id: 'qpsk2',
                display: 'none',
                type: 'image',
                rect: ['235px', '146px','1032px','1008px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"qpsk2.png",'0px','0px']
            }],
            symbolInstances: [

            ]
        },
    states: {
        "Base State": {
            "${_comment}": [
                ["style", "top", '10px'],
                ["style", "left", '30px'],
                ["style", "display", 'none']
            ],
            "${_Text}": [
                ["style", "top", '1332px'],
                ["style", "font-family", 'Times New Roman, Times, serif'],
                ["style", "font-weight", '700'],
                ["style", "left", '116px'],
                ["style", "font-size", '475%']
            ],
            "${__7_6_qpsk_constellation_diagram2}": [
                ["style", "top", '148px'],
                ["style", "left", '213px'],
                ["style", "display", 'none']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(255,255,255,1)'],
                ["style", "width", '1500px'],
                ["style", "height", '1450px'],
                ["style", "overflow", 'hidden']
            ],
            "${_Text2}": [
                ["style", "top", '1236px'],
                ["style", "display", 'block'],
                ["style", "left", '71px'],
                ["style", "font-size", '375%']
            ],
            "${_qpsk2}": [
                ["style", "top", '146px'],
                ["style", "left", '235px'],
                ["style", "display", 'none']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 700,
            autoPlay: true,
            timeline: [
                { id: "eid9", tween: [ "style", "${_qpsk2}", "display", 'block', { fromValue: 'none'}], position: 205, duration: 0 },
                { id: "eid10", tween: [ "style", "${_qpsk2}", "display", 'none', { fromValue: 'block'}], position: 700, duration: 0 },
                { id: "eid5", tween: [ "style", "${__7_6_qpsk_constellation_diagram2}", "display", 'block', { fromValue: 'none'}], position: 700, duration: 0 },
                { id: "eid3", tween: [ "style", "${_Text2}", "display", 'none', { fromValue: 'block'}], position: 700, duration: 0 },
                { id: "eid2", tween: [ "style", "${_comment}", "display", 'block', { fromValue: 'none'}], position: 500, duration: 0 },
                { id: "eid4", tween: [ "style", "${_comment}", "display", 'none', { fromValue: 'block'}], position: 700, duration: 0 }            ]
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
})(jQuery, AdobeEdge, "EDGE-679205169");
