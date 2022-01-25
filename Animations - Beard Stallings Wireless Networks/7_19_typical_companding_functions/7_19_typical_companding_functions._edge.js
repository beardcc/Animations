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
                id: 'graph-1',
                type: 'image',
                rect: ['-103px', '-33px','792px','612px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"graph-1.png",'0px','0px']
            },
            {
                id: 'Text3',
                display: 'none',
                type: 'text',
                rect: ['44px', '479px','512px','auto','auto', 'auto'],
                text: "Signals with low amplitude are proportionally more amplified.",
                align: "left",
                font: ['Times New Roman, Times, serif', [94, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: 'arrow-1',
                display: 'none',
                type: 'image',
                rect: ['95px', '125px','52px','360px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"arrow-1.png",'0px','0px']
            },
            {
                id: 'arrow-2',
                display: 'none',
                type: 'image',
                rect: ['153px', '203px','44px','287px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"arrow-2.png",'0px','0px']
            },
            {
                id: 'Text2',
                display: 'block',
                type: 'text',
                rect: ['116px', '533','auto','auto','auto', 'auto'],
                text: "Click or touch on Figure for Each Step of the Animation",
                align: "left",
                font: ['Times New Roman, Times, serif', [94, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: 'Text',
                type: 'text',
                rect: ['97px', '548px','auto','auto','auto', 'auto'],
                text: "Figure 7.19 Typical Companding Functions",
                font: ['Times New Roman, Times, serif', [119, "%"], "rgba(0,0,0,1)", "700", "none", ""]
            }],
            symbolInstances: [

            ]
        },
    states: {
        "Base State": {
            "${_graph-1}": [
                ["style", "left", '-103px'],
                ["style", "top", '-33px']
            ],
            "${_Text}": [
                ["style", "top", '532px'],
                ["style", "font-weight", '700'],
                ["style", "font-family", 'Times New Roman, Times, serif'],
                ["style", "left", '98px'],
                ["style", "font-size", '119%']
            ],
            "${_arrow-2}": [
                ["style", "top", '203px'],
                ["style", "left", '153px'],
                ["style", "display", 'none']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(255,255,255,1)'],
                ["style", "overflow", 'hidden'],
                ["style", "height", '560px'],
                ["style", "width", '550px']
            ],
            "${_Text2}": [
                ["style", "top", '514px'],
                ["style", "display", 'block'],
                ["style", "font-family", 'Times New Roman, Times, serif'],
                ["style", "left", '91px'],
                ["style", "font-size", '94%']
            ],
            "${_arrow-1}": [
                ["style", "top", '125px'],
                ["style", "left", '95px'],
                ["style", "display", 'none']
            ],
            "${_Text3}": [
                ["style", "top", '470px'],
                ["style", "display", 'none'],
                ["style", "font-family", 'Times New Roman, Times, serif'],
                ["style", "left", '44px'],
                ["style", "width", '400px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 1500,
            autoPlay: true,
            timeline: [
                { id: "eid30", tween: [ "style", "${_Text2}", "left", '91px', { fromValue: '91px'}], position: 1205, duration: 0 },
                { id: "eid19", tween: [ "style", "${_Text3}", "width", '400px', { fromValue: '400px'}], position: 1050, duration: 0 },
                { id: "eid1", tween: [ "style", "${_Text3}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid6", tween: [ "style", "${_Text3}", "display", 'block', { fromValue: 'none'}], position: 750, duration: 0 },
                { id: "eid7", tween: [ "style", "${_Text3}", "display", 'none', { fromValue: 'block'}], position: 1250, duration: 0 },
                { id: "eid3", tween: [ "style", "${_arrow-2}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid5", tween: [ "style", "${_arrow-2}", "display", 'block', { fromValue: 'none'}], position: 500, duration: 0 },
                { id: "eid9", tween: [ "style", "${_arrow-2}", "display", 'none', { fromValue: 'block'}], position: 1250, duration: 0 },
                { id: "eid27", tween: [ "style", "${_Text2}", "top", '514px', { fromValue: '514px'}], position: 1205, duration: 0 },
                { id: "eid10", tween: [ "style", "${_Text2}", "display", 'none', { fromValue: 'block'}], position: 1500, duration: 0 },
                { id: "eid32", tween: [ "style", "${_Text3}", "top", '470px', { fromValue: '470px'}], position: 1205, duration: 0 },
                { id: "eid28", tween: [ "style", "${_Text}", "left", '98px', { fromValue: '98px'}], position: 1205, duration: 0 },
                { id: "eid2", tween: [ "style", "${_arrow-1}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid4", tween: [ "style", "${_arrow-1}", "display", 'block', { fromValue: 'none'}], position: 460, duration: 0 },
                { id: "eid8", tween: [ "style", "${_arrow-1}", "display", 'none', { fromValue: 'block'}], position: 1250, duration: 0 },
                { id: "eid29", tween: [ "style", "${_Text}", "top", '532px', { fromValue: '532px'}], position: 1205, duration: 0 }            ]
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
})(jQuery, AdobeEdge, "EDGE-1129813527");
