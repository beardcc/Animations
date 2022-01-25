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
                id: '_2b',
                display: 'block',
                type: 'image',
                rect: ['482px', '93px','29%','13.2%','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"2b.png",'0%','0%','203px','59px']
            },
            {
                id: 'Text10',
                display: 'block',
                type: 'text',
                rect: ['525px', '183px','175px','59px','auto', 'auto'],
                text: "Power in direction B. More power in direction B due to directional antenna.",
                align: "left",
                font: ['\'Times New Roman\', Times, serif', [94, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: 'arrow',
                display: 'block',
                type: 'image',
                rect: ['642px', '126px','10px','59px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"arrow.png",'0px','0px'],
                transform: [[],['25']]
            },
            {
                id: 'Omni',
                display: 'block',
                type: 'image',
                rect: ['51px', '41px','222px','216px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"Omni.png",'0px','0px','100%','100%']
            },
            {
                id: 'dir',
                display: 'block',
                type: 'image',
                rect: ['444px', '94px','149px','109px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"dir.png",'0px','0px']
            },
            {
                id: '_1a',
                display: 'block',
                type: 'image',
                rect: ['156px', '29px','22.6%','28.1%','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"1a.png",'0%','0%','158px','126px']
            },
            {
                id: '_1b',
                display: 'block',
                type: 'image',
                rect: ['159px', '88px','25%','15.2%','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"1b.png",'0%','0%','175px','68px']
            },
            {
                id: '_2a',
                display: 'block',
                type: 'image',
                rect: ['479px', '52px','25%','21.7%','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"2a.png",'0%','0%','175px','97px']
            },
            {
                id: 'Text9',
                display: 'block',
                type: 'text',
                rect: ['558px', '29px','143px','33px','auto', 'auto'],
                text: "Power in direction A.",
                align: "left",
                font: ['\'Times New Roman\', Times, serif', [94, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: 'bg',
                type: 'image',
                rect: ['18px', '-3px','612px','342px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"bg.png",'0px','0px']
            },
            {
                id: 'Text4',
                display: 'block',
                type: 'text',
                rect: ['143px', '368px','414px','21px','auto', 'auto'],
                text: "Click or Touch on the Figure for Each Step of the Animation",
                align: "left",
                font: ['Times New Roman, Times, serif', [94, "%"], "rgba(0,0,0,1)", "700", "none", "normal"]
            },
            {
                id: 'Text5',
                type: 'text',
                rect: ['175px', '398px','392px','33px','auto', 'auto'],
                text: "Figure 5.2 Antenna Radiation Patterns",
                align: "left",
                font: ['\'Times New Roman\', Times, serif', [119, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: 'Text8',
                display: 'block',
                type: 'text',
                rect: ['324px', '29px','158px','46px','auto', 'auto'],
                text: "Power in direction B. Since omnidirectional, both are the same.",
                align: "left",
                font: ['\'Times New Roman\', Times, serif', [94, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: 'Text6',
                display: 'block',
                type: 'text',
                rect: ['291px', '60px','146px','33px','auto', 'auto'],
                text: "Power in direction A.",
                align: "left",
                font: ['\'Times New Roman\', Times, serif', [94, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
            }],
            symbolInstances: [

            ]
        },
    states: {
        "Base State": {
            "${_Text4}": [
                ["style", "top", '377px'],
                ["style", "font-size", '94%'],
                ["style", "font-family", 'Times New Roman, Times, serif'],
                ["style", "display", 'block'],
                ["style", "font-weight", '700'],
                ["style", "left", '139px'],
                ["style", "width", '471px']
            ],
            "${__1b}": [
                ["style", "display", 'block'],
                ["style", "top", '88px'],
                ["style", "left", '159px'],
                ["style", "width", '0%']
            ],
            "${_Omni}": [
                ["style", "top", '147px'],
                ["style", "display", 'block'],
                ["style", "height", '0px'],
                ["style", "left", '163px'],
                ["style", "width", '0px']
            ],
            "${_arrow}": [
                ["style", "top", '126px'],
                ["transform", "rotateZ", '25deg'],
                ["style", "height", '59px'],
                ["style", "left", '642px'],
                ["style", "display", 'block']
            ],
            "${_Text6}": [
                ["style", "top", '60px'],
                ["style", "display", 'block'],
                ["style", "font-size", '94%'],
                ["style", "left", '291px'],
                ["style", "width", '146px']
            ],
            "${_Text8}": [
                ["style", "display", 'block'],
                ["style", "top", '14px'],
                ["style", "left", '314px'],
                ["style", "width", '158px']
            ],
            "${_Text10}": [
                ["style", "display", 'block'],
                ["style", "left", '525px'],
                ["style", "width", '175px']
            ],
            "${_bg}": [
                ["style", "left", '18px'],
                ["style", "top", '-3px']
            ],
            "${_dir}": [
                ["style", "top", '146px'],
                ["style", "display", 'block'],
                ["style", "height", '0px'],
                ["style", "left", '487px'],
                ["style", "width", '0px']
            ],
            "${__2a}": [
                ["style", "display", 'block'],
                ["style", "top", '52px'],
                ["style", "left", '479px'],
                ["style", "width", '0%']
            ],
            "${_Text5}": [
                ["style", "top", '398px'],
                ["style", "font-size", '119%'],
                ["style", "left", '175px'],
                ["style", "width", '392px']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(255,255,255,1)'],
                ["style", "overflow", 'hidden'],
                ["style", "height", '448px'],
                ["style", "width", '700px']
            ],
            "${_Text9}": [
                ["style", "display", 'block'],
                ["style", "top", '29px'],
                ["style", "left", '558px'],
                ["style", "width", '143px']
            ],
            "${__2b}": [
                ["style", "display", 'block'],
                ["style", "top", '93px'],
                ["style", "left", '482px'],
                ["style", "width", '0%']
            ],
            "${__1a}": [
                ["style", "display", 'block'],
                ["style", "top", '29px'],
                ["style", "left", '156px'],
                ["style", "width", '0%']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 10250,
            autoPlay: true,
            timeline: [
                { id: "eid50", tween: [ "style", "${__2b}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid51", tween: [ "style", "${__2b}", "display", 'block', { fromValue: 'none'}], position: 8500, duration: 0 },
                { id: "eid32", tween: [ "style", "${_dir}", "width", '149px', { fromValue: '0px'}], position: 5250, duration: 1500 },
                { id: "eid1", tween: [ "style", "${_Omni}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid2", tween: [ "style", "${_Omni}", "display", 'block', { fromValue: 'none'}], position: 250, duration: 0 },
                { id: "eid69", tween: [ "style", "${_Text8}", "width", '158px', { fromValue: '158px'}], position: 4665, duration: 0 },
                { id: "eid36", tween: [ "style", "${_dir}", "left", '444px', { fromValue: '487px'}], position: 5250, duration: 1500 },
                { id: "eid6", tween: [ "style", "${_Omni}", "height", '216px', { fromValue: '0px'}], position: 250, duration: 1500 },
                { id: "eid25", tween: [ "style", "${__1b}", "width", '25%', { fromValue: '0%'}], position: 3500, duration: 1000 },
                { id: "eid70", tween: [ "style", "${_Text8}", "left", '314px', { fromValue: '314px'}], position: 4665, duration: 0 },
                { id: "eid21", tween: [ "style", "${_Text6}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid22", tween: [ "style", "${_Text6}", "display", 'block', { fromValue: 'none'}], position: 2930, duration: 0 },
                { id: "eid23", tween: [ "style", "${_Text6}", "display", 'none', { fromValue: 'block'}], position: 3250, duration: 0 },
                { id: "eid28", tween: [ "style", "${_Text8}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid29", tween: [ "style", "${_Text8}", "display", 'block', { fromValue: 'none'}], position: 4555, duration: 0 },
                { id: "eid30", tween: [ "style", "${_Text8}", "display", 'none', { fromValue: 'block'}], position: 5000, duration: 0 },
                { id: "eid4", tween: [ "style", "${_Omni}", "width", '222px', { fromValue: '0px'}], position: 250, duration: 1500 },
                { id: "eid19", tween: [ "style", "${__1a}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid20", tween: [ "style", "${__1a}", "display", 'block', { fromValue: 'none'}], position: 1875, duration: 0 },
                { id: "eid72", tween: [ "style", "${_Text4}", "width", '474px', { fromValue: '471px'}], position: 3075, duration: 2095 },
                { id: "eid49", tween: [ "style", "${__2b}", "width", '29%', { fromValue: '0%'}], position: 8500, duration: 1000 },
                { id: "eid52", tween: [ "style", "${_Text10}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid55", tween: [ "style", "${_Text10}", "display", 'block', { fromValue: 'none'}], position: 9565, duration: 0 },
                { id: "eid57", tween: [ "style", "${_Text10}", "display", 'none', { fromValue: 'block'}], position: 10000, duration: 0 },
                { id: "eid58", tween: [ "style", "${_Text4}", "display", 'none', { fromValue: 'block'}], position: 10250, duration: 0 },
                { id: "eid34", tween: [ "style", "${_dir}", "height", '109px', { fromValue: '0px'}], position: 5250, duration: 1500 },
                { id: "eid38", tween: [ "style", "${_dir}", "top", '94px', { fromValue: '146px'}], position: 5250, duration: 1500 },
                { id: "eid60", tween: [ "style", "${_Text4}", "top", '377px', { fromValue: '377px'}], position: 5170, duration: 0 },
                { id: "eid18", tween: [ "style", "${__1a}", "width", '22.58%', { fromValue: '0%'}], position: 1875, duration: 1000 },
                { id: "eid43", tween: [ "style", "${_Text9}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid44", tween: [ "style", "${_Text9}", "display", 'block', { fromValue: 'none'}], position: 7878, duration: 0 },
                { id: "eid45", tween: [ "style", "${_Text9}", "display", 'none', { fromValue: 'block'}], position: 8250, duration: 0 },
                { id: "eid16", tween: [ "style", "${_Omni}", "top", '41px', { fromValue: '147px'}], position: 250, duration: 1500 },
                { id: "eid46", tween: [ "style", "${__2a}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid47", tween: [ "style", "${__2a}", "display", 'block', { fromValue: 'none'}], position: 6825, duration: 0 },
                { id: "eid15", tween: [ "style", "${_Omni}", "left", '51px', { fromValue: '163px'}], position: 250, duration: 1500 },
                { id: "eid65", tween: [ "style", "${_Text4}", "left", '139px', { fromValue: '139px'}], position: 5170, duration: 0 },
                { id: "eid39", tween: [ "style", "${_dir}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid40", tween: [ "style", "${_dir}", "display", 'block', { fromValue: 'none'}], position: 5250, duration: 0 },
                { id: "eid71", tween: [ "style", "${_Text8}", "top", '14px', { fromValue: '14px'}], position: 4665, duration: 0 },
                { id: "eid53", tween: [ "style", "${_arrow}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid54", tween: [ "style", "${_arrow}", "display", 'block', { fromValue: 'none'}], position: 9660, duration: 0 },
                { id: "eid56", tween: [ "style", "${_arrow}", "display", 'none', { fromValue: 'block'}], position: 10000, duration: 0 },
                { id: "eid42", tween: [ "style", "${__2a}", "width", '25%', { fromValue: '0%'}], position: 6825, duration: 1000 },
                { id: "eid26", tween: [ "style", "${__1b}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid27", tween: [ "style", "${__1b}", "display", 'block', { fromValue: 'none'}], position: 3500, duration: 0 }            ]
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
})(jQuery, AdobeEdge, "EDGE-47558764");
