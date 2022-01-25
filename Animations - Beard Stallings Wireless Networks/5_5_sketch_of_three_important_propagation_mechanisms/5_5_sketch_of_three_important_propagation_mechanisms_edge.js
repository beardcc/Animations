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
                rect: ['54px', '471px','544px','auto','auto', 'auto'],
                text: "Figure 5.5 Sketch of Three Important Propagation Mechanisms:<br>Reflection(R), Scattering(S), Diffraction(D)",
                align: "center",
                font: ['Times New Roman, Times, serif', [119, "%"], "rgba(0,0,0,1)", "700", "none", ""]
            },
            {
                id: 'Text2',
                display: 'block',
                type: 'text',
                rect: ['110px', '446px','auto','auto','auto', 'auto'],
                text: "Click or Touch on Figure for Each Step of the Animation.",
                align: "left",
                font: ['Times New Roman, Times, serif', [94, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: 'main',
                display: 'block',
                type: 'image',
                rect: ['46px', '8px','559px','414px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"main.png",'0px','0px']
            },
            {
                id: 'car',
                display: 'block',
                type: 'image',
                rect: ['122px', '159px','94px','52px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"car.png",'0px','0px']
            },
            {
                id: 'ref-bulli',
                display: 'block',
                type: 'image',
                rect: ['454px', '381px','7.1%','7.4%','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"ref-bulli.png",'0%','0%','47px','39px']
            },
            {
                id: 'ref-long',
                display: 'block',
                type: 'image',
                rect: ['487px', '65px','1.7%','63.2%','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"ref-long.png",'0%','0%','256px','335px'],
                transform: [[],['-180']]
            },
            {
                id: 'ref-short',
                display: 'block',
                type: 'image',
                rect: ['260px', '63px','0.4%','20.9%','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"ref-short.png",'0%','0%','92px','111px'],
                transform: [[],['-180']]
            },
            {
                id: 'Text4',
                display: 'block',
                type: 'text',
                rect: ['81px', '80px','82px','auto','auto', 'auto'],
                text: "Signal arrives after reflections",
                align: "left",
                font: ['Times New Roman, Times, serif', [94, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: 'Text5',
                display: 'block',
                type: 'text',
                rect: ['245px', '79px','auto','auto','auto', 'auto'],
                text: "R",
                align: "left",
                font: ['Georgia, \'Times New Roman\', Times, serif', 18, "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: 'lamp-ver2',
                display: 'block',
                type: 'image',
                rect: ['388px', '409px','3.1%','2.3%','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"lamp-ver.png",'0%','0%','20px','252px'],
                transform: [[],['-180']]
            },
            {
                id: 'lamp-hor',
                display: 'block',
                type: 'image',
                rect: ['408px', '163px','1.4%','5.1%','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"lamp-hor.png",'0%','0%','225px','27px'],
                transform: [[],['-180']]
            },
            {
                id: 'Text6',
                display: 'block',
                type: 'text',
                rect: ['478', '100','auto','auto','auto', 'auto'],
                text: "From scattering off a lamp post",
                align: "left",
                font: ['Times New Roman, Times, serif', [94, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: 'dif-long',
                display: 'block',
                type: 'image',
                rect: ['339px', '413px','8.6%','2.2%','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"dif-long.png",'0%','0%','56px','223px'],
                transform: [[],['-181']]
            },
            {
                id: 'Text8',
                display: 'block',
                type: 'text',
                rect: ['348px', '329px','auto','auto','auto', 'auto'],
                text: "D",
                align: "left",
                font: ['Georgia, \'Times New Roman\', Times, serif', 18, "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: 'Text9',
                display: 'block',
                type: 'text',
                rect: ['161px', '222px','195px','auto','auto', 'auto'],
                text: "From diffraction around sharp building edge",
                align: "left",
                font: ['Times New Roman, Times, serif', 18, "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: 'dif-short',
                display: 'block',
                type: 'image',
                rect: ['352px', '182px','0%','7.9%','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"dif-short.png",'0%','0%','152px','42px'],
                transform: [[],['-180']]
            },
            {
                id: 'Text7',
                display: 'block',
                type: 'text',
                rect: ['400px', '189px','auto','auto','auto', 'auto'],
                text: "S",
                align: "left",
                font: ['Georgia, \'Times New Roman\', Times, serif', 18, "rgba(0,0,0,1)", "bold", "none", "normal"]
            }],
            symbolInstances: [

            ]
        },
    states: {
        "Base State": {
            "${_Text7}": [
                ["style", "top", '189px'],
                ["style", "display", 'block'],
                ["style", "left", '400px'],
                ["style", "font-size", '18px']
            ],
            "${_ref-long}": [
                ["style", "top", '65px'],
                ["transform", "rotateZ", '-180deg'],
                ["style", "display", 'block'],
                ["style", "background-position", [0,0], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "left", '480px'],
                ["style", "width", '1.7%']
            ],
            "${_lamp-hor}": [
                ["style", "top", '163px'],
                ["transform", "rotateZ", '-180deg'],
                ["style", "display", 'block'],
                ["style", "background-position", [0,0], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "left", '408px'],
                ["style", "width", '1.39%']
            ],
            "${_Text5}": [
                ["style", "top", '79px'],
                ["style", "display", 'block'],
                ["style", "left", '245px'],
                ["style", "font-size", '18px']
            ],
            "${_lamp-ver2}": [
                ["style", "top", '409px'],
                ["style", "display", 'block'],
                ["transform", "rotateZ", '-180deg'],
                ["style", "height", '2.26%'],
                ["style", "background-position", [0,0], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "left", '388px'],
                ["style", "width", '3.08%']
            ],
            "${_ref-short}": [
                ["style", "top", '63px'],
                ["transform", "rotateZ", '-180deg'],
                ["style", "display", 'block'],
                ["style", "background-position", [0,0], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "left", '266px'],
                ["style", "width", '0%']
            ],
            "${_dif-short}": [
                ["style", "top", '182px'],
                ["transform", "rotateZ", '-180deg'],
                ["style", "display", 'block'],
                ["style", "background-position", [0,0], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "left", '352px'],
                ["style", "width", '0%']
            ],
            "${_car}": [
                ["style", "top", '159px'],
                ["style", "left", '122px'],
                ["style", "display", 'block']
            ],
            "${_Text4}": [
                ["style", "top", '80px'],
                ["style", "display", 'block'],
                ["style", "font-family", 'Times New Roman, Times, serif'],
                ["style", "left", '81px'],
                ["style", "width", '82px']
            ],
            "${_ref-bulli}": [
                ["style", "top", '381px'],
                ["style", "display", 'block'],
                ["style", "background-position", [0,0], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "left", '454px'],
                ["style", "width", '0.93%']
            ],
            "${_Text6}": [
                ["style", "display", 'block'],
                ["style", "font-family", 'Times New Roman, Times, serif'],
                ["style", "left", '338px'],
                ["style", "top", '107px']
            ],
            "${_Text2}": [
                ["style", "top", '453px'],
                ["style", "display", 'block'],
                ["style", "font-family", 'Times New Roman, Times, serif'],
                ["style", "left", '140px'],
                ["style", "font-size", '94%']
            ],
            "${_Text}": [
                ["style", "top", '471px'],
                ["style", "text-align", 'center'],
                ["style", "width", '544px'],
                ["style", "font-weight", '700'],
                ["style", "font-family", 'Times New Roman, Times, serif'],
                ["style", "left", '54px'],
                ["style", "font-size", '119%']
            ],
            "${_dif-long}": [
                ["style", "top", '409px'],
                ["transform", "rotateZ", '-181deg'],
                ["style", "height", '2.26%'],
                ["style", "display", 'block'],
                ["style", "left", '337px'],
                ["style", "background-position", [0,0], {valueTemplate:'@@0@@% @@1@@%'} ]
            ],
            "${_main}": [
                ["style", "top", '8px'],
                ["style", "left", '46px'],
                ["style", "display", 'block']
            ],
            "${_Text9}": [
                ["style", "top", '227px'],
                ["style", "display", 'block'],
                ["style", "font-family", 'Times New Roman, Times, serif'],
                ["style", "left", '130px'],
                ["style", "width", '195px']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(255,255,255,1)'],
                ["style", "width", '650px'],
                ["style", "height", '530px'],
                ["style", "overflow", 'hidden']
            ],
            "${_Text8}": [
                ["style", "top", '329px'],
                ["style", "display", 'block'],
                ["style", "left", '348px'],
                ["style", "font-size", '18px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 9250,
            autoPlay: true,
            timeline: [
                { id: "eid162", tween: [ "style", "${_dif-long}", "height", '42.08%', { fromValue: '2.26%'}], position: 6810, duration: 900 },
                { id: "eid5", tween: [ "style", "${_ref-bulli}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid6", tween: [ "style", "${_ref-bulli}", "display", 'block', { fromValue: 'none'}], position: 610, duration: 0 },
                { id: "eid122", tween: [ "style", "${_lamp-ver2}", "top", '169px', { fromValue: '409px'}], position: 4068, duration: 1000 },
                { id: "eid17", tween: [ "style", "${_ref-bulli}", "background-position", [0,0], { valueTemplate: '@@0@@% @@1@@%', fromValue: [0,0]}], position: 610, duration: 0 },
                { id: "eid18", tween: [ "style", "${_ref-bulli}", "background-position", [0,0], { valueTemplate: '@@0@@% @@1@@%', fromValue: [0,0]}], position: 1410, duration: 0 },
                { id: "eid171", tween: [ "style", "${_dif-short}", "left", '200px', { fromValue: '352px'}], position: 7787, duration: 800 },
                { id: "eid19", tween: [ "style", "${_ref-bulli}", "width", '7.24%', { fromValue: '0.93%'}], position: 610, duration: 800 },
                { id: "eid79", tween: [ "style", "${_Text4}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid80", tween: [ "style", "${_Text4}", "display", 'block', { fromValue: 'none'}], position: 3844, duration: 0 },
                { id: "eid81", tween: [ "style", "${_Text4}", "display", 'none', { fromValue: 'block'}], position: 4068, duration: 0 },
                { id: "eid73", tween: [ "style", "${_ref-short}", "background-position", [0,0], { valueTemplate: '@@0@@% @@1@@%', fromValue: [0,0]}], position: 2570, duration: 0 },
                { id: "eid74", tween: [ "style", "${_ref-short}", "background-position", [0,0], { valueTemplate: '@@0@@% @@1@@%', fromValue: [0,0]}], position: 3370, duration: 0 },
                { id: "eid77", tween: [ "style", "${_Text5}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid78", tween: [ "style", "${_Text5}", "display", 'block', { fromValue: 'none'}], position: 3567, duration: 0 },
                { id: "eid48", tween: [ "style", "${_ref-long}", "background-position", [0,0], { valueTemplate: '@@0@@% @@1@@%', fromValue: [0,0]}], position: 1500, duration: 0 },
                { id: "eid49", tween: [ "style", "${_ref-long}", "background-position", [0,0], { valueTemplate: '@@0@@% @@1@@%', fromValue: [0,0]}], position: 2500, duration: 0 },
                { id: "eid84", tween: [ "style", "${_ref-short}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid85", tween: [ "style", "${_ref-short}", "display", 'block', { fromValue: 'none'}], position: 2570, duration: 0 },
                { id: "eid75", tween: [ "style", "${_ref-short}", "left", '174px', { fromValue: '266px'}], position: 2570, duration: 800 },
                { id: "eid50", tween: [ "style", "${_ref-long}", "left", '242px', { fromValue: '480px'}], position: 1500, duration: 1000 },
                { id: "eid160", tween: [ "style", "${_dif-long}", "left", '337px', { fromValue: '337px'}], position: 6810, duration: 900 },
                { id: "eid145", tween: [ "style", "${_lamp-hor}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid146", tween: [ "style", "${_lamp-hor}", "display", 'block', { fromValue: 'none'}], position: 5150, duration: 0 },
                { id: "eid172", tween: [ "style", "${_dif-short}", "width", '23.39%', { fromValue: '0%'}], position: 7787, duration: 800 },
                { id: "eid190", tween: [ "style", "${_Text2}", "top", '453px', { fromValue: '453px'}], position: 614, duration: 0 },
                { id: "eid132", tween: [ "style", "${_lamp-hor}", "background-position", [0,0], { valueTemplate: '@@0@@% @@1@@%', fromValue: [0,0]}], position: 5150, duration: 0 },
                { id: "eid133", tween: [ "style", "${_lamp-hor}", "background-position", [0,0], { valueTemplate: '@@0@@% @@1@@%', fromValue: [0,0]}], position: 6150, duration: 0 },
                { id: "eid161", tween: [ "style", "${_dif-long}", "top", '206px', { fromValue: '409px'}], position: 6810, duration: 900 },
                { id: "eid138", tween: [ "style", "${_Text6}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid139", tween: [ "style", "${_Text6}", "display", 'block', { fromValue: 'none'}], position: 6573, duration: 0 },
                { id: "eid149", tween: [ "style", "${_Text6}", "display", 'none', { fromValue: 'block'}], position: 6810, duration: 0 },
                { id: "eid178", tween: [ "style", "${_Text8}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid179", tween: [ "style", "${_Text8}", "display", 'block', { fromValue: 'none'}], position: 8750, duration: 0 },
                { id: "eid180", tween: [ "style", "${_Text9}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid181", tween: [ "style", "${_Text9}", "display", 'block', { fromValue: 'none'}], position: 9040, duration: 0 },
                { id: "eid182", tween: [ "style", "${_Text9}", "display", 'none', { fromValue: 'block'}], position: 9250, duration: 0 },
                { id: "eid125", tween: [ "style", "${_lamp-ver2}", "background-position", [0,0], { valueTemplate: '@@0@@% @@1@@%', fromValue: [0,0]}], position: 5068, duration: 0 },
                { id: "eid76", tween: [ "style", "${_ref-short}", "width", '14.16%', { fromValue: '0%'}], position: 2570, duration: 800 },
                { id: "eid189", tween: [ "style", "${_Text2}", "left", '140px', { fromValue: '140px'}], position: 614, duration: 0 },
                { id: "eid135", tween: [ "style", "${_lamp-hor}", "width", '34.62%', { fromValue: '1.39%'}], position: 5150, duration: 1000 },
                { id: "eid3", tween: [ "style", "${_car}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid4", tween: [ "style", "${_car}", "display", 'block', { fromValue: 'none'}], position: 435, duration: 0 },
                { id: "eid186", tween: [ "style", "${_dif-long}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid187", tween: [ "style", "${_dif-long}", "display", 'block', { fromValue: 'none'}], position: 6810, duration: 0 },
                { id: "eid183", tween: [ "style", "${_Text2}", "display", 'none', { fromValue: 'block'}], position: 9250, duration: 0 },
                { id: "eid136", tween: [ "style", "${_Text7}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid137", tween: [ "style", "${_Text7}", "display", 'block', { fromValue: 'none'}], position: 6303, duration: 0 },
                { id: "eid123", tween: [ "style", "${_lamp-ver2}", "height", '47.55%', { fromValue: '2.26%'}], position: 4068, duration: 1000 },
                { id: "eid82", tween: [ "style", "${_ref-long}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid83", tween: [ "style", "${_ref-long}", "display", 'block', { fromValue: 'none'}], position: 1500, duration: 0 },
                { id: "eid134", tween: [ "style", "${_lamp-hor}", "left", '192px', { fromValue: '408px'}], position: 5150, duration: 1000 },
                { id: "eid184", tween: [ "style", "${_dif-short}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid185", tween: [ "style", "${_dif-short}", "display", 'block', { fromValue: 'none'}], position: 7787, duration: 0 },
                { id: "eid158", tween: [ "style", "${_dif-long}", "background-position", [0,0], { valueTemplate: '@@0@@% @@1@@%', fromValue: [0,0]}], position: 6810, duration: 0 },
                { id: "eid159", tween: [ "style", "${_dif-long}", "background-position", [0,0], { valueTemplate: '@@0@@% @@1@@%', fromValue: [0,0]}], position: 7710, duration: 0 },
                { id: "eid169", tween: [ "style", "${_dif-short}", "background-position", [0,0], { valueTemplate: '@@0@@% @@1@@%', fromValue: [0,0]}], position: 7787, duration: 0 },
                { id: "eid170", tween: [ "style", "${_dif-short}", "background-position", [0,0], { valueTemplate: '@@0@@% @@1@@%', fromValue: [0,0]}], position: 8587, duration: 0 },
                { id: "eid1", tween: [ "style", "${_main}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid2", tween: [ "style", "${_main}", "display", 'block', { fromValue: 'none'}], position: 250, duration: 0 },
                { id: "eid147", tween: [ "style", "${_lamp-ver2}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid148", tween: [ "style", "${_lamp-ver2}", "display", 'block', { fromValue: 'none'}], position: 4068, duration: 0 },
                { id: "eid51", tween: [ "style", "${_ref-long}", "width", '39.39%', { fromValue: '1.7%'}], position: 1500, duration: 1000 }            ]
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
})(jQuery, AdobeEdge, "EDGE-688948227");
