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
                id: 'arrow4',
                display: 'block',
                type: 'image',
                rect: ['351px', '425px','3.8%','15.4%','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"arrow4.png",'0%','0%','21px','123px']
            },
            {
                id: 'block-B2',
                display: 'block',
                type: 'image',
                rect: ['28px', '531px','90%','5.1%','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"block-B2.png",'0%','0%','504px','41px']
            },
            {
                id: 'Text10',
                display: 'block',
                type: 'text',
                rect: ['376px', '448px','164px','auto','auto', 'auto'],
                text: "Source can shuffle its own blocks, so here bits with errors are spaced out and correction can be more effective.",
                align: "left",
                font: ['\'Times New Roman\', Times, serif', [94, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: 'arrow1',
                display: 'block',
                type: 'image',
                rect: ['82px', '425px','3.8%','15.4%','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"arrow1.png",'0%','0%','21px','123px']
            },
            {
                id: 'arrow2',
                display: 'block',
                type: 'image',
                rect: ['138px', '428px','31.1%','14.6%','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"arrow2.png",'0%','0%','174px','117px']
            },
            {
                id: 'arrow34',
                display: 'block',
                type: 'image',
                rect: ['138px', '428px','31.1%','14.6%','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"arrow3.png",'0%','0%','174px','117px']
            },
            {
                id: 'Block-A1',
                display: 'block',
                type: 'image',
                rect: ['26px', '55px','91.6%','4.6%','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"Block-A1.png",'0%','0%','513px','37px']
            },
            {
                id: 'block-A1-dark',
                display: 'block',
                type: 'image',
                rect: ['9px', '52px','531px','41px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"block-A1-dark.png",'0px','0px']
            },
            {
                id: 'Text4',
                display: 'block',
                type: 'text',
                rect: ['226px', '35','auto','auto','auto', 'auto'],
                text: "Source data stream.",
                align: "left",
                font: ['\'Times New Roman\', Times, serif', [94, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: 'fading1',
                display: 'block',
                type: 'image',
                rect: ['27px', '212px','90.4%','15.4%','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"fading1.png",'0%','0%','506px','123px']
            },
            {
                id: 'Text5',
                display: 'block',
                type: 'text',
                rect: ['214px', '235px','auto','auto','auto', 'auto'],
                text: "This fade will affect the first three bits of block A.",
                align: "left",
                font: ['\'Times New Roman\', Times, serif', [94, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: 'Block-A2',
                display: 'block',
                type: 'image',
                rect: ['9px', '69px','96.6%','19.5%','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"Block-A2.png",'0%','0%','541px','156px']
            },
            {
                id: 'Text6',
                display: 'block',
                type: 'text',
                rect: ['299px', '230px','221px','auto','auto', 'auto'],
                text: "If interleaved, fade will only affect one bit each of streams A, B, and C. ",
                align: "left",
                font: ['\'Times New Roman\', Times, serif', [94, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: 'Text7',
                display: 'block',
                type: 'text',
                rect: ['210px', '674px','auto','auto','auto', 'auto'],
                text: "(b) Interleaving without TDM",
                align: "left",
                font: ['\'Times New Roman\', Times, serif', [94, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: 'block-B1',
                display: 'block',
                type: 'image',
                rect: ['12px', '408px','520px','49px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"block-B1.png",'0px','0px']
            },
            {
                id: 'Text8',
                display: 'block',
                type: 'text',
                rect: ['212px', '387','auto','auto','auto', 'auto'],
                text: "This time all data come from one source.",
                align: "left",
                font: ['\'Times New Roman\', Times, serif', [94, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: 'fading2',
                display: 'block',
                type: 'image',
                rect: ['28px', '553px','90.4%','15.4%','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"fading2.png",'0%','0%','506px','123px']
            },
            {
                id: 'Text9',
                display: 'block',
                type: 'text',
                rect: ['224px', '588px','auto','auto','auto', 'auto'],
                text: "A2, A3, and A4 are affected by the fade.",
                align: "left",
                font: ['\'Times New Roman\', Times, serif', [94, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: 'darkshade4',
                display: 'block',
                type: 'image',
                rect: ['57px', '537px','176px','29px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"darkshade4.png",'0px','0px']
            },
            {
                id: 'darkshade3',
                display: 'block',
                type: 'image',
                rect: ['55px', '409px','180px','39px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"darkshade3.png",'0px','0px']
            },
            {
                id: 'Text',
                type: 'text',
                rect: ['133px', '753px','306px','auto','auto', 'auto'],
                text: "Figure 6.17 Interleaving Data Blocks to Spread the Effects of Error Bursts",
                font: ['Times New Roman, Times, serif', [119, "%"], "rgba(0,0,0,1)", "700", "none", ""]
            },
            {
                id: 'Text2',
                display: 'block',
                type: 'text',
                rect: ['114px', '726px','auto','auto','auto', 'auto'],
                text: "Click or Touch on Figure for Each Step of Animation",
                align: "left",
                font: ['\'Times New Roman\', Times, serif', [94, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: 'Text3',
                type: 'text',
                rect: ['246px', '330px','auto','auto','auto', 'auto'],
                text: "(a) TDM stream",
                align: "left",
                font: ['\'Times New Roman\', Times, serif', [94, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: 'block-dark',
                display: 'block',
                type: 'image',
                rect: ['-26px', '179px','612px','38px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"block-dark.png",'0px','0px']
            }],
            symbolInstances: [

            ]
        },
    states: {
        "Base State": {
            "${_Text7}": [
                ["style", "top", '674px'],
                ["style", "left", '210px'],
                ["style", "display", 'block']
            ],
            "${_Text3}": [
                ["style", "left", '246px'],
                ["style", "top", '330px']
            ],
            "${_Text5}": [
                ["style", "top", '235px'],
                ["style", "left", '188px'],
                ["style", "display", 'block']
            ],
            "${_fading2}": [
                ["style", "top", '553px'],
                ["style", "display", 'block'],
                ["style", "left", '28px'],
                ["style", "width", '0%']
            ],
            "${_arrow2}": [
                ["style", "top", '428px'],
                ["style", "display", 'block'],
                ["style", "left", '138px'],
                ["style", "width", '0%']
            ],
            "${_Text2}": [
                ["style", "top", '726px'],
                ["style", "display", 'block'],
                ["style", "left", '114px'],
                ["style", "font-size", '94%']
            ],
            "${_darkshade4}": [
                ["style", "top", '537px'],
                ["style", "left", '57px'],
                ["style", "display", 'block']
            ],
            "${_fading1}": [
                ["style", "top", '212px'],
                ["style", "display", 'block'],
                ["style", "left", '27px'],
                ["style", "width", '0%']
            ],
            "${_block-B2}": [
                ["style", "top", '425px'],
                ["style", "left", '28px'],
                ["style", "display", 'block']
            ],
            "${_Text8}": [
                ["style", "left", '212px'],
                ["style", "display", 'block']
            ],
            "${_Text4}": [
                ["style", "left", '226px'],
                ["style", "display", 'block']
            ],
            "${_block-B1}": [
                ["style", "top", '408px'],
                ["style", "left", '12px'],
                ["style", "display", 'block']
            ],
            "${_arrow34}": [
                ["style", "height", '0%'],
                ["style", "display", 'block'],
                ["style", "left", '138px'],
                ["style", "top", '428px']
            ],
            "${_arrow4}": [
                ["style", "height", '0%'],
                ["style", "display", 'block'],
                ["style", "left", '351px'],
                ["style", "top", '425px']
            ],
            "${_darkshade3}": [
                ["style", "top", '409px'],
                ["style", "left", '55px'],
                ["style", "display", 'block']
            ],
            "${_Text10}": [
                ["style", "top", '448px'],
                ["style", "display", 'block'],
                ["style", "left", '376px'],
                ["style", "width", '164px']
            ],
            "${_Block-A1}": [
                ["style", "top", '55px'],
                ["style", "display", 'block'],
                ["style", "left", '26px'],
                ["style", "width", '0%']
            ],
            "${_Text6}": [
                ["style", "top", '230px'],
                ["style", "display", 'block'],
                ["style", "left", '238px'],
                ["style", "width", '306px']
            ],
            "${_Block-A2}": [
                ["style", "height", '0%'],
                ["style", "display", 'block'],
                ["style", "left", '9px'],
                ["style", "top", '69px']
            ],
            "${_Text}": [
                ["style", "top", '753px'],
                ["style", "width", '306px'],
                ["style", "font-weight", '700'],
                ["style", "font-family", 'Times New Roman, Times, serif'],
                ["style", "left", '133px'],
                ["style", "font-size", '119%']
            ],
            "${_arrow1}": [
                ["style", "height", '0%'],
                ["style", "display", 'block'],
                ["style", "left", '82px'],
                ["style", "top", '425px']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(255,255,255,1)'],
                ["style", "width", '560px'],
                ["style", "height", '800px'],
                ["style", "overflow", 'hidden']
            ],
            "${_Text9}": [
                ["style", "top", '588px'],
                ["style", "left", '224px'],
                ["style", "display", 'block']
            ],
            "${_block-A1-dark}": [
                ["style", "top", '52px'],
                ["style", "left", '9px'],
                ["style", "display", 'block']
            ],
            "${_block-dark}": [
                ["style", "top", '179px'],
                ["style", "left", '-26px'],
                ["style", "display", 'block']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 12805,
            autoPlay: true,
            timeline: [
                { id: "eid10", tween: [ "style", "${_fading1}", "width", '90.36%', { fromValue: '0%'}], position: 1460, duration: 1500 },
                { id: "eid89", tween: [ "style", "${_darkshade4}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid90", tween: [ "style", "${_darkshade4}", "display", 'block', { fromValue: 'none'}], position: 12595, duration: 0 },
                { id: "eid76", tween: [ "style", "${_arrow34}", "height", '14.63%', { fromValue: '0%'}], position: 9315, duration: 800 },
                { id: "eid1", tween: [ "style", "${_Block-A1}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid2", tween: [ "style", "${_Block-A1}", "display", 'block', { fromValue: 'none'}], position: 205, duration: 0 },
                { id: "eid13", tween: [ "style", "${_Block-A1}", "display", 'none', { fromValue: 'block'}], position: 3455, duration: 0 },
                { id: "eid14", tween: [ "style", "${_block-A1-dark}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid15", tween: [ "style", "${_block-A1-dark}", "display", 'block', { fromValue: 'none'}], position: 3455, duration: 0 },
                { id: "eid97", tween: [ "style", "${_block-dark}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid98", tween: [ "style", "${_block-dark}", "display", 'block', { fromValue: 'none'}], position: 5192, duration: 0 },
                { id: "eid86", tween: [ "style", "${_Text10}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid87", tween: [ "style", "${_Text10}", "display", 'block', { fromValue: 'none'}], position: 12377, duration: 0 },
                { id: "eid91", tween: [ "style", "${_Text10}", "display", 'none', { fromValue: 'block'}], position: 12805, duration: 0 },
                { id: "eid5", tween: [ "style", "${_Text4}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid6", tween: [ "style", "${_Text4}", "display", 'block', { fromValue: 'none'}], position: 1290, duration: 0 },
                { id: "eid16", tween: [ "style", "${_Text4}", "display", 'none', { fromValue: 'block'}], position: 1460, duration: 0 },
                { id: "eid11", tween: [ "style", "${_Text5}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid12", tween: [ "style", "${_Text5}", "display", 'block', { fromValue: 'none'}], position: 3250, duration: 0 },
                { id: "eid22", tween: [ "style", "${_Text5}", "display", 'none', { fromValue: 'block'}], position: 3686, duration: 0 },
                { id: "eid81", tween: [ "style", "${_arrow4}", "height", '15.38%', { fromValue: '0%'}], position: 9898, duration: 800 },
                { id: "eid85", tween: [ "style", "${_block-B2}", "top", '531px', { fromValue: '425px'}], position: 10928, duration: 1160 },
                { id: "eid42", tween: [ "style", "${_fading2}", "width", '90.36%', { fromValue: '0%'}], position: 6086, duration: 1500 },
                { id: "eid51", tween: [ "style", "${_arrow2}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid52", tween: [ "style", "${_arrow2}", "display", 'block', { fromValue: 'none'}], position: 8800, duration: 0 },
                { id: "eid78", tween: [ "style", "${_arrow4}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid79", tween: [ "style", "${_arrow4}", "display", 'block', { fromValue: 'none'}], position: 9898, duration: 0 },
                { id: "eid92", tween: [ "style", "${_Text2}", "display", 'none', { fromValue: 'block'}], position: 12805, duration: 0 },
                { id: "eid47", tween: [ "style", "${_arrow1}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid48", tween: [ "style", "${_arrow1}", "display", 'block', { fromValue: 'none'}], position: 8250, duration: 0 },
                { id: "eid102", tween: [ "style", "${_Text6}", "width", '306px', { fromValue: '306px'}], position: 5000, duration: 0 },
                { id: "eid7", tween: [ "style", "${_fading1}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid8", tween: [ "style", "${_fading1}", "display", 'block', { fromValue: 'none'}], position: 1460, duration: 0 },
                { id: "eid27", tween: [ "style", "${_Text6}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid28", tween: [ "style", "${_Text6}", "display", 'block', { fromValue: 'none'}], position: 4952, duration: 0 },
                { id: "eid31", tween: [ "style", "${_Text6}", "display", 'none', { fromValue: 'block'}], position: 5381, duration: 0 },
                { id: "eid36", tween: [ "style", "${_Text8}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid37", tween: [ "style", "${_Text8}", "display", 'block', { fromValue: 'none'}], position: 5901, duration: 0 },
                { id: "eid38", tween: [ "style", "${_Text8}", "display", 'none', { fromValue: 'block'}], position: 6086, duration: 0 },
                { id: "eid43", tween: [ "style", "${_Text9}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid44", tween: [ "style", "${_Text9}", "display", 'block', { fromValue: 'none'}], position: 7840, duration: 0 },
                { id: "eid88", tween: [ "style", "${_Text9}", "display", 'none', { fromValue: 'block'}], position: 8250, duration: 0 },
                { id: "eid45", tween: [ "style", "${_darkshade3}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid46", tween: [ "style", "${_darkshade3}", "display", 'block', { fromValue: 'none'}], position: 8044, duration: 0 },
                { id: "eid4", tween: [ "style", "${_Block-A1}", "width", '91.61%', { fromValue: '0%'}], position: 205, duration: 800 },
                { id: "eid99", tween: [ "style", "${_Text5}", "left", '188px', { fromValue: '188px'}], position: 3250, duration: 0 },
                { id: "eid32", tween: [ "style", "${_Text7}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid33", tween: [ "style", "${_Text7}", "display", 'block', { fromValue: 'none'}], position: 5381, duration: 0 },
                { id: "eid23", tween: [ "style", "${_Block-A2}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid24", tween: [ "style", "${_Block-A2}", "display", 'block', { fromValue: 'none'}], position: 3686, duration: 0 },
                { id: "eid50", tween: [ "style", "${_arrow1}", "height", '15.38%', { fromValue: '0%'}], position: 8250, duration: 800 },
                { id: "eid39", tween: [ "style", "${_fading2}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid40", tween: [ "style", "${_fading2}", "display", 'block', { fromValue: 'none'}], position: 6086, duration: 0 },
                { id: "eid73", tween: [ "style", "${_arrow34}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid74", tween: [ "style", "${_arrow34}", "display", 'block', { fromValue: 'none'}], position: 9315, duration: 0 },
                { id: "eid82", tween: [ "style", "${_block-B2}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid83", tween: [ "style", "${_block-B2}", "display", 'block', { fromValue: 'none'}], position: 10928, duration: 0 },
                { id: "eid26", tween: [ "style", "${_Block-A2}", "height", '19.5%', { fromValue: '0%'}], position: 3686, duration: 1000 },
                { id: "eid34", tween: [ "style", "${_block-B1}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid35", tween: [ "style", "${_block-B1}", "display", 'block', { fromValue: 'none'}], position: 5624, duration: 0 },
                { id: "eid101", tween: [ "style", "${_Text6}", "left", '238px', { fromValue: '238px'}], position: 5000, duration: 0 },
                { id: "eid54", tween: [ "style", "${_arrow2}", "width", '31.08%', { fromValue: '0%'}], position: 8800, duration: 800 }            ]
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
})(jQuery, AdobeEdge, "EDGE-1109975715");
