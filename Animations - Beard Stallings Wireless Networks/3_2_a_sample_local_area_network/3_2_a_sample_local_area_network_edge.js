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
                rect: ['-6px', '46px','612px','238px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"1.png",'0px','0px']
            },
            {
                id: 'Text',
                type: 'text',
                rect: ['114px', '367px','auto','auto','auto', 'auto'],
                text: "Figure 3.2 A Simple Local Area Network",
                font: ['Times New Roman, Times, serif', [119, "%"], "rgba(0,0,0,1)", "700", "none", ""]
            },
            {
                id: 'Figure_32',
                display: 'block',
                type: 'text',
                rect: ['131px', '407px','auto','auto','auto', 'auto'],
                text: "Click or Touch on Figure for Each Step of the Animation",
                align: "left",
                font: ['Times New Roman, Times, serif', [94, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: 'Text3',
                display: 'block',
                type: 'text',
                rect: ['94px', '328px','412px','48px','auto', 'auto'],
                text: "All stations communicate over the same shared medium. They must have protocols to avoid collisions.",
                align: "left",
                font: ['Times New Roman, Times, serif', [94, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: 'Text4',
                display: 'block',
                type: 'text',
                rect: ['190px', '293px','199px','25px','auto', 'auto'],
                text: "When protocols are used",
                align: "left",
                font: ['Times New Roman, Times, serif', [94, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: 'Text5',
                display: 'block',
                type: 'text',
                rect: ['143px', '293px','283px','25px','auto', 'auto'],
                text: "When protocols are not used",
                align: "left",
                font: ['Times New Roman, Times, serif', [94, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: 'packets2',
                display: 'block',
                type: 'image',
                rect: ['53px', '161px','27px','28px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"packets.png",'0px','0px']
            },
            {
                id: 'packets2Copy',
                display: 'block',
                type: 'image',
                rect: ['196px', '161px','27px','28px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"packets.png",'0px','0px']
            },
            {
                id: 'packets2Copy2',
                display: 'block',
                type: 'image',
                rect: ['340px', '161px','27px','28px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"packets.png",'0px','0px']
            },
            {
                id: 'packets',
                display: 'block',
                type: 'image',
                rect: ['53px', '161px','27px','28px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"packets.png",'0px','0px']
            },
            {
                id: 'packetsCopy',
                display: 'block',
                type: 'image',
                rect: ['197px', '161px','27px','28px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"packets.png",'0px','0px']
            },
            {
                id: 'packetsCopy2',
                display: 'block',
                type: 'image',
                rect: ['341px', '160px','27px','28px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"packets.png",'0px','0px']
            },
            {
                id: 'explosion',
                display: 'block',
                type: 'image',
                rect: ['170px', '225px','79px','45px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"explosion.png",'0px','0px']
            }],
            symbolInstances: [

            ]
        },
    states: {
        "Base State": {
            "${_explosion}": [
                ["style", "top", '225px'],
                ["style", "height", '34px'],
                ["style", "display", 'block'],
                ["style", "left", '189px'],
                ["style", "width", '45px']
            ],
            "${_Text5}": [
                ["style", "display", 'block'],
                ["style", "font-family", 'Times New Roman, Times, serif']
            ],
            "${_packetsCopy2}": [
                ["style", "top", '160px'],
                ["style", "left", '341px'],
                ["style", "display", 'block']
            ],
            "${_Figure_32}": [
                ["style", "top", '347px'],
                ["style", "width", '377px'],
                ["style", "display", 'block'],
                ["style", "font-family", 'Times New Roman, Times, serif'],
                ["style", "left", '96px'],
                ["style", "font-size", '94%']
            ],
            "${_packets2Copy}": [
                ["style", "top", '161px'],
                ["style", "left", '196px'],
                ["style", "display", 'block']
            ],
            "${_packetsCopy}": [
                ["style", "top", '161px'],
                ["style", "left", '197px'],
                ["style", "display", 'block']
            ],
            "${_packets}": [
                ["style", "top", '161px'],
                ["style", "left", '53px'],
                ["style", "display", 'block']
            ],
            "${__1}": [
                ["style", "left", '-6px'],
                ["style", "top", '46px']
            ],
            "${_Text}": [
                ["style", "top", '367px'],
                ["style", "font-size", '119%'],
                ["style", "font-family", 'Times New Roman, Times, serif'],
                ["style", "font-weight", '700'],
                ["style", "left", '114px'],
                ["style", "width", '342px']
            ],
            "${_packets2Copy2}": [
                ["style", "top", '161px'],
                ["style", "left", '340px'],
                ["style", "display", 'block']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(255,255,255,1)'],
                ["style", "width", '600px'],
                ["style", "height", '400px'],
                ["style", "overflow", 'hidden']
            ],
            "${_packets2}": [
                ["style", "top", '161px'],
                ["style", "left", '53px'],
                ["style", "display", 'block']
            ],
            "${_Text3}": [
                ["style", "top", '283px'],
                ["style", "display", 'block'],
                ["style", "font-family", 'Times New Roman, Times, serif'],
                ["style", "left", '94px'],
                ["style", "width", '412px']
            ],
            "${_Text4}": [
                ["style", "display", 'block'],
                ["style", "font-family", 'Times New Roman, Times, serif'],
                ["style", "width", '199px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 10170,
            autoPlay: true,
            timeline: [
                { id: "eid60", tween: [ "style", "${_packets2}", "left", '197px', { fromValue: '53px'}], position: 7920, duration: 1000 },
                { id: "eid18", tween: [ "style", "${_packets}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid19", tween: [ "style", "${_packets}", "display", 'block', { fromValue: 'none'}], position: 250, duration: 0 },
                { id: "eid20", tween: [ "style", "${_packets}", "display", 'none', { fromValue: 'block'}], position: 3250, duration: 0 },
                { id: "eid114", tween: [ "style", "${_Figure_32}", "top", '347px', { fromValue: '347px'}], position: 4311, duration: 0 },
                { id: "eid42", tween: [ "style", "${_packetsCopy2}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid43", tween: [ "style", "${_packetsCopy2}", "display", 'block', { fromValue: 'none'}], position: 3050, duration: 0 },
                { id: "eid44", tween: [ "style", "${_packetsCopy2}", "display", 'none', { fromValue: 'block'}], position: 6050, duration: 0 },
                { id: "eid113", tween: [ "style", "${_Figure_32}", "left", '96px', { fromValue: '96px'}], position: 4311, duration: 0 },
                { id: "eid83", tween: [ "style", "${_Figure_32}", "display", 'none', { fromValue: 'block'}], position: 10170, duration: 0 },
                { id: "eid8", tween: [ "style", "${_packets}", "top", '225px', { fromValue: '161px'}], position: 250, duration: 1000 },
                { id: "eid17", tween: [ "style", "${_packets}", "top", '169px', { fromValue: '225px'}], position: 2250, duration: 1000 },
                { id: "eid91", tween: [ "style", "${_explosion}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid92", tween: [ "style", "${_explosion}", "display", 'block', { fromValue: 'none'}], position: 8875, duration: 0 },
                { id: "eid93", tween: [ "style", "${_explosion}", "display", 'none', { fromValue: 'block'}], position: 9037, duration: 0 },
                { id: "eid63", tween: [ "style", "${_packets2Copy2}", "left", '484px', { fromValue: '340px'}], position: 7920, duration: 485 },
                { id: "eid11", tween: [ "style", "${_packets}", "left", '484px', { fromValue: '53px'}], position: 1250, duration: 1000 },
                { id: "eid95", tween: [ "style", "${_explosion}", "width", '45px', { fromValue: '45px'}], position: 8920, duration: 0 },
                { id: "eid94", tween: [ "style", "${_explosion}", "height", '34px', { fromValue: '34px'}], position: 8920, duration: 0 },
                { id: "eid96", tween: [ "style", "${_explosion}", "left", '189px', { fromValue: '189px'}], position: 8920, duration: 0 },
                { id: "eid84", tween: [ "style", "${_Text4}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid85", tween: [ "style", "${_Text4}", "display", 'block', { fromValue: 'none'}], position: 200, duration: 0 },
                { id: "eid45", tween: [ "style", "${_Text4}", "display", 'none', { fromValue: 'block'}], position: 6815, duration: 0 },
                { id: "eid23", tween: [ "style", "${_packetsCopy}", "top", '225px', { fromValue: '161px'}], position: 1615, duration: 1000 },
                { id: "eid29", tween: [ "style", "${_packetsCopy}", "top", '169px', { fromValue: '225px'}], position: 3615, duration: 1000 },
                { id: "eid80", tween: [ "style", "${_Text3}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid81", tween: [ "style", "${_Text3}", "display", 'block', { fromValue: 'none'}], position: 9420, duration: 0 },
                { id: "eid82", tween: [ "style", "${_Text3}", "display", 'none', { fromValue: 'block'}], position: 9920, duration: 0 },
                { id: "eid50", tween: [ "style", "${_packets2}", "top", '225px', { fromValue: '161px'}], position: 6920, duration: 1000 },
                { id: "eid26", tween: [ "style", "${_packetsCopy}", "left", '484px', { fromValue: '197px'}], position: 2615, duration: 1000 },
                { id: "eid35", tween: [ "style", "${_packetsCopy2}", "top", '225px', { fromValue: '160px'}], position: 3050, duration: 1000 },
                { id: "eid41", tween: [ "style", "${_packetsCopy2}", "top", '161px', { fromValue: '225px'}], position: 5050, duration: 1000 },
                { id: "eid46", tween: [ "style", "${_Text5}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid47", tween: [ "style", "${_Text5}", "display", 'block', { fromValue: 'none'}], position: 6920, duration: 0 },
                { id: "eid79", tween: [ "style", "${_Text5}", "display", 'none', { fromValue: 'block'}], position: 9170, duration: 0 },
                { id: "eid69", tween: [ "style", "${_packets2Copy}", "top", '225px', { fromValue: '161px'}], position: 7920, duration: 1000 },
                { id: "eid53", tween: [ "style", "${_packets2Copy2}", "top", '225px', { fromValue: '161px'}], position: 6920, duration: 1000 },
                { id: "eid66", tween: [ "style", "${_packets2Copy2}", "top", '169px', { fromValue: '225px'}], position: 8405, duration: 515 },
                { id: "eid73", tween: [ "style", "${_packets2Copy2}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid74", tween: [ "style", "${_packets2Copy2}", "display", 'block', { fromValue: 'none'}], position: 6920, duration: 0 },
                { id: "eid72", tween: [ "style", "${_packets2Copy2}", "display", 'none', { fromValue: 'block'}], position: 8920, duration: 0 },
                { id: "eid75", tween: [ "style", "${_packets2Copy}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid77", tween: [ "style", "${_packets2Copy}", "display", 'block', { fromValue: 'none'}], position: 6920, duration: 0 },
                { id: "eid70", tween: [ "style", "${_packets2Copy}", "display", 'none', { fromValue: 'block'}], position: 8920, duration: 0 },
                { id: "eid86", tween: [ "style", "${_Text3}", "top", '283px', { fromValue: '283px'}], position: 9745, duration: 0 },
                { id: "eid30", tween: [ "style", "${_packetsCopy}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid31", tween: [ "style", "${_packetsCopy}", "display", 'block', { fromValue: 'none'}], position: 1615, duration: 0 },
                { id: "eid32", tween: [ "style", "${_packetsCopy}", "display", 'none', { fromValue: 'block'}], position: 4615, duration: 0 },
                { id: "eid38", tween: [ "style", "${_packetsCopy2}", "left", '484px', { fromValue: '341px'}], position: 4050, duration: 1000 },
                { id: "eid76", tween: [ "style", "${_packets2}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid78", tween: [ "style", "${_packets2}", "display", 'block', { fromValue: 'none'}], position: 6920, duration: 0 },
                { id: "eid71", tween: [ "style", "${_packets2}", "display", 'none', { fromValue: 'block'}], position: 8920, duration: 0 }            ]
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
})(jQuery, AdobeEdge, "EDGE-3859777");
