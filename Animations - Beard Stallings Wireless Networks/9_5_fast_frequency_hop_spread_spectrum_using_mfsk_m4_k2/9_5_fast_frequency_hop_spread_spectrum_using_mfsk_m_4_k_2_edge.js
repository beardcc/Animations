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
                display: 'block',
                type: 'text',
                rect: ['174px', '461px','auto','auto','auto', 'auto'],
                text: "Click or Touch on Figure for Each Step  of The Animation",
                font: ['Times New Roman, Times, serif', [94, "%"], "rgba(0,0,0,1)", "700", "none", ""]
            },
            {
                id: 'Text2',
                type: 'text',
                rect: ['121px', '496px','auto','auto','auto', 'auto'],
                text: "Figure 9.5  Fast Frequency Hop Spread Spectrum Using MFSK (<i>M</i>=4, <i>K</i>=2)",
                align: "left",
                font: ['Times New Roman, Times, serif', [119, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: 'axis2',
                display: 'none',
                type: 'image',
                rect: ['72px', '126px','605px','280px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"axis.png",'0px','0px']
            },
            {
                id: 'oval7',
                display: 'none',
                type: 'image',
                rect: ['217px', '227px','36px','58px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"oval.png",'0px','0px']
            },
            {
                id: 'Text5',
                display: 'none',
                type: 'text',
                rect: ['300px', '380px','auto','auto','auto', 'auto'],
                text: "PN sequence goes from 00 to 11,<br>so the lowest block of frequencies<br>is used, then the highest block.",
                align: "left",
                font: ['Times New Roman, Times, serif', [94, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: 'ts-oval2',
                display: 'none',
                type: 'image',
                rect: ['157px', '354px','77px','53px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"ts-oval.png",'0px','0px']
            },
            {
                id: 'Text3',
                display: 'none',
                type: 'text',
                rect: ['641px', '143px','auto','auto','auto', 'auto'],
                text: "Data to be <br>transmitted<br>",
                align: "left",
                font: ['Times New Roman, Times, serif', [94, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: 'Text6',
                display: 'none',
                type: 'text',
                rect: ['286', '381','auto','auto','auto', 'auto'],
                text: "Again the block of frequencies changes<br>with the same offset within the block.",
                align: "left",
                font: ['Times New Roman, Times, serif', [94, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: 'Text4',
                display: 'none',
                type: 'text',
                rect: ['310px', '49px','auto','auto','auto', 'auto'],
                text: "PN sequence to determine hopping pattern<br> ",
                align: "left",
                font: ['\'Times New Roman\', Times, serif', [94, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: 'oval6',
                display: 'none',
                type: 'image',
                rect: ['192px', '126px','36px','58px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"oval.png",'0px','0px']
            },
            {
                id: 'oval8',
                display: 'none',
                type: 'image',
                rect: ['243px', '174px','36px','58px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"oval.png",'0px','0px']
            },
            {
                id: 'pn-block24',
                display: 'none',
                type: 'image',
                rect: ['240px', '175px','38px','24px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"pn-block.png",'0px','0px']
            },
            {
                id: 'new-comm-422',
                display: 'none',
                type: 'image',
                rect: ['7px', '376px','160px','81px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"new-comm-42.png",'0px','0px']
            },
            {
                id: 'input-data2',
                display: 'none',
                type: 'image',
                rect: ['95px', '67px','673px','65px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"input-data.png",'0px','0px']
            },
            {
                id: 'pn-sequence2',
                display: 'none',
                type: 'image',
                rect: ['163px', '66px','584px','37px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"pn-sequence.png",'0px','0px']
            },
            {
                id: 'oval5',
                display: 'none',
                type: 'image',
                rect: ['168px', '276px','36px','58px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"oval.png",'0px','0px']
            },
            {
                id: 'pn-block21',
                display: 'none',
                type: 'image',
                rect: ['166px', '298px','38px','24px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"pn-block.png",'0px','0px']
            },
            {
                id: 'arrow14',
                display: 'none',
                type: 'image',
                rect: ['186px', '176px','21px','103px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"arrow1.png",'0px','0px'],
                transform: [[],['15']]
            },
            {
                id: 'pn-block22',
                display: 'none',
                type: 'image',
                rect: ['191px', '149px','38px','24px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"pn-block.png",'0px','0px']
            },
            {
                id: 'new-comm-52',
                display: 'none',
                type: 'image',
                rect: ['306px', '394px','297px','41px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"new-comm-5.png",'0px','0px']
            },
            {
                id: 'pn-block23',
                display: 'none',
                type: 'image',
                rect: ['215px', '224px','38px','24px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"pn-block.png",'0px','0px']
            },
            {
                id: 'arrow15',
                display: 'none',
                type: 'image',
                rect: ['227px', '200px','21px','32px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"arrow1.png",'0px','0px'],
                transform: [[],['28']]
            },
            {
                id: 'pn-block25',
                display: 'none',
                type: 'image',
                rect: ['266px', '311','38px','24px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"pn-block.png",'0px','0px']
            },
            {
                id: 'pn-block26',
                display: 'none',
                type: 'image',
                rect: ['290px', '212px','38px','24px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"pn-block.png",'0px','0px']
            },
            {
                id: 'pn-block27',
                display: 'none',
                type: 'image',
                rect: ['315px', '274px','38px','24px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"pn-block.png",'0px','0px']
            },
            {
                id: 'pn-block28',
                display: 'none',
                type: 'image',
                rect: ['339px', '125px','38px','24px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"pn-block.png",'0px','0px']
            },
            {
                id: 'pn-block29',
                display: 'none',
                type: 'image',
                rect: ['364px', '175px','38px','24px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"pn-block.png",'0px','0px']
            },
            {
                id: 'pn-block30',
                display: 'none',
                type: 'image',
                rect: ['389px', '274px','38px','24px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"pn-block.png",'0px','0px']
            },
            {
                id: 'pn-block31',
                display: 'none',
                type: 'image',
                rect: ['413px', '199px','38px','24px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"pn-block.png",'0px','0px']
            },
            {
                id: 'pn-block32',
                display: 'none',
                type: 'image',
                rect: ['438', '151px','38px','24px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"pn-block.png",'0px','0px']
            },
            {
                id: 'pn-block33',
                display: 'none',
                type: 'image',
                rect: ['463', '137px','38px','24px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"pn-block.png",'0px','0px']
            },
            {
                id: 'pn-block34',
                display: 'none',
                type: 'image',
                rect: ['489px', '237px','38px','24px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"pn-block.png",'0px','0px']
            },
            {
                id: 'pn-block35',
                display: 'none',
                type: 'image',
                rect: ['512px', '311px','38px','24px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"pn-block.png",'0px','0px']
            },
            {
                id: 'pn-block36',
                display: 'none',
                type: 'image',
                rect: ['538px', '262px','38px','24px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"pn-block.png",'0px','0px']
            },
            {
                id: 'pn-block37',
                display: 'none',
                type: 'image',
                rect: ['562px', '212px','38px','24px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"pn-block.png",'0px','0px']
            },
            {
                id: 'pn-block38',
                display: 'none',
                type: 'image',
                rect: ['588px', '162px','38px','24px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"pn-block.png",'0px','0px']
            },
            {
                id: 'pn-block39',
                display: 'none',
                type: 'image',
                rect: ['613px', '225px','38px','24px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"pn-block.png",'0px','0px']
            },
            {
                id: 'pn-block40',
                display: 'none',
                type: 'image',
                rect: ['637px', '175px','38px','24px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"pn-block.png",'0px','0px']
            }],
            symbolInstances: [

            ]
        },
    states: {
        "Base State": {
            "${_arrow15}": [
                ["style", "top", '200px'],
                ["transform", "scaleY", '0.23751'],
                ["transform", "rotateZ", '28deg'],
                ["style", "height", '32px'],
                ["style", "left", '223px'],
                ["style", "display", 'none']
            ],
            "${_oval6}": [
                ["style", "top", '126px'],
                ["style", "left", '192px'],
                ["style", "display", 'none']
            ],
            "${_pn-block22}": [
                ["style", "top", '-40px'],
                ["style", "left", '191px'],
                ["style", "display", 'none']
            ],
            "${_axis2}": [
                ["style", "top", '126px'],
                ["style", "left", '72px'],
                ["style", "display", 'none']
            ],
            "${_pn-block28}": [
                ["style", "top", '-40px'],
                ["style", "left", '339px'],
                ["style", "display", 'none']
            ],
            "${_Text4}": [
                ["style", "top", '49px'],
                ["style", "left", '310px'],
                ["style", "display", 'none']
            ],
            "${_input-data2}": [
                ["style", "top", '-70px'],
                ["style", "left", '95px'],
                ["style", "display", 'none']
            ],
            "${_pn-block26}": [
                ["style", "top", '-40px'],
                ["style", "left", '290px'],
                ["style", "display", 'none']
            ],
            "${_new-comm-52}": [
                ["style", "display", 'none'],
                ["style", "left", '306px'],
                ["style", "top", '394px']
            ],
            "${_pn-block39}": [
                ["style", "top", '-40px'],
                ["style", "left", '613px'],
                ["style", "display", 'none']
            ],
            "${_pn-block24}": [
                ["style", "top", '-40px'],
                ["style", "left", '240px'],
                ["style", "display", 'none']
            ],
            "${_pn-block25}": [
                ["style", "display", 'none'],
                ["style", "left", '266px'],
                ["style", "top", '-40px']
            ],
            "${_pn-block21}": [
                ["style", "top", '-40px'],
                ["style", "left", '166px'],
                ["style", "display", 'none']
            ],
            "${_pn-block31}": [
                ["style", "top", '-40px'],
                ["style", "left", '413px'],
                ["style", "display", 'none']
            ],
            "${_oval5}": [
                ["style", "top", '276px'],
                ["style", "left", '168px'],
                ["style", "display", 'none']
            ],
            "${_pn-block37}": [
                ["style", "top", '-40px'],
                ["style", "left", '562px'],
                ["style", "display", 'none']
            ],
            "${_Text3}": [
                ["style", "top", '142px'],
                ["style", "display", 'none'],
                ["style", "font-family", 'Times New Roman, Times, serif'],
                ["style", "left", '702px'],
                ["style", "font-size", '94%']
            ],
            "${_pn-block36}": [
                ["style", "top", '-40px'],
                ["style", "left", '538px'],
                ["style", "display", 'none']
            ],
            "${_Text5}": [
                ["style", "top", '380px'],
                ["style", "font-family", 'Times New Roman, Times, serif'],
                ["style", "left", '300px'],
                ["style", "display", 'none']
            ],
            "${_new-comm-422}": [
                ["style", "top", '376px'],
                ["style", "left", '7px'],
                ["style", "display", 'none']
            ],
            "${_pn-block33}": [
                ["style", "top", '-40px'],
                ["style", "display", 'none']
            ],
            "${_pn-block23}": [
                ["style", "top", '-40px'],
                ["style", "left", '215px'],
                ["style", "display", 'none']
            ],
            "${_pn-block29}": [
                ["style", "top", '-40px'],
                ["style", "left", '364px'],
                ["style", "display", 'none']
            ],
            "${_pn-block40}": [
                ["style", "top", '-40px'],
                ["style", "left", '637px'],
                ["style", "display", 'none']
            ],
            "${_pn-block34}": [
                ["style", "top", '-40px'],
                ["style", "left", '489px'],
                ["style", "display", 'none']
            ],
            "${_oval8}": [
                ["style", "top", '174px'],
                ["style", "left", '243px'],
                ["style", "display", 'none']
            ],
            "${_pn-block32}": [
                ["style", "display", 'none'],
                ["style", "top", '-40px']
            ],
            "${_pn-block38}": [
                ["style", "top", '-40px'],
                ["style", "left", '588px'],
                ["style", "display", 'none']
            ],
            "${_Text2}": [
                ["style", "top", '496px'],
                ["style", "font-family", 'Times New Roman, Times, serif'],
                ["style", "left", '121px'],
                ["style", "font-size", '119%']
            ],
            "${_pn-block30}": [
                ["style", "top", '-40px'],
                ["style", "left", '389px'],
                ["style", "display", 'none']
            ],
            "${_pn-sequence2}": [
                ["style", "top", '-45px'],
                ["style", "left", '163px'],
                ["style", "display", 'none']
            ],
            "${_Text6}": [
                ["style", "display", 'none'],
                ["style", "font-family", 'Times New Roman, Times, serif']
            ],
            "${_pn-block35}": [
                ["style", "top", '-40px'],
                ["style", "left", '512px'],
                ["style", "display", 'none']
            ],
            "${_Text}": [
                ["style", "top", '466px'],
                ["style", "font-family", 'Times New Roman, Times, serif'],
                ["style", "display", 'block'],
                ["style", "font-weight", '700'],
                ["style", "left", '238px'],
                ["style", "font-size", '94%']
            ],
            "${_ts-oval2}": [
                ["style", "top", '354px'],
                ["style", "left", '157px'],
                ["style", "display", 'none']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(255,255,255,1)'],
                ["style", "overflow", 'hidden'],
                ["style", "height", '550px'],
                ["style", "width", '850px']
            ],
            "${_pn-block27}": [
                ["style", "top", '-40px'],
                ["style", "left", '315px'],
                ["style", "display", 'none']
            ],
            "${_oval7}": [
                ["style", "top", '227px'],
                ["style", "left", '217px'],
                ["style", "display", 'none']
            ],
            "${_arrow14}": [
                ["style", "top", '176px'],
                ["transform", "scaleY", '0.09367'],
                ["transform", "rotateZ", '15deg'],
                ["style", "height", '103px'],
                ["style", "left", '186px'],
                ["style", "display", 'none']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 18750,
            autoPlay: true,
            timeline: [
                { id: "eid296", tween: [ "style", "${_Text}", "left", '238px', { fromValue: '238px'}], position: 17872, duration: 0 },
                { id: "eid235", tween: [ "transform", "${_arrow15}", "scaleY", '1', { fromValue: '0.23751'}], position: 9174, duration: 500 },
                { id: "eid284", tween: [ "style", "${_pn-block38}", "top", '162px', { fromValue: '-40px'}], position: 16479, duration: 800 },
                { id: "eid261", tween: [ "style", "${_pn-block31}", "display", 'block', { fromValue: 'none'}], position: 14000, duration: 0 },
                { id: "eid237", tween: [ "style", "${_oval8}", "display", 'block', { fromValue: 'none'}], position: 9921, duration: 0 },
                { id: "eid275", tween: [ "style", "${_pn-block35}", "top", '311px', { fromValue: '-40px'}], position: 15679, duration: 800 },
                { id: "eid219", tween: [ "style", "${_pn-block22}", "display", 'block', { fromValue: 'none'}], position: 5250, duration: 0 },
                { id: "eid218", tween: [ "style", "${_oval6}", "display", 'block', { fromValue: 'none'}], position: 5250, duration: 0 },
                { id: "eid244", tween: [ "style", "${_pn-block25}", "top", '311px', { fromValue: '-40px'}], position: 11500, duration: 834 },
                { id: "eid210", tween: [ "style", "${_pn-block21}", "top", '298px', { fromValue: '-40px'}], position: 3894, duration: 600 },
                { id: "eid208", tween: [ "style", "${_pn-block21}", "display", 'block', { fromValue: 'none'}], position: 3894, duration: 0 },
                { id: "eid263", tween: [ "style", "${_pn-block31}", "top", '199px', { fromValue: '-40px'}], position: 14000, duration: 800 },
                { id: "eid74", tween: [ "style", "${_Text5}", "display", 'block', { fromValue: 'none'}], position: 5921, duration: 0 },
                { id: "eid75", tween: [ "style", "${_Text5}", "display", 'none', { fromValue: 'block'}], position: 6250, duration: 0 },
                { id: "eid238", tween: [ "style", "${_pn-block24}", "display", 'block', { fromValue: 'none'}], position: 10000, duration: 0 },
                { id: "eid240", tween: [ "style", "${_pn-block24}", "top", '175px', { fromValue: '-40px'}], position: 10000, duration: 684 },
                { id: "eid279", tween: [ "style", "${_pn-block37}", "display", 'block', { fromValue: 'none'}], position: 16479, duration: 0 },
                { id: "eid226", tween: [ "style", "${_new-comm-52}", "display", 'block', { fromValue: 'none'}], position: 7446, duration: 0 },
                { id: "eid227", tween: [ "style", "${_new-comm-52}", "display", 'none', { fromValue: 'block'}], position: 7750, duration: 0 },
                { id: "eid171", tween: [ "style", "${_Text4}", "display", 'block', { fromValue: 'none'}], position: 3190, duration: 0 },
                { id: "eid172", tween: [ "style", "${_Text4}", "display", 'none', { fromValue: 'block'}], position: 3500, duration: 0 },
                { id: "eid288", tween: [ "style", "${_pn-block40}", "display", 'block', { fromValue: 'none'}], position: 17279, duration: 0 },
                { id: "eid232", tween: [ "style", "${_pn-block23}", "top", '224px', { fromValue: '-40px'}], position: 8346, duration: 600 },
                { id: "eid254", tween: [ "style", "${_pn-block28}", "top", '125px', { fromValue: '-40px'}], position: 12334, duration: 800 },
                { id: "eid272", tween: [ "style", "${_pn-block34}", "top", '237px', { fromValue: '-40px'}], position: 14800, duration: 879 },
                { id: "eid266", tween: [ "style", "${_pn-block32}", "top", '150px', { fromValue: '-40px'}], position: 14000, duration: 800 },
                { id: "eid264", tween: [ "style", "${_pn-block32}", "display", 'block', { fromValue: 'none'}], position: 14000, duration: 0 },
                { id: "eid206", tween: [ "style", "${_pn-sequence2}", "top", '66px', { fromValue: '-45px'}], position: 2045, duration: 890 },
                { id: "eid217", tween: [ "transform", "${_arrow14}", "scaleY", '1', { fromValue: '0.09367'}], position: 4494, duration: 506 },
                { id: "eid270", tween: [ "style", "${_pn-block34}", "display", 'block', { fromValue: 'none'}], position: 14800, duration: 0 },
                { id: "eid204", tween: [ "style", "${_pn-sequence2}", "display", 'block', { fromValue: 'none'}], position: 2045, duration: 0 },
                { id: "eid155", tween: [ "style", "${_Text}", "display", 'none', { fromValue: 'block'}], position: 18591, duration: 0 },
                { id: "eid290", tween: [ "style", "${_pn-block40}", "top", '175px', { fromValue: '-40px'}], position: 17279, duration: 800 },
                { id: "eid252", tween: [ "style", "${_pn-block28}", "display", 'block', { fromValue: 'none'}], position: 12334, duration: 0 },
                { id: "eid242", tween: [ "style", "${_pn-block25}", "display", 'block', { fromValue: 'none'}], position: 11500, duration: 0 },
                { id: "eid255", tween: [ "style", "${_pn-block29}", "display", 'block', { fromValue: 'none'}], position: 13134, duration: 0 },
                { id: "eid213", tween: [ "style", "${_arrow14}", "display", 'block', { fromValue: 'none'}], position: 4494, duration: 0 },
                { id: "eid249", tween: [ "style", "${_pn-block27}", "display", 'block', { fromValue: 'none'}], position: 12334, duration: 0 },
                { id: "eid248", tween: [ "style", "${_pn-block27}", "display", 'block', { fromValue: 'block'}], position: 13134, duration: 0 },
                { id: "eid257", tween: [ "style", "${_pn-block29}", "top", '175px', { fromValue: '-40px'}], position: 13134, duration: 800 },
                { id: "eid269", tween: [ "style", "${_pn-block33}", "top", '137px', { fromValue: '-40px'}], position: 14800, duration: 879 },
                { id: "eid7", tween: [ "style", "${_Text3}", "display", 'block', { fromValue: 'none'}], position: 1545, duration: 0 },
                { id: "eid10", tween: [ "style", "${_Text3}", "display", 'none', { fromValue: 'block'}], position: 1820, duration: 0 },
                { id: "eid267", tween: [ "style", "${_pn-block33}", "display", 'block', { fromValue: 'none'}], position: 14800, duration: 0 },
                { id: "eid223", tween: [ "style", "${_new-comm-422}", "display", 'block', { fromValue: 'none'}], position: 6750, duration: 0 },
                { id: "eid224", tween: [ "style", "${_new-comm-422}", "display", 'none', { fromValue: 'block'}], position: 7087, duration: 0 },
                { id: "eid282", tween: [ "style", "${_pn-block38}", "display", 'block', { fromValue: 'none'}], position: 16479, duration: 0 },
                { id: "eid98", tween: [ "style", "${_Text6}", "display", 'block', { fromValue: 'none'}], position: 11000, duration: 0 },
                { id: "eid99", tween: [ "style", "${_Text6}", "display", 'none', { fromValue: 'block'}], position: 11250, duration: 0 },
                { id: "eid276", tween: [ "style", "${_pn-block36}", "display", 'block', { fromValue: 'none'}], position: 15679, duration: 0 },
                { id: "eid258", tween: [ "style", "${_pn-block30}", "display", 'block', { fromValue: 'none'}], position: 13134, duration: 0 },
                { id: "eid278", tween: [ "style", "${_pn-block36}", "top", '262px', { fromValue: '-40px'}], position: 15679, duration: 800 },
                { id: "eid222", tween: [ "style", "${_ts-oval2}", "display", 'block', { fromValue: 'none'}], position: 6500, duration: 0 },
                { id: "eid297", tween: [ "style", "${_Text}", "top", '466px', { fromValue: '466px'}], position: 17872, duration: 0 },
                { id: "eid198", tween: [ "style", "${_axis2}", "display", 'block', { fromValue: 'none'}], position: 250, duration: 0 },
                { id: "eid281", tween: [ "style", "${_pn-block37}", "top", '212px', { fromValue: '-40px'}], position: 16479, duration: 800 },
                { id: "eid287", tween: [ "style", "${_pn-block39}", "top", '225px', { fromValue: '-40px'}], position: 17279, duration: 800 },
                { id: "eid203", tween: [ "style", "${_input-data2}", "top", '67px', { fromValue: '-70px'}], position: 500, duration: 800 },
                { id: "eid273", tween: [ "style", "${_pn-block35}", "display", 'block', { fromValue: 'none'}], position: 15679, duration: 0 },
                { id: "eid201", tween: [ "style", "${_input-data2}", "display", 'block', { fromValue: 'none'}], position: 500, duration: 0 },
                { id: "eid285", tween: [ "style", "${_pn-block39}", "display", 'block', { fromValue: 'none'}], position: 17279, duration: 0 },
                { id: "eid221", tween: [ "style", "${_pn-block22}", "top", '149px', { fromValue: '-40px'}], position: 5250, duration: 600 },
                { id: "eid233", tween: [ "style", "${_arrow15}", "display", 'block', { fromValue: 'none'}], position: 9174, duration: 0 },
                { id: "eid247", tween: [ "style", "${_pn-block26}", "top", '212px', { fromValue: '-40px'}], position: 11500, duration: 834 },
                { id: "eid228", tween: [ "style", "${_oval7}", "display", 'block', { fromValue: 'none'}], position: 8095, duration: 0 },
                { id: "eid207", tween: [ "style", "${_oval5}", "display", 'block', { fromValue: 'none'}], position: 3700, duration: 0 },
                { id: "eid245", tween: [ "style", "${_pn-block26}", "display", 'block', { fromValue: 'none'}], position: 11500, duration: 0 },
                { id: "eid229", tween: [ "style", "${_pn-block23}", "display", 'block', { fromValue: 'none'}], position: 8346, duration: 0 },
                { id: "eid251", tween: [ "style", "${_pn-block27}", "top", '274px', { fromValue: '-40px'}], position: 12334, duration: 800 },
                { id: "eid260", tween: [ "style", "${_pn-block30}", "top", '274px', { fromValue: '-40px'}], position: 13134, duration: 800 }            ]
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
})(jQuery, AdobeEdge, "EDGE-1327596");
