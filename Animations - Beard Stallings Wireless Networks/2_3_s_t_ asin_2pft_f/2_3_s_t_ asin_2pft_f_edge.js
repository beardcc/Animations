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
                id: '_1',
                type: 'image',
                rect: ['75px', '29px','347px','272px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"1.png",'0px','0px']
            },
            {
                id: 'Text5',
                display: 'block',
                type: 'text',
                rect: ['624px', '26px','203px','21px','auto', 'auto'],
                text: "Signal has 1/2 of the amplitude.",
                align: "left",
                font: ['Times New Roman, Times, serif', [75, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: '_2',
                type: 'image',
                rect: ['540px', '37px','347px','272px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"2.png",'0px','0px']
            },
            {
                id: '_3',
                type: 'image',
                rect: ['75px', '364px','347px','272px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"3.png",'0px','0px']
            },
            {
                id: '_4',
                type: 'image',
                rect: ['531px', '360px','365px','281px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"4.png",'0px','0px']
            },
            {
                id: '_2a',
                display: 'block',
                type: 'image',
                rect: ['377px', '118px','231px','41px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"2a.png",'0px','0px']
            },
            {
                id: '_3a',
                display: 'block',
                type: 'image',
                rect: ['208px', '230px','53px','197px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"3a.png",'0px','0px']
            },
            {
                id: '_4a',
                display: 'block',
                type: 'image',
                rect: ['272px', '205px','309px','235px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"4a.png",'0px','0px']
            },
            {
                id: 'Text2',
                type: 'text',
                rect: ['351px', '715px','0','0','auto', 'auto'],
                text: "Figure 2.3  <i>s(t) = A sin (2πft)</i>",
                align: "left",
                font: ['Times New Roman, Times, serif', [119, "%"], "rgba(0,0,0,1)", "700", "none", "normal"]
            },
            {
                id: 'Text3',
                display: 'block',
                type: 'text',
                rect: ['333px', '678px','0','0','auto', 'auto'],
                text: "Click or Touch on Figure for Each Step of the Animation",
                align: "left",
                font: ['Times New Roman, Times, serif', [94, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: 'Text4',
                display: 'block',
                type: 'text',
                rect: ['183px', '26px','89px','21px','auto', 'auto'],
                text: "Base  Signal",
                align: "left",
                font: ['Times New Roman, Times, serif', [75, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: 'Text6',
                display: 'block',
                type: 'text',
                rect: ['249px', '334px','220px','41px','auto', 'auto'],
                text: "Period is 0.5 sec, which is half  as long. So frequency is doubled.",
                align: "left",
                font: ['Times New Roman, Times, serif', [75, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: 'Text7',
                display: 'block',
                type: 'text',
                rect: ['512px', '335px','0','0','auto', 'auto'],
                text: "Phase has been shifted. So <i>s(t)</i> is not zero at <i>t</i>=O.",
                align: "left",
                font: ['Times New Roman, Times, serif', [75, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
            }],
            symbolInstances: [

            ]
        },
    states: {
        "Base State": {
            "${_Text7}": [
                ["style", "top", '335px'],
                ["style", "width", '202px'],
                ["style", "display", 'block'],
                ["style", "font-family", 'Times New Roman, Times, serif'],
                ["style", "left", '512px'],
                ["style", "font-size", '94%']
            ],
            "${__4}": [
                ["style", "left", '531px'],
                ["style", "top", '360px']
            ],
            "${__3}": [
                ["style", "left", '75px'],
                ["style", "top", '364px']
            ],
            "${__3a}": [
                ["style", "height", '197px'],
                ["style", "top", '230px'],
                ["style", "left", '208px'],
                ["style", "display", 'block']
            ],
            "${__2}": [
                ["style", "top", '37px'],
                ["style", "left", '540px']
            ],
            "${_Text2}": [
                ["style", "top", '715px'],
                ["style", "font-size", '119%'],
                ["style", "font-family", 'Times New Roman, Times, serif'],
                ["style", "height", '41px'],
                ["style", "font-weight", '700'],
                ["style", "left", '351px'],
                ["style", "width", '322px']
            ],
            "${_Text6}": [
                ["style", "top", '334px'],
                ["style", "width", '263px'],
                ["style", "height", '41px'],
                ["style", "display", 'block'],
                ["style", "font-family", 'Times New Roman, Times, serif'],
                ["style", "left", '249px'],
                ["style", "font-size", '94%']
            ],
            "${__1}": [
                ["style", "left", '75px'],
                ["style", "top", '29px']
            ],
            "${__2a}": [
                ["style", "top", '118px'],
                ["style", "display", 'block'],
                ["style", "height", '41px'],
                ["style", "left", '377px'],
                ["style", "width", '231px']
            ],
            "${__4a}": [
                ["style", "top", '205px'],
                ["style", "display", 'block'],
                ["style", "height", '235px'],
                ["style", "left", '272px'],
                ["style", "width", '309px']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(255,255,255,1)'],
                ["style", "overflow", 'hidden'],
                ["style", "height", '780px'],
                ["style", "width", '1000px']
            ],
            "${_Text3}": [
                ["style", "top", '684px'],
                ["style", "width", '398px'],
                ["style", "display", 'block'],
                ["style", "font-family", 'Times New Roman, Times, serif'],
                ["style", "left", '294px'],
                ["style", "font-size", '94%']
            ],
            "${_Text5}": [
                ["style", "top", '26px'],
                ["style", "width", '250px'],
                ["style", "display", 'block'],
                ["style", "font-family", 'Times New Roman, Times, serif'],
                ["style", "left", '624px'],
                ["style", "font-size", '94%']
            ],
            "${_Text4}": [
                ["style", "top", '26px'],
                ["style", "width", '89px'],
                ["style", "height", '21px'],
                ["style", "display", 'block'],
                ["style", "font-family", 'Times New Roman, Times, serif'],
                ["style", "left", '218px'],
                ["style", "font-size", '94%']
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
                { id: "eid44", tween: [ "style", "${_Text3}", "width", '398px', { fromValue: '398px'}], position: 0, duration: 0 },
                { id: "eid31", tween: [ "style", "${_Text6}", "font-size", '94%', { fromValue: '15px'}], position: 3000, duration: 0 },
                { id: "eid28", tween: [ "style", "${_Text4}", "font-size", '94%', { fromValue: '15px'}], position: 500, duration: 0 },
                { id: "eid32", tween: [ "style", "${_Text6}", "width", '263px', { fromValue: '263px'}], position: 3000, duration: 0 },
                { id: "eid37", tween: [ "style", "${_Text7}", "font-size", '94%', { fromValue: '15px'}], position: 4500, duration: 0 },
                { id: "eid12", tween: [ "style", "${_Text6}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid13", tween: [ "style", "${_Text6}", "display", 'block', { fromValue: 'none'}], position: 3000, duration: 0 },
                { id: "eid14", tween: [ "style", "${_Text6}", "display", 'none', { fromValue: 'block'}], position: 3750, duration: 0 },
                { id: "eid10", tween: [ "style", "${__3a}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid11", tween: [ "style", "${__3a}", "display", 'block', { fromValue: 'none'}], position: 3000, duration: 0 },
                { id: "eid15", tween: [ "style", "${__3a}", "display", 'none', { fromValue: 'block'}], position: 3750, duration: 0 },
                { id: "eid1", tween: [ "style", "${_Text4}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid2", tween: [ "style", "${_Text4}", "display", 'block', { fromValue: 'none'}], position: 500, duration: 0 },
                { id: "eid3", tween: [ "style", "${_Text4}", "display", 'none', { fromValue: 'block'}], position: 1000, duration: 0 },
                { id: "eid4", tween: [ "style", "${_Text5}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid7", tween: [ "style", "${_Text5}", "display", 'block', { fromValue: 'none'}], position: 1500, duration: 0 },
                { id: "eid9", tween: [ "style", "${_Text5}", "display", 'none', { fromValue: 'block'}], position: 2250, duration: 0 },
                { id: "eid5", tween: [ "style", "${__2a}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid6", tween: [ "style", "${__2a}", "display", 'block', { fromValue: 'none'}], position: 1500, duration: 0 },
                { id: "eid8", tween: [ "style", "${__2a}", "display", 'none', { fromValue: 'block'}], position: 2250, duration: 0 },
                { id: "eid18", tween: [ "style", "${_Text7}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid19", tween: [ "style", "${_Text7}", "display", 'block', { fromValue: 'none'}], position: 4500, duration: 0 },
                { id: "eid22", tween: [ "style", "${_Text7}", "display", 'none', { fromValue: 'block'}], position: 4750, duration: 0 },
                { id: "eid38", tween: [ "style", "${_Text7}", "width", '202px', { fromValue: '202px'}], position: 4620, duration: 0 },
                { id: "eid16", tween: [ "style", "${__4a}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid17", tween: [ "style", "${__4a}", "display", 'block', { fromValue: 'none'}], position: 4500, duration: 0 },
                { id: "eid21", tween: [ "style", "${__4a}", "display", 'none', { fromValue: 'block'}], position: 4750, duration: 0 },
                { id: "eid25", tween: [ "style", "${_Text4}", "left", '218px', { fromValue: '218px'}], position: 585, duration: 0 },
                { id: "eid20", tween: [ "style", "${_Text3}", "display", 'none', { fromValue: 'block'}], position: 5000, duration: 0 },
                { id: "eid47", tween: [ "style", "${_Text3}", "top", '684px', { fromValue: '684px'}], position: 0, duration: 0 },
                { id: "eid30", tween: [ "style", "${_Text5}", "width", '250px', { fromValue: '250px'}], position: 1750, duration: 0 },
                { id: "eid45", tween: [ "style", "${_Text3}", "left", '294px', { fromValue: '294px'}], position: 0, duration: 0 },
                { id: "eid29", tween: [ "style", "${_Text5}", "font-size", '94%', { fromValue: '15px'}], position: 1750, duration: 0 }            ]
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
})(jQuery, AdobeEdge, "EDGE-648000584");
