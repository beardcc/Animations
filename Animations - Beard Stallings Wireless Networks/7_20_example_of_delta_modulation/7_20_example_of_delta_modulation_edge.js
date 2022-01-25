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
                id: 'figure',
                type: 'image',
                rect: ['0px', '18px','720px','494px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"figure.png",'0px','0px']
            },
            {
                id: 'Text',
                type: 'text',
                rect: ['168px', '552px','auto','auto','auto', 'auto'],
                text: "Figure 7.20 Example of  Delta Modulation",
                font: ['Times New Roman, Times, serif', [119, "%"], "rgba(0,0,0,1)", "700", "none", ""]
            },
            {
                id: 'Text2',
                display: 'block',
                type: 'text',
                rect: ['177px', '556px','auto','auto','auto', 'auto'],
                text: "Click or Touch on Figure for Each Step of the Animation",
                align: "left",
                font: ['Times New Roman, Times, serif', [94, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: 'arrow-1',
                display: 'block',
                type: 'image',
                rect: ['215px', '36px','272px','200px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"arrow-1.png",'0px','0px']
            },
            {
                id: 'arrow-2',
                display: 'block',
                type: 'image',
                rect: ['399px', '302px','48px','96px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"arrow-2.png",'0px','0px']
            },
            {
                id: 'Text4',
                display: 'block',
                type: 'text',
                rect: ['312px', '390px','338px','auto','auto', 'auto'],
                text: "Delta modulation must output +1 or -1 even when a signal is relatively constant.",
                align: "left",
                font: ['Times New Roman, Times, serif', [94, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: 'Text3',
                display: 'block',
                type: 'text',
                rect: ['425px', '13px','235px','auto','auto', 'auto'],
                text: "Step size does not keep up with rates of increase or decrease.",
                align: "left",
                font: ['Times New Roman, Times, serif', [94, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
            }],
            symbolInstances: [

            ]
        },
    states: {
        "Base State": {
            "${_figure}": [
                ["style", "top", '18px'],
                ["style", "left", '0px']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(255,255,255,1)'],
                ["style", "width", '670px'],
                ["style", "height", '590px'],
                ["style", "overflow", 'hidden']
            ],
            "${_Text}": [
                ["style", "top", '552px'],
                ["style", "font-weight", '700'],
                ["style", "font-family", 'Times New Roman, Times, serif'],
                ["style", "left", '168px'],
                ["style", "font-size", '119%']
            ],
            "${_arrow-2}": [
                ["style", "top", '302px'],
                ["style", "left", '399px'],
                ["style", "display", 'block']
            ],
            "${_Text3}": [
                ["style", "top", '13px'],
                ["style", "display", 'block'],
                ["style", "font-family", 'Times New Roman, Times, serif'],
                ["style", "left", '425px'],
                ["style", "width", '235px']
            ],
            "${_arrow-1}": [
                ["style", "top", '36px'],
                ["style", "left", '215px'],
                ["style", "display", 'block']
            ],
            "${_Text2}": [
                ["style", "top", '529px'],
                ["style", "display", 'block'],
                ["style", "font-family", 'Times New Roman, Times, serif'],
                ["style", "left", '151px'],
                ["style", "font-size", '94%']
            ],
            "${_Text4}": [
                ["style", "top", '390px'],
                ["style", "display", 'block'],
                ["style", "font-family", 'Times New Roman, Times, serif'],
                ["style", "left", '312px'],
                ["style", "width", '338px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 1445,
            autoPlay: true,
            timeline: [
                { id: "eid10", tween: [ "style", "${_Text4}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid11", tween: [ "style", "${_Text4}", "display", 'block', { fromValue: 'none'}], position: 1000, duration: 0 },
                { id: "eid12", tween: [ "style", "${_Text4}", "display", 'none', { fromValue: 'block'}], position: 1295, duration: 0 },
                { id: "eid1", tween: [ "style", "${_arrow-1}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid2", tween: [ "style", "${_arrow-1}", "display", 'block', { fromValue: 'none'}], position: 250, duration: 0 },
                { id: "eid7", tween: [ "style", "${_arrow-1}", "display", 'none', { fromValue: 'block'}], position: 655, duration: 0 },
                { id: "eid14", tween: [ "style", "${_Text2}", "display", 'none', { fromValue: 'block'}], position: 1445, duration: 0 },
                { id: "eid8", tween: [ "style", "${_arrow-2}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid9", tween: [ "style", "${_arrow-2}", "display", 'block', { fromValue: 'none'}], position: 890, duration: 0 },
                { id: "eid13", tween: [ "style", "${_arrow-2}", "display", 'none', { fromValue: 'block'}], position: 1295, duration: 0 },
                { id: "eid3", tween: [ "style", "${_Text3}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid4", tween: [ "style", "${_Text3}", "display", 'block', { fromValue: 'none'}], position: 335, duration: 0 },
                { id: "eid6", tween: [ "style", "${_Text3}", "display", 'none', { fromValue: 'block'}], position: 655, duration: 0 }            ]
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
})(jQuery, AdobeEdge, "EDGE-1141786332");
