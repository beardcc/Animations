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
                id: 'Graph',
                type: 'image',
                rect: ['55px', '61px','645px','500px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"Graph.png",'0px','0px']
            },
            {
                id: '_1',
                type: 'image',
                rect: ['169px', '130px','66px','159px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"1.png",'0px','0px']
            },
            {
                id: 'Text4',
                type: 'text',
                rect: ['82px', '604px','auto', 'auto','auto', 'auto'],
                text: "Figure 3.1  Comparison of Multiprocessor Systems, LANs, MANs, and WANs",
                align: "left",
                font: ['Times New Roman, Times, serif', [119, "%"], "rgba(0,0,0,1)", "700", "none", "normal"]
            },
            {
                id: '_4',
                type: 'image',
                rect: ['456px', '58px','223px','222px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"4.png",'0px','0px']
            },
            {
                id: 'Text6',
                display: 'block',
                type: 'text',
                rect: ['123px', '20px','200px','58px','auto', 'auto'],
                text: "Fiber networks enable much higher rates.",
                align: "left",
                font: ['Times New Roman, Times, serif', [94, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: '_2',
                type: 'image',
                rect: ['285px', '67px','135px','80px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"2.png",'0px','0px']
            },
            {
                id: 'Text7',
                display: 'block',
                type: 'text',
                rect: ['120px', '16px','204px','51px','auto', 'auto'],
                text: "Switched Ethernet is a much faster LAN Technology.",
                align: "left",
                font: ['Times New Roman, Times, serif', [94, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: '_3',
                type: 'image',
                rect: ['374px', '71px','135px','109px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"3.png",'0px','0px']
            },
            {
                id: 'Text8',
                display: 'block',
                type: 'text',
                rect: ['122px', '34px','278px','54px','auto', 'auto'],
                text: "MANs provide a medium distance.",
                align: "left",
                font: ['Times New Roman, Times, serif', [94, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: '_23',
                display: 'block',
                type: 'image',
                rect: ['382px', '68px','45px','77px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"2%2C3.png",'0px','0px']
            },
            {
                id: '_34',
                display: 'block',
                type: 'image',
                rect: ['462px', '72px','45px','105px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"3%2C4.png",'0px','0px']
            },
            {
                id: '_5',
                type: 'image',
                rect: ['376px', '237px','300px','207px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"5.png",'0px','0px']
            },
            {
                id: '_6',
                type: 'image',
                rect: ['288px', '171px','139px','118px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"6.png",'0px','0px']
            },
            {
                id: '_56',
                display: 'block',
                type: 'image',
                rect: ['382px', '249px','45px','42px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"5%2C6.png",'0px','0px']
            },
            {
                id: 'Text',
                display: 'block',
                type: 'text',
                text: "Click or Touch on Figure for Each Step of the Animation ",
                align: "center",
                font: ['Times New Roman, Times, serif', 18, "rgba(0,0,0,1)", "700", "none", ""]
            },
            {
                id: 'Comment1',
                display: 'block',
                type: 'image',
                rect: ['101px', '11px','214px','50px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"Comment1.png",'0px','0px']
            },
            {
                id: 'Text3',
                display: 'block',
                type: 'text',
                rect: ['115px', '31px','268px','60px','auto', 'auto'],
                text: "Typical type of LANs: 1 to 10 Mbps. Distances inside buildings.",
                align: "left",
                font: ['Times New Roman, Times, serif', [94, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: 'Text5',
                display: 'block',
                type: 'text',
                rect: ['118px', '28px','266px','52px','auto', 'auto'],
                text: "Longer distances but lower rates.",
                align: "left",
                font: ['Times New Roman, Times, serif', [94, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
            }],
            symbolInstances: [

            ]
        },
    states: {
        "Base State": {
            "${__56}": [
                ["style", "top", '249px'],
                ["style", "left", '382px'],
                ["style", "display", 'block']
            ],
            "${_Text3}": [
                ["style", "top", '31px'],
                ["style", "width", '238px'],
                ["style", "display", 'block'],
                ["style", "font-family", 'Times New Roman, Times, serif'],
                ["style", "left", '115px'],
                ["style", "font-size", '94%']
            ],
            "${__6}": [
                ["style", "left", '-288px'],
                ["style", "top", '171px']
            ],
            "${__5}": [
                ["style", "left", '800px'],
                ["style", "top", '237px']
            ],
            "${__23}": [
                ["style", "top", '68px'],
                ["style", "left", '382px'],
                ["style", "display", 'block']
            ],
            "${_Text4}": [
                ["style", "top", '604px'],
                ["style", "width", '645px'],
                ["style", "font-weight", '700'],
                ["style", "font-family", 'Times New Roman, Times, serif'],
                ["style", "left", '82px'],
                ["style", "font-size", '119%']
            ],
            "${__4}": [
                ["style", "top", '58px'],
                ["style", "left", '900px']
            ],
            "${__3}": [
                ["style", "left", '374px'],
                ["style", "top", '-150px']
            ],
            "${_Text7}": [
                ["style", "display", 'block'],
                ["style", "font-family", 'Times New Roman, Times, serif'],
                ["style", "width", '186px']
            ],
            "${_Graph}": [
                ["style", "left", '55px'],
                ["style", "top", '61px']
            ],
            "${_Text5}": [
                ["style", "top", '28px'],
                ["style", "font-family", 'Times New Roman, Times, serif'],
                ["style", "display", 'block'],
                ["style", "width", '266px']
            ],
            "${_Text6}": [
                ["style", "top", '20px'],
                ["style", "display", 'block'],
                ["style", "font-family", 'Times New Roman, Times, serif'],
                ["style", "left", '123px'],
                ["style", "width", '200px']
            ],
            "${__1}": [
                ["style", "left", '169px'],
                ["style", "top", '-159px']
            ],
            "${_Text}": [
                ["style", "top", '576px'],
                ["style", "font-size", '94%'],
                ["style", "text-align", 'center'],
                ["style", "font-weight", '700'],
                ["style", "display", 'block'],
                ["style", "font-family", 'Times New Roman, Times, serif'],
                ["style", "left", '192px'],
                ["style", "width", '380px']
            ],
            "${__2}": [
                ["style", "left", '285px'],
                ["style", "top", '-150px']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(255,255,255,1)'],
                ["style", "width", '800px'],
                ["style", "height", '650px'],
                ["style", "overflow", 'hidden']
            ],
            "${__34}": [
                ["style", "top", '72px'],
                ["style", "left", '465px'],
                ["style", "display", 'block']
            ],
            "${_Text8}": [
                ["style", "top", '34px'],
                ["style", "display", 'block'],
                ["style", "font-family", 'Times New Roman, Times, serif'],
                ["style", "left", '122px'],
                ["style", "width", '278px']
            ],
            "${_Comment1}": [
                ["style", "top", '11px'],
                ["style", "left", '101px'],
                ["style", "display", 'block']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 12250,
            autoPlay: true,
            timeline: [
                { id: "eid63", tween: [ "style", "${_Text3}", "width", '238px', { fromValue: '238px'}], position: 3876, duration: 0 },
                { id: "eid15", tween: [ "style", "${__56}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid16", tween: [ "style", "${__56}", "display", 'block', { fromValue: 'none'}], position: 5750, duration: 0 },
                { id: "eid34", tween: [ "style", "${__23}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid35", tween: [ "style", "${__23}", "display", 'block', { fromValue: 'none'}], position: 11750, duration: 0 },
                { id: "eid22", tween: [ "style", "${_Text6}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid23", tween: [ "style", "${_Text6}", "display", 'block', { fromValue: 'none'}], position: 7750, duration: 0 },
                { id: "eid24", tween: [ "style", "${_Text6}", "display", 'none', { fromValue: 'block'}], position: 8000, duration: 0 },
                { id: "eid49", tween: [ "style", "${__34}", "top", '72px', { fromValue: '72px'}], position: 12250, duration: 0 },
                { id: "eid69", tween: [ "style", "${_Text}", "top", '576px', { fromValue: '576px'}], position: 12004, duration: 0 },
                { id: "eid7", tween: [ "style", "${__6}", "left", '288px', { fromValue: '-288px'}], position: 2250, duration: 1500 },
                { id: "eid21", tween: [ "style", "${__4}", "left", '456px', { fromValue: '900px'}], position: 6250, duration: 1500 },
                { id: "eid50", tween: [ "style", "${__34}", "left", '465px', { fromValue: '465px'}], position: 12250, duration: 0 },
                { id: "eid54", tween: [ "style", "${__2}", "top", '67px', { fromValue: '-150px'}], position: 8250, duration: 1500 },
                { id: "eid64", tween: [ "style", "${_Text7}", "width", '186px', { fromValue: '186px'}], position: 9750, duration: 0 },
                { id: "eid27", tween: [ "style", "${_Text7}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid28", tween: [ "style", "${_Text7}", "display", 'block', { fromValue: 'none'}], position: 9750, duration: 0 },
                { id: "eid29", tween: [ "style", "${_Text7}", "display", 'none', { fromValue: 'block'}], position: 10000, duration: 0 },
                { id: "eid17", tween: [ "style", "${_Text5}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid18", tween: [ "style", "${_Text5}", "display", 'block', { fromValue: 'none'}], position: 5750, duration: 0 },
                { id: "eid19", tween: [ "style", "${_Text5}", "display", 'none', { fromValue: 'block'}], position: 6000, duration: 0 },
                { id: "eid2", tween: [ "style", "${__1}", "top", '130px', { fromValue: '-159px'}], position: 131, duration: 1500 },
                { id: "eid52", tween: [ "style", "${__3}", "top", '71px', { fromValue: '-150px'}], position: 10250, duration: 1500 },
                { id: "eid14", tween: [ "style", "${__5}", "left", '376px', { fromValue: '800px'}], position: 4250, duration: 1500 },
                { id: "eid36", tween: [ "style", "${__34}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid37", tween: [ "style", "${__34}", "display", 'block', { fromValue: 'none'}], position: 11750, duration: 0 },
                { id: "eid8", tween: [ "style", "${_Text3}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid9", tween: [ "style", "${_Text3}", "display", 'block', { fromValue: 'none'}], position: 3750, duration: 0 },
                { id: "eid10", tween: [ "style", "${_Text3}", "display", 'none', { fromValue: 'block'}], position: 4000, duration: 0 },
                { id: "eid39", tween: [ "style", "${_Text}", "display", 'none', { fromValue: 'block'}], position: 12250, duration: 0 },
                { id: "eid3", tween: [ "style", "${_Comment1}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid4", tween: [ "style", "${_Comment1}", "display", 'block', { fromValue: 'none'}], position: 1631, duration: 0 },
                { id: "eid5", tween: [ "style", "${_Comment1}", "display", 'none', { fromValue: 'block'}], position: 2000, duration: 0 },
                { id: "eid32", tween: [ "style", "${_Text8}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid33", tween: [ "style", "${_Text8}", "display", 'block', { fromValue: 'none'}], position: 11750, duration: 0 },
                { id: "eid38", tween: [ "style", "${_Text8}", "display", 'none', { fromValue: 'block'}], position: 12000, duration: 0 }            ]
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
})(jQuery, AdobeEdge, "EDGE-15654487");
