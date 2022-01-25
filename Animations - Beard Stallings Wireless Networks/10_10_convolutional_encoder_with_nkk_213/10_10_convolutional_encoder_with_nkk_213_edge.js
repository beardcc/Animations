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
                id: 'Text3',
                type: 'text',
                rect: ['157px', '565px','auto','auto','auto', 'auto'],
                text: "Figure 10.10  Convolutional Encoder with (<i>n, k, K</i>) = (2, 1, 3)",
                align: "left",
                font: ['\'Times New Roman\', Times, serif', [119, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: 'Text4',
                display: 'block',
                type: 'text',
                rect: ['210px', '540px','auto','auto','auto', 'auto'],
                text: "Click or Touch on Figure for Each Step of the Animation",
                align: "left",
                font: ['\'Times New Roman\', Times, serif', [94, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: 'Text2',
                display: 'block',
                type: 'text',
                rect: ['546px', '475px','190px','30px','auto', 'auto'],
                text: "(b) Encoder state diagram",
                align: "left",
                font: ['\'Times New Roman\', Times, serif', [94, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: 'c1',
                display: 'block',
                type: 'image',
                rect: ['641px', '44px','215px','62px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"c1.png",'0px','0px']
            },
            {
                id: 'Text8',
                display: 'block',
                type: 'text',
                rect: ['667px', '93px','127px','71px','auto', 'auto'],
                text: "If the input bit = 1, we output 11 and go to state 10.",
                align: "left",
                font: ['\'Times New Roman\', Times, serif', [94, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: 'Text9',
                display: 'block',
                type: 'text',
                rect: ['614px', '16px','179px','40px','auto', 'auto'],
                text: "If a 0 arrives we output 00 and return to the state 00.",
                align: "left",
                font: ['\'Times New Roman\', Times, serif', [94, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: 'p12',
                display: 'block',
                type: 'image',
                rect: ['571px', '98px','11.4%','19.8%','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"p.1.2.png",'0%','0%','91px','119px']
            },
            {
                id: 'p11',
                display: 'block',
                type: 'image',
                rect: ['576px', '75px','76px','40px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"p1.1.png",'0px','0px']
            },
            {
                id: 'p13',
                display: 'block',
                type: 'image',
                rect: ['531px', '29px','12.4%','13.7%','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"p.1.3.png",'0%','0%','99px','82px']
            },
            {
                id: 'p14',
                display: 'block',
                type: 'image',
                rect: ['455px', '102px','239px','331px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"p.1.4.png",'0px','0px']
            },
            {
                id: 'arrow',
                display: 'block',
                type: 'image',
                rect: ['532px', '84px','99px','204px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"arrow.png",'0px','0px']
            },
            {
                id: 'Text10',
                display: 'block',
                type: 'text',
                rect: ['684px', '338px','166px','49px','auto', 'auto'],
                text: "This diagram produces the same outputs as the shift register.",
                align: "left",
                font: ['\'Times New Roman\', Times, serif', [94, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: 'Text5',
                display: 'block',
                type: 'text',
                rect: ['763px', '389px','76px','30px','auto', 'auto'],
                text: "in part (a)",
                align: "left",
                font: ['\'Times New Roman\', Times, serif', [94, "%"], "rgba(0,0,0,1)", "bold", "underline", "italic"]
            },
            {
                id: 'vn1',
                display: 'block',
                type: 'image',
                rect: ['306px', '208px','17.6%','5.7%','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"vn1.png",'0%','0%','141px','34px']
            },
            {
                id: 'vn11',
                display: 'block',
                type: 'image',
                rect: ['325px', '204px','14.5%','6.7%','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"vn11.png",'0%','0%','116px','40px']
            },
            {
                id: 'vn2',
                display: 'block',
                type: 'image',
                rect: ['303px', '271px','15.9%','5.7%','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"vn2.png",'0%','0%','127px','34px']
            },
            {
                id: 'p4',
                display: 'block',
                type: 'image',
                rect: ['10px', '237px','7.9%','5%','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"p4.png",'0%','0%','63px','30px']
            },
            {
                id: 'p3',
                display: 'block',
                type: 'image',
                rect: ['310px', '230px','15.4%','8.2%','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"p3.png",'0%','0%','123px','49px']
            },
            {
                id: 'p2',
                display: 'block',
                type: 'image',
                rect: ['53px', '242px','285px','166px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"p2.png",'0px','0px']
            },
            {
                id: 'comment2',
                display: 'block',
                type: 'image',
                rect: ['310px', '288px','290px','58px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"comment2.png",'0px','0px']
            },
            {
                id: 'comment3',
                display: 'block',
                type: 'image',
                rect: ['430px', '245px','319px','30px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"comment3.png",'0px','0px']
            },
            {
                id: 'Text6',
                display: 'block',
                type: 'text',
                rect: ['10px', '279px','76px','95px','auto', 'auto'],
                text: "New input bits shift into the registers.",
                align: "left",
                font: ['\'Times New Roman\', Times, serif', [94, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: 'P1',
                display: 'block',
                type: 'image',
                rect: ['58px', '129px','285px','166px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"P1.png",'0px','0px']
            },
            {
                id: 'comment1',
                display: 'block',
                type: 'image',
                rect: ['143px', '75px','317px','58px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"comment1.png",'0px','0px']
            },
            {
                id: 'Text',
                display: 'block',
                type: 'text',
                rect: ['90px', '402px','166px','30px','auto', 'auto'],
                text: "(a) Encoder shift register",
                font: ['Times New Roman, Times, serif', [94, "%"], "rgba(0,0,0,1)", "700", "none", ""]
            }],
            symbolInstances: [

            ]
        },
    states: {
        "Base State": {
            "${_p13}": [
                ["style", "display", 'block'],
                ["style", "top", '29px'],
                ["style", "left", '531px'],
                ["style", "width", '0%']
            ],
            "${_Text3}": [
                ["style", "top", '565px'],
                ["style", "font-size", '119%'],
                ["style", "left", '157px'],
                ["style", "width", '0px']
            ],
            "${_Text8}": [
                ["style", "display", 'block'],
                ["style", "top", '93px'],
                ["style", "left", '667px'],
                ["style", "width", '127px']
            ],
            "${_p12}": [
                ["style", "display", 'block'],
                ["style", "top", '98px'],
                ["style", "left", '571px'],
                ["style", "height", '0%']
            ],
            "${_vn2}": [
                ["style", "display", 'block'],
                ["style", "top", '271px'],
                ["style", "left", '303px'],
                ["style", "width", '0%']
            ],
            "${_comment1}": [
                ["style", "top", '75px'],
                ["style", "left", '143px'],
                ["style", "display", 'block']
            ],
            "${_c1}": [
                ["style", "top", '18px'],
                ["style", "display", 'block'],
                ["style", "left", '623px'],
                ["style", "width", '218px']
            ],
            "${_p3}": [
                ["style", "display", 'block'],
                ["style", "top", '230px'],
                ["style", "left", '310px'],
                ["style", "width", '0%']
            ],
            "${_Text5}": [
                ["style", "top", '389px'],
                ["style", "font-style", 'italic'],
                ["style", "display", 'block'],
                ["style", "text-decoration", 'underline'],
                ["style", "left", '763px']
            ],
            "${_comment2}": [
                ["style", "top", '288px'],
                ["style", "left", '310px'],
                ["style", "display", 'block']
            ],
            "${_p14}": [
                ["style", "top", '102px'],
                ["style", "left", '455px'],
                ["style", "display", 'block']
            ],
            "${_p11}": [
                ["style", "top", '75px'],
                ["style", "left", '576px'],
                ["style", "display", 'block']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(255,255,255,1)'],
                ["style", "overflow", 'hidden'],
                ["style", "height", '600px'],
                ["style", "width", '850px']
            ],
            "${_arrow}": [
                ["style", "top", '84px'],
                ["style", "left", '532px'],
                ["style", "display", 'block']
            ],
            "${_Text}": [
                ["style", "top", '402px'],
                ["style", "font-weight", '700'],
                ["style", "display", 'block'],
                ["style", "font-family", 'Times New Roman, Times, serif'],
                ["style", "left", '90px'],
                ["style", "font-size", '94%']
            ],
            "${_vn1}": [
                ["style", "display", 'block'],
                ["style", "top", '208px'],
                ["style", "left", '306px'],
                ["style", "width", '0%']
            ],
            "${_Text4}": [
                ["style", "top", '540px'],
                ["style", "font-size", '94%'],
                ["style", "display", 'block'],
                ["style", "height", '25px'],
                ["style", "left", '210px'],
                ["style", "width", '374px']
            ],
            "${_Text10}": [
                ["style", "display", 'block'],
                ["style", "top", '353px'],
                ["style", "left", '675px'],
                ["style", "width", '166px']
            ],
            "${_Text6}": [
                ["style", "display", 'block']
            ],
            "${_p4}": [
                ["style", "display", 'block'],
                ["style", "top", '237px'],
                ["style", "left", '10px'],
                ["style", "width", '0%']
            ],
            "${_comment3}": [
                ["style", "top", '245px'],
                ["style", "left", '430px'],
                ["style", "display", 'block']
            ],
            "${_P1}": [
                ["style", "top", '129px'],
                ["style", "left", '58px'],
                ["style", "display", 'block']
            ],
            "${_vn11}": [
                ["style", "display", 'block'],
                ["style", "top", '204px'],
                ["style", "left", '325px'],
                ["style", "width", '0%']
            ],
            "${_Text9}": [
                ["style", "display", 'block'],
                ["style", "width", '179px']
            ],
            "${_p2}": [
                ["style", "top", '242px'],
                ["style", "left", '53px'],
                ["style", "display", 'block']
            ],
            "${_Text2}": [
                ["style", "display", 'block'],
                ["style", "width", '190px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 12000,
            autoPlay: true,
            timeline: [
                { id: "eid63", tween: [ "style", "${_arrow}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid64", tween: [ "style", "${_arrow}", "display", 'block', { fromValue: 'none'}], position: 11500, duration: 0 },
                { id: "eid22", tween: [ "style", "${_vn2}", "width", '15.88%', { fromValue: '0%'}], position: 2250, duration: 1000 },
                { id: "eid79", tween: [ "style", "${_Text4}", "width", '374px', { fromValue: '374px'}], position: 11635, duration: 0 },
                { id: "eid61", tween: [ "style", "${_p14}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid62", tween: [ "style", "${_p14}", "display", 'block', { fromValue: 'none'}], position: 11500, duration: 0 },
                { id: "eid59", tween: [ "style", "${_Text10}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid60", tween: [ "style", "${_Text10}", "display", 'block', { fromValue: 'none'}], position: 11290, duration: 0 },
                { id: "eid65", tween: [ "style", "${_Text10}", "display", 'none', { fromValue: 'block'}], position: 11750, duration: 0 },
                { id: "eid71", tween: [ "style", "${_c1}", "left", '623px', { fromValue: '623px'}], position: 7586, duration: 0 },
                { id: "eid47", tween: [ "style", "${_p12}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid48", tween: [ "style", "${_p12}", "display", 'block', { fromValue: 'none'}], position: 7911, duration: 0 },
                { id: "eid78", tween: [ "style", "${_Text4}", "height", '25px', { fromValue: '25px'}], position: 11635, duration: 0 },
                { id: "eid67", tween: [ "style", "${_c1}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid68", tween: [ "style", "${_c1}", "display", 'block', { fromValue: 'none'}], position: 7155, duration: 0 },
                { id: "eid69", tween: [ "style", "${_c1}", "display", 'none', { fromValue: 'block'}], position: 7625, duration: 0 },
                { id: "eid24", tween: [ "style", "${_comment3}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid25", tween: [ "style", "${_comment3}", "display", 'block', { fromValue: 'none'}], position: 3500, duration: 0 },
                { id: "eid30", tween: [ "style", "${_comment3}", "display", 'none', { fromValue: 'block'}], position: 5345, duration: 0 },
                { id: "eid10", tween: [ "style", "${_vn11}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid11", tween: [ "style", "${_vn11}", "display", 'block', { fromValue: 'none'}], position: 675, duration: 0 },
                { id: "eid57", tween: [ "style", "${_p13}", "width", '12.38%', { fromValue: '0%'}], position: 10250, duration: 650 },
                { id: "eid3", tween: [ "style", "${_P1}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid4", tween: [ "style", "${_P1}", "display", 'block', { fromValue: 'none'}], position: 430, duration: 0 },
                { id: "eid19", tween: [ "style", "${_vn2}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid20", tween: [ "style", "${_vn2}", "display", 'block', { fromValue: 'none'}], position: 2250, duration: 0 },
                { id: "eid38", tween: [ "style", "${_Text2}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid39", tween: [ "style", "${_Text2}", "display", 'block', { fromValue: 'none'}], position: 7000, duration: 0 },
                { id: "eid13", tween: [ "style", "${_vn11}", "width", '14.51%', { fromValue: '0%'}], position: 675, duration: 1000 },
                { id: "eid31", tween: [ "style", "${_Text6}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid32", tween: [ "style", "${_Text6}", "display", 'block', { fromValue: 'none'}], position: 5500, duration: 0 },
                { id: "eid37", tween: [ "style", "${_Text6}", "display", 'none', { fromValue: 'block'}], position: 6750, duration: 0 },
                { id: "eid33", tween: [ "style", "${_p4}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid34", tween: [ "style", "${_p4}", "display", 'block', { fromValue: 'none'}], position: 5610, duration: 0 },
                { id: "eid52", tween: [ "style", "${_Text9}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid53", tween: [ "style", "${_Text9}", "display", 'block', { fromValue: 'none'}], position: 9750, duration: 0 },
                { id: "eid58", tween: [ "style", "${_Text9}", "display", 'none', { fromValue: 'block'}], position: 11095, duration: 0 },
                { id: "eid9", tween: [ "style", "${_vn1}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid66", tween: [ "style", "${_Text4}", "display", 'none', { fromValue: 'block'}], position: 12000, duration: 0 },
                { id: "eid54", tween: [ "style", "${_p13}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid55", tween: [ "style", "${_p13}", "display", 'block', { fromValue: 'none'}], position: 10000, duration: 0 },
                { id: "eid72", tween: [ "style", "${_c1}", "width", '218px', { fromValue: '218px'}], position: 7155, duration: 0 },
                { id: "eid45", tween: [ "style", "${_Text8}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid46", tween: [ "style", "${_Text8}", "display", 'block', { fromValue: 'none'}], position: 7828, duration: 0 },
                { id: "eid51", tween: [ "style", "${_Text8}", "display", 'none', { fromValue: 'block'}], position: 9562, duration: 0 },
                { id: "eid5", tween: [ "style", "${_comment1}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid6", tween: [ "style", "${_comment1}", "display", 'block', { fromValue: 'none'}], position: 750, duration: 0 },
                { id: "eid14", tween: [ "style", "${_comment1}", "display", 'none', { fromValue: 'block'}], position: 1815, duration: 0 },
                { id: "eid50", tween: [ "style", "${_p12}", "height", '19.83%', { fromValue: '0%'}], position: 7911, duration: 1500 },
                { id: "eid36", tween: [ "style", "${_p4}", "width", '7.88%', { fromValue: '0%'}], position: 5610, duration: 1000 },
                { id: "eid1", tween: [ "style", "${_Text}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid2", tween: [ "style", "${_Text}", "display", 'block', { fromValue: 'none'}], position: 250, duration: 0 },
                { id: "eid29", tween: [ "style", "${_p3}", "width", '15.38%', { fromValue: '0%'}], position: 3700, duration: 1500 },
                { id: "eid15", tween: [ "style", "${_p2}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid16", tween: [ "style", "${_p2}", "display", 'block', { fromValue: 'none'}], position: 2000, duration: 0 },
                { id: "eid73", tween: [ "style", "${_Text10}", "top", '353px', { fromValue: '353px'}], position: 11290, duration: 0 },
                { id: "eid74", tween: [ "style", "${_Text10}", "left", '675px', { fromValue: '675px'}], position: 11290, duration: 0 },
                { id: "eid42", tween: [ "style", "${_p11}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid43", tween: [ "style", "${_p11}", "display", 'block', { fromValue: 'none'}], position: 7335, duration: 0 },
                { id: "eid70", tween: [ "style", "${_c1}", "top", '18px', { fromValue: '18px'}], position: 7586, duration: 0 },
                { id: "eid26", tween: [ "style", "${_p3}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid27", tween: [ "style", "${_p3}", "display", 'block', { fromValue: 'none'}], position: 3700, duration: 0 },
                { id: "eid75", tween: [ "style", "${_Text5}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid76", tween: [ "style", "${_Text5}", "display", 'block', { fromValue: 'none'}], position: 11290, duration: 0 },
                { id: "eid77", tween: [ "style", "${_Text5}", "display", 'none', { fromValue: 'block'}], position: 11750, duration: 0 },
                { id: "eid17", tween: [ "style", "${_comment2}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid18", tween: [ "style", "${_comment2}", "display", 'block', { fromValue: 'none'}], position: 2170, duration: 0 },
                { id: "eid23", tween: [ "style", "${_comment2}", "display", 'none', { fromValue: 'block'}], position: 3370, duration: 0 }            ]
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
})(jQuery, AdobeEdge, "EDGE-189164327");
