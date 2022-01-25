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
                id: 'last-pulse',
                display: 'block',
                type: 'image',
                rect: ['-224px', '200px','213px','135px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"last-pulse.png",'0px','0px']
            },
            {
                id: 'Text',
                type: 'text',
                rect: ['100px', '439px','auto','auto','auto', 'auto'],
                text: "Figure 5.6 Two Pulses in Time-Variant Multipath",
                font: ['Times New Roman, Times, serif', [119, "%"], "rgba(0,0,0,1)", "700", "none", ""]
            },
            {
                id: 'Text2',
                display: 'block',
                type: 'text',
                rect: ['88px', '410px','auto','auto','auto', 'auto'],
                text: "Click or Touch on Figure for Each Step of The Animation",
                align: "left",
                font: ['Georgia, \'Times New Roman\', Times, serif', [94, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: 'time-line-new',
                display: 'block',
                type: 'image',
                rect: ['9px', '155px','577px','51px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"time-line-new.png",'0px','0px']
            },
            {
                id: 'Tx-pulse',
                display: 'block',
                type: 'image',
                rect: ['-81px', '45px','80px','136px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"Tx-pulse.png",'0px','0px']
            },
            {
                id: 'time-line-new2',
                display: 'block',
                type: 'image',
                rect: ['10px', '310px','577px','51px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"time-line-new.png",'0px','0px']
            },
            {
                id: 'Rx-pulse',
                display: 'block',
                type: 'image',
                rect: ['-76px', '219px','62px','117px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"Rx-pulse.png",'0px','0px']
            },
            {
                id: 'Text3',
                display: 'block',
                type: 'text',
                rect: ['48px', '336px','auto','auto','auto', 'auto'],
                text: "At receiver after propagation delay",
                align: "left",
                font: ['Georgia, \'Times New Roman\', Times, serif', [94, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: 'Text4',
                display: 'block',
                type: 'text',
                rect: ['211px', '335px','auto','auto','auto', 'auto'],
                text: "Other pulses from multipath",
                align: "left",
                font: ['Georgia, \'Times New Roman\', Times, serif', [94, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: 'Text5',
                display: 'block',
                type: 'text',
                rect: ['279px', '343px','262px','auto','auto', 'auto'],
                text: "Next set of received pulses. There is intersymbol interference from the previous pulse.",
                align: "left",
                font: ['Georgia, \'Times New Roman\', Times, serif', [94, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: 'Rx-multipath',
                display: 'block',
                type: 'image',
                rect: ['-167px', '218px','156px','117px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"Rx-multipath.png",'0px','0px']
            },
            {
                id: 'Ellipse',
                type: 'ellipse',
                rect: ['478px', '408px','2px','4px','auto', 'auto'],
                borderRadius: ["50%", "50%", "50%", "50%"],
                fill: ["rgba(192,192,192,1)"],
                stroke: [0,"rgba(0,0,0,1)","none"]
            },
            {
                id: 'Tx-pulse_22',
                display: 'block',
                type: 'image',
                rect: ['197px', '46px','106px','130px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"Tx-pulse_2.png",'0px','0px']
            }],
            symbolInstances: [

            ]
        },
    states: {
        "Base State": {
            "${_last-pulse}": [
                ["style", "top", '200px'],
                ["style", "left", '-224px'],
                ["style", "display", 'block']
            ],
            "${_Tx-pulse_22}": [
                ["style", "top", '46px'],
                ["style", "left", '-123px'],
                ["style", "display", 'block']
            ],
            "${_Text3}": [
                ["style", "top", '336px'],
                ["style", "left", '48px'],
                ["style", "display", 'block']
            ],
            "${_Tx-pulse}": [
                ["style", "top", '45px'],
                ["style", "left", '-81px'],
                ["style", "display", 'block']
            ],
            "${_Text2}": [
                ["style", "top", '420px'],
                ["style", "display", 'block'],
                ["style", "left", '87px'],
                ["style", "font-size", '94%']
            ],
            "${_time-line-new}": [
                ["style", "top", '155px'],
                ["style", "left", '10px'],
                ["style", "display", 'block']
            ],
            "${_time-line-new2}": [
                ["style", "top", '310px'],
                ["style", "left", '10px'],
                ["style", "display", 'block']
            ],
            "${_Text}": [
                ["style", "top", '439px'],
                ["style", "font-weight", '700'],
                ["style", "font-family", 'Times New Roman, Times, serif'],
                ["style", "left", '100px'],
                ["style", "font-size", '119%']
            ],
            "${_Rx-pulse}": [
                ["style", "top", '219px'],
                ["style", "left", '-76px'],
                ["style", "display", 'block']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(255,255,255,1)'],
                ["style", "width", '600px'],
                ["style", "height", '470px'],
                ["style", "overflow", 'hidden']
            ],
            "${_Text5}": [
                ["style", "top", '336px'],
                ["style", "display", 'block'],
                ["style", "left", '166px'],
                ["style", "width", '372px']
            ],
            "${_Rx-multipath}": [
                ["style", "top", '218px'],
                ["style", "left", '-167px'],
                ["style", "display", 'block']
            ],
            "${_Text4}": [
                ["style", "top", '335px'],
                ["style", "left", '211px'],
                ["style", "display", 'block']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 8500,
            autoPlay: true,
            timeline: [
                { id: "eid40", tween: [ "style", "${_Rx-pulse}", "left", '104px', { fromValue: '-76px'}], position: 1860, duration: 1000 },
                { id: "eid71", tween: [ "style", "${_last-pulse}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid72", tween: [ "style", "${_last-pulse}", "display", 'block', { fromValue: 'none'}], position: 6578, duration: 0 },
                { id: "eid85", tween: [ "style", "${_Text5}", "left", '166px', { fromValue: '166px'}], position: 8397, duration: 0 },
                { id: "eid87", tween: [ "style", "${_Text2}", "top", '416px', { fromValue: '420px'}], position: 6773, duration: 1624 },
                { id: "eid53", tween: [ "style", "${_Tx-pulse_22}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid54", tween: [ "style", "${_Tx-pulse_22}", "display", 'block', { fromValue: 'none'}], position: 4894, duration: 0 },
                { id: "eid48", tween: [ "style", "${_Rx-multipath}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid49", tween: [ "style", "${_Rx-multipath}", "display", 'block', { fromValue: 'none'}], position: 3300, duration: 0 },
                { id: "eid86", tween: [ "style", "${_Text5}", "top", '336px', { fromValue: '336px'}], position: 8397, duration: 0 },
                { id: "eid67", tween: [ "style", "${_Tx-pulse_22}", "left", '197px', { fromValue: '-123px'}], position: 4894, duration: 1500 },
                { id: "eid33", tween: [ "style", "${_Tx-pulse}", "left", '17px', { fromValue: '-81px'}], position: 355, duration: 1000 },
                { id: "eid41", tween: [ "style", "${_Rx-pulse}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid42", tween: [ "style", "${_Rx-pulse}", "display", 'block', { fromValue: 'none'}], position: 1860, duration: 0 },
                { id: "eid51", tween: [ "style", "${_Text4}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid52", tween: [ "style", "${_Text4}", "display", 'block', { fromValue: 'none'}], position: 4685, duration: 0 },
                { id: "eid73", tween: [ "style", "${_Text4}", "display", 'none', { fromValue: 'block'}], position: 4894, duration: 0 },
                { id: "eid76", tween: [ "style", "${_Text5}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid77", tween: [ "style", "${_Text5}", "display", 'block', { fromValue: 'none'}], position: 8291, duration: 0 },
                { id: "eid79", tween: [ "style", "${_Text5}", "display", 'none', { fromValue: 'block'}], position: 8500, duration: 0 },
                { id: "eid1", tween: [ "style", "${_time-line-new}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid2", tween: [ "style", "${_time-line-new}", "display", 'block', { fromValue: 'none'}], position: 200, duration: 0 },
                { id: "eid84", tween: [ "style", "${_Text5}", "width", '372px', { fromValue: '372px'}], position: 8397, duration: 0 },
                { id: "eid70", tween: [ "style", "${_last-pulse}", "left", '257px', { fromValue: '-224px'}], position: 6578, duration: 1500 },
                { id: "eid78", tween: [ "style", "${_Text2}", "display", 'none', { fromValue: 'block'}], position: 8500, duration: 0 },
                { id: "eid34", tween: [ "style", "${_Tx-pulse}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid35", tween: [ "style", "${_Tx-pulse}", "display", 'block', { fromValue: 'none'}], position: 355, duration: 0 },
                { id: "eid80", tween: [ "style", "${_Text2}", "left", '87px', { fromValue: '87px'}], position: 6773, duration: 0 },
                { id: "eid36", tween: [ "style", "${_time-line-new2}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid37", tween: [ "style", "${_time-line-new2}", "display", 'block', { fromValue: 'none'}], position: 1555, duration: 0 },
                { id: "eid43", tween: [ "style", "${_Text3}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid44", tween: [ "style", "${_Text3}", "display", 'block', { fromValue: 'none'}], position: 3070, duration: 0 },
                { id: "eid50", tween: [ "style", "${_Text3}", "display", 'none', { fromValue: 'block'}], position: 3300, duration: 0 },
                { id: "eid47", tween: [ "style", "${_Rx-multipath}", "left", '145px', { fromValue: '-167px'}], position: 3300, duration: 1200 }            ]
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
})(jQuery, AdobeEdge, "EDGE-341875275");
