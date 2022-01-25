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
                id: 'bs2',
                display: 'none',
                type: 'image',
                rect: ['646px', '338px','1512px','420px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"bs2.png",'0px','0px']
            },
            {
                id: 'bs1',
                display: 'none',
                type: 'image',
                rect: ['302px', '618px','1512px','420px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"bs1.png",'0px','0px']
            },
            {
                id: 'Text',
                type: 'text',
                rect: ['270px', '2956px','auto','auto','auto', 'auto'],
                text: "Figure 14.2 Overview of the EPC/LTE Architecture ",
                font: ['Times New Roman, Times, serif', [475, "%"], "rgba(0,0,0,1)", "700", "none", ""]
            },
            {
                id: 'Text2',
                display: 'block',
                type: 'text',
                rect: ['387px', '2878px','auto','auto','auto', 'auto'],
                text: "Click or Touch on Figure for Each Step of the Animation",
                align: "left",
                font: ['\'Times New Roman\', Times, serif', [375, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: 'enb1',
                display: 'none',
                type: 'image',
                rect: ['761px', '364px','448px','516px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"enb1.png",'0px','0px']
            },
            {
                id: 'enbwaves',
                display: 'none',
                type: 'image',
                rect: ['1031px', '238px','300px','280px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"enbwaves.png",'0px','0px']
            },
            {
                id: 'ue1',
                display: 'none',
                type: 'image',
                rect: ['410px', '615px','148px','316px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"ue1.png",'0px','0px']
            },
            {
                id: 'ue1link',
                display: 'none',
                type: 'image',
                rect: ['550px', '422px','17.1%','10.8%','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"ue1link.png",'0%','0%','392px','344px']
            },
            {
                id: 'Text4',
                display: 'none',
                type: 'text',
                rect: ['164px', '1000px','582px','200px','auto', 'auto'],
                text: "Mobile devices connect to an eNodeB.",
                align: "left",
                font: ['\'Times New Roman\', Times, serif', [375, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: 'Text3',
                display: 'none',
                type: 'text',
                rect: ['262px', '214px','536px','100px','auto', 'auto'],
                text: "The heart of LTE",
                align: "left",
                font: ['\'Times New Roman\', Times, serif', [375, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: 'enb2ue2',
                display: 'none',
                type: 'image',
                rect: ['1230px', '46px','700px','624px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"enb2ue2.png",'0px','0px']
            },
            {
                id: 'x2',
                display: 'none',
                type: 'image',
                rect: ['1100px', '522px','7.3%','5.6%','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"x2.png",'0%','0%','168px','180px']
            },
            {
                id: 'Text5',
                display: 'none',
                type: 'text',
                rect: ['310px', '108px','952px','170px','auto', 'auto'],
                text: "Multiple eNodeBs can interconnect through the X2 interface.",
                align: "left",
                font: ['\'Times New Roman\', Times, serif', [375, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: 'lteutran-line',
                display: 'none',
                type: 'image',
                rect: ['18px', '973px','96.7%','5%','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"lteutran-line.png",'0%','0%','2224px','160px']
            },
            {
                id: 'Text6',
                display: 'none',
                type: 'text',
                rect: ['242px', '1182px','1856px','92px','auto', 'auto'],
                text: "The eNodeBs and UEs form the LTE E-UTRAN radio access network.",
                align: "left",
                font: ['\'Times New Roman\', Times, serif', [375, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: 's1mme',
                display: 'none',
                type: 'image',
                rect: ['621px', '552px','34.8%','24.1%','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"s1mme.png",'0%','0%','800px','772px']
            },
            {
                id: 'Text8',
                display: 'none',
                type: 'text',
                rect: ['1014px', '1170px','820px','248px','auto', 'auto'],
                text: "MMEs interact with eNodeBs through the S1-MME interface.",
                align: "left",
                font: ['\'Times New Roman\', Times, serif', [375, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: 's1u',
                display: 'none',
                type: 'image',
                rect: ['1093px', '552px','17.2%','27.5%','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"s1u.png",'0%','0%','396px','880px']
            },
            {
                id: 'Text9',
                display: 'none',
                type: 'text',
                rect: ['1410px', '1408px','664px','228px','auto', 'auto'],
                text: "The SGW supports data traffic between eNodeBs.",
                align: "left",
                font: ['\'Times New Roman\', Times, serif', [375, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: 'sgw2pgw',
                display: 'none',
                type: 'image',
                rect: ['1026px', '1607px','8.5%','5.4%','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"sgw2pgw.png",'0%','0%','196px','172px']
            },
            {
                id: 'pgw',
                display: 'none',
                type: 'image',
                rect: ['932px', '1738px','336px','300px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"pgw.png",'0px','0px']
            },
            {
                id: 'pgw2internet',
                display: 'none',
                type: 'image',
                rect: ['1033px', '1974px','16.5%','6.4%','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"pgw2internet.png",'0%','0%','380px','204px']
            },
            {
                id: 'internet',
                display: 'none',
                type: 'image',
                rect: ['1278px', '2002px','712px','516px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"internet.png",'0px','0px']
            },
            {
                id: 'Text10',
                display: 'none',
                type: 'text',
                rect: ['1338px', '1779px','664px','204px','auto', 'auto'],
                text: "The PGW connects with external networks.",
                align: "left",
                font: ['\'Times New Roman\', Times, serif', [375, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: 'mme2hss',
                display: 'none',
                type: 'image',
                rect: ['775px', '1511px','3.5%','6.6%','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"mme2hss.png",'0%','0%','80px','212px']
            },
            {
                id: 'hss',
                display: 'none',
                type: 'image',
                rect: ['585px', '1598px','328px','352px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"hss.png",'0px','0px']
            },
            {
                id: 'Text11',
                display: 'none',
                type: 'text',
                rect: ['98px', '1674px','523px','172px','auto', 'auto'],
                text: "The HSS manages user information.",
                align: "left",
                font: ['\'Times New Roman\', Times, serif', [375, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: 'epccircle',
                display: 'none',
                type: 'image',
                rect: ['506px', '1113px','996px','996px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"epccircle.png",'0px','0px']
            },
            {
                id: 'epc',
                display: 'none',
                type: 'image',
                rect: ['1850px', '1127px','292px','244px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"epc.png",'0px','0px']
            },
            {
                id: 'Text12',
                display: 'none',
                type: 'text',
                rect: ['1510px', '1552px','564px','92px','auto', 'auto'],
                text: "These form the EPC.",
                align: "left",
                font: ['\'Times New Roman\', Times, serif', [375, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: 'txtt',
                display: 'none',
                type: 'image',
                rect: ['210px', '2109px','1460px','688px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"txtt.png",'0px','0px']
            },
            {
                id: 'mme2sgw',
                display: 'none',
                type: 'image',
                rect: ['850px', '1400px','14.8%','3.6%','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"mme2sgw.png",'0%','0%','340px','116px']
            },
            {
                id: 'sgw',
                display: 'none',
                type: 'image',
                rect: ['1142px', '1362px','240px','356px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"sgw.png",'0px','0px']
            },
            {
                id: 'MME',
                display: 'none',
                type: 'image',
                rect: ['624px', '1236px','348px','364px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"MME.png",'0px','0px']
            },
            {
                id: 'Text7',
                display: 'none',
                type: 'text',
                rect: ['38px', '1164px','820px','302px','auto', 'auto'],
                text: "The MME manages connection of UEs to the system.",
                align: "left",
                font: ['\'Times New Roman\', Times, serif', [375, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
            }],
            symbolInstances: [

            ]
        },
    states: {
        "Base State": {
            "${_hss}": [
                ["style", "top", '1598px'],
                ["style", "left", '585px'],
                ["style", "display", 'none']
            ],
            "${_enb1}": [
                ["style", "top", '364px'],
                ["style", "left", '761px'],
                ["style", "display", 'none']
            ],
            "${_sgw}": [
                ["style", "top", '1362px'],
                ["style", "left", '1142px'],
                ["style", "display", 'none']
            ],
            "${_ue1}": [
                ["style", "top", '615px'],
                ["style", "left", '410px'],
                ["style", "display", 'none']
            ],
            "${_lteutran-line}": [
                ["style", "top", '973px'],
                ["style", "display", 'none'],
                ["style", "left", '18px'],
                ["style", "width", '0%']
            ],
            "${_Text2}": [
                ["style", "top", '2878px'],
                ["style", "display", 'block'],
                ["style", "width", '1486px'],
                ["style", "left", '387px'],
                ["style", "font-size", '375%']
            ],
            "${_txtt}": [
                ["style", "top", '2109px'],
                ["style", "left", '210px'],
                ["style", "display", 'none']
            ],
            "${_Text4}": [
                ["style", "top", '1005px'],
                ["style", "height", '112px'],
                ["style", "display", 'none'],
                ["style", "left", '112px'],
                ["style", "width", '1072px']
            ],
            "${_epc}": [
                ["style", "top", '1127px'],
                ["style", "left", '1850px'],
                ["style", "display", 'none']
            ],
            "${_bs2}": [
                ["style", "top", '338px'],
                ["style", "left", '646px'],
                ["style", "display", 'none']
            ],
            "${_enb2ue2}": [
                ["style", "top", '49px'],
                ["style", "left", '1231px'],
                ["style", "display", 'none']
            ],
            "${_sgw2pgw}": [
                ["style", "display", 'none'],
                ["style", "top", '1607px'],
                ["style", "left", '1026px'],
                ["style", "height", '0%']
            ],
            "${_Text9}": [
                ["style", "top", '1408px'],
                ["style", "display", 'none'],
                ["style", "left", '1410px'],
                ["style", "width", '664px']
            ],
            "${_ue1link}": [
                ["style", "display", 'none'],
                ["style", "top", '422px'],
                ["style", "left", '550px'],
                ["style", "height", '0%']
            ],
            "${_Text7}": [
                ["style", "top", '1164px'],
                ["style", "display", 'none'],
                ["style", "left", '38px'],
                ["style", "width", '820px']
            ],
            "${_Text11}": [
                ["style", "top", '1674px'],
                ["style", "left", '98px'],
                ["style", "display", 'none']
            ],
            "${_Text3}": [
                ["style", "top", '214px'],
                ["style", "height", '100px'],
                ["style", "display", 'none'],
                ["style", "left", '262px'],
                ["style", "font-size", '375%']
            ],
            "${_Text5}": [
                ["style", "top", '108px'],
                ["style", "height", '170px'],
                ["style", "display", 'none'],
                ["style", "left", '310px'],
                ["style", "width", '952px']
            ],
            "${_MME}": [
                ["style", "top", '1236px'],
                ["style", "left", '624px'],
                ["style", "display", 'none']
            ],
            "${_s1mme}": [
                ["style", "display", 'none'],
                ["style", "top", '552px'],
                ["style", "left", '621px'],
                ["style", "height", '0%']
            ],
            "${_internet}": [
                ["style", "top", '2002px'],
                ["style", "left", '1278px'],
                ["style", "display", 'none']
            ],
            "${_enbwaves}": [
                ["style", "top", '378px'],
                ["style", "display", 'none'],
                ["style", "height", '56px'],
                ["style", "left", '1031px'],
                ["style", "width", '52px']
            ],
            "${_bs1}": [
                ["style", "top", '618px'],
                ["style", "left", '302px'],
                ["style", "display", 'none']
            ],
            "${_pgw}": [
                ["style", "top", '1738px'],
                ["style", "left", '932px'],
                ["style", "display", 'none']
            ],
            "${_Text6}": [
                ["style", "height", '92px'],
                ["style", "display", 'none'],
                ["style", "left", '242px'],
                ["style", "width", '1848px']
            ],
            "${_mme2sgw}": [
                ["style", "top", '1400px'],
                ["style", "display", 'none'],
                ["style", "left", '850px'],
                ["style", "width", '0%']
            ],
            "${_pgw2internet}": [
                ["style", "top", '1974px'],
                ["style", "display", 'none'],
                ["style", "left", '1033px'],
                ["style", "width", '0%']
            ],
            "${_Text8}": [
                ["style", "display", 'none']
            ],
            "${_epccircle}": [
                ["style", "top", '1574px'],
                ["style", "height", '48px'],
                ["style", "display", 'none'],
                ["style", "left", '966px'],
                ["style", "width", '48px']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(255,255,255,1)'],
                ["style", "width", '2300px'],
                ["style", "height", '3100px'],
                ["style", "overflow", 'hidden']
            ],
            "${_Text}": [
                ["style", "top", '2956px'],
                ["style", "font-weight", '700'],
                ["style", "font-family", 'Times New Roman, Times, serif'],
                ["style", "left", '270px'],
                ["style", "font-size", '475%']
            ],
            "${_mme2hss}": [
                ["style", "display", 'none'],
                ["style", "top", '1511px'],
                ["style", "left", '775px'],
                ["style", "height", '0%']
            ],
            "${_s1u}": [
                ["style", "display", 'none'],
                ["style", "top", '552px'],
                ["style", "left", '1093px'],
                ["style", "height", '0%']
            ],
            "${_Text12}": [
                ["style", "height", '92px'],
                ["style", "top", '1552px'],
                ["style", "left", '1510px'],
                ["style", "display", 'none']
            ],
            "${_Text10}": [
                ["style", "top", '1779px'],
                ["style", "display", 'none'],
                ["style", "left", '1338px'],
                ["style", "width", '664px']
            ],
            "${_x2}": [
                ["style", "display", 'none'],
                ["style", "top", '522px'],
                ["style", "left", '1100px'],
                ["style", "height", '0%']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 21250,
            autoPlay: true,
            timeline: [
                { id: "eid81", tween: [ "style", "${_Text11}", "display", 'block', { fromValue: 'none'}], position: 17955, duration: 0 },
                { id: "eid82", tween: [ "style", "${_Text11}", "display", 'none', { fromValue: 'block'}], position: 18250, duration: 0 },
                { id: "eid103", tween: [ "style", "${_epccircle}", "top", '1113px', { fromValue: '1574px'}], position: 18500, duration: 1500 },
                { id: "eid35", tween: [ "style", "${_enb2ue2}", "display", 'block', { fromValue: 'none'}], position: 4500, duration: 0 },
                { id: "eid2", tween: [ "style", "${_enb1}", "display", 'block', { fromValue: 'none'}], position: 500, duration: 0 },
                { id: "eid74", tween: [ "style", "${_internet}", "display", 'block', { fromValue: 'none'}], position: 16000, duration: 0 },
                { id: "eid22", tween: [ "style", "${_enbwaves}", "height", '280px', { fromValue: '56px'}], position: 500, duration: 1000 },
                { id: "eid61", tween: [ "style", "${_sgw}", "display", 'block', { fromValue: 'none'}], position: 11750, duration: 0 },
                { id: "eid50", tween: [ "style", "${_MME}", "display", 'block', { fromValue: 'none'}], position: 8250, duration: 0 },
                { id: "eid107", tween: [ "style", "${_Text12}", "display", 'block', { fromValue: 'none'}], position: 20500, duration: 0 },
                { id: "eid108", tween: [ "style", "${_Text12}", "display", 'none', { fromValue: 'block'}], position: 20750, duration: 0 },
                { id: "eid23", tween: [ "style", "${_enbwaves}", "left", '914px', { fromValue: '1031px'}], position: 500, duration: 1000 },
                { id: "eid53", tween: [ "style", "${_s1mme}", "display", 'block', { fromValue: 'none'}], position: 9000, duration: 0 },
                { id: "eid32", tween: [ "style", "${_Text4}", "display", 'block', { fromValue: 'none'}], position: 3750, duration: 0 },
                { id: "eid33", tween: [ "style", "${_Text4}", "display", 'none', { fromValue: 'block'}], position: 4000, duration: 0 },
                { id: "eid37", tween: [ "style", "${_enb2ue2}", "top", '49px', { fromValue: '49px'}], position: 4500, duration: 0 },
                { id: "eid41", tween: [ "style", "${_Text5}", "display", 'block', { fromValue: 'none'}], position: 6000, duration: 0 },
                { id: "eid42", tween: [ "style", "${_Text5}", "display", 'none', { fromValue: 'block'}], position: 6250, duration: 0 },
                { id: "eid112", tween: [ "style", "${_Text4}", "height", '112px', { fromValue: '112px'}], position: 3877, duration: 0 },
                { id: "eid111", tween: [ "style", "${_Text4}", "width", '1072px', { fromValue: '1072px'}], position: 3877, duration: 0 },
                { id: "eid83", tween: [ "style", "${_epccircle}", "display", 'block', { fromValue: 'none'}], position: 18500, duration: 0 },
                { id: "eid29", tween: [ "style", "${_ue1link}", "display", 'block', { fromValue: 'none'}], position: 2500, duration: 0 },
                { id: "eid67", tween: [ "style", "${_sgw2pgw}", "display", 'block', { fromValue: 'none'}], position: 13750, duration: 0 },
                { id: "eid73", tween: [ "style", "${_pgw2internet}", "width", '16.53%', { fromValue: '0%'}], position: 15000, duration: 1000 },
                { id: "eid114", tween: [ "style", "${_Text4}", "left", '112px', { fromValue: '112px'}], position: 3877, duration: 0 },
                { id: "eid104", tween: [ "style", "${_epccircle}", "width", '996px', { fromValue: '48px'}], position: 18500, duration: 1500 },
                { id: "eid21", tween: [ "style", "${_enbwaves}", "top", '236px', { fromValue: '378px'}], position: 500, duration: 1000 },
                { id: "eid36", tween: [ "style", "${_enb2ue2}", "left", '1231px', { fromValue: '1231px'}], position: 4500, duration: 0 },
                { id: "eid106", tween: [ "style", "${_epc}", "display", 'block', { fromValue: 'none'}], position: 20250, duration: 0 },
                { id: "eid109", tween: [ "style", "${_txtt}", "display", 'block', { fromValue: 'none'}], position: 170, duration: 0 },
                { id: "eid102", tween: [ "style", "${_epccircle}", "left", '506px', { fromValue: '966px'}], position: 18500, duration: 1500 },
                { id: "eid75", tween: [ "style", "${_Text10}", "display", 'block', { fromValue: 'none'}], position: 16250, duration: 0 },
                { id: "eid76", tween: [ "style", "${_Text10}", "display", 'none', { fromValue: 'block'}], position: 16500, duration: 0 },
                { id: "eid1", tween: [ "style", "${_bs1}", "display", 'block', { fromValue: 'none'}], position: 250, duration: 0 },
                { id: "eid110", tween: [ "style", "${_Text2}", "display", 'none', { fromValue: 'block'}], position: 21250, duration: 0 },
                { id: "eid24", tween: [ "style", "${_enbwaves}", "width", '300px', { fromValue: '52px'}], position: 500, duration: 1000 },
                { id: "eid45", tween: [ "style", "${_lteutran-line}", "width", '96.7%', { fromValue: '0%'}], position: 6500, duration: 1000 },
                { id: "eid49", tween: [ "style", "${_Text6}", "width", '1848px', { fromValue: '1848px'}], position: 7876, duration: 0 },
                { id: "eid79", tween: [ "style", "${_mme2hss}", "height", '6.63%', { fromValue: '0%'}], position: 16750, duration: 1000 },
                { id: "eid77", tween: [ "style", "${_mme2hss}", "display", 'block', { fromValue: 'none'}], position: 16750, duration: 0 },
                { id: "eid27", tween: [ "style", "${_enbwaves}", "display", 'block', { fromValue: 'none'}], position: 500, duration: 0 },
                { id: "eid46", tween: [ "style", "${_Text6}", "display", 'block', { fromValue: 'none'}], position: 7750, duration: 0 },
                { id: "eid47", tween: [ "style", "${_Text6}", "display", 'none', { fromValue: 'block'}], position: 8000, duration: 0 },
                { id: "eid56", tween: [ "style", "${_Text8}", "display", 'block', { fromValue: 'none'}], position: 10250, duration: 0 },
                { id: "eid57", tween: [ "style", "${_Text8}", "display", 'none', { fromValue: 'block'}], position: 10500, duration: 0 },
                { id: "eid60", tween: [ "style", "${_mme2sgw}", "width", '14.79%', { fromValue: '0%'}], position: 10750, duration: 1000 },
                { id: "eid70", tween: [ "style", "${_pgw}", "display", 'block', { fromValue: 'none'}], position: 14750, duration: 0 },
                { id: "eid28", tween: [ "style", "${_ue1}", "display", 'block', { fromValue: 'none'}], position: 2250, duration: 0 },
                { id: "eid71", tween: [ "style", "${_pgw2internet}", "display", 'block', { fromValue: 'none'}], position: 15000, duration: 0 },
                { id: "eid40", tween: [ "style", "${_x2}", "height", '5.63%', { fromValue: '0%'}], position: 4750, duration: 1000 },
                { id: "eid65", tween: [ "style", "${_Text9}", "display", 'block', { fromValue: 'none'}], position: 13250, duration: 0 },
                { id: "eid66", tween: [ "style", "${_Text9}", "display", 'none', { fromValue: 'block'}], position: 13500, duration: 0 },
                { id: "eid34", tween: [ "style", "${_bs2}", "display", 'block', { fromValue: 'none'}], position: 4250, duration: 0 },
                { id: "eid25", tween: [ "style", "${_Text3}", "display", 'block', { fromValue: 'none'}], position: 1750, duration: 0 },
                { id: "eid26", tween: [ "style", "${_Text3}", "display", 'none', { fromValue: 'block'}], position: 2000, duration: 0 },
                { id: "eid31", tween: [ "style", "${_ue1link}", "height", '10.75%', { fromValue: '0%'}], position: 2500, duration: 1000 },
                { id: "eid105", tween: [ "style", "${_epccircle}", "height", '996px', { fromValue: '48px'}], position: 18500, duration: 1500 },
                { id: "eid51", tween: [ "style", "${_Text7}", "display", 'block', { fromValue: 'none'}], position: 8500, duration: 0 },
                { id: "eid52", tween: [ "style", "${_Text7}", "display", 'none', { fromValue: 'block'}], position: 8750, duration: 0 },
                { id: "eid64", tween: [ "style", "${_s1u}", "height", '27.5%', { fromValue: '0%'}], position: 12000, duration: 1000 },
                { id: "eid69", tween: [ "style", "${_sgw2pgw}", "height", '5.38%', { fromValue: '0%'}], position: 13750, duration: 1000 },
                { id: "eid62", tween: [ "style", "${_s1u}", "display", 'block', { fromValue: 'none'}], position: 12000, duration: 0 },
                { id: "eid115", tween: [ "style", "${_Text4}", "top", '1005px', { fromValue: '1005px'}], position: 3877, duration: 0 },
                { id: "eid58", tween: [ "style", "${_mme2sgw}", "display", 'block', { fromValue: 'none'}], position: 10750, duration: 0 },
                { id: "eid43", tween: [ "style", "${_lteutran-line}", "display", 'block', { fromValue: 'none'}], position: 6500, duration: 0 },
                { id: "eid80", tween: [ "style", "${_hss}", "display", 'block', { fromValue: 'none'}], position: 17750, duration: 0 },
                { id: "eid55", tween: [ "style", "${_s1mme}", "height", '24.13%', { fromValue: '0%'}], position: 9000, duration: 1000 },
                { id: "eid38", tween: [ "style", "${_x2}", "display", 'block', { fromValue: 'none'}], position: 4750, duration: 0 }            ]
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
})(jQuery, AdobeEdge, "EDGE-25703102");
