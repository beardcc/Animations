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
                id: 'binaryinput',
                display: 'block',
                type: 'image',
                rect: ['24px', '132px','18.9%','19.1%','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"binaryinput.png",'0%','0%','132px','105px']
            },
            {
                id: '_2bitconverter',
                display: 'block',
                type: 'image',
                rect: ['111px', '131px','132px','105px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"2bitconverter.png",'0px','0px']
            },
            {
                id: '_11',
                type: 'image',
                rect: ['216px', '173px','9.7%','0.7%','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"11.png",'0%','0%','68px','4px']
            },
            {
                id: '_12',
                type: 'image',
                rect: ['216px', '77px','9.7%','17.5%','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"12.png",'0%','0%','68px','96px'],
                transform: [[],['180']]
            },
            {
                id: '_13',
                type: 'image',
                rect: ['275px', '36px','23.9%','8.2%','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"13.png",'0%','0%','167px','45px']
            },
            {
                id: 'arw1',
                display: 'block',
                type: 'image',
                rect: ['472px', '68px','14.7%','19.1%','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"arw1.png",'0%','0%','103px','105px']
            },
            {
                id: 'Text',
                display: 'block',
                type: 'text',
                rect: ['237px', '389px','285px','29px','auto', 'auto'],
                text: "Odd-numbered bits take the upper path.",
                font: ['Times New Roman, Times, serif', [94, "%"], "rgba(0,0,0,1)", "700", "none", ""]
            },
            {
                id: 'carrieroscilator',
                display: 'block',
                type: 'image',
                rect: ['380px', '89px','150px','116px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"carrieroscilator.png",'0px','0px']
            },
            {
                id: 'lwrprt',
                display: 'block',
                type: 'image',
                rect: ['214px', '174px','32.7%','33.5%','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"lwrprt.png",'0%','0%','229px','184px']
            },
            {
                id: 'lwrx',
                display: 'block',
                type: 'image',
                rect: ['392px', '149px','296px','171px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"lwrx.png",'0px','0px']
            },
            {
                id: 'spcsym',
                display: 'block',
                type: 'image',
                rect: ['427px', '53px','57px','45px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"spcsym.png",'0px','0px']
            },
            {
                id: 'Text2',
                display: 'block',
                type: 'text',
                rect: ['223px', '409px','271px','45px','auto', 'auto'],
                text: "Even-numbered bits take the lower path.",
                align: "left",
                font: ['\'Times New Roman\', Times, serif', [94, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: 'arww',
                display: 'block',
                type: 'image',
                rect: ['472px', '235px','13.9%','27.6%','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"arww.png",'0%','0%','97px','152px'],
                transform: [[],['180']]
            },
            {
                id: 'comment1',
                display: 'block',
                type: 'image',
                rect: ['427px', '371px','266px','47px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"comment1.png",'0px','0px']
            },
            {
                id: 'Text3',
                type: 'text',
                rect: ['175px', '484px','368px','29px','auto', 'auto'],
                text: "Figure 7.7 QPSK and OQPSK Modulators",
                align: "center",
                font: ['\'Times New Roman\', Times, serif', [119, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: 'Text4',
                display: 'block',
                type: 'text',
                rect: ['186px', '454px','383px','29px','auto', 'auto'],
                text: "Click or Touch on Figure for Each Step of the Animation",
                align: "center",
                font: ['\'Times New Roman\', Times, serif', [94, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
            }],
            symbolInstances: [

            ]
        },
    states: {
        "Base State": {
            "${_lwrprt}": [
                ["style", "display", 'block'],
                ["style", "top", '174px'],
                ["style", "left", '214px'],
                ["style", "width", '0%']
            ],
            "${_Text3}": [
                ["style", "top", '484px'],
                ["style", "font-size", '119%'],
                ["style", "left", '175px'],
                ["style", "width", '368px']
            ],
            "${_Text2}": [
                ["style", "display", 'block'],
                ["style", "top", '369px'],
                ["style", "left", '223px'],
                ["style", "width", '271px']
            ],
            "${_arww}": [
                ["style", "top", '387px'],
                ["transform", "rotateZ", '0deg'],
                ["style", "display", 'block'],
                ["style", "left", '472px'],
                ["style", "height", '0%']
            ],
            "${__11}": [
                ["style", "top", '173px'],
                ["style", "left", '216px'],
                ["style", "width", '0%']
            ],
            "${_binaryinput}": [
                ["style", "display", 'block'],
                ["style", "top", '132px'],
                ["style", "left", '24px'],
                ["style", "width", '0%']
            ],
            "${_Text4}": [
                ["style", "top", '464px'],
                ["style", "display", 'block'],
                ["style", "font-size", '94%'],
                ["style", "left", '167px'],
                ["style", "width", '383px']
            ],
            "${_lwrx}": [
                ["style", "top", '149px'],
                ["style", "left", '392px'],
                ["style", "display", 'block']
            ],
            "${__13}": [
                ["style", "top", '36px'],
                ["style", "left", '275px'],
                ["style", "width", '0%']
            ],
            "${_arw1}": [
                ["style", "display", 'block'],
                ["style", "top", '68px'],
                ["style", "left", '472px'],
                ["style", "width", '0%']
            ],
            "${__12}": [
                ["style", "height", '0%'],
                ["style", "top", '173px'],
                ["style", "left", '216px'],
                ["transform", "rotateZ", '0deg']
            ],
            "${_Text}": [
                ["style", "top", '328px'],
                ["style", "font-size", '94%'],
                ["style", "height", '29px'],
                ["style", "font-weight", '700'],
                ["style", "display", 'block'],
                ["style", "font-family", 'Times New Roman, Times, serif'],
                ["style", "left", '237px'],
                ["style", "width", '285px']
            ],
            "${__2bitconverter}": [
                ["style", "top", '131px'],
                ["style", "left", '111px'],
                ["style", "display", 'block']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(255,255,255,1)'],
                ["style", "overflow", 'hidden'],
                ["style", "height", '550px'],
                ["style", "width", '700px']
            ],
            "${_comment1}": [
                ["style", "top", '371px'],
                ["style", "left", '427px'],
                ["style", "display", 'block']
            ],
            "${_spcsym}": [
                ["style", "top", '53px'],
                ["style", "left", '427px'],
                ["style", "display", 'block']
            ],
            "${_carrieroscilator}": [
                ["style", "top", '89px'],
                ["style", "left", '380px'],
                ["style", "display", 'block']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 10500,
            autoPlay: true,
            timeline: [
                { id: "eid8", tween: [ "style", "${__11}", "width", '9.72%', { fromValue: '0%'}], position: 1250, duration: 1000 },
                { id: "eid35", tween: [ "style", "${_lwrx}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid36", tween: [ "style", "${_lwrx}", "display", 'block', { fromValue: 'none'}], position: 7750, duration: 0 },
                { id: "eid29", tween: [ "style", "${_Text2}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid30", tween: [ "style", "${_Text2}", "display", 'block', { fromValue: 'none'}], position: 6000, duration: 0 },
                { id: "eid37", tween: [ "style", "${_Text2}", "display", 'none', { fromValue: 'block'}], position: 8000, duration: 0 },
                { id: "eid14", tween: [ "style", "${__12}", "top", '77px', { fromValue: '173px'}], position: 2250, duration: 1000 },
                { id: "eid58", tween: [ "style", "${_Text2}", "top", '369px', { fromValue: '369px'}], position: 7090, duration: 0 },
                { id: "eid17", tween: [ "style", "${__13}", "width", '23.86%', { fromValue: '0%'}], position: 3250, duration: 1000 },
                { id: "eid31", tween: [ "style", "${_lwrprt}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid32", tween: [ "style", "${_lwrprt}", "display", 'block', { fromValue: 'none'}], position: 6250, duration: 0 },
                { id: "eid43", tween: [ "style", "${_arww}", "height", '27.64%', { fromValue: '0%'}], position: 8500, duration: 1500 },
                { id: "eid20", tween: [ "style", "${_carrieroscilator}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid21", tween: [ "style", "${_carrieroscilator}", "display", 'block', { fromValue: 'none'}], position: 4500, duration: 0 },
                { id: "eid22", tween: [ "style", "${_arw1}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid23", tween: [ "style", "${_arw1}", "display", 'block', { fromValue: 'none'}], position: 4500, duration: 0 },
                { id: "eid57", tween: [ "style", "${_Text}", "top", '328px', { fromValue: '328px'}], position: 5555, duration: 0 },
                { id: "eid45", tween: [ "style", "${_arww}", "top", '235px', { fromValue: '387px'}], position: 8500, duration: 1500 },
                { id: "eid49", tween: [ "style", "${_Text4}", "display", 'none', { fromValue: 'block'}], position: 10500, duration: 0 },
                { id: "eid46", tween: [ "transform", "${_arww}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 8500, duration: 0 },
                { id: "eid25", tween: [ "style", "${_arw1}", "width", '14.72%', { fromValue: '0%'}], position: 4500, duration: 1000 },
                { id: "eid12", tween: [ "style", "${__12}", "height", '17.45%', { fromValue: '0%'}], position: 2250, duration: 1000 },
                { id: "eid4", tween: [ "style", "${_binaryinput}", "width", '18.86%', { fromValue: '0%'}], position: 250, duration: 1000 },
                { id: "eid40", tween: [ "style", "${_arww}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid41", tween: [ "style", "${_arww}", "display", 'block', { fromValue: 'none'}], position: 8500, duration: 0 },
                { id: "eid47", tween: [ "style", "${_arww}", "display", 'none', { fromValue: 'block'}], position: 10250, duration: 0 },
                { id: "eid34", tween: [ "style", "${_lwrprt}", "width", '32.72%', { fromValue: '0%'}], position: 6250, duration: 1500 },
                { id: "eid1", tween: [ "style", "${_binaryinput}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid2", tween: [ "style", "${_binaryinput}", "display", 'block', { fromValue: 'none'}], position: 250, duration: 0 },
                { id: "eid18", tween: [ "style", "${_spcsym}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid19", tween: [ "style", "${_spcsym}", "display", 'block', { fromValue: 'none'}], position: 4250, duration: 0 },
                { id: "eid60", tween: [ "style", "${_Text4}", "top", '464px', { fromValue: '464px'}], position: 0, duration: 0 },
                { id: "eid38", tween: [ "style", "${_comment1}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid39", tween: [ "style", "${_comment1}", "display", 'block', { fromValue: 'none'}], position: 8250, duration: 0 },
                { id: "eid48", tween: [ "style", "${_comment1}", "display", 'none', { fromValue: 'block'}], position: 10250, duration: 0 },
                { id: "eid15", tween: [ "transform", "${__12}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 2250, duration: 0 },
                { id: "eid26", tween: [ "style", "${_Text}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid27", tween: [ "style", "${_Text}", "display", 'block', { fromValue: 'none'}], position: 5500, duration: 0 },
                { id: "eid28", tween: [ "style", "${_Text}", "display", 'none', { fromValue: 'block'}], position: 5750, duration: 0 },
                { id: "eid5", tween: [ "style", "${__2bitconverter}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid6", tween: [ "style", "${__2bitconverter}", "display", 'block', { fromValue: 'none'}], position: 1250, duration: 0 },
                { id: "eid59", tween: [ "style", "${_Text4}", "left", '167px', { fromValue: '167px'}], position: 0, duration: 0 }            ]
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
})(jQuery, AdobeEdge, "EDGE-1118751277");
