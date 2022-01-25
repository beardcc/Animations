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
                id: 'blue-block',
                type: 'image',
                rect: ['147px', '164px','73px','27px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"blue-block.png",'0px','0px']
            },
            {
                id: 'blue-blockCopy',
                type: 'image',
                rect: ['247px', '164px','73px','27px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"blue-block.png",'0px','0px']
            },
            {
                id: 'blue-blockCopy2',
                type: 'image',
                rect: ['345px', '189px','73px','27px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"blue-block.png",'0px','0px']
            },
            {
                id: 'blue-blockCopy3',
                type: 'image',
                rect: ['445px', '201px','73px','27px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"blue-block.png",'0px','0px']
            },
            {
                id: 'blue-blockCopy4',
                type: 'image',
                rect: ['544px', '164px','73px','27px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"blue-block.png",'0px','0px']
            },
            {
                id: 'Data-Bits',
                type: 'image',
                rect: ['115px', '125px','476px','45px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"Data-Bits.png",'0px','0px']
            },
            {
                id: 'Part-2',
                type: 'image',
                rect: ['16px', '141px','650px','161px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"Part-2.png",'0px','0px']
            },
            {
                id: 'Red-block',
                type: 'image',
                rect: ['99px', '188px','73px','27px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"Red-block.png",'0px','0px']
            },
            {
                id: 'Red-blockCopy',
                type: 'image',
                rect: ['198px', '200px','73px','27px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"Red-block.png",'0px','0px']
            },
            {
                id: 'Red-blockCopy2',
                type: 'image',
                rect: ['297px', '164px','73px','27px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"Red-block.png",'0px','0px']
            },
            {
                id: 'Red-blockCopy3',
                type: 'image',
                rect: ['395px', '176px','73px','27px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"Red-block.png",'0px','0px']
            },
            {
                id: 'Red-blockCopy4',
                type: 'image',
                rect: ['495px', '201px','73px','27px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"Red-block.png",'0px','0px']
            },
            {
                id: 'Text2',
                type: 'text',
                rect: ['203px', '363px','334px','37px','auto', 'auto'],
                text: "Figure 7.4 MFSK Frequency Use (<i>M</i> = 4)",
                align: "left",
                font: ['Times New Roman, Times, serif', [119, "%"], "rgba(0,0,0,1)", "700", "none", "normal"]
            },
            {
                id: 'Text3',
                display: 'block',
                type: 'text',
                rect: ['495px', '103px','137px','37px','auto', 'auto'],
                text: "Source data bits",
                align: "left",
                font: ['Times New Roman, Times, serif', [119, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: 'Text',
                display: 'block',
                type: 'text',
                rect: ['50px', '111px','161px','43px','auto', 'auto'],
                text: "Binary \"01\" uses  frequencies centered at f<sub>c</sub> - f<sub>d</sub>.",
                align: "center",
                font: ['Times New Roman, Times, serif', 10, "rgba(0,0,0,1)", "700", "none", ""]
            },
            {
                id: 'TextCopy',
                display: 'block',
                type: 'text',
                rect: ['125px', '274px','161px','43px','auto', 'auto'],
                text: "Binary \"11\" uses  frequencies centered at f<sub>c</sub> + 3f<sub>d</sub>",
                align: "center",
                font: ['Georgia, Times New Roman, Times, serif', 10, "rgba(0,0,0,1)", "700", "none", ""]
            },
            {
                id: 'Text4',
                display: 'block',
                type: 'text',
                rect: ['240px', '330px','auto','auto','auto', 'auto'],
                text: "Click or Touch on Figure for Each Step of the  Animation",
                font: ['Times New Roman, Times, serif', [94, "%"], "rgba(0,0,0,1)", "700", "none", ""]
            }],
            symbolInstances: [

            ]
        },
    states: {
        "Base State": {
            "${_blue-block}": [
                ["style", "left", '147px'],
                ["style", "top", '-164px']
            ],
            "${_Text3}": [
                ["style", "top", '103px'],
                ["style", "width", '122px'],
                ["style", "display", 'block'],
                ["style", "height", '22px'],
                ["style", "font-family", 'Times New Roman, Times, serif'],
                ["style", "left", '495px'],
                ["style", "font-size", '94%']
            ],
            "${_Text2}": [
                ["style", "top", '363px'],
                ["style", "font-size", '119%'],
                ["style", "font-family", 'Times New Roman, Times, serif'],
                ["style", "font-weight", '700'],
                ["style", "left", '203px'],
                ["style", "width", '334px']
            ],
            "${_Red-blockCopy3}": [
                ["style", "left", '395px'],
                ["style", "top", '-202px']
            ],
            "${_blue-blockCopy3}": [
                ["style", "left", '445px'],
                ["style", "top", '-177px']
            ],
            "${_Part-2}": [
                ["style", "left", '16px'],
                ["style", "top", '141px']
            ],
            "${_Text4}": [
                ["style", "top", '342px'],
                ["style", "width", '376px'],
                ["style", "font-family", 'Times New Roman, Times, serif'],
                ["style", "display", 'block'],
                ["style", "font-weight", '700'],
                ["style", "left", '178px'],
                ["style", "font-size", '94%']
            ],
            "${_Red-blockCopy2}": [
                ["style", "left", '297px'],
                ["style", "top", '-164px']
            ],
            "${_blue-blockCopy2}": [
                ["style", "left", '345px'],
                ["style", "top", '-189px']
            ],
            "${_Red-blockCopy}": [
                ["style", "left", '198px'],
                ["style", "top", '-200px']
            ],
            "${_blue-blockCopy}": [
                ["style", "top", '-164px'],
                ["style", "left", '247px']
            ],
            "${_blue-blockCopy4}": [
                ["style", "left", '544px'],
                ["style", "top", '-214px']
            ],
            "${_Text}": [
                ["style", "font-weight", '700'],
                ["style", "left", '50px'],
                ["style", "width", '161px'],
                ["style", "top", '111px'],
                ["style", "text-align", 'center'],
                ["style", "display", 'block'],
                ["style", "font-family", 'Times New Roman, Times, serif'],
                ["style", "height", '43px'],
                ["style", "font-size", '10px']
            ],
            "${_TextCopy}": [
                ["style", "font-weight", 'bold'],
                ["style", "left", '125px'],
                ["style", "font-size", '10px'],
                ["style", "top", '274px'],
                ["style", "text-align", 'center'],
                ["style", "display", 'block'],
                ["style", "font-family", 'Georgia, \'Times New Roman\', Times, serif'],
                ["style", "height", '43px'],
                ["style", "width", '161px']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(255,255,255,1)'],
                ["style", "width", '700px'],
                ["style", "height", '400px'],
                ["style", "overflow", 'auto']
            ],
            "${_Data-Bits}": [
                ["style", "left", '115px'],
                ["style", "top", '-125px']
            ],
            "${_Red-blockCopy4}": [
                ["style", "left", '495px'],
                ["style", "top", '-177px']
            ],
            "${_Red-block}": [
                ["style", "left", '99px'],
                ["style", "top", '-188px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 30000,
            autoPlay: true,
            timeline: [
                { id: "eid106", tween: [ "style", "${_Text3}", "width", '122px', { fromValue: '122px'}], position: 6602, duration: 0 },
                { id: "eid73", tween: [ "style", "${_blue-block}", "top", '164px', { fromValue: '-164px'}], position: 16000, duration: 3000 },
                { id: "eid90", tween: [ "style", "${_blue-blockCopy4}", "top", '164px', { fromValue: '-214px'}], position: 28000, duration: 1500 },
                { id: "eid85", tween: [ "style", "${_Red-blockCopy2}", "top", '164px', { fromValue: '-164px'}], position: 26000, duration: 1500 },
                { id: "eid68", tween: [ "style", "${_Red-block}", "top", '188px', { fromValue: '-188px'}], position: 8000, duration: 3000 },
                { id: "eid88", tween: [ "style", "${_blue-blockCopy3}", "top", '201px', { fromValue: '-177px'}], position: 27750, duration: 1500 },
                { id: "eid64", tween: [ "style", "${_Text3}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid65", tween: [ "style", "${_Text3}", "display", 'block', { fromValue: 'none'}], position: 6000, duration: 0 },
                { id: "eid66", tween: [ "style", "${_Text3}", "display", 'none', { fromValue: 'block'}], position: 7000, duration: 0 },
                { id: "eid87", tween: [ "style", "${_blue-blockCopy2}", "top", '189px', { fromValue: '-189px'}], position: 27500, duration: 1500 },
                { id: "eid91", tween: [ "style", "${_Red-blockCopy3}", "top", '176px', { fromValue: '-202px'}], position: 28250, duration: 1500 },
                { id: "eid94", tween: [ "style", "${_Text4}", "display", 'none', { fromValue: 'block'}], position: 29750, duration: 0 },
                { id: "eid80", tween: [ "style", "${_Red-blockCopy}", "top", '200px', { fromValue: '-200px'}], position: 23000, duration: 1500 },
                { id: "eid83", tween: [ "style", "${_blue-blockCopy}", "top", '164px', { fromValue: '-164px'}], position: 24500, duration: 1500 },
                { id: "eid76", tween: [ "style", "${_TextCopy}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid77", tween: [ "style", "${_TextCopy}", "display", 'block', { fromValue: 'none'}], position: 20000, duration: 0 },
                { id: "eid78", tween: [ "style", "${_TextCopy}", "display", 'none', { fromValue: 'block'}], position: 22000, duration: 0 },
                { id: "eid108", tween: [ "style", "${_Text4}", "left", '178px', { fromValue: '178px'}], position: 24615, duration: 0 },
                { id: "eid63", tween: [ "style", "${_Data-Bits}", "top", '125px', { fromValue: '-125px'}], position: 2121, duration: 3000 },
                { id: "eid105", tween: [ "style", "${_Text3}", "font-size", '94%', { fromValue: '15px'}], position: 6602, duration: 0 },
                { id: "eid69", tween: [ "style", "${_Text}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid70", tween: [ "style", "${_Text}", "display", 'block', { fromValue: 'none'}], position: 12000, duration: 0 },
                { id: "eid71", tween: [ "style", "${_Text}", "display", 'none', { fromValue: 'block'}], position: 14000, duration: 0 },
                { id: "eid93", tween: [ "style", "${_Red-blockCopy4}", "top", '201px', { fromValue: '-177px'}], position: 27500, duration: 1500 }            ]
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
})(jQuery, AdobeEdge, "EDGE-445705165");
