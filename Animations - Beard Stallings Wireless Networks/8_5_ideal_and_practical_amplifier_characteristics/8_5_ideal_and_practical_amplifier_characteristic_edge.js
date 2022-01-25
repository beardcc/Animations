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
                id: 'ideal-label',
                display: 'block',
                type: 'image',
                rect: ['267px', '111px','92px','59px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"ideal-label.png",'0px','0px']
            },
            {
                id: 'Text3',
                display: 'block',
                type: 'text',
                rect: ['287px', '53px','202px','auto','auto', 'auto'],
                text: "Ideal amplifier amplifies all voltages by the same amount. This shows as a linear curve.",
                align: "left",
                font: ['\'Times New Roman\', Times, serif', [94, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: 'practical-label',
                display: 'block',
                type: 'image',
                rect: ['350px', '163px','151px','59px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"practical-label.png",'0px','0px']
            },
            {
                id: 'Text4',
                display: 'block',
                type: 'text',
                rect: ['384px', '279px','170px','auto','auto', 'auto'],
                text: "A practical amplifier has a maximum output voltage, so its shape is not linear.",
                align: "left",
                font: ['\'Times New Roman\', Times, serif', [94, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: 'avg-peak',
                display: 'block',
                type: 'image',
                rect: ['67px', '188px','166px','68px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"avg-peak.png",'0px','0px']
            },
            {
                id: 'linear-label',
                display: 'block',
                type: 'image',
                rect: ['84px', '117px','109px','109px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"linear-label.png",'0px','0px']
            },
            {
                id: 'Text5',
                display: 'block',
                type: 'text',
                rect: ['94px', '62px','290px','auto','auto', 'auto'],
                text: "It will have an approximately linear shape in this region. If signal voltages stay in this range, they will not be distorted.",
                align: "left",
                font: ['\'Times New Roman\', Times, serif', [94, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: 'Text2',
                display: 'block',
                type: 'text',
                rect: ['101px', '370px','auto','auto','auto', 'auto'],
                text: "Click or Touch on Figure for Each Step  of the Animation",
                align: "left",
                font: ['\'Times New Roman\', Times, serif', [94, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: 'Text',
                type: 'text',
                rect: ['57px', '395px','auto','auto','auto', 'auto'],
                text: "Figure 8.5 Ideal and Practical Amplifier Characteristics",
                font: ['Times New Roman, Times, serif', [119, "%"], "rgba(0,0,0,1)", "700", "none", ""]
            },
            {
                id: 'axis2',
                display: 'block',
                type: 'image',
                rect: ['27px', '62px','520px','237px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"axis2.png",'0px','0px']
            },
            {
                id: 'ideal3',
                display: 'block',
                type: 'image',
                rect: ['68px', '85px','83.3%','40%','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"ideal.png",'0%','0%','475px','auto']
            },
            {
                id: 'practical4',
                display: 'block',
                type: 'image',
                rect: ['69px', '158px','83.3%','23.3%','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"practical.png",'0%','0%','475px','auto']
            }],
            symbolInstances: [

            ]
        },
    states: {
        "Base State": {
            "${_ideal3}": [
                ["style", "top", '85px'],
                ["style", "display", 'block'],
                ["style", "background-size", [475,'auto'], {valueTemplate:'@@0@@px @@1@@'} ],
                ["style", "left", '68px'],
                ["style", "width", '4.04%']
            ],
            "${_Text3}": [
                ["style", "top", '53px'],
                ["style", "display", 'block'],
                ["style", "left", '287px'],
                ["style", "width", '192px']
            ],
            "${_practical4}": [
                ["style", "top", '158px'],
                ["style", "display", 'block'],
                ["style", "background-size", [475,'auto'], {valueTemplate:'@@0@@px @@1@@'} ],
                ["style", "left", '69px'],
                ["style", "width", '2.46%']
            ],
            "${_linear-label}": [
                ["style", "top", '117px'],
                ["style", "left", '84px'],
                ["style", "display", 'block']
            ],
            "${_Text5}": [
                ["style", "top", '40px'],
                ["style", "display", 'block'],
                ["style", "left", '94px'],
                ["style", "width", '290px']
            ],
            "${_ideal-label}": [
                ["style", "top", '111px'],
                ["style", "left", '267px'],
                ["style", "display", 'block']
            ],
            "${_avg-peak}": [
                ["style", "top", '188px'],
                ["style", "left", '67px'],
                ["style", "display", 'block']
            ],
            "${_Text}": [
                ["style", "top", '395px'],
                ["style", "font-family", 'Times New Roman, Times, serif'],
                ["style", "font-weight", '700'],
                ["style", "left", '57px'],
                ["style", "font-size", '119%']
            ],
            "${_axis2}": [
                ["style", "top", '62px'],
                ["style", "left", '27px'],
                ["style", "display", 'block']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(255,255,255,1)'],
                ["style", "width", '570px'],
                ["style", "height", '430px'],
                ["style", "overflow", 'hidden']
            ],
            "${_practical-label}": [
                ["style", "top", '163px'],
                ["style", "left", '350px'],
                ["style", "display", 'block']
            ],
            "${_Text2}": [
                ["style", "top", '370px'],
                ["style", "display", 'block'],
                ["style", "left", '101px'],
                ["style", "font-size", '94%']
            ],
            "${_Text4}": [
                ["style", "top", '279px'],
                ["style", "display", 'block'],
                ["style", "left", '384px'],
                ["style", "width", '170px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 4440,
            autoPlay: true,
            timeline: [
                { id: "eid10", tween: [ "style", "${_ideal-label}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid11", tween: [ "style", "${_ideal-label}", "display", 'block', { fromValue: 'none'}], position: 1625, duration: 0 },
                { id: "eid82", tween: [ "style", "${_Text3}", "width", '192px', { fromValue: '192px'}], position: 1950, duration: 0 },
                { id: "eid16", tween: [ "style", "${_Text3}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid17", tween: [ "style", "${_Text3}", "display", 'block', { fromValue: 'none'}], position: 1845, duration: 0 },
                { id: "eid39", tween: [ "style", "${_Text3}", "display", 'none', { fromValue: 'block'}], position: 2070, duration: 0 },
                { id: "eid30", tween: [ "style", "${_linear-label}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid31", tween: [ "style", "${_linear-label}", "display", 'block', { fromValue: 'none'}], position: 4000, duration: 0 },
                { id: "eid68", tween: [ "style", "${_ideal3}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid69", tween: [ "style", "${_ideal3}", "display", 'block', { fromValue: 'none'}], position: 450, duration: 0 },
                { id: "eid37", tween: [ "style", "${_Text5}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid38", tween: [ "style", "${_Text5}", "display", 'block', { fromValue: 'none'}], position: 4250, duration: 0 },
                { id: "eid43", tween: [ "style", "${_Text5}", "display", 'none', { fromValue: 'block'}], position: 4440, duration: 0 },
                { id: "eid44", tween: [ "style", "${_Text2}", "display", 'none', { fromValue: 'block'}], position: 4440, duration: 0 },
                { id: "eid24", tween: [ "style", "${_practical-label}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid25", tween: [ "style", "${_practical-label}", "display", 'block', { fromValue: 'none'}], position: 3295, duration: 0 },
                { id: "eid73", tween: [ "style", "${_ideal3}", "width", '83.34%', { fromValue: '4.04%'}], position: 450, duration: 1000 },
                { id: "eid79", tween: [ "style", "${_practical4}", "width", '83.34%', { fromValue: '2.46%'}], position: 2070, duration: 1000 },
                { id: "eid1", tween: [ "style", "${_axis2}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid2", tween: [ "style", "${_axis2}", "display", 'block', { fromValue: 'none'}], position: 210, duration: 0 },
                { id: "eid81", tween: [ "style", "${_Text5}", "top", '40px', { fromValue: '40px'}], position: 4329, duration: 0 },
                { id: "eid28", tween: [ "style", "${_avg-peak}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid29", tween: [ "style", "${_avg-peak}", "display", 'block', { fromValue: 'none'}], position: 3750, duration: 0 },
                { id: "eid26", tween: [ "style", "${_Text4}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid27", tween: [ "style", "${_Text4}", "display", 'block', { fromValue: 'none'}], position: 3550, duration: 0 },
                { id: "eid42", tween: [ "style", "${_Text4}", "display", 'none', { fromValue: 'block'}], position: 3750, duration: 0 },
                { id: "eid74", tween: [ "style", "${_practical4}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid75", tween: [ "style", "${_practical4}", "display", 'block', { fromValue: 'none'}], position: 2070, duration: 0 }            ]
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
})(jQuery, AdobeEdge, "EDGE-1497701713");
