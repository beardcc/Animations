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
                id: 'line-division',
                display: 'block',
                type: 'image',
                rect: ['151px', '32px','327px','69px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"line-division.png",'0px','0px']
            },
            {
                id: 'Text3',
                display: 'block',
                type: 'text',
                rect: ['9px', '25px','170px','auto','auto', 'auto'],
                text: "Polynomial to be used for division",
                align: "left",
                font: ['Times New Roman, Times, serif', [94, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: 'Text',
                type: 'text',
                rect: ['127px', '489px','auto','auto','auto', 'auto'],
                text: "Figure 10.2 Polynomial Division for Example 10.4",
                font: ['Times New Roman, Times, serif', [119, "%"], "rgba(0,0,0,1)", "700", "none", ""]
            },
            {
                id: 'Text2',
                display: 'block',
                type: 'text',
                rect: ['117px', '456px','auto','auto','auto', 'auto'],
                text: "Click or Touch on Figure for Each Step of the Animation",
                align: "left",
                font: ['Times New Roman, Times, serif', [94, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: 'Divisor',
                display: 'block',
                type: 'image',
                rect: ['2px', '57px','177px','35px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"Divisor.png",'0px','0px']
            },
            {
                id: 'dividend-label',
                display: 'block',
                type: 'image',
                rect: ['473px', '64px','102px','27px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"dividend-label.png",'0px','0px']
            },
            {
                id: 'dividend',
                display: 'block',
                type: 'image',
                rect: ['176px', '56px','296px','35px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"dividend.png",'0px','0px']
            },
            {
                id: 'x9',
                display: 'block',
                type: 'image',
                rect: ['166px', '31px','40px','35px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"x9.png",'0px','0px']
            },
            {
                id: 'first-line',
                display: 'block',
                type: 'image',
                rect: ['174px', '78px','186px','44px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"first-line.png",'0px','0px']
            },
            {
                id: 'xor',
                display: 'block',
                type: 'image',
                rect: ['204px', '101px','186px','44px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"xor.png",'0px','0px']
            },
            {
                id: 'Text4',
                display: 'block',
                type: 'text',
                rect: ['401px', '114px','auto','auto','auto', 'auto'],
                text: "XOR the two rows.",
                align: "left",
                font: ['Times New Roman, Times, serif', [94, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: 'rem-part2',
                display: 'block',
                type: 'image',
                rect: ['209px', '139px','390px','254px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"rem-part2.png",'0px','0px']
            },
            {
                id: 'rem-quo',
                display: 'block',
                type: 'image',
                rect: ['204px', '32px','156px','35px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"rem-quo.png",'0px','0px']
            },
            {
                id: 'remainder',
                display: 'block',
                type: 'image',
                rect: ['592px', '363px','63px','30px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"remainder.png",'0px','0px']
            },
            {
                id: 'Text5',
                display: 'block',
                type: 'text',
                rect: ['435px', '393px','215px','auto','auto', 'auto'],
                text: "This is the remainder to be used for the block code.",
                align: "left",
                font: ['Times New Roman, Times, serif', [94, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: 'Text6',
                display: 'block',
                type: 'text',
                rect: ['69px', '185px','auto','auto','auto', 'auto'],
                text: "Continue the process",
                align: "left",
                font: ['Times New Roman, Times, serif', [94, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
            }],
            symbolInstances: [

            ]
        },
    states: {
        "Base State": {
            "${_Text3}": [
                ["style", "top", '25px'],
                ["style", "height", '24px'],
                ["style", "display", 'block'],
                ["style", "font-family", 'Times New Roman, Times, serif'],
                ["style", "left", '9px'],
                ["style", "width", '229px']
            ],
            "${_Text5}": [
                ["style", "top", '393px'],
                ["style", "display", 'block'],
                ["style", "font-family", 'Times New Roman, Times, serif'],
                ["style", "left", '435px'],
                ["style", "width", '215px']
            ],
            "${_dividend}": [
                ["style", "top", '56px'],
                ["style", "left", '176px'],
                ["style", "display", 'block']
            ],
            "${_x9}": [
                ["style", "top", '31px'],
                ["style", "left", '166px'],
                ["style", "display", 'block']
            ],
            "${_Text2}": [
                ["style", "top", '463px'],
                ["style", "display", 'block'],
                ["style", "font-family", 'Times New Roman, Times, serif'],
                ["style", "left", '146px'],
                ["style", "font-size", '94%']
            ],
            "${_Text4}": [
                ["style", "top", '114px'],
                ["style", "font-family", 'Times New Roman, Times, serif'],
                ["style", "left", '401px'],
                ["style", "display", 'block']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(255,255,255,1)'],
                ["style", "overflow", 'hidden'],
                ["style", "height", '520px'],
                ["style", "width", '660px']
            ],
            "${_line-division}": [
                ["style", "top", '32px'],
                ["style", "left", '151px'],
                ["style", "display", 'block']
            ],
            "${_rem-part2}": [
                ["style", "top", '139px'],
                ["style", "left", '209px'],
                ["style", "display", 'block']
            ],
            "${_Text6}": [
                ["style", "top", '185px'],
                ["style", "font-family", 'Times New Roman, Times, serif'],
                ["style", "left", '69px'],
                ["style", "display", 'block']
            ],
            "${_Text}": [
                ["style", "top", '489px'],
                ["style", "font-weight", '700'],
                ["style", "font-family", 'Times New Roman, Times, serif'],
                ["style", "left", '127px'],
                ["style", "font-size", '119%']
            ],
            "${_Divisor}": [
                ["style", "top", '57px'],
                ["style", "left", '2px'],
                ["style", "display", 'block']
            ],
            "${_rem-quo}": [
                ["style", "top", '32px'],
                ["style", "left", '204px'],
                ["style", "display", 'block']
            ],
            "${_dividend-label}": [
                ["style", "top", '64px'],
                ["style", "left", '473px'],
                ["style", "display", 'block']
            ],
            "${_xor}": [
                ["style", "top", '101px'],
                ["style", "left", '204px'],
                ["style", "display", 'block']
            ],
            "${_first-line}": [
                ["style", "top", '78px'],
                ["style", "left", '174px'],
                ["style", "display", 'block']
            ],
            "${_remainder}": [
                ["style", "top", '363px'],
                ["style", "left", '592px'],
                ["style", "display", 'block']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 3090,
            autoPlay: true,
            timeline: [
                { id: "eid7", tween: [ "style", "${_dividend-label}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid8", tween: [ "style", "${_dividend-label}", "display", 'block', { fromValue: 'none'}], position: 850, duration: 0 },
                { id: "eid34", tween: [ "style", "${_Divisor}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid35", tween: [ "style", "${_Divisor}", "display", 'block', { fromValue: 'none'}], position: 205, duration: 0 },
                { id: "eid29", tween: [ "style", "${_Text2}", "display", 'none', { fromValue: 'block'}], position: 3090, duration: 0 },
                { id: "eid19", tween: [ "style", "${_rem-part2}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid20", tween: [ "style", "${_rem-part2}", "display", 'block', { fromValue: 'none'}], position: 2095, duration: 0 },
                { id: "eid37", tween: [ "style", "${_Text2}", "top", '463px', { fromValue: '463px'}], position: 0, duration: 0 },
                { id: "eid15", tween: [ "style", "${_xor}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid16", tween: [ "style", "${_xor}", "display", 'block', { fromValue: 'none'}], position: 1655, duration: 0 },
                { id: "eid27", tween: [ "style", "${_Text6}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid28", tween: [ "style", "${_Text6}", "display", 'block', { fromValue: 'none'}], position: 2290, duration: 0 },
                { id: "eid30", tween: [ "style", "${_Text6}", "display", 'none', { fromValue: 'block'}], position: 3090, duration: 0 },
                { id: "eid21", tween: [ "style", "${_rem-quo}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid22", tween: [ "style", "${_rem-quo}", "display", 'block', { fromValue: 'none'}], position: 2095, duration: 0 },
                { id: "eid23", tween: [ "style", "${_remainder}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid24", tween: [ "style", "${_remainder}", "display", 'block', { fromValue: 'none'}], position: 2600, duration: 0 },
                { id: "eid36", tween: [ "style", "${_Text2}", "left", '146px', { fromValue: '146px'}], position: 0, duration: 0 },
                { id: "eid17", tween: [ "style", "${_Text4}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid18", tween: [ "style", "${_Text4}", "display", 'block', { fromValue: 'none'}], position: 1895, duration: 0 },
                { id: "eid32", tween: [ "style", "${_Text4}", "display", 'none', { fromValue: 'block'}], position: 3090, duration: 0 },
                { id: "eid25", tween: [ "style", "${_Text5}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid26", tween: [ "style", "${_Text5}", "display", 'block', { fromValue: 'none'}], position: 2865, duration: 0 },
                { id: "eid33", tween: [ "style", "${_Text5}", "display", 'none', { fromValue: 'block'}], position: 3090, duration: 0 },
                { id: "eid3", tween: [ "style", "${_line-division}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid4", tween: [ "style", "${_line-division}", "display", 'block', { fromValue: 'none'}], position: 660, duration: 0 },
                { id: "eid13", tween: [ "style", "${_first-line}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid14", tween: [ "style", "${_first-line}", "display", 'block', { fromValue: 'none'}], position: 1445, duration: 0 },
                { id: "eid39", tween: [ "style", "${_Text3}", "height", '24px', { fromValue: '24px'}], position: 500, duration: 0 },
                { id: "eid9", tween: [ "style", "${_dividend}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid10", tween: [ "style", "${_dividend}", "display", 'block', { fromValue: 'none'}], position: 1050, duration: 0 },
                { id: "eid38", tween: [ "style", "${_Text3}", "width", '229px', { fromValue: '229px'}], position: 500, duration: 0 },
                { id: "eid5", tween: [ "style", "${_Text3}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid6", tween: [ "style", "${_Text3}", "display", 'block', { fromValue: 'none'}], position: 430, duration: 0 },
                { id: "eid31", tween: [ "style", "${_Text3}", "display", 'none', { fromValue: 'block'}], position: 3090, duration: 0 },
                { id: "eid11", tween: [ "style", "${_x9}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid12", tween: [ "style", "${_x9}", "display", 'block', { fromValue: 'none'}], position: 1250, duration: 0 }            ]
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
})(jQuery, AdobeEdge, "EDGE-346898987");
