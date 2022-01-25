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
                id: 'to-sky2',
                display: 'block',
                type: 'image',
                rect: ['126px', '267px','6.6%','12.7%','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"to-sky.png",'0%','0%','38px','94px']
            },
            {
                id: 'Text',
                type: 'text',
                rect: ['132px', '700px','auto','auto','auto', 'auto'],
                text: "Figure 5.1 Wireless Propagation Modes",
                font: ['Times New Roman, Times, serif', [119, "%"], "rgba(0,0,0,1)", "700", "none", ""]
            },
            {
                id: 'Text2',
                display: 'block',
                type: 'text',
                rect: ['60px', '680px','auto','auto','auto', 'auto'],
                text: "Click or Touch on Figure for Each Step of the Animation",
                align: "left",
                font: ['Times New Roman, Times, serif', [94, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: 'GWP',
                display: 'block',
                type: 'image',
                rect: ['97px', '60px','349px','106px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"GWP.png",'0px','0px']
            },
            {
                id: 'arrow-gwp',
                display: 'block',
                type: 'image',
                rect: ['132px', '45px','47.1%','9.5%','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"arrow-gwp.png",'0%','0%','273px','70px']
            },
            {
                id: 'SP',
                display: 'block',
                type: 'image',
                rect: ['234px', '26px','76px','30px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"SP.png",'0px','0px']
            },
            {
                id: 'Text3',
                display: 'block',
                type: 'text',
                rect: ['380px', '1px','210px','auto','auto', 'auto'],
                text: "Lower frequencies (longer wavelengths) are bent (diffracted) around the curvature of the earth.",
                align: "left",
                font: ['Times New Roman, Times, serif', [94, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: 'SWP',
                display: 'block',
                type: 'image',
                rect: ['96px', '322px','59.5%','13.9%','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"SWP.png",'0%','0%','345px','103px']
            },
            {
                id: 'Text5',
                display: 'block',
                type: 'text',
                rect: ['171px', '439px','auto','auto','auto', 'auto'],
                text: "(b) Sky Wave Propagation (2 to 30 MHz)",
                align: "left",
                font: ['Times New Roman, Times, serif', 10, "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: 'ionosphere',
                display: 'block',
                type: 'image',
                rect: ['87px', '233px','62.6%','16.9%','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"ionosphere.png",'0%','0%','363px','auto']
            },
            {
                id: 'Text4',
                display: 'block',
                type: 'text',
                rect: ['157px', '190px','auto','12px','auto', 'auto'],
                text: "(a) Ground wave propagation (below 2 MHz)",
                align: "left",
                font: ['Times New Roman, Times, serif', 10, "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: 'Text6',
                display: 'block',
                type: 'text',
                rect: ['23px', '233px','95px','auto','auto', 'auto'],
                text: "Sky Wave is refracted back down to the earth.",
                align: "left",
                font: ['Georgia, \'Times New Roman\', Times, serif', [94, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: 'Text8',
                display: 'block',
                type: 'text',
                rect: ['63px', '209px','90px','auto','auto', 'auto'],
                text: "Sky Wave is refracted back down to the earth.",
                align: "left",
                font: ['Times New Roman, Times, serif', [94, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: 'up-and-down',
                display: 'block',
                type: 'image',
                rect: ['227px', '248px','1.2%','13.9%','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"up-and-down.png",'0%','0%','174px','103px']
            },
            {
                id: 'Text10',
                display: 'block',
                type: 'text',
                rect: ['378px', '215px','90px','auto','auto', 'auto'],
                text: "Up and down to the destination",
                align: "left",
                font: ['Georgia, \'Times New Roman\', Times, serif', [94, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: 'to-ground',
                display: 'block',
                type: 'image',
                rect: ['164px', '266px','10.9%','12.7%','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"to-ground.png",'0%','0%','63px','94px']
            },
            {
                id: 'Text9',
                display: 'block',
                type: 'text',
                rect: ['174px', '394px','auto','auto','auto', 'auto'],
                text: "Then reflects off the earth",
                align: "left",
                font: ['Times New Roman, Times, serif', [94, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: 'LOS',
                display: 'block',
                type: 'image',
                rect: ['92px', '516px','349px','121px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"LOS.png",'0px','0px']
            },
            {
                id: 'Text11',
                display: 'block',
                type: 'text',
                rect: ['141px', '644px','auto','auto','auto', 'auto'],
                text: "(c) Line-of-sight (LOS) propagation (above 30 MHz)",
                align: "left",
                font: ['Times New Roman, Times, serif', 10, "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: 'SP-LOS2',
                display: 'block',
                type: 'image',
                rect: ['176px', '490px','32.3%','8.4%','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"SP-LOS.png",'0%','0%','187px','62px']
            },
            {
                id: 'Text12',
                display: 'block',
                type: 'text',
                rect: ['332px', '490px','136px','auto','auto', 'auto'],
                text: "LOS propagation must be above the ground.",
                align: "left",
                font: ['Times New Roman, Times, serif', 10, "rgba(0,0,0,1)", "bold", "none", "normal"]
            }],
            symbolInstances: [

            ]
        },
    states: {
        "Base State": {
            "${_Text11}": [
                ["style", "top", '644px'],
                ["style", "display", 'block'],
                ["style", "font-family", 'Times New Roman, Times, serif'],
                ["style", "left", '162px'],
                ["style", "font-size", '10px']
            ],
            "${_Text3}": [
                ["style", "top", '1px'],
                ["style", "display", 'block'],
                ["style", "font-family", 'Times New Roman, Times, serif'],
                ["style", "left", '380px'],
                ["style", "width", '177px']
            ],
            "${_up-and-down}": [
                ["style", "top", '248px'],
                ["style", "display", 'block'],
                ["style", "left", '227px'],
                ["style", "background-position", [0,0], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "width", '1.21%']
            ],
            "${_Text5}": [
                ["style", "top", '439px'],
                ["style", "display", 'block'],
                ["style", "font-family", 'Times New Roman, Times, serif'],
                ["style", "left", '184px'],
                ["style", "font-size", '10px']
            ],
            "${_SWP}": [
                ["style", "top", '322px'],
                ["style", "left", '96px'],
                ["style", "display", 'block']
            ],
            "${_ionosphere}": [
                ["style", "top", '233px'],
                ["style", "left", '250px'],
                ["style", "display", 'block'],
                ["style", "background-size", [363,'auto'], {valueTemplate:'@@0@@px @@1@@'} ],
                ["style", "background-position", [50,50], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "width", '0%']
            ],
            "${_SP-LOS2}": [
                ["style", "top", '490px'],
                ["style", "display", 'block'],
                ["style", "left", '176px'],
                ["style", "background-position", [0,0], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "width", '0%']
            ],
            "${_GWP}": [
                ["style", "top", '76px'],
                ["style", "left", '97px'],
                ["style", "display", 'block']
            ],
            "${_Text4}": [
                ["style", "top", '191px'],
                ["style", "height", '13px'],
                ["style", "display", 'block'],
                ["style", "font-family", 'Times New Roman, Times, serif'],
                ["style", "left", '172px'],
                ["style", "font-size", '10px']
            ],
            "${_to-sky2}": [
                ["style", "top", '267px'],
                ["style", "display", 'block'],
                ["style", "left", '126px'],
                ["style", "background-position", [0,0], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "width", '1.04%']
            ],
            "${_LOS}": [
                ["style", "top", '516px'],
                ["style", "left", '92px'],
                ["style", "display", 'block']
            ],
            "${_SP}": [
                ["style", "top", '26px'],
                ["style", "left", '234px'],
                ["style", "display", 'block']
            ],
            "${_arrow-gwp}": [
                ["style", "top", '45px'],
                ["style", "display", 'block'],
                ["style", "left", '132px'],
                ["style", "background-position", [0,0], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "width", '0.87%']
            ],
            "${_Text10}": [
                ["style", "display", 'block'],
                ["style", "top", '215px'],
                ["style", "left", '378px'],
                ["style", "width", '90px']
            ],
            "${_Text6}": [
                ["style", "top", '233px'],
                ["style", "display", 'block'],
                ["style", "font-size", '94%'],
                ["style", "left", '23px'],
                ["style", "width", '95px']
            ],
            "${_to-ground}": [
                ["style", "top", '266px'],
                ["style", "display", 'block'],
                ["style", "left", '164px'],
                ["style", "background-position", [0,0], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "width", '1.21%']
            ],
            "${_Text}": [
                ["style", "top", '700px'],
                ["style", "font-family", 'Times New Roman, Times, serif'],
                ["style", "font-weight", '700'],
                ["style", "left", '132px'],
                ["style", "font-size", '119%']
            ],
            "${_Text12}": [
                ["style", "top", '489px'],
                ["style", "font-size", '94%'],
                ["style", "display", 'block'],
                ["style", "font-family", 'Times New Roman, Times, serif'],
                ["style", "left", '413px'],
                ["style", "width", '136px']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(255,255,255,1)'],
                ["style", "overflow", 'hidden'],
                ["style", "height", '740px'],
                ["style", "width", '580px']
            ],
            "${_Text9}": [
                ["style", "top", '394px'],
                ["style", "font-family", 'Times New Roman, Times, serif'],
                ["style", "left", '174px'],
                ["style", "display", 'block']
            ],
            "${_Text2}": [
                ["style", "top", '682px'],
                ["style", "display", 'block'],
                ["style", "font-family", 'Times New Roman, Times, serif'],
                ["style", "left", '104px'],
                ["style", "font-size", '94%']
            ],
            "${_Text8}": [
                ["style", "top", '204px'],
                ["style", "display", 'block'],
                ["style", "font-family", 'Times New Roman, Times, serif'],
                ["style", "left", '50px'],
                ["style", "width", '95px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 10696,
            autoPlay: true,
            timeline: [
                { id: "eid161", tween: [ "style", "${_Text11}", "left", '162px', { fromValue: '162px'}], position: 10696, duration: 0 },
                { id: "eid151", tween: [ "style", "${_Text3}", "width", '177px', { fromValue: '177px'}], position: 1250, duration: 0 },
                { id: "eid32", tween: [ "style", "${_SWP}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid33", tween: [ "style", "${_SWP}", "display", 'block', { fromValue: 'none'}], position: 2460, duration: 0 },
                { id: "eid19", tween: [ "style", "${_arrow-gwp}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid21", tween: [ "style", "${_arrow-gwp}", "display", 'block', { fromValue: 'none'}], position: 875, duration: 0 },
                { id: "eid36", tween: [ "style", "${_ionosphere}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid37", tween: [ "style", "${_ionosphere}", "display", 'block', { fromValue: 'none'}], position: 2935, duration: 0 },
                { id: "eid116", tween: [ "style", "${_up-and-down}", "width", '30%', { fromValue: '1.21%'}], position: 7250, duration: 1000 },
                { id: "eid28", tween: [ "style", "${_arrow-gwp}", "background-position", [0,0], { valueTemplate: '@@0@@% @@1@@%', fromValue: [0,0]}], position: 2075, duration: 0 },
                { id: "eid139", tween: [ "style", "${_Text12}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid140", tween: [ "style", "${_Text12}", "display", 'block', { fromValue: 'none'}], position: 10460, duration: 0 },
                { id: "eid141", tween: [ "style", "${_Text12}", "display", 'none', { fromValue: 'block'}], position: 10696, duration: 0 },
                { id: "eid121", tween: [ "style", "${_LOS}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid122", tween: [ "style", "${_LOS}", "display", 'block', { fromValue: 'none'}], position: 8710, duration: 0 },
                { id: "eid117", tween: [ "style", "${_Text10}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid118", tween: [ "style", "${_Text10}", "display", 'block', { fromValue: 'none'}], position: 8500, duration: 0 },
                { id: "eid119", tween: [ "style", "${_Text10}", "display", 'none', { fromValue: 'block'}], position: 8710, duration: 0 },
                { id: "eid16", tween: [ "style", "${_Text4}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid17", tween: [ "style", "${_Text4}", "display", 'block', { fromValue: 'none'}], position: 440, duration: 0 },
                { id: "eid34", tween: [ "style", "${_Text5}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid35", tween: [ "style", "${_Text5}", "display", 'block', { fromValue: 'none'}], position: 2750, duration: 0 },
                { id: "eid112", tween: [ "style", "${_up-and-down}", "background-position", [0,0], { valueTemplate: '@@0@@% @@1@@%', fromValue: [0,0]}], position: 7250, duration: 0 },
                { id: "eid113", tween: [ "style", "${_up-and-down}", "background-position", [0,0], { valueTemplate: '@@0@@% @@1@@%', fromValue: [0,0]}], position: 8250, duration: 0 },
                { id: "eid66", tween: [ "style", "${_to-sky2}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid67", tween: [ "style", "${_to-sky2}", "display", 'block', { fromValue: 'none'}], position: 4441, duration: 0 },
                { id: "eid158", tween: [ "style", "${_Text4}", "left", '172px', { fromValue: '172px'}], position: 1135, duration: 0 },
                { id: "eid95", tween: [ "style", "${_to-ground}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid96", tween: [ "style", "${_to-ground}", "display", 'block', { fromValue: 'none'}], position: 5824, duration: 0 },
                { id: "eid142", tween: [ "style", "${_Text2}", "display", 'none', { fromValue: 'block'}], position: 10696, duration: 0 },
                { id: "eid114", tween: [ "style", "${_up-and-down}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid115", tween: [ "style", "${_up-and-down}", "display", 'block', { fromValue: 'none'}], position: 7250, duration: 0 },
                { id: "eid162", tween: [ "style", "${_Text8}", "width", '95px', { fromValue: '95px'}], position: 5787, duration: 0 },
                { id: "eid155", tween: [ "style", "${_Text2}", "top", '682px', { fromValue: '682px'}], position: 6147, duration: 0 },
                { id: "eid54", tween: [ "style", "${_Text6}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid93", tween: [ "style", "${_Text8}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid94", tween: [ "style", "${_Text8}", "display", 'block', { fromValue: 'none'}], position: 5626, duration: 0 },
                { id: "eid107", tween: [ "style", "${_Text8}", "display", 'none', { fromValue: 'block'}], position: 5824, duration: 0 },
                { id: "eid90", tween: [ "style", "${_to-sky2}", "background-position", [0,0], { valueTemplate: '@@0@@% @@1@@%', fromValue: [0,0]}], position: 5441, duration: 0 },
                { id: "eid26", tween: [ "style", "${_arrow-gwp}", "width", '47.07%', { fromValue: '0.87%'}], position: 875, duration: 1200 },
                { id: "eid160", tween: [ "style", "${_Text5}", "left", '184px', { fromValue: '184px'}], position: 3330, duration: 0 },
                { id: "eid128", tween: [ "style", "${_SP-LOS2}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid129", tween: [ "style", "${_SP-LOS2}", "display", 'block', { fromValue: 'none'}], position: 9000, duration: 0 },
                { id: "eid50", tween: [ "style", "${_ionosphere}", "left", '87px', { fromValue: '250px'}], position: 2935, duration: 1200 },
                { id: "eid51", tween: [ "style", "${_ionosphere}", "width", '62.59%', { fromValue: '0%'}], position: 2935, duration: 1200 },
                { id: "eid14", tween: [ "style", "${_Text3}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid18", tween: [ "style", "${_Text3}", "display", 'block', { fromValue: 'none'}], position: 605, duration: 0 },
                { id: "eid31", tween: [ "style", "${_Text3}", "display", 'none', { fromValue: 'block'}], position: 2460, duration: 0 },
                { id: "eid156", tween: [ "style", "${_Text4}", "height", '13px', { fromValue: '13px'}], position: 1135, duration: 0 },
                { id: "eid138", tween: [ "style", "${_SP-LOS2}", "width", '32.25%', { fromValue: '0%'}], position: 9000, duration: 1200 },
                { id: "eid123", tween: [ "style", "${_Text11}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid124", tween: [ "style", "${_Text11}", "display", 'block', { fromValue: 'none'}], position: 9000, duration: 0 },
                { id: "eid88", tween: [ "style", "${_to-sky2}", "width", '6.56%', { fromValue: '1.04%'}], position: 4441, duration: 1000 },
                { id: "eid29", tween: [ "style", "${_SP}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid30", tween: [ "style", "${_SP}", "display", 'block', { fromValue: 'none'}], position: 2295, duration: 0 },
                { id: "eid102", tween: [ "style", "${_to-ground}", "background-position", [0,0], { valueTemplate: '@@0@@% @@1@@%', fromValue: [0,0]}], position: 5824, duration: 0 },
                { id: "eid103", tween: [ "style", "${_to-ground}", "background-position", [0,0], { valueTemplate: '@@0@@% @@1@@%', fromValue: [0,0]}], position: 6824, duration: 0 },
                { id: "eid159", tween: [ "style", "${_Text4}", "top", '191px', { fromValue: '191px'}], position: 1135, duration: 0 },
                { id: "eid136", tween: [ "style", "${_SP-LOS2}", "background-position", [0,0], { valueTemplate: '@@0@@% @@1@@%', fromValue: [0,0]}], position: 9000, duration: 0 },
                { id: "eid137", tween: [ "style", "${_SP-LOS2}", "background-position", [0,0], { valueTemplate: '@@0@@% @@1@@%', fromValue: [0,0]}], position: 10200, duration: 0 },
                { id: "eid52", tween: [ "style", "${_ionosphere}", "background-position", [50,50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,50]}], position: 2935, duration: 0 },
                { id: "eid53", tween: [ "style", "${_ionosphere}", "background-position", [50,50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,50]}], position: 4135, duration: 0 },
                { id: "eid1", tween: [ "style", "${_GWP}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid2", tween: [ "style", "${_GWP}", "display", 'block', { fromValue: 'none'}], position: 185, duration: 0 },
                { id: "eid105", tween: [ "style", "${_Text9}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid106", tween: [ "style", "${_Text9}", "display", 'block', { fromValue: 'none'}], position: 7036, duration: 0 },
                { id: "eid120", tween: [ "style", "${_Text9}", "display", 'none', { fromValue: 'block'}], position: 7250, duration: 0 },
                { id: "eid104", tween: [ "style", "${_to-ground}", "width", '10.87%', { fromValue: '1.21%'}], position: 5824, duration: 1000 }            ]
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
})(jQuery, AdobeEdge, "EDGE-620795885");
