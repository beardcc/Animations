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
                rect: ['144px', '39px','501px','232px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"1.png",'0px','0px']
            },
            {
                id: 'Header2',
                display: 'block',
                type: 'image',
                rect: ['449px', '181px','41px','42px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"Header.png",'0px','0px']
            },
            {
                id: 'Application-Data2',
                display: 'block',
                type: 'image',
                rect: ['577px', '144px','136px','50px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"Application-Data.png",'0px','0px']
            },
            {
                id: 'Text6',
                display: 'block',
                type: 'text',
                rect: ['541px', '201px','243px','26px','auto', 'auto'],
                text: "Application data is given to the receiver.",
                align: "left",
                font: ['Times New Roman, Times, serif', [75, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: 'Header3',
                display: 'block',
                type: 'image',
                rect: ['449px', '181px','41px','42px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"Header.png",'0px','0px']
            },
            {
                id: '_2',
                display: 'none',
                type: 'image',
                rect: ['85px', '133px','242px','124px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"2.png",'0px','0px']
            },
            {
                id: '_3',
                display: 'none',
                type: 'image',
                rect: ['535px', '118px','220px','100px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"3.png",'0px','0px']
            },
            {
                id: 'Application-Data-Part',
                display: 'none',
                type: 'image',
                rect: ['101px', '137px','104px','35px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"Application-Data-Part.png",'0px','0px']
            },
            {
                id: 'Application-Data-Part2',
                display: 'none',
                type: 'image',
                rect: ['164px', '137px','104px','35px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"Application-Data-Part.png",'0px','0px']
            },
            {
                id: 'Application-Data-Part3',
                display: 'none',
                type: 'image',
                rect: ['133px', '137px','104px','35px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"Application-Data-Part.png",'0px','0px']
            },
            {
                id: 'Application-Data',
                display: 'none',
                type: 'image',
                rect: ['112px', '105px','136px','50px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"Application-Data.png",'0px','0px']
            },
            {
                id: 'Text4',
                display: 'block',
                type: 'text',
                rect: ['312px', '280px','252px','64px','auto', 'auto'],
                text: "Packets are sent through the network.",
                align: "left",
                font: ['Times New Roman, Times, serif', [75, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: 'Text5',
                display: 'block',
                type: 'text',
                rect: ['545px', '249px','179px','55px','auto', 'auto'],
                text: "Packets are reassembled into application data.",
                align: "left",
                font: ['Times New Roman, Times, serif', [75, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: 'Header',
                display: 'none',
                type: 'image',
                rect: ['141px', '169px','41px','42px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"Header.png",'0px','0px']
            },
            {
                id: 'Text3',
                display: 'block',
                type: 'text',
                rect: ['133px', '264px','232px','35px','auto', 'auto'],
                text: "Application is split into packets. Headers are added to each packet.",
                align: "left",
                font: ['Times New Roman, Times, serif', [75, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: 'HeaderCopy',
                display: 'none',
                type: 'image',
                rect: ['206px', '169px','41px','42px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"Header.png",'0px','0px']
            },
            {
                id: 'HeaderCopy2',
                display: 'none',
                type: 'image',
                rect: ['70px', '169px','41px','42px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"Header.png",'0px','0px']
            },
            {
                id: 'Text2',
                display: 'block',
                type: 'text',
                rect: ['83px', '221px','220px','38px','auto', 'auto'],
                text: "Application data from computer",
                align: "left",
                font: ['Times New Roman, Times, serif', [75, "%"], "rgba(0,0,0,1)", "700", "none", "normal"]
            },
            {
                id: 'Application-Data-Part5',
                display: 'block',
                type: 'image',
                rect: ['441px', '185px','104px','35px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"Application-Data-Part.png",'0px','0px']
            },
            {
                id: 'Application-Data-Part6',
                display: 'block',
                type: 'image',
                rect: ['441px', '185px','104px','35px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"Application-Data-Part.png",'0px','0px']
            },
            {
                id: 'Application-Data-Part7',
                display: 'block',
                type: 'image',
                rect: ['441px', '185px','104px','35px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"Application-Data-Part.png",'0px','0px']
            },
            {
                id: 'Header4',
                display: 'block',
                type: 'image',
                rect: ['449px', '181px','41px','42px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"Header.png",'0px','0px']
            },
            {
                id: 'Text7',
                type: 'text',
                rect: ['294px', '370px','auto','auto','auto', 'auto'],
                text: "Figure 3.6 The Use of Packets",
                align: "left",
                font: ['Times New Roman, Times, serif', [119, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: 'Text8',
                display: 'block',
                type: 'text',
                rect: ['285px', '351px','auto','auto','auto', 'auto'],
                text: "Click or Touch on Figure for Each Step of the Animation",
                align: "center",
                font: ['Times New Roman, Times, serif', [94, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: '_2_3',
                display: 'none',
                type: 'image',
                rect: ['68px', '139px','235px','132px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"2_3.png",'0px','0px']
            }],
            symbolInstances: [

            ]
        },
    states: {
        "Base State": {
            "${_Application-Data-Part2}": [
                ["style", "top", '137px'],
                ["style", "left", '164px'],
                ["style", "display", 'none']
            ],
            "${_Header2}": [
                ["style", "top", '181px'],
                ["style", "left", '449px'],
                ["style", "display", 'block']
            ],
            "${_Application-Data-Part}": [
                ["style", "top", '137px'],
                ["style", "left", '101px'],
                ["style", "display", 'none']
            ],
            "${__2_3}": [
                ["style", "top", '139px'],
                ["style", "left", '68px'],
                ["style", "display", 'none']
            ],
            "${_Application-Data-Part6}": [
                ["style", "top", '185px'],
                ["style", "left", '441px'],
                ["style", "display", 'block']
            ],
            "${_Text8}": [
                ["style", "top", '344px'],
                ["style", "text-align", 'center'],
                ["style", "font-size", '94%'],
                ["style", "display", 'block'],
                ["style", "font-family", 'Times New Roman, Times, serif'],
                ["style", "left", '210px'],
                ["style", "width", '451px']
            ],
            "${_Header4}": [
                ["style", "top", '181px'],
                ["style", "left", '449px'],
                ["style", "display", 'block']
            ],
            "${_HeaderCopy}": [
                ["style", "top", '169px'],
                ["style", "left", '206px'],
                ["style", "display", 'none']
            ],
            "${_Application-Data-Part3}": [
                ["style", "top", '137px'],
                ["style", "left", '137px'],
                ["style", "display", 'none']
            ],
            "${_Text4}": [
                ["style", "top", '280px'],
                ["style", "font-family", 'Times New Roman, Times, serif'],
                ["style", "left", '310px'],
                ["style", "display", 'block']
            ],
            "${_Application-Data-Part5}": [
                ["style", "top", '185px'],
                ["style", "left", '441px'],
                ["style", "display", 'block']
            ],
            "${_Text2}": [
                ["style", "top", '221px'],
                ["style", "width", '183px'],
                ["style", "font-weight", '700'],
                ["style", "display", 'block'],
                ["style", "font-family", 'Times New Roman, Times, serif'],
                ["style", "left", '83px'],
                ["style", "font-size", '75%']
            ],
            "${_Application-Data2}": [
                ["style", "top", '144px'],
                ["style", "left", '577px'],
                ["style", "display", 'block']
            ],
            "${_Text3}": [
                ["style", "height", '35px'],
                ["style", "font-family", 'Times New Roman, Times, serif'],
                ["style", "display", 'block'],
                ["style", "width", '232px']
            ],
            "${__3}": [
                ["style", "top", '118px'],
                ["style", "left", '535px'],
                ["style", "display", 'none']
            ],
            "${_Text7}": [
                ["style", "top", '370px'],
                ["style", "width", '252px'],
                ["style", "font-family", 'Times New Roman, Times, serif'],
                ["style", "left", '294px'],
                ["style", "font-size", '119%']
            ],
            "${_Application-Data-Part7}": [
                ["style", "top", '185px'],
                ["style", "left", '441px'],
                ["style", "display", 'block']
            ],
            "${_Text6}": [
                ["style", "top", '201px'],
                ["style", "display", 'block'],
                ["style", "font-family", 'Times New Roman, Times, serif'],
                ["style", "left", '541px'],
                ["style", "width", '243px']
            ],
            "${_Header}": [
                ["style", "top", '169px'],
                ["style", "left", '144px'],
                ["style", "display", 'none']
            ],
            "${__1}": [
                ["style", "left", '144px'],
                ["style", "top", '39px']
            ],
            "${_Application-Data}": [
                ["style", "display", 'none'],
                ["style", "left", '112px'],
                ["style", "top", '105px']
            ],
            "${_Text5}": [
                ["style", "display", 'block'],
                ["style", "font-family", 'Times New Roman, Times, serif']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(255,255,255,1)'],
                ["style", "width", '800px'],
                ["style", "height", '420px'],
                ["style", "overflow", 'hidden']
            ],
            "${_HeaderCopy2}": [
                ["style", "top", '169px'],
                ["style", "left", '90px'],
                ["style", "display", 'none']
            ],
            "${_Header3}": [
                ["style", "display", 'block'],
                ["style", "left", '449px'],
                ["style", "top", '181px']
            ],
            "${__2}": [
                ["style", "top", '133px'],
                ["style", "left", '85px'],
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
                { id: "eid30", tween: [ "style", "${_Application-Data-Part2}", "top", '173px', { fromValue: '137px'}], position: 2250, duration: 1500 },
                { id: "eid170", tween: [ "style", "${_Application-Data-Part7}", "top", '152px', { fromValue: '185px'}], position: 7750, duration: 1500 },
                { id: "eid25", tween: [ "style", "${_Application-Data-Part}", "top", '173px', { fromValue: '137px'}], position: 2250, duration: 1500 },
                { id: "eid10", tween: [ "style", "${_Application-Data-Part}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid18", tween: [ "style", "${_Application-Data-Part}", "display", 'block', { fromValue: 'none'}], position: 2250, duration: 0 },
                { id: "eid97", tween: [ "style", "${_Application-Data-Part}", "display", 'none', { fromValue: 'block'}], position: 5750, duration: 0 },
                { id: "eid143", tween: [ "style", "${_Header2}", "left", '672px', { fromValue: '449px'}], position: 6000, duration: 1500 },
                { id: "eid115", tween: [ "style", "${_Application-Data-Part7}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid116", tween: [ "style", "${_Application-Data-Part7}", "display", 'block', { fromValue: 'none'}], position: 6000, duration: 0 },
                { id: "eid185", tween: [ "style", "${_Application-Data-Part7}", "display", 'none', { fromValue: 'block'}], position: 9250, duration: 0 },
                { id: "eid176", tween: [ "style", "${_Application-Data-Part6}", "top", '152px', { fromValue: '185px'}], position: 7750, duration: 1500 },
                { id: "eid146", tween: [ "style", "${_Header4}", "left", '545px', { fromValue: '449px'}], position: 6000, duration: 1500 },
                { id: "eid7", tween: [ "style", "${_Application-Data}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid11", tween: [ "style", "${_Application-Data}", "display", 'block', { fromValue: 'none'}], position: 250, duration: 0 },
                { id: "eid104", tween: [ "style", "${_Application-Data}", "display", 'none', { fromValue: 'block'}], position: 2400, duration: 0 },
                { id: "eid3", tween: [ "style", "${_HeaderCopy2}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid39", tween: [ "style", "${_HeaderCopy2}", "display", 'block', { fromValue: 'none'}], position: 3750, duration: 0 },
                { id: "eid102", tween: [ "style", "${_HeaderCopy2}", "display", 'none', { fromValue: 'block'}], position: 5750, duration: 0 },
                { id: "eid134", tween: [ "style", "${_Application-Data-Part7}", "left", '537px', { fromValue: '441px'}], position: 6000, duration: 1500 },
                { id: "eid169", tween: [ "style", "${_Application-Data-Part7}", "left", '565px', { fromValue: '537px'}], position: 7750, duration: 1500 },
                { id: "eid189", tween: [ "style", "${_Text5}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid190", tween: [ "style", "${_Text5}", "display", 'block', { fromValue: 'none'}], position: 6000, duration: 0 },
                { id: "eid194", tween: [ "style", "${_Text5}", "display", 'none', { fromValue: 'block'}], position: 9750, duration: 0 },
                { id: "eid181", tween: [ "style", "${_Application-Data-Part5}", "top", '152px', { fromValue: '185px'}], position: 7750, duration: 1500 },
                { id: "eid9", tween: [ "style", "${_Application-Data-Part2}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid19", tween: [ "style", "${_Application-Data-Part2}", "display", 'block', { fromValue: 'none'}], position: 2250, duration: 0 },
                { id: "eid98", tween: [ "style", "${_Application-Data-Part2}", "display", 'none', { fromValue: 'block'}], position: 5750, duration: 0 },
                { id: "eid119", tween: [ "style", "${_Application-Data-Part5}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid120", tween: [ "style", "${_Application-Data-Part5}", "display", 'block', { fromValue: 'none'}], position: 6000, duration: 0 },
                { id: "eid183", tween: [ "style", "${_Application-Data-Part5}", "display", 'none', { fromValue: 'block'}], position: 9250, duration: 0 },
                { id: "eid211", tween: [ "style", "${__2_3}", "display", 'block', { fromValue: 'none'}], position: 13000, duration: 0 },
                { id: "eid84", tween: [ "style", "${_HeaderCopy}", "left", '303px', { fromValue: '206px'}], position: 4250, duration: 1500 },
                { id: "eid5", tween: [ "style", "${_Header}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid37", tween: [ "style", "${_Header}", "display", 'block', { fromValue: 'none'}], position: 3750, duration: 0 },
                { id: "eid100", tween: [ "style", "${_Header}", "display", 'none', { fromValue: 'block'}], position: 5750, duration: 0 },
                { id: "eid35", tween: [ "style", "${_Application-Data-Part3}", "top", '173px', { fromValue: '137px'}], position: 2250, duration: 1500 },
                { id: "eid4", tween: [ "style", "${_HeaderCopy}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid38", tween: [ "style", "${_HeaderCopy}", "display", 'block', { fromValue: 'none'}], position: 3750, duration: 0 },
                { id: "eid101", tween: [ "style", "${_HeaderCopy}", "display", 'none', { fromValue: 'block'}], position: 5750, duration: 0 },
                { id: "eid117", tween: [ "style", "${_Application-Data-Part6}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid118", tween: [ "style", "${_Application-Data-Part6}", "display", 'block', { fromValue: 'none'}], position: 6000, duration: 0 },
                { id: "eid184", tween: [ "style", "${_Application-Data-Part6}", "display", 'none', { fromValue: 'block'}], position: 9250, duration: 0 },
                { id: "eid15", tween: [ "style", "${_Text2}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid16", tween: [ "style", "${_Text2}", "display", 'block', { fromValue: 'none'}], position: 250, duration: 0 },
                { id: "eid17", tween: [ "style", "${_Text2}", "display", 'none', { fromValue: 'block'}], position: 2000, duration: 0 },
                { id: "eid137", tween: [ "style", "${_Application-Data-Part6}", "left", '602px', { fromValue: '441px'}], position: 6000, duration: 1500 },
                { id: "eid175", tween: [ "style", "${_Application-Data-Part6}", "left", '595px', { fromValue: '602px'}], position: 7750, duration: 1500 },
                { id: "eid212", tween: [ "style", "${_Text8}", "width", '451px', { fromValue: '451px'}], position: 13000, duration: 0 },
                { id: "eid219", tween: [ "style", "${_Text8}", "top", '344px', { fromValue: '344px'}], position: 0, duration: 0 },
                { id: "eid1", tween: [ "style", "${__2}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid205", tween: [ "style", "${__2}", "display", 'none', { fromValue: 'none'}], position: 13000, duration: 0 },
                { id: "eid218", tween: [ "style", "${_Text8}", "left", '210px', { fromValue: '210px'}], position: 0, duration: 0 },
                { id: "eid201", tween: [ "style", "${_Text6}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid202", tween: [ "style", "${_Text6}", "display", 'block', { fromValue: 'none'}], position: 10000, duration: 0 },
                { id: "eid203", tween: [ "style", "${_Text6}", "display", 'none', { fromValue: 'block'}], position: 12500, duration: 0 },
                { id: "eid208", tween: [ "style", "${_Text8}", "display", 'none', { fromValue: 'block'}], position: 14000, duration: 0 },
                { id: "eid217", tween: [ "style", "${_Text2}", "width", '183px', { fromValue: '183px'}], position: 384, duration: 0 },
                { id: "eid200", tween: [ "style", "${_Application-Data2}", "left", '565px', { fromValue: '577px'}], position: 10500, duration: 1500 },
                { id: "eid186", tween: [ "style", "${_Application-Data2}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid187", tween: [ "style", "${_Application-Data2}", "display", 'block', { fromValue: 'none'}], position: 9250, duration: 0 },
                { id: "eid204", tween: [ "style", "${_Application-Data2}", "display", 'none', { fromValue: 'block'}], position: 12500, duration: 0 },
                { id: "eid199", tween: [ "style", "${_Application-Data2}", "top", '117px', { fromValue: '144px'}], position: 10500, duration: 1500 },
                { id: "eid108", tween: [ "style", "${_Header2}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid109", tween: [ "style", "${_Header2}", "display", 'block', { fromValue: 'none'}], position: 6000, duration: 0 },
                { id: "eid152", tween: [ "style", "${_Header2}", "display", 'none', { fromValue: 'block'}], position: 7500, duration: 0 },
                { id: "eid31", tween: [ "style", "${_Application-Data-Part2}", "left", '198px', { fromValue: '164px'}], position: 2250, duration: 1500 },
                { id: "eid81", tween: [ "style", "${_Application-Data-Part2}", "left", '296px', { fromValue: '198px'}], position: 4250, duration: 1500 },
                { id: "eid8", tween: [ "style", "${_Application-Data-Part3}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid20", tween: [ "style", "${_Application-Data-Part3}", "display", 'block', { fromValue: 'none'}], position: 2250, duration: 0 },
                { id: "eid99", tween: [ "style", "${_Application-Data-Part3}", "display", 'none', { fromValue: 'block'}], position: 5750, duration: 0 },
                { id: "eid44", tween: [ "style", "${_Text3}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid45", tween: [ "style", "${_Text3}", "display", 'block', { fromValue: 'none'}], position: 2205, duration: 0 },
                { id: "eid46", tween: [ "style", "${_Text3}", "display", 'none', { fromValue: 'block'}], position: 3945, duration: 0 },
                { id: "eid149", tween: [ "style", "${_Header3}", "left", '610px', { fromValue: '449px'}], position: 6000, duration: 1500 },
                { id: "eid140", tween: [ "style", "${_Application-Data-Part5}", "left", '664px', { fromValue: '441px'}], position: 6000, duration: 1500 },
                { id: "eid182", tween: [ "style", "${_Application-Data-Part5}", "left", '629px', { fromValue: '664px'}], position: 7750, duration: 1500 },
                { id: "eid85", tween: [ "style", "${_Application-Data-Part3}", "left", '137px', { fromValue: '137px'}], position: 3750, duration: 0 },
                { id: "eid87", tween: [ "style", "${_Application-Data-Part3}", "left", '296px', { fromValue: '137px'}], position: 4250, duration: 1500 },
                { id: "eid2", tween: [ "style", "${__3}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid206", tween: [ "style", "${__3}", "display", 'block', { fromValue: 'none'}], position: 13000, duration: 0 },
                { id: "eid111", tween: [ "style", "${_Header3}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid112", tween: [ "style", "${_Header3}", "display", 'block', { fromValue: 'none'}], position: 6000, duration: 0 },
                { id: "eid151", tween: [ "style", "${_Header3}", "display", 'none', { fromValue: 'block'}], position: 7500, duration: 0 },
                { id: "eid47", tween: [ "style", "${_Header}", "left", '145px', { fromValue: '144px'}], position: 3750, duration: 195 },
                { id: "eid90", tween: [ "style", "${_Header}", "left", '303px', { fromValue: '145px'}], position: 4250, duration: 1500 },
                { id: "eid113", tween: [ "style", "${_Header4}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid114", tween: [ "style", "${_Header4}", "display", 'block', { fromValue: 'none'}], position: 6000, duration: 0 },
                { id: "eid150", tween: [ "style", "${_Header4}", "display", 'none', { fromValue: 'block'}], position: 7500, duration: 0 },
                { id: "eid188", tween: [ "style", "${_Text4}", "left", '310px', { fromValue: '310px'}], position: 5750, duration: 0 },
                { id: "eid14", tween: [ "style", "${_Application-Data}", "top", '129px', { fromValue: '105px'}], position: 250, duration: 1500 },
                { id: "eid105", tween: [ "style", "${_Text4}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid106", tween: [ "style", "${_Text4}", "display", 'block', { fromValue: 'none'}], position: 4091, duration: 0 },
                { id: "eid107", tween: [ "style", "${_Text4}", "display", 'none', { fromValue: 'block'}], position: 6000, duration: 0 },
                { id: "eid94", tween: [ "style", "${_HeaderCopy2}", "left", '90px', { fromValue: '90px'}], position: 3750, duration: 0 },
                { id: "eid96", tween: [ "style", "${_HeaderCopy2}", "left", '303px', { fromValue: '90px'}], position: 4250, duration: 1500 },
                { id: "eid36", tween: [ "style", "${_Application-Data-Part}", "left", '82px', { fromValue: '101px'}], position: 2250, duration: 1500 },
                { id: "eid93", tween: [ "style", "${_Application-Data-Part}", "left", '296px', { fromValue: '82px'}], position: 4250, duration: 1500 }            ]
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
})(jQuery, AdobeEdge, "EDGE-328801752");
