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
                rect: ['206px', '794px','auto','auto','auto', 'auto'],
                text: "Figure 4.10 IP Headers",
                font: ['Times New Roman, Times, serif', [119, "%"], "rgba(0,0,0,1)", "700", "none", ""]
            },
            {
                id: 'Text2',
                display: 'block',
                type: 'text',
                rect: ['128px', '771px','auto','auto','auto', 'auto'],
                text: "Click or Touch on Figure for Each Step of Animation",
                align: "left",
                font: ['\'Times New Roman\', Times, serif', [94, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: '_1st-part',
                display: 'block',
                type: 'image',
                rect: ['41px', '61px','521px','161px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"1st-part.png",'0px','0px']
            },
            {
                id: 'Text3',
                display: 'block',
                type: 'text',
                rect: ['98', '30px','auto','auto','auto', 'auto'],
                text: "Base header format of 20 octets  required in all IP datagrams.",
                align: "left",
                font: ['\'Times New Roman\', Times, serif', [94, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: 'padding',
                display: 'block',
                type: 'image',
                rect: ['74px', '829px','485px','48px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"padding.png",'0px','0px']
            },
            {
                id: 'Text5',
                display: 'block',
                type: 'text',
                rect: ['41px', '251px','198px','auto','auto', 'auto'],
                text: "Possible security, routing, or time stamp options padded to make header a multiple of 32 bits.",
                align: "left",
                font: ['\'Times New Roman\', Times, serif', [94, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: '_2nd-part',
                display: 'block',
                type: 'image',
                rect: ['38px', '306px','527px','375px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"2nd-part.png",'0px','0px']
            },
            {
                id: 'Text7',
                display: 'block',
                type: 'text',
                rect: ['268px', '606px','auto','auto','auto', 'auto'],
                text: "(b) Ipv6 Header",
                align: "left",
                font: ['\'Times New Roman\', Times, serif', [94, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: 'Text8',
                display: 'block',
                type: 'text',
                rect: ['58px', '688px','363px','auto','auto', 'auto'],
                text: "The IPv6 header requires 40 octets. It only has two rows of control information but much larger addresses.",
                align: "left",
                font: ['Times New Roman, Times, serif', [125, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: 'Text6',
                type: 'text',
                rect: ['267px', '275px','auto','auto','auto', 'auto'],
                text: "(a) IPv4 Header",
                align: "left",
                font: ['\'Times New Roman\', Times, serif', [94, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
            }],
            symbolInstances: [

            ]
        },
    states: {
        "Base State": {
            "${_Text7}": [
                ["style", "top", '606px'],
                ["style", "left", '268px'],
                ["style", "display", 'block']
            ],
            "${_Text3}": [
                ["style", "top", '30px'],
                ["style", "display", 'block']
            ],
            "${__2nd-part}": [
                ["style", "top", '306px'],
                ["style", "left", '38px'],
                ["style", "display", 'block']
            ],
            "${_Text8}": [
                ["style", "top", '688px'],
                ["style", "font-size", '94%'],
                ["style", "display", 'block'],
                ["style", "font-family", 'Times New Roman, Times, serif'],
                ["style", "left", '58px'],
                ["style", "width", '363px']
            ],
            "${_padding}": [
                ["style", "top", '829px'],
                ["style", "left", '74px'],
                ["style", "display", 'block']
            ],
            "${_Text}": [
                ["style", "top", '794px'],
                ["style", "font-weight", '700'],
                ["style", "font-family", 'Times New Roman, Times, serif'],
                ["style", "left", '206px'],
                ["style", "font-size", '119%']
            ],
            "${__1st-part}": [
                ["style", "top", '-170px'],
                ["style", "left", '41px'],
                ["style", "display", 'block']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(255,255,255,1)'],
                ["style", "overflow", 'hidden'],
                ["style", "height", '830px'],
                ["style", "width", '600px']
            ],
            "${_Text5}": [
                ["style", "top", '251px'],
                ["style", "display", 'block'],
                ["style", "font-size", '94%'],
                ["style", "left", '41px'],
                ["style", "width", '198px']
            ],
            "${_Text6}": [
                ["style", "top", '275px'],
                ["style", "left", '267px'],
                ["style", "font-size", '94%']
            ],
            "${_Text2}": [
                ["style", "display", 'block'],
                ["style", "top", '771px'],
                ["style", "left", '130px'],
                ["style", "font-size", '94%']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 3867,
            autoPlay: true,
            timeline: [
                 { id: "eid29", tween: [ "style", "${_Text2}", "left", '130px', { fromValue: '130px'}], position: 0, duration: 0 },
                { id: "eid1", tween: [ "style", "${__1st-part}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid2", tween: [ "style", "${__1st-part}", "display", 'block', { fromValue: 'none'}], position: 185, duration: 0 },
                { id: "eid28", tween: [ "style", "${_Text2}", "display", 'none', { fromValue: 'block'}], position: 3867, duration: 0 },
                { id: "eid19", tween: [ "style", "${__2nd-part}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid20", tween: [ "style", "${__2nd-part}", "display", 'block', { fromValue: 'none'}], position: 3390, duration: 0 },
                { id: "eid21", tween: [ "style", "${_Text7}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid22", tween: [ "style", "${_Text7}", "display", 'block', { fromValue: 'none'}], position: 3110, duration: 0 },
                { id: "eid31", tween: [ "style", "${_Text5}", "font-size", '94%', { fromValue: '94%'}], position: 2910, duration: 0 },
                { id: "eid30", tween: [ "style", "${_Text8}", "font-size", '94%', { fromValue: '94%'}], position: 3782, duration: 0 },
                { id: "eid15", tween: [ "style", "${_Text5}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid16", tween: [ "style", "${_Text5}", "display", 'block', { fromValue: 'none'}], position: 2910, duration: 0 },
                { id: "eid18", tween: [ "style", "${_Text5}", "display", 'none', { fromValue: 'block'}], position: 3110, duration: 0 },
                { id: "eid25", tween: [ "style", "${_Text8}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid26", tween: [ "style", "${_Text8}", "display", 'block', { fromValue: 'none'}], position: 3684, duration: 0 },
                { id: "eid27", tween: [ "style", "${_Text8}", "display", 'none', { fromValue: 'block'}], position: 3867, duration: 0 },
                { id: "eid7", tween: [ "style", "${__1st-part}", "top", '61px', { fromValue: '-170px'}], position: 185, duration: 1000 },
                { id: "eid8", tween: [ "style", "${_Text3}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid9", tween: [ "style", "${_Text3}", "display", 'block', { fromValue: 'none'}], position: 1460, duration: 0 },
                { id: "eid17", tween: [ "style", "${_Text3}", "display", 'none', { fromValue: 'block'}], position: 1630, duration: 0 },
                { id: "eid10", tween: [ "style", "${_padding}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid11", tween: [ "style", "${_padding}", "display", 'block', { fromValue: 'none'}], position: 1630, duration: 0 },
                { id: "eid14", tween: [ "style", "${_padding}", "top", '193px', { fromValue: '829px'}], position: 1630, duration: 1000 }            ]
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
})(jQuery, AdobeEdge, "EDGE-357184866");
