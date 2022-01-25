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
                id: 'water',
                display: 'none',
                type: 'image',
                rect: ['629px', '712px','568px','460px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"water.png",'0px','0px']
            },
            {
                id: 'Text5',
                display: 'none',
                type: 'text',
                rect: ['1304px', '324px','479px','auto','auto', 'auto'],
                text: "Tokens arrive in the bucket for later packets.",
                align: "left",
                font: ['\'Times New Roman\', Times, serif', [375, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: 'departing',
                display: 'none',
                type: 'image',
                rect: ['991px', '1245px','344px','260px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"departing.png",'0px','0px']
            },
            {
                id: 'Text',
                type: 'text',
                rect: ['346px', '1876px','auto','auto','auto', 'auto'],
                text: "Figure 12.8 Token Bucket Scheme",
                font: ['Times New Roman, Times, serif', [475, "%"], "rgba(0,0,0,1)", "700", "none", ""]
            },
            {
                id: 'Text2',
                display: 'block',
                type: 'text',
                rect: ['173px', '1796px','auto','auto','auto', 'auto'],
                text: "Click or Touch on Figure for Each Step of the Animation",
                align: "left",
                font: ['\'Times New Roman\', Times, serif', [375, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: 'empty-',
                display: 'none',
                type: 'image',
                rect: ['363px', '1391px','40.5%','7.4%','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"empty-.png",'0%','0%','728px','148px']
            },
            {
                id: 'arriving',
                display: 'none',
                type: 'image',
                rect: ['221px', '1446px','204px','36px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"arriving.png",'0px','0px']
            },
            {
                id: 'arriving-label',
                display: 'none',
                type: 'image',
                rect: ['118px', '1234px','344px','260px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"arriving-label.png",'0px','0px']
            },
            {
                id: 'data',
                display: 'none',
                type: 'image',
                rect: ['-157px', '1343px','180px','196px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"data.png",'0px','0px']
            },
            {
                id: 'Text3',
                display: 'none',
                type: 'text',
                rect: ['54px', '1532px','auto','auto','auto', 'auto'],
                text: "Packets arrive into a queue.",
                align: "left",
                font: ['\'Times New Roman\', Times, serif', [375, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: 'Text4',
                display: 'none',
                type: 'text',
                rect: ['1263px', '432px','520px','auto','auto', 'auto'],
                text: "A packet can  only depart if it receives a token from the token bucket.",
                align: "justify",
                font: ['\'Times New Roman\', Times, serif', [375, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: 'token-arrow',
                display: 'none',
                type: 'image',
                rect: ['977px', '1186px','36px','200px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"token-arrow.png",'0px','0px']
            },
            {
                id: 'token',
                display: 'none',
                type: 'image',
                rect: ['924px', '1059px','136px','112px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"token.png",'0px','0px']
            },
            {
                id: 'in-bucket',
                display: 'none',
                type: 'image',
                rect: ['722px', '228px','452px','420px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"in-bucket.png",'0px','0px']
            },
            {
                id: 'token2',
                display: 'none',
                type: 'image',
                rect: ['826px', '320px','136px','112px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"token.png",'0px','0px']
            },
            {
                id: 'token-bucket-new',
                display: 'none',
                type: 'image',
                rect: ['212px', '527px','1420px','728px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"token-bucket-new.png",'0px','0px']
            }],
            symbolInstances: [

            ]
        },
    states: {
        "Base State": {
            "${_Text3}": [
                ["style", "top", '1532px'],
                ["style", "left", '54px'],
                ["style", "display", 'none']
            ],
            "${_Text2}": [
                ["style", "top", '1796px'],
                ["style", "display", 'block'],
                ["style", "left", '173px'],
                ["style", "font-size", '375%']
            ],
            "${_water}": [
                ["style", "display", 'none'],
                ["style", "height", '460px'],
                ["style", "left", '629px'],
                ["style", "top", '712px']
            ],
            "${_token2}": [
                ["style", "top", '320px'],
                ["style", "left", '826px'],
                ["style", "display", 'none']
            ],
            "${_token}": [
                ["style", "top", '1059px'],
                ["style", "left", '924px'],
                ["style", "display", 'none']
            ],
            "${_data}": [
                ["style", "top", '1343px'],
                ["style", "left", '-161px'],
                ["style", "display", 'none']
            ],
            "${_token-arrow}": [
                ["style", "top", '1186px'],
                ["style", "left", '977px'],
                ["style", "display", 'none']
            ],
            "${_Text5}": [
                ["style", "top", '324px'],
                ["style", "text-align", 'left'],
                ["style", "display", 'none'],
                ["style", "left", '1304px'],
                ["style", "width", '479px']
            ],
            "${_in-bucket}": [
                ["style", "top", '228px'],
                ["style", "left", '722px'],
                ["style", "display", 'none']
            ],
            "${_departing}": [
                ["style", "top", '1245px'],
                ["style", "left", '991px'],
                ["style", "display", 'none']
            ],
            "${_empty-}": [
                ["style", "top", '1391px'],
                ["style", "display", 'none'],
                ["style", "left", '363px'],
                ["style", "width", '0%']
            ],
            "${_Text}": [
                ["style", "top", '1876px'],
                ["style", "font-family", 'Times New Roman, Times, serif'],
                ["style", "font-weight", '700'],
                ["style", "left", '346px'],
                ["style", "font-size", '475%']
            ],
            "${_Text4}": [
                ["style", "top", '432px'],
                ["style", "text-align", 'justify'],
                ["style", "display", 'none'],
                ["style", "left", '1263px'],
                ["style", "width", '520px']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(255,255,255,1)'],
                ["style", "width", '1800px'],
                ["style", "height", '2000px'],
                ["style", "overflow", 'hidden']
            ],
            "${_arriving-label}": [
                ["style", "top", '1236px'],
                ["style", "left", '-290px'],
                ["style", "display", 'none']
            ],
            "${_arriving}": [
                ["style", "top", '1446px'],
                ["style", "left", '-211px'],
                ["style", "display", 'none']
            ],
            "${_token-bucket-new}": [
                ["style", "top", '527px'],
                ["style", "left", '212px'],
                ["style", "display", 'none']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 11707,
            autoPlay: true,
            timeline: [
                { id: "eid64", tween: [ "style", "${_token}", "left", '1796px', { fromValue: '924px'}], position: 7000, duration: 1000 },
                { id: "eid3", tween: [ "style", "${_empty-}", "width", '40.45%', { fromValue: '0%'}], position: 210, duration: 700 },
                { id: "eid21", tween: [ "style", "${_token-arrow}", "display", 'block', { fromValue: 'none'}], position: 4710, duration: 0 },
                { id: "eid31", tween: [ "style", "${_water}", "display", 'block', { fromValue: 'none'}], position: 4250, duration: 0 },
                { id: "eid43", tween: [ "style", "${_departing}", "display", 'block', { fromValue: 'none'}], position: 6750, duration: 0 },
                { id: "eid22", tween: [ "style", "${_token}", "display", 'block', { fromValue: 'none'}], position: 5000, duration: 0 },
                { id: "eid30", tween: [ "style", "${_token-bucket-new}", "display", 'block', { fromValue: 'none'}], position: 4250, duration: 0 },
                { id: "eid42", tween: [ "style", "${_water}", "height", '380px', { fromValue: '460px'}], position: 5000, duration: 1500 },
                { id: "eid60", tween: [ "style", "${_water}", "height", '420px', { fromValue: '380px'}], position: 9715, duration: 1500 },
                { id: "eid6", tween: [ "style", "${_arriving}", "left", '221px', { fromValue: '-211px'}], position: 1175, duration: 800 },
                { id: "eid9", tween: [ "style", "${_arriving-label}", "left", '118px', { fromValue: '-290px'}], position: 1425, duration: 800 },
                { id: "eid63", tween: [ "style", "${_Text2}", "display", 'none', { fromValue: 'block'}], position: 11707, duration: 0 },
                { id: "eid19", tween: [ "style", "${_Text4}", "display", 'block', { fromValue: 'none'}], position: 4500, duration: 0 },
                { id: "eid20", tween: [ "style", "${_Text4}", "display", 'none', { fromValue: 'block'}], position: 4710, duration: 0 },
                { id: "eid61", tween: [ "style", "${_Text5}", "display", 'block', { fromValue: 'none'}], position: 11500, duration: 0 },
                { id: "eid62", tween: [ "style", "${_Text5}", "display", 'none', { fromValue: 'block'}], position: 11707, duration: 0 },
                { id: "eid16", tween: [ "style", "${_Text3}", "display", 'block', { fromValue: 'none'}], position: 4000, duration: 0 },
                { id: "eid17", tween: [ "style", "${_Text3}", "display", 'none', { fromValue: 'block'}], position: 4250, duration: 0 },
                { id: "eid53", tween: [ "style", "${_token2}", "top", '802px', { fromValue: '320px'}], position: 8500, duration: 1000 },
                { id: "eid50", tween: [ "style", "${_token2}", "display", 'block', { fromValue: 'none'}], position: 8500, duration: 0 },
                { id: "eid54", tween: [ "style", "${_token2}", "display", 'none', { fromValue: 'block'}], position: 9500, duration: 0 },
                { id: "eid49", tween: [ "style", "${_in-bucket}", "display", 'block', { fromValue: 'none'}], position: 8250, duration: 0 },
                { id: "eid10", tween: [ "style", "${_data}", "display", 'block', { fromValue: 'none'}], position: 2225, duration: 0 },
                { id: "eid15", tween: [ "style", "${_data}", "left", '887px', { fromValue: '-161px'}], position: 2225, duration: 1500 },
                { id: "eid65", tween: [ "style", "${_data}", "left", '1760px', { fromValue: '887px'}], position: 7000, duration: 1000 },
                { id: "eid41", tween: [ "style", "${_water}", "top", '792px', { fromValue: '712px'}], position: 5000, duration: 1500 },
                { id: "eid59", tween: [ "style", "${_water}", "top", '752px', { fromValue: '792px'}], position: 9715, duration: 1500 },
                { id: "eid1", tween: [ "style", "${_empty-}", "display", 'block', { fromValue: 'none'}], position: 210, duration: 0 },
                { id: "eid4", tween: [ "style", "${_arriving}", "display", 'block', { fromValue: 'none'}], position: 1175, duration: 0 },
                { id: "eid25", tween: [ "style", "${_token}", "top", '1396px', { fromValue: '1059px'}], position: 5000, duration: 1500 },
                { id: "eid7", tween: [ "style", "${_arriving-label}", "display", 'block', { fromValue: 'none'}], position: 1425, duration: 0 }            ]
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
})(jQuery, AdobeEdge, "EDGE-263686054");
