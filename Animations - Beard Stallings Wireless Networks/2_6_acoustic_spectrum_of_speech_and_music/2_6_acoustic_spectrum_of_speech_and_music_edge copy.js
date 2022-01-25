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
                id: 'a',
                type: 'image',
                rect: ['17px', '21px','667px','434px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"a.png",'0px','0px']
            },
            {
                id: 'Text13',
                display: 'block',
                type: 'text',
                rect: ['259px', '320px','197px','49px','auto', 'auto'],
                text: "Frequency range used for telephone. Noise in this range affects the telephone signal.",
                align: "center",
                font: ['Times New Roman, Times, serif', 12, "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: 'Text5',
                display: 'block',
                type: 'text',
                rect: ['377px', '44px','83px','36px','auto', 'auto'],
                text: "Upper limit of AM Radio",
                align: "center",
                font: ['Times New Roman, Times, serif', 12, "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: 'Text4',
                display: 'block',
                type: 'text',
                rect: ['318px', '292px','80px','18px','auto', 'auto'],
                text: "Noise<br>",
                align: "center",
                font: ['Georgia, \'Times New Roman\', Times, serif', 12, "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: '_3',
                display: 'block',
                type: 'image',
                rect: ['237px', '77px','211px','243px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"3.png",'0px','0px']
            },
            {
                id: '_4',
                display: 'block',
                type: 'image',
                rect: ['117px', '87px','447px','273px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"4.png",'0px','0px']
            },
            {
                id: 'Text14',
                display: 'block',
                type: 'text',
                rect: ['135px', '53px','114px','49px','auto', 'auto'],
                text: "Wider frequency range for Music.",
                align: "center",
                font: ['Times New Roman, Times, serif', 12, "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: 'r5',
                display: 'block',
                type: 'image',
                rect: ['172px', '84px','44px','37px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"r5.png",'0px','0px'],
                transform: [[],['-173']]
            },
            {
                id: 'Text12',
                display: 'block',
                type: 'text',
                rect: ['93px', '69px','130px','36px','auto', 'auto'],
                text: "25dB range of power for voice.",
                align: "center",
                font: ['Times New Roman, Times, serif', 12, "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: 'Text16',
                display: 'block',
                type: 'text',
                rect: ['214px', '476px','363px','32px','auto', 'auto'],
                text: "Click or Touch on Figure for Each Step of the Animation",
                align: "center",
                font: ['Times New Roman, Times, serif', 15, "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: 'Text11',
                display: 'block',
                type: 'text',
                rect: ['163px', '87px','74px','18px','auto', 'auto'],
                text: "Spectrum  of Speech.",
                align: "center",
                font: ['Times New Roman, Times, serif', 12, "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: 'Text3',
                display: 'block',
                type: 'text',
                rect: ['134px', '114px','36px','18px','auto', 'auto'],
                text: "Music<br>",
                align: "center",
                font: ['Times New Roman, Times, serif', 12, "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: 'Text2',
                display: 'block',
                type: 'text',
                rect: ['145px', '167px','47px','32px','auto', 'auto'],
                text: "Speech<br>",
                align: "center",
                font: ['Times New Roman, Times, serif', 12, "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: 'Text',
                display: 'block',
                type: 'text',
                rect: ['111px', '209px','103px','54px','auto', 'auto'],
                text: "Approximate dynamic range of voice",
                align: "center",
                font: ['Times New Roman, Times, serif', 12, "rgba(0,0,0,1)", "700", "none", ""]
            },
            {
                id: 'Text9',
                type: 'text',
                rect: ['93px', '508px','625px','36px','auto', 'auto'],
                text: "Figure 2.6   Acoustic Spectrum of Speech and Music",
                align: "center",
                font: ['Times New Roman, Times, serif', 19, "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: '_5',
                display: 'block',
                type: 'image',
                rect: ['620px', '84px','27px','276px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"5.png",'0px','0px']
            },
            {
                id: '_6',
                display: 'block',
                type: 'image',
                rect: ['521px', '41px','22px','284px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"6.png",'0px','0px']
            },
            {
                id: '_6Copy',
                display: 'block',
                type: 'image',
                rect: ['465px', '80px','22px','284px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"6.png",'0px','0px']
            },
            {
                id: '_1',
                display: 'block',
                type: 'image',
                rect: ['185px', '97px','280px','100px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"1.png",'0px','0px']
            },
            {
                id: '_2',
                display: 'block',
                type: 'image',
                rect: ['93px', '97px','36px','112px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"2.png",'0px','0px']
            },
            {
                id: '_6a',
                display: 'block',
                type: 'image',
                rect: ['481px', '28px','74px','49px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"6a.png",'0px','0px']
            },
            {
                id: '_6aCopy',
                display: 'block',
                type: 'image',
                rect: ['428px', '72px','74px','49px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"6a.png",'0px','0px']
            },
            {
                id: 'Text6',
                display: 'block',
                type: 'text',
                rect: ['424px', '3px','94px','18px','auto', 'auto'],
                text: "Upper Limit of FM radio",
                align: "center",
                font: ['Times New Roman, Times, serif', 12, "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: 'Text7',
                display: 'block',
                type: 'text',
                rect: ['642px', '187px','114px','49px','auto', 'auto'],
                text: "Approximate dynamic range of music.",
                align: "center",
                font: ['Times New Roman, Times, serif', 12, "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: 'Text15',
                display: 'block',
                type: 'text',
                rect: ['642px', '62px','114px','49px','auto', 'auto'],
                text: "And wider dynamic range",
                align: "center",
                font: ['Georgia, \'Times New Roman\', Times, serif', 12, "rgba(0,0,0,1)", "bold", "none", "normal"]
            }],
            symbolInstances: [

            ]
        },
    states: {
        "Base State": {
            "${_Text15}": [
                ["style", "display", 'block'],
                ["style", "font-size", '15px']
            ],
            "${_Text11}": [
                ["style", "top", '79px'],
                ["style", "width", '74px'],
                ["style", "display", 'block'],
                ["style", "font-family", 'Times New Roman, Times, serif'],
                ["style", "left", '163px'],
                ["style", "font-size", '15px']
            ],
            "${_Text3}": [
                ["style", "top", '114px'],
                ["style", "font-family", 'Times New Roman, Times, serif'],
                ["style", "left", '134px'],
                ["style", "display", 'block']
            ],
            "${_r5}": [
                ["style", "top", '84px'],
                ["transform", "rotateZ", '-173deg'],
                ["style", "height", '37px'],
                ["style", "display", 'block'],
                ["style", "left", '172px'],
                ["style", "width", '44px']
            ],
            "${_Text5}": [
                ["style", "top", '44px'],
                ["style", "width", '83px'],
                ["style", "height", '36px'],
                ["style", "display", 'block'],
                ["style", "font-family", 'Times New Roman, Times, serif'],
                ["style", "left", '377px'],
                ["style", "font-size", '12px']
            ],
            "${__5}": [
                ["style", "top", '84px'],
                ["style", "left", '620px'],
                ["style", "display", 'block']
            ],
            "${__2}": [
                ["style", "top", '97px'],
                ["style", "left", '93px'],
                ["style", "display", 'block']
            ],
            "${_a}": [
                ["style", "left", '17px'],
                ["style", "top", '21px']
            ],
            "${_Text14}": [
                ["style", "top", '53px'],
                ["style", "font-size", '15px'],
                ["style", "display", 'block'],
                ["style", "font-family", 'Times New Roman, Times, serif'],
                ["style", "left", '135px'],
                ["style", "width", '134px']
            ],
            "${_Text4}": [
                ["style", "top", '292px'],
                ["style", "left", '318px'],
                ["style", "display", 'block']
            ],
            "${__6aCopy}": [
                ["style", "top", '72px'],
                ["style", "left", '428px'],
                ["style", "display", 'block']
            ],
            "${_Text2}": [
                ["style", "top", '167px'],
                ["style", "font-family", 'Times New Roman, Times, serif'],
                ["style", "left", '145px'],
                ["style", "display", 'block']
            ],
            "${_Text7}": [
                ["style", "top", '187px'],
                ["style", "display", 'block'],
                ["style", "font-family", 'Times New Roman, Times, serif'],
                ["style", "left", '642px'],
                ["style", "width", '114px']
            ],
            "${__4}": [
                ["style", "display", 'block'],
                ["style", "left", '117px'],
                ["style", "top", '87px']
            ],
            "${__3}": [
                ["style", "top", '77px'],
                ["style", "left", '237px'],
                ["style", "display", 'block']
            ],
            "${__6a}": [
                ["style", "top", '28px'],
                ["style", "left", '481px'],
                ["style", "display", 'block']
            ],
            "${_Text16}": [
                ["style", "top", '482px'],
                ["style", "font-size", '15px'],
                ["style", "display", 'block'],
                ["style", "font-family", 'Times New Roman, Times, serif'],
                ["style", "left", '177px'],
                ["style", "width", '447px']
            ],
            "${_Text13}": [
                ["style", "top", '320px'],
                ["style", "width", '229px'],
                ["style", "display", 'block'],
                ["style", "font-family", 'Times New Roman, Times, serif'],
                ["style", "left", '247px'],
                ["style", "font-size", '15px']
            ],
            "${_Text6}": [
                ["style", "top", '3px'],
                ["style", "width", '94px'],
                ["style", "display", 'block'],
                ["style", "font-family", 'Times New Roman, Times, serif'],
                ["style", "left", '424px'],
                ["style", "font-size", '12px']
            ],
            "${__1}": [
                ["style", "top", '97px'],
                ["style", "left", '185px'],
                ["style", "display", 'block']
            ],
            "${_Text}": [
                ["style", "text-align", 'center'],
                ["style", "font-size", '12px'],
                ["style", "display", 'block'],
                ["style", "font-weight", '700'],
                ["style", "font-family", 'Times New Roman, Times, serif'],
                ["style", "width", '103px']
            ],
            "${_Text12}": [
                ["style", "top", '69px'],
                ["style", "width", '130px'],
                ["style", "display", 'block'],
                ["style", "font-family", 'Times New Roman, Times, serif'],
                ["style", "left", '93px'],
                ["style", "font-size", '15px']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(255,255,255,1)'],
                ["style", "overflow", 'auto'],
                ["style", "height", '544px'],
                ["style", "width", '799px']
            ],
            "${_Text9}": [
                ["style", "top", '508px'],
                ["style", "font-size", '19px'],
                ["style", "font-family", 'Times New Roman, Times, serif'],
                ["style", "left", '93px'],
                ["style", "width", '625px']
            ],
            "${__6Copy}": [
                ["style", "top", '80px'],
                ["style", "left", '465px'],
                ["style", "display", 'block']
            ],
            "${__6}": [
                ["style", "top", '41px'],
                ["style", "left", '521px'],
                ["style", "display", 'block']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 3750,
            autoPlay: true,
            timeline: [
                { id: "eid5", tween: [ "style", "${_Text11}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid6", tween: [ "style", "${_Text11}", "display", 'block', { fromValue: 'none'}], position: 500, duration: 0 },
                { id: "eid7", tween: [ "style", "${_Text11}", "display", 'none', { fromValue: 'block'}], position: 750, duration: 0 },
                { id: "eid50", tween: [ "style", "${__6Copy}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid51", tween: [ "style", "${__6Copy}", "display", 'block', { fromValue: 'none'}], position: 3500, duration: 0 },
                { id: "eid59", tween: [ "style", "${_Text13}", "left", '247px', { fromValue: '247px'}], position: 1750, duration: 0 },
                { id: "eid33", tween: [ "style", "${__5}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid34", tween: [ "style", "${__5}", "display", 'block', { fromValue: 'none'}], position: 3000, duration: 0 },
                { id: "eid60", tween: [ "style", "${_Text14}", "font-size", '15px', { fromValue: '15px'}], position: 2500, duration: 0 },
                { id: "eid23", tween: [ "style", "${_Text13}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid24", tween: [ "style", "${_Text13}", "display", 'block', { fromValue: 'none'}], position: 1750, duration: 0 },
                { id: "eid25", tween: [ "style", "${_Text13}", "display", 'none', { fromValue: 'block'}], position: 2000, duration: 0 },
                { id: "eid14", tween: [ "style", "${_Text12}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid15", tween: [ "style", "${_Text12}", "display", 'block', { fromValue: 'none'}], position: 1100, duration: 0 },
                { id: "eid16", tween: [ "style", "${_Text12}", "display", 'none', { fromValue: 'block'}], position: 1250, duration: 0 },
                { id: "eid54", tween: [ "style", "${_Text11}", "font-size", '15px', { fromValue: '15px'}], position: 500, duration: 0 },
                { id: "eid19", tween: [ "style", "${_Text4}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid20", tween: [ "style", "${_Text4}", "display", 'block', { fromValue: 'none'}], position: 1500, duration: 0 },
                { id: "eid42", tween: [ "style", "${__6a}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid43", tween: [ "style", "${__6a}", "display", 'block', { fromValue: 'none'}], position: 3500, duration: 0 },
                { id: "eid46", tween: [ "style", "${_Text5}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid47", tween: [ "style", "${_Text5}", "display", 'block', { fromValue: 'none'}], position: 3500, duration: 0 },
                { id: "eid26", tween: [ "style", "${__4}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid27", tween: [ "style", "${__4}", "display", 'block', { fromValue: 'none'}], position: 2250, duration: 0 },
                { id: "eid55", tween: [ "style", "${_Text11}", "top", '79px', { fromValue: '79px'}], position: 500, duration: 0 },
                { id: "eid37", tween: [ "style", "${_Text15}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid38", tween: [ "style", "${_Text15}", "display", 'block', { fromValue: 'none'}], position: 3250, duration: 0 },
                { id: "eid39", tween: [ "style", "${_Text15}", "display", 'none', { fromValue: 'block'}], position: 3500, duration: 0 },
                { id: "eid1", tween: [ "style", "${__1}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid2", tween: [ "style", "${__1}", "display", 'block', { fromValue: 'none'}], position: 250, duration: 0 },
                { id: "eid10", tween: [ "style", "${_Text}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid11", tween: [ "style", "${_Text}", "display", 'block', { fromValue: 'none'}], position: 1000, duration: 0 },
                { id: "eid48", tween: [ "style", "${__6aCopy}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid49", tween: [ "style", "${__6aCopy}", "display", 'block', { fromValue: 'none'}], position: 3500, duration: 0 },
                { id: "eid3", tween: [ "style", "${_Text2}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid4", tween: [ "style", "${_Text2}", "display", 'block', { fromValue: 'none'}], position: 250, duration: 0 },
                { id: "eid61", tween: [ "style", "${_Text14}", "width", '134px', { fromValue: '134px'}], position: 2500, duration: 0 },
                { id: "eid8", tween: [ "style", "${__2}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid9", tween: [ "style", "${__2}", "display", 'block', { fromValue: 'none'}], position: 1000, duration: 0 },
                { id: "eid44", tween: [ "style", "${_Text6}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid45", tween: [ "style", "${_Text6}", "display", 'block', { fromValue: 'none'}], position: 3500, duration: 0 },
                { id: "eid52", tween: [ "style", "${_Text16}", "display", 'none', { fromValue: 'block'}], position: 3750, duration: 0 },
                { id: "eid78", tween: [ "style", "${_Stage}", "height", '544px', { fromValue: '544px'}], position: 3750, duration: 0 },
                { id: "eid28", tween: [ "style", "${_Text3}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid29", tween: [ "style", "${_Text3}", "display", 'block', { fromValue: 'none'}], position: 2250, duration: 0 },
                { id: "eid81", tween: [ "style", "${_Text16}", "left", '177px', { fromValue: '177px'}], position: 3665, duration: 0 },
                { id: "eid35", tween: [ "style", "${_Text7}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid36", tween: [ "style", "${_Text7}", "display", 'block', { fromValue: 'none'}], position: 3000, duration: 0 },
                { id: "eid17", tween: [ "style", "${__3}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid18", tween: [ "style", "${__3}", "display", 'block', { fromValue: 'none'}], position: 1500, duration: 0 },
                { id: "eid62", tween: [ "style", "${_r5}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid63", tween: [ "style", "${_r5}", "display", 'block', { fromValue: 'none'}], position: 2500, duration: 0 },
                { id: "eid64", tween: [ "style", "${_r5}", "display", 'none', { fromValue: 'block'}], position: 2750, duration: 0 },
                { id: "eid58", tween: [ "style", "${_Text13}", "width", '229px', { fromValue: '229px'}], position: 1750, duration: 0 },
                { id: "eid40", tween: [ "style", "${__6}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid41", tween: [ "style", "${__6}", "display", 'block', { fromValue: 'none'}], position: 3500, duration: 0 },
                { id: "eid65", tween: [ "style", "${_Text15}", "font-size", '15px', { fromValue: '15px'}], position: 3250, duration: 0 },
                { id: "eid57", tween: [ "style", "${_Text13}", "font-size", '15px', { fromValue: '15px'}], position: 1750, duration: 0 },
                { id: "eid70", tween: [ "style", "${_Text6}", "font-size", '12px', { fromValue: '12px'}], position: 3500, duration: 0 },
                { id: "eid56", tween: [ "style", "${_Text12}", "font-size", '15px', { fromValue: '15px'}], position: 1100, duration: 0 },
                { id: "eid30", tween: [ "style", "${_Text14}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid31", tween: [ "style", "${_Text14}", "display", 'block', { fromValue: 'none'}], position: 2500, duration: 0 },
                { id: "eid32", tween: [ "style", "${_Text14}", "display", 'none', { fromValue: 'block'}], position: 2750, duration: 0 }            ]
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
})(jQuery, AdobeEdge, "EDGE-826238969");
