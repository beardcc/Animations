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
                id: 'ampdu-aggretion',
                display: 'none',
                type: 'image',
                rect: ['993px', '1902px','585px','128px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"ampdu-aggretion.png",'0px','0px']
            },
            {
                id: 'part3a',
                display: 'none',
                type: 'image',
                rect: ['234px', '1562px','2184px','344px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"part3a.png",'0px','0px']
            },
            {
                id: 'Text8',
                display: 'none',
                type: 'text',
                rect: ['1926', '1954','auto','auto','auto', 'auto'],
                text: "A-MPDU aggregation uses the<br>same PHY header but each <br>MPDU has its own MAC<br>header.",
                align: "left",
                font: ['\'Times New Roman\', Times, serif', [375, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: 'part3b',
                display: 'none',
                type: 'image',
                rect: ['229px', '1728px','2184px','244px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"part3b.png",'0px','0px']
            },
            {
                id: 'Text9',
                display: 'none',
                type: 'text',
                rect: ['1790', '1982','auto','auto','auto', 'auto'],
                text: "A single bit error only  requires one<br>MPDU to be retransmitted.",
                align: "left",
                font: ['\'Times New Roman\', Times, serif', [375, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: 'part4',
                display: 'none',
                type: 'image',
                rect: ['229px', '2052px','2028px','524px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"part4.png",'0px','0px']
            },
            {
                id: 'Text10',
                display: 'none',
                type: 'text',
                rect: ['1838px', '1994px','auto','auto','auto', 'auto'],
                text: "Two MPDUs are aggregated <br>such that each has two <br>MSDUs inside. Only one<br> MPDU (with two MSDUs <br>inside) would need to be<br> retransmitted.",
                align: "left",
                font: ['\'Times New Roman\', Times, serif', [375, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: '_4ampdu-title',
                display: 'none',
                type: 'image',
                rect: ['818px', '2558px','924px','128px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"4ampdu-title.png",'0px','0px']
            },
            {
                id: 'Text5',
                display: 'none',
                type: 'text',
                rect: ['1602', '872','auto','auto','auto', 'auto'],
                text: "With a single bit error, one <br>MSDU-SIFS-ACK sequence is repeated. ",
                align: "left",
                font: ['\'Times New Roman\', Times, serif', [375, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: '_2msdu-aggretion',
                display: 'none',
                type: 'image',
                rect: ['995px', '1394px','592px','136px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"2msdu-aggretion.png",'0px','0px']
            },
            {
                id: 'part2a',
                display: 'none',
                type: 'image',
                rect: ['239px', '1006px','1752px','428px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"part2a.png",'0px','0px']
            },
            {
                id: 'Text6',
                display: 'none',
                type: 'text',
                rect: ['2060', '1000','auto','auto','auto', 'auto'],
                text: "A-MSDU aggregation uses<br>one header for several <br>MSDUs to be sent.<br>Much less overhead.",
                align: "left",
                font: ['\'Times New Roman\', Times, serif', [375, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: 'part2b',
                display: 'none',
                type: 'image',
                rect: ['239px', '1220px','1752px','216px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"part2b.png",'0px','0px']
            },
            {
                id: 'Text7',
                display: 'none',
                type: 'text',
                rect: ['2078', '1142','auto','auto','auto', 'auto'],
                text: "But a single bit error<br>requires all to be resent.<br>",
                align: "left",
                font: ['\'Times New Roman\', Times, serif', [375, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: '_1no-aggretion',
                display: 'none',
                type: 'image',
                rect: ['1053px', '818px','484px','108px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"1.no-aggretion.png",'0px','0px']
            },
            {
                id: 'Text2',
                display: 'block',
                type: 'text',
                rect: ['574px', '2710px','auto','auto','auto', 'auto'],
                text: "Click or Touch on Figure for Each Step of The Animation",
                align: "left",
                font: ['Times New Roman, Times, serif', [375, "%"], "rgba(0,0,0,1)", "700", "none", "normal"]
            },
            {
                id: 'Text3',
                type: 'text',
                rect: ['725px', '2838px','auto','auto','auto', 'auto'],
                text: "Figure   11.16   Forms   of   Aggregation",
                align: "left",
                font: ['\'Times New Roman\', Times, serif', [475, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: 'part1',
                display: 'none',
                type: 'image',
                rect: ['255px', '370px','1060px','184px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"part1.png",'0px','0px']
            },
            {
                id: 'Text4',
                display: 'none',
                type: 'text',
                rect: ['315px', '202px','auto','auto','auto', 'auto'],
                text: "With no aggregation, the order is<br>MAC frame, SIFS, ACK, backoff.",
                align: "left",
                font: ['\'Times New Roman\', Times, serif', [375, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: 'part1b',
                display: 'none',
                type: 'image',
                rect: ['1222px', '354px','968px','192px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"part1b.png",'0px','0px']
            },
            {
                id: 'arrow1',
                display: 'none',
                type: 'image',
                rect: ['259px', '430px','2112px','260px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"arrow1.png",'0px','0px','100%','100%']
            },
            {
                id: 'part1c',
                display: 'none',
                type: 'image',
                rect: ['421px', '553px','984px','184px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"part1c.png",'0px','0px']
            },
            {
                id: 'part1d',
                display: 'none',
                type: 'image',
                rect: ['1269px', '542px','1088px','340px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"part1d.png",'0px','0px']
            }],
            symbolInstances: [

            ]
        },
    states: {
        "Base State": {
            "${_Text7}": [
                ["style", "display", 'none']
            ],
            "${_part2a}": [
                ["style", "top", '1006px'],
                ["style", "left", '-1700px'],
                ["style", "display", 'none']
            ],
            "${_Text8}": [
                ["style", "display", 'none']
            ],
            "${_part2b}": [
                ["style", "display", 'none'],
                ["transform", "scaleX", '0.02739'],
                ["style", "left", '259px'],
                ["style", "top", '1228px']
            ],
            "${_part1b}": [
                ["style", "top", '366px'],
                ["style", "left", '1250px'],
                ["style", "display", 'none']
            ],
            "${_part1d}": [
                ["style", "top", '548px'],
                ["style", "left", '1198px'],
                ["style", "display", 'none']
            ],
            "${_Text2}": [
                ["style", "top", '2745px'],
                ["style", "font-family", 'Times New Roman, Times, serif'],
                ["style", "display", 'block'],
                ["style", "font-weight", '700'],
                ["style", "left", '574px'],
                ["style", "font-size", '375%']
            ],
            "${_Text4}": [
                ["style", "display", 'none'],
                ["style", "top", '202px'],
                ["style", "left", '315px'],
                ["style", "font-size", '375%']
            ],
            "${_Text5}": [
                ["style", "display", 'none'],
                ["style", "height", '149px'],
                ["style", "width", '934px']
            ],
            "${_ampdu-aggretion}": [
                ["style", "top", '1902px'],
                ["style", "left", '993px'],
                ["style", "display", 'none']
            ],
            "${_part4}": [
                ["style", "top", '2052px'],
                ["style", "left", '-2050px'],
                ["style", "display", 'none']
            ],
            "${__1no-aggretion}": [
                ["style", "top", '818px'],
                ["style", "left", '1053px'],
                ["style", "display", 'none']
            ],
            "${__2msdu-aggretion}": [
                ["style", "top", '1394px'],
                ["style", "left", '995px'],
                ["style", "display", 'none']
            ],
            "${_part3a}": [
                ["style", "top", '1562px'],
                ["style", "left", '-2250px'],
                ["style", "display", 'none']
            ],
            "${_part1}": [
                ["style", "top", '370px'],
                ["style", "left", '-1100px'],
                ["style", "display", 'none']
            ],
            "${_Text10}": [
                ["style", "top", '1966px'],
                ["style", "height", '331px'],
                ["style", "display", 'none'],
                ["style", "left", '2047px'],
                ["style", "width", '512px']
            ],
            "${_Text6}": [
                ["style", "display", 'none']
            ],
            "${__4ampdu-title}": [
                ["style", "top", '2558px'],
                ["style", "left", '818px'],
                ["style", "display", 'none']
            ],
            "${_arrow1}": [
                ["style", "top", '450px'],
                ["style", "display", 'none'],
                ["style", "height", '20px'],
                ["style", "left", '2143px'],
                ["style", "width", '16px']
            ],
            "${_part3b}": [
                ["style", "top", '1742px'],
                ["style", "display", 'none'],
                ["style", "left", '229px'],
                ["transform", "scaleX", '0.0238']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(255,255,255,1)'],
                ["style", "overflow", 'hidden'],
                ["style", "height", '3000px'],
                ["style", "width", '2850px']
            ],
            "${_Text9}": [
                ["style", "display", 'none']
            ],
            "${_Text3}": [
                ["style", "top", '2838px'],
                ["style", "left", '725px'],
                ["style", "font-size", '500%']
            ],
            "${_part1c}": [
                ["style", "top", '553px'],
                ["style", "left", '421px'],
                ["style", "display", 'none']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 14580,
            autoPlay: true,
            timeline: [
                { id: "eid39", tween: [ "style", "${_arrow1}", "left", '259px', { fromValue: '2143px'}], position: 2750, duration: 1250 },
                { id: "eid52", tween: [ "style", "${__2msdu-aggretion}", "display", 'block', { fromValue: 'none'}], position: 5000, duration: 0 },
                { id: "eid8", tween: [ "style", "${_part1b}", "display", 'block', { fromValue: 'none'}], position: 2500, duration: 0 },
                { id: "eid4", tween: [ "style", "${_part1}", "left", '255px', { fromValue: '-1100px'}], position: 750, duration: 1000 },
                { id: "eid98", tween: [ "style", "${_part1}", "left", '329px', { fromValue: '255px'}], position: 1750, duration: 12830 },
                { id: "eid41", tween: [ "style", "${_arrow1}", "width", '2112px', { fromValue: '16px'}], position: 2750, duration: 1250 },
                { id: "eid2", tween: [ "style", "${_part1}", "display", 'block', { fromValue: 'none'}], position: 750, duration: 0 },
                { id: "eid83", tween: [ "style", "${_Text10}", "display", 'block', { fromValue: 'none'}], position: 14000, duration: 0 },
                { id: "eid84", tween: [ "style", "${_Text10}", "display", 'none', { fromValue: 'block'}], position: 14250, duration: 0 },
                { id: "eid5", tween: [ "style", "${_Text4}", "display", 'block', { fromValue: 'none'}], position: 2000, duration: 0 },
                { id: "eid7", tween: [ "style", "${_Text4}", "display", 'none', { fromValue: 'block'}], position: 2250, duration: 0 },
                { id: "eid50", tween: [ "style", "${_Text5}", "display", 'block', { fromValue: 'none'}], position: 4500, duration: 0 },
                { id: "eid51", tween: [ "style", "${_Text5}", "display", 'none', { fromValue: 'block'}], position: 4750, duration: 0 },
                { id: "eid116", tween: [ "style", "${_Text5}", "display", 'none', { fromValue: 'none'}], position: 14067, duration: 0 },
                { id: "eid65", tween: [ "style", "${_part3a}", "display", 'block', { fromValue: 'none'}], position: 9000, duration: 0 },
                { id: "eid49", tween: [ "style", "${_part1d}", "display", 'block', { fromValue: 'none'}], position: 4250, duration: 0 },
                { id: "eid67", tween: [ "style", "${_part3a}", "left", '234px', { fromValue: '-2250px'}], position: 9000, duration: 1000 },
                { id: "eid55", tween: [ "style", "${_part2a}", "left", '239px', { fromValue: '-1700px'}], position: 5250, duration: 1000 },
                { id: "eid93", tween: [ "style", "${_Text2}", "display", 'none', { fromValue: 'block'}], position: 14500, duration: 0 },
                { id: "eid9", tween: [ "style", "${_arrow1}", "display", 'block', { fromValue: 'none'}], position: 2750, duration: 0 },
                { id: "eid120", tween: [ "style", "${_Text2}", "top", '2745px', { fromValue: '2745px'}], position: 0, duration: 0 },
                { id: "eid48", tween: [ "style", "${_part1c}", "display", 'block', { fromValue: 'none'}], position: 4000, duration: 0 },
                { id: "eid53", tween: [ "style", "${_part2a}", "display", 'block', { fromValue: 'none'}], position: 5250, duration: 0 },
                { id: "eid56", tween: [ "style", "${_Text6}", "display", 'block', { fromValue: 'none'}], position: 6500, duration: 0 },
                { id: "eid57", tween: [ "style", "${_Text6}", "display", 'none', { fromValue: 'block'}], position: 6750, duration: 0 },
                { id: "eid68", tween: [ "style", "${_Text8}", "display", 'block', { fromValue: 'none'}], position: 10250, duration: 0 },
                { id: "eid69", tween: [ "style", "${_Text8}", "display", 'none', { fromValue: 'block'}], position: 10500, duration: 0 },
                { id: "eid77", tween: [ "style", "${_Text9}", "display", 'block', { fromValue: 'none'}], position: 12000, duration: 0 },
                { id: "eid78", tween: [ "style", "${_Text9}", "display", 'none', { fromValue: 'block'}], position: 12250, duration: 0 },
                { id: "eid80", tween: [ "style", "${_part4}", "display", 'block', { fromValue: 'none'}], position: 12750, duration: 0 },
                { id: "eid79", tween: [ "style", "${__4ampdu-title}", "display", 'block', { fromValue: 'none'}], position: 12500, duration: 0 },
                { id: "eid119", tween: [ "style", "${_Text5}", "width", '934px', { fromValue: '934px'}], position: 14067, duration: 0 },
                { id: "eid61", tween: [ "transform", "${_part2b}", "scaleX", '1', { fromValue: '0.02739'}], position: 7000, duration: 1000 },
                { id: "eid62", tween: [ "style", "${_Text7}", "display", 'block', { fromValue: 'none'}], position: 8250, duration: 0 },
                { id: "eid63", tween: [ "style", "${_Text7}", "display", 'none', { fromValue: 'block'}], position: 8500, duration: 0 },
                { id: "eid76", tween: [ "transform", "${_part3b}", "scaleX", '1', { fromValue: '0.0238'}], position: 10750, duration: 1000 },
                { id: "eid117", tween: [ "style", "${_Text5}", "height", '149px', { fromValue: '149px'}], position: 14067, duration: 0 },
                { id: "eid82", tween: [ "style", "${_part4}", "left", '229px', { fromValue: '-2050px'}], position: 12750, duration: 1000 },
                { id: "eid58", tween: [ "style", "${_part2b}", "display", 'block', { fromValue: 'none'}], position: 7000, duration: 0 },
                { id: "eid40", tween: [ "style", "${_arrow1}", "top", '430px', { fromValue: '450px'}], position: 2750, duration: 1250 },
                { id: "eid1", tween: [ "style", "${__1no-aggretion}", "display", 'block', { fromValue: 'none'}], position: 500, duration: 0 },
                { id: "eid70", tween: [ "style", "${_part3b}", "display", 'block', { fromValue: 'none'}], position: 10750, duration: 0 },
                { id: "eid64", tween: [ "style", "${_ampdu-aggretion}", "display", 'block', { fromValue: 'none'}], position: 8750, duration: 0 },
                { id: "eid43", tween: [ "style", "${_arrow1}", "height", '260px', { fromValue: '20px'}], position: 2750, duration: 1250 }            ]
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
})(jQuery, AdobeEdge, "EDGE-19333916");
