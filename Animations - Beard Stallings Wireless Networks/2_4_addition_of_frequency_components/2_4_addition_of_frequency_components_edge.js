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
                id: '_1a',
                type: 'image',
                rect: ['128px', '33px','522px','212px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"1a.png",'0px','0px']
            },
            {
                id: '_1',
                type: 'image',
                rect: ['158px', '45px','484px','155px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"1.png",'0px','0px']
            },
            {
                id: '_2',
                type: 'image',
                rect: ['158px', '363px','484px','77px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"2.png",'0px','0px']
            },
            {
                id: '_2a',
                type: 'image',
                rect: ['128px', '303px','522px','212px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"2a.png",'0px','0px']
            },
            {
                id: '_3a',
                type: 'image',
                rect: ['116px', '577px','526px','224px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"3a.png",'0px','0px']
            },
            {
                id: '_3',
                display: 'block',
                type: 'image',
                rect: ['153px', '585px','497px','185px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"3.png",'0px','0px']
            },
            {
                id: '_12',
                display: 'block',
                type: 'image',
                rect: ['166px', '502px','484px','155px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"1.png",'0px','0px']
            },
            {
                id: '_22',
                display: 'block',
                type: 'image',
                rect: ['166px', '701px','484px','77px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"2.png",'0px','0px']
            },
            {
                id: 'Text',
                type: 'text',
                rect: ['160px', '881px','550px','59px','auto', 'auto'],
                text: "Figure 2.4 Addition of Frequency Components (<i>T = 1/f</i>)",
                font: ['Times New Roman, Times, serif', [119, "%"], "rgba(0,0,0,1)", "700", "none", ""]
            },
            {
                id: 'Text2',
                display: 'block',
                type: 'text',
                rect: ['257px', '854px','339px','39px','auto', 'auto'],
                text: "Click or Touch on Figure for Each Step of the Animation",
                align: "left",
                font: ['Times New Roman, Times, serif', [94, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: 'Text4',
                display: 'block',
                type: 'text',
                rect: ['349px', '250px'],
                text: "(a) <i>sin (2πft)</i>",
                align: "left",
                font: ['Times New Roman, Times, serif', [75, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: 'Text5',
                display: 'block',
                type: 'text',
                rect: ['341px', '515px'],
                text: "(b) <i>(1/3) sin (2π(3f)t)</i>",
                align: "left",
                font: ['Times New Roman, Times, serif', [75, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: 'Text6',
                display: 'block',
                type: 'text',
                rect: ['284px', '803px'],
                text: "c)  <i>(4/π) [sin (2πft) + (1/3) sin (2π(3f)t)]</i>",
                align: "left",
                font: ['Times New Roman, Times, serif', [75, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: 'Text7',
                display: 'block',
                type: 'text',
                rect: ['319px', '17px','231px','28px','auto', 'auto'],
                text: "Fundamental Frequency",
                align: "left",
                font: ['Times New Roman, Times, serif', [75, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: 'Text9',
                display: 'block',
                type: 'text',
                rect: ['341px', '289px','277px','28px','auto', 'auto'],
                text: "Harmonic at (3*<i>f</i>)",
                align: "left",
                font: ['Times New Roman, Times, serif', [75, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: 'Text10',
                display: 'block',
                type: 'text',
                rect: ['306px', '560px','191px','39px','auto', 'auto'],
                text: "Two signals added together",
                align: "left",
                font: ['Times New Roman, Times, serif', [75, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
            }],
            symbolInstances: [

            ]
        },
    states: {
        "Base State": {
            "${__22}": [
                ["style", "top", '709px'],
                ["style", "left", '158px'],
                ["style", "display", 'block']
            ],
            "${_Text5}": [
                ["style", "top", '526px'],
                ["style", "display", 'block'],
                ["style", "font-family", 'Times New Roman, Times, serif'],
                ["style", "left", '339px'],
                ["style", "width", '121px']
            ],
            "${__2a}": [
                ["style", "left", '128px'],
                ["style", "top", '-303px']
            ],
            "${__1a}": [
                ["style", "left", '128px'],
                ["style", "top", '-212px']
            ],
            "${_Text2}": [
                ["style", "top", '853px'],
                ["style", "width", '450px'],
                ["style", "display", 'block'],
                ["style", "font-family", 'Times New Roman, Times, serif'],
                ["style", "left", '203px'],
                ["style", "font-size", '94%']
            ],
            "${__3}": [
                ["style", "top", '585px'],
                ["style", "left", '153px'],
                ["style", "display", 'block']
            ],
            "${_Text7}": [
                ["style", "top", '19px'],
                ["style", "display", 'block'],
                ["style", "font-family", 'Times New Roman, Times, serif'],
                ["style", "left", '319px'],
                ["style", "font-size", '94%']
            ],
            "${__3a}": [
                ["style", "left", '116px'],
                ["style", "top", '-577px']
            ],
            "${__12}": [
                ["style", "top", '526px'],
                ["style", "left", '158px'],
                ["style", "display", 'block']
            ],
            "${_Text6}": [
                ["style", "top", '801px'],
                ["style", "display", 'block'],
                ["style", "font-family", 'Times New Roman, Times, serif'],
                ["style", "left", '298px'],
                ["style", "width", '204px']
            ],
            "${__1}": [
                ["style", "left", '158px'],
                ["style", "top", '1199px']
            ],
            "${_Text}": [
                ["style", "top", '881px'],
                ["style", "font-size", '119%'],
                ["style", "font-family", 'Times New Roman, Times, serif'],
                ["style", "font-weight", '700'],
                ["style", "left", '160px'],
                ["style", "width", '550px']
            ],
            "${_Text10}": [
                ["style", "top", '560px'],
                ["style", "font-size", '94%'],
                ["style", "display", 'block'],
                ["style", "height", '39px'],
                ["style", "font-family", 'Times New Roman, Times, serif'],
                ["style", "left", '306px'],
                ["style", "width", '204px']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(255,255,255,1)'],
                ["style", "width", '800px'],
                ["style", "height", '920px'],
                ["style", "overflow", 'hidden']
            ],
            "${_Text9}": [
                ["style", "top", '289px'],
                ["style", "display", 'block'],
                ["style", "font-family", 'Times New Roman, Times, serif'],
                ["style", "left", '341px'],
                ["style", "font-size", '94%']
            ],
            "${_Text4}": [
                ["style", "top", '258px'],
                ["style", "width", '80px'],
                ["style", "display", 'block'],
                ["style", "font-family", 'Times New Roman, Times, serif'],
                ["style", "left", '362px'],
                ["style", "font-size", '75%']
            ],
            "${__2}": [
                ["style", "left", '158px'],
                ["style", "top", '1199px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 13750,
            autoPlay: true,
            timeline: [
                { id: "eid60", tween: [ "style", "${__22}", "top", '642px', { fromValue: '709px'}], position: 11500, duration: 1500 },
                { id: "eid72", tween: [ "style", "${_Text9}", "font-size", '94%', { fromValue: '15px'}], position: 8712, duration: 0 },
                { id: "eid66", tween: [ "style", "${_Text2}", "display", 'none', { fromValue: 'block'}], position: 13750, duration: 0 },
                { id: "eid53", tween: [ "style", "${__12}", "top", '600px', { fromValue: '526px'}], position: 11500, duration: 1500 },
                { id: "eid85", tween: [ "style", "${_Text6}", "width", '204px', { fromValue: '204px'}], position: 13631, duration: 0 },
                { id: "eid74", tween: [ "style", "${_Text7}", "font-size", '94%', { fromValue: '15px'}], position: 4082, duration: 0 },
                { id: "eid27", tween: [ "style", "${_Text5}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid28", tween: [ "style", "${_Text5}", "display", 'block', { fromValue: 'none'}], position: 6500, duration: 0 },
                { id: "eid78", tween: [ "style", "${_Text5}", "left", '339px', { fromValue: '339px'}], position: 10000, duration: 0 },
                { id: "eid40", tween: [ "style", "${_Text6}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid41", tween: [ "style", "${_Text6}", "display", 'block', { fromValue: 'none'}], position: 11000, duration: 0 },
                { id: "eid57", tween: [ "style", "${__22}", "left", '158px', { fromValue: '158px'}], position: 11500, duration: 0 },
                { id: "eid79", tween: [ "style", "${_Text5}", "top", '526px', { fromValue: '526px'}], position: 10000, duration: 0 },
                { id: "eid39", tween: [ "style", "${__3a}", "top", '577px', { fromValue: '-577px'}], position: 9500, duration: 1500 },
                { id: "eid82", tween: [ "style", "${_Text4}", "width", '80px', { fromValue: '80px'}], position: 10000, duration: 0 },
                { id: "eid44", tween: [ "style", "${__22}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid55", tween: [ "style", "${__22}", "display", 'block', { fromValue: 'none'}], position: 11500, duration: 0 },
                { id: "eid62", tween: [ "style", "${__22}", "display", 'none', { fromValue: 'block'}], position: 13250, duration: 0 },
                { id: "eid49", tween: [ "style", "${_Text10}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid61", tween: [ "style", "${_Text10}", "display", 'block', { fromValue: 'none'}], position: 13250, duration: 0 },
                { id: "eid65", tween: [ "style", "${_Text10}", "display", 'none', { fromValue: 'block'}], position: 13750, duration: 0 },
                { id: "eid17", tween: [ "style", "${_Text4}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid18", tween: [ "style", "${_Text4}", "display", 'block', { fromValue: 'none'}], position: 1500, duration: 0 },
                { id: "eid16", tween: [ "style", "${__1a}", "top", '33px', { fromValue: '-212px'}], position: 0, duration: 1500 },
                { id: "eid77", tween: [ "style", "${_Text5}", "width", '121px', { fromValue: '121px'}], position: 10000, duration: 0 },
                { id: "eid30", tween: [ "style", "${__2}", "top", '363px', { fromValue: '1199px'}], position: 6750, duration: 1500 },
                { id: "eid31", tween: [ "style", "${_Text9}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid32", tween: [ "style", "${_Text9}", "display", 'block', { fromValue: 'none'}], position: 8500, duration: 0 },
                { id: "eid33", tween: [ "style", "${_Text9}", "display", 'none', { fromValue: 'block'}], position: 9000, duration: 0 },
                { id: "eid22", tween: [ "style", "${_Text7}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid23", tween: [ "style", "${_Text7}", "display", 'block', { fromValue: 'none'}], position: 4000, duration: 0 },
                { id: "eid24", tween: [ "style", "${_Text7}", "display", 'none', { fromValue: 'block'}], position: 4500, duration: 0 },
                { id: "eid42", tween: [ "style", "${__3}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid64", tween: [ "style", "${__3}", "display", 'block', { fromValue: 'none'}], position: 13250, duration: 0 },
                { id: "eid43", tween: [ "style", "${__12}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid45", tween: [ "style", "${__12}", "display", 'block', { fromValue: 'none'}], position: 11500, duration: 0 },
                { id: "eid63", tween: [ "style", "${__12}", "display", 'none', { fromValue: 'block'}], position: 13250, duration: 0 },
                { id: "eid84", tween: [ "style", "${_Text4}", "left", '362px', { fromValue: '362px'}], position: 10000, duration: 0 },
                { id: "eid81", tween: [ "style", "${_Text4}", "top", '258px', { fromValue: '258px'}], position: 10000, duration: 0 },
                { id: "eid26", tween: [ "style", "${__2a}", "top", '303px', { fromValue: '-303px'}], position: 5000, duration: 1500 },
                { id: "eid21", tween: [ "style", "${__1}", "top", '45px', { fromValue: '1199px'}], position: 1750, duration: 1500 },
                { id: "eid87", tween: [ "style", "${_Text6}", "top", '801px', { fromValue: '801px'}], position: 13631, duration: 0 },
                { id: "eid86", tween: [ "style", "${_Text6}", "left", '298px', { fromValue: '298px'}], position: 13631, duration: 0 },
                { id: "eid73", tween: [ "style", "${_Text7}", "top", '19px', { fromValue: '19px'}], position: 4082, duration: 0 }            ]
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
})(jQuery, AdobeEdge, "EDGE-650912018");
