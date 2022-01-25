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
                id: 'arrow-14',
                display: 'none',
                type: 'image',
                rect: ['133', '341px','42px','38px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"arrow-1.png",'0px','0px'],
                transform: [[],['180']]
            },
            {
                id: 'arrow-group8',
                display: 'none',
                type: 'image',
                rect: ['219px', '331px','54px','75px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"arrow-group.png",'0px','0px'],
                transform: [[],['181']]
            },
            {
                id: 'arrow-group7',
                display: 'none',
                type: 'image',
                rect: ['312px', '330px','54px','75px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"arrow-group.png",'0px','0px'],
                transform: [[],['180']]
            },
            {
                id: 'arrow-28',
                display: 'none',
                type: 'image',
                rect: ['402px', '355px','55px','30px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"arrow-2.png",'0px','0px'],
                transform: [[],['181']]
            },
            {
                id: 'arrow-27',
                display: 'none',
                type: 'image',
                rect: ['495px', '356px','55px','30px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"arrow-2.png",'0px','0px'],
                transform: [[],['180']]
            },
            {
                id: 'arrow-26',
                display: 'none',
                type: 'image',
                rect: ['485px', '163px','55px','30px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"arrow-2.png",'0px','0px']
            },
            {
                id: 'arrow-25',
                display: 'none',
                type: 'image',
                rect: ['390px', '162px','55px','30px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"arrow-2.png",'0px','0px']
            },
            {
                id: 'arrow-group6',
                display: 'none',
                type: 'image',
                rect: ['308px', '142px','54px','75px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"arrow-group.png",'0px','0px']
            },
            {
                id: 'arrow-group5',
                display: 'none',
                type: 'image',
                rect: ['216px', '143px','54px','75px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"arrow-group.png",'0px','0px']
            },
            {
                id: 'bit-stream-text4',
                display: 'none',
                type: 'image',
                rect: ['79px', '340px','42px','38px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"bit-stream-text.png",'0px','0px']
            },
            {
                id: 'ifft_fft2',
                display: 'none',
                type: 'image',
                rect: ['154', '443','206px','46px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"ifft_fft.png",'0px','0px']
            },
            {
                id: 'Text6',
                display: 'none',
                type: 'text',
                rect: ['446', '431','auto','auto','auto', 'auto'],
                text: "Undo operations from the transmitter to<br>obtain the original bit stream.",
                align: "left",
                font: ['\'Times New Roman\', Times, serif', [94, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: 'Text7',
                display: 'block',
                type: 'text',
                rect: ['197px', '520px','auto','auto','auto', 'auto'],
                text: "Click or Touch on Figure for Each Step of the Animation ",
                align: "center",
                font: ['\'Times New Roman\', Times, serif', [94, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: 'bit-stream-text3',
                display: 'none',
                type: 'image',
                rect: ['99px', '156','42px','38px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"bit-stream-text.png",'0px','0px']
            },
            {
                id: 'black-arrow2',
                display: 'none',
                type: 'image',
                rect: ['546px', '132px','76px','58px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"black-arrow.png",'0px','0px']
            },
            {
                id: 'fft2',
                display: 'none',
                type: 'image',
                rect: ['249px', '320px','90px','90px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"fft.png",'0px','0px']
            },
            {
                id: 'Untitled-2',
                display: 'none',
                type: 'image',
                rect: ['158px', '135px','76px','90px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"Untitled-2.png",'0px','0px']
            },
            {
                id: 'Text',
                display: 'none',
                type: 'text',
                rect: ['171', '65','auto','auto','auto', 'auto'],
                text: "Convert the bit stream into several <br>parallel lower bit rate streams.",
                font: ['Times New Roman, Times, serif', [94, "%"], "rgba(0,0,0,1)", "700", "none", ""]
            },
            {
                id: 'Text2',
                display: 'none',
                type: 'text',
                rect: ['270', '65px','auto','auto','auto', 'auto'],
                text: "Use the IFFT to create a data stream<br>of the combined subcarriers.",
                align: "left",
                font: ['\'Times New Roman\', Times, serif', [94, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: 'Text3',
                display: 'none',
                type: 'text',
                rect: ['362', '67','auto','auto','auto', 'auto'],
                text: "Add the cyclic perfix to the first part of the<br>OFDM symbol to overcome multipath effects.",
                align: "left",
                font: ['\'Times New Roman\', Times, serif', [94, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: 'Text4',
                display: 'none',
                type: 'text',
                rect: ['381', '65','auto','auto','auto', 'auto'],
                text: "Modulate onto a carrier and send.",
                align: "left",
                font: ['\'Times New Roman\', Times, serif', [94, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: 'curve-arrow2',
                display: 'none',
                type: 'image',
                rect: ['615px', '150px','45px','168px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"curve-arrow.png",'0px','0px'],
                transform: [[],['-90']]
            },
            {
                id: 'Text5',
                display: 'none',
                type: 'text',
                rect: ['446', '435','auto','auto','auto', 'auto'],
                text: "Retrieve over the wireless channel and<br>multiply by the carrier to convert to<br>a baseband signal. ",
                align: "left",
                font: ['\'Times New Roman\', Times, serif', [94, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: 'trans-text2',
                display: 'none',
                type: 'image',
                rect: ['553', '214px','89px','48px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"trans-text.png",'0px','0px']
            },
            {
                id: 'black-arrow3',
                display: 'none',
                type: 'image',
                rect: ['548px', '319px','76px','58px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"black-arrow.png",'0px','0px']
            },
            {
                id: 'Untitled-22',
                display: 'none',
                type: 'image',
                rect: ['343px', '322px','76px','90px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"Untitled-2.png",'0px','0px']
            },
            {
                id: 'Text9',
                type: 'text',
                rect: ['206px', '571px','auto','auto','auto', 'auto'],
                text: "Figure 5.25  IFFT Implementation of OFDM",
                align: "center",
                font: ['\'Times New Roman\', Times, serif', [119, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: 'arrow-13',
                display: 'none',
                type: 'image',
                rect: ['129', '161px','42px','38px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"arrow-1.png",'0px','0px']
            },
            {
                id: 'ifft2',
                display: 'none',
                type: 'image',
                rect: ['250px', '132px','83px','90px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"ifft.png",'0px','0px']
            },
            {
                id: 'parallel-to-serial3',
                display: 'none',
                type: 'image',
                rect: ['339px', '132px','83px','90px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"parallel-to-serial.png",'0px','0px']
            },
            {
                id: 'add-cyclic-prefix',
                display: 'none',
                type: 'image',
                rect: ['422px', '141px','96px','63px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"add-cyclic-prefix.png",'0px','0px']
            },
            {
                id: 'fc3',
                display: 'none',
                type: 'image',
                rect: ['515px', '118px','48px','83px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"fc.png",'0px','0px']
            },
            {
                id: 'triangle3',
                display: 'none',
                type: 'image',
                rect: ['579px', '124px','45px','44px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"triangle.png",'0px','0px']
            },
            {
                id: 'triangle4',
                display: 'none',
                type: 'image',
                rect: ['580px', '310px','45px','44px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"triangle.png",'0px','0px']
            },
            {
                id: 'fc4',
                display: 'none',
                type: 'image',
                rect: ['516px', '305px','48px','83px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"fc.png",'0px','0px']
            },
            {
                id: 'remove-cyclic2',
                display: 'none',
                type: 'image',
                rect: ['431px', '336px','80px','58px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"remove-cyclic.png",'0px','0px']
            },
            {
                id: 'parallel-to-serial4',
                display: 'none',
                type: 'image',
                rect: ['157px', '319px','83px','90px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"parallel-to-serial.png",'0px','0px']
            }],
            symbolInstances: [

            ]
        },
    states: {
        "Base State": {
            "${_arrow-group6}": [
                ["style", "top", '142px'],
                ["style", "display", 'none'],
                ["style", "left", '308px'],
                ["style", "width", '18px']
            ],
            "${_curve-arrow2}": [
                ["style", "top", '150px'],
                ["style", "display", 'none'],
                ["style", "left", '615px'],
                ["transform", "rotateZ", '-90deg']
            ],
            "${_arrow-13}": [
                ["style", "display", 'none'],
                ["style", "top", '161px'],
                ["style", "width", '3px']
            ],
            "${_Text2}": [
                ["style", "top", '65px'],
                ["style", "display", 'none']
            ],
            "${_arrow-group7}": [
                ["style", "top", '330px'],
                ["transform", "rotateZ", '180deg'],
                ["style", "display", 'none'],
                ["style", "left", '356px'],
                ["style", "width", '10px']
            ],
            "${_fft2}": [
                ["style", "top", '320px'],
                ["style", "left", '249px'],
                ["style", "display", 'none']
            ],
            "${_Text4}": [
                ["style", "display", 'none']
            ],
            "${_arrow-group8}": [
                ["style", "top", '331px'],
                ["transform", "rotateZ", '181deg'],
                ["style", "display", 'none'],
                ["style", "left", '260px'],
                ["style", "width", '13px']
            ],
            "${_fc3}": [
                ["style", "height", '0px'],
                ["style", "display", 'none'],
                ["style", "left", '515px'],
                ["style", "top", '118px']
            ],
            "${_Text9}": [
                ["style", "top", '571px'],
                ["style", "left", '206px'],
                ["style", "text-align", 'center'],
                ["style", "font-size", '119%']
            ],
            "${_arrow-25}": [
                ["style", "top", '162px'],
                ["style", "display", 'none'],
                ["style", "left", '390px'],
                ["style", "width", '24px']
            ],
            "${_arrow-28}": [
                ["style", "top", '355px'],
                ["transform", "rotateZ", '181deg'],
                ["style", "display", 'none'],
                ["style", "left", '440px'],
                ["style", "width", '17px']
            ],
            "${_Text7}": [
                ["style", "top", '545px'],
                ["style", "text-align", 'center'],
                ["style", "display", 'block'],
                ["style", "left", '197px'],
                ["style", "font-size", '94%']
            ],
            "${_bit-stream-text4}": [
                ["style", "top", '340px'],
                ["style", "left", '-60px'],
                ["style", "display", 'none']
            ],
            "${_fc4}": [
                ["style", "height", '0px'],
                ["style", "display", 'none'],
                ["style", "left", '516px'],
                ["style", "top", '305px']
            ],
            "${_Text5}": [
                ["style", "display", 'none']
            ],
            "${_ifft_fft2}": [
                ["style", "display", 'none'],
                ["style", "left", '-200px']
            ],
            "${_black-arrow2}": [
                ["style", "display", 'none'],
                ["style", "top", '132px'],
                ["style", "left", '546px'],
                ["style", "width", '0px']
            ],
            "${_arrow-group5}": [
                ["style", "top", '143px'],
                ["style", "display", 'none'],
                ["style", "left", '216px'],
                ["style", "width", '13px']
            ],
            "${_parallel-to-serial4}": [
                ["style", "top", '319px'],
                ["style", "left", '157px'],
                ["style", "display", 'none']
            ],
            "${_remove-cyclic2}": [
                ["style", "top", '336px'],
                ["style", "left", '431px'],
                ["style", "display", 'none']
            ],
            "${_ifft2}": [
                ["style", "top", '132px'],
                ["style", "left", '250px'],
                ["style", "display", 'none']
            ],
            "${_triangle4}": [
                ["style", "top", '310px'],
                ["style", "left", '580px'],
                ["style", "display", 'none']
            ],
            "${_add-cyclic-prefix}": [
                ["style", "top", '141px'],
                ["style", "left", '422px'],
                ["style", "display", 'none']
            ],
            "${_triangle3}": [
                ["style", "top", '124px'],
                ["style", "left", '579px'],
                ["style", "display", 'none']
            ],
            "${_arrow-27}": [
                ["style", "top", '356px'],
                ["transform", "rotateZ", '180deg'],
                ["style", "display", 'none'],
                ["style", "left", '531px'],
                ["style", "width", '19px']
            ],
            "${_Untitled-2}": [
                ["style", "top", '135px'],
                ["style", "left", '158px'],
                ["style", "display", 'none']
            ],
            "${_arrow-14}": [
                ["style", "top", '341px'],
                ["transform", "rotateZ", '180deg'],
                ["style", "display", 'none'],
                ["style", "left", '171px'],
                ["style", "width", '4px']
            ],
            "${_parallel-to-serial3}": [
                ["style", "top", '132px'],
                ["style", "left", '339px'],
                ["style", "display", 'none']
            ],
            "${_Text3}": [
                ["style", "display", 'none']
            ],
            "${_trans-text2}": [
                ["style", "display", 'none'],
                ["style", "left", '760px'],
                ["style", "top", '214px']
            ],
            "${_Untitled-22}": [
                ["style", "top", '322px'],
                ["style", "left", '343px'],
                ["style", "display", 'none']
            ],
            "${_Text}": [
                ["style", "display", 'none'],
                ["style", "font-family", 'Times New Roman, Times, serif'],
                ["style", "font-weight", '700'],
                ["style", "font-size", '94%']
            ],
            "${_Text6}": [
                ["style", "display", 'none']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(255,255,255,1)'],
                ["style", "overflow", 'hidden'],
                ["style", "height", '650px'],
                ["style", "width", '750px']
            ],
            "${_black-arrow3}": [
                ["style", "display", 'none'],
                ["style", "left", '548px'],
                ["style", "top", '319px']
            ],
            "${_bit-stream-text3}": [
                ["style", "left", '99px'],
                ["style", "display", 'none']
            ],
            "${_arrow-26}": [
                ["style", "top", '163px'],
                ["style", "display", 'none'],
                ["style", "left", '485px'],
                ["style", "width", '21px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 24500,
            autoPlay: true,
            timeline: [
                { id: "eid185", tween: [ "style", "${_curve-arrow2}", "display", 'block', { fromValue: 'none'}], position: 10705, duration: 0 },
                { id: "eid195", tween: [ "style", "${_fc4}", "height", '83px', { fromValue: '0px'}], position: 12618, duration: 900 },
                { id: "eid191", tween: [ "style", "${_trans-text2}", "left", '553px', { fromValue: '760px'}], position: 11500, duration: 300 },
                { id: "eid177", tween: [ "style", "${_add-cyclic-prefix}", "display", 'block', { fromValue: 'none'}], position: 6649, duration: 0 },
                { id: "eid207", tween: [ "style", "${_arrow-group7}", "display", 'block', { fromValue: 'none'}], position: 17103, duration: 0 },
                { id: "eid201", tween: [ "style", "${_remove-cyclic2}", "display", 'block', { fromValue: 'none'}], position: 15410, duration: 0 },
                { id: "eid172", tween: [ "style", "${_parallel-to-serial3}", "display", 'block', { fromValue: 'none'}], position: 4750, duration: 0 },
                { id: "eid202", tween: [ "style", "${_arrow-28}", "display", 'block', { fromValue: 'none'}], position: 15675, duration: 0 },
                { id: "eid223", tween: [ "style", "${_arrow-14}", "width", '42px', { fromValue: '4px'}], position: 20000, duration: 900 },
                { id: "eid226", tween: [ "style", "${_bit-stream-text4}", "left", '79px', { fromValue: '-60px'}], position: 21250, duration: 900 },
                { id: "eid227", tween: [ "style", "${_bit-stream-text4}", "left", '100px', { fromValue: '79px'}], position: 22150, duration: 0 },
                { id: "eid209", tween: [ "style", "${_arrow-group7}", "left", '312px', { fromValue: '356px'}], position: 17103, duration: 860 },
                { id: "eid162", tween: [ "style", "${_arrow-13}", "display", 'block', { fromValue: 'none'}], position: 390, duration: 0 },
                { id: "eid200", tween: [ "style", "${_arrow-27}", "width", '55px', { fromValue: '19px'}], position: 14250, duration: 900 },
                { id: "eid37", tween: [ "style", "${_Text4}", "display", 'block', { fromValue: 'none'}], position: 10200, duration: 0 },
                { id: "eid38", tween: [ "style", "${_Text4}", "display", 'none', { fromValue: 'block'}], position: 10450, duration: 0 },
                { id: "eid165", tween: [ "style", "${_arrow-group5}", "display", 'block', { fromValue: 'none'}], position: 2150, duration: 0 },
                { id: "eid90", tween: [ "style", "${_Text5}", "display", 'block', { fromValue: 'none'}], position: 13750, duration: 0 },
                { id: "eid91", tween: [ "style", "${_Text5}", "display", 'none', { fromValue: 'block'}], position: 14000, duration: 0 },
                { id: "eid35", tween: [ "style", "${_black-arrow2}", "width", '76px', { fromValue: '0px'}], position: 8700, duration: 900 },
                { id: "eid189", tween: [ "style", "${_trans-text2}", "display", 'block', { fromValue: 'none'}], position: 11500, duration: 0 },
                { id: "eid168", tween: [ "style", "${_ifft2}", "display", 'block', { fromValue: 'none'}], position: 3300, duration: 0 },
                { id: "eid164", tween: [ "style", "${_arrow-13}", "width", '42px', { fromValue: '3px'}], position: 390, duration: 660 },
                { id: "eid234", tween: [ "style", "${_Text7}", "left", '197px', { fromValue: '197px'}], position: 2901, duration: 0 },
                { id: "eid235", tween: [ "style", "${_Text7}", "left", '197px', { fromValue: '197px'}], position: 23678, duration: 0 },
                { id: "eid4", tween: [ "style", "${_Untitled-2}", "display", 'block', { fromValue: 'none'}], position: 1300, duration: 0 },
                { id: "eid184", tween: [ "style", "${_triangle3}", "display", 'block', { fromValue: 'none'}], position: 9850, duration: 0 },
                { id: "eid218", tween: [ "style", "${_parallel-to-serial4}", "display", 'block', { fromValue: 'none'}], position: 19655, duration: 0 },
                { id: "eid231", tween: [ "style", "${_ifft_fft2}", "left", '154px', { fromValue: '-200px'}], position: 22405, duration: 900 },
                { id: "eid5", tween: [ "style", "${_Text}", "display", 'block', { fromValue: 'none'}], position: 1550, duration: 0 },
                { id: "eid6", tween: [ "style", "${_Text}", "display", 'none', { fromValue: 'block'}], position: 1850, duration: 0 },
                { id: "eid111", tween: [ "style", "${_Untitled-22}", "display", 'block', { fromValue: 'none'}], position: 16813, duration: 0 },
                { id: "eid228", tween: [ "style", "${_ifft_fft2}", "display", 'block', { fromValue: 'none'}], position: 22405, duration: 0 },
                { id: "eid143", tween: [ "style", "${_Text6}", "display", 'block', { fromValue: 'none'}], position: 23500, duration: 0 },
                { id: "eid144", tween: [ "style", "${_Text6}", "display", 'none', { fromValue: 'block'}], position: 23750, duration: 0 },
                { id: "eid217", tween: [ "style", "${_arrow-group8}", "width", '54px', { fromValue: '13px'}], position: 18500, duration: 900 },
                { id: "eid193", tween: [ "style", "${_fc4}", "display", 'block', { fromValue: 'none'}], position: 12618, duration: 0 },
                { id: "eid15", tween: [ "style", "${_Text2}", "display", 'block', { fromValue: 'none'}], position: 5000, duration: 0 },
                { id: "eid16", tween: [ "style", "${_Text2}", "display", 'none', { fromValue: 'block'}], position: 5250, duration: 0 },
                { id: "eid192", tween: [ "style", "${_triangle4}", "display", 'block', { fromValue: 'none'}], position: 12105, duration: 0 },
                { id: "eid206", tween: [ "style", "${_arrow-28}", "width", '55px', { fromValue: '17px'}], position: 15675, duration: 900 },
                { id: "eid219", tween: [ "style", "${_arrow-14}", "display", 'block', { fromValue: 'none'}], position: 20000, duration: 0 },
                { id: "eid211", tween: [ "style", "${_arrow-group7}", "width", '54px', { fromValue: '10px'}], position: 17103, duration: 860 },
                { id: "eid167", tween: [ "style", "${_arrow-group5}", "width", '54px', { fromValue: '13px'}], position: 2150, duration: 900 },
                { id: "eid198", tween: [ "style", "${_arrow-27}", "left", '495px', { fromValue: '531px'}], position: 14250, duration: 900 },
                { id: "eid215", tween: [ "style", "${_arrow-group8}", "left", '219px', { fromValue: '260px'}], position: 18500, duration: 900 },
                { id: "eid224", tween: [ "style", "${_bit-stream-text4}", "display", 'block', { fromValue: 'none'}], position: 21250, duration: 0 },
                { id: "eid196", tween: [ "style", "${_arrow-27}", "display", 'block', { fromValue: 'none'}], position: 14250, duration: 0 },
                { id: "eid183", tween: [ "style", "${_arrow-26}", "width", '55px', { fromValue: '21px'}], position: 7500, duration: 900 },
                { id: "eid212", tween: [ "style", "${_fft2}", "display", 'block', { fromValue: 'none'}], position: 18250, duration: 0 },
                { id: "eid232", tween: [ "style", "${_Text7}", "top", '518px', { fromValue: '545px'}], position: 2901, duration: 20777 },
                { id: "eid60", tween: [ "style", "${_black-arrow3}", "display", 'block', { fromValue: 'none'}], position: 12350, duration: 0 },
                { id: "eid181", tween: [ "style", "${_arrow-26}", "display", 'block', { fromValue: 'none'}], position: 7500, duration: 0 },
                { id: "eid180", tween: [ "style", "${_fc3}", "height", '83px', { fromValue: '0px'}], position: 7500, duration: 900 },
                { id: "eid31", tween: [ "style", "${_black-arrow2}", "display", 'block', { fromValue: 'none'}], position: 8700, duration: 0 },
                { id: "eid21", tween: [ "style", "${_Text3}", "display", 'block', { fromValue: 'none'}], position: 7000, duration: 0 },
                { id: "eid22", tween: [ "style", "${_Text3}", "display", 'none', { fromValue: 'block'}], position: 7250, duration: 0 },
                { id: "eid176", tween: [ "style", "${_arrow-25}", "width", '55px', { fromValue: '24px'}], position: 5500, duration: 900 },
                { id: "eid145", tween: [ "style", "${_Text7}", "display", 'none', { fromValue: 'block'}], position: 24115, duration: 0 },
                { id: "eid221", tween: [ "style", "${_arrow-14}", "left", '133px', { fromValue: '171px'}], position: 20000, duration: 900 },
                { id: "eid161", tween: [ "style", "${_bit-stream-text3}", "display", 'block', { fromValue: 'none'}], position: 250, duration: 0 },
                { id: "eid169", tween: [ "style", "${_arrow-group6}", "display", 'block', { fromValue: 'none'}], position: 3575, duration: 0 },
                { id: "eid178", tween: [ "style", "${_fc3}", "display", 'block', { fromValue: 'none'}], position: 7500, duration: 0 },
                { id: "eid204", tween: [ "style", "${_arrow-28}", "left", '402px', { fromValue: '440px'}], position: 15675, duration: 900 },
                { id: "eid171", tween: [ "style", "${_arrow-group6}", "width", '54px', { fromValue: '18px'}], position: 3575, duration: 900 },
                { id: "eid174", tween: [ "style", "${_arrow-25}", "display", 'block', { fromValue: 'none'}], position: 5500, duration: 0 },
                { id: "eid188", tween: [ "transform", "${_curve-arrow2}", "rotateZ", '-1deg', { fromValue: '-90deg'}], position: 10705, duration: 795 },
                { id: "eid213", tween: [ "style", "${_arrow-group8}", "display", 'block', { fromValue: 'none'}], position: 18500, duration: 0 }            ]
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
})(jQuery, AdobeEdge, "EDGE-2551256");
