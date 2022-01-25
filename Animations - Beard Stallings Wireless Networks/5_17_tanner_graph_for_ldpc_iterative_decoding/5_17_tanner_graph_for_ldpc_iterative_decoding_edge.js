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
                id: 'va',
                display: 'none',
                type: 'image',
                rect: ['125px', '71px','2820px','264px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"va.png",'0px','0px']
            },
            {
                id: 'cs',
                display: 'none',
                type: 'image',
                rect: ['107px', '743px','1732px','184px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"cs.png",'0px','0px']
            },
            {
                id: 'Text',
                type: 'text',
                rect: ['662px', '1219px','auto','auto','auto', 'auto'],
                text: "Figure 5.17 Tanner Graph for LDPC Iterative Decoding",
                font: ['Times New Roman, Times, serif', [475, "%"], "rgba(0,0,0,1)", "700", "none", ""]
            },
            {
                id: 'ar',
                display: 'none',
                type: 'image',
                rect: ['562px', '199px','75.9%','44.9%','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"ar.png",'0%','0%','2276px','628px']
            },
            {
                id: 'Text5',
                display: 'none',
                type: 'text',
                rect: ['897px', '960px','1205px','130px','auto', 'auto'],
                text: "Constraint nodes implement parity equations.",
                align: "left",
                font: ['\'Times New Roman\', Times, serif', [375, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: 'arrw',
                display: 'none',
                type: 'image',
                rect: ['221px', '354px','356px','592px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"arrw.png",'0px','0px']
            },
            {
                id: 'Text6',
                display: 'none',
                type: 'text',
                rect: ['422px', '920px','920px','150px','auto', 'auto'],
                text: "Nodes iterate back and forth to share beliefs about coding results.",
                align: "left",
                font: ['\'Times New Roman\', Times, serif', [375, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: 'Text2',
                display: 'block',
                type: 'text',
                rect: ['847px', '1139px','auto','auto','auto', 'auto'],
                text: "Click or Touch on Figure for Each Step of the Animation",
                align: "left",
                font: ['\'Times New Roman\', Times, serif', [375, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: 'Text4',
                display: 'none',
                type: 'text',
                rect: ['847px', '370px','1475px','170px','auto', 'auto'],
                text: "Variable nodes estimate bit values.",
                align: "left",
                font: ['\'Times New Roman\', Times, serif', [375, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
            }],
            symbolInstances: [

            ]
        },
    states: {
        "Base State": {
            "${_cs}": [
                ["style", "display", 'none'],
                ["style", "left", '107px'],
                ["style", "top", '743px']
            ],
            "${_Text2}": [
                ["style", "top", '1139px'],
                ["style", "display", 'block'],
                ["style", "font-size", '375%'],
                ["style", "left", '847px'],
                ["style", "width", '1490px']
            ],
            "${_Text6}": [
                ["style", "display", 'none'],
                ["style", "width", '920px']
            ],
            "${_va}": [
                ["style", "top", '71px'],
                ["style", "left", '125px'],
                ["style", "display", 'none']
            ],
            "${_ar}": [
                ["style", "display", 'none'],
                ["style", "height", '0%'],
                ["style", "left", '562px'],
                ["style", "top", '199px']
            ],
            "${_Text}": [
                ["style", "top", '1219px'],
                ["style", "font-size", '475%'],
                ["style", "font-family", 'Times New Roman, Times, serif'],
                ["style", "font-weight", '700'],
                ["style", "width", '1860px']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(255,255,255,1)'],
                ["style", "overflow", 'hidden'],
                ["style", "height", '1350px'],
                ["style", "width", '3000px']
            ],
            "${_arrw}": [
                ["style", "top", '354px'],
                ["style", "left", '221px'],
                ["style", "display", 'none']
            ],
            "${_Text5}": [
                ["style", "top", '960px'],
                ["style", "display", 'none'],
                ["style", "font-size", '375%'],
                ["style", "left", '897px'],
                ["style", "width", '1205px']
            ],
            "${_Text4}": [
                ["style", "display", 'none'],
                ["style", "font-size", '375%']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 4250,
            autoPlay: true,
            timeline: [
                { id: "eid2", tween: [ "style", "${_Text4}", "display", 'block', { fromValue: 'none'}], position: 500, duration: 0 },
                { id: "eid3", tween: [ "style", "${_Text4}", "display", 'none', { fromValue: 'block'}], position: 750, duration: 0 },
                { id: "eid4", tween: [ "style", "${_cs}", "display", 'block', { fromValue: 'none'}], position: 1000, duration: 0 },
                { id: "eid1", tween: [ "style", "${_va}", "display", 'block', { fromValue: 'none'}], position: 250, duration: 0 },
                { id: "eid11", tween: [ "style", "${_arrw}", "display", 'block', { fromValue: 'none'}], position: 3500, duration: 0 },
                { id: "eid15", tween: [ "style", "${_arrw}", "display", 'none', { fromValue: 'block'}], position: 4000, duration: 0 },
                { id: "eid6", tween: [ "style", "${_ar}", "display", 'block', { fromValue: 'none'}], position: 1250, duration: 0 },
                { id: "eid8", tween: [ "style", "${_ar}", "height", '44.86%', { fromValue: '0%'}], position: 1250, duration: 1500 },
                { id: "eid12", tween: [ "style", "${_Text6}", "display", 'block', { fromValue: 'none'}], position: 3750, duration: 0 },
                { id: "eid13", tween: [ "style", "${_Text6}", "display", 'none', { fromValue: 'block'}], position: 4000, duration: 0 },
                { id: "eid9", tween: [ "style", "${_Text5}", "display", 'block', { fromValue: 'none'}], position: 3000, duration: 0 },
                { id: "eid10", tween: [ "style", "${_Text5}", "display", 'none', { fromValue: 'block'}], position: 3250, duration: 0 },
                { id: "eid16", tween: [ "style", "${_Text2}", "display", 'none', { fromValue: 'block'}], position: 4250, duration: 0 }            ]
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
})(jQuery, AdobeEdge, "EDGE-108656355");
