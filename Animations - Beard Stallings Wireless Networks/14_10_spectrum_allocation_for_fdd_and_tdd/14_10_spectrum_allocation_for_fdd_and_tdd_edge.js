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
                rect: ['368px', '1859px','auto','auto','auto', 'auto'],
                text: "Figure  14.10  Spectrum Allocation for FDD and TDD",
                font: ['Times New Roman, Times, serif', [475, "%"], "rgba(0,0,0,1)", "700", "none", ""]
            },
            {
                id: 'Text2',
                display: 'block',
                type: 'text',
                rect: ['523px', '1788px','auto','auto','auto', 'auto'],
                text: "Click or Touch on Figure for Each Step of the Animation",
                align: "left",
                font: ['\'Times New Roman\', Times, serif', [375, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: 'fdd',
                display: 'none',
                type: 'image',
                rect: ['1090px', '792px','288px','192px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"fdd.png",'0px','0px']
            },
            {
                id: 'fdd-axis',
                display: 'none',
                type: 'image',
                rect: ['281px', '519px','1968px','168px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"fdd-axis.png",'0px','0px']
            },
            {
                id: 'uppper-frame',
                display: 'none',
                type: 'image',
                rect: ['326px', '19px','1792px','332px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"uppper-frame.png",'0px','0px']
            },
            {
                id: 'u1',
                display: 'none',
                type: 'image',
                rect: ['332px', '221px','288px','624px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"u1.png",'0px','0px']
            },
            {
                id: 'wo',
                display: 'none',
                type: 'image',
                rect: ['488px', '604px','884px','232px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"wo.png",'0px','0px']
            },
            {
                id: 'd1',
                display: 'none',
                type: 'image',
                rect: ['1256px', '213px','288px','624px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"d1.png",'0px','0px']
            },
            {
                id: 'Text3',
                display: 'none',
                type: 'text',
                rect: ['1535px', '729px','auto','auto','auto', 'auto'],
                text: "User 1 uses subcarrier blocks<br>U1 for upload and D1 for download,<br>separated by W<sub>0</sub>.",
                align: "left",
                font: ['\'Times New Roman\', Times, serif', [375, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: 'u2',
                display: 'none',
                type: 'image',
                rect: ['486px', '207px','248px','456px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"u2.png",'0px','0px']
            },
            {
                id: 'd22',
                display: 'none',
                type: 'image',
                rect: ['1454px', '209px','248px','456px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"d2.png",'0px','0px']
            },
            {
                id: 'u3',
                display: 'none',
                type: 'image',
                rect: ['622px', '208px','248px','456px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"u3.png",'0px','0px']
            },
            {
                id: 'd3',
                display: 'none',
                type: 'image',
                rect: ['1634px', '210px','248px','456px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"d3.png",'0px','0px']
            },
            {
                id: 'u4',
                display: 'none',
                type: 'image',
                rect: ['760px', '207px','248px','456px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"u4.png",'0px','0px']
            },
            {
                id: 'd42',
                display: 'none',
                type: 'image',
                rect: ['1810px', '209px','248px','456px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"d4.png",'0px','0px']
            },
            {
                id: 'tdd',
                display: 'none',
                type: 'image',
                rect: ['1031px', '1480px','468px','192px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"tdd.png",'0px','0px']
            },
            {
                id: 'tdd-axis',
                display: 'none',
                type: 'image',
                rect: ['255px', '1308px','2056px','204px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"tdd-axis.png",'0px','0px']
            },
            {
                id: 'channel1',
                display: 'none',
                type: 'image',
                rect: ['326px', '1004px','492px','616px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"channel1.png",'0px','0px']
            },
            {
                id: 'channel-234',
                display: 'none',
                type: 'image',
                rect: ['660px', '1004px','42.9%','21.7%','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"channel-234.png",'0%','0%','1072px','456px']
            },
            {
                id: 'Text5',
                display: 'none',
                type: 'text',
                rect: ['806', '1009','auto','auto','auto', 'auto'],
                text: "Channel 1 uses its block of time and can balance<br>uplink and downlink time slots inside its time allocation.",
                align: "left",
                font: ['\'Times New Roman\', Times, serif', [375, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
            }],
            symbolInstances: [

            ]
        },
    states: {
        "Base State": {
            "${_Text3}": [
                ["style", "top", '825px'],
                ["style", "left", '1467px'],
                ["style", "display", 'none']
            ],
            "${_Text5}": [
                ["style", "display", 'none']
            ],
            "${_tdd}": [
                ["style", "top", '1480px'],
                ["style", "left", '1031px'],
                ["style", "display", 'none']
            ],
            "${_u4}": [
                ["style", "display", 'none'],
                ["style", "left", '760px'],
                ["style", "top", '207px']
            ],
            "${_d1}": [
                ["style", "top", '214px'],
                ["style", "display", 'none'],
                ["style", "left", '1320px'],
                ["style", "width", '12px']
            ],
            "${_uppper-frame}": [
                ["style", "top", '-350px'],
                ["style", "left", '326px'],
                ["style", "display", 'none']
            ],
            "${_d3}": [
                ["style", "top", '209px'],
                ["style", "left", '1634px'],
                ["style", "display", 'none']
            ],
            "${_channel-234}": [
                ["style", "top", '1004px'],
                ["style", "display", 'none'],
                ["style", "left", '728px'],
                ["style", "width", '0.24%']
            ],
            "${_Text2}": [
                ["style", "top", '1788px'],
                ["style", "display", 'block'],
                ["style", "left", '523px'],
                ["style", "font-size", '375%']
            ],
            "${_d22}": [
                ["style", "top", '209px'],
                ["style", "left", '1454px'],
                ["style", "display", 'none']
            ],
            "${_u2}": [
                ["style", "top", '207px'],
                ["style", "left", '486px'],
                ["style", "display", 'none']
            ],
            "${_fdd}": [
                ["style", "top", '792px'],
                ["style", "left", '1090px'],
                ["style", "display", 'none']
            ],
            "${_channel1}": [
                ["style", "top", '1004px'],
                ["style", "display", 'none'],
                ["style", "left", '412px'],
                ["style", "width", '22px']
            ],
            "${_u1}": [
                ["style", "top", '222px'],
                ["style", "display", 'none'],
                ["style", "left", '406px'],
                ["style", "width", '26px']
            ],
            "${_tdd-axis}": [
                ["style", "top", '1303px'],
                ["style", "left", '-2136px'],
                ["style", "display", 'none']
            ],
            "${_Text}": [
                ["style", "top", '1859px'],
                ["style", "font-family", 'Times New Roman, Times, serif'],
                ["style", "font-weight", '700'],
                ["style", "left", '368px'],
                ["style", "font-size", '500%']
            ],
            "${_u3}": [
                ["style", "top", '207px'],
                ["style", "left", '626px'],
                ["style", "display", 'none']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(255,255,255,1)'],
                ["style", "width", '2500px'],
                ["style", "height", '2000px'],
                ["style", "overflow", 'hidden']
            ],
            "${_wo}": [
                ["style", "top", '604px'],
                ["style", "display", 'none'],
                ["style", "left", '488px'],
                ["transform", "scaleX", '0.02714']
            ],
            "${_fdd-axis}": [
                ["style", "top", '521px'],
                ["style", "left", '-2123px'],
                ["style", "display", 'none']
            ],
            "${_d42}": [
                ["style", "top", '209px'],
                ["style", "left", '1810px'],
                ["style", "display", 'none']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 15000,
            autoPlay: true,
            timeline: [
                { id: "eid26", tween: [ "style", "${_d1}", "left", '1256px', { fromValue: '1320px'}], position: 5250, duration: 750 },
                { id: "eid43", tween: [ "style", "${_tdd-axis}", "left", '255px', { fromValue: '-2136px'}], position: 10250, duration: 1250 },
                { id: "eid40", tween: [ "style", "${_tdd}", "display", 'block', { fromValue: 'none'}], position: 9750, duration: 0 },
                { id: "eid14", tween: [ "style", "${_u1}", "width", '288px', { fromValue: '26px'}], position: 3250, duration: 750 },
                { id: "eid63", tween: [ "style", "${_Text5}", "display", 'block', { fromValue: 'none'}], position: 13000, duration: 0 },
                { id: "eid64", tween: [ "style", "${_Text5}", "display", 'none', { fromValue: 'block'}], position: 13250, duration: 0 },
                { id: "eid58", tween: [ "style", "${_channel-234}", "display", 'block', { fromValue: 'none'}], position: 13500, duration: 0 },
                { id: "eid51", tween: [ "style", "${_channel1}", "display", 'block', { fromValue: 'none'}], position: 11750, duration: 0 },
                { id: "eid22", tween: [ "style", "${_d1}", "display", 'block', { fromValue: 'none'}], position: 5250, duration: 0 },
                { id: "eid16", tween: [ "style", "${_u1}", "left", '332px', { fromValue: '406px'}], position: 3250, duration: 750 },
                { id: "eid11", tween: [ "style", "${_uppper-frame}", "top", '19px', { fromValue: '-350px'}], position: 2000, duration: 1000 },
                { id: "eid57", tween: [ "style", "${_channel1}", "left", '326px', { fromValue: '412px'}], position: 11750, duration: 1000 },
                { id: "eid55", tween: [ "style", "${_channel1}", "width", '492px', { fromValue: '22px'}], position: 11750, duration: 1000 },
                { id: "eid60", tween: [ "style", "${_channel-234}", "width", '42.88%', { fromValue: '0.24%'}], position: 13500, duration: 1250 },
                { id: "eid74", tween: [ "style", "${_u3}", "left", '626px', { fromValue: '626px'}], position: 15000, duration: 0 },
                { id: "eid38", tween: [ "style", "${_u4}", "display", 'block', { fromValue: 'none'}], position: 8750, duration: 0 },
                { id: "eid39", tween: [ "style", "${_d42}", "display", 'block', { fromValue: 'none'}], position: 9250, duration: 0 },
                { id: "eid24", tween: [ "style", "${_d1}", "width", '288px', { fromValue: '12px'}], position: 5250, duration: 750 },
                { id: "eid65", tween: [ "style", "${_Text2}", "display", 'none', { fromValue: 'block'}], position: 15000, duration: 0 },
                { id: "eid12", tween: [ "style", "${_u1}", "display", 'block', { fromValue: 'none'}], position: 3250, duration: 0 },
                { id: "eid41", tween: [ "style", "${_tdd-axis}", "display", 'block', { fromValue: 'none'}], position: 10250, duration: 0 },
                { id: "eid30", tween: [ "style", "${_d22}", "display", 'block', { fromValue: 'none'}], position: 7250, duration: 0 },
                { id: "eid31", tween: [ "style", "${_u3}", "display", 'block', { fromValue: 'none'}], position: 7750, duration: 0 },
                { id: "eid27", tween: [ "style", "${_Text3}", "display", 'block', { fromValue: 'none'}], position: 6250, duration: 0 },
                { id: "eid28", tween: [ "style", "${_Text3}", "display", 'none', { fromValue: 'block'}], position: 6500, duration: 0 },
                { id: "eid2", tween: [ "style", "${_fdd-axis}", "display", 'block', { fromValue: 'none'}], position: 750, duration: 0 },
                { id: "eid17", tween: [ "style", "${_wo}", "display", 'block', { fromValue: 'none'}], position: 4250, duration: 0 },
                { id: "eid4", tween: [ "style", "${_fdd-axis}", "left", '281px', { fromValue: '-2123px'}], position: 750, duration: 1000 },
                { id: "eid32", tween: [ "style", "${_d3}", "display", 'block', { fromValue: 'none'}], position: 8250, duration: 0 },
                { id: "eid62", tween: [ "style", "${_channel-234}", "left", '660px', { fromValue: '728px'}], position: 13500, duration: 1250 },
                { id: "eid1", tween: [ "style", "${_fdd}", "display", 'block', { fromValue: 'none'}], position: 500, duration: 0 },
                { id: "eid21", tween: [ "transform", "${_wo}", "scaleX", '1', { fromValue: '0.02714'}], position: 4250, duration: 750 },
                { id: "eid29", tween: [ "style", "${_u2}", "display", 'block', { fromValue: 'none'}], position: 6750, duration: 0 },
                { id: "eid9", tween: [ "style", "${_uppper-frame}", "display", 'block', { fromValue: 'none'}], position: 2000, duration: 0 }            ]
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
})(jQuery, AdobeEdge, "EDGE-25793657");
