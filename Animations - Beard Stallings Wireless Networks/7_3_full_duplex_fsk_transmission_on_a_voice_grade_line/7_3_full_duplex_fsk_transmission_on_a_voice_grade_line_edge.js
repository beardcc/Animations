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
                id: 'Axis',
                type: 'image',
                rect: ['19px', '22px','612px','287px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"Axis.png",'0px','0px']
            },
            {
                id: 'Text',
                type: 'text',
                rect: ['52px', '369px','auto', 'auto'],
                text: "Figure 7.3 Full-Duplex FSK Transmission on a Voice-Grade Channel",
                font: ['Times New Roman, Times, serif', [119, "%"], "rgba(46,45,45,1.00)", "700", "none", ""]
            },
            {
                id: '_1',
                type: 'image',
                rect: ['162px', '112px','241px','169px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"1.png",'0px','0px']
            },
            {
                id: 'Text2',
                display: 'block',
                type: 'text',
                rect: ['156px', '87px','127px','50px','auto', 'auto'],
                cursor: ['pointer'],
                text: "Signal from A to B, centered at 1170 Hz.",
                align: "left",
                font: ['Times New Roman, Times, serif', 10, "rgba(0,0,0,1.00)", "bold", "none", "normal"]
            },
            {
                id: 'Text3',
                display: 'block',
                type: 'text',
                rect: ['513px', '62px','111px','37px','auto', 'auto'],
                text: "Signal from B to A, centered at 2150 Hz.",
                align: "left",
                font: ['Times New Roman, Times, serif', 10, "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: 'Text4',
                display: 'block',
                type: 'text',
                rect: ['148px', '66px','115px','55px','auto', 'auto'],
                text: "Spectrum of signal transmitted in one direction.",
                align: "justify",
                font: ['Times New Roman, Times, serif', 10, "rgba(26,82,139,1.00)", "bold", "none", "normal"]
            },
            {
                id: '_22',
                type: 'image',
                rect: ['339px', '107px','233px','179px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"22.png",'0px','0px']
            },
            {
                id: 'Text5',
                display: 'block',
                type: 'text',
                rect: ['503px', '66px','115px','55px','auto', 'auto'],
                text: "Spectrum of signal transmitted in the opposite direction.",
                align: "left",
                font: ['Times New Roman, Times, serif', 10, "rgba(207,58,58,1.00)", "bold", "none", "normal"]
            },
            {
                id: 'Text6',
                display: 'block',
                type: 'text',
                rect: ['226px', '351px','auto','auto','auto', 'auto'],
                text: "Click or Touch on the Figure for Each Step of the Animation",
                align: "left",
                font: ['Times New Roman, Times, serif', 14, "rgba(46,45,45,1)", "bold", "none", "normal"]
            }],
            symbolInstances: [

            ]
        },
    states: {
        "Base State": {
            "${__22}": [
                ["style", "top", '108px'],
                ["style", "left", '700px']
            ],
            "${_Text3}": [
                ["style", "font-size", '94%'],
                ["style", "display", 'block'],
                ["style", "font-family", 'Times New Roman, Times, serif'],
                ["style", "left", '469px'],
                ["style", "width", '155px']
            ],
            "${_Text2}": [
                ["style", "top", '87px'],
                ["style", "width", '149px'],
                ["style", "left", '134px'],
                ["style", "display", 'block'],
                ["color", "color", 'rgba(0,0,0,1.00)'],
                ["style", "font-family", 'Times New Roman, Times, serif'],
                ["style", "cursor", 'pointer'],
                ["style", "font-size", '94%']
            ],
            "${_Text6}": [
                ["style", "top", '341px'],
                ["style", "width", '402px'],
                ["style", "display", 'block'],
                ["style", "font-family", 'Times New Roman, Times, serif'],
                ["style", "left", '124px'],
                ["style", "font-size", '94%']
            ],
            "${__1}": [
                ["style", "left", '-241px'],
                ["style", "top", '113px']
            ],
            "${_Text}": [
                ["style", "top", '369px'],
                ["style", "width", '546px'],
                ["style", "font-weight", '700'],
                ["color", "color", 'rgba(46,45,45,1.00)'],
                ["style", "font-family", 'Times New Roman, Times, serif'],
                ["style", "left", '52px'],
                ["style", "font-size", '119%']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(255,255,255,1.00)'],
                ["style", "overflow", 'hidden'],
                ["style", "height", '400px'],
                ["style", "width", '650px']
            ],
            "${_Text5}": [
                ["style", "top", '67px'],
                ["style", "font-size", '94%'],
                ["style", "text-align", 'left'],
                ["style", "display", 'block'],
                ["color", "color", 'rgba(0,0,0,1.00)'],
                ["style", "font-family", 'Times New Roman, Times, serif'],
                ["style", "left", '489px'],
                ["style", "width", '155px']
            ],
            "${_Axis}": [
                ["style", "left", '19px'],
                ["style", "top", '22px']
            ],
            "${_Text4}": [
                ["style", "top", '67px'],
                ["style", "font-size", '94%'],
                ["style", "text-align", 'justify'],
                ["style", "display", 'block'],
                ["color", "color", 'rgba(0,0,0,1.00)'],
                ["style", "font-family", 'Times New Roman, Times, serif'],
                ["style", "left", '134px'],
                ["style", "width", '127px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 5000,
            autoPlay: true,
            timeline: [
                { id: "eid5", tween: [ "style", "${_Text2}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid6", tween: [ "style", "${_Text2}", "display", 'block', { fromValue: 'none'}], position: 160, duration: 0 },
                { id: "eid7", tween: [ "style", "${_Text2}", "display", 'none', { fromValue: 'block'}], position: 2370, duration: 0 },
                { id: "eid4", tween: [ "style", "${__1}", "left", '162px', { fromValue: '-241px'}], position: 250, duration: 2000 },
                { id: "eid27", tween: [ "style", "${__1}", "left", '162px', { fromValue: '162px'}], position: 2250, duration: 0 },
                { id: "eid21", tween: [ "style", "${_Text6}", "display", 'none', { fromValue: 'block'}], position: 4955, duration: 0 },
                { id: "eid54", tween: [ "style", "${_Text6}", "top", '341px', { fromValue: '341px'}], position: 0, duration: 0 },
                { id: "eid15", tween: [ "style", "${_Text4}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid16", tween: [ "style", "${_Text4}", "display", 'block', { fromValue: 'none'}], position: 5000, duration: 0 },
                { id: "eid17", tween: [ "style", "${_Text5}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid18", tween: [ "style", "${_Text5}", "display", 'block', { fromValue: 'none'}], position: 5000, duration: 0 },
                { id: "eid12", tween: [ "style", "${_Text3}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid13", tween: [ "style", "${_Text3}", "display", 'block', { fromValue: 'none'}], position: 2500, duration: 0 },
                { id: "eid14", tween: [ "style", "${_Text3}", "display", 'none', { fromValue: 'block'}], position: 4810, duration: 0 },
                { id: "eid11", tween: [ "style", "${__22}", "left", '339px', { fromValue: '700px'}], position: 2750, duration: 2000 },
                { id: "eid53", tween: [ "style", "${_Text6}", "left", '124px', { fromValue: '124px'}], position: 0, duration: 0 }            ]
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
})(jQuery, AdobeEdge, "EDGE-662751764");
