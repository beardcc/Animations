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
                id: 'application-data',
                display: 'block',
                type: 'image',
                rect: ['355px', '52px','229px','41px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"application-data.png",'0px','0px']
            },
            {
                id: 'Text4',
                display: 'block',
                type: 'text',
                rect: ['370px', '16px','272px','35px','auto', 'auto'],
                text: "Data comes from the application layer.",
                align: "left",
                font: ['Times New Roman, Times, serif', [75, "%"], "rgba(0,0,0,1.00)", "bold", "none", "normal"]
            },
            {
                id: 'Text5',
                display: 'block',
                type: 'text',
                rect: ['367px', '9px','333px','35px','auto', 'auto'],
                text: "TCP encapsulates the application data into its segment and adds a header for the TCP control process.",
                align: "left",
                font: ['Times New Roman, Times, serif', [75, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: 'Text',
                display: 'block',
                type: 'text',
                rect: ['656px', '66px','135px','21px','auto', 'auto'],
                text: "Application Layer",
                font: ['Times New Roman, Times, serif', [75, "%"], "rgba(0,0,0,1)", "700", "none", ""]
            },
            {
                id: 'TextCopy',
                display: 'block',
                type: 'text',
                rect: ['676px', '128px','135px','21px','auto', 'auto'],
                text: "TCP  Layer",
                font: ['Times New Roman, Times, serif', [75, "%"], "rgba(0,0,0,1)", "700", "none", ""]
            },
            {
                id: 'TextCopy2',
                display: 'block',
                type: 'text',
                rect: ['681px', '191px','135px','21px','auto', 'auto'],
                text: "IP  Layer",
                font: ['Times New Roman, Times, serif', [75, "%"], "rgba(0,0,0,1)", "700", "none", ""]
            },
            {
                id: 'Text7',
                display: 'block',
                type: 'text',
                rect: ['303px', '16px','353px','35px','auto', 'auto'],
                text: "The Internet Protocol puts the TCP segment into its data payload and adds IP information for routing.",
                align: "left",
                font: ['Times New Roman, Times, serif', [75, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: 'TextCopy4',
                display: 'block',
                type: 'text',
                rect: ['677px', '255px','135px','21px','auto', 'auto'],
                text: "LLC  Layer",
                font: ['Times New Roman, Times, serif', [75, "%"], "rgba(0,0,0,1)", "700", "none", ""]
            },
            {
                id: 'Text8',
                display: 'block',
                type: 'text',
                rect: ['300px', '26px','291px','35px','auto', 'auto'],
                text: "LLC adds link level control information.",
                align: "left",
                font: ['Times New Roman, Times, serif', [75, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: 'LLC-Header',
                display: 'block',
                type: 'image',
                rect: ['140px', '245px','81px','35px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"LLC-Header.png",'0px','0px']
            },
            {
                id: 'MAC-Data',
                display: 'block',
                type: 'image',
                rect: ['138px', '306px','446px','35px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"MAC-Data.png",'0px','0px']
            },
            {
                id: 'Labels',
                display: 'block',
                type: 'image',
                rect: ['311', '480','712px','109px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"Labels.png",'0px','0px']
            },
            {
                id: 'MAC_Header',
                display: 'block',
                type: 'image',
                rect: ['68px', '308px','81px','35px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"MAC_Header.png",'0px','0px']
            },
            {
                id: 'MAC_Trailer',
                display: 'block',
                type: 'image',
                rect: ['572px', '308px','81px','35px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"MAC_Trailer.png",'0px','0px']
            },
            {
                id: 'TextCopy5',
                display: 'block',
                type: 'text',
                rect: ['674px', '317px','135px','21px','auto', 'auto'],
                text: "MAC Layer",
                font: ['Times New Roman, Times, serif', [75, "%"], "rgba(0,0,0,1)", "700", "none", ""]
            },
            {
                id: 'Text9',
                display: 'block',
                type: 'text',
                rect: ['349px', '8px','227px','39px','auto', 'auto'],
                text: "MAC Layer adds MAC addresses and governs access to the medium.",
                align: "left",
                font: ['Times New Roman, Times, serif', [75, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: 'Header',
                display: 'block',
                type: 'image',
                rect: ['284px', '119px','81px','35px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"Header.png",'0px','0px']
            },
            {
                id: 'IP-data',
                display: 'block',
                type: 'image',
                rect: ['283px', '182px','298px','34px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"IP-data.png",'0px','0px']
            },
            {
                id: 'LLC-Data',
                display: 'block',
                type: 'image',
                rect: ['210px', '245px','373px','39px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"LLC-Data.png",'0px','0px']
            },
            {
                id: 'IP_Header',
                display: 'block',
                type: 'image',
                rect: ['259', '191','81px','35px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"IP_Header.png",'0px','0px']
            },
            {
                id: 'Text2',
                display: 'block',
                type: 'text',
                rect: ['399px', '65px','135px','21px','auto', 'auto'],
                text: "Application Data",
                align: "left",
                font: ['Georgia, \'Times New Roman\', Times, serif', [75, "%"], "rgba(255,255,255,1.00)", "bold", "none", "normal"]
            },
            {
                id: 'Text6',
                display: 'block',
                type: 'text',
                rect: ['427px', '128px','81px','21px','auto', 'auto'],
                text: "TCP Data",
                align: "left",
                font: ['Georgia, \'Times New Roman\', Times, serif', [75, "%"], "rgba(255,255,255,1)", "bold", "none", "normal"]
            },
            {
                id: 'FInal-Figure2',
                display: 'block',
                type: 'image',
                rect: ['55px', '51px','712px','464px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"FInal-Figure.png",'0px','0px']
            },
            {
                id: 'Text11',
                display: 'block',
                type: 'text',
                rect: ['237px', '553px','auto','auto','auto', 'auto'],
                text: "Click or Touch on Figure for Each Step of the Animation",
                align: "left",
                font: ['Times New Roman, Times, serif', [94, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: 'Text10',
                type: 'text',
                rect: ['221px', '571px','358px','45px','auto', 'auto'],
                text: "Figure 11.6 IEEE 802 Protocols in Context",
                align: "center",
                font: ['Times New Roman, Times, serif', [119, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: 'empty-packet2',
                display: 'block',
                type: 'image',
                rect: ['55px', '288px','612px','65px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"empty-packet.png",'0px','0px']
            }],
            symbolInstances: [

            ]
        },
    states: {
        "Base State": {
            "${_Labels}": [
                ["style", "top", '407px'],
                ["style", "left", '55px'],
                ["style", "display", 'block']
            ],
            "${_Text7}": [
                ["style", "top", '16px'],
                ["style", "font-size", '94%'],
                ["style", "display", 'block'],
                ["style", "font-family", 'Times New Roman, Times, serif'],
                ["style", "left", '303px'],
                ["style", "width", '353px']
            ],
            "${_Text11}": [
                ["style", "top", '550px'],
                ["style", "font-size", '94%'],
                ["style", "display", 'block'],
                ["style", "font-family", 'Times New Roman, Times, serif'],
                ["style", "left", '211px'],
                ["style", "width", '375px']
            ],
            "${_Text2}": [
                ["color", "color", 'rgba(255,255,255,1.00)'],
                ["style", "display", 'block'],
                ["style", "left", '399px'],
                ["style", "top", '65px']
            ],
            "${_MAC-Data}": [
                ["style", "top", '306px'],
                ["style", "display", 'block'],
                ["style", "left", '138px'],
                ["style", "width", '446px']
            ],
            "${_Text5}": [
                ["style", "top", '16px'],
                ["style", "font-size", '94%'],
                ["style", "display", 'block'],
                ["style", "font-family", 'Times New Roman, Times, serif'],
                ["style", "left", '246px'],
                ["style", "width", '456px']
            ],
            "${_TextCopy2}": [
                ["style", "top", '191px'],
                ["style", "width", '135px'],
                ["style", "font-weight", 'bold'],
                ["style", "display", 'block'],
                ["style", "font-family", 'Times New Roman, Times, serif'],
                ["style", "left", '681px'],
                ["style", "font-size", '75%']
            ],
            "${_Text8}": [
                ["style", "top", '26px'],
                ["style", "display", 'block'],
                ["style", "font-family", 'Times New Roman, Times, serif'],
                ["style", "left", '300px'],
                ["style", "font-size", '94%']
            ],
            "${_MAC_Header}": [
                ["style", "top", '308px'],
                ["style", "left", '-90px'],
                ["style", "display", 'block']
            ],
            "${_IP_Header}": [
                ["style", "top", '182px'],
                ["style", "left", '-212px'],
                ["style", "display", 'block']
            ],
            "${_Text4}": [
                ["style", "top", '16px'],
                ["style", "font-size", '94%'],
                ["color", "color", 'rgba(0,0,0,1.00)'],
                ["style", "display", 'block'],
                ["style", "font-family", 'Times New Roman, Times, serif'],
                ["style", "left", '370px'],
                ["style", "width", '272px']
            ],
            "${_TextCopy4}": [
                ["style", "top", '255px'],
                ["style", "width", '135px'],
                ["style", "font-weight", 'bold'],
                ["style", "display", 'block'],
                ["style", "font-family", 'Times New Roman, Times, serif'],
                ["style", "left", '677px'],
                ["style", "font-size", '75%']
            ],
            "${_IP-data}": [
                ["style", "top", '182px'],
                ["style", "display", 'block'],
                ["style", "left", '283px'],
                ["style", "width", '298px']
            ],
            "${_LLC-Data}": [
                ["style", "top", '246px'],
                ["style", "display", 'block'],
                ["style", "left", '210px'],
                ["style", "width", '373px']
            ],
            "${_TextCopy5}": [
                ["style", "top", '317px'],
                ["style", "font-size", '75%'],
                ["style", "font-weight", 'bold'],
                ["style", "display", 'block'],
                ["style", "font-family", 'Times New Roman, Times, serif'],
                ["style", "left", '674px'],
                ["style", "width", '135px']
            ],
            "${_MAC_Trailer}": [
                ["style", "top", '308px'],
                ["style", "left", '800px'],
                ["style", "display", 'block']
            ],
            "${_LLC-Header}": [
                ["style", "top", '246px'],
                ["style", "left", '-140px'],
                ["style", "display", 'block']
            ],
            "${_application-data}": [
                ["style", "top", '52px'],
                ["style", "display", 'block'],
                ["style", "left", '354px'],
                ["style", "width", '229px']
            ],
            "${_Text10}": [
                ["style", "top", '571px'],
                ["style", "text-align", 'center'],
                ["style", "width", '358px'],
                ["style", "font-family", 'Times New Roman, Times, serif'],
                ["style", "left", '221px'],
                ["style", "font-size", '119%']
            ],
            "${_Text6}": [
                ["style", "left", '427px'],
                ["style", "display", 'block']
            ],
            "${_Header}": [
                ["style", "top", '118px'],
                ["style", "left", '-284px'],
                ["style", "display", 'block']
            ],
            "${_Text}": [
                ["style", "top", '66px'],
                ["style", "width", '135px'],
                ["style", "font-weight", '700'],
                ["style", "display", 'block'],
                ["style", "font-family", 'Times New Roman, Times, serif'],
                ["style", "left", '656px'],
                ["style", "font-size", '75%']
            ],
            "${_empty-packet2}": [
                ["style", "top", '288px'],
                ["style", "left", '55px'],
                ["style", "display", 'block']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(255,255,255,1)'],
                ["style", "width", '800px'],
                ["style", "height", '600px'],
                ["style", "overflow", 'hidden']
            ],
            "${_Text9}": [
                ["style", "display", 'block'],
                ["style", "font-family", 'Times New Roman, Times, serif'],
                ["style", "font-size", '94%'],
                ["style", "width", '227px']
            ],
            "${_TextCopy}": [
                ["style", "top", '128px'],
                ["style", "font-size", '75%'],
                ["style", "font-weight", 'bold'],
                ["style", "display", 'block'],
                ["style", "font-family", 'Times New Roman, Times, serif'],
                ["style", "left", '676px'],
                ["style", "width", '135px']
            ],
            "${_FInal-Figure2}": [
                ["style", "top", '51px'],
                ["style", "left", '55px'],
                ["style", "display", 'block']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 13500,
            autoPlay: true,
            timeline: [
                { id: "eid168", tween: [ "style", "${_Text11}", "display", 'none', { fromValue: 'block'}], position: 13500, duration: 0 },
                { id: "eid189", tween: [ "style", "${_Text9}", "font-size", '94%', { fromValue: '15px'}], position: 9646, duration: 0 },
                { id: "eid115", tween: [ "style", "${_MAC_Header}", "left", '68px', { fromValue: '-90px'}], position: 9750, duration: 1500 },
                { id: "eid132", tween: [ "style", "${_empty-packet2}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid133", tween: [ "style", "${_empty-packet2}", "display", 'block', { fromValue: 'none'}], position: 11750, duration: 0 },
                { id: "eid144", tween: [ "style", "${_empty-packet2}", "display", 'none', { fromValue: 'block'}], position: 13500, duration: 0 },
                { id: "eid99", tween: [ "style", "${_LLC-Data}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid100", tween: [ "style", "${_LLC-Data}", "display", 'block', { fromValue: 'none'}], position: 8500, duration: 0 },
                { id: "eid124", tween: [ "style", "${_LLC-Data}", "display", 'none', { fromValue: 'block'}], position: 11250, duration: 0 },
                { id: "eid158", tween: [ "style", "${_LLC-Data}", "display", 'none', { fromValue: 'none'}], position: 13500, duration: 0 },
                { id: "eid154", tween: [ "style", "${_MAC_Trailer}", "display", 'none', { fromValue: 'block'}], position: 13500, duration: 0 },
                { id: "eid89", tween: [ "style", "${_LLC-Header}", "left", '140px', { fromValue: '-140px'}], position: 7000, duration: 1500 },
                { id: "eid126", tween: [ "style", "${_MAC-Data}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid127", tween: [ "style", "${_MAC-Data}", "display", 'block', { fromValue: 'none'}], position: 11250, duration: 0 },
                { id: "eid152", tween: [ "style", "${_MAC-Data}", "display", 'none', { fromValue: 'block'}], position: 13500, duration: 0 },
                { id: "eid70", tween: [ "style", "${_Header}", "top", '182px', { fromValue: '118px'}], position: 4250, duration: 1500 },
                { id: "eid30", tween: [ "style", "${_Text5}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid31", tween: [ "style", "${_Text5}", "display", 'block', { fromValue: 'none'}], position: 1635, duration: 0 },
                { id: "eid39", tween: [ "style", "${_Text5}", "display", 'none', { fromValue: 'block'}], position: 3500, duration: 0 },
                { id: "eid147", tween: [ "style", "${_Text5}", "display", 'none', { fromValue: 'none'}], position: 13500, duration: 0 },
                { id: "eid96", tween: [ "style", "${_IP_Header}", "top", '245px', { fromValue: '182px'}], position: 7000, duration: 1500 },
                { id: "eid142", tween: [ "style", "${_empty-packet2}", "top", '350px', { fromValue: '288px'}], position: 11750, duration: 1500 },
                { id: "eid3", tween: [ "style", "${_application-data}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid4", tween: [ "style", "${_application-data}", "display", 'block', { fromValue: 'none'}], position: 690, duration: 0 },
                { id: "eid74", tween: [ "style", "${_application-data}", "display", 'none', { fromValue: 'block'}], position: 5750, duration: 0 },
                { id: "eid157", tween: [ "style", "${_application-data}", "display", 'none', { fromValue: 'none'}], position: 13500, duration: 0 },
                { id: "eid20", tween: [ "style", "${_application-data}", "top", '114px', { fromValue: '52px'}], position: 1750, duration: 1500 },
                { id: "eid69", tween: [ "style", "${_application-data}", "top", '178px', { fromValue: '114px'}], position: 4250, duration: 1500 },
                { id: "eid1", tween: [ "style", "${_Text}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid2", tween: [ "style", "${_Text}", "display", 'block', { fromValue: 'none'}], position: 250, duration: 0 },
                { id: "eid148", tween: [ "style", "${_Text}", "display", 'none', { fromValue: 'block'}], position: 13500, duration: 0 },
                { id: "eid25", tween: [ "style", "${_TextCopy}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid26", tween: [ "style", "${_TextCopy}", "display", 'block', { fromValue: 'none'}], position: 1500, duration: 0 },
                { id: "eid155", tween: [ "style", "${_TextCopy}", "display", 'none', { fromValue: 'block'}], position: 13500, duration: 0 },
                { id: "eid5", tween: [ "style", "${_Text2}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid6", tween: [ "style", "${_Text2}", "display", 'block', { fromValue: 'none'}], position: 690, duration: 0 },
                { id: "eid32", tween: [ "style", "${_Text2}", "display", 'none', { fromValue: 'block'}], position: 3250, duration: 0 },
                { id: "eid143", tween: [ "style", "${_Text2}", "display", 'none', { fromValue: 'none'}], position: 13500, duration: 0 },
                { id: "eid24", tween: [ "style", "${_Header}", "left", '284px', { fromValue: '-284px'}], position: 1750, duration: 1500 },
                { id: "eid187", tween: [ "style", "${_Text8}", "font-size", '94%', { fromValue: '15px'}], position: 7642, duration: 0 },
                { id: "eid159", tween: [ "style", "${_MAC_Header}", "display", 'none', { fromValue: 'block'}], position: 13500, duration: 0 },
                { id: "eid186", tween: [ "style", "${_Text7}", "font-size", '94%', { fromValue: '15px'}], position: 5590, duration: 0 },
                { id: "eid40", tween: [ "style", "${_TextCopy2}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid41", tween: [ "style", "${_TextCopy2}", "display", 'block', { fromValue: 'none'}], position: 3750, duration: 0 },
                { id: "eid151", tween: [ "style", "${_TextCopy2}", "display", 'none', { fromValue: 'block'}], position: 13500, duration: 0 },
                { id: "eid78", tween: [ "style", "${_Text8}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid79", tween: [ "style", "${_Text8}", "display", 'block', { fromValue: 'none'}], position: 6750, duration: 0 },
                { id: "eid101", tween: [ "style", "${_Text8}", "display", 'none', { fromValue: 'block'}], position: 8860, duration: 0 },
                { id: "eid153", tween: [ "style", "${_Text8}", "display", 'none', { fromValue: 'none'}], position: 13500, duration: 0 },
                { id: "eid104", tween: [ "style", "${_Text9}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid105", tween: [ "style", "${_Text9}", "display", 'block', { fromValue: 'none'}], position: 9500, duration: 0 },
                { id: "eid131", tween: [ "style", "${_Text9}", "display", 'none', { fromValue: 'block'}], position: 11585, duration: 0 },
                { id: "eid165", tween: [ "style", "${_Text9}", "display", 'none', { fromValue: 'none'}], position: 13500, duration: 0 },
                { id: "eid19", tween: [ "style", "${_Text2}", "top", '128px', { fromValue: '65px'}], position: 1750, duration: 1500 },
                { id: "eid125", tween: [ "style", "${_LLC-Header}", "display", 'none', { fromValue: 'block'}], position: 11250, duration: 0 },
                { id: "eid145", tween: [ "style", "${_LLC-Header}", "display", 'none', { fromValue: 'none'}], position: 13500, duration: 0 },
                { id: "eid71", tween: [ "style", "${_IP-data}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid72", tween: [ "style", "${_IP-data}", "display", 'block', { fromValue: 'none'}], position: 5750, duration: 0 },
                { id: "eid98", tween: [ "style", "${_IP-data}", "display", 'none', { fromValue: 'block'}], position: 8500, duration: 0 },
                { id: "eid149", tween: [ "style", "${_IP-data}", "display", 'none', { fromValue: 'none'}], position: 13500, duration: 0 },
                { id: "eid97", tween: [ "style", "${_IP_Header}", "display", 'none', { fromValue: 'block'}], position: 8500, duration: 0 },
                { id: "eid156", tween: [ "style", "${_IP_Header}", "display", 'none', { fromValue: 'none'}], position: 13500, duration: 0 },
                { id: "eid174", tween: [ "style", "${_LLC-Data}", "top", '246px', { fromValue: '246px'}], position: 8500, duration: 0 },
                { id: "eid123", tween: [ "style", "${_LLC-Data}", "top", '308px', { fromValue: '245px'}], position: 9750, duration: 1500 },
                { id: "eid76", tween: [ "style", "${_TextCopy4}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid87", tween: [ "style", "${_TextCopy4}", "display", 'block', { fromValue: 'none'}], position: 6500, duration: 0 },
                { id: "eid162", tween: [ "style", "${_TextCopy4}", "display", 'none', { fromValue: 'block'}], position: 13500, duration: 0 },
                { id: "eid166", tween: [ "style", "${_FInal-Figure2}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid167", tween: [ "style", "${_FInal-Figure2}", "display", 'block', { fromValue: 'none'}], position: 13500, duration: 0 },
                { id: "eid188", tween: [ "style", "${_Text4}", "font-size", '94%', { fromValue: '15px'}], position: 1000, duration: 0 },
                { id: "eid102", tween: [ "style", "${_TextCopy5}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid103", tween: [ "style", "${_TextCopy5}", "display", 'block', { fromValue: 'none'}], position: 9250, duration: 0 },
                { id: "eid160", tween: [ "style", "${_TextCopy5}", "display", 'none', { fromValue: 'block'}], position: 13500, duration: 0 },
                { id: "eid42", tween: [ "style", "${_Text7}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid43", tween: [ "style", "${_Text7}", "display", 'block', { fromValue: 'none'}], position: 4000, duration: 0 },
                { id: "eid75", tween: [ "style", "${_Text7}", "display", 'none', { fromValue: 'block'}], position: 6000, duration: 0 },
                { id: "eid163", tween: [ "style", "${_Text7}", "display", 'none', { fromValue: 'none'}], position: 13500, duration: 0 },
                { id: "eid94", tween: [ "style", "${_IP-data}", "top", '245px', { fromValue: '182px'}], position: 7000, duration: 1500 },
                { id: "eid171", tween: [ "style", "${_MAC-Data}", "top", '306px', { fromValue: '306px'}], position: 11250, duration: 0 },
                { id: "eid120", tween: [ "style", "${_LLC-Header}", "top", '308px', { fromValue: '246px'}], position: 9750, duration: 1500 },
                { id: "eid117", tween: [ "style", "${_MAC_Trailer}", "left", '572px', { fromValue: '800px'}], position: 9750, duration: 1500 },
                { id: "eid33", tween: [ "style", "${_Text6}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid34", tween: [ "style", "${_Text6}", "display", 'block', { fromValue: 'none'}], position: 3250, duration: 0 },
                { id: "eid161", tween: [ "style", "${_Text6}", "display", 'none', { fromValue: 'block'}], position: 13500, duration: 0 },
                { id: "eid64", tween: [ "style", "${_IP_Header}", "left", '212px', { fromValue: '-212px'}], position: 4250, duration: 1500 },
                { id: "eid140", tween: [ "style", "${_Labels}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid141", tween: [ "style", "${_Labels}", "display", 'block', { fromValue: 'none'}], position: 13250, duration: 0 },
                { id: "eid146", tween: [ "style", "${_Labels}", "display", 'none', { fromValue: 'block'}], position: 13500, duration: 0 },
                { id: "eid28", tween: [ "style", "${_Text4}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid29", tween: [ "style", "${_Text4}", "display", 'block', { fromValue: 'none'}], position: 500, duration: 0 },
                { id: "eid27", tween: [ "style", "${_Text4}", "display", 'none', { fromValue: 'block'}], position: 1055, duration: 0 },
                { id: "eid164", tween: [ "style", "${_Text4}", "display", 'none', { fromValue: 'none'}], position: 13500, duration: 0 },
                { id: "eid73", tween: [ "style", "${_Header}", "display", 'none', { fromValue: 'block'}], position: 5750, duration: 0 },
                { id: "eid150", tween: [ "style", "${_Header}", "display", 'none', { fromValue: 'none'}], position: 13500, duration: 0 }            ]
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
})(jQuery, AdobeEdge, "EDGE-367033344");
