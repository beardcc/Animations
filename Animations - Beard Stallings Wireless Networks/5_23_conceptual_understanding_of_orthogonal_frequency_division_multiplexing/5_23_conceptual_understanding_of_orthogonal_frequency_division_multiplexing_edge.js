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
                id: 'Text',
                display: 'block',
                type: 'text',
                rect: ['91px', '628px','auto','auto','auto', 'auto'],
                text: "Click or Touch on Figure for Each Step of the Animation",
                font: ['Times New Roman, Times, serif', [94, "%"], "rgba(0,0,0,1)", "700", "none", ""]
            },
            {
                id: 'Text2',
                type: 'text',
                rect: ['57px', '653px','409px','40px','auto', 'auto'],
                text: "Figure 5.23  Conceptual Understanding of Orthogonal Frequency Division Multiplexing",
                align: "center",
                font: ['\'Times New Roman\', Times, serif', 18, "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: 'antenna',
                display: 'block',
                type: 'image',
                rect: ['350px', '4px','73px','546px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"antenna.png",'0px','0px']
            },
            {
                id: 'III',
                display: 'block',
                type: 'image',
                rect: ['219px', '55px','178px','546px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"III.png",'0px','0px']
            },
            {
                id: 'Input-Signal',
                display: 'block',
                type: 'image',
                rect: ['12px', '283px','92px','51px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"Input-Signal.png",'0px','0px']
            },
            {
                id: 'Text3',
                display: 'block',
                type: 'text',
                rect: ['39px', '330px','73px','40px','auto', 'auto'],
                text: "Input Signal",
                align: "left",
                font: ['\'Times New Roman\', Times, serif', [94, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: '_2split',
                display: 'block',
                type: 'image',
                rect: ['76px', '42px','178px','516px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"2split.png",'0px','0px']
            },
            {
                id: 'Text4',
                display: 'block',
                type: 'text',
                rect: ['32px', '401px','143px','51px','auto', 'auto'],
                text: "Split into <i>N</i> lower rate signals of rate <i>R/N</i>.",
                align: "left",
                font: ['\'Times New Roman\', Times, serif', [94, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: 'comment3',
                display: 'block',
                type: 'image',
                rect: ['335px', '217px','220px','66px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"comment3.png",'0px','0px']
            },
            {
                id: 'arrow2',
                display: 'block',
                type: 'image',
                rect: ['330px', '240px','10px','40px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"arrow2.png",'0px','0px'],
                transform: [[],['-121']]
            },
            {
                id: 'arrow2Copy',
                display: 'block',
                type: 'image',
                rect: ['330px', '240px','10px','40px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"arrow2.png",'0px','0px'],
                transform: [[],['-121']]
            },
            {
                id: 'Comment4',
                display: 'block',
                type: 'image',
                rect: ['324px', '295px','220px','66px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"Comment4.png",'0px','0px']
            },
            {
                id: 'comment52',
                display: 'block',
                type: 'image',
                rect: ['364px', '42px','214px','66px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"comment52.png",'0px','0px']
            }],
            symbolInstances: [

            ]
        },
    states: {
        "Base State": {
            "${__2split}": [
                ["style", "top", '42px'],
                ["style", "left", '76px'],
                ["style", "display", 'block']
            ],
            "${_antenna}": [
                ["style", "top", '4px'],
                ["style", "left", '350px'],
                ["style", "display", 'block']
            ],
            "${_Text3}": [
                ["style", "display", 'block'],
                ["style", "top", '330px'],
                ["style", "left", '39px'],
                ["style", "font-size", '94%']
            ],
            "${_Input-Signal}": [
                ["style", "top", '283px'],
                ["style", "left", '12px'],
                ["style", "display", 'block']
            ],
            "${_Text2}": [
                ["style", "top", '653px'],
                ["style", "text-align", 'center'],
                ["style", "font-size", '18px'],
                ["style", "left", '57px'],
                ["style", "width", '439px']
            ],
            "${_Comment4}": [
                ["style", "top", '295px'],
                ["style", "left", '324px'],
                ["style", "display", 'block']
            ],
            "${_Text}": [
                ["style", "top", '628px'],
                ["style", "font-weight", '700'],
                ["style", "display", 'block'],
                ["style", "font-family", 'Times New Roman, Times, serif'],
                ["style", "left", '91px'],
                ["style", "font-size", '94%']
            ],
            "${_comment52}": [
                ["style", "display", 'block'],
                ["style", "top", '42px'],
                ["style", "left", '364px'],
                ["style", "width", '214px']
            ],
            "${_comment3}": [
                ["style", "top", '217px'],
                ["style", "left", '335px'],
                ["style", "display", 'block']
            ],
            "${_arrow2}": [
                ["style", "top", '240px'],
                ["transform", "rotateZ", '-121deg'],
                ["style", "height", '40px'],
                ["style", "left", '330px'],
                ["style", "display", 'block']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(255,255,255,1)'],
                ["style", "overflow", 'hidden'],
                ["style", "height", '700px'],
                ["style", "width", '550px']
            ],
            "${_III}": [
                ["style", "top", '55px'],
                ["style", "left", '219px'],
                ["style", "display", 'block']
            ],
            "${_arrow2Copy}": [
                ["style", "top", '315px'],
                ["transform", "rotateZ", '-121deg'],
                ["style", "height", '40px'],
                ["style", "left", '330px'],
                ["style", "display", 'block']
            ],
            "${_Text4}": [
                ["style", "display", 'block'],
                ["style", "top", '401px'],
                ["style", "left", '32px'],
                ["style", "width", '143px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 3635,
            autoPlay: true,
            timeline: [
                { id: "eid8", tween: [ "style", "${_Text4}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid9", tween: [ "style", "${_Text4}", "display", 'block', { fromValue: 'none'}], position: 1000, duration: 0 },
                { id: "eid10", tween: [ "style", "${_Text4}", "display", 'none', { fromValue: 'block'}], position: 1250, duration: 0 },
                { id: "eid19", tween: [ "style", "${_arrow2Copy}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid20", tween: [ "style", "${_arrow2Copy}", "display", 'block', { fromValue: 'none'}], position: 2320, duration: 0 },
                { id: "eid25", tween: [ "style", "${_arrow2Copy}", "display", 'none', { fromValue: 'block'}], position: 2630, duration: 0 },
                { id: "eid3", tween: [ "style", "${_Text3}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid4", tween: [ "style", "${_Text3}", "display", 'block', { fromValue: 'none'}], position: 395, duration: 0 },
                { id: "eid5", tween: [ "style", "${_Text3}", "display", 'none', { fromValue: 'block'}], position: 665, duration: 0 },
                { id: "eid23", tween: [ "style", "${_Comment4}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid24", tween: [ "style", "${_Comment4}", "display", 'block', { fromValue: 'none'}], position: 2125, duration: 0 },
                { id: "eid26", tween: [ "style", "${_Comment4}", "display", 'none', { fromValue: 'block'}], position: 2630, duration: 0 },
                { id: "eid11", tween: [ "style", "${_III}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid12", tween: [ "style", "${_III}", "display", 'block', { fromValue: 'none'}], position: 1405, duration: 0 },
                { id: "eid13", tween: [ "style", "${_comment3}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid14", tween: [ "style", "${_comment3}", "display", 'block', { fromValue: 'none'}], position: 1575, duration: 0 },
                { id: "eid18", tween: [ "style", "${_comment3}", "display", 'none', { fromValue: 'block'}], position: 2000, duration: 0 },
                { id: "eid27", tween: [ "style", "${_antenna}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid29", tween: [ "style", "${_antenna}", "display", 'block', { fromValue: 'none'}], position: 2825, duration: 0 },
                { id: "eid1", tween: [ "style", "${_Input-Signal}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid2", tween: [ "style", "${_Input-Signal}", "display", 'block', { fromValue: 'none'}], position: 250, duration: 0 },
                { id: "eid30", tween: [ "style", "${_comment52}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid31", tween: [ "style", "${_comment52}", "display", 'block', { fromValue: 'none'}], position: 2935, duration: 0 },
                { id: "eid32", tween: [ "style", "${_comment52}", "display", 'none', { fromValue: 'block'}], position: 3390, duration: 0 },
                { id: "eid33", tween: [ "style", "${_Text}", "display", 'none', { fromValue: 'block'}], position: 3635, duration: 0 },
                { id: "eid6", tween: [ "style", "${__2split}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid7", tween: [ "style", "${__2split}", "display", 'block', { fromValue: 'none'}], position: 820, duration: 0 },
                { id: "eid15", tween: [ "style", "${_arrow2}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid16", tween: [ "style", "${_arrow2}", "display", 'block', { fromValue: 'none'}], position: 1750, duration: 0 },
                { id: "eid17", tween: [ "style", "${_arrow2}", "display", 'none', { fromValue: 'block'}], position: 2000, duration: 0 }            ]
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
})(jQuery, AdobeEdge, "EDGE-13336275");
