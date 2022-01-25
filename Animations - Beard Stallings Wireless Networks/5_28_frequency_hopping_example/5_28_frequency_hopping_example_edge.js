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
                id: 'oval',
                display: 'block',
                type: 'image',
                rect: ['52px', '98px','194px','38px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"oval.png",'0px','0px']
            },
            {
                id: 'Text',
                type: 'text',
                rect: ['172px', '399px','auto','auto','auto', 'auto'],
                text: "Figure 5.28  Frequency Hopping Example",
                font: ['Times New Roman, Times, serif', [119, "%"], "rgba(0,0,0,1)", "700", "none", ""]
            },
            {
                id: 'Text2',
                display: 'block',
                type: 'text',
                rect: ['161px', '372px','auto','auto','auto', 'auto'],
                text: "Click or Touch on Figure for Each Step  of Animation",
                align: "left",
                font: ['\'Times New Roman\', Times, serif', [94, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: 'part-a',
                display: 'block',
                type: 'image',
                rect: ['5px', '79px','311px','249px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"part-a.png",'0px','0px']
            },
            {
                id: 'Text3',
                display: 'block',
                type: 'text',
                rect: ['68px', '56px','234px','auto','auto', 'auto'],
                text: "These are eight example frequencies that could be used.",
                align: "left",
                font: ['\'Times New Roman\', Times, serif', [94, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: 'comment-3',
                display: 'block',
                type: 'image',
                rect: ['416px', '135px','226px','26px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"comment-3.png",'0px','0px']
            },
            {
                id: 'f3',
                display: 'block',
                type: 'image',
                rect: ['439px', '170px','46px','39px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"f3.png",'0px','0px']
            },
            {
                id: 'comment-5',
                display: 'block',
                type: 'image',
                rect: ['439px', '155px','53px','26px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"comment-5.png",'0px','0px']
            },
            {
                id: 'f8',
                display: 'block',
                type: 'image',
                rect: ['204px', '159px','46px','39px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"f8.png",'0px','0px']
            },
            {
                id: 'comment-4',
                display: 'block',
                type: 'image',
                rect: ['412px', '47px','53px','26px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"comment-4.png",'0px','0px']
            },
            {
                id: 'comment-2',
                  display: 'block',
                  type: 'text',
                  rect: ['50px', '53px','auto','auto','auto', 'auto'],
                  text: "This is the order of frequency hopping: <i>f<sub>5</sub></i> first, then <i>f<sub>8</sub></i>, etc.",
                  align: "left",
                  font: ['\'Times New Roman\', Times, serif', [94, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: 'part-b-axis',
                display: 'block',
                type: 'image',
                rect: ['359px', '18px','283px','311px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"part-b-axis.png",'0px','0px']
            },
            {
                id: 'f6',
                display: 'block',
                type: 'image',
                rect: ['159px', '146px','46px','39px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"f6.png",'0px','0px']
            },
            {
                id: 'f1',
                display: 'block',
                type: 'image',
                rect: ['496px', '213px','46px','39px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"f1.png",'0px','0px']
            },
            {
                id: 'f4',
                display: 'block',
                type: 'image',
                rect: ['553px', '105px','46px','39px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"f4.png",'0px','0px']
            },
            {
                id: 'f2',
                display: 'block',
                type: 'image',
                rect: ['583px', '191px','46px','39px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"f2.png",'0px','0px']
            },
            {
                id: 'Text6',
                display: 'block',
                type: 'text',
                rect: ['480px', '44px','193px','auto','auto', 'auto'],
                text: "Then all the rest of the frequencies, then repeat.",
                align: "left",
                font: ['\'Times New Roman\', Times, serif', [94, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: 'f7',
                display: 'block',
                type: 'image',
                rect: ['526px', '148px','46px','39px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"f7.png",'0px','0px']
            },
            {
                id: 'f5',
                display: 'block',
                type: 'image',
                rect: ['142px', '130px','43px','37px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"f5.png",'0px','0px']
            }],
            symbolInstances: [

            ]
        },
    states: {
        "Base State": {
            "${_f8}": [
                ["style", "top", '159px'],
                ["style", "left", '204px'],
                ["style", "display", 'block']
            ],
            "${_f2}": [
                ["style", "top", '191px'],
                ["style", "left", '72px'],
                ["style", "display", 'block']
            ],
            "${_Text3}": [
                ["style", "top", '56px'],
                ["style", "display", 'block'],
                ["style", "left", '68px'],
                ["style", "width", '234px']
            ],
            "${_comment-4}": [
                ["style", "top", '47px'],
                ["style", "left", '412px'],
                ["style", "display", 'block']
            ],
            "${_Text2}": [
                ["style", "top", '372px'],
                ["style", "display", 'block'],
                ["style", "left", '161px'],
                ["style", "font-size", '94%']
            ],
            "${_comment-2}": [
                ["style", "top", '53px'],
                ["style", "left", '30px'],
                ["style", "display", 'block']
            ],
            "${_f1}": [
                ["style", "top", '213px'],
                ["style", "left", '50px'],
                ["style", "display", 'block']
            ],
            "${_part-b-axis}": [
                ["style", "top", '18px'],
                ["style", "left", '359px'],
                ["style", "display", 'block']
            ],
            "${_f3}": [
                ["style", "top", '170px'],
                ["style", "left", '94px'],
                ["style", "display", 'block']
            ],
            "${_f7}": [
                ["style", "top", '148px'],
                ["style", "left", '181px'],
                ["style", "display", 'block']
            ],
            "${_comment-3}": [
                ["style", "top", '135px'],
                ["style", "left", '416px'],
                ["style", "display", 'block']
            ],
            "${_f4}": [
                ["style", "top", '136px'],
                ["style", "left", '115px'],
                ["style", "display", 'block']
            ],
            "${_Text6}": [
                ["style", "top", '44px'],
                ["style", "display", 'block'],
                ["style", "left", '480px'],
                ["style", "width", '193px']
            ],
            "${_f6}": [
                ["style", "top", '146px'],
                ["style", "left", '159px'],
                ["style", "display", 'block']
            ],
            "${_Text}": [
                ["style", "top", '399px'],
                ["style", "font-weight", '700'],
                ["style", "font-family", 'Times New Roman, Times, serif'],
                ["style", "left", '172px'],
                ["style", "font-size", '119%']
            ],
            "${_comment-5}": [
                ["style", "top", '155px'],
                ["style", "left", '439px'],
                ["style", "display", 'block']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(255,255,255,1)'],
                ["style", "width", '670px'],
                ["style", "height", '430px'],
                ["style", "overflow", 'hidden']
            ],
            "${_f5}": [
                ["style", "top", '130px'],
                ["style", "left", '142px'],
                ["style", "display", 'block']
            ],
            "${_part-a}": [
                ["style", "top", '79px'],
                ["style", "left", '5px'],
                ["style", "display", 'block']
            ],
            "${_oval}": [
                ["style", "top", '98px'],
                ["style", "left", '52px'],
                ["style", "display", 'block']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 13930,
            autoPlay: true,
            timeline: [
                { id: "eid54", tween: [ "style", "${_f1}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid55", tween: [ "style", "${_f1}", "display", 'block', { fromValue: 'none'}], position: 7801, duration: 0 },
                { id: "eid41", tween: [ "style", "${_f3}", "left", '439px', { fromValue: '94px'}], position: 4675, duration: 1000 },
                { id: "eid99", tween: [ "style", "${_Text2}", "display", 'none', { fromValue: 'block'}], position: 13930, duration: 0 },
                { id: "eid36", tween: [ "style", "${_f3}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid37", tween: [ "style", "${_f3}", "display", 'block', { fromValue: 'none'}], position: 4675, duration: 0 },
                { id: "eid18", tween: [ "style", "${_f5}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid19", tween: [ "style", "${_f5}", "display", 'block', { fromValue: 'none'}], position: 1320, duration: 0 },
                { id: "eid96", tween: [ "style", "${_Text6}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid97", tween: [ "style", "${_Text6}", "display", 'block', { fromValue: 'none'}], position: 13750, duration: 0 },
                { id: "eid98", tween: [ "style", "${_Text6}", "display", 'none', { fromValue: 'block'}], position: 13930, duration: 0 },
                { id: "eid46", tween: [ "style", "${_f6}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid47", tween: [ "style", "${_f6}", "display", 'block', { fromValue: 'none'}], position: 6291, duration: 0 },
                { id: "eid32", tween: [ "style", "${_f8}", "left", '410px', { fromValue: '204px'}], position: 3554, duration: 700 },
                { id: "eid93", tween: [ "style", "${_f2}", "left", '583px', { fromValue: '72px'}], position: 12000, duration: 1500 },
                { id: "eid5", tween: [ "style", "${_oval}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid6", tween: [ "style", "${_oval}", "display", 'block', { fromValue: 'none'}], position: 635, duration: 0 },
                { id: "eid13", tween: [ "style", "${_oval}", "display", 'none', { fromValue: 'block'}], position: 1085, duration: 0 },
                { id: "eid8", tween: [ "style", "${_comment-2}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid9", tween: [ "style", "${_comment-2}", "display", 'block', { fromValue: 'none'}], position: 895, duration: 0 },
                { id: "eid12", tween: [ "style", "${_comment-2}", "display", 'none', { fromValue: 'block'}], position: 1085, duration: 0 },
                { id: "eid50", tween: [ "style", "${_f6}", "top", '83px', { fromValue: '146px'}], position: 6291, duration: 500 },
                { id: "eid53", tween: [ "style", "${_f6}", "left", '467px', { fromValue: '159px'}], position: 6860, duration: 800 },
                { id: "eid23", tween: [ "style", "${_comment-3}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid24", tween: [ "style", "${_comment-3}", "display", 'block', { fromValue: 'none'}], position: 2595, duration: 0 },
                { id: "eid35", tween: [ "style", "${_comment-3}", "display", 'none', { fromValue: 'block'}], position: 2790, duration: 0 },
                { id: "eid3", tween: [ "style", "${_Text3}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid4", tween: [ "style", "${_Text3}", "display", 'block', { fromValue: 'none'}], position: 460, duration: 0 },
                { id: "eid7", tween: [ "style", "${_Text3}", "display", 'none', { fromValue: 'block'}], position: 635, duration: 0 },
                { id: "eid60", tween: [ "style", "${_f1}", "left", '496px', { fromValue: '50px'}], position: 7801, duration: 1500 },
                { id: "eid25", tween: [ "style", "${_f8}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid26", tween: [ "style", "${_f8}", "display", 'block', { fromValue: 'none'}], position: 2790, duration: 0 },
                { id: "eid42", tween: [ "style", "${_comment-5}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid43", tween: [ "style", "${_comment-5}", "display", 'block', { fromValue: 'none'}], position: 5948, duration: 0 },
                { id: "eid45", tween: [ "style", "${_comment-5}", "display", 'none', { fromValue: 'block'}], position: 6133, duration: 0 },
                { id: "eid86", tween: [ "style", "${_f4}", "left", '554px', { fromValue: '115px'}], position: 10883, duration: 1000 },
                { id: "eid69", tween: [ "style", "${_f4}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid70", tween: [ "style", "${_f4}", "display", 'block', { fromValue: 'none'}], position: 10412, duration: 0 },
                { id: "eid68", tween: [ "style", "${_f7}", "left", '526px', { fromValue: '181px'}], position: 9461, duration: 800 },
                { id: "eid10", tween: [ "style", "${_part-b-axis}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid11", tween: [ "style", "${_part-b-axis}", "display", 'block', { fromValue: 'none'}], position: 1085, duration: 0 },
                { id: "eid61", tween: [ "style", "${_f7}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid62", tween: [ "style", "${_f7}", "display", 'block', { fromValue: 'none'}], position: 9461, duration: 0 },
                { id: "eid83", tween: [ "style", "${_f4}", "top", '105px', { fromValue: '136px'}], position: 10412, duration: 400 },
                { id: "eid29", tween: [ "style", "${_f8}", "top", '62px', { fromValue: '159px'}], position: 2790, duration: 700 },
                { id: "eid22", tween: [ "style", "${_f5}", "left", '387px', { fromValue: '142px'}], position: 1320, duration: 1000 },
                { id: "eid1", tween: [ "style", "${_part-a}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid2", tween: [ "style", "${_part-a}", "display", 'block', { fromValue: 'none'}], position: 170, duration: 0 },
                { id: "eid33", tween: [ "style", "${_comment-4}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid34", tween: [ "style", "${_comment-4}", "display", 'block', { fromValue: 'none'}], position: 4500, duration: 0 },
                { id: "eid44", tween: [ "style", "${_comment-4}", "display", 'none', { fromValue: 'block'}], position: 4675, duration: 0 },
                { id: "eid87", tween: [ "style", "${_f2}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid88", tween: [ "style", "${_f2}", "display", 'block', { fromValue: 'none'}], position: 12000, duration: 0 }            ]
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
})(jQuery, AdobeEdge, "EDGE-1049604042");
