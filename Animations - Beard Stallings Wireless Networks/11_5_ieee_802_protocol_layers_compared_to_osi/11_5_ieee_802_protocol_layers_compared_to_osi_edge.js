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
                id: '_1',
                display: 'block',
                type: 'image',
                rect: ['147px', '24px','200px','470px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"1.png",'0px','0px']
            },
            {
                id: 'Text3',
                display: 'block',
                type: 'text',
                rect: ['359px', '30px','200px','66px','auto', 'auto'],
                text: "OSI 7-Layer Model",
                align: "left",
                font: ['Times New Roman, Times, serif', [94, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: '_2',
                display: 'block',
                type: 'image',
                rect: ['369px', '142px','192px','365px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"2.png",'0px','0px']
            },
            {
                id: 'path',
                display: 'block',
                type: 'image',
                rect: ['293px', '322px','132px','86px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"path.png",'0px','0px']
            },
            {
                id: 'arrow',
                display: 'block',
                type: 'image',
                rect: ['293px', '352px','40px','27px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"arrow.png",'0px','0px']
            },
            {
                id: 'arrowCopy',
                display: 'block',
                type: 'image',
                rect: ['294px', '401px','40px','27px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"arrow.png",'0px','0px']
            },
            {
                id: 'Text4',
                display: 'block',
                type: 'text',
                rect: ['447px', '494px','279px','71px','auto', 'auto'],
                text: "IEEE 802 standards focus on these two bottom OSI Layers, and split each into two sublayers.",
                align: "left",
                font: ['Times New Roman, Times, serif', [94, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: 'Text',
                type: 'text',
                rect: ['109px', '565px','550px','35px','auto', 'auto'],
                text: "Figure 11.5 IEEE 802 Protocol Layers Compared to OSI Model",
                align: "center",
                font: ['Times New Roman, Times, serif', [119, "%"], "rgba(0,0,0,1)", "700", "none", ""]
            },
            {
                id: 'Text2',
                display: 'block',
                type: 'text',
                rect: ['234px', '578px','auto','auto','auto', 'auto'],
                text: "Click or Touch on Figure for Each Step of the  Animation",
                align: "left",
                font: ['Times New Roman, Times, serif', [94, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: 'I',
                display: 'block',
                type: 'image',
                rect: ['483px', '252px','142px','95px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"I.png",'0px','0px']
            },
            {
                id: 'II',
                display: 'block',
                type: 'image',
                rect: ['542px', '317px','101px','181px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"II.png",'0px','0px']
            }],
            symbolInstances: [

            ]
        },
    states: {
        "Base State": {
            "${_arrowCopy}": [
                ["style", "top", '401px'],
                ["style", "display", 'block'],
                ["style", "left", '294px'],
                ["style", "width", '40px']
            ],
            "${_II}": [
                ["style", "top", '317px'],
                ["style", "left", '542px'],
                ["style", "display", 'block']
            ],
            "${_arrow}": [
                ["style", "top", '352px'],
                ["style", "display", 'block'],
                ["style", "left", '293px'],
                ["style", "width", '40px']
            ],
            "${__2}": [
                ["style", "top", '142px'],
                ["style", "left", '369px'],
                ["style", "display", 'block']
            ],
            "${_path}": [
                ["style", "top", '322px'],
                ["style", "left", '293px'],
                ["style", "display", 'block']
            ],
            "${__1}": [
                ["style", "top", '24px'],
                ["style", "left", '147px'],
                ["style", "display", 'block']
            ],
            "${_Text}": [
                ["style", "top", '565px'],
                ["style", "width", '550px'],
                ["style", "text-align", 'center'],
                ["style", "font-weight", '700'],
                ["style", "height", '35px'],
                ["style", "font-family", 'Times New Roman, Times, serif'],
                ["style", "left", '109px'],
                ["style", "font-size", '119%']
            ],
            "${_Text3}": [
                ["style", "display", 'block'],
                ["style", "font-family", 'Times New Roman, Times, serif']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(255,255,255,1)'],
                ["style", "width", '800px'],
                ["style", "height", '600px'],
                ["style", "overflow", 'hidden']
            ],
            "${_Text2}": [
                ["style", "top", '544px'],
                ["style", "font-size", '94%'],
                ["style", "display", 'block'],
                ["style", "font-family", 'Times New Roman, Times, serif'],
                ["style", "left", '196px'],
                ["style", "width", '371px']
            ],
            "${_I}": [
                ["style", "top", '252px'],
                ["style", "left", '483px'],
                ["style", "display", 'block']
            ],
            "${_Text4}": [
                ["style", "top", '71px'],
                ["style", "display", 'block'],
                ["style", "font-family", 'Times New Roman, Times, serif'],
                ["style", "left", '392px'],
                ["style", "width", '230px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 4250,
            autoPlay: true,
            timeline: [
                { id: "eid10", tween: [ "style", "${_arrow}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid11", tween: [ "style", "${_arrow}", "display", 'block', { fromValue: 'none'}], position: 2000, duration: 0 },
                { id: "eid20", tween: [ "style", "${_arrow}", "display", 'block', { fromValue: 'block'}], position: 3575, duration: 0 },
                { id: "eid36", tween: [ "style", "${_arrow}", "display", 'none', { fromValue: 'block'}], position: 3750, duration: 0 },
                { id: "eid26", tween: [ "style", "${_II}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid27", tween: [ "style", "${_II}", "display", 'block', { fromValue: 'none'}], position: 3750, duration: 0 },
                { id: "eid12", tween: [ "style", "${_arrowCopy}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid13", tween: [ "style", "${_arrowCopy}", "display", 'block', { fromValue: 'none'}], position: 2000, duration: 0 },
                { id: "eid21", tween: [ "style", "${_arrowCopy}", "display", 'block', { fromValue: 'block'}], position: 3575, duration: 0 },
                { id: "eid35", tween: [ "style", "${_arrowCopy}", "display", 'none', { fromValue: 'block'}], position: 3750, duration: 0 },
                { id: "eid19", tween: [ "style", "${_arrow}", "left", '382px', { fromValue: '293px'}], position: 2000, duration: 1575 },
                { id: "eid45", tween: [ "style", "${_Text4}", "width", '230px', { fromValue: '230px'}], position: 2175, duration: 0 },
                { id: "eid58", tween: [ "style", "${_Text2}", "left", '196px', { fromValue: '196px'}], position: 4070, duration: 0 },
                { id: "eid22", tween: [ "style", "${_Text4}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid23", tween: [ "style", "${_Text4}", "display", 'block', { fromValue: 'none'}], position: 2000, duration: 0 },
                { id: "eid24", tween: [ "style", "${_Text4}", "display", 'none', { fromValue: 'block'}], position: 3750, duration: 0 },
                { id: "eid3", tween: [ "style", "${_Text3}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid4", tween: [ "style", "${_Text3}", "display", 'block', { fromValue: 'none'}], position: 690, duration: 0 },
                { id: "eid5", tween: [ "style", "${_Text3}", "display", 'none', { fromValue: 'block'}], position: 1000, duration: 0 },
                { id: "eid34", tween: [ "style", "${_Text4}", "top", '71px', { fromValue: '71px'}], position: 3575, duration: 0 },
                { id: "eid16", tween: [ "style", "${_arrowCopy}", "left", '382px', { fromValue: '294px'}], position: 2000, duration: 1575 },
                { id: "eid33", tween: [ "style", "${_Text4}", "left", '392px', { fromValue: '392px'}], position: 3575, duration: 0 },
                { id: "eid6", tween: [ "style", "${__2}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid7", tween: [ "style", "${__2}", "display", 'block', { fromValue: 'none'}], position: 1500, duration: 0 },
                { id: "eid8", tween: [ "style", "${_path}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid9", tween: [ "style", "${_path}", "display", 'block', { fromValue: 'none'}], position: 1500, duration: 0 },
                { id: "eid25", tween: [ "style", "${_I}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid28", tween: [ "style", "${_I}", "display", 'block', { fromValue: 'none'}], position: 3750, duration: 0 },
                { id: "eid1", tween: [ "style", "${__1}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid2", tween: [ "style", "${__1}", "display", 'block', { fromValue: 'none'}], position: 390, duration: 0 },
                { id: "eid29", tween: [ "style", "${_Text2}", "display", 'none', { fromValue: 'block'}], position: 4250, duration: 0 }            ]
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
})(jQuery, AdobeEdge, "EDGE-14614200");
