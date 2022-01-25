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
                id: 'Text5',
                display: 'none',
                type: 'text',
                rect: ['91', '29px','auto','auto','auto', 'auto'],
                text: "Compare input with reconstructed signal.<br>If &gt;0, send 1; if not, send 0.",
                align: "left",
                font: ['\'Times New Roman\', Times, serif', [94, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: 'Text4',
                type: 'text',
                rect: ['170px', '635px','auto','auto','auto', 'auto'],
                text: "Figure  7.21   Delta Modulation",
                align: "left",
                font: ['\'Times New Roman\', Times, serif', [119, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: 'oval-22',
                display: 'none',
                type: 'image',
                rect: ['90px', '165px','262px','175px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"oval-2.png",'0px','0px']
            },
            {
                id: 'comment-22',
                display: 'none',
                type: 'image',
                rect: ['342', '280px','204px','72px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"comment-2.png",'0px','0px']
            },
            {
                id: 'transmitter32',
                display: 'none',
                type: 'image',
                rect: ['97px', '96px','387px','259px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"transmitter3.png",'0px','0px']
            },
            {
                id: 'comment32',
                display: 'none',
                type: 'image',
                rect: ['328px', '544','223px','44px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"comment3.png",'0px','0px']
            },
            {
                id: 'Text7',
                display: 'block',
                type: 'text',
                rect: ['99px', '636px','auto','auto','auto', 'auto'],
                text: "Click or Touch on Figure for Each Step of the Animation",
                align: "left",
                font: ['\'Times New Roman\', Times, serif', [94, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: 'arrow12',
                display: 'none',
                type: 'image',
                rect: ['258px', '46px','22px','100px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"arrow1.png",'0px','0px'],
                transform: [[],['126']]
            },
            {
                id: 'rece2',
                display: 'none',
                type: 'image',
                rect: ['69px', '363px','425px','234px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"rece.png",'0px','0px']
            }],
            symbolInstances: [

            ]
        },
    states: {
        "Base State": {
            "${_comment-22}": [
                ["style", "top", '280px'],
                ["style", "display", 'none']
            ],
            "${_rece2}": [
                ["style", "top", '363px'],
                ["style", "left", '69px'],
                ["style", "display", 'none']
            ],
            "${_arrow12}": [
                ["style", "top", '46px'],
                ["transform", "scaleY", '0.09'],
                ["transform", "rotateZ", '126deg'],
                ["style", "height", '100px'],
                ["style", "left", '258px'],
                ["style", "display", 'none']
            ],
            "${_Text5}": [
                ["style", "top", '29px'],
                ["style", "display", 'none'],
                ["style", "font-size", '94%']
            ],
            "${_oval-22}": [
                ["style", "top", '165px'],
                ["style", "left", '90px'],
                ["style", "display", 'none']
            ],
            "${_Text7}": [
                ["style", "top", '617px'],
                ["style", "left", '107px'],
                ["style", "display", 'block']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(255,255,255,1)'],
                ["style", "width", '550px'],
                ["style", "height", '670px'],
                ["style", "overflow", 'hidden']
            ],
            "${_comment32}": [
                ["style", "left", '328px'],
                ["style", "display", 'none']
            ],
            "${_transmitter32}": [
                ["style", "top", '96px'],
                ["style", "left", '97px'],
                ["style", "display", 'none']
            ],
            "${_Text4}": [
                ["style", "top", '635px'],
                ["style", "left", '170px'],
                ["style", "font-size", '119%']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 4375,
            autoPlay: true,
            timeline: [
                { id: "eid36", tween: [ "style", "${_rece2}", "display", 'block', { fromValue: 'none'}], position: 2950, duration: 0 },
                { id: "eid29", tween: [ "style", "${_transmitter32}", "display", 'block', { fromValue: 'none'}], position: 400, duration: 0 },
                { id: "eid32", tween: [ "transform", "${_arrow12}", "scaleY", '1', { fromValue: '0.09'}], position: 650, duration: 800 },
                { id: "eid8", tween: [ "style", "${_Text5}", "display", 'block', { fromValue: 'none'}], position: 1700, duration: 0 },
                { id: "eid9", tween: [ "style", "${_Text5}", "display", 'none', { fromValue: 'block'}], position: 1955, duration: 0 },
                { id: "eid33", tween: [ "style", "${_oval-22}", "display", 'block', { fromValue: 'none'}], position: 2200, duration: 0 },
                { id: "eid43", tween: [ "style", "${_oval-22}", "display", 'none', { fromValue: 'block'}], position: 2700, duration: 0 },
                { id: "eid20", tween: [ "style", "${_Text7}", "display", 'none', { fromValue: 'block'}], position: 4250, duration: 0 },
                { id: "eid41", tween: [ "style", "${_Text7}", "left", '107px', { fromValue: '107px'}], position: 3440, duration: 0 },
                { id: "eid34", tween: [ "style", "${_comment-22}", "display", 'block', { fromValue: 'none'}], position: 2450, duration: 0 },
                { id: "eid35", tween: [ "style", "${_comment-22}", "display", 'none', { fromValue: 'block'}], position: 2700, duration: 0 },
                { id: "eid40", tween: [ "style", "${_Text7}", "top", '617px', { fromValue: '617px'}], position: 3440, duration: 0 },
                { id: "eid37", tween: [ "style", "${_comment32}", "display", 'block', { fromValue: 'none'}], position: 3200, duration: 0 },
                { id: "eid38", tween: [ "style", "${_comment32}", "display", 'none', { fromValue: 'block'}], position: 3500, duration: 0 },
                { id: "eid30", tween: [ "style", "${_arrow12}", "display", 'block', { fromValue: 'none'}], position: 650, duration: 0 },
                { id: "eid42", tween: [ "style", "${_arrow12}", "display", 'none', { fromValue: 'block'}], position: 1955, duration: 0 }            ]
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
})(jQuery, AdobeEdge, "EDGE-3445717");
