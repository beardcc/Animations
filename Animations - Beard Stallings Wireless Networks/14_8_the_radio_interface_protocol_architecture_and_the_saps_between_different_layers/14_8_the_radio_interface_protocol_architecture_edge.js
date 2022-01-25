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
                id: 'arrow4',
                display: 'none',
                type: 'image',
                rect: ['375px', '1309px','1072px','244px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"arrow4.png",'0px','0px']
            },
            {
                id: 'arrow3',
                display: 'none',
                type: 'image',
                rect: ['491px', '1090px','340px','220px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"arrow3.png",'0px','0px']
            },
            {
                id: 'logical-channels',
                display: 'none',
                type: 'image',
                rect: ['1396px', '875px','500px','220px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"logical-channels.png",'0px','0px']
            },
            {
                id: 'Text4',
                display: 'none',
                type: 'text',
                rect: ['57px', '410px','260px','auto','auto', 'auto'],
                text: "The MAC layer provides <br>services to the RLC through logical channels.",
                align: "center",
                font: ['\'Times New Roman\', Times, serif', [375, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: 'arrow33',
                display: 'none',
                type: 'image',
                rect: ['1602px', '765px','340px','220px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"arrow3.png",'0px','0px'],
                transform: [[],['92']]
            },
            {
                id: 'arr0w2',
                display: 'none',
                type: 'image',
                rect: ['876px', '849px','512px','248px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"arr0w2.png",'0px','0px']
            },
            {
                id: 'part2',
                display: 'none',
                type: 'image',
                rect: ['698px', '517px','872px','468px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"part2.png",'0px','0px']
            },
            {
                id: 'arrow1',
                display: 'none',
                type: 'image',
                rect: ['884px', '440px','512px','248px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"arrow1.png",'0px','0px']
            },
            {
                id: 'Text',
                display: 'block',
                type: 'text',
                rect: ['273px', '2131px','auto','auto','auto', 'auto'],
                text: "Click or Touch on Figure for Each Step of the Animation",
                font: ['Times New Roman, Times, serif', [375, "%"], "rgba(0,0,0,1)", "700", "none", ""]
            },
            {
                id: 'part1',
                display: 'none',
                type: 'image',
                rect: ['698px', '113px','884px','452px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"part1.png",'0px','0px']
            },
            {
                id: 'Text2',
                type: 'text',
                rect: ['106px', '2242px','auto','auto','auto', 'auto'],
                text: "Figure 14.8  The Radio Interface Protocol Architecture <br>and the SAPs between Different Layers",
                align: "center",
                font: ['\'Times New Roman\', Times, serif', [475, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: 'part3',
                display: 'none',
                type: 'image',
                rect: ['684px', '954px','872px','468px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"part3.png",'0px','0px']
            },
            {
                id: 'part4',
                display: 'none',
                type: 'image',
                rect: ['40px', '913px','872px','580px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"part4.png",'0px','0px']
            },
            {
                id: 'phy-part5',
                display: 'none',
                type: 'image',
                rect: ['130px', '1406px','1452px','580px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"phy-part5.png",'0px','0px']
            },
            {
                id: 'transport',
                display: 'none',
                type: 'image',
                rect: ['1382px', '1312px','536px','220px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"transport.png",'0px','0px']
            },
            {
                id: 'arrow32',
                display: 'none',
                type: 'image',
                rect: ['1499px', '1454px','340px','220px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"arrow3.png",'0px','0px'],
                transform: [[],['-91']]
            },
            {
                id: 'Text6',
                display: 'none',
                type: 'text',
                rect: ['1556px', '1630px','374px','437px','auto', 'auto'],
                text: "The PHY layer provides services to the MAC through transport channels.",
                align: "center",
                font: ['\'Times New Roman\', Times, serif', [375, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
            }],
            symbolInstances: [

            ]
        },
    states: {
        "Base State": {
            "${_Text2}": [
                ["style", "top", '2242px'],
                ["style", "text-align", 'center'],
                ["style", "left", '106px'],
                ["style", "font-size", '475%']
            ],
            "${_logical-channels}": [
                ["style", "top", '875px'],
                ["style", "left", '2035px'],
                ["style", "display", 'none']
            ],
            "${_arrow3}": [
                ["style", "top", '1090px'],
                ["style", "display", 'none'],
                ["style", "left", '491px'],
                ["style", "width", '134px']
            ],
            "${_Text4}": [
                ["style", "top", '410px'],
                ["style", "text-align", 'center'],
                ["style", "height", '437px'],
                ["style", "display", 'none'],
                ["transform", "scaleY", '1'],
                ["style", "left", '1533px'],
                ["style", "width", '419px']
            ],
            "${_phy-part5}": [
                ["style", "top", '1406px'],
                ["style", "left", '130px'],
                ["style", "display", 'none']
            ],
            "${_arrow33}": [
                ["style", "top", '765px'],
                ["style", "display", 'none'],
                ["style", "left", '1602px'],
                ["transform", "rotateZ", '92deg']
            ],
            "${_Text6}": [
                ["style", "top", '1630px'],
                ["style", "text-align", 'center'],
                ["style", "height", '437px'],
                ["style", "display", 'none'],
                ["style", "left", '1556px'],
                ["style", "width", '374px']
            ],
            "${_transport}": [
                ["style", "top", '1312px'],
                ["style", "left", '2250px'],
                ["style", "display", 'none']
            ],
            "${_arr0w2}": [
                ["style", "display", 'none'],
                ["style", "top", '849px'],
                ["style", "left", '876px'],
                ["style", "height", '71px']
            ],
            "${_part4}": [
                ["style", "top", '913px'],
                ["style", "left", '40px'],
                ["style", "display", 'none']
            ],
            "${_part3}": [
                ["style", "top", '954px'],
                ["style", "left", '684px'],
                ["style", "display", 'none']
            ],
            "${_arrow4}": [
                ["style", "top", '1309px'],
                ["style", "display", 'none'],
                ["style", "height", '71px'],
                ["style", "left", '823px'],
                ["style", "width", '512px']
            ],
            "${_arrow1}": [
                ["style", "display", 'none'],
                ["style", "top", '440px'],
                ["style", "left", '884px'],
                ["style", "height", '60px']
            ],
            "${_part2}": [
                ["style", "top", '517px'],
                ["style", "left", '698px'],
                ["style", "display", 'none']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(255,255,255,1)'],
                ["style", "width", '2000px'],
                ["style", "height", '2500px'],
                ["style", "overflow", 'hidden']
            ],
            "${_Text}": [
                ["style", "top", '2151px'],
                ["style", "font-weight", '700'],
                ["style", "display", 'block'],
                ["style", "font-family", 'Times New Roman, Times, serif'],
                ["style", "left", '273px'],
                ["style", "font-size", '375%']
            ],
            "${_arrow32}": [
                ["style", "top", '1454px'],
                ["style", "display", 'none'],
                ["style", "left", '1499px'],
                ["transform", "rotateZ", '-91deg']
            ],
            "${_part1}": [
                ["style", "top", '113px'],
                ["style", "left", '698px'],
                ["style", "display", 'none']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 14543,
            autoPlay: true,
            timeline: [
                { id: "eid23", tween: [ "style", "${_arrow4}", "display", 'block', { fromValue: 'none'}], position: 10000, duration: 0 },
                { id: "eid6", tween: [ "style", "${_arr0w2}", "display", 'block', { fromValue: 'none'}], position: 3250, duration: 0 },
                { id: "eid4", tween: [ "style", "${_arrow1}", "height", '248px', { fromValue: '60px'}], position: 750, duration: 2000 },
                { id: "eid20", tween: [ "style", "${_logical-channels}", "left", '1388px', { fromValue: '2035px'}], position: 8250, duration: 1000 },
                { id: "eid2", tween: [ "style", "${_arrow1}", "display", 'block', { fromValue: 'none'}], position: 750, duration: 0 },
                { id: "eid34", tween: [ "style", "${_arrow32}", "display", 'block', { fromValue: 'none'}], position: 13750, duration: 0 },
                { id: "eid37", tween: [ "style", "${_arrow32}", "display", 'none', { fromValue: 'block'}], position: 14250, duration: 0 },
                { id: "eid35", tween: [ "style", "${_Text6}", "display", 'block', { fromValue: 'none'}], position: 14000, duration: 0 },
                { id: "eid36", tween: [ "style", "${_Text6}", "display", 'none', { fromValue: 'block'}], position: 14250, duration: 0 },
                { id: "eid30", tween: [ "style", "${_phy-part5}", "display", 'block', { fromValue: 'none'}], position: 12250, duration: 0 },
                { id: "eid1", tween: [ "style", "${_part1}", "display", 'block', { fromValue: 'none'}], position: 500, duration: 0 },
                { id: "eid10", tween: [ "style", "${_part4}", "display", 'block', { fromValue: 'none'}], position: 5750, duration: 0 },
                { id: "eid33", tween: [ "style", "${_transport}", "left", '1382px', { fromValue: '2250px'}], position: 12500, duration: 1000 },
                { id: "eid21", tween: [ "style", "${_Text4}", "display", 'block', { fromValue: 'none'}], position: 9500, duration: 0 },
                { id: "eid22", tween: [ "style", "${_Text4}", "display", 'none', { fromValue: 'block'}], position: 9750, duration: 0 },
                { id: "eid45", tween: [ "style", "${_Text}", "top", '2151px', { fromValue: '2151px'}], position: 14183, duration: 0 },
                { id: "eid25", tween: [ "style", "${_arrow4}", "height", '244px', { fromValue: '71px'}], position: 10000, duration: 2000 },
                { id: "eid27", tween: [ "style", "${_arrow4}", "left", '375px', { fromValue: '823px'}], position: 10000, duration: 2000 },
                { id: "eid14", tween: [ "style", "${_logical-channels}", "display", 'block', { fromValue: 'none'}], position: 8250, duration: 0 },
                { id: "eid31", tween: [ "style", "${_transport}", "display", 'block', { fromValue: 'none'}], position: 12500, duration: 0 },
                { id: "eid40", tween: [ "style", "${_arrow33}", "display", 'block', { fromValue: 'none'}], position: 9379, duration: 0 },
                { id: "eid41", tween: [ "style", "${_arrow33}", "display", 'none', { fromValue: 'block'}], position: 9750, duration: 0 },
                { id: "eid9", tween: [ "style", "${_part3}", "display", 'block', { fromValue: 'none'}], position: 5500, duration: 0 },
                { id: "eid13", tween: [ "style", "${_arrow3}", "width", '340px', { fromValue: '134px'}], position: 6000, duration: 2000 },
                { id: "eid11", tween: [ "style", "${_arrow3}", "display", 'block', { fromValue: 'none'}], position: 6000, duration: 0 },
                { id: "eid29", tween: [ "style", "${_arrow4}", "width", '1072px', { fromValue: '512px'}], position: 10000, duration: 2000 },
                { id: "eid42", tween: [ "style", "${_Text}", "display", 'none', { fromValue: 'block'}], position: 14500, duration: 0 },
                { id: "eid8", tween: [ "style", "${_arr0w2}", "height", '248px', { fromValue: '71px'}], position: 3250, duration: 2000 },
                { id: "eid5", tween: [ "style", "${_part2}", "display", 'block', { fromValue: 'none'}], position: 3000, duration: 0 }            ]
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
})(jQuery, AdobeEdge, "EDGE-38692126");
