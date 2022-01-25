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
                rect: ['55px', '79px','451px','219px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"bg.png",'0px','0px']
            },
            {
                id: 'Text',
                display: 'block',
                type: 'text',
                rect: ['96px', '321px','auto','auto','auto', 'auto'],
                text: "Click or Touch on Figure for Each Step of the Animation",
                font: ['Times New Roman, Times, serif', [94, "%"], "rgba(0,0,0,1)", "700", "none", ""]
            },
            {
                id: 'ray',
                type: 'image',
                rect: ['214px', '5px','38%','70%','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"ray.png",'0%','0%','209px','280px']
            },
            {
                id: 'inc',
                display: 'block',
                type: 'image',
                rect: ['336px', '36px','108px','73px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"inc.png",'0px','0px']
            },
            {
                id: 'red',
                display: 'block',
                type: 'image',
                rect: ['224px', '185px','108px','73px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"red.png",'0px','0px']
            },
            {
                id: 'Text2',
                type: 'text',
                rect: ['69px', '347px','auto','auto','auto', 'auto'],
                text: "Figure 6.6 Refraction of an Electromagnetic Wave",
                align: "left",
                font: ['\'Times New Roman\', Times, serif', [119, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: '_13',
                display: 'block',
                type: 'image',
                rect: ['250px', '135px','29px','91px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"13.png",'0px','0px']
            }],
            symbolInstances: [

            ]
        },
    states: {
        "Base State": {
            "${_inc}": [
                ["style", "top", '36px'],
                ["style", "left", '336px'],
                ["style", "display", 'block']
            ],
            "${__13}": [
                ["style", "display", 'block'],
                ["style", "top", '135px'],
                ["style", "left", '250px'],
                ["style", "width", '29px']
            ],
            "${_red}": [
                ["style", "top", '185px'],
                ["style", "left", '236px'],
                ["style", "display", 'block']
            ],
            "${_Text}": [
                ["style", "top", '321px'],
                ["style", "font-family", 'Times New Roman, Times, serif'],
                ["style", "display", 'block'],
                ["style", "font-weight", '700'],
                ["style", "left", '94px'],
                ["style", "font-size", '94%']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(255,255,255,1)'],
                ["style", "width", '550px'],
                ["style", "height", '380px'],
                ["style", "overflow", 'hidden']
            ],
            "${_bg}": [
                ["style", "left", '55px'],
                ["style", "top", '79px']
            ],
            "${_Text2}": [
                ["style", "top", '347px'],
                ["style", "width", '442px'],
                ["style", "left", '69px'],
                ["style", "font-size", '119%']
            ],
            "${_ray}": [
                ["style", "height", '0%'],
                ["style", "left", '214px'],
                ["style", "top", '5px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 2750,
            autoPlay: true,
            timeline: [
                { id: "eid9", tween: [ "style", "${_red}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid10", tween: [ "style", "${_red}", "display", 'block', { fromValue: 'none'}], position: 1705, duration: 0 },
                { id: "eid16", tween: [ "style", "${__13}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid17", tween: [ "style", "${__13}", "display", 'block', { fromValue: 'none'}], position: 2500, duration: 0 },
                { id: "eid15", tween: [ "style", "${_red}", "left", '236px', { fromValue: '236px'}], position: 2500, duration: 0 },
                { id: "eid3", tween: [ "style", "${_inc}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid4", tween: [ "style", "${_inc}", "display", 'block', { fromValue: 'none'}], position: 250, duration: 0 },
                { id: "eid18", tween: [ "style", "${_Text}", "left", '94px', { fromValue: '94px'}], position: 2500, duration: 0 },
                { id: "eid8", tween: [ "style", "${_ray}", "height", '70%', { fromValue: '0%'}], position: 500, duration: 2000 },
                { id: "eid11", tween: [ "style", "${_Text}", "display", 'none', { fromValue: 'block'}], position: 2750, duration: 0 }            ]
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
})(jQuery, AdobeEdge, "EDGE-104068438");
