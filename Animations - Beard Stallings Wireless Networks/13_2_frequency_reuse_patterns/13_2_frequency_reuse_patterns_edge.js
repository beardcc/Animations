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
                id: 'Text3',
                display: 'block',
                type: 'text',
                rect: ['42px', '280px','auto','auto','auto', 'auto'],
                text: "(a) Frequency reuse pattern for <i>N</i> = 4",
                align: "left",
                font: ['\'Times New Roman\', Times, serif', [94, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: 'Text3Copy',
                display: 'block',
                type: 'text',
                rect: ['320px', '280px','auto','auto','auto', 'auto'],
                text: "(b) Frequency reuse pattern for <i>N</i> = 7",
                align: "left",
                font: ['\'Times New Roman\', Times, serif', [94, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: 'Text4',
                display: 'block',
                type: 'text',
                rect: ['110px', '601px','auto','auto','auto', 'auto'],
                text: "(c) Dark Blue cells indicate a frequency reuse for <i>N</i> = 19",
                align: "left",
                font: ['\'Times New Roman\', Times, serif', [94, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: 'Text',
                type: 'text',
                rect: ['128px', '669px','auto','auto','auto', 'auto'],
                text: "Figure 13.2 Frequency Reuse Patterns",
                font: ['Times New Roman, Times, serif', [119, "%"], "rgba(0,0,0,1)", "700", "none", ""]
            },
            {
                id: 'Text2',
                display: 'block',
                type: 'text',
                rect: ['117px', '650px','auto','auto','auto', 'auto'],
                text: "Click or Touch on Figure for Each Step of the Animation",
                align: "left",
                font: ['\'Times New Roman\', Times, serif', [94, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: 'II',
                display: 'block',
                type: 'image',
                rect: ['327px', '24px','225px','238px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"II.png",'0px','0px']
            },
            {
                id: 'Text11',
                display: 'block',
                type: 'text',
                rect: ['353px', '320px','212px','43px','auto', 'auto'],
                text: "Cluster size <i>N</i> = 7, so larger distance D. Less interference.",
                align: "left",
                font: ['\'Times New Roman\', Times, serif', [94, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: 'III',
                display: 'block',
                type: 'image',
                rect: ['102px', '341px','368px','234px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"III.png",'0px','0px']
            },
            {
                id: '_12',
                display: 'block',
                type: 'image',
                rect: ['115px', '113px','71px','53px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"1.png",'0px','0px']
            },
            {
                id: 'Text5',
                display: 'block',
                type: 'text',
                rect: ['200px', '56px','181px','53px','auto', 'auto'],
                text: "Cluster size of 4",
                align: "left",
                font: ['\'Times New Roman\', Times, serif', [94, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: '_22',
                display: 'block',
                type: 'image',
                rect: ['58px', '56px','33.7%','29.1%','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"2.png",'0%','0%','202px','204px']
            },
            {
                id: 'Text6',
                display: 'block',
                type: 'text',
                rect: ['214px', '57px','101px','20px','auto', 'auto'],
                text: "Other clusters",
                align: "left",
                font: ['\'Times New Roman\', Times, serif', [94, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: '_3-1red2',
                display: 'block',
                type: 'image',
                rect: ['57px', '57px','202px','204px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"3-1red.png",'0px','0px']
            },
            {
                id: 'Text7',
                display: 'block',
                type: 'text',
                rect: ['249px', '57px','142px','47px','auto', 'auto'],
                text: "These cells use the same frequency.",
                align: "left",
                font: ['\'Times New Roman\', Times, serif', [94, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: 'Circle',
                display: 'block',
                type: 'image',
                rect: ['100px', '95px','100px','111px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"Circle.png",'0px','0px']
            },
            {
                id: 'arrowforcircle',
                display: 'block',
                type: 'image',
                rect: ['66px', '133px','41px','13px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"arrowforcircle.png",'0px','0px']
            },
            {
                id: 'Text9',
                display: 'block',
                type: 'text',
                rect: ['6px', '121px','71px','19px','auto', 'auto'],
                text: "Circle with radius <i>D</i>",
                align: "left",
                font: ['\'Times New Roman\', Times, serif', [94, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: 'Text10',
                display: 'block',
                type: 'text',
                rect: ['215px', '51px','159px','44px','auto', 'auto'],
                text: "Frequencies are reused at this distance <i>D</i>.",
                align: "left",
                font: ['\'Times New Roman\', Times, serif', [94, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
            }],
            symbolInstances: [

            ]
        },
    states: {
        "Base State": {
            "${_Text3Copy}": [
                ["style", "display", 'block'],
                ["style", "top", '280px'],
                ["style", "left", '320px'],
                ["style", "width", '245px']
            ],
            "${_Text11}": [
                ["style", "height", '43px'],
                ["style", "display", 'block']
            ],
            "${_Text3}": [
                ["style", "display", 'block'],
                ["style", "top", '280px'],
                ["style", "left", '42px'],
                ["style", "width", '245px']
            ],
            "${_Circle}": [
                ["style", "top", '145px'],
                ["style", "height", '0px'],
                ["style", "display", 'block'],
                ["style", "left", '152px'],
                ["style", "width", '0px']
            ],
            "${_Text5}": [
                ["style", "top", '56px'],
                ["style", "left", '200px'],
                ["style", "display", 'block']
            ],
            "${_Text4}": [
                ["style", "display", 'block'],
                ["style", "top", '601px'],
                ["style", "left", '110px'],
                ["style", "width", '410px']
            ],
            "${_II}": [
                ["style", "top", '24px'],
                ["style", "left", '327px'],
                ["style", "display", 'block']
            ],
            "${__3-1red2}": [
                ["style", "top", '57px'],
                ["style", "left", '57px'],
                ["style", "display", 'block']
            ],
            "${_Text2}": [
                ["style", "top", '650px'],
                ["style", "display", 'block'],
                ["style", "width", '368px'],
                ["style", "left", '102px'],
                ["style", "font-size", '94%']
            ],
            "${_Text7}": [
                ["style", "display", 'block'],
                ["style", "left", '249px'],
                ["style", "width", '142px']
            ],
            "${__12}": [
                ["style", "top", '113px'],
                ["style", "left", '115px'],
                ["style", "display", 'block']
            ],
            "${_Text6}": [
                ["style", "top", '57px'],
                ["style", "display", 'block'],
                ["style", "height", '20px'],
                ["style", "left", '214px'],
                ["style", "width", '101px']
            ],
            "${_III}": [
                ["style", "top", '341px'],
                ["style", "left", '102px'],
                ["style", "display", 'block']
            ],
            "${_Text}": [
                ["style", "top", '669px'],
                ["style", "font-size", '119%'],
                ["style", "font-family", 'Times New Roman, Times, serif'],
                ["style", "font-weight", '700'],
                ["style", "left", '128px'],
                ["style", "width", '317px']
            ],
            "${_arrowforcircle}": [
                ["style", "top", '133px'],
                ["style", "left", '66px'],
                ["style", "display", 'block']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(255,255,255,1)'],
                ["style", "overflow", 'hidden'],
                ["style", "height", '700px'],
                ["style", "width", '600px']
            ],
            "${_Text9}": [
                ["style", "top", '121px'],
                ["style", "text-align", 'left'],
                ["style", "display", 'block'],
                ["style", "left", '6px'],
                ["style", "width", '71px']
            ],
            "${__22}": [
                ["style", "top", '142px'],
                ["style", "height", '0%'],
                ["style", "display", 'block'],
                ["style", "left", '151px'],
                ["style", "background-position", [50,50], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "width", '0%']
            ],
            "${_Text10}": [
                ["style", "display", 'block'],
                ["style", "left", '215px'],
                ["style", "width", '159px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 9000,
            autoPlay: true,
            timeline: [
                { id: "eid72", tween: [ "style", "${_Text11}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid73", tween: [ "style", "${_Text11}", "display", 'block', { fromValue: 'none'}], position: 8000, duration: 0 },
                { id: "eid74", tween: [ "style", "${_Text11}", "display", 'none', { fromValue: 'block'}], position: 8250, duration: 0 },
                { id: "eid18", tween: [ "style", "${__22}", "background-position", [50,50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,50]}], position: 2750, duration: 0 },
                { id: "eid47", tween: [ "style", "${_Circle}", "width", '100px', { fromValue: '0px'}], position: 5195, duration: 1500 },
                { id: "eid70", tween: [ "style", "${_II}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid71", tween: [ "style", "${_II}", "display", 'block', { fromValue: 'none'}], position: 7750, duration: 0 },
                { id: "eid77", tween: [ "style", "${_III}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid78", tween: [ "style", "${_III}", "display", 'block', { fromValue: 'none'}], position: 8750, duration: 0 },
                { id: "eid16", tween: [ "style", "${__22}", "height", '29.14%', { fromValue: '0%'}], position: 1250, duration: 1500 },
                { id: "eid27", tween: [ "style", "${_Text6}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid28", tween: [ "style", "${_Text6}", "display", 'block', { fromValue: 'none'}], position: 2750, duration: 0 },
                { id: "eid29", tween: [ "style", "${_Text6}", "display", 'none', { fromValue: 'block'}], position: 3000, duration: 0 },
                { id: "eid82", tween: [ "style", "${_Text2}", "width", '368px', { fromValue: '368px'}], position: 8925, duration: 0 },
                { id: "eid61", tween: [ "style", "${_Text9}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid62", tween: [ "style", "${_Text9}", "display", 'block', { fromValue: 'none'}], position: 6695, duration: 0 },
                { id: "eid67", tween: [ "style", "${_Text3Copy}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid68", tween: [ "style", "${_Text3Copy}", "display", 'block', { fromValue: 'none'}], position: 7500, duration: 0 },
                { id: "eid17", tween: [ "style", "${__22}", "width", '33.67%', { fromValue: '0%'}], position: 1250, duration: 1500 },
                { id: "eid8", tween: [ "style", "${__22}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid9", tween: [ "style", "${__22}", "display", 'block', { fromValue: 'none'}], position: 1250, duration: 0 },
                { id: "eid64", tween: [ "style", "${_Text10}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid65", tween: [ "style", "${_Text10}", "display", 'block', { fromValue: 'none'}], position: 6910, duration: 0 },
                { id: "eid66", tween: [ "style", "${_Text10}", "display", 'none', { fromValue: 'block'}], position: 7250, duration: 0 },
                { id: "eid75", tween: [ "style", "${_Text4}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid76", tween: [ "style", "${_Text4}", "display", 'block', { fromValue: 'none'}], position: 8500, duration: 0 },
                { id: "eid49", tween: [ "style", "${_Circle}", "height", '111px', { fromValue: '0px'}], position: 5195, duration: 1500 },
                { id: "eid1", tween: [ "style", "${_Text3}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid2", tween: [ "style", "${_Text3}", "display", 'block', { fromValue: 'none'}], position: 250, duration: 0 },
                { id: "eid40", tween: [ "style", "${_Text7}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid41", tween: [ "style", "${_Text7}", "display", 'block', { fromValue: 'none'}], position: 4610, duration: 0 },
                { id: "eid42", tween: [ "style", "${_Text7}", "display", 'none', { fromValue: 'block'}], position: 4926, duration: 0 },
                { id: "eid25", tween: [ "style", "${__22}", "top", '57px', { fromValue: '142px'}], position: 1250, duration: 1500 },
                { id: "eid58", tween: [ "style", "${_Circle}", "left", '100px', { fromValue: '152px'}], position: 5195, duration: 1500 },
                { id: "eid5", tween: [ "style", "${_Text5}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid6", tween: [ "style", "${_Text5}", "display", 'block', { fromValue: 'none'}], position: 750, duration: 0 },
                { id: "eid7", tween: [ "style", "${_Text5}", "display", 'none', { fromValue: 'block'}], position: 1000, duration: 0 },
                { id: "eid30", tween: [ "style", "${__3-1red2}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid31", tween: [ "style", "${__3-1red2}", "display", 'block', { fromValue: 'none'}], position: 3250, duration: 0 },
                { id: "eid32", tween: [ "style", "${__3-1red2}", "display", 'none', { fromValue: 'block'}], position: 3405, duration: 0 },
                { id: "eid33", tween: [ "style", "${__3-1red2}", "display", 'block', { fromValue: 'none'}], position: 3550, duration: 0 },
                { id: "eid34", tween: [ "style", "${__3-1red2}", "display", 'none', { fromValue: 'block'}], position: 3710, duration: 0 },
                { id: "eid35", tween: [ "style", "${__3-1red2}", "display", 'block', { fromValue: 'none'}], position: 3860, duration: 0 },
                { id: "eid36", tween: [ "style", "${__3-1red2}", "display", 'none', { fromValue: 'block'}], position: 4000, duration: 0 },
                { id: "eid37", tween: [ "style", "${__3-1red2}", "display", 'block', { fromValue: 'none'}], position: 4140, duration: 0 },
                { id: "eid38", tween: [ "style", "${__3-1red2}", "display", 'none', { fromValue: 'block'}], position: 4300, duration: 0 },
                { id: "eid39", tween: [ "style", "${__3-1red2}", "display", 'block', { fromValue: 'none'}], position: 4445, duration: 0 },
                { id: "eid43", tween: [ "style", "${__3-1red2}", "display", 'none', { fromValue: 'block'}], position: 4926, duration: 0 },
                { id: "eid44", tween: [ "style", "${_Circle}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid45", tween: [ "style", "${_Circle}", "display", 'block', { fromValue: 'none'}], position: 5195, duration: 0 },
                { id: "eid3", tween: [ "style", "${__12}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid4", tween: [ "style", "${__12}", "display", 'block', { fromValue: 'none'}], position: 500, duration: 0 },
                { id: "eid59", tween: [ "style", "${_Circle}", "top", '95px', { fromValue: '145px'}], position: 5195, duration: 1500 },
                { id: "eid60", tween: [ "style", "${_arrowforcircle}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid63", tween: [ "style", "${_arrowforcircle}", "display", 'block', { fromValue: 'none'}], position: 6695, duration: 0 },
                { id: "eid26", tween: [ "style", "${__22}", "left", '58px', { fromValue: '151px'}], position: 1250, duration: 1500 },
                { id: "eid79", tween: [ "style", "${_Text2}", "display", 'none', { fromValue: 'block'}], position: 9000, duration: 0 },
                { id: "eid83", tween: [ "style", "${_Text2}", "left", '102px', { fromValue: '102px'}], position: 8925, duration: 0 }            ]
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
})(jQuery, AdobeEdge, "EDGE-255072375");
