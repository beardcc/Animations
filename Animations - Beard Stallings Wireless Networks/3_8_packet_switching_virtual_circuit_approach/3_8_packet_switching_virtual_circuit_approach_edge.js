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
                id: 'Circuit',
                display: 'block',
                type: 'image',
                rect: ['88px', '48px','594px','146px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"Circuit.png",'0px','0px']
            },
            {
                id: 'Virtual-Path',
                display: 'block',
                type: 'image',
                rect: ['135px', '66px','492px','114px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"Virtual-Path.png",'0px','0px']
            },
            {
                id: 'Packet-1',
                display: 'block',
                type: 'image',
                rect: ['175px', '65px','42px','35px','auto', 'auto'],
                autoOrient: true,
                fill: ["rgba(0,0,0,0)",im+"Packet-1.png",'0px','0px'],
                transform: [[],['18']]
            },
            {
                id: 'Packet-3',
                display: 'block',
                type: 'image',
                rect: ['139px', '53px','42px','35px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"Packet-3.png",'0px','0px'],
                transform: [[],['19']]
            },
            {
                id: 'Text2',
                display: 'block',
                type: 'text',
                rect: ['302px', '194px','auto','auto','auto', 'auto'],
                text: "All packets follow the same path.",
                align: "center",
                font: ['Times New Roman, Times, serif', [94, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: 'Packet-2',
                display: 'block',
                type: 'image',
                rect: ['157px', '59px','42px','35px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"Packet-2.png",'0px','0px'],
                transform: [[],['18']]
            },
            {
                id: 'Text',
                display: 'block',
                type: 'text',
                rect: ['255px', '215px','289px','24px','auto', 'auto'],
                text: "Virtual circuit path is established before any packets are sent.",
                align: "center",
                font: ['Times New Roman, Times, serif', [94, "%"], "rgba(0,0,0,1)", "700", "none", ""]
            },
            {
                id: 'Text4',
                display: 'block',
                type: 'text',
                rect: ['252px', '210px','337px','35px','auto', 'auto'],
                text: "All packets automatically arrive in order.",
                align: "center",
                font: ['Times New Roman, Times, serif', [94, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: 'Final-Figure2',
                display: 'block',
                type: 'image',
                rect: ['98px', '48px','565px','713px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"Final-Figure.png",'0px','0px']
            },
            {
                id: 'Text3',
                type: 'text',
                rect: ['-10px', '807px','auto','auto','auto', 'auto'],
                text: "Figure 3.8 Packet Switching: Virtual Circuit Approach",
                align: "center",
                font: ['Times New Roman, Times, serif', [119, "%"], "rgba(0,0,0,1)", "700", "none", ""]
            },
            {
                id: 'Text5',
                display: 'block',
                type: 'text',
                rect: ['132px', '761px','auto','auto','auto', 'auto'],
                text: "Click or Touch on Figure for the Each step of Animation",
                align: "center",
                font: ['Times New Roman, Times, serif', [119, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: 'r456_1',
                display: 'block',
                type: 'image',
                rect: ['491px', '147px','124px','78px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"r456_1.png",'0px','0px'],
                transform: [[],['-13']]
            }],
            symbolInstances: [

            ]
        },
    states: {
        "Base State": {
            "${_Packet-2}": [
                ["style", "display", 'block'],
                ["motion", "location", '178px 76.5px'],
                ["transform", "rotateZ", '18deg']
            ],
            "${_Text3}": [
                ["style", "top", '807px'],
                ["style", "text-align", 'center'],
                ["style", "font-size", '119%'],
                ["style", "font-family", 'Times New Roman, Times, serif'],
                ["style", "font-weight", '700'],
                ["style", "left", '-10px'],
                ["style", "width", '820px']
            ],
            "${_Text5}": [
                ["style", "top", '775px'],
                ["style", "font-size", '94%'],
                ["style", "display", 'block'],
                ["style", "font-family", 'Times New Roman, Times, serif'],
                ["style", "left", '103px'],
                ["style", "width", '594px']
            ],
            "${_Text2}": [
                ["style", "display", 'block'],
                ["style", "font-family", 'Times New Roman, Times, serif']
            ],
            "${_Packet-1}": [
                ["style", "display", 'block'],
                ["motion", "location", '196px 82.5px'],
                ["transform", "rotateZ", '18deg']
            ],
            "${_Packet-3}": [
                ["style", "display", 'block'],
                ["motion", "location", '160px 70.5px'],
                ["transform", "rotateZ", '19deg']
            ],
            "${_Circuit}": [
                ["style", "top", '48px'],
                ["style", "left", '88px'],
                ["style", "display", 'block']
            ],
            "${_Text}": [
                ["style", "top", '215px'],
                ["style", "font-size", '94%'],
                ["style", "text-align", 'center'],
                ["style", "font-family", 'Times New Roman, Times, serif'],
                ["style", "display", 'block'],
                ["style", "font-weight", '700'],
                ["style", "left", '255px'],
                ["style", "width", '248px']
            ],
            "${_Virtual-Path}": [
                ["style", "top", '66px'],
                ["style", "left", '135px'],
                ["style", "display", 'block']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(255,255,255,1)'],
                ["style", "overflow", 'visible'],
                ["style", "height", '850px'],
                ["style", "width", '800px']
            ],
            "${_r456_1}": [
                ["style", "top", '147px'],
                ["transform", "rotateZ", '-13deg'],
                ["style", "height", '78px'],
                ["style", "display", 'block'],
                ["style", "left", '491px'],
                ["style", "width", '124px']
            ],
            "${_Text4}": [
                ["style", "top", '210px'],
                ["style", "display", 'block'],
                ["style", "font-family", 'Times New Roman, Times, serif'],
                ["style", "left", '252px'],
                ["style", "width", '337px']
            ],
            "${_Final-Figure2}": [
                ["style", "top", '48px'],
                ["style", "left", '98px'],
                ["style", "display", 'block']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 5390,
            autoPlay: true,
            timeline: [
                { id: "eid50", tween: [ "style", "${_Text}", "width", '248px', { fromValue: '248px'}], position: 590, duration: 0 },
                { id: "eid32", tween: [ "style", "${_Final-Figure2}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid33", tween: [ "style", "${_Final-Figure2}", "display", 'block', { fromValue: 'none'}], position: 5390, duration: 0 },
                { id: "eid49", tween: [ "style", "${_Text5}", "font-size", '94%', { fromValue: '15px'}], position: 790, duration: 0 },
                { id: "eid3", tween: [ "style", "${_Virtual-Path}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid4", tween: [ "style", "${_Virtual-Path}", "display", 'block', { fromValue: 'none'}], position: 500, duration: 0 },
                { id: "eid40", tween: [ "style", "${_Virtual-Path}", "display", 'none', { fromValue: 'block'}], position: 5300, duration: 0 },
                { id: "eid10", tween: [ "transform", "${_Packet-1}", "rotateZ", '93deg', { fromValue: '18deg'}], position: 1000, duration: 2000 },
                { id: "eid22", tween: [ "transform", "${_Packet-1}", "rotateZ", '93deg', { fromValue: '93deg'}], position: 3415, duration: 1585 },
                { id: "eid48", tween: [ "style", "${_Text5}", "top", '775px', { fromValue: '775px'}], position: 790, duration: 0 },
                { id: "eid17", tween: [ "transform", "${_Packet-3}", "rotateZ", '3deg', { fromValue: '19deg'}], position: 1500, duration: 1500 },
                { id: "eid28", tween: [ "transform", "${_Packet-3}", "rotateZ", '44deg', { fromValue: '3deg'}], position: 3795, duration: 1205 },
                { id: "eid14", tween: [ "motion", "${_Packet-2}", [[178, 76.5, 0, 0],[216.68, 100.33, 47.57, 7.45, 63.85, 10.01],[275.51, 90.9, 92.81, 10.06, 66.27, 7.18],[364.21, 139.75, 115.7, 18.61, 97.75, 15.73],[472.42, 142.04, 51.17, -11.98, 75.43, -17.66],[508.4, 124.78, 0, 0]]], position: 1250, duration: 1750 },
                { id: "eid23", tween: [ "motion", "${_Packet-2}", [[524.2, 126.92, 0, 0],[601.5, 113.75, 0, 0]]], position: 3595, duration: 1405 },
                { id: "eid29", tween: [ "style", "${_Text4}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid30", tween: [ "style", "${_Text4}", "display", 'block', { fromValue: 'none'}], position: 3315, duration: 0 },
                { id: "eid31", tween: [ "style", "${_Text4}", "display", 'none', { fromValue: 'block'}], position: 5195, duration: 0 },
                { id: "eid34", tween: [ "style", "${_Text4}", "display", 'none', { fromValue: 'none'}], position: 5300, duration: 0 },
                { id: "eid45", tween: [ "style", "${_r456_1}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid46", tween: [ "style", "${_r456_1}", "display", 'block', { fromValue: 'none'}], position: 270, duration: 0 },
                { id: "eid47", tween: [ "style", "${_r456_1}", "display", 'none', { fromValue: 'block'}], position: 750, duration: 0 },
                { id: "eid18", tween: [ "style", "${_Text2}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid19", tween: [ "style", "${_Text2}", "display", 'block', { fromValue: 'none'}], position: 870, duration: 0 },
                { id: "eid20", tween: [ "style", "${_Text2}", "display", 'none', { fromValue: 'block'}], position: 3165, duration: 0 },
                { id: "eid37", tween: [ "style", "${_Text2}", "display", 'none', { fromValue: 'none'}], position: 5300, duration: 0 },
                { id: "eid39", tween: [ "style", "${_Packet-1}", "display", 'none', { fromValue: 'block'}], position: 5300, duration: 0 },
                { id: "eid9", tween: [ "motion", "${_Packet-1}", [[196, 82.5, 0, 0],[213.5, 99.94, 41.15, 4.44, 39.02, 4.21],[272.77, 90.79, 82.02, 8.85, 68.2, 7.36],[360.23, 138.18, 117.41, 12.67, 94.43, 10.19],[473.03, 142.69, 87.35, -18.85, 88.44, -19.09],[529.6, 119.12, 0, 0]]], position: 1000, duration: 2000 },
                { id: "eid21", tween: [ "motion", "${_Packet-1}", [[529.6, 121.13, 0, 0],[563.66, 119.67, 32.84, -2.93, 12.73, -1.13],[575.22, 118.01, 77.78, 4.63, 46.9, 2.79],[615.27, 126.5, 0, 0]]], position: 3415, duration: 1585 },
                { id: "eid36", tween: [ "style", "${_Packet-2}", "display", 'none', { fromValue: 'block'}], position: 5300, duration: 0 },
                { id: "eid41", tween: [ "style", "${_Circuit}", "display", 'none', { fromValue: 'block'}], position: 5300, duration: 0 },
                { id: "eid15", tween: [ "transform", "${_Packet-2}", "rotateZ", '-13deg', { fromValue: '18deg'}], position: 1250, duration: 1750 },
                { id: "eid24", tween: [ "transform", "${_Packet-2}", "rotateZ", '43deg', { fromValue: '-13deg'}], position: 3595, duration: 1405 },
                { id: "eid42", tween: [ "style", "${_Text5}", "display", 'none', { fromValue: 'block'}], position: 5300, duration: 0 },
                { id: "eid1", tween: [ "style", "${_Text}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid2", tween: [ "style", "${_Text}", "display", 'block', { fromValue: 'none'}], position: 270, duration: 0 },
                { id: "eid5", tween: [ "style", "${_Text}", "display", 'none', { fromValue: 'block'}], position: 750, duration: 0 },
                { id: "eid35", tween: [ "style", "${_Text}", "display", 'none', { fromValue: 'none'}], position: 5300, duration: 0 },
                { id: "eid38", tween: [ "style", "${_Packet-3}", "display", 'none', { fromValue: 'block'}], position: 5300, duration: 0 },
                { id: "eid16", tween: [ "motion", "${_Packet-3}", [[160, 70.5, 0, 0],[216.9, 98.76, 48.97, 10.39, 83.54, 17.72],[274.77, 91.26, 100.34, 16.15, 60.25, 9.7],[360.98, 135.2, 129.74, 31.61, 91.56, 22.31],[450.4, 139.3, 0, 0]]], position: 1500, duration: 1500 },
                { id: "eid27", tween: [ "motion", "${_Packet-3}", [[450.4, 139.3, 0, 0],[478.24, 141.98, 75.63, -18.1, 39.91, -9.55],[569.75, 114.72, 38.22, -17.01, 71.38, -31.76],[588, 100.4, 0, 0]]], position: 3795, duration: 1205 }            ]
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
})(jQuery, AdobeEdge, "EDGE-297884991");
