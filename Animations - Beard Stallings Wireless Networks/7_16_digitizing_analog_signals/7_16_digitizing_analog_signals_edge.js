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
                rect: ['642px', '16px','125px','44px','auto', 'auto'],
                text: "Analog signal to  digitized voice and modulated to carrier frequency.",
                align: "left",
                font: ['Georgia, \'Times New Roman\', Times, serif', [94, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: 'Text5',
                type: 'text',
                rect: ['239px', '232px','292px','44px','auto', 'auto'],
                text: "Figure 7.16 Digitizing Analog Data",
                align: "left",
                font: ['Times New Roman, Times, serif', [119, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: 'Untitled-3',
                type: 'image',
                rect: ['15px', '26px','730px','152px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"Untitled-3.png",'0px','0px']
            },
            {
                id: 'Digital-Signal',
                display: 'block',
                type: 'image',
                rect: ['342px', '95px','130px','44px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"Digital-Signal.png",'0px','0px']
            },
            {
                id: 'Digital-Signal2',
                display: 'block',
                type: 'image',
                rect: ['342px', '95px','130px','44px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"Digital-Signal.png",'0px','0px']
            },
            {
                id: 'Text2',
                display: 'block',
                type: 'text',
                rect: ['347px', '26px','125px','26px','auto', 'auto'],
                text: "Digitized voice",
                align: "left",
                font: ['Georgia, \'Times New Roman\', Times, serif', [94, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: 'Analog-signal2',
                display: 'block',
                type: 'image',
                rect: ['60px', '77px','125px','49px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"Analog-signal.png",'0px','0px']
            },
            {
                id: 'Analog-signal',
                display: 'block',
                type: 'image',
                rect: ['60px', '77px','125px','49px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"Analog-signal.png",'0px','0px']
            },
            {
                id: 'Text',
                display: 'block',
                type: 'text',
                rect: ['60px', '19px','152px','36px','auto', 'auto'],
                text: "Input voice signal",
                font: ['Georgia, Times New Roman, Times, serif', [94, "%"], "rgba(0,0,0,1)", "700", "none", ""]
            },
            {
                id: 'Text6',
                display: 'block',
                type: 'text',
                rect: ['282px', '250px','auto','auto','auto', 'auto'],
                text: "Click or Touch on Figure for Each Step of the Animation",
                align: "left",
                font: ['Times New Roman, Times, serif', [94, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: 'Modulated-Signal',
                display: 'block',
                type: 'image',
                rect: ['628px', '87px','130px','44px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"Modulated-Signal.png",'0px','0px']
            },
            {
                id: 'c3',
                display: 'block',
                type: 'image',
                rect: ['636px', '94px','130px','33px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"c3.png",'0px','0px']
            },
            {
                id: 'c2',
                display: 'block',
                type: 'image',
                rect: ['622px', '95px','143px','31px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"c2.png",'0px','0px']
            }],
            symbolInstances: [

            ]
        },
    states: {
        "Base State": {
            "${_Untitled-3}": [
                ["style", "left", '15px'],
                ["style", "top", '26px']
            ],
            "${_c3}": [
                ["style", "top", '94px'],
                ["style", "left", '616px'],
                ["style", "display", 'block']
            ],
            "${_Text3}": [
                ["style", "display", 'block'],
                ["style", "top", '5px'],
                ["style", "left", '549px'],
                ["style", "width", '212px']
            ],
            "${_c2}": [
                ["style", "display", 'block'],
                ["style", "top", '95px'],
                ["style", "left", '622px'],
                ["style", "width", '143px']
            ],
            "${_Text2}": [
                ["style", "display", 'block'],
                ["style", "top", '26px'],
                ["style", "left", '347px'],
                ["style", "width", '125px']
            ],
            "${_Digital-Signal}": [
                ["style", "top", '95px'],
                ["style", "left", '342px'],
                ["style", "display", 'block']
            ],
            "${_Text6}": [
                ["style", "top", '204px'],
                ["style", "width", '368px'],
                ["style", "display", 'block'],
                ["style", "font-family", 'Times New Roman, Times, serif'],
                ["style", "left", '201px'],
                ["style", "font-size", '94%']
            ],
            "${_Digital-Signal2}": [
                ["style", "top", '95px'],
                ["style", "left", '195px'],
                ["style", "display", 'block']
            ],
            "${_Text}": [
                ["style", "width", '152px'],
                ["style", "display", 'block'],
                ["style", "font-weight", '700'],
                ["style", "font-family", 'Georgia, Times New Roman, Times, serif'],
                ["style", "font-size", '94%']
            ],
            "${_Analog-signal2}": [
                ["style", "top", '77px'],
                ["style", "left", '60px'],
                ["style", "display", 'block']
            ],
            "${_Modulated-Signal}": [
                ["style", "top", '87px'],
                ["style", "left", '486px'],
                ["style", "display", 'block']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(255,255,255,1)'],
                ["style", "overflow", 'hidden'],
                ["style", "height", '270px'],
                ["style", "width", '770px']
            ],
            "${_Text5}": [
                ["style", "top", '232px'],
                ["style", "width", '292px'],
                ["style", "font-family", 'Times New Roman, Times, serif'],
                ["style", "left", '239px'],
                ["style", "font-size", '119%']
            ],
            "${_Analog-signal}": [
                ["style", "top", '77px'],
                ["style", "left", '40px'],
                ["style", "display", 'block']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 7915,
            autoPlay: true,
            timeline: [
                { id: "eid26", tween: [ "style", "${_Text2}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid27", tween: [ "style", "${_Text2}", "display", 'block', { fromValue: 'none'}], position: 2500, duration: 0 },
                { id: "eid28", tween: [ "style", "${_Text2}", "display", 'none', { fromValue: 'block'}], position: 4145, duration: 0 },
                { id: "eid1", tween: [ "style", "${_Analog-signal}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid4", tween: [ "style", "${_Analog-signal}", "display", 'block', { fromValue: 'none'}], position: 250, duration: 0 },
                { id: "eid40", tween: [ "style", "${_Modulated-Signal}", "left", '628px', { fromValue: '486px'}], position: 6250, duration: 1380 },
                { id: "eid91", tween: [ "style", "${_Text3}", "left", '549px', { fromValue: '549px'}], position: 7750, duration: 0 },
                { id: "eid52", tween: [ "style", "${_Text6}", "display", 'none', { fromValue: 'block'}], position: 7915, duration: 0 },
                { id: "eid25", tween: [ "style", "${_Digital-Signal2}", "left", '342px', { fromValue: '195px'}], position: 2500, duration: 1500 },
                { id: "eid33", tween: [ "style", "${_Digital-Signal}", "left", '483px', { fromValue: '342px'}], position: 4500, duration: 1500 },
                { id: "eid7", tween: [ "style", "${_Analog-signal2}", "left", '192px', { fromValue: '60px'}], position: 500, duration: 1500 },
                { id: "eid2", tween: [ "style", "${_Analog-signal2}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid3", tween: [ "style", "${_Analog-signal2}", "display", 'block', { fromValue: 'none'}], position: 500, duration: 0 },
                { id: "eid8", tween: [ "style", "${_Analog-signal2}", "display", 'none', { fromValue: 'block'}], position: 2000, duration: 0 },
                { id: "eid36", tween: [ "style", "${_Modulated-Signal}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid37", tween: [ "style", "${_Modulated-Signal}", "display", 'block', { fromValue: 'none'}], position: 6250, duration: 0 },
                { id: "eid83", tween: [ "style", "${_Modulated-Signal}", "display", 'none', { fromValue: 'block'}], position: 7630, duration: 0 },
                { id: "eid84", tween: [ "style", "${_c3}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid85", tween: [ "style", "${_c3}", "display", 'block', { fromValue: 'none'}], position: 7630, duration: 0 },
                { id: "eid11", tween: [ "style", "${_Digital-Signal2}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid21", tween: [ "style", "${_Digital-Signal2}", "display", 'block', { fromValue: 'none'}], position: 2500, duration: 0 },
                { id: "eid29", tween: [ "style", "${_Digital-Signal}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid30", tween: [ "style", "${_Digital-Signal}", "display", 'block', { fromValue: 'none'}], position: 4000, duration: 0 },
                { id: "eid34", tween: [ "style", "${_Digital-Signal}", "display", 'none', { fromValue: 'block'}], position: 6000, duration: 0 },
                { id: "eid18", tween: [ "style", "${_Text}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid19", tween: [ "style", "${_Text}", "display", 'block', { fromValue: 'none'}], position: 250, duration: 0 },
                { id: "eid20", tween: [ "style", "${_Text}", "display", 'none', { fromValue: 'block'}], position: 2000, duration: 0 },
                { id: "eid81", tween: [ "style", "${_c2}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid82", tween: [ "style", "${_c2}", "display", 'block', { fromValue: 'none'}], position: 7685, duration: 0 },
                { id: "eid49", tween: [ "style", "${_Text3}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid50", tween: [ "style", "${_Text3}", "display", 'block', { fromValue: 'none'}], position: 7685, duration: 0 },
                { id: "eid54", tween: [ "style", "${_Text3}", "display", 'none', { fromValue: 'block'}], position: 7820, duration: 0 }            ]
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
})(jQuery, AdobeEdge, "EDGE-1150748148");
