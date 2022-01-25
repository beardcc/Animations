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
                id: 'binaryop',
                display: 'block',
                type: 'image',
                rect: ['-4px', '122px','22.7%','20.2%','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"binaryop.png",'0%','0%','136px','97px']
            },
            {
                id: '_2bitbinary',
                display: 'block',
                type: 'image',
                rect: ['86px', '121px','136px','97px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"2bitbinary.png",'0px','0px']
            },
            {
                id: 'Text3',
                display: 'block',
                type: 'text',
                rect: ['212px', '311px','282px','30px','auto', 'auto'],
                text: "Odd-numbered bits take the upper path.",
                align: "left",
                font: ['\'Times New Roman\', Times, serif', [94, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: 'Text4',
                display: 'block',
                type: 'text',
                rect: ['184px', '311px','320px','30px','auto', 'auto'],
                text: "Even-numbered bits take the lower path.",
                align: "left",
                font: ['\'Times New Roman\', Times, serif', [94, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: 'comment3',
                display: 'block',
                type: 'image',
                rect: ['326px', '292px','283px','42px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"comment3.png",'0px','0px']
            },
            {
                id: 'arrw2',
                display: 'block',
                type: 'image',
                rect: ['378px', '213px','21%','19.2%','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"arrw2.png",'0%','0%','126px','92px'],
                transform: [[],['180']]
            },
            {
                id: 'uparrw',
                type: 'image',
                rect: ['190px', '12px','27.2%','34%','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"uparrw.png",'0%','0%','163px','163px']
            },
            {
                id: 'dwnarrw',
                display: 'block',
                type: 'image',
                rect: ['192px', '157px','26.9%','27.7%','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"dwnarrw.png",'0%','0%','161px','133px']
            },
            {
                id: 'phsft',
                display: 'block',
                type: 'image',
                rect: ['289px', '135px','161px','176px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"phsft.png",'0px','0px']
            },
            {
                id: 'qamop',
                display: 'block',
                type: 'image',
                rect: ['370px', '116px','36.7%','36.7%','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"qamop.png",'0%','0%','220px','176px']
            },
            {
                id: 'caos',
                display: 'block',
                type: 'image',
                rect: ['281px', '18px','163px','163px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"caos.png",'0px','0px']
            },
            {
                id: 'uparrw2',
                type: 'image',
                rect: ['371px', '34px','20.7%','27.7%','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"uparrw2.png",'0%','0%','124px','133px']
            },
            {
                id: 'Text',
                type: 'text',
                rect: ['184px', '390px','260px','30px','auto', 'auto'],
                text: "Figure 7.12 QAM Modulator ",
                font: ['Times New Roman, Times, serif', [119, "%"], "rgba(0,0,0,1)", "700", "none", ""]
            },
            {
                id: 'Text2',
                display: 'block',
                type: 'text',
                rect: ['125px', '401px','386px','30px','auto', 'auto'],
                text: "Click or Touch on Figure for Each Step of the Animation",
                align: "left",
                font: ['\'Times New Roman\', Times, serif', [94, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
            }],
            symbolInstances: [

            ]
        },
    states: {
        "Base State": {
            "${_Text4}": [
                ["style", "top", '311px'],
                ["style", "display", 'block'],
                ["style", "left", '184px'],
                ["style", "width", '320px']
            ],
            "${_binaryop}": [
                ["style", "top", '122px'],
                ["style", "display", 'block'],
                ["style", "left", '-4px'],
                ["style", "width", '0%']
            ],
            "${__2bitbinary}": [
                ["style", "top", '121px'],
                ["style", "left", '86px'],
                ["style", "display", 'block']
            ],
            "${_dwnarrw}": [
                ["style", "top", '157px'],
                ["style", "display", 'block'],
                ["style", "left", '192px'],
                ["style", "width", '0%']
            ],
            "${_Text3}": [
                ["style", "top", '311px'],
                ["style", "display", 'block'],
                ["style", "left", '212px'],
                ["style", "width", '282px']
            ],
            "${_phsft}": [
                ["style", "top", '135px'],
                ["style", "left", '289px'],
                ["style", "display", 'block']
            ],
            "${_Text2}": [
                ["style", "top", '363px'],
                ["style", "display", 'block'],
                ["style", "width", '386px'],
                ["style", "left", '125px'],
                ["style", "font-size", '94%']
            ],
            "${_uparrw}": [
                ["style", "top", '12px'],
                ["style", "left", '190px'],
                ["style", "width", '0%']
            ],
            "${_comment3}": [
                ["style", "top", '292px'],
                ["style", "left", '326px'],
                ["style", "display", 'block']
            ],
            "${_caos}": [
                ["style", "top", '18px'],
                ["style", "left", '281px'],
                ["style", "display", 'block']
            ],
            "${_qamop}": [
                ["style", "top", '116px'],
                ["style", "display", 'block'],
                ["style", "left", '370px'],
                ["style", "width", '0%']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(255,255,255,1)'],
                ["style", "width", '599px'],
                ["style", "height", '450px'],
                ["style", "overflow", 'hidden']
            ],
            "${_arrw2}": [
                ["style", "top", '305px'],
                ["transform", "rotateZ", '0deg'],
                ["style", "height", '0%'],
                ["style", "left", '378px'],
                ["style", "display", 'block']
            ],
            "${_Text}": [
                ["style", "top", '390px'],
                ["style", "font-family", 'Times New Roman, Times, serif'],
                ["style", "width", '260px'],
                ["style", "font-weight", '700'],
                ["style", "left", '184px'],
                ["style", "font-size", '119%']
            ],
            "${_uparrw2}": [
                ["style", "top", '34px'],
                ["style", "left", '371px'],
                ["style", "width", '0%']
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
                { id: "eid41", tween: [ "style", "${_arrw2}", "display", 'none', { fromValue: 'block'}], position: 8500, duration: 0 },
                { id: "eid22", tween: [ "style", "${_phsft}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid23", tween: [ "style", "${_phsft}", "display", 'block', { fromValue: 'none'}], position: 5000, duration: 0 },
                { id: "eid18", tween: [ "style", "${_dwnarrw}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid19", tween: [ "style", "${_dwnarrw}", "display", 'block', { fromValue: 'none'}], position: 4000, duration: 0 },
                { id: "eid43", tween: [ "style", "${_Text2}", "display", 'none', { fromValue: 'block'}], position: 8750, duration: 0 },
                { id: "eid1", tween: [ "style", "${_binaryop}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid2", tween: [ "style", "${_binaryop}", "display", 'block', { fromValue: 'none'}], position: 410, duration: 0 },
                { id: "eid10", tween: [ "style", "${_uparrw}", "width", '27.22%', { fromValue: '0%'}], position: 1410, duration: 1000 },
                { id: "eid39", tween: [ "style", "${_arrw2}", "top", '213px', { fromValue: '305px'}], position: 7250, duration: 1000 },
                { id: "eid27", tween: [ "style", "${_qamop}", "width", '36.73%', { fromValue: '0%'}], position: 5000, duration: 1500 },
                { id: "eid4", tween: [ "style", "${_binaryop}", "width", '22.71%', { fromValue: '0%'}], position: 410, duration: 1000 },
                { id: "eid40", tween: [ "transform", "${_arrw2}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 7250, duration: 0 },
                { id: "eid16", tween: [ "style", "${_Text4}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid17", tween: [ "style", "${_Text4}", "display", 'block', { fromValue: 'none'}], position: 3750, duration: 0 },
                { id: "eid28", tween: [ "style", "${_Text4}", "display", 'none', { fromValue: 'block'}], position: 6750, duration: 0 },
                { id: "eid7", tween: [ "style", "${_Text3}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid8", tween: [ "style", "${_Text3}", "display", 'block', { fromValue: 'none'}], position: 250, duration: 0 },
                { id: "eid15", tween: [ "style", "${_Text3}", "display", 'none', { fromValue: 'block'}], position: 3575, duration: 0 },
                { id: "eid21", tween: [ "style", "${_dwnarrw}", "width", '26.88%', { fromValue: '0%'}], position: 4000, duration: 1000 },
                { id: "eid14", tween: [ "style", "${_uparrw2}", "width", '20.71%', { fromValue: '0%'}], position: 2410, duration: 1000 },
                { id: "eid24", tween: [ "style", "${_qamop}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid25", tween: [ "style", "${_qamop}", "display", 'block', { fromValue: 'none'}], position: 5000, duration: 0 },
                { id: "eid29", tween: [ "style", "${_comment3}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid30", tween: [ "style", "${_comment3}", "display", 'block', { fromValue: 'none'}], position: 7000, duration: 0 },
                { id: "eid42", tween: [ "style", "${_comment3}", "display", 'none', { fromValue: 'block'}], position: 8500, duration: 0 },
                { id: "eid5", tween: [ "style", "${__2bitbinary}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid6", tween: [ "style", "${__2bitbinary}", "display", 'block', { fromValue: 'none'}], position: 1410, duration: 0 },
                { id: "eid44", tween: [ "style", "${_Text2}", "top", '363px', { fromValue: '363px'}], position: 6250, duration: 0 },
                { id: "eid37", tween: [ "style", "${_arrw2}", "height", '19.17%', { fromValue: '0%'}], position: 7250, duration: 1000 },
                { id: "eid11", tween: [ "style", "${_caos}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid12", tween: [ "style", "${_caos}", "display", 'block', { fromValue: 'none'}], position: 2410, duration: 0 }            ]
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
})(jQuery, AdobeEdge, "EDGE-1124660248");
