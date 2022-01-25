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
                id: 'Final_Figure',
                display: 'none',
                type: 'image',
                rect: ['76px', '-32px','612px','792px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"Final_Figure.png",'0px','0px']
            },
            {
                id: 'Text',
                type: 'text',
                rect: ['199px', '772px','auto','auto','auto', 'auto'],
                text: "Figure 3.7 Packet Switching: Datagram Approach",
                font: ['Times New Roman, Times, serif', [119, "%"], "rgba(0,0,0,1)", "700", "none", ""]
            },
            {
                id: 'Text3',
                display: 'block',
                type: 'text',
                rect: ['195px', '730px','auto','auto','auto', 'auto'],
                text: "Click or Touch on Figure for Each step of the Animation",
                align: "left",
                font: ['Times New Roman, Times, serif', [94, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: 'Part1',
                display: 'block',
                type: 'image',
                rect: ['112px', '60px','587px','166px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"Part1.png",'0px','0px']
            },
            {
                id: 'Packet-3',
                display: 'block',
                type: 'image',
                rect: ['157px', '77px','42px','35px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"Packet-3.png",'0px','0px'],
                transform: [[],['13']]
            },
            {
                id: 'Packet-1',
                display: 'block',
                type: 'image',
                rect: ['193px', '85px','42px','35px','auto', 'auto'],
                autoOrient: true,
                fill: ["rgba(0,0,0,0)",im+"Packet-1.png",'0px','0px'],
                transform: [[],['13']]
            },
            {
                id: 'Text4',
                display: 'block',
                type: 'text',
                rect: ['246px', '40px','307px','11px','auto', 'auto'],
                text: "All the packets are sent on this link.",
                align: "left",
                font: ['Times New Roman, Times, serif', [94, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: 'Text5',
                display: 'block',
                type: 'text',
                rect: ['278px', '36px','auto','auto','auto', 'auto'],
                text: "Packet 3 is sent on a different path than Packet 2.",
                align: "left",
                font: ['Times New Roman, Times, serif', [94, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: 'Text6',
                display: 'block',
                type: 'text',
                rect: ['335px', '36px','334px','19px','auto', 'auto'],
                text: "Packet 3 may arrive before Packets 1 and 2.",
                align: "left",
                font: ['Times New Roman, Times, serif', [94, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: 'Text7',
                display: 'block',
                type: 'text',
                rect: ['354px', '42px','369px','18px','auto', 'auto'],
                text: "The receiver places the packets in correct order.",
                align: "left",
                font: ['Times New Roman, Times, serif', [94, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: 'Packet-2',
                display: 'block',
                type: 'image',
                rect: ['175px', '81px','42px','35px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"Packet-2.png",'0px','0px'],
                transform: [[],['13']]
            }],
            symbolInstances: [

            ]
        },
    states: {
        "Base State": {
            "${_Text7}": [
                ["style", "display", 'block'],
                ["style", "font-family", 'Times New Roman, Times, serif'],
                ["style", "width", '369px']
            ],
            "${_Part1}": [
                ["style", "top", '60px'],
                ["style", "left", '112px'],
                ["style", "display", 'block']
            ],
            "${_Text5}": [
                ["style", "display", 'block'],
                ["style", "font-family", 'Times New Roman, Times, serif'],
                ["style", "width", '365px']
            ],
            "${_Text4}": [
                ["style", "top", '40px'],
                ["style", "display", 'block'],
                ["style", "font-family", 'Times New Roman, Times, serif'],
                ["style", "left", '246px'],
                ["style", "width", '307px']
            ],
            "${_Text6}": [
                ["style", "display", 'block'],
                ["style", "font-family", 'Times New Roman, Times, serif'],
                ["style", "width", '334px']
            ],
            "${_Text3}": [
                ["style", "top", '739px'],
                ["style", "width", '381px'],
                ["style", "display", 'block'],
                ["style", "font-family", 'Times New Roman, Times, serif'],
                ["style", "left", '214px'],
                ["style", "font-size", '94%']
            ],
            "${_Text}": [
                ["style", "top", '772px'],
                ["style", "width", '413px'],
                ["style", "font-weight", '700'],
                ["style", "font-family", 'Times New Roman, Times, serif'],
                ["style", "left", '199px'],
                ["style", "font-size", '119%']
            ],
            "${_Final_Figure}": [
                ["style", "top", '-32px'],
                ["style", "left", '76px'],
                ["style", "display", 'none']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(255,255,255,1)'],
                ["style", "width", '800px'],
                ["style", "height", '850px'],
                ["style", "overflow", 'hidden']
            ],
            "${_Packet-3}": [
                ["style", "display", 'block'],
                ["motion", "location", '178px 94.5px'],
                ["transform", "rotateZ", '13deg']
            ],
            "${_Packet-1}": [
                ["style", "display", 'block'],
                ["motion", "location", '214px 102.5px'],
                ["transform", "rotateZ", '13deg']
            ],
            "${_Packet-2}": [
                ["style", "display", 'block'],
                ["motion", "location", '196px 98.5px'],
                ["transform", "rotateZ", '13deg']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 9140,
            autoPlay: true,
            timeline: [
                { id: "eid52", tween: [ "style", "${_Text3}", "width", '381px', { fromValue: '381px'}], position: 125, duration: 0 },
                { id: "eid23", tween: [ "style", "${_Text6}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid24", tween: [ "style", "${_Text6}", "display", 'block', { fromValue: 'none'}], position: 4645, duration: 0 },
                { id: "eid31", tween: [ "style", "${_Text6}", "display", 'none', { fromValue: 'block'}], position: 6500, duration: 0 },
                { id: "eid8", tween: [ "transform", "${_Packet-1}", "rotateZ", '75deg', { fromValue: '13deg'}], position: 500, duration: 1500 },
                { id: "eid17", tween: [ "transform", "${_Packet-1}", "rotateZ", '77deg', { fromValue: '75deg'}], position: 2500, duration: 1500 },
                { id: "eid26", tween: [ "transform", "${_Packet-1}", "rotateZ", '63deg', { fromValue: '77deg'}], position: 4855, duration: 1296 },
                { id: "eid37", tween: [ "transform", "${_Packet-1}", "rotateZ", '92deg', { fromValue: '63deg'}], position: 7420, duration: 580 },
                { id: "eid41", tween: [ "transform", "${_Packet-1}", "rotateZ", '90deg', { fromValue: '92deg'}], position: 8000, duration: 0 },
                { id: "eid14", tween: [ "transform", "${_Packet-3}", "rotateZ", '-13deg', { fromValue: '13deg'}], position: 1000, duration: 1000 },
                { id: "eid21", tween: [ "transform", "${_Packet-3}", "rotateZ", '3deg', { fromValue: '-13deg'}], position: 3250, duration: 750 },
                { id: "eid30", tween: [ "transform", "${_Packet-3}", "rotateZ", '43deg', { fromValue: '3deg'}], position: 4750, duration: 1000 },
                { id: "eid11", tween: [ "motion", "${_Packet-2}", [[196, 98.5, 0, 0],[230.98, 118.76, 19.02, 4.7, 57.19, 14.12],[254.31, 116.14, 43.47, -8.54, 22.92, -4.5],[292.06, 113.52, 55.05, 4.76, 35.15, 3.04],[327, 127.5, 0, 0]]], position: 750, duration: 1250 },
                { id: "eid18", tween: [ "motion", "${_Packet-2}", [[327, 127.5, 0, 0],[346, 141.61, 0, 0]]], position: 2750, duration: 1250 },
                { id: "eid27", tween: [ "motion", "${_Packet-2}", [[346, 141.61, 0, 0],[375.44, 154.91, 91.69, 7.8, 48.54, 4.13],[487.53, 163.1, 24.36, -0.29, 97.74, -1.16],[508.8, 159.07, 4.96, -1.16, 16.65, -3.9],[513.27, 157.05, 15.17, -3.33, 3.98, -0.87],[521, 156.5, 0, 0]]], position: 5000, duration: 1150 },
                { id: "eid38", tween: [ "motion", "${_Packet-2}", [[521, 156.5, 0, 0],[533.03, 151.14, 33.43, -12.06, 9.6, -3.46],[589.18, 137.02, 70.83, -12.02, 72.94, -12.37],[633, 137.5, 0, 0]]], position: 7610, duration: 390 },
                { id: "eid12", tween: [ "transform", "${_Packet-2}", "rotateZ", '37deg', { fromValue: '13deg'}], position: 750, duration: 1250 },
                { id: "eid28", tween: [ "transform", "${_Packet-2}", "rotateZ", '-21deg', { fromValue: '37deg'}], position: 5000, duration: 1150 },
                { id: "eid39", tween: [ "transform", "${_Packet-2}", "rotateZ", '42deg', { fromValue: '-21deg'}], position: 7610, duration: 390 },
                { id: "eid49", tween: [ "style", "${_Text3}", "display", 'none', { fromValue: 'block'}], position: 8569, duration: 0 },
                { id: "eid47", tween: [ "style", "${_Text5}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid48", tween: [ "style", "${_Text5}", "display", 'block', { fromValue: 'none'}], position: 2420, duration: 0 },
                { id: "eid22", tween: [ "style", "${_Text5}", "display", 'none', { fromValue: 'block'}], position: 4365, duration: 0 },
                { id: "eid32", tween: [ "style", "${_Text7}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid33", tween: [ "style", "${_Text7}", "display", 'block', { fromValue: 'none'}], position: 6850, duration: 0 },
                { id: "eid40", tween: [ "style", "${_Text7}", "display", 'none', { fromValue: 'block'}], position: 8330, duration: 0 },
                { id: "eid44", tween: [ "style", "${_Packet-1}", "display", 'none', { fromValue: 'block'}], position: 8569, duration: 0 },
                { id: "eid1", tween: [ "style", "${_Final_Figure}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid42", tween: [ "style", "${_Final_Figure}", "display", 'block', { fromValue: 'none'}], position: 9140, duration: 0 },
                { id: "eid46", tween: [ "style", "${_Part1}", "display", 'none', { fromValue: 'block'}], position: 8569, duration: 0 },
                { id: "eid7", tween: [ "motion", "${_Packet-1}", [[214, 102.5, 0, 0],[230.32, 117.72, 17.03, 4.92, 35.85, 10.35],[253.2, 116.7, 43.78, -8.04, 27.15, -4.99],[297.27, 111.83, 32.12, 5.64, 37.69, 6.62],[322.71, 127.7, 41.98, 26.01, 21.67, 13.43],[345.5, 141.28, 0, 0]]], position: 500, duration: 1500 },
                { id: "eid16", tween: [ "motion", "${_Packet-1}", [[345.5, 141.28, 0, 0],[376.66, 156.47, 29.9, 5.46, 51.8, 9.47],[407.91, 158.99, 56.47, 1.89, 30.59, 1.02],[442.5, 159, 0, 0]]], position: 2500, duration: 1500 },
                { id: "eid25", tween: [ "motion", "${_Packet-1}", [[442.5, 159, 0, 0],[490.4, 161.44, 31.76, -3.5, 70.98, -7.83],[520.46, 153.97, 41.17, -11.25, 26.74, -7.3],[544, 147.8, 0, 0]]], position: 4855, duration: 1296 },
                { id: "eid36", tween: [ "motion", "${_Packet-1}", [[544, 147.8, 0, 0],[585.85, 137.4, 85.58, 2.24, 66.49, 1.74],[647, 150.5, 0, 0]]], position: 7420, duration: 580 },
                { id: "eid3", tween: [ "style", "${_Text4}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid4", tween: [ "style", "${_Text4}", "display", 'block', { fromValue: 'none'}], position: 250, duration: 0 },
                { id: "eid15", tween: [ "style", "${_Text4}", "display", 'none', { fromValue: 'block'}], position: 2250, duration: 0 },
                { id: "eid56", tween: [ "style", "${_Text3}", "top", '739px', { fromValue: '739px'}], position: 125, duration: 0 },
                { id: "eid13", tween: [ "motion", "${_Packet-3}", [[178, 94.5, 0, 0],[229.52, 120.26, 23.52, 5.76, 65.01, 15.33],[249.47, 117.3, 27.79, -5.46, 16.15, -3.17],[264, 114.78, 0, 0]]], position: 1000, duration: 1000 },
                { id: "eid20", tween: [ "motion", "${_Packet-3}", [[264, 114.78, 0, 0],[293.15, 109.94, 68.75, -4.57, 45.33, -3.01],[343.4, 109.5, 0, 0]]], position: 3250, duration: 750 },
                { id: "eid29", tween: [ "motion", "${_Packet-3}", [[343.4, 109.5, 0, 0],[399.38, 107.68, 11.18, 0.22, 86.88, 1.73],[410.6, 108.53, 126.53, 5.6, 11.21, 0.5],[547.12, 103.87, 18.63, 1.48, 98.33, 7.82],[560.15, 110.87, 20.78, 13.95, 9.87, 6.63],[569.5, 119.5, 0, 0]]], position: 4750, duration: 1000 },
                { id: "eid35", tween: [ "motion", "${_Packet-3}", [[569.5, 119.5, 0, 0],[586.86, 134.56, 46.66, 8.21, 28.8, 5.07],[619, 124.5, 0, 0]]], position: 7250, duration: 750 },
                { id: "eid45", tween: [ "style", "${_Packet-3}", "display", 'none', { fromValue: 'block'}], position: 8569, duration: 0 },
                { id: "eid43", tween: [ "style", "${_Packet-2}", "display", 'none', { fromValue: 'block'}], position: 8569, duration: 0 }            ]
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
})(jQuery, AdobeEdge, "EDGE-71152904");
