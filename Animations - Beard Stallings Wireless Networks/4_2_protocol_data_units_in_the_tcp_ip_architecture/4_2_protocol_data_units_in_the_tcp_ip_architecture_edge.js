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
                id: 'iptracknew2',
                display: 'none',
                type: 'image',
                rect: ['142px', '392px','461px','92px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"iptracknew.png",'0px','0px']
            },
            {
                id: 'tcptrack2',
                display: 'none',
                type: 'image',
                rect: ['219px', '284px','385px','92px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"tcptrack.png",'0px','0px']
            },
            {
                id: 'userdata-track',
                display: 'none',
                type: 'image',
                rect: ['294px', '174','306px','93px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"userdata-track.png",'0px','0px']
            },
            {
                id: 'user-data2',
                display: 'none',
                type: 'image',
                rect: ['294px', '137px','306px','63px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"user-data.png",'0px','0px']
            },
            {
                id: 'application-byte2',
                display: 'none',
                type: 'image',
                rect: ['612px', '143px','103px','49px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"application-byte.png",'0px','0px']
            },
            {
                id: 'Text',
                display: 'none',
                type: 'text',
                rect: ['337px', '90px','auto','auto','auto', 'auto'],
                text: "Data comes from application layer.",
                font: ['Times New Roman, Times, serif', [94, "%"], "rgba(0,0,0,1)", "700", "none", ""]
            },
            {
                id: 'tcpheader2',
                display: 'none',
                type: 'image',
                rect: ['226px', '253px','77px','47px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"tcpheader.png",'0px','0px']
            },
            {
                id: 'tcpsegment',
                display: 'none',
                type: 'image',
                rect: ['623px', '252px','80px','49px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"tcpsegment.png",'0px','0px']
            },
            {
                id: 'Text5',
                display: 'none',
                type: 'text',
                rect: ['232px', '84px','auto','auto','auto', 'auto'],
                text: "TCP encapsulates the user data into its segment and<br>adds a header for the TCP control process.",
                align: "left",
                font: ['Times New Roman, Times, serif', [94, "%"], "rgba(0,0,0,1)", "700", "none", "normal"]
            },
            {
                id: 'Text6',
                display: 'none',
                type: 'text',
                rect: ['202px', '100px','auto','auto','auto', 'auto'],
                text: "The Internet Protocol puts the TCP segment into its <br>data payload and adds IP information for routing.",
                align: "left",
                font: ['\'Times New Roman\', Times, serif', [94, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: 'Text7',
                display: 'none',
                type: 'text',
                rect: ['199', '129','auto','auto','auto', 'auto'],
                text: "The Network Access Layer adds information about<br>transmission across a subnetwork.",
                align: "left",
                font: ['\'Times New Roman\', Times, serif', [94, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: 'Text2',
                display: 'block',
                type: 'text',
                rect: ['187px', '586px','auto','auto','auto', 'auto'],
                text: "Click or Touch on Figure For Each Step of the Animation",
                align: "left",
                font: ['\'Times New Roman\', Times, serif', [94, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: 'Text3',
                type: 'text',
                rect: ['130px', '595px','auto','auto','auto', 'auto'],
                text: "Figure  4.2 Protocol Data Units (PDUs) in the TCP/IP Architecture",
                align: "left",
                font: ['\'Times New Roman\', Times, serif', [119, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: 'tcp-packet4',
                display: 'none',
                type: 'image',
                rect: ['215px', '248px','385px','59px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"tcp-packet.png",'0px','0px']
            },
            {
                id: 'ipdatagram2',
                display: 'none',
                type: 'image',
                rect: ['622px', '360px','80px','49px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"ipdatagram.png",'0px','0px']
            },
            {
                id: 'user-data4',
                display: 'none',
                type: 'image',
                rect: ['294px', '245px','306px','63px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"user-data.png",'0px','0px']
            },
            {
                id: 'tcp-packet3',
                display: 'none',
                type: 'image',
                rect: ['216px', '247px','385px','59px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"tcp-packet.png",'0px','0px']
            },
            {
                id: 'ip-packet3',
                display: 'none',
                type: 'image',
                rect: ['152px', '356px','451px','58px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"ip-packet.png",'0px','0px']
            },
            {
                id: 'ip-packet4',
                display: 'none',
                type: 'image',
                rect: ['151px', '355px','451px','58px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"ip-packet.png",'0px','0px']
            },
            {
                id: 'ipheader2',
                display: 'none',
                type: 'image',
                rect: ['154px', '365px','77px','43px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"ipheader.png",'0px','0px']
            },
            {
                id: 'network-packet2',
                display: 'none',
                type: 'image',
                rect: ['73px', '462px','525px','59px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"network-packet.png",'0px','0px']
            },
            {
                id: 'networkheader2',
                display: 'none',
                type: 'image',
                rect: ['78px', '467px','82px','47px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"networkheader.png",'0px','0px']
            },
            {
                id: 'network-level2',
                display: 'none',
                type: 'image',
                rect: ['611px', '468px','111px','49px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"network-level.png",'0px','0px']
            }],
            symbolInstances: [

            ]
        },
    states: {
        "Base State": {
            "${_ipdatagram2}": [
                ["style", "top", '360px'],
                ["style", "left", '830px'],
                ["style", "display", 'none']
            ],
            "${_Text7}": [
                ["style", "display", 'none']
            ],
            "${_tcptrack2}": [
                ["style", "height", '3px'],
                ["style", "display", 'none'],
                ["style", "left", '219px'],
                ["style", "top", '284px']
            ],
            "${_Text3}": [
                ["style", "top", '595px'],
                ["style", "width", '543px'],
                ["style", "left", '130px'],
                ["style", "font-size", '119%']
            ],
            "${_userdata-track}": [
                ["style", "display", 'none'],
                ["style", "left", '294px'],
                ["style", "height", '8px']
            ],
            "${_Text5}": [
                ["style", "top", '84px'],
                ["style", "font-weight", '700'],
                ["style", "display", 'none'],
                ["style", "font-family", 'Times New Roman, Times, serif'],
                ["style", "left", '232px'],
                ["style", "font-size", '94%']
            ],
            "${_tcpsegment}": [
                ["style", "top", '252px'],
                ["style", "left", '830px'],
                ["style", "display", 'none']
            ],
            "${_network-packet2}": [
                ["style", "top", '462px'],
                ["style", "left", '74px'],
                ["style", "display", 'none']
            ],
            "${_application-byte2}": [
                ["style", "top", '143px'],
                ["style", "left", '830px'],
                ["style", "display", 'none']
            ],
            "${_network-level2}": [
                ["style", "top", '468px'],
                ["style", "left", '830px'],
                ["style", "display", 'none']
            ],
            "${_tcp-packet3}": [
                ["style", "top", '247px'],
                ["style", "left", '216px'],
                ["style", "display", 'none']
            ],
            "${_ip-packet4}": [
                ["style", "top", '355px'],
                ["style", "left", '151px'],
                ["style", "display", 'none']
            ],
            "${_ip-packet3}": [
                ["style", "top", '356px'],
                ["style", "left", '152px'],
                ["style", "display", 'none']
            ],
            "${_tcpheader2}": [
                ["style", "top", '253px'],
                ["style", "left", '-90px'],
                ["style", "display", 'none']
            ],
            "${_tcp-packet4}": [
                ["style", "top", '248px'],
                ["style", "left", '215px'],
                ["style", "display", 'none']
            ],
            "${_networkheader2}": [
                ["style", "top", '467px'],
                ["style", "left", '-90px'],
                ["style", "display", 'none']
            ],
            "${_Text6}": [
                ["style", "top", '100px'],
                ["style", "left", '202px'],
                ["style", "display", 'none']
            ],
            "${_Text2}": [
                ["style", "top", '572px'],
                ["style", "height", '23px'],
                ["style", "left", '213px'],
                ["style", "display", 'block']
            ],
            "${_Text}": [
                ["style", "top", '90px'],
                ["style", "font-weight", '700'],
                ["style", "display", 'none'],
                ["style", "font-family", 'Times New Roman, Times, serif'],
                ["style", "left", '337px'],
                ["style", "font-size", '94%']
            ],
            "${_user-data2}": [
                ["style", "top", '-80px'],
                ["style", "left", '294px'],
                ["style", "display", 'none']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(255,255,255,1)'],
                ["style", "overflow", 'hidden'],
                ["style", "height", '630px'],
                ["style", "width", '800px']
            ],
            "${_user-data4}": [
                ["style", "top", '138px'],
                ["style", "left", '294px'],
                ["style", "display", 'none']
            ],
            "${_iptracknew2}": [
                ["style", "height", '0px'],
                ["style", "display", 'none'],
                ["style", "left", '142px'],
                ["style", "top", '392px']
            ],
            "${_ipheader2}": [
                ["style", "top", '365px'],
                ["style", "left", '-90px'],
                ["style", "display", 'none']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 16250,
            autoPlay: true,
            timeline: [
                { id: "eid171", tween: [ "style", "${_iptracknew2}", "height", '92px', { fromValue: '0px'}], position: 14795, duration: 800 },
                { id: "eid157", tween: [ "style", "${_userdata-track}", "display", 'block', { fromValue: 'none'}], position: 12700, duration: 0 },
                { id: "eid126", tween: [ "style", "${_tcp-packet4}", "display", 'block', { fromValue: 'none'}], position: 6000, duration: 0 },
                { id: "eid129", tween: [ "style", "${_tcp-packet4}", "display", 'none', { fromValue: 'block'}], position: 7500, duration: 0 },
                { id: "eid130", tween: [ "style", "${_ip-packet3}", "display", 'block', { fromValue: 'none'}], position: 7500, duration: 0 },
                { id: "eid140", tween: [ "style", "${_ip-packet3}", "display", 'none', { fromValue: 'block'}], position: 9193, duration: 0 },
                { id: "eid177", tween: [ "style", "${_ip-packet3}", "display", 'block', { fromValue: 'none'}], position: 14550, duration: 0 },
                { id: "eid113", tween: [ "style", "${_tcpheader2}", "left", '226px', { fromValue: '-90px'}], position: 2710, duration: 1000 },
                { id: "eid135", tween: [ "style", "${_tcp-packet4}", "top", '356px', { fromValue: '248px'}], position: 6000, duration: 1250 },
                { id: "eid117", tween: [ "style", "${_tcpsegment}", "left", '623px', { fromValue: '830px'}], position: 4250, duration: 750 },
                { id: "eid169", tween: [ "style", "${_iptracknew2}", "display", 'block', { fromValue: 'none'}], position: 14795, duration: 0 },
                { id: "eid166", tween: [ "style", "${_tcptrack2}", "display", 'block', { fromValue: 'none'}], position: 13750, duration: 0 },
                { id: "eid81", tween: [ "style", "${_Text5}", "display", 'block', { fromValue: 'none'}], position: 5250, duration: 0 },
                { id: "eid82", tween: [ "style", "${_Text5}", "display", 'none', { fromValue: 'block'}], position: 5602, duration: 0 },
                { id: "eid144", tween: [ "style", "${_ip-packet4}", "top", '463px', { fromValue: '355px'}], position: 9393, duration: 1000 },
                { id: "eid148", tween: [ "style", "${_networkheader2}", "left", '78px', { fromValue: '-90px'}], position: 9393, duration: 1000 },
                { id: "eid101", tween: [ "style", "${_user-data2}", "display", 'block', { fromValue: 'none'}], position: 250, duration: 0 },
                { id: "eid119", tween: [ "style", "${_user-data2}", "display", 'none', { fromValue: 'block'}], position: 2599, duration: 0 },
                { id: "eid156", tween: [ "style", "${_user-data2}", "display", 'block', { fromValue: 'none'}], position: 12537, duration: 0 },
                { id: "eid131", tween: [ "style", "${_ipheader2}", "display", 'block', { fromValue: 'none'}], position: 6000, duration: 0 },
                { id: "eid134", tween: [ "style", "${_ipheader2}", "display", 'none', { fromValue: 'block'}], position: 7500, duration: 0 },
                { id: "eid104", tween: [ "style", "${_application-byte2}", "display", 'block', { fromValue: 'none'}], position: 1305, duration: 0 },
                { id: "eid118", tween: [ "style", "${_application-byte2}", "display", 'none', { fromValue: 'block'}], position: 2599, duration: 0 },
                { id: "eid162", tween: [ "style", "${_application-byte2}", "display", 'block', { fromValue: 'none'}], position: 12537, duration: 0 },
                { id: "eid111", tween: [ "style", "${_tcpheader2}", "display", 'block', { fromValue: 'none'}], position: 2710, duration: 0 },
                { id: "eid122", tween: [ "style", "${_tcpheader2}", "display", 'none', { fromValue: 'block'}], position: 4121, duration: 0 },
                { id: "eid138", tween: [ "style", "${_ipdatagram2}", "left", '622px', { fromValue: '830px'}], position: 7750, duration: 693 },
                { id: "eid159", tween: [ "style", "${_userdata-track}", "height", '93px', { fromValue: '8px'}], position: 12700, duration: 800 },
                { id: "eid115", tween: [ "style", "${_tcpsegment}", "display", 'block', { fromValue: 'none'}], position: 4250, duration: 0 },
                { id: "eid120", tween: [ "style", "${_tcpsegment}", "display", 'none', { fromValue: 'block'}], position: 5804, duration: 0 },
                { id: "eid165", tween: [ "style", "${_tcpsegment}", "display", 'block', { fromValue: 'none'}], position: 13627, duration: 0 },
                { id: "eid85", tween: [ "style", "${_Text6}", "display", 'block', { fromValue: 'none'}], position: 8668, duration: 0 },
                { id: "eid86", tween: [ "style", "${_Text6}", "display", 'none', { fromValue: 'block'}], position: 9000, duration: 0 },
                { id: "eid146", tween: [ "style", "${_networkheader2}", "display", 'block', { fromValue: 'none'}], position: 9393, duration: 0 },
                { id: "eid149", tween: [ "style", "${_networkheader2}", "display", 'none', { fromValue: 'block'}], position: 10636, duration: 0 },
                { id: "eid103", tween: [ "style", "${_user-data2}", "top", '137px', { fromValue: '-80px'}], position: 250, duration: 800 },
                { id: "eid141", tween: [ "style", "${_ip-packet4}", "display", 'block', { fromValue: 'none'}], position: 9393, duration: 0 },
                { id: "eid150", tween: [ "style", "${_ip-packet4}", "display", 'none', { fromValue: 'block'}], position: 10636, duration: 0 },
                { id: "eid151", tween: [ "style", "${_network-level2}", "display", 'block', { fromValue: 'none'}], position: 10940, duration: 0 },
                { id: "eid154", tween: [ "style", "${_network-level2}", "display", 'none', { fromValue: 'block'}], position: 12337, duration: 0 },
                { id: "eid175", tween: [ "style", "${_network-level2}", "display", 'block', { fromValue: 'none'}], position: 15750, duration: 0 },
                { id: "eid136", tween: [ "style", "${_ipdatagram2}", "display", 'block', { fromValue: 'none'}], position: 7750, duration: 0 },
                { id: "eid139", tween: [ "style", "${_ipdatagram2}", "display", 'none', { fromValue: 'block'}], position: 9193, duration: 0 },
                { id: "eid173", tween: [ "style", "${_ipdatagram2}", "display", 'block', { fromValue: 'none'}], position: 14694, duration: 0 },
                { id: "eid145", tween: [ "style", "${_network-packet2}", "display", 'block', { fromValue: 'none'}], position: 10636, duration: 0 },
                { id: "eid155", tween: [ "style", "${_network-packet2}", "display", 'none', { fromValue: 'block'}], position: 12337, duration: 0 },
                { id: "eid174", tween: [ "style", "${_network-packet2}", "display", 'block', { fromValue: 'none'}], position: 15750, duration: 0 },
                { id: "eid89", tween: [ "style", "${_Text7}", "display", 'block', { fromValue: 'none'}], position: 11878, duration: 0 },
                { id: "eid90", tween: [ "style", "${_Text7}", "display", 'none', { fromValue: 'block'}], position: 12250, duration: 0 },
                { id: "eid114", tween: [ "style", "${_tcp-packet3}", "display", 'block', { fromValue: 'none'}], position: 4000, duration: 0 },
                { id: "eid121", tween: [ "style", "${_tcp-packet3}", "display", 'none', { fromValue: 'block'}], position: 5804, duration: 0 },
                { id: "eid164", tween: [ "style", "${_tcp-packet3}", "display", 'block', { fromValue: 'none'}], position: 13627, duration: 0 },
                { id: "eid52", tween: [ "style", "${_Text2}", "display", 'none', { fromValue: 'block'}], position: 15940, duration: 0 },
                { id: "eid133", tween: [ "style", "${_ipheader2}", "left", '154px', { fromValue: '-90px'}], position: 6000, duration: 1250 },
                { id: "eid168", tween: [ "style", "${_tcptrack2}", "height", '92px', { fromValue: '3px'}], position: 13750, duration: 800 },
                { id: "eid107", tween: [ "style", "${_user-data4}", "display", 'block', { fromValue: 'none'}], position: 2710, duration: 0 },
                { id: "eid123", tween: [ "style", "${_user-data4}", "display", 'none', { fromValue: 'block'}], position: 4121, duration: 0 },
                { id: "eid153", tween: [ "style", "${_network-level2}", "left", '611px', { fromValue: '830px'}], position: 10940, duration: 695 },
                { id: "eid106", tween: [ "style", "${_application-byte2}", "left", '612px', { fromValue: '830px'}], position: 1305, duration: 600 },
                { id: "eid110", tween: [ "style", "${_user-data4}", "top", '245px', { fromValue: '138px'}], position: 2710, duration: 1000 },
                { id: "eid7", tween: [ "style", "${_Text}", "display", 'block', { fromValue: 'none'}], position: 2160, duration: 0 },
                { id: "eid8", tween: [ "style", "${_Text}", "display", 'none', { fromValue: 'block'}], position: 2450, duration: 0 }            ]
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
})(jQuery, AdobeEdge, "EDGE-50130709");
