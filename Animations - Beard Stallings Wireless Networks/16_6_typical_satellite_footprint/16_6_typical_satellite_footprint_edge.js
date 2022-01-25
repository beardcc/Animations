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
                id: '_32db',
                display: 'none',
                type: 'image',
                rect: ['126px', '484px','3160px','1708px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"32db.png",'0px','0px']
            },
            {
                id: 'Text4',
                display: 'none',
                type: 'text',
                rect: ['1216px', '342px','auto','auto','auto', 'auto'],
                text: "Less power outwards from the center.",
                font: ['Times New Roman, Times, serif', [375, "%"], "rgba(0,0,0,1)", "700", "none", ""]
            },
            {
                id: '_33db2',
                display: 'none',
                type: 'image',
                rect: ['343px', '630px','2608px','1408px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"33db.png",'0px','0px']
            },
            {
                id: '_34db',
                display: 'none',
                type: 'image',
                rect: ['545px', '790px','2092px','1148px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"34db.png",'0px','0px']
            },
            {
                id: '_35db',
                display: 'none',
                type: 'image',
                rect: ['1023px', '991px','1396px','844px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"35db.png",'0px','0px']
            },
            {
                id: '_36db',
                display: 'none',
                type: 'image',
                rect: ['1226px', '1082px','980px','632px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"36db.png",'0px','0px']
            },
            {
                id: 'Text3',
                display: 'none',
                type: 'text',
                rect: ['740px', '374px','auto','auto','auto', 'auto'],
                text: "Focus of directional antenna. 36 dBW effective radiated power. ",
                align: "left",
                font: ['\'Times New Roman\', Times, serif', [375, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: 'Text',
                display: 'block',
                type: 'text',
                rect: ['900px', '2300px','auto','auto','auto', 'auto'],
                text: "Click or Touch on Figure for Each Step of the Animation",
                font: ['Times New Roman, Times, serif', [375, "%"], "rgba(0,0,0,1)", "700", "none", ""]
            },
            {
                id: 'Text2',
                type: 'text',
                rect: ['1089px', '2410px','auto','auto','auto', 'auto'],
                text: "Figure  16.6  Typical Satellite Footprint",
                align: "left",
                font: ['\'Times New Roman\', Times, serif', [475, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: 'us-map',
                display: 'none',
                type: 'image',
                rect: ['310px', '628px','2812px','1568px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"us-map.png",'0px','0px']
            }],
            symbolInstances: [

            ]
        },
    states: {
        "Base State": {
            "${__33db2}": [
                ["style", "display", 'none'],
                ["style", "top", '630px'],
                ["style", "left", '343px'],
                ["transform", "scaleX", '0.0092']
            ],
            "${__34db}": [
                ["style", "display", 'none'],
                ["style", "top", '790px'],
                ["style", "left", '545px'],
                ["transform", "scaleX", '0.01338']
            ],
            "${_Text3}": [
                ["style", "display", 'none'],
                ["style", "top", '374px'],
                ["style", "left", '740px'],
                ["style", "font-size", '375%']
            ],
            "${_us-map}": [
                ["style", "top", '628px'],
                ["style", "left", '310px'],
                ["style", "display", 'none']
            ],
            "${_Text2}": [
                ["style", "top", '2410px'],
                ["style", "left", '1089px'],
                ["style", "font-size", '500%']
            ],
            "${__36db}": [
                ["style", "top", '1082px'],
                ["transform", "scaleX", '0.04081'],
                ["style", "left", '1226px'],
                ["style", "display", 'none']
            ],
            "${_Text}": [
                ["style", "top", '2300px'],
                ["style", "font-weight", '700'],
                ["style", "display", 'block'],
                ["style", "font-family", 'Times New Roman, Times, serif'],
                ["style", "left", '1000px'],
                ["style", "font-size", '375%']
            ],
            "${__32db}": [
                ["style", "display", 'none'],
                ["style", "top", '484px'],
                ["style", "left", '126px'],
                ["transform", "scaleX", '0.02784']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(255,255,255,1)'],
                ["style", "overflow", 'hidden'],
                ["style", "height", '2550px'],
                ["style", "width", '3300px']
            ],
            "${__35db}": [
                ["style", "top", '991px'],
                ["transform", "scaleX", '0.03151'],
                ["style", "left", '1023px'],
                ["style", "display", 'none']
            ],
            "${_Text4}": [
                ["style", "top", '342px'],
                ["style", "font-size", '375%'],
                ["style", "display", 'none'],
                ["style", "font-weight", '700'],
                ["style", "height", '71px'],
                ["style", "font-family", 'Times New Roman, Times, serif'],
                ["style", "left", '1216px'],
                ["style", "width", '980px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 10000,
            autoPlay: true,
            timeline: [
                { id: "eid17", tween: [ "transform", "${__34db}", "scaleX", '1', { fromValue: '0.01338'}], position: 4500, duration: 1500 },
                { id: "eid37", tween: [ "style", "${_Text4}", "display", 'block', { fromValue: 'none'}], position: 9250, duration: 0 },
                { id: "eid38", tween: [ "style", "${_Text4}", "display", 'none', { fromValue: 'block'}], position: 9500, duration: 0 },
                { id: "eid10", tween: [ "style", "${_Text3}", "display", 'block', { fromValue: 'none'}], position: 2500, duration: 0 },
                { id: "eid11", tween: [ "style", "${_Text3}", "display", 'none', { fromValue: 'block'}], position: 2750, duration: 0 },
                { id: "eid29", tween: [ "style", "${__33db2}", "display", 'block', { fromValue: 'none'}], position: 6000, duration: 0 },
                { id: "eid39", tween: [ "style", "${_Text}", "display", 'none', { fromValue: 'block'}], position: 9750, duration: 0 },
                { id: "eid32", tween: [ "style", "${__32db}", "display", 'block', { fromValue: 'none'}], position: 7500, duration: 0 },
                { id: "eid1", tween: [ "style", "${_us-map}", "display", 'block', { fromValue: 'none'}], position: 500, duration: 0 },
                { id: "eid34", tween: [ "transform", "${__32db}", "scaleX", '1', { fromValue: '0.02784'}], position: 7500, duration: 1500 },
                { id: "eid12", tween: [ "style", "${__35db}", "display", 'block', { fromValue: 'none'}], position: 3000, duration: 0 },
                { id: "eid2", tween: [ "style", "${__36db}", "display", 'block', { fromValue: 'none'}], position: 750, duration: 0 },
                { id: "eid31", tween: [ "transform", "${__33db2}", "scaleX", '1', { fromValue: '0.0092'}], position: 6000, duration: 1500 },
                { id: "eid4", tween: [ "transform", "${__36db}", "scaleX", '1', { fromValue: '0.04081'}], position: 750, duration: 1500 },
                { id: "eid14", tween: [ "transform", "${__35db}", "scaleX", '1', { fromValue: '0.03151'}], position: 3000, duration: 1500 },
                { id: "eid48", tween: [ "style", "${_Text}", "left", '1044px', { fromValue: '1044px'}], position: 9675, duration: 0 },
                { id: "eid15", tween: [ "style", "${__34db}", "display", 'block', { fromValue: 'none'}], position: 4500, duration: 0 },
                { id: "eid47", tween: [ "style", "${_Text}", "top", '2300px', { fromValue: '2300px'}], position: 9675, duration: 0 }            ]
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
})(jQuery, AdobeEdge, "EDGE-340954139");
