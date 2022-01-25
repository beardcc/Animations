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
                id: 'arrow22',
                display: 'none',
                type: 'image',
                rect: ['303px', '254px','58px','104px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"arrow22.png",'0px','0px']
            },
            {
                id: 'arrow12',
                display: 'none',
                type: 'image',
                rect: ['432px', '253px','65px','104px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"arrow12.png",'0px','0px','100%','100%']
            },
            {
                id: 'arrow1',
                display: 'none',
                type: 'image',
                rect: ['305', '253px','9.3%','16%','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"arrow1.png",'0%','0%','65px','104px']
            },
            {
                id: 'ul1',
                display: 'none',
                type: 'image',
                rect: ['335px', '329px','138px','139px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"ul1.png",'0px','0px']
            },
            {
                id: 'frequencytime',
                display: 'none',
                type: 'image',
                rect: ['62px', '66px','315px','273px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"frequency%2Ctime.png",'0px','0px']
            },
            {
                id: 'preamble',
                display: 'none',
                type: 'image',
                rect: ['124px', '129px','206px','152px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"preamble.png",'0px','0px']
            },
            {
                id: 'map1',
                display: 'none',
                type: 'image',
                rect: ['451px', '130px','138px','139px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"map1.png",'0px','0px']
            },
            {
                id: 'frame-duration',
                display: 'none',
                type: 'image',
                rect: ['135px', '122px','356px','59px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"frame-duration.png",'0px','0px']
            },
            {
                id: 'rtg1',
                display: 'none',
                type: 'image',
                rect: ['438px', '253px','58px','104px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"rtg1.png",'0px','0px']
            },
            {
                id: 'Text2',
                display: 'none',
                type: 'text',
                rect: ['491px', '285px','auto','auto','auto', 'auto'],
                text: "Group 1 <br>Downlink - Uplink - Downlink <br>half duplex operation.",
                align: "left",
                font: ['Times New Roman, Times, serif', [94, "%"], "rgba(0,0,0,1)", "700", "none", "normal"]
            },
            {
                id: 'arrow21',
                display: 'none',
                type: 'image',
                rect: ['123px', '253px','101px','104px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"arrow21.png",'0px','0px']
            },
            {
                id: 'ul2',
                display: 'none',
                type: 'image',
                rect: ['197px', '333px','138px','141px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"ul2.png",'0px','0px']
            },
            {
                id: 'tttg2',
                display: 'none',
                type: 'image',
                rect: ['158px', '259px','69px','97px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"tttg2.png",'0px','0px']
            },
            {
                id: 'map1-dl2',
                display: 'none',
                type: 'image',
                rect: ['332px', '142px','138px','141px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"map1-dl2.png",'0px','0px']
            },
            {
                id: 'ttg1',
                display: 'none',
                type: 'image',
                rect: ['306px', '252px','58px','104px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"ttg1.png",'0px','0px']
            },
            {
                id: 'ttg-comment',
                display: 'none',
                type: 'image',
                rect: ['116px', '472px','207px','44px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"ttg-comment.png",'0px','0px']
            },
            {
                id: 'Text5',
                display: 'none',
                type: 'text',
                rect: ['520px', '372px','auto','auto','auto', 'auto'],
                text: "Group 2<br> Uplink - Downlink<br>operation.",
                align: "left",
                font: ['\'Times New Roman\', Times, serif', [94, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: 'Text6',
                display: 'block',
                type: 'text',
                rect: ['186px', '564px','auto','auto','auto', 'auto'],
                text: "Click or Touch on Figure for Each Step  of the Animation",
                align: "center",
                font: ['\'Times New Roman\', Times, serif', [94, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: 'Text7',
                type: 'text',
                rect: ['95px', '589px','auto','auto','auto', 'auto'],
                text: "Figure  16.24  IEEE  802.16   OFDMA Frame Structure in FDD Mode",
                align: "center",
                font: ['\'Times New Roman\', Times, serif', [119, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
            }],
            symbolInstances: [

            ]
        },
    states: {
        "Base State": {
            "${_arrow22}": [
                ["style", "top", '346px'],
                ["style", "display", 'none'],
                ["style", "height", '12px'],
                ["style", "left", '303px'],
                ["style", "width", '32px']
            ],
            "${_Text7}": [
                ["style", "top", '589px'],
                ["style", "left", '95px'],
                ["style", "font-size", '119%']
            ],
            "${_Text5}": [
                ["style", "top", '372px'],
                ["style", "left", '520px'],
                ["style", "display", 'none']
            ],
            "${_frame-duration}": [
                ["style", "top", '-60px'],
                ["style", "left", '135px'],
                ["style", "display", 'none']
            ],
            "${_preamble}": [
                ["style", "top", '129px'],
                ["style", "left", '124px'],
                ["style", "display", 'none']
            ],
            "${_ttg1}": [
                ["style", "display", 'none'],
                ["style", "top", '252px'],
                ["transform", "scaleY", '0.09615'],
                ["style", "left", '306px']
            ],
            "${_map1-dl2}": [
                ["style", "top", '142px'],
                ["style", "left", '332px'],
                ["style", "display", 'none']
            ],
            "${_arrow21}": [
                ["style", "top", '253px'],
                ["style", "height", '16px'],
                ["style", "display", 'none'],
                ["style", "left", '123px'],
                ["style", "width", '12px']
            ],
            "${_ttg-comment}": [
                ["style", "top", '472px'],
                ["style", "left", '116px'],
                ["style", "display", 'none']
            ],
            "${_arrow12}": [
                ["style", "top", '347px'],
                ["style", "display", 'none'],
                ["style", "height", '10px'],
                ["style", "left", '432px'],
                ["style", "width", '35px']
            ],
            "${_Text2}": [
                ["style", "top", '372px'],
                ["style", "font-family", 'Times New Roman, Times, serif'],
                ["style", "display", 'none'],
                ["style", "font-weight", '700'],
                ["style", "left", '496px'],
                ["style", "font-size", '94%']
            ],
            "${_arrow1}": [
                ["style", "display", 'none'],
                ["style", "top", '253px'],
                ["style", "height", '1.23%'],
                ["style", "width", '1.29%']
            ],
            "${_Text6}": [
                ["style", "top", '564px'],
                ["style", "left", '186px'],
                ["style", "display", 'block']
            ],
            "${_rtg1}": [
                ["style", "top", '253px'],
                ["style", "left", '438px'],
                ["style", "display", 'none']
            ],
            "${_ul2}": [
                ["style", "top", '333px'],
                ["style", "left", '197px'],
                ["style", "display", 'none']
            ],
            "${_ul1}": [
                ["style", "top", '329px'],
                ["style", "left", '335px'],
                ["style", "display", 'none']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(255,255,255,1)'],
                ["style", "overflow", 'hidden'],
                ["style", "height", '620px'],
                ["style", "width", '700px']
            ],
            "${_map1}": [
                ["style", "top", '130px'],
                ["style", "left", '451px'],
                ["style", "display", 'none']
            ],
            "${_tttg2}": [
                ["style", "display", 'none'],
                ["style", "top", '259px'],
                ["transform", "scaleY", '0.09278'],
                ["style", "left", '158px']
            ],
            "${_frequencytime}": [
                ["style", "top", '66px'],
                ["style", "left", '62px'],
                ["style", "display", 'none']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 11659,
            autoPlay: true,
            timeline: [
                { id: "eid55", tween: [ "style", "${_arrow12}", "width", '65px', { fromValue: '35px'}], position: 2250, duration: 1000 },
                { id: "eid61", tween: [ "style", "${_Text2}", "display", 'block', { fromValue: 'none'}], position: 5000, duration: 0 },
                { id: "eid62", tween: [ "style", "${_Text2}", "display", 'none', { fromValue: 'block'}], position: 5250, duration: 0 },
                { id: "eid59", tween: [ "style", "${_frame-duration}", "top", '122px', { fromValue: '-60px'}], position: 3750, duration: 1000 },
                { id: "eid1", tween: [ "style", "${_frequencytime}", "display", 'block', { fromValue: 'none'}], position: 250, duration: 0 },
                { id: "eid60", tween: [ "style", "${_rtg1}", "display", 'block', { fromValue: 'none'}], position: 3500, duration: 0 },
                { id: "eid90", tween: [ "style", "${_arrow22}", "width", '58px', { fromValue: '32px'}], position: 8000, duration: 1000 },
                { id: "eid57", tween: [ "style", "${_frame-duration}", "display", 'block', { fromValue: 'none'}], position: 3750, duration: 0 },
                { id: "eid13", tween: [ "style", "${_ul1}", "display", 'block', { fromValue: 'none'}], position: 2000, duration: 0 },
                { id: "eid56", tween: [ "style", "${_map1}", "display", 'block', { fromValue: 'none'}], position: 3500, duration: 0 },
                { id: "eid86", tween: [ "style", "${_arrow22}", "height", '104px', { fromValue: '12px'}], position: 8000, duration: 1000 },
                { id: "eid67", tween: [ "style", "${_arrow21}", "width", '101px', { fromValue: '12px'}], position: 5500, duration: 1000 },
                { id: "eid9", tween: [ "style", "${_arrow1}", "width", '9.29%', { fromValue: '1.29%'}], position: 750, duration: 1000 },
                { id: "eid63", tween: [ "style", "${_arrow21}", "display", 'block', { fromValue: 'none'}], position: 5500, duration: 0 },
                { id: "eid77", tween: [ "transform", "${_tttg2}", "scaleY", '1', { fromValue: '0.09278'}], position: 7000, duration: 800 },
                { id: "eid20", tween: [ "style", "${_arrow12}", "display", 'block', { fromValue: 'none'}], position: 2250, duration: 0 },
                { id: "eid65", tween: [ "style", "${_arrow21}", "height", '104px', { fromValue: '16px'}], position: 5500, duration: 1000 },
                { id: "eid7", tween: [ "style", "${_arrow1}", "height", '16%', { fromValue: '1.23%'}], position: 750, duration: 1000 },
                { id: "eid100", tween: [ "style", "${_Text6}", "display", 'none', { fromValue: 'block'}], position: 11366, duration: 0 },
                { id: "eid98", tween: [ "style", "${_Text5}", "display", 'block', { fromValue: 'none'}], position: 10871, duration: 0 },
                { id: "eid99", tween: [ "style", "${_Text5}", "display", 'none', { fromValue: 'block'}], position: 11146, duration: 0 },
                { id: "eid97", tween: [ "style", "${_ttg-comment}", "display", 'block', { fromValue: 'none'}], position: 10610, duration: 0 },
                { id: "eid78", tween: [ "style", "${_arrow22}", "display", 'block', { fromValue: 'none'}], position: 8000, duration: 0 },
                { id: "eid69", tween: [ "style", "${_tttg2}", "display", 'block', { fromValue: 'none'}], position: 7000, duration: 0 },
                { id: "eid68", tween: [ "style", "${_ul2}", "display", 'block', { fromValue: 'none'}], position: 6750, duration: 0 },
                { id: "eid92", tween: [ "style", "${_ttg1}", "display", 'block', { fromValue: 'none'}], position: 9500, duration: 0 },
                { id: "eid88", tween: [ "style", "${_arrow22}", "top", '254px', { fromValue: '346px'}], position: 8000, duration: 1000 },
                { id: "eid53", tween: [ "style", "${_arrow12}", "top", '253px', { fromValue: '347px'}], position: 2250, duration: 1000 },
                { id: "eid2", tween: [ "style", "${_preamble}", "display", 'block', { fromValue: 'none'}], position: 500, duration: 0 },
                { id: "eid91", tween: [ "style", "${_map1-dl2}", "display", 'block', { fromValue: 'none'}], position: 9250, duration: 0 },
                { id: "eid51", tween: [ "style", "${_arrow12}", "height", '104px', { fromValue: '10px'}], position: 2250, duration: 1000 },
                { id: "eid3", tween: [ "style", "${_arrow1}", "display", 'block', { fromValue: 'none'}], position: 750, duration: 0 },
                { id: "eid96", tween: [ "transform", "${_ttg1}", "scaleY", '1', { fromValue: '0.09615'}], position: 9500, duration: 800 }            ]
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
})(jQuery, AdobeEdge, "EDGE-33353508");
