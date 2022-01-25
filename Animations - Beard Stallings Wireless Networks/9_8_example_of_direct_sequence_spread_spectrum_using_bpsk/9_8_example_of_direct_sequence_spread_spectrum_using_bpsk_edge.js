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
                id: 'uh2',
                display: 'block',
                type: 'image',
                rect: ['6px', '7px','612px','231px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"uh2.png",'0px','0px']
            },
            {
                id: 'lh22',
                display: 'block',
                type: 'image',
                rect: ['6px', '237px','612px','247px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"lh2.png",'0px','0px']
            },
            {
                id: '_1r',
                display: 'block',
                type: 'image',
                rect: ['120px', '30px','60.3%','18.4%','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"1r.png",'0%','0%','422px','101px']
            },
            {
                id: '_2b',
                display: 'block',
                type: 'image',
                rect: ['121px', '353px','60.3%','16.9%','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"2b.png",'0%','0%','422px','93px']
            },
            {
                id: '_2r',
                display: 'block',
                type: 'image',
                rect: ['122px', '248px','60.3%','17.6%','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"2r.png",'0%','0%','422px','97px']
            },
            {
                id: '_1b',
                display: 'block',
                type: 'image',
                rect: ['122px', '136px','60.3%','17.6%','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"1b.png",'0%','0%','422px','97px']
            },
            {
                id: '_1arrow',
                display: 'block',
                type: 'image',
                rect: ['230px', '111px','347px','78px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"1arrow.png",'0px','0px']
            },
            {
                id: 'Text3',
                display: 'block',
                type: 'text',
                rect: ['570px', '115px','113px','54px','auto', 'auto'],
                text: "BPSK phase changes here.",
                align: "left",
                font: ['\'Times New Roman\', Times, serif', [94, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: 'Text',
                type: 'text',
                rect: ['58px', '523px','583px','27px','auto', 'auto'],
                text: "Figure 9.8 Example of Direct Sequence Spread Spectrum Using BPSK",
                font: ['Times New Roman, Times, serif', [119, "%"], "rgba(0,0,0,1)", "700", "none", ""]
            },
            {
                id: 'Text2',
                display: 'block',
                type: 'text',
                rect: ['151px', '493px','auto','auto','auto', 'auto'],
                text: "Click or Touch on Figure for Each Step of the Animation",
                align: "left",
                font: ['\'Times New Roman\', Times, serif', [94, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: '_2arrow',
                display: 'block',
                type: 'image',
                rect: ['229px', '328px','347px','78px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"2arrow.png",'0px','0px']
            },
            {
                id: 'Text4',
                display: 'block',
                type: 'text',
                rect: ['571px', '328px','114px','78px','auto', 'auto'],
                text: "Phase changes three times as frequently.",
                align: "left",
                font: ['\'Times New Roman\', Times, serif', [94, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
            }],
            symbolInstances: [

            ]
        },
    states: {
        "Base State": {
            "${_uh2}": [
                ["style", "top", '7px'],
                ["style", "left", '6px'],
                ["style", "display", 'block']
            ],
            "${__2arrow}": [
                ["style", "top", '328px'],
                ["style", "left", '229px'],
                ["style", "display", 'block']
            ],
            "${_Text3}": [
                ["style", "top", '115px'],
                ["style", "display", 'block'],
                ["style", "left", '570px'],
                ["style", "height", '54px']
            ],
            "${_Text2}": [
                ["style", "top", '504px'],
                ["style", "display", 'block'],
                ["style", "font-size", '94%'],
                ["style", "left", '162px'],
                ["style", "width", '375px']
            ],
            "${__1b}": [
                ["style", "display", 'block'],
                ["style", "top", '136px'],
                ["style", "left", '122px'],
                ["style", "width", '0%']
            ],
            "${__1r}": [
                ["style", "display", 'block'],
                ["style", "top", '30px'],
                ["style", "left", '120px'],
                ["style", "width", '0%']
            ],
            "${_Text}": [
                ["style", "top", '523px'],
                ["style", "font-size", '119%'],
                ["style", "font-weight", '700'],
                ["style", "font-family", 'Times New Roman, Times, serif'],
                ["style", "left", '58px'],
                ["style", "width", '583px']
            ],
            "${__2r}": [
                ["style", "display", 'block'],
                ["style", "top", '248px'],
                ["style", "left", '122px'],
                ["style", "width", '0%']
            ],
            "${__1arrow}": [
                ["style", "top", '111px'],
                ["style", "left", '230px'],
                ["style", "display", 'block']
            ],
            "${_lh22}": [
                ["style", "top", '237px'],
                ["style", "left", '6px'],
                ["style", "display", 'block']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(255,255,255,1)'],
                ["style", "overflow", 'hidden'],
                ["style", "height", '550px'],
                ["style", "width", '700px']
            ],
            "${__2b}": [
                ["style", "display", 'block'],
                ["style", "top", '353px'],
                ["style", "left", '121px'],
                ["style", "width", '0%']
            ],
            "${_Text4}": [
                ["style", "top", '328px'],
                ["style", "display", 'block'],
                ["style", "left", '571px'],
                ["style", "height", '78px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 7250,
            autoPlay: true,
            timeline: [
                { id: "eid21", tween: [ "style", "${__2b}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid23", tween: [ "style", "${__2b}", "display", 'block', { fromValue: 'none'}], position: 4000, duration: 0 },
                { id: "eid28", tween: [ "style", "${__2arrow}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid29", tween: [ "style", "${__2arrow}", "display", 'block', { fromValue: 'none'}], position: 6250, duration: 0 },
                { id: "eid33", tween: [ "style", "${__2arrow}", "display", 'none', { fromValue: 'block'}], position: 7000, duration: 0 },
                { id: "eid20", tween: [ "style", "${__2r}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid22", tween: [ "style", "${__2r}", "display", 'block', { fromValue: 'none'}], position: 4000, duration: 0 },
                { id: "eid1", tween: [ "style", "${_uh2}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid2", tween: [ "style", "${_uh2}", "display", 'block', { fromValue: 'none'}], position: 250, duration: 0 },
                { id: "eid38", tween: [ "style", "${_Text2}", "width", '375px', { fromValue: '375px'}], position: 5001, duration: 0 },
                { id: "eid10", tween: [ "style", "${__1r}", "width", '60.29%', { fromValue: '0%'}], position: 500, duration: 2000 },
                { id: "eid11", tween: [ "style", "${__1arrow}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid12", tween: [ "style", "${__1arrow}", "display", 'block', { fromValue: 'none'}], position: 2750, duration: 0 },
                { id: "eid16", tween: [ "style", "${__1arrow}", "display", 'none', { fromValue: 'block'}], position: 3500, duration: 0 },
                { id: "eid27", tween: [ "style", "${__2b}", "width", '60.29%', { fromValue: '0%'}], position: 4000, duration: 2000 },
                { id: "eid13", tween: [ "style", "${_Text3}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid14", tween: [ "style", "${_Text3}", "display", 'block', { fromValue: 'none'}], position: 3000, duration: 0 },
                { id: "eid15", tween: [ "style", "${_Text3}", "display", 'none', { fromValue: 'block'}], position: 3500, duration: 0 },
                { id: "eid4", tween: [ "style", "${__1r}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid6", tween: [ "style", "${__1r}", "display", 'block', { fromValue: 'none'}], position: 500, duration: 0 },
                { id: "eid3", tween: [ "style", "${__1b}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid5", tween: [ "style", "${__1b}", "display", 'block', { fromValue: 'none'}], position: 500, duration: 0 },
                { id: "eid39", tween: [ "style", "${_Text2}", "left", '162px', { fromValue: '162px'}], position: 5001, duration: 0 },
                { id: "eid30", tween: [ "style", "${_Text4}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid31", tween: [ "style", "${_Text4}", "display", 'block', { fromValue: 'none'}], position: 6500, duration: 0 },
                { id: "eid32", tween: [ "style", "${_Text4}", "display", 'none', { fromValue: 'block'}], position: 7000, duration: 0 },
                { id: "eid25", tween: [ "style", "${__2r}", "width", '60.29%', { fromValue: '0%'}], position: 4000, duration: 2000 },
                { id: "eid18", tween: [ "style", "${_lh22}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid19", tween: [ "style", "${_lh22}", "display", 'block', { fromValue: 'none'}], position: 3750, duration: 0 },
                { id: "eid34", tween: [ "style", "${_Text2}", "display", 'none', { fromValue: 'block'}], position: 7250, duration: 0 },
                { id: "eid8", tween: [ "style", "${__1b}", "width", '60.29%', { fromValue: '0%'}], position: 500, duration: 2000 }            ]
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
})(jQuery, AdobeEdge, "EDGE-105559037");
