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
                type: 'text',
                rect: ['118px', '550px','323px','29px','auto', 'auto'],
                text: "Figure 7.14 Spectrum of an AM Signal",
                font: ['Times New Roman, Times, serif', [119, "%"], "rgba(0,0,0,1)", "700", "none", ""]
            },
            {
                id: 'Text2',
                display: 'block',
                type: 'text',
                rect: ['95px', '521px','388px','29px','auto', 'auto'],
                text: "Click or Touch on Figure for Each Step of the Animation",
                align: "left",
                font: ['\'Times New Roman\', Times, serif', [94, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: 'bgm',
                display: 'block',
                type: 'image',
                rect: ['119px', '25px','308px','465px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"bgm.png",'0px','0px']
            },
            {
                id: '_1',
                display: 'block',
                type: 'image',
                rect: ['144px', '73px','79px','105px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"1.png",'0px','0px']
            },
            {
                id: 'lb',
                display: 'block',
                type: 'image',
                rect: ['200px', '335px','14.4%','17.5%','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"lb.png",'0%','0%','79px','105px']
            },
            {
                id: 'lbt',
                display: 'block',
                type: 'image',
                rect: ['165px', '311px','96px','105px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"lbt.png",'0px','0px']
            },
            {
                id: 'Text3',
                display: 'block',
                type: 'text',
                rect: ['375px', '250px','157px','58px','auto', 'auto'],
                text: "This process also creates a lower sideband.",
                align: "left",
                font: ['\'Times New Roman\', Times, serif', [94, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: 'ub',
                display: 'none',
                type: 'image',
                rect: ['250px', '334px','79px','105px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"ub.png",'0px','0px']
            },
            {
                id: '_12',
                display: 'none',
                type: 'image',
                rect: ['143px', '72px','79px','105px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"1.png",'0px','0px']
            },
            {
                id: 'ubt',
                display: 'block',
                type: 'image',
                rect: ['294px', '311px','96px','105px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"ubt.png",'0px','0px']
            },
            {
                id: 'comment1',
                display: 'block',
                type: 'image',
                rect: ['280px', '55px','258px','58px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"comment1.png",'0px','0px']
            }],
            symbolInstances: [

            ]
        },
    states: {
        "Base State": {
            "${_ubt}": [
                ["style", "top", '311px'],
                ["style", "left", '294px'],
                ["style", "display", 'block']
            ],
            "${_Text3}": [
                ["style", "display", 'block'],
                ["style", "width", '163px']
            ],
            "${_Text2}": [
                ["style", "display", 'block'],
                ["style", "top", '521px'],
                ["style", "left", '95px'],
                ["style", "font-size", '94%']
            ],
            "${__12}": [
                ["style", "top", '72px'],
                ["style", "left", '143px'],
                ["style", "display", 'none']
            ],
            "${_lb}": [
                ["style", "display", 'block'],
                ["style", "top", '335px'],
                ["style", "left", '200px'],
                ["style", "width", '0%']
            ],
            "${__1}": [
                ["style", "top", '73px'],
                ["style", "left", '144px'],
                ["style", "display", 'block']
            ],
            "${_Text}": [
                ["style", "top", '550px'],
                ["style", "font-size", '119%'],
                ["style", "font-family", 'Times New Roman, Times, serif'],
                ["style", "font-weight", '700'],
                ["style", "left", '118px'],
                ["style", "width", '323px']
            ],
            "${_comment1}": [
                ["style", "top", '55px'],
                ["style", "left", '280px'],
                ["style", "display", 'block']
            ],
            "${_lbt}": [
                ["style", "top", '311px'],
                ["style", "left", '165px'],
                ["style", "display", 'block']
            ],
            "${_bgm}": [
                ["style", "top", '25px'],
                ["style", "left", '119px'],
                ["style", "display", 'block']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(255,255,255,1)'],
                ["style", "overflow", 'hidden'],
                ["style", "height", '600px'],
                ["style", "width", '550px']
            ],
            "${_ub}": [
                ["style", "top", '335px'],
                ["style", "left", '250px'],
                ["style", "display", 'none']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 5000,
            autoPlay: true,
            timeline: [
                { id: "eid35", tween: [ "style", "${_Text3}", "width", '163px', { fromValue: '163px'}], position: 3075, duration: 0 },
                { id: "eid23", tween: [ "style", "${_lb}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid24", tween: [ "style", "${_lb}", "display", 'block', { fromValue: 'none'}], position: 2960, duration: 0 },
                { id: "eid12", tween: [ "style", "${__1}", "top", '315px', { fromValue: '73px'}], position: 750, duration: 1500 },
                { id: "eid11", tween: [ "style", "${__1}", "left", '249px', { fromValue: '144px'}], position: 750, duration: 1500 },
                { id: "eid34", tween: [ "style", "${_Text2}", "display", 'none', { fromValue: 'block'}], position: 5000, duration: 0 },
                { id: "eid21", tween: [ "style", "${_ubt}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid22", tween: [ "style", "${_ubt}", "display", 'block', { fromValue: 'none'}], position: 2250, duration: 0 },
                { id: "eid3", tween: [ "style", "${_comment1}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid4", tween: [ "style", "${_comment1}", "display", 'block', { fromValue: 'none'}], position: 460, duration: 0 },
                { id: "eid20", tween: [ "style", "${_comment1}", "display", 'none', { fromValue: 'block'}], position: 2500, duration: 0 },
                { id: "eid28", tween: [ "style", "${_lb}", "width", '14.37%', { fromValue: '0%'}], position: 2960, duration: 1500 },
                { id: "eid17", tween: [ "style", "${_ub}", "top", '335px', { fromValue: '335px'}], position: 2250, duration: 0 },
                { id: "eid29", tween: [ "style", "${_lbt}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid30", tween: [ "style", "${_lbt}", "display", 'block', { fromValue: 'none'}], position: 4460, duration: 0 },
                { id: "eid18", tween: [ "style", "${__12}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid19", tween: [ "style", "${__12}", "display", 'block', { fromValue: 'none'}], position: 750, duration: 0 },
                { id: "eid5", tween: [ "style", "${__1}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid6", tween: [ "style", "${__1}", "display", 'block', { fromValue: 'none'}], position: 750, duration: 0 },
                { id: "eid16", tween: [ "style", "${__1}", "display", 'none', { fromValue: 'block'}], position: 2250, duration: 0 },
                { id: "eid1", tween: [ "style", "${_bgm}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid2", tween: [ "style", "${_bgm}", "display", 'block', { fromValue: 'none'}], position: 250, duration: 0 },
                { id: "eid31", tween: [ "style", "${_Text3}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid32", tween: [ "style", "${_Text3}", "display", 'block', { fromValue: 'none'}], position: 2750, duration: 0 },
                { id: "eid33", tween: [ "style", "${_Text3}", "display", 'none', { fromValue: 'block'}], position: 4631, duration: 0 },
                { id: "eid15", tween: [ "style", "${_ub}", "display", 'block', { fromValue: 'none'}], position: 2250, duration: 0 }            ]
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
})(jQuery, AdobeEdge, "EDGE-1112172029");
