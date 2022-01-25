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
                id: '_4',
                type: 'image',
                rect: ['144px', '26px','511px','200px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"4.png",'0px','0px']
            },
            {
                id: '_3',
                type: 'image',
                rect: ['178px', '642px','473px','164px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"3.png",'0px','0px']
            },
            {
                id: '_4Copy',
                type: 'image',
                rect: ['144px', '340px','511px','200px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"4.png",'0px','0px']
            },
            {
                id: '_4Copy3',
                type: 'image',
                rect: ['144px', '632px','511px','200px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"4.png",'0px','0px']
            },
            {
                id: '_1',
                type: 'image',
                rect: ['178px', '31px','477px','180px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"1.png",'0px','0px']
            },
            {
                id: 'Text8',
                display: 'block',
                type: 'text',
                rect: ['302px', '20px','207px','24px','auto', 'auto'],
                text: "With frequencies <i>f</i>, 3<i>f</i>, and 5<i>f</i>",
                align: "left",
                font: ['Times New Roman, Times, serif', [75, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: '_2',
                type: 'image',
                rect: ['175px', '322px','480px','210px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"2.png",'0px','0px']
            },
            {
                id: 'Text',
                type: 'text',
                rect: ['144px', '913px','0','0','auto', 'auto'],
                text: "Figure 2.5 Frequency Components of Square Wave (<i>T = 1/f</i>)",
                font: ['Times New Roman, Times, serif', [119, "%"], "rgba(0,0,0,1)", "700", "none", ""]
            },
            {
                id: 'Text2',
                display: 'block',
                type: 'text',
                rect: ['208px', '249px','0','0','auto', 'auto'],
                text: "(a) <i>(4/π) [sin (2πft) + (1/3) sin (2π(3f)t) + (1/5) sin (2π(5f)t)]</i>",
                font: ['Times New Roman, Times, serif', [75, "%"], "rgba(0,0,0,1)", "700", "none", ""]
            },
            {
                id: 'Text3',
                display: 'block',
                type: 'text',
                rect: ['161px', '564px','0','0','auto', 'auto'],
                text: "(b) <i>(4/π) [sin (2πft) + (1/3) sin (2π(3f)t) + (1/5) sin (2π(5f)t) + (1/7) sin (2π(7f)t)]</i>",
                align: "left",
                font: ['Times New Roman, Times, serif', [75, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: 'Text10',
                display: 'block',
                type: 'text',
                rect: ['303px', '615px','294px','17px','auto', 'auto'],
                text: "Wth infinte number of harmonics",
                align: "left",
                font: ['Times New Roman, Times, serif', [75, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: 'Text4',
                display: 'block',
                type: 'text',
                rect: ['274px', '849px','0','0','auto', 'auto'],
                text: "(c) <i>(4/π) (1/k) sin (2π(kf)t)</i>,     for <i>k</i> odd",
                align: "left",
                font: ['Times New Roman, Times, serif', [75, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: 'Text5',
                display: 'block',
                type: 'text',
                rect: ['236px', '894px','0','0','auto', 'auto'],
                text: "Click or Touch on Figure for Each Step of the Animation",
                align: "left",
                font: ['Times New Roman, Times, serif', [94, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: 'Text9',
                display: 'block',
                type: 'text',
                rect: ['288px', '310px','255px','24px','auto', 'auto'],
                text: "Now also with frequency 7<i>f</i>",
                align: "left",
                font: ['Times New Roman, Times, serif', [75, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
            }],
            symbolInstances: [

            ]
        },
    states: {
        "Base State": {
            "${_Text8}": [
                ["style", "top", '20px'],
                ["style", "font-size", '94%'],
                ["style", "display", 'block'],
                ["style", "font-family", 'Times New Roman, Times, serif'],
                ["style", "left", '302px'],
                ["style", "width", '270px']
            ],
            "${__4Copy3}": [
                ["style", "left", '144px'],
                ["style", "top", '1211px']
            ],
            "${__4}": [
                ["style", "left", '144px'],
                ["style", "top", '1211px']
            ],
            "${__3}": [
                ["style", "left", '178px'],
                ["style", "top", '-642px']
            ],
            "${_Text2}": [
                ["style", "top", '253px'],
                ["style", "width", '329px'],
                ["style", "font-family", 'Times New Roman, Times, serif'],
                ["style", "display", 'block'],
                ["style", "font-weight", '700'],
                ["style", "left", '235px'],
                ["style", "font-size", '75%']
            ],
            "${__2}": [
                ["style", "top", '-600px'],
                ["style", "left", '175px']
            ],
            "${_Text10}": [
                ["style", "top", '615px'],
                ["style", "display", 'block'],
                ["style", "font-family", 'Times New Roman, Times, serif'],
                ["style", "left", '303px'],
                ["style", "font-size", '94%']
            ],
            "${_Text5}": [
                ["style", "top", '890px'],
                ["style", "font-size", '94%'],
                ["style", "display", 'block'],
                ["style", "font-family", 'Times New Roman, Times, serif'],
                ["style", "left", '203px'],
                ["style", "width", '383px']
            ],
            "${__1}": [
                ["style", "left", '178px'],
                ["style", "top", '-600px']
            ],
            "${_Text}": [
                ["style", "top", '913px'],
                ["style", "width", '500px'],
                ["style", "font-family", 'Times New Roman, Times, serif'],
                ["style", "font-weight", '700'],
                ["style", "left", '144px'],
                ["style", "font-size", '119%']
            ],
            "${__4Copy}": [
                ["style", "left", '144px'],
                ["style", "top", '1211px']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(255,255,255,1)'],
                ["style", "width", '800px'],
                ["style", "height", '950px'],
                ["style", "overflow", 'visible']
            ],
            "${_Text9}": [
                ["style", "top", '310px'],
                ["style", "display", 'block'],
                ["style", "font-family", 'Times New Roman, Times, serif'],
                ["style", "left", '288px'],
                ["style", "font-size", '94%']
            ],
            "${_Text3}": [
                ["style", "top", '565px'],
                ["style", "display", 'block'],
                ["style", "font-family", 'Times New Roman, Times, serif'],
                ["style", "left", '203px'],
                ["style", "width", '427px']
            ],
            "${_Text4}": [
                ["style", "top", '852px'],
                ["style", "width", '211px'],
                ["style", "display", 'block'],
                ["style", "font-family", 'Times New Roman, Times, serif'],
                ["style", "left", '294px'],
                ["style", "font-size", '75%']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 13000,
            autoPlay: true,
            timeline: [
                { id: "eid61", tween: [ "style", "${_Text9}", "font-size", '94%', { fromValue: '15px'}], position: 8500, duration: 0 },
                { id: "eid20", tween: [ "style", "${_Text2}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid21", tween: [ "style", "${_Text2}", "display", 'block', { fromValue: 'none'}], position: 1750, duration: 0 },
                { id: "eid28", tween: [ "style", "${_Text8}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid29", tween: [ "style", "${_Text8}", "display", 'block', { fromValue: 'none'}], position: 4000, duration: 0 },
                { id: "eid30", tween: [ "style", "${_Text8}", "display", 'none', { fromValue: 'block'}], position: 4500, duration: 0 },
                { id: "eid62", tween: [ "style", "${_Text8}", "width", '270px', { fromValue: '270px'}], position: 4333, duration: 0 },
                { id: "eid75", tween: [ "style", "${_Text2}", "top", '253px', { fromValue: '253px'}], position: 4113, duration: 0 },
                { id: "eid27", tween: [ "style", "${__1}", "top", '44px', { fromValue: '-600px'}], position: 2000, duration: 1500 },
                { id: "eid78", tween: [ "style", "${_Text3}", "width", '427px', { fromValue: '427px'}], position: 8643, duration: 0 },
                { id: "eid48", tween: [ "style", "${_Text10}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid49", tween: [ "style", "${_Text10}", "display", 'block', { fromValue: 'none'}], position: 12500, duration: 0 },
                { id: "eid50", tween: [ "style", "${_Text10}", "display", 'none', { fromValue: 'block'}], position: 13000, duration: 0 },
                { id: "eid60", tween: [ "style", "${_Text10}", "font-size", '94%', { fromValue: '15px'}], position: 12903, duration: 0 },
                { id: "eid42", tween: [ "style", "${__4Copy3}", "top", '632px', { fromValue: '1211px'}], position: 9000, duration: 1500 },
                { id: "eid37", tween: [ "style", "${_Text9}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid38", tween: [ "style", "${_Text9}", "display", 'block', { fromValue: 'none'}], position: 8250, duration: 0 },
                { id: "eid40", tween: [ "style", "${_Text9}", "display", 'none', { fromValue: 'block'}], position: 8750, duration: 0 },
                { id: "eid33", tween: [ "style", "${_Text3}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid34", tween: [ "style", "${_Text3}", "display", 'block', { fromValue: 'none'}], position: 6250, duration: 0 },
                { id: "eid79", tween: [ "style", "${_Text4}", "width", '211px', { fromValue: '211px'}], position: 12288, duration: 0 },
                { id: "eid80", tween: [ "style", "${_Text4}", "left", '294px', { fromValue: '294px'}], position: 12288, duration: 0 },
                { id: "eid74", tween: [ "style", "${_Text2}", "left", '235px', { fromValue: '235px'}], position: 4113, duration: 0 },
                { id: "eid43", tween: [ "style", "${_Text4}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid44", tween: [ "style", "${_Text4}", "display", 'block', { fromValue: 'none'}], position: 10500, duration: 0 },
                { id: "eid66", tween: [ "style", "${_Stage}", "height", '950px', { fromValue: '950px'}], position: 4333, duration: 0 },
                { id: "eid51", tween: [ "style", "${_Text5}", "display", 'none', { fromValue: 'block'}], position: 13000, duration: 0 },
                { id: "eid36", tween: [ "style", "${__2}", "top", '322px', { fromValue: '-600px'}], position: 6500, duration: 1500 },
                { id: "eid69", tween: [ "style", "${_Text5}", "width", '383px', { fromValue: '383px'}], position: 2763, duration: 0 },
                { id: "eid70", tween: [ "style", "${_Text5}", "left", '203px', { fromValue: '203px'}], position: 2763, duration: 0 },
                { id: "eid19", tween: [ "style", "${__4}", "top", '39px', { fromValue: '1211px'}], position: 250, duration: 1500 },
                { id: "eid71", tween: [ "style", "${_Text5}", "top", '890px', { fromValue: '890px'}], position: 2763, duration: 0 },
                { id: "eid47", tween: [ "style", "${__3}", "top", '642px', { fromValue: '-642px'}], position: 10750, duration: 1500 },
                { id: "eid81", tween: [ "style", "${_Text4}", "top", '852px', { fromValue: '852px'}], position: 12288, duration: 0 },
                { id: "eid32", tween: [ "style", "${__4Copy}", "top", '340px', { fromValue: '1211px'}], position: 4750, duration: 1500 },
                { id: "eid77", tween: [ "style", "${_Text3}", "top", '565px', { fromValue: '565px'}], position: 8643, duration: 0 },
                { id: "eid76", tween: [ "style", "${_Text3}", "left", '203px', { fromValue: '203px'}], position: 8643, duration: 0 },
                { id: "eid63", tween: [ "style", "${_Text8}", "font-size", '94%', { fromValue: '15px'}], position: 4333, duration: 0 },
                { id: "eid73", tween: [ "style", "${_Text2}", "width", '329px', { fromValue: '329px'}], position: 4113, duration: 0 }            ]
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
})(jQuery, AdobeEdge, "EDGE-654427549");
