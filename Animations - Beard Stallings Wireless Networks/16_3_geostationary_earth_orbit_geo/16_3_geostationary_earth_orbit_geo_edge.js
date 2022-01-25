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
                id: 'orbit',
                display: 'block',
                type: 'image',
                rect: ['32px', '142px','2448px','2348px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"orbit.png",'0px','0px']
            },
            {
                id: 'earth',
                display: 'block',
                type: 'image',
                rect: ['1022px', '1100px','500px','432px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"earth.png",'0px','0px']
            },
            {
                id: 'st',
                display: 'block',
                type: 'image',
                rect: ['302px', '2348px','400px','228px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"st.png",'0px','0px']
            },
            {
                id: 'txt',
                display: 'block',
                type: 'image',
                rect: ['478px', '624px','400px','228px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"txt.png",'0px','0px']
            },
            {
                id: 'Text',
                type: 'text',
                rect: ['431px', '2885px','auto','auto','auto', 'auto'],
                text: "Figure 16.3 Geostationary Earth Orbit (GEO)",
                align: "center",
                font: ['Times New Roman, Times, serif', [475, "%"], "rgba(0,0,0,1)", "700", "none", ""]
            },
            {
                id: 'Text2',
                display: 'block',
                type: 'text',
                rect: ['495px', '2745px','auto','auto','auto', 'auto'],
                text: "Click or Touch on Figure for Each Step of the Animation",
                  align: "center",
                font: ['\'Times New Roman\', Times, serif', [375, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: 'Text3',
                display: 'block',
                type: 'text',
                rect: ['1742px', '2426px','650px','360px','auto', 'auto'],
                text: "Satellites move at the same speed relative to the earth's rotation.",
                align: "left",
                font: ['\'Times New Roman\', Times, serif', [375, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
            }],
            symbolInstances: [

            ]
        },
    states: {
        "Base State": {
            "${_txt}": [
                ["style", "top", '624px'],
                ["style", "left", '478px'],
                ["style", "display", 'block']
            ],
            "${_Text3}": [
                ["style", "display", 'block'],
                ["style", "top", '2282px'],
                ["style", "left", '1892px'],
                ["style", "width", '650px']
            ],
            "${_Text}": [
                ["style", "top", '2699px'],
                ["style", "font-size", '500%'],
                ["style", "font-weight", '700'],
                ["style", "font-family", 'Times New Roman, Times, serif'],
                ["style", "left", '431px'],
                ["style", "width", '1650px']
            ],
            "${_earth}": [
                ["style", "display", 'block'],
                ["style", "top", '1100px'],
                ["style", "left", '1022px'],
                ["transform", "rotateZ", '0deg']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(255,255,255,1)'],
                ["style", "overflow", 'hidden'],
                ["style", "height", '2800px'],
                ["style", "width", '2500px']
            ],
            "${_orbit}": [
                ["style", "display", 'block'],
                ["style", "top", '142px'],
                ["style", "left", '32px'],
                ["transform", "rotateZ", '0deg']
            ],
            "${_Text2}": [
                ["style", "top", '2596px'],
                ["style", "display", 'block'],
                ["style", "font-size", '375%'],
                ["style", "left", '495px'],
                ["style", "width", '1510px']
            ],
            "${_st}": [
                ["style", "top", '2348px'],
                ["style", "left", '302px'],
                ["style", "display", 'block']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 3500,
            autoPlay: true,
            timeline: [
                { id: "eid5", tween: [ "style", "${_orbit}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid6", tween: [ "style", "${_orbit}", "display", 'block', { fromValue: 'none'}], position: 500, duration: 0 },
                { id: "eid3", tween: [ "style", "${_earth}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid4", tween: [ "style", "${_earth}", "display", 'block', { fromValue: 'none'}], position: 250, duration: 0 },
                { id: "eid15", tween: [ "style", "${_Text3}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid16", tween: [ "style", "${_Text3}", "display", 'block', { fromValue: 'none'}], position: 2750, duration: 0 },
                { id: "eid17", tween: [ "style", "${_Text3}", "display", 'none', { fromValue: 'block'}], position: 3250, duration: 0 },
                { id: "eid30", tween: [ "style", "${_Text3}", "left", '1892px', { fromValue: '1892px'}], position: 2830, duration: 0 },
                { id: "eid7", tween: [ "style", "${_st}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid8", tween: [ "style", "${_st}", "display", 'block', { fromValue: 'none'}], position: 650, duration: 0 },
                { id: "eid14", tween: [ "transform", "${_earth}", "rotateZ", '360deg', { fromValue: '0deg'}], position: 855, duration: 1645 },
                { id: "eid18", tween: [ "style", "${_txt}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid19", tween: [ "style", "${_txt}", "display", 'block', { fromValue: 'none'}], position: 3250, duration: 0 },
                { id: "eid20", tween: [ "style", "${_Text2}", "display", 'none', { fromValue: 'block'}], position: 3500, duration: 0 },
                { id: "eid31", tween: [ "style", "${_Text3}", "top", '2282px', { fromValue: '2282px'}], position: 2830, duration: 0 },
                { id: "eid11", tween: [ "transform", "${_orbit}", "rotateZ", '360deg', { fromValue: '0deg'}], position: 855, duration: 1645 }            ]
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
})(jQuery, AdobeEdge, "EDGE-469054004");
