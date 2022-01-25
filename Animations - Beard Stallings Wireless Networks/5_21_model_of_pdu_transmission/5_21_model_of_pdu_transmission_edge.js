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
                id: 'a',
                display: 'block',
                type: 'image',
                rect: ['3px', '9px','245px','489px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"a.png",'0px','0px']
            },
            {
                id: '_1',
                display: 'block',
                type: 'image',
                rect: ['15px', '56px','34.5%','14.3%','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"1.png",'0%','0%','224px','86px']
            },
            {
                id: 'Text4',
                display: 'block',
                type: 'text',
                rect: ['239px', '99px','194px','53px','auto', 'auto'],
                text: "PDU 1 is sent and is received successfully at a later time.",
                align: "left",
                font: ['\'Times New Roman\', Times, serif', [94, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: '_2',
                display: 'block',
                type: 'image',
                rect: ['15px', '133px','34.5%','45.5%','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"2.png",'0%','0%','224px','273px']
            },
            {
                id: 'Text6',
                display: 'block',
                type: 'text',
                rect: ['255px', '389px','172px','68px','auto', 'auto'],
                text: "All frames are received successfully.",
                align: "left",
                font: ['\'Times New Roman\', Times, serif', [94, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: 'b',
                display: 'block',
                type: 'image',
                rect: ['315px', '10px','228px','497px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"b.png",'0px','0px']
            },
            {
                id: 'Text7',
                display: 'block',
                type: 'text',
                rect: ['498px', '142px','141px','68px','auto', 'auto'],
                text: "This frame never arrives and is lost.",
                align: "left",
                font: ['\'Times New Roman\', Times, serif', [94, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: 'arrow',
                display: 'block',
                type: 'image',
                rect: ['474px', '149px','9px','40px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"arrow.png",'0px','0px'],
                transform: [[],['-123']]
            },
            {
                id: 'Text8',
                display: 'block',
                type: 'text',
                rect: ['486px', '307px','159px','65px','auto', 'auto'],
                text: "This frame gets corrupted by noise, interference, fading, etc.",
                align: "left",
                font: ['\'Times New Roman\', Times, serif', [94, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: 'time',
                display: 'block',
                type: 'image',
                rect: ['249px', '169px','6.6%','15.3%','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"time.png",'0%','0%','43px','92px']
            },
            {
                id: 'Text5',
                display: 'block',
                type: 'text',
                rect: ['249px', '261px','200px','48px','auto', 'auto'],
                text: "Time progresses downward.",
                align: "left",
                font: ['\'Times New Roman\', Times, serif', [94, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: 'Text2',
                display: 'block',
                type: 'text',
                rect: ['127px', '529px','404px','30px','auto', 'auto'],
                text: "Click or Touch on the Figure for Each Step of the Animation",
                align: "left",
                font: ['Times New Roman, Times, serif', [94, "%"], "rgba(0,0,0,1)", "700", "none", "normal"]
            },
            {
                id: 'Text3',
                type: 'text',
                rect: ['143px', '555px','355px','26px','auto', 'auto'],
                text: "Figure 5.21  Model of PDU Transmission",
                align: "left",
                font: ['\'Times New Roman\', Times, serif', [119, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: 'white',
                display: 'block',
                type: 'image',
                rect: ['387px', '206px','84px','86px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"white.png",'0px','0px']
            },
            {
                id: 'x',
                display: 'block',
                type: 'image',
                rect: ['389px', '217px','84px','86px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"x.png",'0px','0px']
            },
            {
                id: 'arrow2',
                display: 'block',
                type: 'image',
                rect: ['449px', '267px','14px','65px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"arrow.png",'0px','0px'],
                transform: [[],['-43']]
            }],
            symbolInstances: [

            ]
        },
    states: {
        "Base State": {
            "${_b}": [
                ["style", "top", '10px'],
                ["style", "height", '497px'],
                ["style", "display", 'block'],
                ["style", "left", '315px'],
                ["style", "width", '228px']
            ],
            "${_Text7}": [
                ["style", "display", 'block']
            ],
            "${_time}": [
                ["style", "height", '0%'],
                ["style", "display", 'block'],
                ["style", "left", '249px'],
                ["style", "top", '169px']
            ],
            "${_Text3}": [
                ["style", "top", '555px'],
                ["style", "height", '26px'],
                ["style", "font-size", '119%'],
                ["style", "left", '143px'],
                ["style", "width", '355px']
            ],
            "${_Text5}": [
                ["style", "top", '261px'],
                ["style", "left", '249px'],
                ["style", "display", 'block']
            ],
            "${_x}": [
                ["style", "top", '217px'],
                ["style", "left", '389px'],
                ["style", "display", 'block']
            ],
            "${_arrow2}": [
                ["style", "top", '267px'],
                ["transform", "rotateZ", '-43deg'],
                ["style", "height", '65px'],
                ["style", "display", 'block'],
                ["style", "left", '449px'],
                ["style", "width", '14px']
            ],
            "${_Text4}": [
                ["style", "top", '99px'],
                ["style", "display", 'block'],
                ["style", "width", '194px'],
                ["style", "left", '239px'],
                ["style", "font-size", '94%']
            ],
            "${_a}": [
                ["style", "top", '9px'],
                ["style", "left", '3px'],
                ["style", "display", 'block']
            ],
            "${_Text6}": [
                ["style", "display", 'block'],
                ["style", "width", '172px']
            ],
            "${__1}": [
                ["style", "top", '56px'],
                ["style", "display", 'block'],
                ["style", "left", '15px'],
                ["style", "width", '0%']
            ],
            "${__2}": [
                ["style", "top", '133px'],
                ["style", "display", 'block'],
                ["style", "left", '15px'],
                ["style", "width", '0%']
            ],
            "${_Text8}": [
                ["style", "top", '307px'],
                ["style", "display", 'block'],
                ["style", "left", '490px'],
                ["style", "width", '159px']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(255,255,255,1)'],
                ["style", "width", '650px'],
                ["style", "height", '600px'],
                ["style", "overflow", 'visible']
            ],
            "${_arrow}": [
                ["style", "top", '149px'],
                ["transform", "rotateZ", '-123deg'],
                ["style", "height", '40px'],
                ["style", "display", 'block'],
                ["style", "left", '474px'],
                ["style", "width", '9px']
            ],
            "${_Text2}": [
                ["style", "top", '532px'],
                ["style", "width", '456px'],
                ["style", "font-weight", '700'],
                ["style", "display", 'block'],
                ["style", "font-family", 'Times New Roman, Times, serif'],
                ["style", "left", '108px'],
                ["style", "font-size", '94%']
            ],
            "${_white}": [
                ["style", "top", '206px'],
                ["style", "left", '387px'],
                ["style", "display", 'block']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 7625,
            autoPlay: true,
            timeline: [
                { id: "eid26", tween: [ "style", "${_arrow}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid28", tween: [ "style", "${_arrow}", "display", 'block', { fromValue: 'none'}], position: 6105, duration: 0 },
                { id: "eid30", tween: [ "style", "${_arrow}", "display", 'none', { fromValue: 'block'}], position: 6500, duration: 0 },
                { id: "eid38", tween: [ "style", "${_Text2}", "display", 'none', { fromValue: 'block'}], position: 7625, duration: 0 },
                { id: "eid24", tween: [ "style", "${_b}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid25", tween: [ "style", "${_b}", "display", 'block', { fromValue: 'none'}], position: 5750, duration: 0 },
                { id: "eid18", tween: [ "style", "${__2}", "width", '34.47%', { fromValue: '0%'}], position: 4160, duration: 1000 },
                { id: "eid48", tween: [ "style", "${_Text2}", "top", '532px', { fromValue: '532px'}], position: 5750, duration: 0 },
                { id: "eid19", tween: [ "style", "${__2}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid20", tween: [ "style", "${__2}", "display", 'block', { fromValue: 'none'}], position: 4160, duration: 0 },
                { id: "eid21", tween: [ "style", "${_Text6}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid22", tween: [ "style", "${_Text6}", "display", 'block', { fromValue: 'none'}], position: 5250, duration: 0 },
                { id: "eid23", tween: [ "style", "${_Text6}", "display", 'none', { fromValue: 'block'}], position: 5500, duration: 0 },
                { id: "eid13", tween: [ "style", "${_time}", "height", '15.33%', { fromValue: '0%'}], position: 2500, duration: 1000 },
                { id: "eid46", tween: [ "style", "${_Text2}", "width", '456px', { fromValue: '456px'}], position: 5750, duration: 0 },
                { id: "eid52", tween: [ "style", "${_Text8}", "left", '490px', { fromValue: '490px'}], position: 6908, duration: 0 },
                { id: "eid1", tween: [ "style", "${_a}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid2", tween: [ "style", "${_a}", "display", 'block', { fromValue: 'none'}], position: 250, duration: 0 },
                { id: "eid6", tween: [ "style", "${__1}", "width", '34.47%', { fromValue: '0%'}], position: 460, duration: 1500 },
                { id: "eid10", tween: [ "style", "${_time}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid11", tween: [ "style", "${_time}", "display", 'block', { fromValue: 'none'}], position: 2500, duration: 0 },
                { id: "eid40", tween: [ "style", "${_white}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid42", tween: [ "style", "${_white}", "display", 'block', { fromValue: 'none'}], position: 5750, duration: 0 },
                { id: "eid14", tween: [ "style", "${_Text5}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid15", tween: [ "style", "${_Text5}", "display", 'block', { fromValue: 'none'}], position: 3565, duration: 0 },
                { id: "eid16", tween: [ "style", "${_Text5}", "display", 'none', { fromValue: 'block'}], position: 3935, duration: 0 },
                { id: "eid27", tween: [ "style", "${_Text7}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid29", tween: [ "style", "${_Text7}", "display", 'block', { fromValue: 'none'}], position: 6000, duration: 0 },
                { id: "eid31", tween: [ "style", "${_Text7}", "display", 'none', { fromValue: 'block'}], position: 6500, duration: 0 },
                { id: "eid47", tween: [ "style", "${_Text2}", "left", '108px', { fromValue: '108px'}], position: 5750, duration: 0 },
                { id: "eid7", tween: [ "style", "${_Text4}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid8", tween: [ "style", "${_Text4}", "display", 'block', { fromValue: 'none'}], position: 2000, duration: 0 },
                { id: "eid9", tween: [ "style", "${_Text4}", "display", 'none', { fromValue: 'block'}], position: 2250, duration: 0 },
                { id: "eid3", tween: [ "style", "${__1}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid4", tween: [ "style", "${__1}", "display", 'block', { fromValue: 'none'}], position: 460, duration: 0 },
                { id: "eid39", tween: [ "style", "${_x}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid41", tween: [ "style", "${_x}", "display", 'block', { fromValue: 'none'}], position: 5750, duration: 0 },
                { id: "eid33", tween: [ "style", "${_Text8}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid35", tween: [ "style", "${_Text8}", "display", 'block', { fromValue: 'none'}], position: 6750, duration: 0 },
                { id: "eid37", tween: [ "style", "${_Text8}", "display", 'none', { fromValue: 'block'}], position: 7395, duration: 0 },
                { id: "eid32", tween: [ "style", "${_arrow2}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid34", tween: [ "style", "${_arrow2}", "display", 'block', { fromValue: 'none'}], position: 6845, duration: 0 },
                { id: "eid36", tween: [ "style", "${_arrow2}", "display", 'none', { fromValue: 'block'}], position: 7395, duration: 0 }            ]
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
})(jQuery, AdobeEdge, "EDGE-53835308");
