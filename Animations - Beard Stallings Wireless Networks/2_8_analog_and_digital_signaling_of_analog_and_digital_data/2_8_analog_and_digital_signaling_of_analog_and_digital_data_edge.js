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
                id: '_2',
                display: 'block',
                type: 'image',
                rect: ['43px', '100px','486px','112px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"2.png",'0px','0px']
            },
            {
                id: '_2Copy',
                display: 'block',
                type: 'image',
                rect: ['46px', '217px','486px','100px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"2.png",'0px','0px']
            },
            {
                id: '_2Copy2',
                display: 'block',
                type: 'image',
                rect: ['51px', '430px','486px','100px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"2.png",'0px','0px']
            },
            {
                id: '_2Copy3',
                display: 'block',
                type: 'image',
                rect: ['51px', '537px','486px','112px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"2.png",'0px','0px']
            },
            {
                id: '_1',
                type: 'image',
                rect: ['-20px', '0px','612px','792px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"1.png",'0px','0px']
            },
            {
                id: 'Text9',
                display: 'block',
                type: 'text',
                rect: ['237px', '712px','0','0','auto', 'auto'],
                text: "Click or Touch on Figure for Each Step of the Animation",
                align: "left",
                font: ['Times New Roman, Times, serif', [94, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: 'Text2',
                display: 'block',
                type: 'text',
                rect: ['561px', '130px','139px','75px','auto', 'auto'],
                text: "Reduce spectrum to 300 to 3400 Hz.",
                align: "left",
                font: ['Times New Roman, Times, serif', [75, "%"], "rgba(0,0,0,1)", "700", "none", "normal"]
            },
            {
                id: 'Text3',
                display: 'block',
                type: 'text',
                rect: ['561px', '249px','129px','65px','auto', 'auto'],
                text: "Convert pulses to analog signals.",
                align: "left",
                font: ['Times New Roman, Times, serif', [75, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: 'Text4',
                display: 'block',
                type: 'text',
                rect: ['561px', '450px','149px','46px','auto', 'auto'],
                text: "Approximate analog signal (such as voice) by a digital signal.",
                align: "left",
                font: ['Times New Roman, Times, serif', [75, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: 'Text5',
                display: 'block',
                type: 'text',
                rect: ['571px', '565px','139px','65px','auto', 'auto'],
                text: "Reformat digital signal to improve communication.",
                align: "left",
                font: ['Times New Roman, Times, serif', [75, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: 'Text7',
                type: 'text',
                rect: ['121px', '739px','0','0','auto', 'auto'],
                text: "Figure  2.8  Analog and Digital Signaling of Analog and Digital Data  ",
                align: "left",
                font: ['Times New Roman, Times, serif', [119, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
            }],
            symbolInstances: [

            ]
        },
    states: {
        "Base State": {
            "${__2Copy2}": [
                ["style", "top", '430px'],
                ["style", "left", '51px'],
                ["style", "display", 'block']
            ],
            "${_Text3}": [
                ["style", "display", 'block'],
                ["style", "font-family", 'Times New Roman, Times, serif'],
                ["style", "top", '249px']
            ],
            "${__2Copy}": [
                ["style", "display", 'block'],
                ["style", "left", '46px'],
                ["style", "top", '217px']
            ],
            "${__2}": [
                ["style", "height", '112px'],
                ["style", "top", '100px'],
                ["style", "left", '43px'],
                ["style", "display", 'block']
            ],
            "${__2Copy3}": [
                ["style", "height", '112px'],
                ["style", "top", '537px'],
                ["style", "left", '51px'],
                ["style", "display", 'block']
            ],
            "${__1}": [
                ["style", "left", '-20px'],
                ["style", "top", '0px']
            ],
            "${_Text5}": [
                ["style", "display", 'block'],
                ["style", "font-family", 'Times New Roman, Times, serif'],
                ["style", "top", '565px'],
                ["style", "width", '139px']
            ],
            "${_Text2}": [
                ["style", "top", '130px'],
                ["style", "font-size", '75%'],
                ["style", "font-weight", '700'],
                ["style", "display", 'block'],
                ["style", "font-family", 'Times New Roman, Times, serif'],
                ["style", "left", '561px'],
                ["style", "width", '103px']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(255,255,255,1)'],
                ["style", "overflow", 'hidden'],
                ["style", "height", '800px'],
                ["style", "width", '720px']
            ],
            "${_Text9}": [
                ["style", "top", '711px'],
                ["style", "font-size", '94%'],
                ["style", "display", 'block'],
                ["style", "font-family", 'Times New Roman, Times, serif'],
                ["style", "left", '119px'],
                ["style", "width", '373px']
            ],
            "${_Text7}": [
                ["style", "top", '739px'],
                ["style", "font-size", '119%'],
                ["style", "font-family", 'Times New Roman, Times, serif'],
                ["style", "left", '27px'],
                ["style", "width", '558px']
            ],
            "${_Text4}": [
                ["style", "top", '450px'],
                ["style", "display", 'block'],
                ["style", "font-family", 'Times New Roman, Times, serif'],
                ["style", "left", '561px'],
                ["style", "width", '149px']
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
                { id: "eid14", tween: [ "style", "${__2Copy2}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid15", tween: [ "style", "${__2Copy2}", "display", 'block', { fromValue: 'none'}], position: 2500, duration: 0 },
                { id: "eid19", tween: [ "style", "${__2Copy2}", "display", 'none', { fromValue: 'block'}], position: 3000, duration: 0 },
                { id: "eid16", tween: [ "style", "${_Text4}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid17", tween: [ "style", "${_Text4}", "display", 'block', { fromValue: 'none'}], position: 2500, duration: 0 },
                { id: "eid18", tween: [ "style", "${_Text4}", "display", 'none', { fromValue: 'block'}], position: 3000, duration: 0 },
                { id: "eid10", tween: [ "style", "${_Text3}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid11", tween: [ "style", "${_Text3}", "display", 'block', { fromValue: 'none'}], position: 1500, duration: 0 },
                { id: "eid12", tween: [ "style", "${_Text3}", "display", 'none', { fromValue: 'block'}], position: 2000, duration: 0 },
                { id: "eid36", tween: [ "style", "${_Stage}", "width", '720px', { fromValue: '720px'}], position: 3965, duration: 0 },
                { id: "eid3", tween: [ "style", "${_Text2}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid4", tween: [ "style", "${_Text2}", "display", 'block', { fromValue: 'none'}], position: 500, duration: 0 },
                { id: "eid5", tween: [ "style", "${_Text2}", "display", 'none', { fromValue: 'block'}], position: 1000, duration: 0 },
                { id: "eid1", tween: [ "style", "${__2}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid2", tween: [ "style", "${__2}", "display", 'block', { fromValue: 'none'}], position: 500, duration: 0 },
                { id: "eid7", tween: [ "style", "${__2}", "display", 'none', { fromValue: 'block'}], position: 1000, duration: 0 },
                { id: "eid34", tween: [ "style", "${_Text7}", "left", '27px', { fromValue: '27px'}], position: 3670, duration: 0 },
                { id: "eid22", tween: [ "style", "${_Text5}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid23", tween: [ "style", "${_Text5}", "display", 'block', { fromValue: 'none'}], position: 3500, duration: 0 },
                { id: "eid25", tween: [ "style", "${_Text5}", "display", 'none', { fromValue: 'block'}], position: 4000, duration: 0 },
                { id: "eid20", tween: [ "style", "${__2Copy3}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid21", tween: [ "style", "${__2Copy3}", "display", 'block', { fromValue: 'none'}], position: 3500, duration: 0 },
                { id: "eid26", tween: [ "style", "${__2Copy3}", "display", 'none', { fromValue: 'block'}], position: 4000, duration: 0 },
                { id: "eid33", tween: [ "style", "${_Text9}", "left", '119px', { fromValue: '119px'}], position: 3670, duration: 0 },
                { id: "eid30", tween: [ "style", "${_Text2}", "width", '103px', { fromValue: '103px'}], position: 680, duration: 0 },
                { id: "eid8", tween: [ "style", "${__2Copy}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid9", tween: [ "style", "${__2Copy}", "display", 'block', { fromValue: 'none'}], position: 1500, duration: 0 },
                { id: "eid13", tween: [ "style", "${__2Copy}", "display", 'none', { fromValue: 'block'}], position: 2000, duration: 0 },
                { id: "eid24", tween: [ "style", "${_Text9}", "display", 'none', { fromValue: 'block'}], position: 4250, duration: 0 }            ]
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
})(jQuery, AdobeEdge, "EDGE-829366148");
