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
                id: 'Text5',
                display: 'block',
                type: 'text',
                rect: ['823px', '2482px','504px','92px','auto', 'auto'],
                text: "(b) Broadcast link",
                align: "left",
                font: ['\'Times New Roman\', Times, serif', [375, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: 'sb',
                display: 'block',
                type: 'image',
                rect: ['742px', '1214px','636px','596px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"sb.png",'0px','0px']
            },
            {
                id: 'esa',
                display: 'block',
                type: 'image',
                rect: ['44px', '846px','1644px','320px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"esa.png",'0px','0px']
            },
            {
                id: 'Text',
                type: 'text',
                rect: ['126px', '2766px','auto','auto','auto', 'auto'],
                text: "Figure 16.8 Satellite Communication Configurations",
                font: ['Times New Roman, Times, serif', [475, "%"], "rgba(0,0,0,1)", "700", "none", ""]
            },
            {
                id: 'Text3',
                display: 'block',
                type: 'text',
                rect: ['286px', '2666px','auto','auto','auto', 'auto'],
                text: "Click or Touch on Figure for Each Step of the Animation",
                align: "left",
                font: ['\'Times New Roman\', Times, serif', [375, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: 'Text4',
                display: 'block',
                type: 'text',
                rect: ['718px', '1145px','644px','80px','auto', 'auto'],
                text: "(a) Point-to-point link",
                align: "left",
                font: ['\'Times New Roman\', Times, serif', [375, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: 'sa',
                display: 'block',
                type: 'image',
                rect: ['742px', '90px','636px','320px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"sa.png",'0px','0px']
            },
            {
                id: 'uparrwa',
                display: 'block',
                type: 'image',
                rect: ['310px', '386px','31.8%','20.6%','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"uparrwa.png",'0%','0%','636px','596px']
            },
            {
                id: 'dwnarrwa',
                display: 'block',
                type: 'image',
                rect: ['966px', '366px','31.8%','20.6%','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"dwnarrwa.png",'0%','0%','636px','596px']
            },
            {
                id: 'Text6',
                display: 'block',
                type: 'text',
                rect: ['180px', '250px','460px','200px','auto', 'auto'],
                text: "Point-to-point communication",
                align: "left",
                font: ['\'Times New Roman\', Times, serif', [375, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: 'uparrwb',
                display: 'block',
                type: 'image',
                rect: ['731px', '1519px','17.2%','25.7%','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"uparrwb.png",'0%','0%','344px','744px']
            },
            {
                id: 'dwnarrwsb2',
                display: 'block',
                type: 'image',
                rect: ['202px', '1470px','81.8%','28.7%','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"dwnarrwsb.png",'0%','0%','1636px','832px']
            },
            {
                id: 'Text7',
                display: 'block',
                type: 'text',
                rect: ['94px', '1438px','552px','264px','auto', 'auto'],
                text: "Broadcasting to many ground stations",
                align: "left",
                font: ['\'Times New Roman\', Times, serif', [375, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: 'esb',
                display: 'block',
                type: 'image',
                rect: ['6px', '1750px','1940px','756px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"esb.png",'0px','0px']
            }],
            symbolInstances: [

            ]
        },
    states: {
        "Base State": {
            "${_Text4}": [
                ["style", "display", 'block'],
                ["style", "top", '1145px'],
                ["style", "left", '718px'],
                ["style", "width", '644px']
            ],
            "${_Text7}": [
                ["style", "display", 'block'],
                ["style", "top", '1338px'],
                ["style", "left", '34px'],
                ["style", "width", '636px']
            ],
            "${_sa}": [
                ["style", "top", '90px'],
                ["style", "left", '742px'],
                ["style", "display", 'block']
            ],
            "${_Text3}": [
                ["style", "top", '2666px'],
                ["style", "display", 'block'],
                ["style", "font-size", '375%'],
                ["style", "left", '286px'],
                ["style", "width", '1508px']
            ],
            "${_Text6}": [
                ["style", "display", 'block'],
                ["style", "top", '250px'],
                ["style", "left", '180px'],
                ["style", "width", '460px']
            ],
            "${_esb}": [
                ["style", "top", '1746px'],
                ["style", "left", '6px'],
                ["style", "display", 'block']
            ],
            "${_Text5}": [
                ["style", "top", '2482px'],
                ["style", "left", '823px'],
                ["style", "display", 'block']
            ],
            "${_uparrwa}": [
                ["style", "display", 'block'],
                ["style", "top", '386px'],
                ["style", "left", '310px'],
                ["style", "width", '0%']
            ],
            "${_esa}": [
                ["style", "top", '846px'],
                ["style", "left", '44px'],
                ["style", "display", 'block']
            ],
            "${_dwnarrwsb2}": [
                ["style", "height", '0%'],
                ["style", "display", 'block'],
                ["style", "left", '202px'],
                ["style", "top", '1470px']
            ],
            "${_Text}": [
                ["style", "top", '2766px'],
                ["style", "font-size", '500%'],
                ["style", "font-weight", '700'],
                ["style", "font-family", 'Times New Roman, Times, serif'],
                ["style", "left", '126px'],
                ["style", "width", '1868px']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(255,255,255,1)'],
                ["style", "overflow", 'hidden'],
                ["style", "height", '2900px'],
                ["style", "width", '2000px']
            ],
            "${_uparrwb}": [
                ["style", "display", 'block'],
                ["style", "top", '1519px'],
                ["style", "left", '731px'],
                ["style", "width", '0%']
            ],
            "${_sb}": [
                ["style", "top", '1214px'],
                ["style", "left", '742px'],
                ["style", "display", 'block']
            ],
            "${_dwnarrwa}": [
                ["style", "height", '0%'],
                ["style", "display", 'block'],
                ["style", "left", '966px'],
                ["style", "top", '366px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 9795,
            autoPlay: true,
            timeline: [
                { id: "eid5", tween: [ "style", "${_esa}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid6", tween: [ "style", "${_esa}", "display", 'block', { fromValue: 'none'}], position: 750, duration: 0 },
                { id: "eid3", tween: [ "style", "${_sa}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid4", tween: [ "style", "${_sa}", "display", 'block', { fromValue: 'none'}], position: 500, duration: 0 },
                { id: "eid39", tween: [ "style", "${_Text7}", "width", '636px', { fromValue: '636px'}], position: 9297, duration: 0 },
                { id: "eid24", tween: [ "style", "${_esb}", "top", '1746px', { fromValue: '1746px'}], position: 5750, duration: 0 },
                { id: "eid15", tween: [ "style", "${_Text6}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid16", tween: [ "style", "${_Text6}", "display", 'block', { fromValue: 'none'}], position: 4500, duration: 0 },
                { id: "eid17", tween: [ "style", "${_Text6}", "display", 'none', { fromValue: 'block'}], position: 4750, duration: 0 },
                { id: "eid7", tween: [ "style", "${_uparrwa}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid8", tween: [ "style", "${_uparrwa}", "display", 'block', { fromValue: 'none'}], position: 945, duration: 0 },
                { id: "eid20", tween: [ "style", "${_sb}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid21", tween: [ "style", "${_sb}", "display", 'block', { fromValue: 'none'}], position: 5250, duration: 0 },
                { id: "eid37", tween: [ "style", "${_Text7}", "top", '1338px', { fromValue: '1338px'}], position: 9295, duration: 0 },
                { id: "eid18", tween: [ "style", "${_Text5}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid19", tween: [ "style", "${_Text5}", "display", 'block', { fromValue: 'none'}], position: 5000, duration: 0 },
                { id: "eid28", tween: [ "style", "${_uparrwb}", "width", '17.2%', { fromValue: '0%'}], position: 5750, duration: 1500 },
                { id: "eid25", tween: [ "style", "${_uparrwb}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid26", tween: [ "style", "${_uparrwb}", "display", 'block', { fromValue: 'none'}], position: 5750, duration: 0 },
                { id: "eid33", tween: [ "style", "${_Text7}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid34", tween: [ "style", "${_Text7}", "display", 'block', { fromValue: 'none'}], position: 9250, duration: 0 },
                { id: "eid35", tween: [ "style", "${_Text7}", "display", 'none', { fromValue: 'block'}], position: 9570, duration: 0 },
                { id: "eid14", tween: [ "style", "${_dwnarrwa}", "height", '20.55%', { fromValue: '0%'}], position: 2750, duration: 1500 },
                { id: "eid38", tween: [ "style", "${_Text7}", "left", '34px', { fromValue: '34px'}], position: 9295, duration: 0 },
                { id: "eid11", tween: [ "style", "${_dwnarrwa}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid12", tween: [ "style", "${_dwnarrwa}", "display", 'block', { fromValue: 'none'}], position: 2750, duration: 0 },
                { id: "eid36", tween: [ "style", "${_Text3}", "display", 'none', { fromValue: 'block'}], position: 9795, duration: 0 },
                { id: "eid10", tween: [ "style", "${_uparrwa}", "width", '31.8%', { fromValue: '0%'}], position: 945, duration: 1500 },
                { id: "eid22", tween: [ "style", "${_esb}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid23", tween: [ "style", "${_esb}", "display", 'block', { fromValue: 'none'}], position: 5500, duration: 0 },
                { id: "eid1", tween: [ "style", "${_Text4}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid2", tween: [ "style", "${_Text4}", "display", 'block', { fromValue: 'none'}], position: 250, duration: 0 },
                { id: "eid29", tween: [ "style", "${_dwnarrwsb2}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid30", tween: [ "style", "${_dwnarrwsb2}", "display", 'block', { fromValue: 'none'}], position: 7500, duration: 0 },
                { id: "eid32", tween: [ "style", "${_dwnarrwsb2}", "height", '28.69%', { fromValue: '0%'}], position: 7500, duration: 1500 }            ]
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
})(jQuery, AdobeEdge, "EDGE-467371024");
