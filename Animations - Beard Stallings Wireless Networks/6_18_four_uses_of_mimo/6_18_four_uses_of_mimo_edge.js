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
                id: '_3b',
                type: 'image',
                rect: ['124px', '205px','19.1%','19.2%','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"3b.png",'0%','0%','105px','96px']
            },
            {
                id: '_2b',
                display: 'block',
                type: 'image',
                rect: ['289px', '15px','32.9%','21.4%','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"2b.png",'0%','0%','181px','107px']
            },
            {
                id: 'Text4',
                display: 'block',
                type: 'text',
                rect: ['308px', '205px','219px','68px','auto', 'auto'],
                text: "Multiple antennas can direct a beam toward the receiver.",
                align: "left",
                font: ['\'Times New Roman\', Times, serif', [94, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: '_1',
                display: 'block',
                type: 'image',
                rect: ['37px', '26px','151px','188px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"1.png",'0px','0px']
            },
            {
                id: '_1a',
                display: 'block',
                type: 'image',
                rect: ['55px', '39px','20.7%','16.4%','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"1a.png",'0%','0%','114px','82px']
            },
            {
                id: 'Text3',
                display: 'block',
                type: 'text',
                rect: ['153px', '32px','244px','58px','auto', 'auto'],
                text: "Multiple antennas retrieve different signals and achieve diversity gain.",
                align: "left",
                font: ['\'Times New Roman\', Times, serif', [94, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: '_2',
                display: 'block',
                type: 'image',
                rect: ['294px', '14px','210px','183px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"2.png",'0px','0px']
            },
            {
                id: '_3',
                display: 'block',
                type: 'image',
                rect: ['50px', '211px','210px','183px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"3.png",'0px','0px']
            },
            {
                id: '_3a',
                display: 'block',
                type: 'image',
                rect: ['148px', '200px','1.3%','19.2%','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"3a.png",'0%','0%','105px','96px']
            },
            {
                id: 'Text5',
                display: 'block',
                type: 'text',
                rect: ['260px', '214px','219px','58px','auto', 'auto'],
                text: "Multiple beams can be created, so multiple users can receive on the same frequency at the same time.",
                align: "left",
                font: ['\'Times New Roman\', Times, serif', [94, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: '_4',
                display: 'block',
                type: 'image',
                rect: ['300px', '211px','210px','183px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"4.png",'0px','0px']
            },
            {
                id: '_4a',
                display: 'block',
                type: 'image',
                rect: ['317px', '224px','22.2%','11.6%','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"4a.png",'0%','0%','122px','58px']
            },
            {
                id: 'Text6',
                display: 'block',
                type: 'text',
                rect: ['459px', '202px','151px','43px','auto', 'auto'],
                text: "Multiple parallel streams can multiply (here double) the throughput.",
                align: "left",
                font: ['\'Times New Roman\', Times, serif', [94, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: 'Text',
                display: 'block',
                type: 'text',
                rect: ['95px', '442px','387px','21px','auto', 'auto'],
                text: "Click or Touch on Figure for Each Step of the Animation",
                font: ['Times New Roman, Times, serif', [94, "%"], "rgba(0,0,0,1)", "700", "none", ""]
            },
            {
                id: 'Text2',
                type: 'text',
                rect: ['148px', '468px','394px','21px','auto', 'auto'],
                text: "Figure 6.18 Four Uses of MIMO",
                align: "left",
                font: ['\'Times New Roman\', Times, serif', [119, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
            }],
            symbolInstances: [

            ]
        },
    states: {
        "Base State": {
            "${_Text4}": [
                ["style", "display", 'block']
            ],
            "${__3}": [
                ["style", "display", 'block'],
                ["style", "left", '50px'],
                ["style", "top", '211px']
            ],
            "${__2}": [
                ["style", "top", '14px'],
                ["style", "left", '294px'],
                ["style", "display", 'block']
            ],
            "${__4}": [
                ["style", "top", '211px'],
                ["style", "left", '300px'],
                ["style", "display", 'block']
            ],
            "${_Text3}": [
                ["style", "top", '32px'],
                ["style", "display", 'block'],
                ["style", "height", '58px'],
                ["style", "left", '153px'],
                ["style", "font-size", '94%']
            ],
            "${__3b}": [
                ["style", "top", '205px'],
                ["style", "left", '124px'],
                ["style", "width", '0%']
            ],
            "${_Text5}": [
                ["style", "top", '214px'],
                ["style", "left", '260px'],
                ["style", "display", 'block']
            ],
            "${_Text2}": [
                ["style", "top", '468px'],
                ["style", "left", '148px'],
                ["style", "font-size", '119%']
            ],
            "${_Text6}": [
                ["style", "display", 'block'],
                ["style", "top", '202px'],
                ["style", "left", '459px'],
                ["style", "width", '140px']
            ],
            "${__1}": [
                ["style", "top", '26px'],
                ["style", "left", '37px'],
                ["style", "display", 'block']
            ],
            "${_Text}": [
                ["style", "top", '442px'],
                ["style", "font-size", '94%'],
                ["style", "font-family", 'Times New Roman, Times, serif'],
                ["style", "display", 'block'],
                ["style", "font-weight", '700'],
                ["style", "left", '95px'],
                ["style", "width", '426px']
            ],
            "${__4a}": [
                ["style", "display", 'block'],
                ["style", "top", '224px'],
                ["style", "left", '317px'],
                ["style", "width", '0%']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(255,255,255,1)'],
                ["style", "overflow", 'hidden'],
                ["style", "height", '500px'],
                ["style", "width", '600px']
            ],
            "${__3a}": [
                ["style", "top", '211px'],
                ["transform", "rotateZ", '180deg'],
                ["style", "display", 'block'],
                ["transform", "scaleX", '1'],
                ["style", "left", '149px'],
                ["style", "width", '0%']
            ],
            "${__2b}": [
                ["style", "display", 'block'],
                ["style", "top", '15px'],
                ["style", "left", '289px'],
                ["style", "width", '0%']
            ],
            "${__1a}": [
                ["style", "display", 'block'],
                ["style", "top", '39px'],
                ["style", "left", '55px'],
                ["style", "width", '0%']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 7250,
            autoPlay: true,
            timeline: [
                { id: "eid87", tween: [ "style", "${_Text}", "width", '426px', { fromValue: '426px'}], position: 3430, duration: 0 },
                { id: "eid79", tween: [ "style", "${__4a}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid80", tween: [ "style", "${__4a}", "display", 'block', { fromValue: 'none'}], position: 5600, duration: 0 },
                { id: "eid88", tween: [ "style", "${_Text6}", "width", '140px', { fromValue: '140px'}], position: 6750, duration: 0 },
                { id: "eid10", tween: [ "style", "${__2}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid11", tween: [ "style", "${__2}", "display", 'block', { fromValue: 'none'}], position: 2000, duration: 0 },
                { id: "eid83", tween: [ "style", "${_Text6}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid84", tween: [ "style", "${_Text6}", "display", 'block', { fromValue: 'none'}], position: 6660, duration: 0 },
                { id: "eid85", tween: [ "style", "${_Text6}", "display", 'none', { fromValue: 'block'}], position: 7000, duration: 0 },
                { id: "eid37", tween: [ "style", "${__3a}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid38", tween: [ "style", "${__3a}", "display", 'block', { fromValue: 'none'}], position: 3750, duration: 0 },
                { id: "eid15", tween: [ "style", "${__2b}", "width", '32.91%', { fromValue: '0%'}], position: 2100, duration: 1000 },
                { id: "eid6", tween: [ "style", "${__1a}", "width", '20.73%', { fromValue: '0%'}], position: 320, duration: 1000 },
                { id: "eid7", tween: [ "style", "${_Text3}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid8", tween: [ "style", "${_Text3}", "display", 'block', { fromValue: 'none'}], position: 1360, duration: 0 },
                { id: "eid9", tween: [ "style", "${_Text3}", "display", 'none', { fromValue: 'block'}], position: 1750, duration: 0 },
                { id: "eid3", tween: [ "style", "${__1a}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid4", tween: [ "style", "${__1a}", "display", 'block', { fromValue: 'none'}], position: 320, duration: 0 },
                { id: "eid77", tween: [ "style", "${__4}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid78", tween: [ "style", "${__4}", "display", 'block', { fromValue: 'none'}], position: 5500, duration: 0 },
                { id: "eid82", tween: [ "style", "${__4a}", "width", '22.19%', { fromValue: '0%'}], position: 5600, duration: 1000 },
                { id: "eid35", tween: [ "style", "${__3}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid36", tween: [ "style", "${__3}", "display", 'block', { fromValue: 'none'}], position: 3645, duration: 0 },
                { id: "eid16", tween: [ "style", "${_Text4}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid17", tween: [ "style", "${_Text4}", "display", 'block', { fromValue: 'none'}], position: 3155, duration: 0 },
                { id: "eid18", tween: [ "style", "${_Text4}", "display", 'none', { fromValue: 'block'}], position: 3500, duration: 0 },
                { id: "eid73", tween: [ "style", "${__3a}", "width", '19.1%', { fromValue: '0%'}], position: 3750, duration: 1000 },
                { id: "eid12", tween: [ "style", "${__2b}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid13", tween: [ "style", "${__2b}", "display", 'block', { fromValue: 'none'}], position: 2100, duration: 0 },
                { id: "eid46", tween: [ "style", "${__3b}", "width", '19.1%', { fromValue: '0%'}], position: 3750, duration: 1000 },
                { id: "eid1", tween: [ "style", "${__1}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid2", tween: [ "style", "${__1}", "display", 'block', { fromValue: 'none'}], position: 250, duration: 0 },
                { id: "eid86", tween: [ "style", "${_Text}", "display", 'none', { fromValue: 'block'}], position: 7250, duration: 0 },
                { id: "eid71", tween: [ "style", "${__3a}", "left", '44px', { fromValue: '149px'}], position: 3750, duration: 1000 },
                { id: "eid74", tween: [ "style", "${_Text5}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid75", tween: [ "style", "${_Text5}", "display", 'block', { fromValue: 'none'}], position: 4795, duration: 0 },
                { id: "eid76", tween: [ "style", "${_Text5}", "display", 'none', { fromValue: 'block'}], position: 5250, duration: 0 }            ]
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
})(jQuery, AdobeEdge, "EDGE-49968997");
