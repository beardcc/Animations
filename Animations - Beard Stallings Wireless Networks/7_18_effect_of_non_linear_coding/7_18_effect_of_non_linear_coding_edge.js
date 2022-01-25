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
                id: 'figure-1',
                type: 'image',
                rect: ['-81px', '-70px','792px','612px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"figure-1.png",'0px','0px']
            },
            {
                id: 'Text6',
                display: 'block',
                type: 'text',
                rect: ['424px', '345px','207px','48px','auto', 'auto'],
                text: "Weaker signal now can have 6 values from 5 to 10.",
                align: "left",
                font: ['Times New Roman, Times, serif', [94, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: 'arrow-12',
                display: 'block',
                type: 'image',
                rect: ['37px', '119px','121px','249px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"arrow-1.png",'0px','0px']
            },
            {
                id: 'arrow-2',
                display: 'block',
                type: 'image',
                rect: ['36px', '165px','128px','190px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"arrow-2.png",'0px','0px']
            },
            {
                id: 'Text5',
                display: 'block',
                type: 'text',
                rect: ['12px', '348px','202px','auto','auto', 'auto'],
                text: "Weaker signal only takes on the four values 6 to 9.",
                align: "left",
                font: ['Times New Roman, Times, serif', [94, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: 'arrow3',
                display: 'block',
                type: 'image',
                rect: ['473px', '179px','110px','175px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"arrow3.png",'0px','0px']
            },
            {
                id: 'arrow-4',
                display: 'block',
                type: 'image',
                rect: ['408px', '28px','93px','82px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"arrow-4.png",'0px','0px']
            },
            {
                id: 'Text7',
                display: 'block',
                type: 'text',
                rect: ['427px', '5px','168px','auto','auto', 'auto'],
                text: "Stronger signal still has 16 possible values.",
                align: "left",
                font: ['Times New Roman, Times, serif', [94, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: 'Text4',
                display: 'block',
                type: 'text',
                rect: ['6px', '344px','268px','18px','auto', 'auto'],
                text: "Stronger signal can take on 15 values from 0 to 15.",
                align: "left",
                font: ['Times New Roman, Times, serif', [94, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: 'Text',
                type: 'text',
                rect: ['159px', '415px','auto','auto','auto', 'auto'],
                text: "Figure 7.18 Effect of Nonlinear Coding",
                font: ['Times New Roman, Times, serif', [119, "%"], "rgba(0,0,0,1)", "700", "none", ""]
            },
            {
                id: 'Text2',
                display: 'block',
                type: 'text',
                rect: ['144px', '431px','auto','auto','auto', 'auto'],
                text: "Click or Touch on Figure for Each Step of the Animation",
                align: "left",
                font: ['Times New Roman, Times, serif', [94, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
            }],
            symbolInstances: [

            ]
        },
    states: {
        "Base State": {
            "${_Text7}": [
                ["style", "top", '10px'],
                ["style", "height", '17px'],
                ["style", "display", 'block'],
                ["style", "font-family", 'Times New Roman, Times, serif'],
                ["style", "left", '444px'],
                ["style", "width", '168px']
            ],
            "${_Text3}": [
                ["style", "top", '368px'],
                ["style", "left", '51px'],
                ["style", "display", 'block']
            ],
            "${_Text4}": [
                ["style", "top", '345px'],
                ["style", "height", '18px'],
                ["style", "display", 'block'],
                ["style", "font-family", 'Times New Roman, Times, serif'],
                ["style", "left", '8px'],
                ["style", "width", '196px']
            ],
            "${_Text2}": [
                ["style", "top", '393px'],
                ["style", "height", '23px'],
                ["style", "display", 'block'],
                ["style", "font-family", 'Times New Roman, Times, serif'],
                ["style", "left", '131px'],
                ["style", "font-size", '94%']
            ],
            "${_arrow-12}": [
                ["style", "top", '119px'],
                ["style", "left", '37px'],
                ["style", "display", 'block']
            ],
            "${_Text6}": [
                ["style", "top", '345px'],
                ["style", "height", '48px'],
                ["style", "display", 'block'],
                ["style", "font-family", 'Times New Roman, Times, serif'],
                ["style", "left", '424px'],
                ["style", "width", '207px']
            ],
            "${_Text5}": [
                ["style", "top", '348px'],
                ["style", "display", 'block'],
                ["style", "font-family", 'Times New Roman, Times, serif'],
                ["style", "left", '12px'],
                ["style", "width", '202px']
            ],
            "${_Text}": [
                ["style", "top", '415px'],
                ["style", "font-weight", '700'],
                ["style", "font-family", 'Times New Roman, Times, serif'],
                ["style", "left", '159px'],
                ["style", "font-size", '119%']
            ],
            "${_arrow-2}": [
                ["style", "top", '165px'],
                ["style", "left", '36px'],
                ["style", "display", 'block']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(255,255,255,1)'],
                ["style", "width", '630px'],
                ["style", "height", '450px'],
                ["style", "overflow", 'hidden']
            ],
            "${_arrow3}": [
                ["style", "top", '179px'],
                ["style", "left", '473px'],
                ["style", "display", 'block']
            ],
            "${_arrow-4}": [
                ["style", "top", '28px'],
                ["style", "left", '408px'],
                ["style", "display", 'block']
            ],
            "${_figure-1}": [
                ["style", "top", '-70px'],
                ["style", "left", '-81px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 3090,
            autoPlay: true,
            timeline: [
                { id: "eid36", tween: [ "style", "${_Text2}", "left", '131px', { fromValue: '131px'}], position: 500, duration: 0 },
                { id: "eid6", tween: [ "style", "${_Text4}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid7", tween: [ "style", "${_Text4}", "display", 'block', { fromValue: 'none'}], position: 570, duration: 0 },
                { id: "eid11", tween: [ "style", "${_Text4}", "display", 'none', { fromValue: 'block'}], position: 855, duration: 0 },
                { id: "eid31", tween: [ "style", "${_Text2}", "display", 'none', { fromValue: 'block'}], position: 3090, duration: 0 },
                { id: "eid43", tween: [ "style", "${_Text2}", "height", '23px', { fromValue: '23px'}], position: 1920, duration: 0 },
                { id: "eid13", tween: [ "style", "${_arrow-2}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid14", tween: [ "style", "${_arrow-2}", "display", 'block', { fromValue: 'none'}], position: 1070, duration: 0 },
                { id: "eid17", tween: [ "style", "${_arrow-2}", "display", 'none', { fromValue: 'block'}], position: 1500, duration: 0 },
                { id: "eid27", tween: [ "style", "${_Text7}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid28", tween: [ "style", "${_Text7}", "display", 'block', { fromValue: 'none'}], position: 2575, duration: 0 },
                { id: "eid29", tween: [ "style", "${_Text7}", "display", 'none', { fromValue: 'block'}], position: 2890, duration: 0 },
                { id: "eid4", tween: [ "style", "${_arrow-12}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid5", tween: [ "style", "${_arrow-12}", "display", 'block', { fromValue: 'none'}], position: 455, duration: 0 },
                { id: "eid12", tween: [ "style", "${_arrow-12}", "display", 'none', { fromValue: 'block'}], position: 855, duration: 0 },
                { id: "eid38", tween: [ "style", "${_Text7}", "left", '444px', { fromValue: '444px'}], position: 2750, duration: 0 },
                { id: "eid15", tween: [ "style", "${_Text5}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid16", tween: [ "style", "${_Text5}", "display", 'block', { fromValue: 'none'}], position: 1190, duration: 0 },
                { id: "eid18", tween: [ "style", "${_Text5}", "display", 'none', { fromValue: 'block'}], position: 1500, duration: 0 },
                { id: "eid21", tween: [ "style", "${_Text6}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid22", tween: [ "style", "${_Text6}", "display", 'block', { fromValue: 'none'}], position: 1865, duration: 0 },
                { id: "eid23", tween: [ "style", "${_Text6}", "display", 'none', { fromValue: 'block'}], position: 2250, duration: 0 },
                { id: "eid25", tween: [ "style", "${_arrow-4}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid26", tween: [ "style", "${_arrow-4}", "display", 'block', { fromValue: 'none'}], position: 2450, duration: 0 },
                { id: "eid30", tween: [ "style", "${_arrow-4}", "display", 'none', { fromValue: 'block'}], position: 2890, duration: 0 },
                { id: "eid19", tween: [ "style", "${_arrow3}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid20", tween: [ "style", "${_arrow3}", "display", 'block', { fromValue: 'none'}], position: 1710, duration: 0 },
                { id: "eid24", tween: [ "style", "${_arrow3}", "display", 'none', { fromValue: 'block'}], position: 2250, duration: 0 },
                { id: "eid37", tween: [ "style", "${_Text7}", "width", '168px', { fromValue: '168px'}], position: 2750, duration: 0 },
                { id: "eid42", tween: [ "style", "${_Text2}", "top", '393px', { fromValue: '393px'}], position: 1920, duration: 0 },
                { id: "eid39", tween: [ "style", "${_Text7}", "top", '10px', { fromValue: '10px'}], position: 2750, duration: 0 }            ]
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
})(jQuery, AdobeEdge, "EDGE-1138563806");
