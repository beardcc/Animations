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
                id: 'bg',
                type: 'image',
                rect: ['38px', '24px','519px','268px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"bg.png",'0px','0px']
            },
            {
                id: 'Text',
                type: 'text',
                rect: ['7px', '337px','695px','26px','auto', 'auto'],
                text: "Figure 6.13 Typical Slow and Fast Fading in an Urban Mobile  Environment",
                font: ['Times New Roman, Times, serif', 19, "rgba(0,0,0,1)", "700", "none", ""]
            },
            {
                id: 'a',
                display: 'block',
                type: 'image',
                rect: ['95px', '84px','71.6%','29.5%','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"a.png",'0%','0%','451px','112px']
            },
            {
                id: 'b',
                type: 'image',
                rect: ['99px', '71px','71.3%','39.7%','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"b.png",'0%','0%','449px','151px']
            },
            {
                id: 'Text3',
                display: 'block',
                type: 'text',
                rect: ['133px', '305px','394px','26px','auto', 'auto'],
                text: "Click or Touch on Figure for Each Step of the Animation",
                align: "left",
                font: ['\'Times New Roman\', Times, serif', 15, "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: 'Text4',
                display: 'block',
                type: 'text',
                rect: ['112px', '11px','451px','26px','auto', 'auto'],
                text: "Average received power gradually decreases with distance. Presence or absence of obstacles keeps the curve from being linear.",
                align: "center",
                font: ['\'Times New Roman\', Times, serif', 15, "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: 'Text6',
                display: 'block',
                type: 'text',
                rect: ['104px', '13px','439px','39px','auto', 'auto'],
                text: "This is the actual signal strength. Multipath causes severe signal strength changes from the average over small distances.   ",
                align: "center",
                font: ['\'Times New Roman\', Times, serif', 15, "rgba(0,0,0,1)", "bold", "none", "normal"]
            }],
            symbolInstances: [

            ]
        },
    states: {
        "Base State": {
            "${_bg}": [
                ["style", "left", '38px'],
                ["style", "top", '24px']
            ],
            "${_b}": [
                ["style", "top", '71px'],
                ["style", "left", '99px'],
                ["style", "width", '0%']
            ],
            "${_Text}": [
                ["style", "top", '337px'],
                ["style", "font-size", '19px'],
                ["style", "font-weight", '700'],
                ["style", "font-family", 'Times New Roman, Times, serif'],
                ["style", "left", '7px'],
                ["style", "width", '695px']
            ],
            "${_a}": [
                ["style", "display", 'block'],
                ["style", "top", '84px'],
                ["style", "left", '95px'],
                ["style", "width", '0%']
            ],
            "${_Text3}": [
                ["style", "display", 'block'],
                ["style", "top", '309px'],
                ["style", "left", '133px'],
                ["style", "font-size", '15px']
            ],
            "${_Text6}": [
                ["style", "display", 'block'],
                ["style", "top", '13px'],
                ["style", "left", '104px'],
                ["style", "width", '439px']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(255,255,255,1)'],
                ["style", "overflow", 'hidden'],
                ["style", "height", '380px'],
                ["style", "width", '630px']
            ],
            "${_Text4}": [
                ["style", "top", '11px'],
                ["style", "text-align", 'center'],
                ["style", "display", 'block'],
                ["style", "left", '112px'],
                ["style", "width", '451px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 6000,
            autoPlay: true,
            timeline: [
                { id: "eid12", tween: [ "style", "${_b}", "width", '71.27%', { fromValue: '0%'}], position: 3250, duration: 2000 },
                { id: "eid3", tween: [ "style", "${_Text4}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid4", tween: [ "style", "${_Text4}", "display", 'block', { fromValue: 'none'}], position: 250, duration: 0 },
                { id: "eid7", tween: [ "style", "${_Text4}", "display", 'none', { fromValue: 'block'}], position: 2750, duration: 0 },
                { id: "eid9", tween: [ "style", "${_Text6}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid10", tween: [ "style", "${_Text6}", "display", 'block', { fromValue: 'none'}], position: 3000, duration: 0 },
                { id: "eid13", tween: [ "style", "${_Text6}", "display", 'none', { fromValue: 'block'}], position: 5500, duration: 0 },
                { id: "eid15", tween: [ "style", "${_Text3}", "display", 'none', { fromValue: 'block'}], position: 6000, duration: 0 },
                { id: "eid16", tween: [ "style", "${_Text3}", "top", '309px', { fromValue: '309px'}], position: 1640, duration: 0 },
                { id: "eid6", tween: [ "style", "${_a}", "width", '71.59%', { fromValue: '0%'}], position: 500, duration: 2000 },
                { id: "eid8", tween: [ "style", "${_a}", "display", 'none', { fromValue: 'block'}], position: 2750, duration: 0 },
                { id: "eid14", tween: [ "style", "${_a}", "display", 'block', { fromValue: 'none'}], position: 5750, duration: 0 }            ]
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
})(jQuery, AdobeEdge, "EDGE-119561227");
