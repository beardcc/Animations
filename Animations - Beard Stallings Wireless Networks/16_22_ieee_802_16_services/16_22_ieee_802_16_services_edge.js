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
                id: 'a',
                display: 'none',
                type: 'image',
                rect: ['173px', '45px','1996px','556px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"a.png",'0px','0px']
            },
            {
                id: 'Text3',
                display: 'none',
                type: 'text',
                rect: ['612px', '620px','auto','auto','auto', 'auto'],
                text: "Transmission at regular intervals. No polls needed.",
                align: "left",
                font: ['\'Times New Roman\', Times, serif', [375, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: 'b',
                display: 'none',
                type: 'image',
                rect: ['173px', '648px','1996px','708px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"b.png",'0px','0px']
            },
            {
                id: 'Text4',
                display: 'none',
                type: 'text',
                rect: ['422px', '1420px','auto','auto','auto', 'auto'],
                text: "BS polls SS at regular intervals. SS uses variable amounts of bandwidth.",
                align: "left",
                font: ['\'Times New Roman\', Times, serif', [375, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: 'Text5',
                display: 'none',
                type: 'text',
                rect: ['660px', '2130px','1600px','140px','auto', 'auto'],
                text: "BS polls SS at variable intervals and gives amount that can be trasferred to meet requirements.",
                align: "left",
                font: ['\'Times New Roman\', Times, serif', [375, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: 'c',
                display: 'none',
                type: 'image',
                rect: ['173px', '1428px','1996px','708px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"c.png",'0px','0px']
            },
            {
                id: 'd',
                display: 'none',
                type: 'image',
                rect: ['173px', '2107px','1996px','708px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"d.png",'0px','0px']
            },
            {
                id: 'Text6',
                display: 'none',
                type: 'text',
                rect: ['748px', '2700px','auto','auto','auto', 'auto'],
                text: "SSs contend for left over available bandwidth.",
                align: "left",
                font: ['\'Times New Roman\', Times, serif', [375, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: 'Text',
                type: 'text',
                rect: ['675px', '3025px','auto','auto','auto', 'auto'],
                text: "Figure 16.22 IEEE 802.16 Services ",
                font: ['Times New Roman, Times, serif', [475, "%"], "rgba(0,0,0,1)", "700", "none", ""]
            },
            {
                id: 'Text2',
                display: 'block',
                type: 'text',
                rect: ['510px', '2910px','auto','auto','auto', 'auto'],
                text: "Click or Touch on Figure for Each Step of the Animation",
                align: "left",
                font: ['\'Times New Roman\', Times, serif', [375, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
            }],
            symbolInstances: [

            ]
        },
    states: {
        "Base State": {
            "${_b}": [
                ["style", "top", '648px'],
                ["style", "left", '173px'],
                ["style", "display", 'none']
            ],
            "${_a}": [
                ["style", "top", '45px'],
                ["style", "left", '173px'],
                ["style", "display", 'none']
            ],
            "${_Text3}": [
                ["style", "top", '620px'],
                ["style", "height", '150px'],
                ["style", "display", 'none'],
                ["style", "left", '612px'],
                ["style", "width", '1450px']
            ],
            "${_Text2}": [
                ["style", "top", '2910px'],
                ["style", "display", 'block'],
                ["style", "width", '1480px'],
                ["style", "left", '510px'],
                ["style", "font-size", '375%']
            ],
            "${_Text6}": [
                ["style", "top", '2700px'],
                ["style", "display", 'none'],
                ["style", "left", '748px'],
                ["style", "width", '1228px']
            ],
            "${_Text}": [
                ["style", "top", '3025px'],
                ["style", "width", '1150px'],
                ["style", "font-family", 'Times New Roman, Times, serif'],
                ["style", "font-weight", '700'],
                ["style", "left", '675px'],
                ["style", "font-size", '475%']
            ],
            "${_c}": [
                ["style", "top", '1428px'],
                ["style", "left", '173px'],
                ["style", "display", 'none']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(255,255,255,1)'],
                ["style", "width", '2500px'],
                ["style", "height", '3200px'],
                ["style", "overflow", 'hidden']
            ],
            "${_Text5}": [
                ["style", "display", 'none'],
                ["style", "left", '660px'],
                ["style", "width", '1500px']
            ],
            "${_d}": [
                ["style", "top", '2107px'],
                ["style", "left", '173px'],
                ["style", "display", 'none']
            ],
            "${_Text4}": [
                ["style", "display", 'none'],
                ["style", "left", '422px'],
                ["style", "width", '1880px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 3250,
            autoPlay: true,
            timeline: [
                { id: "eid5", tween: [ "style", "${_Text4}", "display", 'block', { fromValue: 'none'}], position: 1250, duration: 0 },
                { id: "eid6", tween: [ "style", "${_Text4}", "display", 'none', { fromValue: 'block'}], position: 1500, duration: 0 },
                { id: "eid15", tween: [ "style", "${_Text5}", "width", '1500px', { fromValue: '1500px'}], position: 2216, duration: 0 },
                { id: "eid4", tween: [ "style", "${_b}", "display", 'block', { fromValue: 'none'}], position: 1000, duration: 0 },
                { id: "eid8", tween: [ "style", "${_c}", "display", 'block', { fromValue: 'none'}], position: 1750, duration: 0 },
                { id: "eid11", tween: [ "style", "${_d}", "display", 'block', { fromValue: 'none'}], position: 2500, duration: 0 },
                { id: "eid12", tween: [ "style", "${_Text6}", "display", 'block', { fromValue: 'none'}], position: 2750, duration: 0 },
                { id: "eid13", tween: [ "style", "${_Text6}", "display", 'none', { fromValue: 'block'}], position: 3000, duration: 0 },
                { id: "eid2", tween: [ "style", "${_Text3}", "display", 'block', { fromValue: 'none'}], position: 500, duration: 0 },
                { id: "eid3", tween: [ "style", "${_Text3}", "display", 'none', { fromValue: 'block'}], position: 750, duration: 0 },
                { id: "eid9", tween: [ "style", "${_Text5}", "display", 'block', { fromValue: 'none'}], position: 2000, duration: 0 },
                { id: "eid10", tween: [ "style", "${_Text5}", "display", 'none', { fromValue: 'block'}], position: 2250, duration: 0 },
                { id: "eid14", tween: [ "style", "${_Text2}", "display", 'none', { fromValue: 'block'}], position: 3250, duration: 0 },
                { id: "eid1", tween: [ "style", "${_a}", "display", 'block', { fromValue: 'none'}], position: 250, duration: 0 }            ]
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
})(jQuery, AdobeEdge, "EDGE-1302663910");
