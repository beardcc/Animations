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
                id: 'bg',
                type: 'image',
                rect: ['12px', '17px','612px','518px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"bg.png",'0px','0px']
            },
            {
                id: 'comment5',
                display: 'block',
                type: 'image',
                rect: ['329px', '0px','297px','36px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"comment5.png",'0px','0px']
            },
            {
                id: 'arrow22',
                display: 'block',
                type: 'image',
                rect: ['443px', '293px','10px','242px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"arrow2.png",'0px','0px']
            },
            {
                id: 'blueline',
                type: 'image',
                rect: ['17px', '42px','81.9%','61.7%','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"blueline.png",'0%','0%','532px','432px']
            },
            {
                id: 'redline23',
                type: 'image',
                rect: ['79px', '56px','79.5%','59.7%','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"redline23.png",'0%','0%','517px','418px']
            },
            {
                id: 'withoutcoding',
                display: 'block',
                type: 'image',
                rect: ['444px', '106px','74px','115px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"withoutcoding.png",'0px','0px']
            },
            {
                id: 'comment2',
                display: 'block',
                type: 'image',
                rect: ['193px', '541px','403px','36px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"comment2.png",'0px','0px']
            },
            {
                id: 'arrow2',
                display: 'block',
                type: 'image',
                rect: ['569px', '466px','10px','90px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"arrow.png",'0px','0px'],
                transform: [[],['12']]
            },
            {
                id: 'dsarrowsw',
                display: 'block',
                type: 'image',
                rect: ['485px', '462px','100px','10px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"dsarrowsw.png",'0px','0px']
            },
            {
                id: 'Rate12coding',
                display: 'block',
                type: 'image',
                rect: ['442px', '176px','139px','143px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"Rate12coding.png",'0px','0px']
            },
            {
                id: 'comment1',
                display: 'block',
                type: 'image',
                rect: ['267px', '528px','314px','36px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"comment1.png",'0px','0px']
            },
            {
                id: 'arrow',
                display: 'block',
                type: 'image',
                rect: ['468px', '482px','10px','60px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"arrow.png",'0px','0px'],
                transform: [[],['16']]
            },
            {
                id: 'comment3',
                display: 'block',
                type: 'image',
                rect: ['253px', '529px','403px','36px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"comment3.png",'0px','0px']
            },
            {
                id: 'arrow3',
                display: 'block',
                type: 'image',
                rect: ['530px', '467px','10px','73px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"arrow.png",'0px','0px']
            },
            {
                id: 'dot',
                display: 'block',
                type: 'image',
                rect: ['446px', '287px','4px','7px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"dot.png",'0px','0px']
            },
            {
                id: 'comment4',
                  display: 'block',
                  type: 'text',
                  rect: ['350px', '400px','auto','auto','auto', 'auto'],
                  text: "At 10.0 dB, 1/2 rate coding achieves an error rate of 2 x 10<sup>-4</sup>.",
                  font: ['Times New Roman, Times, serif', [85, "%"], "rgba(0,0,0,1)", "700", "none", ""]
            },
            {
                id: 'arrow24',
                display: 'block',
                type: 'image',
                rect: ['444px', '25px','10px','181px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"arrow2.png",'0px','0px'],
                transform: [[],['180']]
            },
            {
                id: 'Text',
                display: 'block',
                type: 'text',
                rect: ['132px', '584px','389px','35px','auto', 'auto'],
                text: "Click or Touch on Figure for Each Step of the Animation",
                font: ['Times New Roman, Times, serif', [94, "%"], "rgba(0,0,0,1)", "700", "none", ""]
            },
            {
                id: 'Text2',
                type: 'text',
                rect: ['109px', '607px','465px','43px','auto', 'auto'],
                text: "Figure 5.16 How Coding improves System Performance",
                align: "left",
                font: ['\'Times New Roman\', Times, serif', [119, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
            }],
            symbolInstances: [

            ]
        },
    states: {
        "Base State": {
            "${_arrow22}": [
                ["style", "top", '293px'],
                ["style", "display", 'block'],
                ["style", "left", '443px'],
                ["style", "height", '242px']
            ],
            "${_Rate12coding}": [
                ["style", "top", '176px'],
                ["style", "left", '442px'],
                ["style", "display", 'block']
            ],
            "${_arrow}": [
                ["style", "top", '482px'],
                ["transform", "rotateZ", '16deg'],
                ["style", "height", '60px'],
                ["style", "left", '468px'],
                ["style", "display", 'block']
            ],
            "${_Text2}": [
                ["style", "top", '607px'],
                ["style", "font-size", '119%'],
                ["style", "left", '109px'],
                ["style", "width", '465px']
            ],
            "${_withoutcoding}": [
                ["style", "top", '106px'],
                ["style", "left", '444px'],
                ["style", "display", 'block']
            ],
            "${_blueline}": [
                ["style", "top", '47px'],
                ["style", "left", '17px'],
                ["style", "width", '0%']
            ],
            "${_comment5}": [
                ["style", "top", '0px'],
                ["style", "left", '329px'],
                ["style", "display", 'block']
            ],
            "${_comment1}": [
                ["style", "top", '528px'],
                ["style", "left", '267px'],
                ["style", "display", 'block']
            ],
            "${_dsarrowsw}": [
                ["style", "top", '462px'],
                ["style", "left", '485px'],
                ["style", "display", 'block']
            ],
            "${_arrow3}": [
                ["style", "top", '467px'],
                ["style", "display", 'block'],
                ["style", "left", '530px'],
                ["style", "height", '73px']
            ],
            "${_comment2}": [
                ["style", "top", '541px'],
                ["style", "left", '193px'],
                ["style", "display", 'block']
            ],
            "${_comment4}": [
                ["style", "top", '535px'],
                ["style", "left", '220px'],
                ["style", "display", 'block']
            ],
            "${_bg}": [
                ["style", "left", '12px'],
                ["style", "top", '17px']
            ],
            "${_arrow2}": [
                ["style", "top", '466px'],
                ["transform", "rotateZ", '12deg'],
                ["style", "height", '90px'],
                ["style", "left", '569px'],
                ["style", "display", 'block']
            ],
            "${_comment3}": [
                ["style", "top", '529px'],
                ["style", "left", '253px'],
                ["style", "display", 'block']
            ],
            "${_dot}": [
                ["style", "top", '287px'],
                ["style", "left", '446px'],
                ["style", "display", 'block']
            ],
            "${_redline23}": [
                ["style", "top", '60px'],
                ["style", "left", '79px'],
                ["style", "width", '0%']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(255,255,255,1)'],
                ["style", "overflow", 'hidden'],
                ["style", "height", '650px'],
                ["style", "width", '650px']
            ],
            "${_arrow24}": [
                ["style", "top", '25px'],
                ["transform", "rotateZ", '180deg'],
                ["style", "height", '181px'],
                ["style", "left", '444px'],
                ["style", "display", 'block']
            ],
            "${_Text}": [
                ["style", "top", '578px'],
                ["style", "font-size", '94%'],
                ["style", "font-family", 'Times New Roman, Times, serif'],
                ["style", "display", 'block'],
                ["style", "font-weight", '700'],
                ["style", "left", '161px'],
                ["style", "width", '379px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 8750,
            autoPlay: true,
            timeline: [
                { id: "eid58", tween: [ "style", "${_Text}", "width", '379px', { fromValue: '379px'}], position: 0, duration: 0 },
                { id: "eid22", tween: [ "style", "${_arrow3}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid26", tween: [ "style", "${_arrow3}", "display", 'block', { fromValue: 'none'}], position: 5750, duration: 0 },
                { id: "eid29", tween: [ "style", "${_arrow3}", "display", 'none', { fromValue: 'block'}], position: 6500, duration: 0 },
                { id: "eid5", tween: [ "style", "${_arrow}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid7", tween: [ "style", "${_arrow}", "display", 'block', { fromValue: 'none'}], position: 2110, duration: 0 },
                { id: "eid9", tween: [ "style", "${_arrow}", "display", 'none', { fromValue: 'block'}], position: 2500, duration: 0 },
                { id: "eid40", tween: [ "style", "${_arrow24}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid41", tween: [ "style", "${_arrow24}", "display", 'block', { fromValue: 'none'}], position: 8145, duration: 0 },
                { id: "eid43", tween: [ "style", "${_arrow24}", "display", 'none', { fromValue: 'block'}], position: 8500, duration: 0 },
                { id: "eid2", tween: [ "style", "${_blueline}", "width", '81.85%', { fromValue: '0%'}], position: 250, duration: 1500 },
                { id: "eid3", tween: [ "style", "${_Rate12coding}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid4", tween: [ "style", "${_Rate12coding}", "display", 'block', { fromValue: 'none'}], position: 1840, duration: 0 },
                { id: "eid39", tween: [ "style", "${_comment5}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid42", tween: [ "style", "${_comment5}", "display", 'block', { fromValue: 'none'}], position: 8000, duration: 0 },
                { id: "eid44", tween: [ "style", "${_comment5}", "display", 'none', { fromValue: 'block'}], position: 8500, duration: 0 },
                { id: "eid23", tween: [ "style", "${_dsarrowsw}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid24", tween: [ "style", "${_dsarrowsw}", "display", 'block', { fromValue: 'none'}], position: 5250, duration: 0 },
                { id: "eid27", tween: [ "style", "${_dsarrowsw}", "display", 'none', { fromValue: 'block'}], position: 6500, duration: 0 },
                { id: "eid12", tween: [ "style", "${_redline23}", "width", '79.54%', { fromValue: '0%'}], position: 2750, duration: 1500 },
                { id: "eid63", tween: [ "style", "${_Text}", "top", '578px', { fromValue: '578px'}], position: 0, duration: 0 },
                { id: "eid15", tween: [ "style", "${_arrow2}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid17", tween: [ "style", "${_arrow2}", "display", 'block', { fromValue: 'none'}], position: 4566, duration: 0 },
                { id: "eid19", tween: [ "style", "${_arrow2}", "display", 'none', { fromValue: 'block'}], position: 5000, duration: 0 },
                { id: "eid34", tween: [ "style", "${_arrow22}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid35", tween: [ "style", "${_arrow22}", "display", 'block', { fromValue: 'none'}], position: 7365, duration: 0 },
                { id: "eid38", tween: [ "style", "${_arrow22}", "display", 'none', { fromValue: 'block'}], position: 7750, duration: 0 },
                { id: "eid51", tween: [ "style", "${_blueline}", "top", '47px', { fromValue: '47px'}], position: 7500, duration: 0 },
                { id: "eid6", tween: [ "style", "${_comment1}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid8", tween: [ "style", "${_comment1}", "display", 'block', { fromValue: 'none'}], position: 2000, duration: 0 },
                { id: "eid10", tween: [ "style", "${_comment1}", "display", 'none', { fromValue: 'block'}], position: 2500, duration: 0 },
                { id: "eid30", tween: [ "style", "${_dot}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid31", tween: [ "style", "${_dot}", "display", 'block', { fromValue: 'none'}], position: 7000, duration: 0 },
                { id: "eid36", tween: [ "style", "${_dot}", "display", 'none', { fromValue: 'block'}], position: 7750, duration: 0 },
                { id: "eid21", tween: [ "style", "${_comment3}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid25", tween: [ "style", "${_comment3}", "display", 'block', { fromValue: 'none'}], position: 5500, duration: 0 },
                { id: "eid28", tween: [ "style", "${_comment3}", "display", 'none', { fromValue: 'block'}], position: 6500, duration: 0 },
                { id: "eid45", tween: [ "style", "${_Text}", "display", 'none', { fromValue: 'block'}], position: 8750, duration: 0 },
                { id: "eid13", tween: [ "style", "${_withoutcoding}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid14", tween: [ "style", "${_withoutcoding}", "display", 'block', { fromValue: 'none'}], position: 4310, duration: 0 },
                { id: "eid32", tween: [ "style", "${_comment4}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid33", tween: [ "style", "${_comment4}", "display", 'block', { fromValue: 'none'}], position: 7200, duration: 0 },
                { id: "eid37", tween: [ "style", "${_comment4}", "display", 'none', { fromValue: 'block'}], position: 7750, duration: 0 },
                { id: "eid61", tween: [ "style", "${_Text}", "left", '161px', { fromValue: '161px'}], position: 0, duration: 0 },
                { id: "eid55", tween: [ "style", "${_redline23}", "top", '60px', { fromValue: '60px'}], position: 7500, duration: 0 },
                { id: "eid16", tween: [ "style", "${_comment2}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid18", tween: [ "style", "${_comment2}", "display", 'block', { fromValue: 'none'}], position: 4436, duration: 0 },
                { id: "eid20", tween: [ "style", "${_comment2}", "display", 'none', { fromValue: 'block'}], position: 5000, duration: 0 }            ]
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
})(jQuery, AdobeEdge, "EDGE-220305566");
