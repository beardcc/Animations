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
                id: '_16_1_coverage_and_elevation_angles',
                display: 'block',
                type: 'image',
                rect: ['252px', '136px','1344px','2124px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"16_1_coverage_and_elevation_angles.png",'0px','0px']
            },
            {
                id: 'arrow',
                display: 'block',
                type: 'image',
                rect: ['582px', '1166px','35.3%','15%','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"arrow.png",'0%','0%','636px','376px'],
                transform: [[],['180']]
            },
            {
                id: 'Text3',
                display: 'block',
                type: 'text',
                rect: ['1282px', '1036px','530px','150px','auto', 'auto'],
                text: "Inclination angle",
                align: "left",
                font: ['\'Times New Roman\', Times, serif', [375, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: 'dotted-line',
                display: 'block',
                type: 'image',
                rect: ['300px', '204px','35.3%','72.5%','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"dotted-line.png",'0%','0%','636px','1812px']
            },
            {
                id: 'Text',
                type: 'text',
                rect: ['182px', '2334px','auto','auto','auto', 'auto'],
                text: "Figure 16.1 Coverage and Elevation Angles",
                font: ['Times New Roman, Times, serif', [475, "%"], "rgba(0,0,0,1)", "700", "none", ""]
            },
            {
                id: 'Text2',
                display: 'block',
                type: 'text',
                rect: ['146px', '2260px','auto','auto','auto', 'auto'],
                text: "Click or Touch on Figure for Each Step of the Animation",
                align: "left",
                font: ['\'Times New Roman\', Times, serif', [375, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: 'Text4',
                display: 'block',
                type: 'text',
                rect: ['46px', '452px','728px','300px','auto', 'auto'],
                text: "Inclination angle would be too small. Obstructions, atmosphere, and noise hurt performance.",
                align: "left",
                font: ['\'Times New Roman\', Times, serif', [375, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
            }],
            symbolInstances: [

            ]
        },
    states: {
        "Base State": {
            "${_Stage}": [
                ["color", "background-color", 'rgba(255,255,255,1)'],
                ["style", "width", '1800px'],
                ["style", "height", '2500px'],
                ["style", "overflow", 'hidden']
            ],
            "${_dotted-line}": [
                ["style", "display", 'block'],
                ["style", "top", '204px'],
                ["style", "left", '300px'],
                ["style", "height", '0%']
            ],
            "${__16_1_coverage_and_elevation_angles}": [
                ["style", "top", '126px'],
                ["style", "display", 'block'],
                ["style", "height", '2060px'],
                ["style", "left", '305px'],
                ["style", "width", '1304px']
            ],
            "${_Text3}": [
                ["style", "top", '1154px'],
                ["style", "display", 'block'],
                ["style", "height", '110px'],
                ["style", "left", '1220px'],
                ["style", "width", '530px']
            ],
            "${_arrow}": [
                ["style", "top", '1166px'],
                ["transform", "rotateZ", '0deg'],
                ["style", "display", 'block'],
                ["style", "left", '607px'],
                ["style", "height", '0%']
            ],
            "${_Text}": [
                ["style", "top", '2334px'],
                ["style", "width", '1484px'],
                ["style", "font-family", 'Times New Roman, Times, serif'],
                ["style", "font-weight", '700'],
                ["style", "left", '182px'],
                ["style", "font-size", '475%']
            ],
            "${_Text2}": [
                ["style", "top", '2260px'],
                ["style", "display", 'block'],
                ["style", "width", '1520px'],
                ["style", "left", '146px'],
                ["style", "font-size", '375%']
            ],
            "${_Text4}": [
                ["style", "top", '452px'],
                ["style", "display", 'block'],
                ["style", "left", '46px'],
                ["style", "width", '728px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 5750,
            autoPlay: true,
            timeline: [
                { id: "eid24", tween: [ "style", "${_dotted-line}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid25", tween: [ "style", "${_dotted-line}", "display", 'block', { fromValue: 'none'}], position: 3000, duration: 0 },
                { id: "eid31", tween: [ "style", "${_dotted-line}", "display", 'none', { fromValue: 'block'}], position: 5000, duration: 0 },
                { id: "eid28", tween: [ "style", "${_Text4}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid29", tween: [ "style", "${_Text4}", "display", 'block', { fromValue: 'none'}], position: 3000, duration: 0 },
                { id: "eid30", tween: [ "style", "${_Text4}", "display", 'none', { fromValue: 'block'}], position: 5000, duration: 0 },
                { id: "eid3", tween: [ "style", "${_arrow}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid4", tween: [ "style", "${_arrow}", "display", 'block', { fromValue: 'none'}], position: 1000, duration: 0 },
                { id: "eid23", tween: [ "style", "${_arrow}", "display", 'none', { fromValue: 'block'}], position: 2500, duration: 0 },
                { id: "eid13", tween: [ "style", "${_Text3}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid14", tween: [ "style", "${_Text3}", "display", 'block', { fromValue: 'none'}], position: 1000, duration: 0 },
                { id: "eid22", tween: [ "style", "${_Text3}", "display", 'none', { fromValue: 'block'}], position: 2500, duration: 0 },
                { id: "eid12", tween: [ "style", "${_arrow}", "height", '15.04%', { fromValue: '0%'}], position: 1000, duration: 1000 },
                { id: "eid1", tween: [ "style", "${__16_1_coverage_and_elevation_angles}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid2", tween: [ "style", "${__16_1_coverage_and_elevation_angles}", "display", 'block', { fromValue: 'none'}], position: 500, duration: 0 },
                { id: "eid32", tween: [ "style", "${_Text2}", "display", 'none', { fromValue: 'block'}], position: 5750, duration: 0 },
                { id: "eid27", tween: [ "style", "${_dotted-line}", "height", '72.48%', { fromValue: '0%'}], position: 3000, duration: 1500 }            ]
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
})(jQuery, AdobeEdge, "EDGE-666860201");
