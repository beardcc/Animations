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
                id: 'lines',
                display: 'none',
                type: 'image',
                rect: ['251px', '382px','58.6%','62.4%','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"lines.png",'0%','0%','2052px','1372px']
            },
            {
                id: '_12',
                display: 'none',
                type: 'image',
                rect: ['197px', '461px','28%','7.5%','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"1.png",'0%','0%','980px','164px']
            },
            {
                id: 'Text3',
                display: 'none',
                type: 'text',
                rect: ['2376px', '450px','816px','290px','auto', 'auto'],
                text: "STA chooses an AP, associates with it, and agrees on security capabilities.",
                align: "left",
                font: ['\'Times New Roman\', Times, serif', [375, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: '_2',
                display: 'none',
                type: 'image',
                rect: ['240px', '716px','41.2%','7.6%','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"2.png",'0%','0%','1440px','168px']
            },
            {
                id: 'Text4',
                display: 'none',
                type: 'text',
                rect: ['2272px', '680px','1000px','280px','auto', 'auto'],
                text: "Only authenticated STAs are allowed to use the network, and STAs are ensured they are communicating with a legitimate network. ",
                align: "left",
                font: ['\'Times New Roman\', Times, serif', [375, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: '_3',
                display: 'none',
                type: 'image',
                rect: ['237px', '988px','41.8%','8.6%','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"3.png",'0%','0%','1464px','188px']
            },
            {
                id: 'Text5',
                display: 'none',
                type: 'text',
                rect: ['2303px', '940px','769px','230px','auto', 'auto'],
                text: "Cryptographic keys are generated and distributed.",
                align: "left",
                font: ['\'Times New Roman\', Times, serif', [375, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: '_5',
                display: 'none',
                type: 'image',
                rect: ['237px', '1576px','26.5%','5.3%','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"5.png",'0%','0%','928px','116px']
            },
            {
                id: 'Text7',
                display: 'none',
                type: 'text',
                rect: ['2211px', '1598px','684px','116px','auto', 'auto'],
                text: "Connection is torn down.",
                align: "left",
                font: ['\'Times New Roman\', Times, serif', [375, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: '_4',
                display: 'none',
                type: 'image',
                rect: ['237px', '1262px','59.2%','14%','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"4.png",'0%','0%','2072px','308px']
            },
            {
                id: 'Text6',
                display: 'none',
                type: 'text',
                rect: ['2436px', '1304px','918px','250px','auto', 'auto'],
                text: "Frames are exchanged end-to-end. STA to AP (shown as shaded) is encrypted.",
                align: "left",
                font: ['\'Times New Roman\', Times, serif', [375, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: 'top',
                display: 'none',
                type: 'image',
                rect: ['279px', '42px','2052px','480px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"top.png",'0px','0px']
            },
            {
                id: 'Text',
                type: 'text',
                rect: ['458px', '2025px','auto','auto','auto', 'auto'],
                text: "Figure 11.21 IEEE 802.11i Phases of Operation",
                font: ['Times New Roman, Times, serif', [475, "%"], "rgba(0,0,0,1)", "700", "none", "nowrap"]
            },
            {
                id: 'Text2',
                display: 'block',
                type: 'text',
                rect: ['934px', '1952px','auto','auto','auto', 'auto'],
                text: "Click or Touch on Figure for Each Step of the Animation",
                align: "left",
                font: ['\'Times New Roman\', Times, serif', [375, "%"], "rgba(0,0,0,1)", "bold", "none", "nowrap"]
            }],
            symbolInstances: [

            ]
        },
    states: {
        "Base State": {
            "${_top}": [
                ["style", "top", '42px'],
                ["style", "left", '279px'],
                ["style", "display", 'none']
            ],
            "${_Text7}": [
                ["style", "display", 'none'],
                ["style", "top", '1598px'],
                ["style", "left", '2211px'],
                ["style", "height", '116px']
            ],
            "${__4}": [
                ["style", "display", 'none'],
                ["style", "top", '1262px'],
                ["style", "left", '237px'],
                ["style", "width", '0%']
            ],
            "${_Text3}": [
                ["style", "display", 'none'],
                ["style", "top", '450px'],
                ["style", "left", '2376px'],
                ["style", "width", '816px']
            ],
            "${__2}": [
                ["style", "display", 'none'],
                ["style", "top", '716px'],
                ["style", "left", '240px'],
                ["style", "width", '0%']
            ],
            "${_Text2}": [
                ["style", "top", '1940px'],
                ["style", "display", 'block'],
                ["style", "font-size", '375%'],
                ["style", "left", '496px'],
                ["style", "width", '1492px']
            ],
            "${__5}": [
                ["style", "display", 'none'],
                ["style", "top", '1576px'],
                ["style", "left", '237px'],
                ["style", "width", '0%']
            ],
            "${_lines}": [
                ["style", "height", '0%'],
                ["style", "display", 'none'],
                ["style", "left", '251px'],
                ["style", "top", '382px']
            ],
            "${_Text5}": [
                ["style", "display", 'none'],
                ["style", "width", '769px']
            ],
            "${_Text}": [
                ["style", "top", '2025px'],
                ["style", "font-size", '475%'],
                ["style", "font-family", 'Times New Roman, Times, serif'],
                ["style", "font-weight", '700'],
                ["style", "left", '458px'],
                ["style", "width", '1568px']
            ],
            "${_Text6}": [
                ["style", "top", '1304px'],
                ["style", "display", 'none'],
                ["style", "height", '250px'],
                ["style", "left", '2436px'],
                ["style", "width", '918px']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(255,255,255,1)'],
                ["style", "overflow", 'hidden'],
                ["style", "height", '2200px'],
                ["style", "width", '3500px']
            ],
            "${__12}": [
                ["style", "display", 'none'],
                ["style", "top", '461px'],
                ["style", "left", '197px'],
                ["style", "width", '0%']
            ],
            "${__3}": [
                ["style", "display", 'none'],
                ["style", "top", '988px'],
                ["style", "left", '237px'],
                ["style", "width", '0%']
            ],
            "${_Text4}": [
                ["style", "display", 'none']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 8750,
            autoPlay: true,
            timeline: [
                { id: "eid2", tween: [ "style", "${_lines}", "display", 'block', { fromValue: 'none'}], position: 250, duration: 0 },
                { id: "eid18", tween: [ "style", "${__3}", "width", '41.83%', { fromValue: '0%'}], position: 4250, duration: 1000 },
                { id: "eid13", tween: [ "style", "${__2}", "width", '41.15%', { fromValue: '0%'}], position: 2750, duration: 1000 },
                { id: "eid34", tween: [ "style", "${_Text2}", "top", '1940px', { fromValue: '1940px'}], position: 8688, duration: 0 },
                { id: "eid10", tween: [ "style", "${__2}", "display", 'block', { fromValue: 'none'}], position: 2750, duration: 0 },
                { id: "eid26", tween: [ "style", "${__5}", "display", 'block', { fromValue: 'none'}], position: 7250, duration: 0 },
                { id: "eid24", tween: [ "style", "${_Text6}", "display", 'block', { fromValue: 'none'}], position: 6750, duration: 0 },
                { id: "eid25", tween: [ "style", "${_Text6}", "display", 'none', { fromValue: 'block'}], position: 7000, duration: 0 },
                { id: "eid7", tween: [ "style", "${__12}", "width", '28.01%', { fromValue: '0%'}], position: 1250, duration: 1000 },
                { id: "eid33", tween: [ "style", "${_Text2}", "left", '496px', { fromValue: '496px'}], position: 8688, duration: 0 },
                { id: "eid14", tween: [ "style", "${_Text4}", "display", 'block', { fromValue: 'none'}], position: 3750, duration: 0 },
                { id: "eid15", tween: [ "style", "${_Text4}", "display", 'none', { fromValue: 'block'}], position: 4000, duration: 0 },
                { id: "eid19", tween: [ "style", "${_Text5}", "display", 'block', { fromValue: 'none'}], position: 5250, duration: 0 },
                { id: "eid20", tween: [ "style", "${_Text5}", "display", 'none', { fromValue: 'block'}], position: 5500, duration: 0 },
                { id: "eid4", tween: [ "style", "${_lines}", "height", '62.36%', { fromValue: '0%'}], position: 250, duration: 1000 },
                { id: "eid21", tween: [ "style", "${__4}", "display", 'block', { fromValue: 'none'}], position: 5750, duration: 0 },
                { id: "eid23", tween: [ "style", "${__4}", "width", '59.2%', { fromValue: '0%'}], position: 5750, duration: 1000 },
                { id: "eid16", tween: [ "style", "${__3}", "display", 'block', { fromValue: 'none'}], position: 4250, duration: 0 },
                { id: "eid5", tween: [ "style", "${__12}", "display", 'block', { fromValue: 'none'}], position: 1250, duration: 0 },
                { id: "eid8", tween: [ "style", "${_Text3}", "display", 'block', { fromValue: 'none'}], position: 2250, duration: 0 },
                { id: "eid9", tween: [ "style", "${_Text3}", "display", 'none', { fromValue: 'block'}], position: 2500, duration: 0 },
                { id: "eid1", tween: [ "style", "${_top}", "display", 'block', { fromValue: 'none'}], position: 250, duration: 0 },
                { id: "eid28", tween: [ "style", "${__5}", "width", '26.52%', { fromValue: '0%'}], position: 7250, duration: 1000 },
                { id: "eid29", tween: [ "style", "${_Text7}", "display", 'block', { fromValue: 'none'}], position: 8250, duration: 0 },
                { id: "eid30", tween: [ "style", "${_Text7}", "display", 'none', { fromValue: 'block'}], position: 8500, duration: 0 },
                { id: "eid31", tween: [ "style", "${_Text2}", "display", 'none', { fromValue: 'block'}], position: 8750, duration: 0 }            ]
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
})(jQuery, AdobeEdge, "EDGE-1281750741");
