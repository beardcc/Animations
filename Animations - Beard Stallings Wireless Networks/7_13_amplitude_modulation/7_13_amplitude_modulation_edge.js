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
                display: 'block',
                type: 'image',
                rect: ['540px', '322px','33px','55px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"1.png",'0px','0px']
            },
            {
                id: 'messagesignal',
                type: 'image',
                rect: ['60px', '291px','74.5%','25.4%','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"messagesignal.png",'0%','0%','469px','160px']
            },
            {
                id: 'm',
                display: 'block',
                type: 'image',
                rect: ['489px', '269px','72px','46px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"m.png",'0px','0px']
            },
            {
                id: '_-m',
                display: 'block',
                type: 'image',
                rect: ['479px', '434px','80px','42px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"-m.png",'0px','0px']
            },
            {
                id: 'Text9',
                display: 'block',
                type: 'text',
                rect: ['132px', '519px','328px','27px','auto', 'auto'],
                text: "[1+<i>m(t)</i>] and -[1+<i>m(t)</i>] form the envelope for the signal.",
                align: "left",
                font: ['\'Times New Roman\', Times, serif', [94, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: 'st',
                display: 'block',
                type: 'image',
                rect: ['42px', '321px','40px','34px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"st.png",'0px','0px']
            },
            {
                id: 'axis-a',
                display: 'block',
                type: 'image',
                rect: ['12px', '21px','612px','137px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"axis-a.png",'0px','0px']
            },
            {
                id: 'ssmw',
                display: 'block',
                type: 'image',
                rect: ['62px', '67px','74.3%','14.3%','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"ssmw.png",'0%','0%','468px','90px']
            },
            {
                id: 'axis-b',
                display: 'block',
                type: 'image',
                rect: ['44px', '262px','551px','211px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"axis-b.png",'0px','0px']
            },
            {
                id: 'dottedaxis',
                display: 'block',
                type: 'image',
                rect: ['63px', '305px','536px','36px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"dottedaxis.png",'0px','0px']
            },
            {
                id: 'dottedaxis2png',
                display: 'block',
                type: 'image',
                rect: ['64px', '402px','536px','36px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"dottedaxis2png.png",'0px','0px']
            },
            {
                id: 'title',
                type: 'text',
                rect: ['168px', '584px','309px','24px','auto', 'auto'],
                text: "Figure 7.13 Amplitude Modulation",
                align: "left",
                font: ['Times New Roman, Times, serif', [119, "%"], "rgba(0,0,0,1)", "700", "none", "normal"]
            },
            {
                id: 'instruction',
                display: 'block',
                type: 'text',
                rect: ['126px', '582px','394px','24px','auto', 'auto'],
                text: "Click or Touch on Figure for Each Step of the Animation",
                align: "left",
                font: ['\'Times New Roman\', Times, serif', [94, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: 'subtitlea',
                display: 'block',
                type: 'text',
                rect: ['228px', '173px','auto','auto','auto', 'auto'],
                text: "(a) Sinusoidal modulating wave",
                align: "left",
                font: ['\'Times New Roman\', Times, serif', 13, "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: 'Text6',
                display: 'block',
                type: 'text',
                rect: ['237px', '468px','auto','auto','auto', 'auto'],
                text: "(b) Resulting AM  Signal",
                align: "left",
                font: ['\'Times New Roman\', Times, serif', 13, "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: 'Text7',
                display: 'block',
                type: 'text',
                rect: ['222px', '229px','162px','24px','auto', 'auto'],
                text: "<i>m(t)</i> is shifted up by +1.",
                align: "left",
                font: ['\'Times New Roman\', Times, serif', [94, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: 'Text8',
                display: 'block',
                type: 'text',
                rect: ['154px', '519px','376px','36px','auto', 'auto'],
                text: "[1+ <i>m(t)</i>] and -[1+<i>m(t)</i>] form the envelope for the signal.",
                align: "left",
                font: ['\'Times New Roman\', Times, serif', [94, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: 'upssmw2',
                type: 'image',
                rect: ['69px', '280px','74.3%','14.3%','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"upssmw.png",'0%','0%','468px','90px']
            },
            {
                id: 'downssmw2',
                type: 'image',
                rect: ['71px', '378px','74.3%','14.3%','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"downssmw.png",'0%','0%','468px','90px']
            },
            {
                id: 'upssmw',
                display: 'block',
                type: 'image',
                rect: ['69px', '329px','468px','90px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"upssmw.png",'0px','0px','100%','100%']
            },
            {
                id: 'downssmw',
                display: 'block',
                type: 'image',
                rect: ['71px', '332px','468px','90px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"downssmw.png",'0px','0px','100%','100%']
            },
            {
                id: 'rot',
                display: 'block',
                type: 'image',
                rect: ['434px', '291px','162px','100px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"rot.png",'0px','0px']
            }],
            symbolInstances: [

            ]
        },
    states: {
        "Base State": {
            "${_downssmw2}": [
                ["style", "top", '378px'],
                ["style", "left", '71px'],
                ["style", "width", '0%']
            ],
            "${_ssmw}": [
                ["style", "display", 'block'],
                ["style", "top", '67px'],
                ["style", "left", '62px'],
                ["style", "width", '0%']
            ],
            "${_rot}": [
                ["style", "top", '291px'],
                ["style", "left", '434px'],
                ["style", "display", 'block']
            ],
            "${_m}": [
                ["style", "top", '269px'],
                ["style", "left", '489px'],
                ["style", "display", 'block']
            ],
            "${_dottedaxis2png}": [
                ["style", "top", '355px'],
                ["style", "left", '64px'],
                ["style", "display", 'block']
            ],
            "${_Text8}": [
                ["style", "top", '519px'],
                ["style", "left", '154px'],
                ["style", "display", 'block']
            ],
            "${_upssmw2}": [
                ["style", "top", '280px'],
                ["style", "left", '69px'],
                ["style", "width", '0%']
            ],
            "${_upssmw}": [
                ["style", "display", 'block'],
                ["style", "left", '69px'],
                ["style", "top", '329px']
            ],
            "${_subtitlea}": [
                ["style", "top", '173px'],
                ["style", "display", 'block'],
                ["style", "font-size", '13px'],
                ["style", "left", '228px'],
                ["style", "width", '174px']
            ],
            "${_title}": [
                ["style", "top", '584px'],
                ["style", "font-family", 'Times New Roman, Times, serif'],
                ["style", "font-weight", '700'],
                ["style", "left", '168px'],
                ["style", "font-size", '119%']
            ],
            "${_st}": [
                ["style", "top", '321px'],
                ["style", "left", '42px'],
                ["style", "display", 'block']
            ],
            "${_instruction}": [
                ["style", "display", 'block'],
                ["style", "top", '558px'],
                ["style", "left", '127px'],
                ["style", "font-size", '94%']
            ],
            "${_axis-a}": [
                ["style", "top", '21px'],
                ["style", "left", '12px'],
                ["style", "display", 'block']
            ],
            "${__-m}": [
                ["style", "top", '434px'],
                ["style", "height", '51px'],
                ["style", "display", 'block'],
                ["style", "left", '479px'],
                ["style", "width", '94px']
            ],
            "${_dottedaxis}": [
                ["style", "top", '355px'],
                ["style", "left", '63px'],
                ["style", "display", 'block']
            ],
            "${_Text6}": [
                ["style", "display", 'block'],
                ["style", "top", '468px'],
                ["style", "left", '237px'],
                ["style", "width", '140px']
            ],
            "${__1}": [
                ["style", "top", '322px'],
                ["style", "left", '540px'],
                ["style", "display", 'block']
            ],
            "${_downssmw}": [
                ["style", "display", 'block'],
                ["style", "left", '71px'],
                ["style", "top", '332px']
            ],
            "${_axis-b}": [
                ["style", "top", '262px'],
                ["style", "left", '44px'],
                ["style", "display", 'block']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(255,255,255,1)'],
                ["style", "overflow", 'hidden'],
                ["style", "height", '630px'],
                ["style", "width", '630px']
            ],
            "${_Text9}": [
                ["style", "top", '227px'],
                ["style", "display", 'block'],
                ["style", "height", '27px'],
                ["style", "left", '151px'],
                ["style", "width", '344px']
            ],
            "${_messagesignal}": [
                ["style", "top", '291px'],
                ["style", "left", '60px'],
                ["style", "width", '0%']
            ],
            "${_Text7}": [
                ["style", "top", '229px'],
                ["style", "font-size", '94%'],
                ["style", "height", '24px'],
                ["style", "display", 'block'],
                ["style", "left", '222px'],
                ["style", "width", '162px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 9750,
            autoPlay: true,
            timeline: [
                { id: "eid29", tween: [ "style", "${_upssmw}", "top", '280px', { fromValue: '329px'}], position: 2750, duration: 1000 },
                { id: "eid84", tween: [ "style", "${_Text9}", "width", '344px', { fromValue: '344px'}], position: 6000, duration: 0 },
                { id: "eid26", tween: [ "style", "${_downssmw}", "top", '378px', { fromValue: '332px'}], position: 2750, duration: 1000 },
                { id: "eid36", tween: [ "style", "${__-m}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid37", tween: [ "style", "${__-m}", "display", 'block', { fromValue: 'none'}], position: 3750, duration: 0 },
                { id: "eid53", tween: [ "style", "${__-m}", "display", 'none', { fromValue: 'block'}], position: 5000, duration: 0 },
                { id: "eid60", tween: [ "style", "${__-m}", "display", 'block', { fromValue: 'none'}], position: 7000, duration: 0 },
                { id: "eid17", tween: [ "style", "${_dottedaxis}", "top", '305px', { fromValue: '355px'}], position: 2750, duration: 1000 },
                { id: "eid73", tween: [ "style", "${_dottedaxis2png}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid74", tween: [ "style", "${_dottedaxis2png}", "display", 'block', { fromValue: 'none'}], position: 2750, duration: 0 },
                { id: "eid80", tween: [ "style", "${_Text9}", "top", '227px', { fromValue: '227px'}], position: 6581, duration: 0 },
                { id: "eid34", tween: [ "style", "${_m}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid35", tween: [ "style", "${_m}", "display", 'block', { fromValue: 'none'}], position: 3750, duration: 0 },
                { id: "eid52", tween: [ "style", "${_m}", "display", 'none', { fromValue: 'block'}], position: 5000, duration: 0 },
                { id: "eid61", tween: [ "style", "${_m}", "display", 'block', { fromValue: 'none'}], position: 7000, duration: 0 },
                { id: "eid14", tween: [ "style", "${__1}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid15", tween: [ "style", "${__1}", "display", 'block', { fromValue: 'none'}], position: 2550, duration: 0 },
                { id: "eid19", tween: [ "style", "${_dottedaxis2png}", "top", '402px', { fromValue: '355px'}], position: 2750, duration: 1000 },
                { id: "eid77", tween: [ "style", "${_instruction}", "left", '127px', { fromValue: '127px'}], position: 6750, duration: 0 },
                { id: "eid22", tween: [ "style", "${_downssmw}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid23", tween: [ "style", "${_downssmw}", "display", 'block', { fromValue: 'none'}], position: 2750, duration: 0 },
                { id: "eid51", tween: [ "style", "${_downssmw}", "display", 'none', { fromValue: 'block'}], position: 5000, duration: 0 },
                { id: "eid65", tween: [ "style", "${_st}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid66", tween: [ "style", "${_st}", "display", 'block', { fromValue: 'none'}], position: 9000, duration: 0 },
                { id: "eid71", tween: [ "style", "${_dottedaxis}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid72", tween: [ "style", "${_dottedaxis}", "display", 'block', { fromValue: 'none'}], position: 2750, duration: 0 },
                { id: "eid4", tween: [ "style", "${_axis-a}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid5", tween: [ "style", "${_axis-a}", "display", 'block', { fromValue: 'none'}], position: 500, duration: 0 },
                { id: "eid10", tween: [ "style", "${_Text6}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid11", tween: [ "style", "${_Text6}", "display", 'block', { fromValue: 'none'}], position: 2250, duration: 0 },
                { id: "eid39", tween: [ "style", "${_Text8}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid81", tween: [ "style", "${_Text9}", "left", '151px', { fromValue: '151px'}], position: 6581, duration: 0 },
                { id: "eid82", tween: [ "style", "${__-m}", "height", '51px', { fromValue: '51px'}], position: 9750, duration: 0 },
                { id: "eid1", tween: [ "style", "${_subtitlea}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid2", tween: [ "style", "${_subtitlea}", "display", 'block', { fromValue: 'none'}], position: 250, duration: 0 },
                { id: "eid57", tween: [ "style", "${_upssmw2}", "width", '74.29%', { fromValue: '0%'}], position: 5500, duration: 1500 },
                { id: "eid12", tween: [ "style", "${_axis-b}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid13", tween: [ "style", "${_axis-b}", "display", 'block', { fromValue: 'none'}], position: 2310, duration: 0 },
                { id: "eid20", tween: [ "style", "${_upssmw}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid21", tween: [ "style", "${_upssmw}", "display", 'block', { fromValue: 'none'}], position: 2750, duration: 0 },
                { id: "eid50", tween: [ "style", "${_upssmw}", "display", 'none', { fromValue: 'block'}], position: 5000, duration: 0 },
                { id: "eid67", tween: [ "style", "${_rot}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid68", tween: [ "style", "${_rot}", "display", 'block', { fromValue: 'none'}], position: 9415, duration: 0 },
                { id: "eid32", tween: [ "style", "${_Text7}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid33", tween: [ "style", "${_Text7}", "display", 'block', { fromValue: 'none'}], position: 4050, duration: 0 },
                { id: "eid38", tween: [ "style", "${_Text7}", "display", 'none', { fromValue: 'block'}], position: 4500, duration: 0 },
                { id: "eid6", tween: [ "style", "${_ssmw}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid7", tween: [ "style", "${_ssmw}", "display", 'block', { fromValue: 'none'}], position: 500, duration: 0 },
                { id: "eid31", tween: [ "style", "${_Text6}", "width", '140px', { fromValue: '140px'}], position: 3910, duration: 0 },
                { id: "eid64", tween: [ "style", "${_messagesignal}", "width", '74.45%', { fromValue: '0%'}], position: 7500, duration: 1500 },
                { id: "eid54", tween: [ "style", "${_Text9}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid55", tween: [ "style", "${_Text9}", "display", 'block', { fromValue: 'none'}], position: 5250, duration: 0 },
                { id: "eid62", tween: [ "style", "${_Text9}", "display", 'none', { fromValue: 'block'}], position: 7250, duration: 0 },
                { id: "eid59", tween: [ "style", "${_downssmw2}", "width", '74.29%', { fromValue: '0%'}], position: 5500, duration: 1500 },
                { id: "eid79", tween: [ "style", "${_instruction}", "top", '558px', { fromValue: '558px'}], position: 9616, duration: 0 },
                { id: "eid9", tween: [ "style", "${_ssmw}", "width", '74.29%', { fromValue: '0%'}], position: 500, duration: 1500 },
                { id: "eid69", tween: [ "style", "${_instruction}", "display", 'none', { fromValue: 'block'}], position: 9750, duration: 0 },
                { id: "eid83", tween: [ "style", "${__-m}", "width", '94px', { fromValue: '94px'}], position: 9750, duration: 0 }            ]
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
})(jQuery, AdobeEdge, "EDGE-1054143720");
