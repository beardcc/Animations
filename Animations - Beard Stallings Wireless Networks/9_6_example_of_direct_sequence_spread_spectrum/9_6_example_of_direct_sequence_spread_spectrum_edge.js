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
                id: 'dop',
                display: 'block',
                type: 'image',
                rect: ['150px', '377px','92px','39px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"dop.png",'0px','0px']
            },
            {
                id: 'Text9',
                display: 'block',
                type: 'text',
                rect: ['271px', '426px','165px','28px','auto', 'auto'],
                text: "XOR result produces all 1's, back to the original data.",
                align: "left",
                font: ['\'Times New Roman\', Times, serif', [94, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: 'Text10',
                display: 'block',
                type: 'text',
                rect: ['325px', '431px','179px','32px','auto', 'auto'],
                text: "XOR results in all 0's, again back to the original data.",
                align: "left",
                font: ['\'Times New Roman\', Times, serif', [94, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: 'Text11',
                display: 'block',
                type: 'text',
                rect: ['392px', '420px','296px','39px','auto', 'auto'],
                text: "All the data is reproduced.",
                align: "left",
                font: ['\'Times New Roman\', Times, serif', [94, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: 'Untitled-1',
                display: 'block',
                type: 'image',
                rect: ['259px', '314px','59%','8.4%','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"Untitled-1.png",'0%','0%','472px','46px']
            },
            {
                id: 'lgbswave',
                display: 'block',
                type: 'image',
                rect: ['238px', '109px','62.4%','10.6%','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"lgbswave.png",'0%','0%','499px','58px']
            },
            {
                id: 'rx',
                display: 'block',
                type: 'image',
                rect: ['138px', '264px','111px','28px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"rx.png",'0px','0px']
            },
            {
                id: 'rxx',
                display: 'block',
                type: 'image',
                rect: ['85px', '262px','58px','147px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"rxx.png",'0px','0px']
            },
            {
                id: 'Text8',
                display: 'block',
                type: 'text',
                rect: ['266px', '371px','422px','46px','auto', 'auto'],
                text: "Received signal. Receiver generates the exact same PN sequence.",
                align: "left",
                font: ['\'Times New Roman\', Times, serif', [94, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: 'g1',
                display: 'block',
                type: 'image',
                rect: ['258px', '367px','8.4%','9.5%','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"g1.png",'0%','0%','67px','52px']
            },
            {
                id: 'ts',
                display: 'block',
                type: 'image',
                rect: ['133px', '173px','111px','48px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"ts.png",'0px','0px']
            },
            {
                id: 'Text5',
                display: 'block',
                type: 'text',
                rect: ['228px', '225px','182px','39px','auto', 'auto'],
                text: "Same bits as PN sequence.",
                align: "left",
                font: ['\'Times New Roman\', Times, serif', [94, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: 'txwaveCopy',
                display: 'block',
                type: 'image',
                rect: ['247px', '253px','62.4%','8.7%','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"txwave.png",'0%','0%','499px','48px']
            },
            {
                id: 'tx',
                display: 'block',
                type: 'image',
                rect: ['79px', '55px','73px','166px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"tx.png",'0px','0px']
            },
            {
                id: 'di',
                display: 'block',
                type: 'image',
                rect: ['158px', '70px','85px','32px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"di.png",'0px','0px']
            },
            {
                id: 'Diwave',
                display: 'block',
                type: 'image',
                rect: ['246px', '53px','61.9%','10%','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"Diwave.png",'0%','0%','495px','55px']
            },
            {
                id: 'Text3',
                display: 'block',
                type: 'text',
                rect: ['172px', '23px','75px','27px','auto', 'auto'],
                text: "Data input",
                align: "left",
                font: ['\'Times New Roman\', Times, serif', [94, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: 'Text4',
                display: 'block',
                type: 'text',
                rect: ['206px', '167px','160px','39px','auto', 'auto'],
                text: "Four times higher rate for the PN bit stream.",
                align: "left",
                font: ['\'Times New Roman\', Times, serif', [94, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: 'lgbs',
                display: 'block',
                type: 'image',
                rect: ['140px', '109px','111px','48px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"lgbs.png",'0px','0px']
            },
            {
                id: 'lgbs2',
                display: 'block',
                type: 'image',
                rect: ['137px', '295px','111px','81px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"lgbs2.png",'0px','0px']
            },
            {
                id: 'Text',
                type: 'text',
                rect: ['176px', '504px','495px','32px','auto', 'auto'],
                text: "Figure 9.6  Example of Direct Sequence Spread Spectrum",
                font: ['Times New Roman, Times, serif', [119, "%"], "rgba(0,0,0,1)", "700", "none", ""]
            },
            {
                id: 'Text2',
                display: 'block',
                type: 'text',
                rect: ['220px', '475px','548px','39px','auto', 'auto'],
                text: "Click or Touch on the Figure for Each Step of the Animation",
                align: "left",
                font: ['\'Times New Roman\', Times, serif', [94, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: 'p1',
                display: 'block',
                type: 'image',
                rect: ['259px', '170px','8.3%','8.4%','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"p1.png",'0%','0%','66px','46px']
            },
            {
                id: 'p2',
                display: 'block',
                type: 'image',
                rect: ['325px', '170px','7.3%','8.4%','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"p2.png",'0%','0%','58px','46px']
            },
            {
                id: 'p32',
                display: 'block',
                type: 'image',
                rect: ['383px', '171px','44%','8.4%','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"p3.png",'0%','0%','352px','46px']
            },
            {
                id: 'Text6',
                display: 'block',
                type: 'text',
                rect: ['333px', '221px','180px','20px','auto', 'auto'],
                text: "PN sequence bits inverted.",
                align: "left",
                font: ['\'Times New Roman\', Times, serif', [94, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: 'Text7',
                display: 'block',
                type: 'text',
                rect: ['394px', '221px','172px','28px','auto', 'auto'],
                text: "Total transmitted signal.",
                align: "left",
                font: ['\'Times New Roman\', Times, serif', [94, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: 'g2',
                display: 'block',
                type: 'image',
                rect: ['325px', '368px','7.3%','9.5%','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"g2.png",'0%','0%','58px','52px']
            },
            {
                id: 'g3',
                display: 'block',
                type: 'image',
                rect: ['383px', '368px','43.3%','9.5%','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"g3.png",'0%','0%','346px','52px']
            }],
            symbolInstances: [

            ]
        },
    states: {
        "Base State": {
            "${_Text7}": [
                ["style", "display", 'block'],
                ["style", "width", '172px']
            ],
            "${_Text11}": [
                ["style", "top", '420px'],
                ["style", "display", 'block']
            ],
            "${_Text3}": [
                ["style", "top", '23px'],
                ["style", "height", '27px'],
                ["style", "display", 'block'],
                ["style", "left", '172px'],
                ["style", "width", '75px']
            ],
            "${_di}": [
                ["style", "top", '70px'],
                ["style", "left", '158px'],
                ["style", "display", 'block']
            ],
            "${_Text2}": [
                ["style", "top", '485px'],
                ["style", "display", 'block'],
                ["style", "left", '213px'],
                ["style", "font-size", '94%']
            ],
            "${_rxx}": [
                ["style", "top", '262px'],
                ["style", "left", '85px'],
                ["style", "display", 'block']
            ],
            "${_Text8}": [
                ["style", "display", 'block'],
                ["style", "width", '422px']
            ],
            "${_txwaveCopy}": [
                ["style", "top", '253px'],
                ["style", "display", 'block'],
                ["style", "left", '247px'],
                ["style", "width", '0%']
            ],
            "${_p2}": [
                ["style", "top", '170px'],
                ["style", "display", 'block'],
                ["style", "left", '325px'],
                ["style", "width", '0%']
            ],
            "${_ts}": [
                ["style", "top", '173px'],
                ["style", "left", '133px'],
                ["style", "display", 'block']
            ],
            "${_g2}": [
                ["style", "top", '368px'],
                ["style", "display", 'block'],
                ["style", "left", '325px'],
                ["style", "width", '0%']
            ],
            "${_g1}": [
                ["style", "top", '367px'],
                ["style", "display", 'block'],
                ["style", "left", '258px'],
                ["style", "width", '0%']
            ],
            "${_g3}": [
                ["style", "top", '368px'],
                ["style", "display", 'block'],
                ["style", "left", '383px'],
                ["style", "width", '0%']
            ],
            "${_Text4}": [
                ["style", "top", '167px'],
                ["style", "left", '206px'],
                ["style", "display", 'block']
            ],
            "${_Diwave}": [
                ["style", "top", '53px'],
                ["style", "display", 'block'],
                ["style", "left", '246px'],
                ["style", "width", '0%']
            ],
            "${_lgbswave}": [
                ["style", "top", '109px'],
                ["style", "display", 'block'],
                ["style", "left", '238px'],
                ["style", "width", '0%']
            ],
            "${_p1}": [
                ["style", "top", '170px'],
                ["style", "display", 'block'],
                ["style", "left", '259px'],
                ["style", "width", '0%']
            ],
            "${_lgbs2}": [
                ["style", "top", '295px'],
                ["style", "left", '137px'],
                ["style", "display", 'block']
            ],
            "${_Text}": [
                ["style", "top", '504px'],
                ["style", "font-family", 'Times New Roman, Times, serif'],
                ["style", "font-weight", '700'],
                ["style", "left", '176px'],
                ["style", "font-size", '119%']
            ],
            "${_tx}": [
                ["style", "top", '55px'],
                ["style", "left", '79px'],
                ["style", "display", 'block']
            ],
            "${_Text5}": [
                ["style", "top", '225px'],
                ["style", "display", 'block'],
                ["style", "left", '228px'],
                ["style", "width", '182px']
            ],
            "${_Text10}": [
                ["style", "display", 'block'],
                ["style", "width", '179px']
            ],
            "${_Text6}": [
                ["style", "display", 'block']
            ],
            "${_p32}": [
                ["style", "top", '170px'],
                ["style", "display", 'block'],
                ["style", "left", '383px'],
                ["style", "width", '0%']
            ],
            "${_dop}": [
                ["style", "top", '377px'],
                ["style", "left", '150px'],
                ["style", "display", 'block']
            ],
            "${_lgbs}": [
                ["style", "top", '109px'],
                ["style", "left", '140px'],
                ["style", "display", 'block']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(255,255,255,1)'],
                ["style", "width", '800px'],
                ["style", "height", '550px'],
                ["style", "overflow", 'auto']
            ],
            "${_Text9}": [
                ["style", "top", '426px'],
                ["style", "display", 'block'],
                ["style", "left", '271px'],
                ["style", "width", '165px']
            ],
            "${_Untitled-1}": [
                ["style", "top", '314px'],
                ["style", "display", 'block'],
                ["style", "left", '259px'],
                ["style", "width", '0%']
            ],
            "${_rx}": [
                ["style", "top", '264px'],
                ["style", "left", '138px'],
                ["style", "display", 'block']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 20250,
            autoPlay: true,
            timeline: [
                { id: "eid77", tween: [ "style", "${_Text11}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid78", tween: [ "style", "${_Text11}", "display", 'block', { fromValue: 'none'}], position: 18187, duration: 0 },
                { id: "eid83", tween: [ "style", "${_Text11}", "display", 'none', { fromValue: 'block'}], position: 20000, duration: 0 },
                { id: "eid25", tween: [ "style", "${_p1}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid26", tween: [ "style", "${_p1}", "display", 'block', { fromValue: 'none'}], position: 5000, duration: 0 },
                { id: "eid61", tween: [ "style", "${_dop}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid62", tween: [ "style", "${_dop}", "display", 'block', { fromValue: 'none'}], position: 14684, duration: 0 },
                { id: "eid48", tween: [ "style", "${_rx}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid49", tween: [ "style", "${_rx}", "display", 'block', { fromValue: 'none'}], position: 10394, duration: 0 },
                { id: "eid44", tween: [ "style", "${_rxx}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid45", tween: [ "style", "${_rxx}", "display", 'block', { fromValue: 'none'}], position: 10000, duration: 0 },
                { id: "eid59", tween: [ "style", "${_Untitled-1}", "width", '59%', { fromValue: '0%'}], position: 12604, duration: 1500 },
                { id: "eid50", tween: [ "style", "${_txwaveCopy}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid51", tween: [ "style", "${_txwaveCopy}", "display", 'block', { fromValue: 'none'}], position: 10558, duration: 0 },
                { id: "eid56", tween: [ "style", "${_Untitled-1}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid57", tween: [ "style", "${_Untitled-1}", "display", 'block', { fromValue: 'none'}], position: 12604, duration: 0 },
                { id: "eid35", tween: [ "style", "${_p2}", "width", '7.25%', { fromValue: '0%'}], position: 6569, duration: 1000 },
                { id: "eid12", tween: [ "style", "${_Text4}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid13", tween: [ "style", "${_Text4}", "display", 'block', { fromValue: 'none'}], position: 2660, duration: 0 },
                { id: "eid20", tween: [ "style", "${_Text4}", "display", 'none', { fromValue: 'block'}], position: 4500, duration: 0 },
                { id: "eid23", tween: [ "style", "${_Text5}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid24", tween: [ "style", "${_Text5}", "display", 'block', { fromValue: 'none'}], position: 5000, duration: 0 },
                { id: "eid29", tween: [ "style", "${_Text5}", "display", 'none', { fromValue: 'block'}], position: 6250, duration: 0 },
                { id: "eid19", tween: [ "style", "${_lgbswave}", "width", '62.38%', { fromValue: '0%'}], position: 2865, duration: 1500 },
                { id: "eid28", tween: [ "style", "${_p1}", "width", '8.25%', { fromValue: '0%'}], position: 5000, duration: 1000 },
                { id: "eid53", tween: [ "style", "${_txwaveCopy}", "width", '62.38%', { fromValue: '0%'}], position: 10558, duration: 1500 },
                { id: "eid1", tween: [ "style", "${_tx}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid2", tween: [ "style", "${_tx}", "display", 'block', { fromValue: 'none'}], position: 250, duration: 0 },
                { id: "eid82", tween: [ "style", "${_g3}", "width", '43.25%', { fromValue: '0%'}], position: 18326, duration: 1500 },
                { id: "eid84", tween: [ "style", "${_Text2}", "display", 'none', { fromValue: 'block'}], position: 20250, duration: 0 },
                { id: "eid97", tween: [ "style", "${_Text2}", "top", '485px', { fromValue: '485px'}], position: 0, duration: 0 },
                { id: "eid21", tween: [ "style", "${_ts}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid22", tween: [ "style", "${_ts}", "display", 'block', { fromValue: 'none'}], position: 4750, duration: 0 },
                { id: "eid30", tween: [ "style", "${_Text6}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid31", tween: [ "style", "${_Text6}", "display", 'block', { fromValue: 'none'}], position: 6435, duration: 0 },
                { id: "eid36", tween: [ "style", "${_Text6}", "display", 'none', { fromValue: 'block'}], position: 7750, duration: 0 },
                { id: "eid46", tween: [ "style", "${_Text8}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid47", tween: [ "style", "${_Text8}", "display", 'block', { fromValue: 'none'}], position: 10190, duration: 0 },
                { id: "eid60", tween: [ "style", "${_Text8}", "display", 'none', { fromValue: 'block'}], position: 14374, duration: 0 },
                { id: "eid63", tween: [ "style", "${_Text9}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid64", tween: [ "style", "${_Text9}", "display", 'block', { fromValue: 'none'}], position: 14922, duration: 0 },
                { id: "eid69", tween: [ "style", "${_Text9}", "display", 'none', { fromValue: 'block'}], position: 16250, duration: 0 },
                { id: "eid92", tween: [ "style", "${_p32}", "top", '170px', { fromValue: '170px'}], position: 9296, duration: 0 },
                { id: "eid93", tween: [ "style", "${_p32}", "top", '170px', { fromValue: '170px'}], position: 9750, duration: 0 },
                { id: "eid96", tween: [ "style", "${_Text2}", "left", '213px', { fromValue: '213px'}], position: 0, duration: 0 },
                { id: "eid54", tween: [ "style", "${_lgbs2}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid55", tween: [ "style", "${_lgbs2}", "display", 'block', { fromValue: 'none'}], position: 12399, duration: 0 },
                { id: "eid8", tween: [ "style", "${_Diwave}", "width", '61.88%', { fromValue: '0%'}], position: 455, duration: 1500 },
                { id: "eid75", tween: [ "style", "${_g2}", "width", '7.25%', { fromValue: '0%'}], position: 16650, duration: 1000 },
                { id: "eid14", tween: [ "style", "${_lgbs}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid15", tween: [ "style", "${_lgbs}", "display", 'block', { fromValue: 'none'}], position: 2440, duration: 0 },
                { id: "eid9", tween: [ "style", "${_Text3}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid10", tween: [ "style", "${_Text3}", "display", 'block', { fromValue: 'none'}], position: 310, duration: 0 },
                { id: "eid11", tween: [ "style", "${_Text3}", "display", 'none', { fromValue: 'block'}], position: 2150, duration: 0 },
                { id: "eid79", tween: [ "style", "${_g3}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid80", tween: [ "style", "${_g3}", "display", 'block', { fromValue: 'none'}], position: 18326, duration: 0 },
                { id: "eid5", tween: [ "style", "${_Diwave}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid6", tween: [ "style", "${_Diwave}", "display", 'block', { fromValue: 'none'}], position: 455, duration: 0 },
                { id: "eid37", tween: [ "style", "${_Text7}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid38", tween: [ "style", "${_Text7}", "display", 'block', { fromValue: 'none'}], position: 8000, duration: 0 },
                { id: "eid43", tween: [ "style", "${_Text7}", "display", 'none', { fromValue: 'block'}], position: 9788, duration: 0 },
                { id: "eid65", tween: [ "style", "${_g1}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid66", tween: [ "style", "${_g1}", "display", 'block', { fromValue: 'none'}], position: 15094, duration: 0 },
                { id: "eid32", tween: [ "style", "${_p2}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid33", tween: [ "style", "${_p2}", "display", 'block', { fromValue: 'none'}], position: 6569, duration: 0 },
                { id: "eid16", tween: [ "style", "${_lgbswave}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid17", tween: [ "style", "${_lgbswave}", "display", 'block', { fromValue: 'none'}], position: 2865, duration: 0 },
                { id: "eid70", tween: [ "style", "${_Text10}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid71", tween: [ "style", "${_Text10}", "display", 'block', { fromValue: 'none'}], position: 16500, duration: 0 },
                { id: "eid76", tween: [ "style", "${_Text10}", "display", 'none', { fromValue: 'block'}], position: 17865, duration: 0 },
                { id: "eid42", tween: [ "style", "${_p32}", "width", '44%', { fromValue: '0%'}], position: 8130, duration: 1500 },
                { id: "eid72", tween: [ "style", "${_g2}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid73", tween: [ "style", "${_g2}", "display", 'block', { fromValue: 'none'}], position: 16650, duration: 0 },
                { id: "eid3", tween: [ "style", "${_di}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid4", tween: [ "style", "${_di}", "display", 'block', { fromValue: 'none'}], position: 355, duration: 0 },
                { id: "eid39", tween: [ "style", "${_p32}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid40", tween: [ "style", "${_p32}", "display", 'block', { fromValue: 'none'}], position: 8130, duration: 0 },
                { id: "eid68", tween: [ "style", "${_g1}", "width", '8.38%', { fromValue: '0%'}], position: 15094, duration: 1000 }            ]
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
})(jQuery, AdobeEdge, "EDGE-93961483");
