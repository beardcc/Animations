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
                id: 'stop',
                display: 'none',
                type: 'image',
                rect: ['412px', '780px','244px','292px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"stop.png",'0px','0px']
            },
            {
                id: 'bitst',
                display: 'none',
                type: 'image',
                rect: ['168px', '867px','284px','136px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"bitst.png",'0px','0px']
            },
            {
                id: 'arrows1',
                display: 'none',
                type: 'image',
                rect: ['619px', '801px','8%','17.3%','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"arrows1.png",'0%','0%','152px','260px']
            },
            {
                id: 'Text8',
                display: 'none',
                type: 'text',
                rect: ['213px', '628px','415px','auto','auto', 'auto'],
                text: "Normal OFDM IFFT operation.",
                align: "left",
                font: ['\'Times New Roman\', Times, serif', [375, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: 'ptos',
                display: 'none',
                type: 'image',
                rect: ['1055px', '590px','248px','484px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"ptos.png",'0px','0px']
            },
            {
                id: 'arrowsCP',
                display: 'none',
                type: 'image',
                rect: ['751px', '590px','18.3%','30.9%','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"arrowsCP.png",'0%','0%','348px','464px']
            },
            {
                id: 'arrow22',
                display: 'none',
                type: 'image',
                rect: ['1248px', '893px','9.1%','4%','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"arrow2.png",'0%','0%','172px','60px']
            },
            {
                id: 'antenna',
                display: 'none',
                type: 'image',
                rect: ['1373px', '726px','332px','276px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"antenna.png",'0px','0px']
            },
            {
                id: 'Text9',
                display: 'none',
                type: 'text',
                rect: ['1346px', '487px','541px','auto','auto', 'auto'],
                text: "In addition to the output from the IFFT, add the cyclic prefix.",
                align: "left",
                font: ['\'Times New Roman\', Times, serif', [375, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: 'Text11',
                display: 'none',
                type: 'text',
                rect: ['1360px', '558px','476px','auto','auto', 'auto'],
                text: "Multiply by a carrier and send.",
                align: "left",
                font: ['\'Times New Roman\', Times, serif', [375, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: 'ifft',
                display: 'none',
                type: 'image',
                rect: ['729px', '788px','260px','284px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"ifft.png",'0px','0px']
            },
            {
                id: 'center',
                display: 'none',
                type: 'image',
                rect: ['665px', '68px','29.5%','8.3%','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"center.png",'0%','0%','560px','124px']
            },
            {
                id: 'Text',
                display: 'none',
                type: 'text',
                rect: ['628px', '6px','auto','auto','auto', 'auto'],
                text: "Block of <i>L</i> symbols for OFDM.",
                font: ['Times New Roman, Times, serif', [375, "%"], "rgba(0,0,0,1)", "700", "none", ""]
            },
            {
                id: 'last',
                display: 'block',
                type: 'image',
                rect: ['1180px', '74px','30.5%','8%','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"last.png",'0%','0%','580px','120px']
            },
            {
                id: 'Text2',
                display: 'none',
                type: 'text',
                rect: ['1340px', '232px','539px','141px','auto', 'auto'],
                text: "The last <i>V</i> symbols are copied to also go before the block of symbols.",
                align: "left",
                font: ['\'Times New Roman\', Times, serif', [375, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: 'Text5',
                display: 'none',
                type: 'text',
                rect: ['318px', '1140px','auto','auto','auto', 'auto'],
                text: "(b) OFDM block diagram showing cyclic prefix",
                align: "left",
                font: ['\'Times New Roman\', Times, serif', [375, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: 'arrow',
                display: 'none',
                type: 'image',
                rect: ['516px', '177px','44.4%','11.5%','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"arrow.png",'0%','0%','844px','172px']
            },
            {
                id: 'Text3',
                display: 'none',
                type: 'text',
                rect: ['639px', '337px','auto','auto','auto', 'auto'],
                text: "Copy the last <i>V</i> symbols",
                align: "left",
                font: ['\'Times New Roman\', Times, serif', [375, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: 'first',
                display: 'none',
                type: 'image',
                rect: ['1196px', '73px','564px','120px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"first.png",'0px','0px']
            },
            {
                id: 'Text4',
                type: 'text',
                rect: ['610px', '446px','auto','61px','auto', 'auto'],
                text: "(a) OFDM symbol format",
                font: ['Times New Roman, Times, serif', [375, "%"], "rgba(0,0,0,1)", "700", "none", ""]
            },
            {
                id: 'Text6',
                type: 'text',
                rect: ['552px', '1390px','auto','auto','auto', 'auto'],
                text: "Figure 8.4 Cyclic Prefix",
                align: "left",
                font: ['\'Times New Roman\', Times, serif', [475, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: 'Text7',
                display: 'block',
                type: 'text',
                rect: ['259px', '1309px','auto','auto','auto', 'auto'],
                text: "Click or Touch on Figure for Each Step of Animation",
                align: "left",
                font: ['\'Times New Roman\', Times, serif', [375, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
            }],
            symbolInstances: [

            ]
        },
    states: {
        "Base State": {
            "${_arrow22}": [
                ["style", "display", 'none'],
                ["style", "top", '893px'],
                ["style", "left", '1248px'],
                ["style", "width", '0%']
            ],
            "${_Text7}": [
                ["style", "display", 'block'],
                ["style", "top", '1309px'],
                ["style", "left", '259px'],
                ["style", "font-size", '375%']
            ],
            "${_Text11}": [
                ["style", "display", 'none'],
                ["style", "top", '558px'],
                ["style", "left", '1360px'],
                ["style", "width", '476px']
            ],
            "${_antenna}": [
                ["style", "top", '726px'],
                ["style", "left", '1373px'],
                ["style", "display", 'none']
            ],
            "${_Text5}": [
                ["style", "top", '1140px'],
                ["style", "left", '318px'],
                ["style", "display", 'none']
            ],
            "${_ifft}": [
                ["style", "top", '788px'],
                ["style", "left", '729px'],
                ["style", "display", 'none']
            ],
            "${_arrowsCP}": [
                ["style", "display", 'none'],
                ["style", "top", '590px'],
                ["style", "left", '751px'],
                ["style", "width", '0%']
            ],
            "${_ptos}": [
                ["style", "top", '590px'],
                ["style", "left", '1055px'],
                ["style", "display", 'none']
            ],
            "${_center}": [
                ["style", "display", 'none'],
                ["style", "top", '68px'],
                ["style", "left", '665px'],
                ["style", "width", '0%']
            ],
            "${_bitst}": [
                ["style", "top", '867px'],
                ["style", "left", '-362px'],
                ["style", "display", 'none']
            ],
            "${_Text4}": [
                ["style", "top", '446px'],
                ["style", "font-family", 'Times New Roman, Times, serif'],
                ["style", "height", '61px'],
                ["style", "font-weight", '700'],
                ["style", "left", '610px'],
                ["style", "font-size", '375%']
            ],
            "${_last}": [
                ["style", "display", 'block'],
                ["style", "top", '74px'],
                ["style", "left", '1180px'],
                ["style", "width", '0%']
            ],
            "${_Text2}": [
                ["style", "top", '232px'],
                ["style", "display", 'none'],
                ["style", "height", '141px'],
                ["style", "left", '1340px'],
                ["style", "width", '539px']
            ],
            "${_arrow}": [
                ["style", "top", '177px'],
                ["transform", "rotateZ", '0deg'],
                ["style", "display", 'none'],
                ["style", "left", '1360px'],
                ["style", "width", '0%']
            ],
            "${_stop}": [
                ["style", "top", '780px'],
                ["style", "left", '412px'],
                ["style", "display", 'none']
            ],
            "${_Text6}": [
                ["style", "top", '1390px'],
                ["style", "left", '552px'],
                ["style", "font-size", '475%']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(255,255,255,1)'],
                ["style", "overflow", 'hidden'],
                ["style", "height", '1500px'],
                ["style", "width", '1900px']
            ],
            "${_arrows1}": [
                ["style", "display", 'none'],
                ["style", "top", '801px'],
                ["style", "left", '619px'],
                ["style", "width", '0%']
            ],
            "${_Text}": [
                ["style", "top", '6px'],
                ["style", "font-weight", '700'],
                ["style", "display", 'none'],
                ["style", "font-family", 'Times New Roman, Times, serif'],
                ["style", "left", '628px'],
                ["style", "font-size", '375%']
            ],
            "${_first}": [
                ["style", "top", '73px'],
                ["style", "left", '1196px'],
                ["style", "display", 'none']
            ],
            "${_Text9}": [
                ["style", "display", 'none'],
                ["style", "top", '487px'],
                ["style", "left", '1346px'],
                ["style", "width", '541px']
            ],
            "${_Text8}": [
                ["style", "display", 'none'],
                ["style", "top", '628px'],
                ["style", "left", '213px'],
                ["style", "width", '415px']
            ],
            "${_Text3}": [
                ["style", "top", '337px'],
                ["style", "left", '639px'],
                ["style", "display", 'none']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 12043,
            autoPlay: true,
            timeline: [
                { id: "eid61", tween: [ "style", "${_Text11}", "display", 'block', { fromValue: 'none'}], position: 11793, duration: 0 },
                { id: "eid62", tween: [ "style", "${_Text11}", "display", 'none', { fromValue: 'block'}], position: 12043, duration: 0 },
                { id: "eid9", tween: [ "style", "${_last}", "width", '30.53%', { fromValue: '0%'}], position: 210, duration: 700 },
                { id: "eid11", tween: [ "style", "${_arrow}", "display", 'block', { fromValue: 'none'}], position: 1690, duration: 0 },
                { id: "eid16", tween: [ "style", "${_arrow}", "width", '44.43%', { fromValue: '0%'}], position: 1690, duration: 800 },
                { id: "eid1", tween: [ "style", "${_center}", "display", 'block', { fromValue: 'none'}], position: 210, duration: 0 },
                { id: "eid54", tween: [ "style", "${_arrowsCP}", "width", '18.32%', { fromValue: '0%'}], position: 9293, duration: 800 },
                { id: "eid30", tween: [ "style", "${_first}", "top", '211px', { fromValue: '73px'}], position: 2983, duration: 800 },
                { id: "eid39", tween: [ "style", "${_first}", "top", '72px', { fromValue: '211px'}], position: 4750, duration: 669 },
                { id: "eid14", tween: [ "style", "${_arrow}", "left", '516px', { fromValue: '1360px'}], position: 1690, duration: 800 },
                { id: "eid59", tween: [ "style", "${_antenna}", "display", 'block', { fromValue: 'none'}], position: 11543, duration: 0 },
                { id: "eid4", tween: [ "style", "${_Text}", "display", 'block', { fromValue: 'none'}], position: 1175, duration: 0 },
                { id: "eid7", tween: [ "style", "${_Text}", "display", 'none', { fromValue: 'block'}], position: 1390, duration: 0 },
                { id: "eid52", tween: [ "style", "${_arrowsCP}", "display", 'block', { fromValue: 'none'}], position: 9293, duration: 0 },
                { id: "eid55", tween: [ "style", "${_Text9}", "display", 'block', { fromValue: 'none'}], position: 10373, duration: 0 },
                { id: "eid60", tween: [ "style", "${_Text9}", "display", 'none', { fromValue: 'block'}], position: 10588, duration: 0 },
                { id: "eid41", tween: [ "style", "${_Text5}", "display", 'block', { fromValue: 'none'}], position: 5908, duration: 0 },
                { id: "eid58", tween: [ "style", "${_arrow22}", "width", '9.06%', { fromValue: '0%'}], position: 10588, duration: 700 },
                { id: "eid5", tween: [ "style", "${_last}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid6", tween: [ "style", "${_last}", "display", 'block', { fromValue: 'none'}], position: 210, duration: 0 },
                { id: "eid3", tween: [ "style", "${_center}", "width", '29.48%', { fromValue: '0%'}], position: 210, duration: 700 },
                { id: "eid19", tween: [ "style", "${_first}", "display", 'block', { fromValue: 'none'}], position: 2983, duration: 0 },
                { id: "eid46", tween: [ "style", "${_arrows1}", "display", 'block', { fromValue: 'none'}], position: 7829, duration: 0 },
                { id: "eid18", tween: [ "style", "${_Text3}", "display", 'block', { fromValue: 'none'}], position: 2740, duration: 0 },
                { id: "eid45", tween: [ "style", "${_bitst}", "left", '168px', { fromValue: '-362px'}], position: 6734, duration: 800 },
                { id: "eid56", tween: [ "style", "${_arrow22}", "display", 'block', { fromValue: 'none'}], position: 10588, duration: 0 },
                { id: "eid63", tween: [ "style", "${_Text7}", "display", 'none', { fromValue: 'block'}], position: 12043, duration: 0 },
                { id: "eid10", tween: [ "style", "${_Text2}", "display", 'block', { fromValue: 'none'}], position: 5674, duration: 0 },
                { id: "eid40", tween: [ "style", "${_Text2}", "display", 'none', { fromValue: 'block'}], position: 5908, duration: 0 },
                { id: "eid51", tween: [ "style", "${_ptos}", "display", 'block', { fromValue: 'none'}], position: 9003, duration: 0 },
                { id: "eid43", tween: [ "style", "${_bitst}", "display", 'block', { fromValue: 'none'}], position: 6734, duration: 0 },
                { id: "eid33", tween: [ "style", "${_first}", "left", '144px', { fromValue: '1196px'}], position: 3919, duration: 700 },
                { id: "eid50", tween: [ "style", "${_Text8}", "display", 'block', { fromValue: 'none'}], position: 8793, duration: 0 },
                { id: "eid64", tween: [ "style", "${_Text8}", "display", 'none', { fromValue: 'block'}], position: 9003, duration: 0 },
                { id: "eid49", tween: [ "style", "${_ifft}", "display", 'block', { fromValue: 'none'}], position: 6453, duration: 0 },
                { id: "eid42", tween: [ "style", "${_stop}", "display", 'block', { fromValue: 'none'}], position: 6177, duration: 0 },
                { id: "eid17", tween: [ "transform", "${_arrow}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 1690, duration: 0 },
                { id: "eid48", tween: [ "style", "${_arrows1}", "width", '8%', { fromValue: '0%'}], position: 7829, duration: 700 }            ]
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
})(jQuery, AdobeEdge, "EDGE-713315445");
