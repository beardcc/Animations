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
                id: '_12',
                type: 'image',
                rect: ['44px', '53px','505px','260px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"12.png",'0px','0px']
            },
            {
                id: '_2',
                type: 'image',
                rect: ['51px', '399px','505px','260px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"2.png",'0px','0px']
            },
            {
                id: 'Text',
                type: 'text',
                rect: ['274px', '341px','0','0','auto', 'auto'],
                text: "(a) Sine Wave",
                font: ['Times New Roman, Times, serif', [75, "%"], "rgba(0,0,0,1)", "700", "none", ""]
            },
            {
                id: 'Text2',
                type: 'text',
                rect: ['278px', '687px','0','0','auto', 'auto'],
                text: "(b) Square Wave<br><br>",
                align: "left",
                font: ['Times New Roman, Times, serif', [75, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: 'Text3',
                type: 'text',
                rect: ['129px', '767px','auto','auto','auto', 'auto'],
                text: "Figure 2.2 Examples of Periodic Signals",
                align: "left",
                font: ['Times New Roman, Times, serif', [119, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: 'Text6',
                display: 'none',
                type: 'text',
                rect: ['196px', '39px','322px','35px','auto', 'auto'],
                text: "Same value T seconds later<br><i>S(t) = S(t+T)</i>.",
                align: "center",
                font: ['Times New Roman, Times, serif', [75, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: '_3',
                display: 'none',
                type: 'image',
                rect: ['268px', '106px','185px','35px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"3.png",'0px','0px']
            },
            {
                id: 'Text7',
                display: 'block',
                type: 'text',
                rect: ['228px', '738px','0','0','auto', 'auto'],
                text: "Click or Touch on Figure for Each Step of the Animation",
                align: "center",
                font: ['Times New Roman, Times, serif', [94, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: 'Blank-page',
                display: 'block',
                type: 'image',
                rect: ['3px', '15px','593px','363px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"Blank-page.png",'0px','0px']
            },
            {
                id: 'Blank-pageCopy',
                display: 'block',
                type: 'image',
                rect: ['7px', '384px','593px','363px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"Blank-page.png",'0px','0px']
            }],
            symbolInstances: [

            ]
        },
    states: {
        "Base State": {
            "${_Text7}": [
                ["style", "top", '743px'],
                ["style", "font-size", '94%'],
                ["style", "display", 'block'],
                ["style", "font-family", 'Times New Roman, Times, serif'],
                ["style", "left", '71px'],
                ["style", "width", '449px']
            ],
            "${_Blank-page}": [
                ["style", "top", '15px'],
                ["style", "left", '3px'],
                ["style", "display", 'block']
            ],
            "${_Text3}": [
                ["style", "top", '767px'],
                ["style", "width", '333px'],
                ["style", "font-family", 'Times New Roman, Times, serif'],
                ["style", "left", '129px'],
                ["style", "font-size", '119%']
            ],
            "${__2}": [
                ["style", "left", '51px'],
                ["style", "top", '399px']
            ],
            "${__12}": [
                ["style", "left", '44px'],
                ["style", "top", '53px']
            ],
            "${_Text6}": [
                ["style", "top", '39px'],
                ["style", "font-size", '94%'],
                ["style", "text-align", 'center'],
                ["style", "height", '35px'],
                ["style", "display", 'none'],
                ["style", "font-family", 'Times New Roman, Times, serif'],
                ["style", "left", '196px'],
                ["style", "width", '322px']
            ],
            "${_Text}": [
                ["style", "top", '341px'],
                ["style", "width", '78px'],
                ["style", "font-weight", '700'],
                ["style", "height", '25px'],
                ["style", "font-family", 'Times New Roman, Times, serif'],
                ["style", "left", '274px'],
                ["style", "font-size", '75%']
            ],
            "${_Blank-pageCopy}": [
                ["style", "top", '384px'],
                ["style", "left", '7px'],
                ["style", "display", 'block']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(255,255,255,1)'],
                ["style", "width", '600px'],
                ["style", "height", '800px'],
                ["style", "overflow", 'hidden']
            ],
            "${__3}": [
                ["style", "top", '106px'],
                ["style", "display", 'none'],
                ["style", "left", '274px'],
                ["style", "width", '185px']
            ],
            "${_Text2}": [
                ["style", "top", '687px'],
                ["style", "font-family", 'Times New Roman, Times, serif'],
                ["style", "left", '278px'],
                ["style", "width", '91px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 2500,
            autoPlay: true,
            timeline: [
                { id: "eid18", tween: [ "style", "${_Text6}", "font-size", '94%', { fromValue: '15px'}], position: 1500, duration: 0 },
                { id: "eid9", tween: [ "style", "${_Text7}", "display", 'none', { fromValue: 'block'}], position: 2500, duration: 0 },
                { id: "eid2", tween: [ "style", "${__3}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid3", tween: [ "style", "${__3}", "display", 'block', { fromValue: 'none'}], position: 1000, duration: 0 },
                { id: "eid7", tween: [ "style", "${__3}", "display", 'none', { fromValue: 'block'}], position: 2500, duration: 0 },
                { id: "eid19", tween: [ "style", "${_Blank-page}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid20", tween: [ "style", "${_Blank-page}", "display", 'none', { fromValue: 'block'}], position: 445, duration: 0 },
                { id: "eid1", tween: [ "style", "${_Text6}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid4", tween: [ "style", "${_Text6}", "display", 'block', { fromValue: 'none'}], position: 1290, duration: 0 },
                { id: "eid8", tween: [ "style", "${_Text6}", "display", 'none', { fromValue: 'block'}], position: 2500, duration: 0 },
                { id: "eid13", tween: [ "style", "${_Text7}", "width", '449px', { fromValue: '449px'}], position: 0, duration: 0 },
                { id: "eid35", tween: [ "style", "${_Text7}", "left", '88px', { fromValue: '71px'}], position: 1840, duration: 515 },
                { id: "eid17", tween: [ "style", "${__3}", "left", '274px', { fromValue: '274px'}], position: 1000, duration: 0 },
                { id: "eid21", tween: [ "style", "${_Blank-pageCopy}", "display", 'none', { fromValue: 'block'}], position: 2075, duration: 0 },
                { id: "eid36", tween: [ "style", "${_Text7}", "top", '746px', { fromValue: '743px'}], position: 1840, duration: 515 }            ]
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
})(jQuery, AdobeEdge, "EDGE-645036049");
