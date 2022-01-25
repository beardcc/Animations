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
                id: '_11',
                display: 'none',
                type: 'image',
                rect: ['544px', '29px','42%','87.2%','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"11.png",'0%','0%','840px','2616px']
            },
            {
                id: '_1',
                display: 'none',
                type: 'image',
                rect: ['571px', '131px','39.8%','19.7%','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"1.png",'0%','0%','796px','592px']
            },
            {
                id: 'Text4',
                display: 'none',
                type: 'text',
                rect: ['1419px', '352px','551px','192px','auto', 'auto'],
                text: "Send multiple PDUs before needing to receive an ACK.",
                align: "left",
                font: ['\'Times New Roman\', Times, serif', [375, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: '_2',
                display: 'none',
                type: 'image',
                rect: ['576px', '280px','39.8%','19.7%','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"2.png",'0%','0%','796px','592px']
            },
            {
                id: 'Text5',
                display: 'none',
                type: 'text',
                rect: ['10px', '602px','591px','208px','auto', 'auto'],
                text: "B indicates it is Ready to Receive (RR) PDU 2.",
                align: "left",
                font: ['\'Times New Roman\', Times, serif', [375, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: '_3',
                display: 'none',
                type: 'image',
                rect: ['571px', '503px','39.8%','19.7%','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"3.png",'0%','0%','796px','592px']
            },
            {
                id: '_4',
                display: 'none',
                type: 'image',
                rect: ['595px', '706px','43.2%','10.4%','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"4.png",'0%','0%','864px','312px']
            },
            {
                id: '_4a',
                display: 'none',
                type: 'image',
                rect: ['601px', '1135px','39.8%','9.6%','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"4a.png",'0%','0%','796px','288px']
            },
            {
                id: 'Text7',
                display: 'none',
                type: 'text',
                rect: ['1367px', '1404px','550px','330px','auto', 'auto'],
                text: "B never receives PDU 5. It sends REJ 5 to tell A to retransmit PDU 5 and all others after.",
                align: "left",
                font: ['\'Times New Roman\', Times, serif', [375, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: '_5',
                display: 'none',
                type: 'image',
                rect: ['576px', '739px','49.4%','19.7%','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"5.png",'0%','0%','988px','592px']
            },
            {
                id: 'Text6',
                display: 'none',
                type: 'text',
                rect: ['1384px', '1108px','368px','147px','auto', 'auto'],
                text: "Packet has error.",
                align: "left",
                font: ['\'Times New Roman\', Times, serif', [375, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: '_6',
                display: 'none',
                type: 'image',
                rect: ['27px', '1275px','69.6%','19.7%','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"6.png",'0%','0%','1392px','592px']
            },
            {
                id: 'Text8',
                display: 'none',
                type: 'text',
                rect: ['82px', '1592px','396px','104px','auto', 'auto'],
                text: "A retransmits",
                align: "left",
                font: ['\'Times New Roman\', Times, serif', [375, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: 'RR6',
                display: 'none',
                type: 'image',
                rect: ['525px', '1363px','44%','12.1%','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"RR6.png",'0%','0%','880px','364px']
            },
            {
                id: '_8',
                display: 'none',
                type: 'image',
                rect: ['596px', '1643px','39.8%','19.6%','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"8.png",'0%','0%','796px','588px']
            },
            {
                id: 'drx',
                display: 'none',
                type: 'image',
                rect: ['1356px', '1145px','468px','288px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"drx.png",'0px','0px']
            },
            {
                id: 'pdu2',
                display: 'none',
                type: 'image',
                rect: ['521px', '2264px','44%','11.6%','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"pdu2.png",'0%','0%','880px','348px']
            },
            {
                id: 'Text12',
                display: 'none',
                type: 'text',
                rect: ['1399px', '2488px','544px','132px','auto', 'auto'],
                text: "A sends PDU 2.",
                align: "left",
                font: ['\'Times New Roman\', Times, serif', [375, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: 'Text',
                display: 'block',
                type: 'text',
                rect: ['330px', '2692px','auto','auto','auto', 'auto'],
                text: "Click or Touch on Figure for Each Step of the Animation",
                font: ['Times New Roman, Times, serif', [375, "%"], "rgba(0,0,0,1)", "700", "none", ""]
            },
            {
                id: 'rr',
                display: 'none',
                type: 'image',
                rect: ['531px', '2008px','44%','11.6%','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"rr.png",'0%','0%','880px','348px']
            },
            {
                id: 'Text10',
                display: 'none',
                type: 'text',
                rect: ['1392px', '2208px','586px','228px','auto', 'auto'],
                text: "A asks B to send its latest RR.",
                align: "left",
                font: ['\'Times New Roman\', Times, serif', [375, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: 'rr0',
                display: 'none',
                type: 'image',
                rect: ['803px', '1746px','30.8%','7.6%','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"rr0.png",'0%','0%','616px','228px']
            },
            {
                id: 'Text9',
                display: 'none',
                type: 'text',
                rect: ['27px', '1937px','489px','288px','auto', 'auto'],
                text: "RR0 is sent but not received in timeout waiting time.",
                align: "left",
                font: ['\'Times New Roman\', Times, serif', [375, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: 'rr2',
                display: 'none',
                type: 'image',
                rect: ['524px', '2116px','44%','11.6%','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"rr2.png",'0%','0%','880px','348px']
            },
            {
                id: 'Text11',
                display: 'none',
                type: 'text',
                rect: ['14px', '2316px','606px','132px','auto', 'auto'],
                text: "B says it is ready to receive PDU 2, so now A knows it can resume.",
                align: "left",
                font: ['\'Times New Roman\', Times, serif', [375, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: 'to',
                display: 'none',
                type: 'image',
                rect: ['407px', '1592px','15.2%','19.6%','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"to.png",'0%','0%','304px','588px']
            },
            {
                id: 'pdu67',
                display: 'none',
                type: 'image',
                rect: ['519px', '1027px','44%','12.1%','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"pdu6%2C7.png",'0%','0%','880px','364px']
            },
            {
                id: 'Text2',
                type: 'text',
                rect: ['543px', '2774px','968px','76px','auto', 'auto'],
                text: "Figure 5.22 Go-back-N ARQ",
                align: "left",
                font: ['\'Times New Roman\', Times, serif', [475, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
            }],
            symbolInstances: [

            ]
        },
    states: {
        "Base State": {
            "${_Text7}": [
                ["style", "display", 'none'],
                ["style", "left", '1367px'],
                ["style", "width", '600px']
            ],
            "${_Text11}": [
                ["style", "display", 'none'],
                ["style", "left", '14px'],
                ["style", "width", '606px']
            ],
            "${_pdu2}": [
                ["style", "display", 'none'],
                ["style", "top", '2264px'],
                ["style", "left", '521px'],
                ["style", "width", '0%']
            ],
            "${_RR6}": [
                ["style", "height", '0%'],
                ["style", "display", 'none'],
                ["style", "left", '525px'],
                ["style", "top", '1363px']
            ],
            "${__5}": [
                ["style", "display", 'none'],
                ["style", "top", '739px'],
                ["style", "left", '576px'],
                ["style", "width", '0%']
            ],
            "${__4a}": [
                ["style", "height", '0%'],
                ["style", "display", 'none'],
                ["style", "left", '601px'],
                ["style", "top", '1135px']
            ],
            "${__2}": [
                ["style", "height", '0%'],
                ["style", "display", 'none'],
                ["style", "left", '576px'],
                ["style", "top", '280px']
            ],
            "${__6}": [
                ["style", "display", 'none'],
                ["style", "top", '1275px'],
                ["style", "left", '27px'],
                ["style", "width", '0%']
            ],
            "${__11}": [
                ["style", "height", '0%'],
                ["style", "display", 'none'],
                ["style", "left", '544px'],
                ["style", "top", '29px']
            ],
            "${__8}": [
                ["style", "display", 'none'],
                ["style", "top", '1643px'],
                ["style", "left", '596px'],
                ["style", "width", '0%']
            ],
            "${_rr}": [
                ["style", "display", 'none'],
                ["style", "top", '2008px'],
                ["style", "left", '531px'],
                ["style", "width", '0%']
            ],
            "${_rr0}": [
                ["style", "height", '0%'],
                ["style", "display", 'none'],
                ["style", "left", '803px'],
                ["style", "top", '1746px']
            ],
            "${_rr2}": [
                ["style", "height", '0%'],
                ["style", "display", 'none'],
                ["style", "left", '524px'],
                ["style", "top", '2116px']
            ],
            "${_Text4}": [
                ["style", "display", 'none'],
                ["style", "font-size", '375%']
            ],
            "${_drx}": [
                ["style", "top", '1145px'],
                ["style", "left", '1356px'],
                ["style", "display", 'none']
            ],
            "${__3}": [
                ["style", "display", 'none'],
                ["style", "top", '503px'],
                ["style", "left", '571px'],
                ["style", "width", '0%']
            ],
            "${__4}": [
                ["style", "height", '0%'],
                ["style", "display", 'none'],
                ["style", "left", '595px'],
                ["style", "top", '706px']
            ],
            "${_to}": [
                ["style", "height", '0%'],
                ["style", "display", 'none'],
                ["style", "left", '407px'],
                ["style", "top", '1592px']
            ],
            "${_Text5}": [
                ["style", "display", 'none'],
                ["style", "top", '602px'],
                ["style", "left", '104px'],
                ["style", "width", '544px']
            ],
            "${_Text2}": [
                ["style", "width", '968px'],
                ["style", "left", '543px'],
                ["style", "font-size", '475%']
            ],
            "${_Text10}": [
                ["style", "display", 'none']
            ],
            "${_Text6}": [
                ["style", "top", '1108px'],
                ["style", "left", '1384px'],
                ["style", "display", 'none']
            ],
            "${__1}": [
                ["style", "display", 'none'],
                ["style", "top", '131px'],
                ["style", "left", '571px'],
                ["style", "width", '0%']
            ],
            "${_Text}": [
                ["style", "top", '2692px'],
                ["style", "font-size", '375%'],
                ["style", "font-family", 'Times New Roman, Times, serif'],
                ["style", "display", 'block'],
                ["style", "font-weight", '700'],
                ["style", "left", '330px'],
                ["style", "width", '1480px']
            ],
            "${_Text12}": [
                ["style", "display", 'none']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(255,255,255,1)'],
                ["style", "overflow", 'hidden'],
                ["style", "height", '3000px'],
                ["style", "width", '2000px']
            ],
            "${_Text9}": [
                ["style", "top", '1937px'],
                ["style", "left", '27px'],
                ["style", "display", 'none']
            ],
            "${_pdu67}": [
                ["style", "display", 'none'],
                ["style", "top", '1027px'],
                ["style", "left", '519px'],
                ["style", "width", '0%']
            ],
            "${_Text8}": [
                ["style", "display", 'none'],
                ["style", "top", '1592px'],
                ["style", "left", '82px'],
                ["style", "height", '104px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 24250,
            autoPlay: true,
            timeline: [
                { id: "eid65", tween: [ "style", "${_Text11}", "display", 'block', { fromValue: 'none'}], position: 22000, duration: 0 },
                { id: "eid66", tween: [ "style", "${_Text11}", "display", 'none', { fromValue: 'block'}], position: 22250, duration: 0 },
                { id: "eid43", tween: [ "style", "${_RR6}", "display", 'block', { fromValue: 'none'}], position: 13750, duration: 0 },
                { id: "eid57", tween: [ "style", "${_rr}", "display", 'block', { fromValue: 'none'}], position: 19000, duration: 0 },
                { id: "eid33", tween: [ "style", "${__4a}", "display", 'block', { fromValue: 'none'}], position: 10250, duration: 0 },
                { id: "eid24", tween: [ "style", "${__5}", "display", 'block', { fromValue: 'none'}], position: 7250, duration: 0 },
                { id: "eid70", tween: [ "style", "${_Text12}", "display", 'block', { fromValue: 'none'}], position: 23750, duration: 0 },
                { id: "eid71", tween: [ "style", "${_Text12}", "display", 'none', { fromValue: 'block'}], position: 24000, duration: 0 },
                { id: "eid60", tween: [ "style", "${_Text10}", "display", 'block', { fromValue: 'none'}], position: 20250, duration: 0 },
                { id: "eid61", tween: [ "style", "${_Text10}", "display", 'none', { fromValue: 'block'}], position: 20500, duration: 0 },
                { id: "eid7", tween: [ "style", "${_Text4}", "display", 'block', { fromValue: 'none'}], position: 2500, duration: 0 },
                { id: "eid8", tween: [ "style", "${_Text4}", "display", 'none', { fromValue: 'block'}], position: 2750, duration: 0 },
                { id: "eid31", tween: [ "style", "${_pdu67}", "width", '44%', { fromValue: '0%'}], position: 9000, duration: 1000 },
                { id: "eid12", tween: [ "style", "${_Text5}", "display", 'block', { fromValue: 'none'}], position: 4250, duration: 0 },
                { id: "eid13", tween: [ "style", "${_Text5}", "display", 'none', { fromValue: 'block'}], position: 4500, duration: 0 },
                { id: "eid21", tween: [ "style", "${__4}", "display", 'block', { fromValue: 'none'}], position: 6000, duration: 0 },
                { id: "eid48", tween: [ "style", "${__8}", "width", '39.81%', { fromValue: '0%'}], position: 15000, duration: 1000 },
                { id: "eid35", tween: [ "style", "${__4a}", "height", '9.6%', { fromValue: '0%'}], position: 10250, duration: 1000 },
                { id: "eid3", tween: [ "style", "${__11}", "height", '87.2%', { fromValue: '0%'}], position: 250, duration: 1000 },
                { id: "eid4", tween: [ "style", "${__1}", "display", 'block', { fromValue: 'none'}], position: 1250, duration: 0 },
                { id: "eid72", tween: [ "style", "${_Text}", "display", 'none', { fromValue: 'block'}], position: 24250, duration: 0 },
                { id: "eid64", tween: [ "style", "${_rr2}", "height", '11.6%', { fromValue: '0%'}], position: 20750, duration: 1000 },
                { id: "eid20", tween: [ "style", "${__3}", "width", '39.81%', { fromValue: '0%'}], position: 4750, duration: 1000 },
                { id: "eid32", tween: [ "style", "${_drx}", "display", 'block', { fromValue: 'none'}], position: 10000, duration: 0 },
                { id: "eid11", tween: [ "style", "${__2}", "height", '19.73%', { fromValue: '0%'}], position: 3000, duration: 1000 },
                { id: "eid38", tween: [ "style", "${__6}", "display", 'block', { fromValue: 'none'}], position: 12000, duration: 0 },
                { id: "eid9", tween: [ "style", "${__2}", "display", 'block', { fromValue: 'none'}], position: 3000, duration: 0 },
                { id: "eid23", tween: [ "style", "${__4}", "height", '10.4%', { fromValue: '0%'}], position: 6000, duration: 1000 },
                { id: "eid27", tween: [ "style", "${_Text6}", "display", 'block', { fromValue: 'none'}], position: 8500, duration: 0 },
                { id: "eid28", tween: [ "style", "${_Text6}", "display", 'none', { fromValue: 'block'}], position: 8750, duration: 0 },
                { id: "eid41", tween: [ "style", "${_Text8}", "display", 'block', { fromValue: 'none'}], position: 13250, duration: 0 },
                { id: "eid42", tween: [ "style", "${_Text8}", "display", 'none', { fromValue: 'block'}], position: 13500, duration: 0 },
                { id: "eid55", tween: [ "style", "${_Text9}", "display", 'block', { fromValue: 'none'}], position: 18500, duration: 0 },
                { id: "eid56", tween: [ "style", "${_Text9}", "display", 'none', { fromValue: 'block'}], position: 18750, duration: 0 },
                { id: "eid62", tween: [ "style", "${_rr2}", "display", 'block', { fromValue: 'none'}], position: 20750, duration: 0 },
                { id: "eid67", tween: [ "style", "${_pdu2}", "display", 'block', { fromValue: 'none'}], position: 22500, duration: 0 },
                { id: "eid17", tween: [ "style", "${_Text5}", "left", '104px', { fromValue: '104px'}], position: 4430, duration: 0 },
                { id: "eid6", tween: [ "style", "${__1}", "width", '39.81%', { fromValue: '0%'}], position: 1250, duration: 1000 },
                { id: "eid40", tween: [ "style", "${__6}", "width", '69.6%', { fromValue: '0%'}], position: 12000, duration: 1000 },
                { id: "eid45", tween: [ "style", "${_RR6}", "height", '12.13%', { fromValue: '0%'}], position: 13750, duration: 1000 },
                { id: "eid59", tween: [ "style", "${_rr}", "width", '44%', { fromValue: '0%'}], position: 19000, duration: 1000 },
                { id: "eid46", tween: [ "style", "${__8}", "display", 'block', { fromValue: 'none'}], position: 15000, duration: 0 },
                { id: "eid29", tween: [ "style", "${_pdu67}", "display", 'block', { fromValue: 'none'}], position: 9000, duration: 0 },
                { id: "eid36", tween: [ "style", "${_Text7}", "display", 'block', { fromValue: 'none'}], position: 11500, duration: 0 },
                { id: "eid37", tween: [ "style", "${_Text7}", "display", 'none', { fromValue: 'block'}], position: 11750, duration: 0 },
                { id: "eid18", tween: [ "style", "${__3}", "display", 'block', { fromValue: 'none'}], position: 4750, duration: 0 },
                { id: "eid52", tween: [ "style", "${_rr0}", "display", 'block', { fromValue: 'none'}], position: 17250, duration: 0 },
                { id: "eid49", tween: [ "style", "${_to}", "display", 'block', { fromValue: 'none'}], position: 16250, duration: 0 },
                { id: "eid51", tween: [ "style", "${_to}", "height", '19.6%', { fromValue: '0%'}], position: 16250, duration: 1000 },
                { id: "eid16", tween: [ "style", "${_Text5}", "width", '544px', { fromValue: '544px'}], position: 4430, duration: 0 },
                { id: "eid1", tween: [ "style", "${__11}", "display", 'block', { fromValue: 'none'}], position: 250, duration: 0 },
                { id: "eid26", tween: [ "style", "${__5}", "width", '49.4%', { fromValue: '0%'}], position: 7250, duration: 1000 },
                { id: "eid54", tween: [ "style", "${_rr0}", "height", '7.6%', { fromValue: '0%'}], position: 17250, duration: 1000 },
                { id: "eid69", tween: [ "style", "${_pdu2}", "width", '44%', { fromValue: '0%'}], position: 22500, duration: 1000 }            ]
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
})(jQuery, AdobeEdge, "EDGE-3948198");
