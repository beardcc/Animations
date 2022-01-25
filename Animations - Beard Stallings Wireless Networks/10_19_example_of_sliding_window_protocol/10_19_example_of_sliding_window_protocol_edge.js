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
                id: 'B52',
                display: 'block',
                type: 'image',
                rect: ['459px', '469px','262px','51px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"B52.png",'0px','0px']
            },
            {
                id: 'Text',
                type: 'text',
                rect: ['166px', '606px','auto','auto','auto', 'auto'],
                text: "Figure 10.19 Example of a Sliding Window Protocol",
                font: ['Times New Roman, Times, serif', [119, "%"], "rgba(0,0,0,1)", "700", "none", ""]
            },
            {
                id: 'Text2',
                display: 'block',
                type: 'text',
                rect: ['191px', '631px','auto','auto','auto', 'auto'],
                text: "Click or Touch on Figure for Each Step of the Animation",
                align: "left",
                font: ['\'Times New Roman\', Times, serif', [94, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: 'first-part',
                display: 'block',
                type: 'image',
                rect: ['35px', '45px','688px','105px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"first-part.png",'0px','0px']
            },
            {
                id: 'nowin1',
                display: 'block',
                type: 'image',
                rect: ['36px', '183px','34.3%','7.7%','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"nowin1.png",'0%','0%','257px','54px']
            },
            {
                id: 'win1',
                display: 'block',
                type: 'image',
                rect: ['32px', '186px','138px','51px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"win1.png",'0px','0px']
            },
            {
                id: 'Text4',
                display: 'block',
                type: 'text',
                rect: ['282px', '52px','auto','auto','auto', 'auto'],
                text: "Initial window size of 7 PDUs.",
                align: "left",
                font: ['\'Times New Roman\', Times, serif', [94, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: 'arrowsone',
                display: 'block',
                type: 'image',
                rect: ['279px', '122px','26.3%','15.7%','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"arrowsone.png",'0%','0%','197px','110px']
            },
            {
                id: 'nowin12',
                display: 'block',
                type: 'image',
                rect: ['462px', '196px','34.3%','7.7%','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"nowin1.png",'0%','0%','257px','54px']
            },
            {
                id: 'win12',
                display: 'block',
                type: 'image',
                rect: ['458px', '200px','138px','51px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"win1.png",'0px','0px']
            },
            {
                id: 'Text5',
                display: 'block',
                type: 'text',
                rect: ['502px', '177px','auto','auto','auto', 'auto'],
                text: "Packets are sent.",
                align: "left",
                font: ['\'Times New Roman\', Times, serif', [94, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: 'arrowtwo',
                display: 'block',
                type: 'image',
                rect: ['288px', '256px','24%','7.3%','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"arrowtwo.png",'0%','0%','180px','51px']
            },
            {
                id: 'special',
                display: 'block',
                type: 'image',
                rect: ['463px', '255px','34.3%','7.7%','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"special.png",'0%','0%','257px','54px']
            },
            {
                id: 'win2',
                display: 'block',
                type: 'image',
                rect: ['510px', '263px','77px','39px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"win2.png",'0px','0px']
            },
            {
                id: 'special2',
                display: 'block',
                type: 'image',
                rect: ['37px', '297px','34.3%','7.7%','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"special.png",'0%','0%','257px','54px']
            },
            {
                id: 'win22',
                display: 'block',
                type: 'image',
                rect: ['84px', '304px','77px','39px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"win2.png",'0px','0px']
            },
            {
                id: 'Text6',
                display: 'block',
                type: 'text',
                rect: ['468px', '315px','189px','auto','auto', 'auto'],
                text: "Receive Ready 3 message indicates that the receiver is ready for PDU 3.",
                align: "left",
                font: ['\'Times New Roman\', Times, serif', [94, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: 'arrowsthree',
                display: 'block',
                type: 'image',
                rect: ['284px', '350px','24%','19.1%','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"arrowsthree.png",'0%','0%','180px','134px']
            },
            {
                id: 'arrowsthree2Copy',
                type: 'image',
                rect: ['680', '912','180px','134px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"arrowsthree.png",'0px','0px']
            },
            {
                id: 'only-num2',
                display: 'block',
                type: 'image',
                rect: ['463px', '395px','34.3%','4.7%','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"only-num.png",'0%','0%','257px','33px']
            },
            {
                id: 'winaxis2',
                display: 'block',
                type: 'image',
                rect: ['516px', '386px','138px','51px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"winaxis.png",'0px','0px']
            },
            {
                id: 'arrowfour',
                display: 'block',
                type: 'image',
                rect: ['284px', '387px','24%','16.3%','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"arrowfour.png",'0%','0%','180px','114px']
            },
            {
                id: 'special3',
                display: 'block',
                type: 'image',
                rect: ['37px', '438px','34.3%','7.7%','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"special.png",'0%','0%','257px','54px']
            },
            {
                id: 'win13',
                display: 'block',
                type: 'image',
                rect: ['76px', '441px','138px','51px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"win1.png",'0px','0px']
            },
            {
                id: 'A52',
                display: 'block',
                type: 'image',
                rect: ['34px', '497px','262px','51px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"A52.png",'0px','0px']
            }],
            symbolInstances: [

            ]
        },
    states: {
        "Base State": {
            "${_winaxis2}": [
                ["style", "top", '386px'],
                ["style", "left", '501px'],
                ["style", "display", 'block']
            ],
            "${_B52}": [
                ["style", "top", '469px'],
                ["style", "left", '459px'],
                ["style", "display", 'block']
            ],
            "${_nowin1}": [
                ["style", "display", 'block'],
                ["style", "top", '183px'],
                ["style", "left", '36px'],
                ["style", "width", '0%']
            ],
            "${_arrowsthree}": [
                ["style", "top", '350px'],
                ["style", "display", 'block'],
                ["style", "height", '22.54%'],
                ["style", "left", '284px'],
                ["style", "width", '0%']
            ],
            "${_Text2}": [
                ["style", "display", 'block'],
                ["style", "top", '588px'],
                ["style", "left", '191px'],
                ["style", "font-size", '94%']
            ],
            "${_special}": [
                ["style", "display", 'block'],
                ["style", "top", '255px'],
                ["style", "left", '463px'],
                ["style", "width", '0%']
            ],
            "${_arrowfour}": [
                ["style", "top", '387px'],
                ["style", "display", 'block'],
                ["style", "height", '0%'],
                ["style", "left", '284px'],
                ["style", "width", '26.27%']
            ],
            "${_arrowsone}": [
                ["style", "top", '122px'],
                ["style", "display", 'block'],
                ["style", "height", '19.52%'],
                ["style", "left", '279px'],
                ["style", "width", '0%']
            ],
            "${_Text4}": [
                ["style", "top", '52px'],
                ["style", "left", '282px'],
                ["style", "display", 'block']
            ],
            "${_special3}": [
                ["style", "display", 'block'],
                ["style", "top", '438px'],
                ["style", "left", '37px'],
                ["style", "width", '0%']
            ],
            "${_win22}": [
                ["style", "display", 'block'],
                ["style", "top", '304px'],
                ["style", "left", '85px'],
                ["style", "width", '77px']
            ],
            "${_A52}": [
                ["style", "top", '497px'],
                ["style", "left", '34px'],
                ["style", "display", 'block']
            ],
            "${_Text5}": [
                ["style", "top", '177px'],
                ["style", "left", '502px'],
                ["style", "display", 'block']
            ],
            "${_win1}": [
                ["style", "display", 'block'],
                ["style", "top", '186px'],
                ["style", "left", '32px'],
                ["style", "width", '138px']
            ],
            "${_win13}": [
                ["style", "display", 'block'],
                ["style", "top", '441px'],
                ["style", "left", '76px'],
                ["style", "width", '138px']
            ],
            "${_nowin12}": [
                ["style", "display", 'block'],
                ["style", "top", '196px'],
                ["style", "left", '462px'],
                ["style", "width", '0%']
            ],
            "${_win12}": [
                ["style", "display", 'block'],
                ["style", "top", '200px'],
                ["style", "left", '458px'],
                ["style", "width", '138px']
            ],
            "${_Text6}": [
                ["style", "display", 'block'],
                ["style", "top", '315px'],
                ["style", "left", '468px'],
                ["style", "width", '189px']
            ],
            "${_arrowtwo}": [
                ["style", "top", '256px'],
                ["transform", "rotateZ", '0deg'],
                ["style", "display", 'block'],
                ["style", "left", '468px'],
                ["style", "width", '0%']
            ],
            "${_Text}": [
                ["style", "top", '606px'],
                ["style", "font-weight", '700'],
                ["style", "font-family", 'Times New Roman, Times, serif'],
                ["style", "left", '166px'],
                ["style", "font-size", '119%']
            ],
            "${_special2}": [
                ["style", "display", 'block'],
                ["style", "top", '297px'],
                ["style", "left", '37px'],
                ["style", "width", '0%']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(255,255,255,1)'],
                ["style", "overflow", 'hidden'],
                ["style", "height", '630px'],
                ["style", "width", '750px']
            ],
            "${_only-num2}": [
                ["style", "display", 'block'],
                ["style", "top", '395px'],
                ["style", "left", '463px'],
                ["style", "width", '0%']
            ],
            "${_first-part}": [
                ["style", "top", '45px'],
                ["style", "left", '35px'],
                ["style", "display", 'block']
            ],
            "${_win2}": [
                ["style", "display", 'block'],
                ["style", "top", '262px'],
                ["style", "left", '510px'],
                ["style", "width", '77px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 19977,
            autoPlay: true,
            timeline: [
                { id: "eid1", tween: [ "style", "${_first-part}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid2", tween: [ "style", "${_first-part}", "display", 'block', { fromValue: 'none'}], position: 210, duration: 0 },
                { id: "eid86", tween: [ "style", "${_special}", "width", '34.27%', { fromValue: '0%'}], position: 6427, duration: 800 },
                { id: "eid138", tween: [ "style", "${_arrowsthree}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid139", tween: [ "style", "${_arrowsthree}", "display", 'block', { fromValue: 'none'}], position: 14376, duration: 0 },
                { id: "eid146", tween: [ "style", "${_winaxis2}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid147", tween: [ "style", "${_winaxis2}", "display", 'block', { fromValue: 'none'}], position: 16727, duration: 0 },
                { id: "eid126", tween: [ "style", "${_special2}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid127", tween: [ "style", "${_special2}", "display", 'block', { fromValue: 'none'}], position: 10243, duration: 0 },
                { id: "eid170", tween: [ "style", "${_B52}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid171", tween: [ "style", "${_B52}", "display", 'block', { fromValue: 'none'}], position: 18460, duration: 0 },
                { id: "eid28", tween: [ "style", "${_win1}", "left", '82px', { fromValue: '32px'}], position: 1683, duration: 1500 },
                { id: "eid42", tween: [ "style", "${_nowin12}", "width", '34.27%', { fromValue: '0%'}], position: 3500, duration: 800 },
                { id: "eid59", tween: [ "style", "${_arrowtwo}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid60", tween: [ "style", "${_arrowtwo}", "display", 'block', { fromValue: 'none'}], position: 9243, duration: 0 },
                { id: "eid30", tween: [ "style", "${_Text4}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid31", tween: [ "style", "${_Text4}", "display", 'block', { fromValue: 'none'}], position: 500, duration: 0 },
                { id: "eid32", tween: [ "style", "${_Text4}", "display", 'none', { fromValue: 'block'}], position: 665, duration: 0 },
                { id: "eid45", tween: [ "style", "${_win12}", "left", '508px', { fromValue: '458px'}], position: 4493, duration: 1500 },
                { id: "eid47", tween: [ "style", "${_Text5}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid48", tween: [ "style", "${_Text5}", "display", 'block', { fromValue: 'none'}], position: 6243, duration: 0 },
                { id: "eid174", tween: [ "style", "${_Text5}", "display", 'none', { fromValue: 'block'}], position: 6427, duration: 0 },
                { id: "eid142", tween: [ "style", "${_only-num2}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid143", tween: [ "style", "${_only-num2}", "display", 'block', { fromValue: 'none'}], position: 15686, duration: 0 },
                { id: "eid172", tween: [ "style", "${_A52}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid173", tween: [ "style", "${_A52}", "display", 'block', { fromValue: 'none'}], position: 19810, duration: 0 },
                { id: "eid5", tween: [ "style", "${_win1}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid6", tween: [ "style", "${_win1}", "display", 'block', { fromValue: 'none'}], position: 1683, duration: 0 },
                { id: "eid124", tween: [ "style", "${_win2}", "left", '503px', { fromValue: '510px'}], position: 7493, duration: 1500 },
                { id: "eid153", tween: [ "style", "${_arrowfour}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid154", tween: [ "style", "${_arrowfour}", "display", 'block', { fromValue: 'none'}], position: 18750, duration: 0 },
                { id: "eid29", tween: [ "style", "${_win1}", "width", '80px', { fromValue: '138px'}], position: 1683, duration: 1500 },
                { id: "eid46", tween: [ "style", "${_win12}", "width", '80px', { fromValue: '138px'}], position: 4493, duration: 1500 },
                { id: "eid188", tween: [ "style", "${_arrowsone}", "height", '19.52%', { fromValue: '19.52%'}], position: 19810, duration: 0 },
                { id: "eid187", tween: [ "style", "${_arrowsthree}", "height", '22.54%', { fromValue: '22.54%'}], position: 19810, duration: 0 },
                { id: "eid186", tween: [ "style", "${_arrowfour}", "width", '26.27%', { fromValue: '26.27%'}], position: 19810, duration: 0 },
                { id: "eid129", tween: [ "style", "${_special2}", "width", '34.27%', { fromValue: '0%'}], position: 10243, duration: 800 },
                { id: "eid33", tween: [ "style", "${_arrowsone}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid34", tween: [ "style", "${_arrowsone}", "display", 'block', { fromValue: 'none'}], position: 1683, duration: 0 },
                { id: "eid180", tween: [ "style", "${_Text2}", "top", '588px', { fromValue: '588px'}], position: 19810, duration: 0 },
                { id: "eid43", tween: [ "style", "${_win12}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid44", tween: [ "style", "${_win12}", "display", 'block', { fromValue: 'none'}], position: 4493, duration: 0 },
                { id: "eid40", tween: [ "style", "${_nowin1}", "width", '34.27%', { fromValue: '0%'}], position: 665, duration: 800 },
                { id: "eid136", tween: [ "style", "${_Text6}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid137", tween: [ "style", "${_Text6}", "display", 'block', { fromValue: 'none'}], position: 13074, duration: 0 },
                { id: "eid175", tween: [ "style", "${_Text6}", "display", 'none', { fromValue: 'block'}], position: 13376, duration: 0 },
                { id: "eid152", tween: [ "style", "${_winaxis2}", "left", '516px', { fromValue: '501px'}], position: 16727, duration: 1500 },
                { id: "eid87", tween: [ "style", "${_win2}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid88", tween: [ "style", "${_win2}", "display", 'block', { fromValue: 'none'}], position: 7493, duration: 0 },
                { id: "eid133", tween: [ "style", "${_win22}", "width", '135px', { fromValue: '77px'}], position: 11284, duration: 1500 },
                { id: "eid130", tween: [ "style", "${_win22}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid131", tween: [ "style", "${_win22}", "display", 'block', { fromValue: 'none'}], position: 11284, duration: 0 },
                { id: "eid156", tween: [ "style", "${_arrowfour}", "height", '16.29%', { fromValue: '0%'}], position: 18750, duration: 800 },
                { id: "eid185", tween: [ "style", "${_arrowfour}", "height", '19.35%', { fromValue: '16.29%'}], position: 19550, duration: 260 },
                { id: "eid169", tween: [ "style", "${_win13}", "left", '143px', { fromValue: '76px'}], position: 14376, duration: 1000 },
                { id: "eid83", tween: [ "style", "${_special}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid84", tween: [ "style", "${_special}", "display", 'block', { fromValue: 'none'}], position: 6427, duration: 0 },
                { id: "eid36", tween: [ "style", "${_arrowsone}", "width", '26.27%', { fromValue: '0%'}], position: 1683, duration: 1500 },
                { id: "eid71", tween: [ "style", "${_arrowtwo}", "width", '24%', { fromValue: '0%'}], position: 9243, duration: 800 },
                { id: "eid145", tween: [ "style", "${_only-num2}", "width", '34.27%', { fromValue: '0%'}], position: 15686, duration: 800 },
                { id: "eid119", tween: [ "style", "${_win2}", "width", '135px', { fromValue: '77px'}], position: 7493, duration: 1500 },
                { id: "eid37", tween: [ "style", "${_nowin12}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid38", tween: [ "style", "${_nowin12}", "display", 'block', { fromValue: 'none'}], position: 3500, duration: 0 },
                { id: "eid157", tween: [ "style", "${_special3}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid158", tween: [ "style", "${_special3}", "display", 'block', { fromValue: 'none'}], position: 13376, duration: 0 },
                { id: "eid3", tween: [ "style", "${_nowin1}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid4", tween: [ "style", "${_nowin1}", "display", 'block', { fromValue: 'none'}], position: 665, duration: 0 },
                { id: "eid132", tween: [ "style", "${_win22}", "left", '77px', { fromValue: '85px'}], position: 11284, duration: 1500 },
                { id: "eid69", tween: [ "style", "${_arrowtwo}", "left", '288px', { fromValue: '468px'}], position: 9243, duration: 800 },
                { id: "eid160", tween: [ "style", "${_special3}", "width", '34.27%', { fromValue: '0%'}], position: 13376, duration: 800 },
                { id: "eid177", tween: [ "style", "${_Text2}", "display", 'none', { fromValue: 'block'}], position: 19977, duration: 0 },
                { id: "eid141", tween: [ "style", "${_arrowsthree}", "width", '24%', { fromValue: '0%'}], position: 14376, duration: 1000 },
                { id: "eid161", tween: [ "style", "${_win13}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid162", tween: [ "style", "${_win13}", "display", 'block', { fromValue: 'none'}], position: 14376, duration: 0 },
                { id: "eid168", tween: [ "style", "${_win13}", "width", '59px', { fromValue: '138px'}], position: 14376, duration: 1000 }            ]
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
})(jQuery, AdobeEdge, "EDGE-573070583");
