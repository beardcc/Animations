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
                id: 'arrow16',
                display: 'none',
                type: 'image',
                rect: ['258px', '168px','72px','32px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"arrow16.png",'0px','0px']
            },
            {
                id: 'part22',
                display: 'none',
                type: 'image',
                rect: ['294px', '80px','242px','211px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"part2.png",'0px','0px']
            },
            {
                id: 'Text5',
                display: 'none',
                type: 'text',
                rect: ['252px', '38px','auto','auto','auto', 'auto'],
                text: "Channel creates multiple signals with different delays <br>and attenuation factors. These add together at the receiver.",
                align: "left",
                font: ['\'Times New Roman\', Times, serif', [94, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: 'arrow122',
                display: 'none',
                type: 'image',
                rect: ['548px', '186px','40px','143px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"arrow12.png",'0px','0px']
            },
            {
                id: 'Text',
                display: 'block',
                type: 'text',
                rect: ['150px', '636px','auto','auto','auto', 'auto'],
                text: "Click or Touch on Figure Each Step of the Animation",
                font: ['Times New Roman, Times, serif', [94, "%"], "rgba(0,0,0,1)", "700", "none", ""]
            },
            {
                id: 'Text2',
                type: 'text',
                rect: ['162px', '624px','auto','auto','auto', 'auto'],
                text: "Figure  9.12   Principle of RAKE Receiver",
                align: "left",
                font: ['\'Times New Roman\', Times, serif', [119, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: 'part12',
                display: 'none',
                type: 'image',
                rect: ['78px', '148px','205px','131px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"part1.png",'0px','0px']
            },
            {
                id: 'Text4',
                display: 'none',
                type: 'text',
                rect: ['99px', '83px','auto','auto','auto', 'auto'],
                text: "DSSS signal generated<br>at the transmitter",
                align: "left",
                font: ['\'Times New Roman\', Times, serif', [94, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: 'part32',
                display: 'none',
                type: 'image',
                rect: ['107px', '337px','289px','125px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"part3.png",'0px','0px']
            },
            {
                id: 'Text6',
                display: 'none',
                type: 'text',
                rect: ['475px', '354px','auto','auto','auto', 'auto'],
                text: "Receiver correlates <br>received signal with the <br>code and amplifies with <br>weighting factors.",
                align: "left",
                font: ['\'Times New Roman\', Times, serif', [94, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: 'part42',
                display: 'none',
                type: 'image',
                rect: ['219px', '321px','279px','245px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"part4.png",'0px','0px']
            },
            {
                id: 'Text7',
                display: 'none',
                type: 'text',
                rect: ['471px', '462px','auto','auto','auto', 'auto'],
                text: "Receiver also correlates<br>with time shifted versions<br>of the same code to <br>retrieve time delayed <br>multipath signals.",
                align: "left",
                font: ['\'Times New Roman\', Times, serif', [94, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: 'arrow162',
                display: 'none',
                type: 'image',
                rect: ['68px', '421px','72px','32px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"arrow16.png",'0px','0px']
            },
            {
                id: 'arrow1333',
                display: 'none',
                type: 'image',
                rect: ['65px', '281px','509px','49px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"arrow133.png",'0px','0px']
            },
            {
                id: 'arrow143',
                display: 'none',
                type: 'image',
                rect: ['72px', '306px','36px','146px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"arrow14.png",'0px','0px']
            },
            {
                id: 'arrow113',
                display: 'none',
                type: 'image',
                rect: ['505px', '175px','87px','45px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"arrow11.png",'0px','0px']
            }],
            symbolInstances: [

            ]
        },
    states: {
        "Base State": {
            "${_Text7}": [
                ["style", "top", '462px'],
                ["style", "left", '471px'],
                ["style", "display", 'none']
            ],
            "${_Text2}": [
                ["style", "top", '624px'],
                ["style", "left", '162px'],
                ["style", "font-size", '119%']
            ],
            "${_arrow1333}": [
                ["style", "display", 'none'],
                ["style", "top", '281px'],
                ["style", "left", '533px'],
                ["style", "width", '41px']
            ],
            "${_part22}": [
                ["style", "top", '80px'],
                ["style", "left", '294px'],
                ["style", "display", 'none']
            ],
            "${_part12}": [
                ["style", "top", '148px'],
                ["style", "left", '-225px'],
                ["style", "display", 'none']
            ],
            "${_Text4}": [
                ["style", "top", '83px'],
                ["style", "display", 'none'],
                ["style", "left", '99px'],
                ["style", "font-size", '94%']
            ],
            "${_arrow162}": [
                ["style", "display", 'none'],
                ["style", "top", '420px'],
                ["style", "left", '67px'],
                ["style", "width", '27px']
            ],
            "${_arrow143}": [
                ["style", "height", '24px'],
                ["style", "display", 'none'],
                ["style", "left", '70px'],
                ["style", "top", '306px']
            ],
            "${_arrow16}": [
                ["style", "display", 'none'],
                ["style", "top", '168px'],
                ["style", "left", '255px'],
                ["style", "width", '17px']
            ],
            "${_arrow113}": [
                ["style", "display", 'none'],
                ["style", "top", '175px'],
                ["style", "left", '505px'],
                ["style", "width", '9px']
            ],
            "${_Text6}": [
                ["style", "top", '354px'],
                ["style", "left", '475px'],
                ["style", "display", 'none']
            ],
            "${_Text}": [
                ["style", "top", '600px'],
                ["style", "font-weight", '700'],
                ["style", "display", 'block'],
                ["style", "font-family", 'Times New Roman, Times, serif'],
                ["style", "left", '154px'],
                ["style", "font-size", '94%']
            ],
            "${_Text5}": [
                ["style", "top", '38px'],
                ["style", "left", '252px'],
                ["style", "display", 'none']
            ],
            "${_part42}": [
                ["style", "top", '321px'],
                ["style", "left", '219px'],
                ["style", "display", 'none']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(255,255,255,1)'],
                ["style", "width", '650px'],
                ["style", "height", '650px'],
                ["style", "overflow", 'hidden']
            ],
            "${_part32}": [
                ["style", "top", '337px'],
                ["style", "left", '107px'],
                ["style", "display", 'none']
            ],
            "${_arrow122}": [
                ["style", "height", '6px'],
                ["style", "display", 'none'],
                ["style", "left", '548px'],
                ["style", "top", '186px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 9310,
            autoPlay: true,
            timeline: [
                { id: "eid168", tween: [ "style", "${_arrow1333}", "left", '63px', { fromValue: '533px'}], position: 5054, duration: 800 },
                { id: "eid181", tween: [ "style", "${_arrow113}", "display", 'block', { fromValue: 'none'}], position: 3854, duration: 0 },
                { id: "eid122", tween: [ "style", "${_arrow122}", "height", '143px', { fromValue: '6px'}], position: 4454, duration: 600 },
                { id: "eid114", tween: [ "style", "${_part22}", "display", 'block', { fromValue: 'none'}], position: 3055, duration: 0 },
                { id: "eid171", tween: [ "style", "${_arrow143}", "display", 'block', { fromValue: 'none'}], position: 6250, duration: 0 },
                { id: "eid113", tween: [ "style", "${_arrow16}", "width", '72px', { fromValue: '17px'}], position: 2000, duration: 712 },
                { id: "eid153", tween: [ "style", "${_arrow162}", "display", 'block', { fromValue: 'none'}], position: 6950, duration: 0 },
                { id: "eid157", tween: [ "style", "${_part42}", "display", 'block', { fromValue: 'none'}], position: 8190, duration: 0 },
                { id: "eid183", tween: [ "style", "${_arrow113}", "width", '87px', { fromValue: '9px'}], position: 3854, duration: 600 },
                { id: "eid156", tween: [ "style", "${_part32}", "display", 'block', { fromValue: 'none'}], position: 7309, duration: 0 },
                { id: "eid119", tween: [ "style", "${_arrow122}", "display", 'block', { fromValue: 'none'}], position: 4590, duration: 0 },
                { id: "eid194", tween: [ "style", "${_Text}", "top", '600px', { fromValue: '600px'}], position: 8766, duration: 0 },
                { id: "eid4", tween: [ "style", "${_Text4}", "display", 'block', { fromValue: 'none'}], position: 1500, duration: 0 },
                { id: "eid5", tween: [ "style", "${_Text4}", "display", 'none', { fromValue: 'block'}], position: 1750, duration: 0 },
                { id: "eid173", tween: [ "style", "${_arrow143}", "height", '146px', { fromValue: '24px'}], position: 5854, duration: 600 },
                { id: "eid10", tween: [ "style", "${_Text5}", "display", 'block', { fromValue: 'none'}], position: 3320, duration: 0 },
                { id: "eid12", tween: [ "style", "${_Text5}", "display", 'none', { fromValue: 'block'}], position: 3590, duration: 0 },
                { id: "eid196", tween: [ "style", "${_Text}", "left", '154px', { fromValue: '154px'}], position: 8766, duration: 0 },
                { id: "eid111", tween: [ "style", "${_arrow16}", "display", 'block', { fromValue: 'none'}], position: 2000, duration: 0 },
                { id: "eid92", tween: [ "style", "${_Text7}", "display", 'block', { fromValue: 'none'}], position: 8500, duration: 0 },
                { id: "eid93", tween: [ "style", "${_Text7}", "display", 'none', { fromValue: 'block'}], position: 8750, duration: 0 },
                { id: "eid166", tween: [ "style", "${_arrow1333}", "display", 'block', { fromValue: 'none'}], position: 5159, duration: 0 },
                { id: "eid110", tween: [ "style", "${_part12}", "left", '78px', { fromValue: '-225px'}], position: 450, duration: 800 },
                { id: "eid163", tween: [ "style", "${_part12}", "left", '76px', { fromValue: '78px'}], position: 1250, duration: 0 },
                { id: "eid155", tween: [ "style", "${_arrow162}", "width", '72px', { fromValue: '27px'}], position: 6454, duration: 600 },
                { id: "eid108", tween: [ "style", "${_part12}", "display", 'block', { fromValue: 'none'}], position: 450, duration: 0 },
                { id: "eid94", tween: [ "style", "${_Text}", "display", 'none', { fromValue: 'block'}], position: 9000, duration: 0 },
                { id: "eid89", tween: [ "style", "${_Text6}", "display", 'block', { fromValue: 'none'}], position: 7584, duration: 0 },
                { id: "eid90", tween: [ "style", "${_Text6}", "display", 'none', { fromValue: 'block'}], position: 7882, duration: 0 },
                { id: "eid170", tween: [ "style", "${_arrow1333}", "width", '509px', { fromValue: '41px'}], position: 5054, duration: 800 }            ]
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
})(jQuery, AdobeEdge, "EDGE-3133614");
