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
                id: 'block1',
                display: 'none',
                type: 'image',
                rect: ['109px', '505px','344px','184px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"block1.png",'0px','0px']
            },
            {
                id: 'block-track',
                display: 'none',
                type: 'image',
                rect: ['113px', '621px','536px','272px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"block-track.png",'0px','0px']
            },
            {
                id: 'reference-burst',
                display: 'none',
                type: 'image',
                rect: ['76px', '779px','584px','328px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"reference-burst.png",'0px','0px']
            },
            {
                id: 'Text3',
                display: 'none',
                type: 'text',
                rect: ['756', '844','auto','auto','auto', 'auto'],
                text: "Two reference bursts for timing recovery <br>and slot assignment",
                align: "left",
                font: ['Times New Roman, Times, serif', [375, "%"], "rgba(0,0,0,1)", "700", "none", "normal"]
            },
            {
                id: 'station1',
                display: 'none',
                type: 'image',
                rect: ['422px', '491px','308px','216px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"station1.png",'0px','0px']
            },
            {
                id: 'station2',
                display: 'none',
                type: 'image',
                rect: ['718px', '520px','316px','192px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"station2.png",'0px','0px']
            },
            {
                id: 'station2-track-1',
                display: 'none',
                type: 'image',
                rect: ['719px', '581px','1692px','564px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"station2-track-1.png",'0px','0px']
            },
            {
                id: 'information',
                display: 'none',
                type: 'image',
                rect: ['711px', '1001px','1548px','272px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"information.png",'0px','0px']
            },
            {
                id: 'information-track',
                display: 'none',
                type: 'image',
                rect: ['682px', '1174px','1368px','580px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"information-track.png",'0px','0px']
            },
            {
                id: 'carrier-block',
                display: 'none',
                type: 'image',
                rect: ['680px', '1624px','1368px','276px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"carrier-block.png",'0px','0px']
            },
            {
                id: 'station3',
                display: 'none',
                type: 'image',
                rect: ['950px', '466px','1532px','412px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"station3.png",'0px','0px']
            },
            {
                id: 'frame-period',
                display: 'none',
                type: 'image',
                rect: ['105px', '397px','2308px','124px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"frame-period.png",'0px','0px']
            },
            {
                id: 'arrow122',
                display: 'none',
                type: 'image',
                rect: ['2259px', '878px','54px','463px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"arrow12.png",'0px','0px'],
                transform: [[],['-18']]
            },
            {
                id: 'Text4',
                display: 'block',
                type: 'text',
                rect: ['563px', '2046px','auto','auto','auto', 'auto'],
                text: "Click or Touch on Figure for Each Step of the Animation",
                align: "center",
                font: ['\'Times New Roman\', Times, serif', [375, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: 'Text5',
                type: 'text',
                rect: ['497px', '2134px','auto','auto','auto', 'auto'],
                text: "Figure  16.12  Example of TDMA Frame Format",
                align: "center",
                font: ['\'Times New Roman\', Times, serif', [475, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: 'Text2',
                display: 'none',
                type: 'text',
                rect: ['1849px', '1294px','auto','auto','auto', 'auto'],
                text: "Guard times ensure<br>signals do not overlap<br>even when coming<br>from different locations.<br>",
                align: "left",
                font: ['\'Times New Roman\', Times, serif', [375, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
            }],
            symbolInstances: [

            ]
        },
    states: {
        "Base State": {
            "${_Text3}": [
                ["style", "display", 'none'],
                ["style", "font-family", 'Times New Roman, Times, serif'],
                ["style", "font-weight", '700'],
                ["style", "font-size", '375%']
            ],
            "${_Text2}": [
                ["style", "top", '1294px'],
                ["style", "left", '1849px'],
                ["style", "display", 'none']
            ],
            "${_station2}": [
                ["style", "display", 'none'],
                ["style", "left", '718px'],
                ["style", "top", '-210px']
            ],
            "${_information}": [
                ["style", "top", '1001px'],
                ["style", "left", '711px'],
                ["style", "display", 'none']
            ],
            "${_block-track}": [
                ["style", "top", '621px'],
                ["style", "height", '16px'],
                ["style", "display", 'none'],
                ["style", "left", '159px'],
                ["style", "width", '88px']
            ],
            "${_information-track}": [
                ["style", "top", '1174px'],
                ["style", "display", 'none'],
                ["style", "height", '36px'],
                ["style", "left", '758px'],
                ["style", "width", '344px']
            ],
            "${_reference-burst}": [
                ["style", "top", '779px'],
                ["style", "left", '76px'],
                ["style", "display", 'none']
            ],
            "${_station2-track-1}": [
                ["style", "top", '579px'],
                ["style", "display", 'none'],
                ["style", "height", '88px'],
                ["style", "left", '755px'],
                ["style", "width", '212px']
            ],
            "${_station3}": [
                ["style", "top", '-400px'],
                ["style", "left", '950px'],
                ["style", "display", 'none']
            ],
            "${_block1}": [
                ["style", "top", '505px'],
                ["style", "left", '109px'],
                ["style", "display", 'none']
            ],
            "${_arrow122}": [
                ["style", "top", '832px'],
                ["transform", "scaleY", '0.08737'],
                ["transform", "rotateZ", '-18deg'],
                ["style", "height", '463px'],
                ["style", "display", 'none'],
                ["style", "left", '2245px'],
                ["style", "width", '54px']
            ],
            "${_station1}": [
                ["style", "top", '-210px'],
                ["style", "left", '422px'],
                ["style", "display", 'none']
            ],
            "${_Text5}": [
                ["style", "top", '2134px'],
                ["style", "left", '497px'],
                ["style", "font-size", '475%']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(255,255,255,1)'],
                ["style", "overflow", 'hidden'],
                ["style", "height", '2250px'],
                ["style", "width", '2500px']
            ],
            "${_frame-period}": [
                ["style", "top", '397px'],
                ["style", "left", '105px'],
                ["style", "display", 'none']
            ],
            "${_Text4}": [
                ["style", "top", '2036px'],
                ["style", "left", '543px'],
                ["style", "display", 'block']
            ],
            "${_carrier-block}": [
                ["style", "top", '1624px'],
                ["style", "left", '680px'],
                ["style", "display", 'none']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 14000,
            autoPlay: true,
            timeline: [
                { id: "eid8", tween: [ "style", "${_block-track}", "left", '113px', { fromValue: '159px'}], position: 1000, duration: 1250 },
                { id: "eid4", tween: [ "style", "${_block-track}", "height", '272px', { fromValue: '16px'}], position: 1000, duration: 1250 },
                { id: "eid1", tween: [ "style", "${_block1}", "display", 'block', { fromValue: 'none'}], position: 500, duration: 0 },
                { id: "eid44", tween: [ "style", "${_Text2}", "display", 'block', { fromValue: 'none'}], position: 13250, duration: 0 },
                { id: "eid50", tween: [ "style", "${_Text2}", "display", 'none', { fromValue: 'block'}], position: 13500, duration: 0 },
                { id: "eid19", tween: [ "style", "${_station2}", "top", '520px', { fromValue: '-210px'}], position: 4500, duration: 1000 },
                { id: "eid40", tween: [ "style", "${_station3}", "display", 'block', { fromValue: 'none'}], position: 10250, duration: 0 },
                { id: "eid31", tween: [ "style", "${_information}", "display", 'block', { fromValue: 'none'}], position: 8000, duration: 0 },
                { id: "eid15", tween: [ "style", "${_station1}", "top", '491px', { fromValue: '-210px'}], position: 3250, duration: 1000 },
                { id: "eid38", tween: [ "style", "${_information-track}", "left", '682px', { fromValue: '758px'}], position: 8250, duration: 1500 },
                { id: "eid6", tween: [ "style", "${_block-track}", "width", '536px', { fromValue: '88px'}], position: 1000, duration: 1250 },
                { id: "eid22", tween: [ "style", "${_station2-track-1}", "height", '564px', { fromValue: '88px'}], position: 5750, duration: 2000 },
                { id: "eid54", tween: [ "style", "${_Text4}", "display", 'none', { fromValue: 'block'}], position: 13750, duration: 0 },
                { id: "eid49", tween: [ "transform", "${_arrow122}", "scaleY", '1', { fromValue: '0.08737'}], position: 12000, duration: 1000 },
                { id: "eid45", tween: [ "style", "${_arrow122}", "display", 'block', { fromValue: 'none'}], position: 12000, duration: 0 },
                { id: "eid53", tween: [ "style", "${_arrow122}", "display", 'none', { fromValue: 'block'}], position: 13500, duration: 0 },
                { id: "eid55", tween: [ "style", "${_Text4}", "left", '543px', { fromValue: '543px'}], position: 13394, duration: 0 },
                { id: "eid20", tween: [ "style", "${_station2-track-1}", "display", 'block', { fromValue: 'none'}], position: 5750, duration: 0 },
                { id: "eid34", tween: [ "style", "${_information-track}", "height", '580px', { fromValue: '36px'}], position: 8250, duration: 1500 },
                { id: "eid43", tween: [ "style", "${_station2-track-1}", "top", '579px', { fromValue: '579px'}], position: 12000, duration: 0 },
                { id: "eid11", tween: [ "style", "${_Text3}", "display", 'block', { fromValue: 'none'}], position: 2750, duration: 0 },
                { id: "eid12", tween: [ "style", "${_Text3}", "display", 'none', { fromValue: 'block'}], position: 3000, duration: 0 },
                { id: "eid10", tween: [ "style", "${_reference-burst}", "display", 'block', { fromValue: 'none'}], position: 2500, duration: 0 },
                { id: "eid13", tween: [ "style", "${_station1}", "display", 'block', { fromValue: 'none'}], position: 3250, duration: 0 },
                { id: "eid42", tween: [ "style", "${_station3}", "top", '466px', { fromValue: '-400px'}], position: 10250, duration: 1500 },
                { id: "eid36", tween: [ "style", "${_information-track}", "width", '1368px', { fromValue: '344px'}], position: 8250, duration: 1500 },
                { id: "eid2", tween: [ "style", "${_block-track}", "display", 'block', { fromValue: 'none'}], position: 1000, duration: 0 },
                { id: "eid32", tween: [ "style", "${_information-track}", "display", 'block', { fromValue: 'none'}], position: 8250, duration: 0 },
                { id: "eid56", tween: [ "style", "${_Text4}", "top", '2036px', { fromValue: '2036px'}], position: 13394, duration: 0 },
                { id: "eid17", tween: [ "style", "${_station2}", "display", 'block', { fromValue: 'none'}], position: 4500, duration: 0 },
                { id: "eid39", tween: [ "style", "${_carrier-block}", "display", 'block', { fromValue: 'none'}], position: 10000, duration: 0 },
                { id: "eid28", tween: [ "style", "${_station2-track-1}", "width", '1692px', { fromValue: '212px'}], position: 5750, duration: 2000 },
                { id: "eid9", tween: [ "style", "${_frame-period}", "display", 'block', { fromValue: 'none'}], position: 750, duration: 0 },
                { id: "eid30", tween: [ "style", "${_station2-track-1}", "left", '719px', { fromValue: '755px'}], position: 5750, duration: 2000 }            ]
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
})(jQuery, AdobeEdge, "EDGE-20158451");
