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
                id: '_1',
                type: 'image',
                rect: ['193px', '27px','361px','303px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"1.png",'0px','0px']
            },
            {
                id: '_2',
                type: 'image',
                rect: ['193px', '494px','361px','303px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"2.png",'0px','0px']
            },
            {
                id: 'b1',
                display: 'block',
                type: 'image',
                rect: ['185px', '657px','109px','119px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"b1.png",'0px','0px']
            },
            {
                id: 'b2',
                display: 'block',
                type: 'image',
                rect: ['250px', '685px','88px','103px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"b2.png",'0px','0px']
            },
            {
                id: 'b3',
                display: 'block',
                type: 'image',
                rect: ['482px', '696px','88px','103px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"b3.png",'0px','0px']
            },
            {
                id: 'r1',
                display: 'block',
                type: 'image',
                rect: ['206px', '190px','109px','93px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"r1.png",'0px','0px']
            },
            {
                id: 'r2',
                display: 'block',
                type: 'image',
                rect: ['417px', '283px','109px','93px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"r2.png",'0px','0px']
            },
            {
                id: 'r3',
                display: 'block',
                type: 'image',
                rect: ['435px', '277px','109px','93px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"r3.png",'0px','0px']
            },
            {
                id: 'r4',
                display: 'block',
                type: 'image',
                rect: ['451px', '271px','109px','93px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"r4.png",'0px','0px']
            },
            {
                id: 'r5',
                display: 'block',
                type: 'image',
                rect: ['461px', '266px','109px','93px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"r5.png",'0px','0px']
            },
            {
                id: 'r6',
                display: 'block',
                type: 'image',
                rect: ['472px', '261px','109px','93px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"r6.png",'0px','0px']
            },
            {
                id: 'r7',
                display: 'block',
                type: 'image',
                rect: ['489px', '254px','109px','93px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"r7.png",'0px','0px']
            },
            {
                id: 'Text2',
                type: 'text',
                rect: ['268px', '396px'],
                text: "(a) Frequency Division Multiplexing",
                align: "left",
                font: ['Times New Roman, Times, serif', [75, "%"], "rgba(0,0,0,1)", "700", "none", "normal"]
            },
            {
                id: 'Text3',
                type: 'text',
                rect: ['288px', '835px'],
                text: "(b) Time Division Multiplexing",
                align: "left",
                font: ['Times New Roman, Times, serif', [75, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: 'Text6',
                display: 'block',
                type: 'text',
                rect: ['506px', '782px','142px','63px','auto', 'auto'],
                text: "Each signal uses the whole frequency spectrum.",
                align: "center",
                font: ['Times New Roman, Times, serif', [75, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: 'Text4',
                display: 'block',
                type: 'text',
                rect: ['164px', '281px','141px','63px','auto', 'auto'],
                text: "Each signal transmits at all time.",
                align: "center",
                font: ['Times New Roman, Times, serif', [75, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: 'Text5',
                display: 'block',
                type: 'text',
                rect: ['516px', '364px','160px','38px','auto', 'auto'],
                text: "But uses its own frequency.",
                align: "center",
                font: ['Times New Roman, Times, serif', [75, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: 'Text7',
                display: 'block',
                type: 'text',
                rect: ['143px', '770px','151px','36px','auto', 'auto'],
                text: "But only its designed repeating slice of time.",
                align: "center",
                font: ['Times New Roman, Times, serif', [75, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: 'Text9',
                type: 'text',
                rect: ['249px', '913px','261px','27px','auto', 'auto'],
                text: "Figure 2.12  FDM and TDM",
                align: "center",
                font: ['Times New Roman, Times, serif', [119, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: 'Text10',
                display: 'block',
                type: 'text',
                rect: ['180px', '1800px'],
                text: "Click or Touch on Figure for Each Step of the Animation",
                align: "center",
                font: ['Times New Roman, Times, serif', [94, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
            }],
            symbolInstances: [

            ]
        },
    states: {
        "Base State": {
            "${_Text7}": [
                ["style", "top", '770px'],
                ["style", "text-align", 'center'],
                ["style", "height", '36px'],
                ["style", "display", 'block'],
                ["style", "font-family", 'Times New Roman, Times, serif'],
                ["style", "left", '143px'],
                ["style", "width", '151px']
            ],
            "${_Text3}": [
                ["style", "top", '835px'],
                ["style", "font-family", 'Times New Roman, Times, serif'],
                ["style", "left", '288px'],
                ["style", "width", '184px']
            ],
            "${_r5}": [
                ["style", "top", '266px'],
                ["style", "left", '461px'],
                ["style", "display", 'block']
            ],
            "${_Text2}": [
                ["style", "top", '396px'],
                ["style", "font-size", '75%'],
                ["style", "font-family", 'Times New Roman, Times, serif'],
                ["style", "font-weight", '700'],
                ["style", "left", '268px'],
                ["style", "width", '193px']
            ],
            "${_r7}": [
                ["style", "top", '254px'],
                ["style", "left", '489px'],
                ["style", "display", 'block']
            ],
            "${_b1}": [
                ["style", "top", '657px'],
                ["style", "display", 'block'],
                ["style", "height", '119px'],
                ["style", "left", '185px'],
                ["style", "width", '109px']
            ],
            "${_r1}": [
                ["style", "top", '190px'],
                ["style", "left", '206px'],
                ["style", "display", 'block']
            ],
            "${_r4}": [
                ["style", "top", '271px'],
                ["style", "left", '451px'],
                ["style", "display", 'block']
            ],
            "${_Text4}": [
                ["style", "top", '281px'],
                ["style", "text-align", 'center'],
                ["style", "display", 'block'],
                ["style", "font-family", 'Times New Roman, Times, serif'],
                ["style", "left", '164px'],
                ["style", "width", '141px']
            ],
            "${_r3}": [
                ["style", "top", '277px'],
                ["style", "left", '435px'],
                ["style", "display", 'block']
            ],
            "${_r2}": [
                ["style", "top", '283px'],
                ["style", "left", '417px'],
                ["style", "display", 'block']
            ],
            "${_Text5}": [
                ["style", "top", '364px'],
                ["style", "font-family", 'Times New Roman, Times, serif'],
                ["style", "left", '516px'],
                ["style", "display", 'block']
            ],
            "${_Text10}": [
                ["style", "top", '886px'],
                ["style", "width", '372px'],
                ["style", "display", 'block'],
                ["style", "font-family", 'Times New Roman, Times, serif'],
                ["style", "left", '214px'],
                ["style", "font-size", '94%']
            ],
            "${_Text6}": [
                ["style", "top", '782px'],
                ["style", "text-align", 'center'],
                ["style", "display", 'block'],
                ["style", "font-family", 'Times New Roman, Times, serif'],
                ["style", "left", '506px'],
                ["style", "width", '180px']
            ],
            "${__1}": [
                ["style", "left", '193px'],
                ["style", "top", '27px']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(255,255,255,1)'],
                ["style", "overflow", 'hidden'],
                ["style", "height", '960px'],
                ["style", "width", '800px']
            ],
            "${__2}": [
                ["style", "top", '494px'],
                ["style", "left", '193px']
            ],
            "${_r6}": [
                ["style", "top", '261px'],
                ["style", "left", '472px'],
                ["style", "display", 'block']
            ],
            "${_Text9}": [
                ["style", "top", '913px'],
                ["style", "width", '261px'],
                ["style", "height", '27px'],
                ["style", "font-family", 'Times New Roman, Times, serif'],
                ["style", "left", '249px'],
                ["style", "font-size", '119%']
            ],
            "${_b2}": [
                ["style", "top", '685px'],
                ["style", "left", '250px'],
                ["style", "display", 'block']
            ],
            "${_b3}": [
                ["style", "top", '696px'],
                ["style", "left", '482px'],
                ["style", "display", 'block']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 4500,
            autoPlay: true,
            timeline: [
                { id: "eid11", tween: [ "style", "${_r4}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid12", tween: [ "style", "${_r4}", "display", 'block', { fromValue: 'none'}], position: 1500, duration: 0 },
                { id: "eid24", tween: [ "style", "${_r4}", "display", 'none', { fromValue: 'block'}], position: 2000, duration: 0 },
                { id: "eid38", tween: [ "style", "${_b2}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid39", tween: [ "style", "${_b2}", "display", 'block', { fromValue: 'none'}], position: 3500, duration: 0 },
                { id: "eid40", tween: [ "style", "${_b2}", "display", 'none', { fromValue: 'block'}], position: 4000, duration: 0 },
                { id: "eid48", tween: [ "style", "${_Text6}", "width", '180px', { fromValue: '180px'}], position: 2500, duration: 0 },
                { id: "eid30", tween: [ "style", "${_Text6}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid31", tween: [ "style", "${_Text6}", "display", 'block', { fromValue: 'none'}], position: 2500, duration: 0 },
                { id: "eid32", tween: [ "style", "${_Text6}", "display", 'none', { fromValue: 'block'}], position: 3000, duration: 0 },
                { id: "eid7", tween: [ "style", "${_r2}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid8", tween: [ "style", "${_r2}", "display", 'block', { fromValue: 'none'}], position: 1500, duration: 0 },
                { id: "eid22", tween: [ "style", "${_r2}", "display", 'none', { fromValue: 'block'}], position: 2000, duration: 0 },
                { id: "eid59", tween: [ "style", "${_Text10}", "width", '372px', { fromValue: '372px'}], position: 4295, duration: 0 },
                { id: "eid17", tween: [ "style", "${_r7}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid18", tween: [ "style", "${_r7}", "display", 'block', { fromValue: 'none'}], position: 1500, duration: 0 },
                { id: "eid27", tween: [ "style", "${_r7}", "display", 'none', { fromValue: 'block'}], position: 2000, duration: 0 },
                { id: "eid15", tween: [ "style", "${_r6}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid16", tween: [ "style", "${_r6}", "display", 'block', { fromValue: 'none'}], position: 1500, duration: 0 },
                { id: "eid26", tween: [ "style", "${_r6}", "display", 'none', { fromValue: 'block'}], position: 2000, duration: 0 },
                { id: "eid43", tween: [ "style", "${_Text10}", "display", 'none', { fromValue: 'block'}], position: 4500, duration: 0 },
                { id: "eid1", tween: [ "style", "${_Text4}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid2", tween: [ "style", "${_Text4}", "display", 'block', { fromValue: 'none'}], position: 500, duration: 0 },
                { id: "eid5", tween: [ "style", "${_Text4}", "display", 'none', { fromValue: 'block'}], position: 1000, duration: 0 },
                { id: "eid19", tween: [ "style", "${_Text5}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid20", tween: [ "style", "${_Text5}", "display", 'block', { fromValue: 'none'}], position: 1500, duration: 0 },
                { id: "eid21", tween: [ "style", "${_Text5}", "display", 'none', { fromValue: 'block'}], position: 2000, duration: 0 },
                { id: "eid28", tween: [ "style", "${_b3}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid29", tween: [ "style", "${_b3}", "display", 'block', { fromValue: 'none'}], position: 2500, duration: 0 },
                { id: "eid33", tween: [ "style", "${_b3}", "display", 'none', { fromValue: 'block'}], position: 3000, duration: 0 },
                { id: "eid34", tween: [ "style", "${_Text7}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid35", tween: [ "style", "${_Text7}", "display", 'block', { fromValue: 'none'}], position: 3500, duration: 0 },
                { id: "eid42", tween: [ "style", "${_Text7}", "display", 'none', { fromValue: 'block'}], position: 4000, duration: 0 },
                { id: "eid13", tween: [ "style", "${_r5}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid14", tween: [ "style", "${_r5}", "display", 'block', { fromValue: 'none'}], position: 1500, duration: 0 },
                { id: "eid25", tween: [ "style", "${_r5}", "display", 'none', { fromValue: 'block'}], position: 2000, duration: 0 },
                { id: "eid60", tween: [ "style", "${_Text10}", "left", '214px', { fromValue: '214px'}], position: 4295, duration: 0 },
                { id: "eid3", tween: [ "style", "${_r1}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid4", tween: [ "style", "${_r1}", "display", 'block', { fromValue: 'none'}], position: 500, duration: 0 },
                { id: "eid6", tween: [ "style", "${_r1}", "display", 'none', { fromValue: 'block'}], position: 1000, duration: 0 },
                { id: "eid9", tween: [ "style", "${_r3}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid10", tween: [ "style", "${_r3}", "display", 'block', { fromValue: 'none'}], position: 1500, duration: 0 },
                { id: "eid23", tween: [ "style", "${_r3}", "display", 'none', { fromValue: 'block'}], position: 2000, duration: 0 },
                { id: "eid36", tween: [ "style", "${_b1}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid37", tween: [ "style", "${_b1}", "display", 'block', { fromValue: 'none'}], position: 3500, duration: 0 },
                { id: "eid41", tween: [ "style", "${_b1}", "display", 'none', { fromValue: 'block'}], position: 4000, duration: 0 }            ]
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
})(jQuery, AdobeEdge, "EDGE-831709631");
