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
                id: 'axis-2',
                display: 'block',
                type: 'image',
                rect: ['26px', '2px','376px','358px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"axis-2.png",'0px','0px']
            },
            {
                id: 'better',
                display: 'block',
                type: 'image',
                rect: ['52px', '21px','45.8%','74.5%','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"better.png",'0%','0%','252px','auto']
            },
            {
                id: 'better-label',
                display: 'block',
                type: 'image',
                rect: ['130px', '158px','94px','58px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"better-label.png",'0px','0px']
            },
            {
                id: 'worst',
                display: 'block',
                type: 'image',
                rect: ['51px', '11px','62.2%','76.2%','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"worst.png",'0%','0%','342px','auto']
            },
            {
                id: 'worse-label',
                display: 'block',
                type: 'image',
                rect: ['255px', '56px','94px','58px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"worse-label.png",'0px','0px']
            },
            {
                id: 'Text2',
                display: 'block',
                type: 'text',
                rect: ['91px', '362px','auto','auto','auto', 'auto'],
                text: "Click or Touch on the Figure for Each Step of Animation",
                align: "left",
                font: ['Times New Roman, Times, serif', [94, "%"], "rgba(0,0,0,1)", "700", "none", "normal"]
            },
            {
                id: 'Text2Copy2',
                display: 'block',
                type: 'text',
                rect: ['91px', '362px','auto','auto','auto', 'auto'],
                text: "Click or Touch on the Figure for Each Step of Animation",
                align: "left",
                font: ['Times New Roman, Times, serif', [94, "%"], "rgba(0,0,0,1)", "700", "none", "normal"]
            },
            {
                id: 'title3',
                type: 'image',
                rect: ['21px', '378px','415px','25px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"1.png",'0px','0px']
            },
            {
                id: 'Text',
                type: 'text',
                rect: ['406px', '144px','109px','99px','auto', 'auto'],
                text: "Higher BER needed for the same <i>E<sub>b</sub>/N<sub>0</sub></i>. More <i>E<sub>b</sub>/N<sub>0</sub></i> needed to have the same BER. ",
                align: "left",
                font: ['\'Times New Roman\', Times, serif', [94, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
            }],
            symbolInstances: [

            ]
        },
    states: {
        "Base State": {
            "${_comment}": [
                ["style", "top", '61px'],
                ["style", "left", '386px'],
                ["style", "display", 'block']
            ],
            "${_better-label}": [
                ["style", "top", '158px'],
                ["style", "left", '130px'],
                ["style", "display", 'block']
            ],
            "${_title3}": [
                ["style", "top", '378px'],
                ["style", "height", '25px'],
                ["style", "left", '21px'],
                ["style", "width", '415px']
            ],
            "${_Text2}": [
                ["style", "top", '359px'],
                ["style", "font-weight", '700'],
                ["style", "display", 'block'],
                ["style", "font-family", 'Times New Roman, Times, serif'],
                ["style", "left", '40px'],
                ["style", "font-size", '94%']
            ],
            "${_worse-label}": [
                ["style", "top", '56px'],
                ["style", "left", '255px'],
                ["style", "display", 'block']
            ],
            "${_Text}": [
                ["style", "top", '111px'],
                ["style", "font-family", 'Times New Roman, Times, serif'],
                ["style", "font-weight", '700'],
                ["style", "left", '400px'],
                ["style", "font-size", '94%']
            ],
            "${_Text2Copy2}": [
                ["style", "top", '359px'],
                ["style", "font-weight", '700'],
                ["style", "display", 'block'],
                ["style", "font-family", 'Times New Roman, Times, serif'],
                ["style", "left", '40px'],
                ["style", "font-size", '94%']
            ],
            "${_worst}": [
                ["style", "top", '11px'],
                ["style", "display", 'block'],
                ["style", "background-size", [342,'auto'], {valueTemplate:'@@0@@px @@1@@'} ],
                ["style", "left", '50px'],
                ["style", "width", '1.1%']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(255,255,255,1)'],
                ["style", "width", '550px'],
                ["style", "height", '420px'],
                ["style", "overflow", 'hidden']
            ],
            "${_better}": [
                ["style", "top", '21px'],
                ["style", "display", 'block'],
                ["style", "background-size", [252,'auto'], {valueTemplate:'@@0@@px @@1@@'} ],
                ["style", "left", '52px'],
                ["style", "width", '2%']
            ],
            "${_axis-2}": [
                ["style", "top", '2px'],
                ["style", "left", '26px'],
                ["style", "display", 'block']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 3415,
            autoPlay: true,
            timeline: [
                { id: "eid19", tween: [ "style", "${_worse-label}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid20", tween: [ "style", "${_worse-label}", "display", 'block', { fromValue: 'none'}], position: 2940, duration: 0 },
                { id: "eid24", tween: [ "style", "${_Text2}", "display", 'none', { fromValue: 'block'}], position: 3415, duration: 0 },
                { id: "eid1", tween: [ "style", "${_axis-2}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid2", tween: [ "style", "${_axis-2}", "display", 'block', { fromValue: 'none'}], position: 175, duration: 0 },
                { id: "eid10", tween: [ "style", "${_better-label}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid11", tween: [ "style", "${_better-label}", "display", 'block', { fromValue: 'none'}], position: 1560, duration: 0 },
                { id: "eid12", tween: [ "style", "${_worst}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid13", tween: [ "style", "${_worst}", "display", 'block', { fromValue: 'none'}], position: 1750, duration: 0 },
                { id: "eid17", tween: [ "style", "${_worst}", "width", '62.19%', { fromValue: '1.1%'}], position: 1750, duration: 1000 },
                { id: "eid3", tween: [ "style", "${_better}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid4", tween: [ "style", "${_better}", "display", 'block', { fromValue: 'none'}], position: 365, duration: 0 },
                { id: "eid41", tween: [ "style", "${_Text2Copy2}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid42", tween: [ "style", "${_Text2Copy2}", "display", 'block', { fromValue: 'block'}], position: 3050, duration: 0 },
                { id: "eid43", tween: [ "style", "${_Text2Copy2}", "display", 'none', { fromValue: 'block'}], position: 3375, duration: 0 },
                { id: "eid43", tween: [ "style", "${_Text}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid44", tween: [ "style", "${_Text}", "display", 'block', { fromValue: 'none'}], position: 3050, duration: 0 },
                { id: "eid45", tween: [ "style", "${_Text}", "display", 'none', { fromValue: 'block'}], position: 3375, duration: 0 },
                { id: "eid52", tween: [ "style", "${_Text}", "left", '400px', { fromValue: '400px'}], position: 3206, duration: 0 },
                { id: "eid9", tween: [ "style", "${_better}", "width", '45.82%', { fromValue: '2%'}], position: 365, duration: 1000 },
                { id: "eid51", tween: [ "style", "${_Text}", "top", '111px', { fromValue: '111px'}], position: 3206, duration: 0 }            ]
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
})(jQuery, AdobeEdge, "EDGE-1502248613");
