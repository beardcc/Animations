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
                id: '_3a',
                display: 'block',
                type: 'image',
                rect: ['114px', '466px','58.7%','8.6%','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"3a.png",'0%','0%','323px','60px']
            },
            {
                id: '_2a',
                display: 'block',
                type: 'image',
                rect: ['125px', '274px','54.9%','7.6%','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"2a.png",'0%','0%','302px','53px']
            },
            {
                id: '_1a',
                display: 'block',
                type: 'image',
                rect: ['252px', '66px','8.2%','8.4%','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"1a.png",'0%','0%','45px','59px']
            },
            {
                id: '_2',
                display: 'block',
                type: 'image',
                rect: ['74px', '225px','412px','163px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"2.png",'0px','0px']
            },
            {
                id: 'Text4',
                display: 'block',
                type: 'text',
                rect: ['362px', '209px','149px','53px','auto', 'auto'],
                text: "Spectrum of the higher rate PN sequence.",
                align: "center",
                font: ['\'Times New Roman\', Times, serif', [94, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: '_1',
                display: 'block',
                type: 'image',
                rect: ['157px', '14px','246px','181px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"1.png",'0px','0px']
            },
            {
                id: 'Text3',
                display: 'block',
                type: 'text',
                rect: ['379px', '36px','143px','40px','auto', 'auto'],
                text: "Spectrum of the original data signal.",
                align: "center",
                font: ['\'Times New Roman\', Times, serif', [94, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: '_3',
                display: 'block',
                type: 'image',
                rect: ['47px', '427px','462px','163px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"3.png",'0px','0px']
            },
            {
                id: 'Text5',
                display: 'block',
                type: 'text',
                rect: ['297px', '394px','243px','77px','auto', 'auto'],
                text: "Spectrum of the signal after multiplication by the PN sequence. The total width is the sum of the previous widths and is close to the width of the PN sequence spectrum.",
                align: "center",
                font: ['\'Times New Roman\', Times, serif', [94, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: 'Text',
                type: 'text',
                rect: ['123px', '638px','347px','40px','auto', 'auto'],
                text: "Figure 9.9  Approximate Spectrum of Direct Sequence Spread Spectrum Signal",
                align: "center",
                font: ['Times New Roman, Times, serif', [119, "%"], "rgba(0,0,0,1)", "700", "none", ""]
            },
            {
                id: 'Text2',
                display: 'block',
                type: 'text',
                rect: ['83px', '626px','390px','14px','auto', 'auto'],
                text: "Click or Touch on Figure for Each Step of the Animation",
                align: "center",
                font: ['\'Times New Roman\', Times, serif', [94, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
            }],
            symbolInstances: [

            ]
        },
    states: {
        "Base State": {
            "${__3}": [
                ["style", "top", '427px'],
                ["style", "left", '47px'],
                ["style", "display", 'block']
            ],
            "${_Text4}": [
                ["style", "top", '209px'],
                ["style", "display", 'block'],
                ["style", "left", '362px'],
                ["style", "width", '149px']
            ],
            "${_Text5}": [
                ["style", "top", '394px'],
                ["style", "display", 'block'],
                ["style", "left", '297px'],
                ["style", "width", '243px']
            ],
            "${__2}": [
                ["style", "top", '225px'],
                ["style", "left", '74px'],
                ["style", "display", 'block']
            ],
            "${_Text3}": [
                ["style", "height", '40px'],
                ["style", "display", 'block'],
                ["style", "left", '379px'],
                ["style", "width", '143px']
            ],
            "${__1}": [
                ["style", "top", '14px'],
                ["style", "left", '157px'],
                ["style", "display", 'block']
            ],
            "${__2a}": [
                ["style", "height", '0%'],
                ["style", "display", 'block'],
                ["style", "left", '125px'],
                ["style", "top", '274px']
            ],
            "${_Text2}": [
                ["style", "top", '606px'],
                ["style", "display", 'block'],
                ["style", "font-size", '94%'],
                ["style", "left", '75px'],
                ["style", "width", '444px']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(255,255,255,1)'],
                ["style", "width", '550px'],
                ["style", "height", '700px'],
                ["style", "overflow", 'hidden']
            ],
            "${_Text}": [
                ["style", "top", '638px'],
                ["style", "text-align", 'center'],
                ["style", "font-size", '119%'],
                ["style", "font-family", 'Times New Roman, Times, serif'],
                ["style", "font-weight", '700'],
                ["style", "left", '123px'],
                ["style", "width", '347px']
            ],
            "${__3a}": [
                ["style", "height", '0%'],
                ["style", "top", '466px'],
                ["style", "left", '114px'],
                ["style", "display", 'block']
            ],
            "${__1a}": [
                ["style", "height", '0%'],
                ["style", "display", 'block'],
                ["style", "left", '252px'],
                ["style", "top", '66px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 7654,
            autoPlay: true,
            timeline: [
                { id: "eid18", tween: [ "style", "${_Text4}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid19", tween: [ "style", "${_Text4}", "display", 'block', { fromValue: 'none'}], position: 2950, duration: 0 },
                { id: "eid24", tween: [ "style", "${_Text4}", "display", 'none', { fromValue: 'block'}], position: 4878, duration: 0 },
                { id: "eid35", tween: [ "style", "${_Text2}", "display", 'none', { fromValue: 'block'}], position: 7654, duration: 0 },
                { id: "eid33", tween: [ "style", "${__3a}", "height", '8.57%', { fromValue: '0%'}], position: 5690, duration: 1500 },
                { id: "eid20", tween: [ "style", "${__2a}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid21", tween: [ "style", "${__2a}", "display", 'block', { fromValue: 'none'}], position: 3130, duration: 0 },
                { id: "eid5", tween: [ "style", "${__1a}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid6", tween: [ "style", "${__1a}", "display", 'block', { fromValue: 'none'}], position: 640, duration: 0 },
                { id: "eid14", tween: [ "style", "${__1a}", "height", '8.43%', { fromValue: '0%'}], position: 640, duration: 1500 },
                { id: "eid16", tween: [ "style", "${__2}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid17", tween: [ "style", "${__2}", "display", 'block', { fromValue: 'none'}], position: 2675, duration: 0 },
                { id: "eid3", tween: [ "style", "${_Text3}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid4", tween: [ "style", "${_Text3}", "display", 'block', { fromValue: 'none'}], position: 500, duration: 0 },
                { id: "eid15", tween: [ "style", "${_Text3}", "display", 'none', { fromValue: 'block'}], position: 2335, duration: 0 },
                { id: "eid25", tween: [ "style", "${__3}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid26", tween: [ "style", "${__3}", "display", 'block', { fromValue: 'none'}], position: 5208, duration: 0 },
                { id: "eid1", tween: [ "style", "${__1}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid2", tween: [ "style", "${__1}", "display", 'block', { fromValue: 'none'}], position: 250, duration: 0 },
                { id: "eid27", tween: [ "style", "${_Text5}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid28", tween: [ "style", "${_Text5}", "display", 'block', { fromValue: 'none'}], position: 5500, duration: 0 },
                { id: "eid34", tween: [ "style", "${_Text5}", "display", 'none', { fromValue: 'block'}], position: 7379, duration: 0 },
                { id: "eid29", tween: [ "style", "${__3a}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid30", tween: [ "style", "${__3a}", "display", 'block', { fromValue: 'none'}], position: 5690, duration: 0 },
                { id: "eid23", tween: [ "style", "${__2a}", "height", '7.57%', { fromValue: '0%'}], position: 3130, duration: 1500 }            ]
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
})(jQuery, AdobeEdge, "EDGE-98309644");
