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
                id: 'Rx',
                display: 'block',
                type: 'image',
                rect: ['419px', '57px','265px','376px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"Rx.png",'0px','0px']
            },
            {
                id: 'Tx',
                display: 'block',
                type: 'image',
                rect: ['105px', '57px','265px','376px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"Tx.png",'0px','0px']
            },
            {
                id: 'TxtoRX',
                display: 'block',
                type: 'image',
                rect: ['197px', '49px','368px','343px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"TxtoRX.png",'0px','0px']
            },
            {
                id: 'Sample2',
                display: 'block',
                type: 'image',
                rect: ['106px', '53px','571px','374px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"Sample2.png",'0px','0px']
            },
            {
                id: 'Codeword',
                display: 'block',
                type: 'image',
                rect: ['144px', '197px','163px','44px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"Codeword.png",'0px','0px']
            },
            {
                id: 'CodewordCopy',
                display: 'block',
                type: 'image',
                rect: ['144px', '197px','163px','44px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"Codeword.png",'0px','0px']
            },
            {
                id: 'Codeword2',
                display: 'block',
                type: 'image',
                rect: ['459px', '110px','163px','44px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"Codeword\'.png",'0px','0px']
            },
            {
                id: 'Codeword2Copy',
                display: 'block',
                type: 'image',
                rect: ['459px', '110px','163px','44px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"Codeword\'.png",'0px','0px']
            },
            {
                id: 'Data',
                display: 'block',
                type: 'image',
                rect: ['137px', '130px','156px','44px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"Data.png",'0px','0px']
            },
            {
                id: 'DataCopy',
                display: 'block',
                type: 'image',
                rect: ['137px', '130px','156px','44px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"Data.png",'0px','0px']
            },
            {
                id: 'Data2',
                display: 'block',
                type: 'image',
                rect: ['452px', '193px','156px','44px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"Data.png",'0px','0px']
            },
            {
                id: 'downarrow',
                display: 'block',
                type: 'image',
                rect: ['208px', '163px','16px','41px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"downarrow.png",'0px','0px']
            },
            {
                id: 'downarrowCopy',
                display: 'block',
                type: 'image',
                rect: ['208px', '225px','16px','41px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"downarrow.png",'0px','0px']
            },
            {
                id: 'downarrowCopy2',
                display: 'block',
                type: 'image',
                rect: ['531px', '150px','16px','41px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"downarrow.png",'0px','0px']
            },
            {
                id: 'Errordetection',
                display: 'block',
                type: 'image',
                rect: ['563px', '197px','96px','149px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"Errordetection.png",'0px','0px']
            },
            {
                id: 'FECDecoder',
                display: 'block',
                type: 'image',
                rect: ['498px', '183px','78px','44px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"FECDecoder.png",'0px','0px']
            },
            {
                id: 'FECencoder',
                display: 'block',
                type: 'image',
                rect: ['175px', '191px','78px','44px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"FECencoder.png",'0px','0px']
            },
            {
                id: 'kbits',
                display: 'block',
                type: 'image',
                rect: ['140px', '105px','153px','41px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"kbits.png",'0px','0px']
            },
            {
                id: 'nbits',
                display: 'block',
                type: 'image',
                rect: ['143px', '302px','162px','41px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"nbits.png",'0px','0px']
            },
            {
                id: 'NCR',
                display: 'block',
                type: 'image',
                rect: ['480px', '216px','78px','107px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"NCR.png",'0px','0px']
            },
            {
                id: 'Packet',
                display: 'block',
                type: 'image',
                rect: ['211px', '336px','25px','29px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"Packet.png",'0px','0px']
            },
            {
                id: 'Text',
                type: 'text',
                rect: ['197px', '535px','auto','auto','auto', 'auto'],
                text: "Figure 10.5 Forward Error Correction Process",
                font: ['Times New Roman, Times, serif', [119, "%"], "rgba(0,0,0,1)", "700", "none", ""]
            },
            {
                id: 'Text2',
                display: 'block',
                type: 'text',
                rect: ['199px', '512px','auto','auto','auto', 'auto'],
                text: "Click or Touch on Figure for Each Step of the Animation",
                align: "left",
                font: ['Times New Roman, Times, serif', [94, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: 'Text3',
                display: 'block',
                type: 'text',
                rect: ['140px', '27px','186px','44px','auto', 'auto'],
                text: "Compute the new codeword from the data.",
                align: "left",
                font: ['Times New Roman, Times, serif', [94, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: 'Text4',
                display: 'block',
                type: 'text',
                rect: ['140px', '27px','230px','24px','auto', 'auto'],
                text: "This codeword will increase the size by a factor of <i>n/k</i>.",
                align: "left",
                font: ['Georgia, \'Times New Roman\', Times, serif', [94, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: 'Text5',
                display: 'block',
                type: 'text',
                rect: ['464px', '17px','202px','29px','auto', 'auto'],
                text: "The received codeword may have errors",
                align: "left",
                font: ['Times New Roman, Times, serif', [94, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: 'Text6',
                display: 'block',
                type: 'text',
                rect: ['439px', '427px','314px','76px','auto', 'auto'],
                text: "Attempt to correct the frame by finding a valid codeword that is close. If so, the frame is assumed to come from the data for that nearby codeword.",
                align: "left",
                font: ['Times New Roman, Times, serif', [94, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: 'Text7',
                display: 'block',
                type: 'text',
                rect: ['436px', '433px','231px','60px','auto', 'auto'],
                text: "If the frame cannot be corrected indicate an error",
                align: "left",
                font: ['Times New Roman, Times, serif', [94, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
            }],
            symbolInstances: [

            ]
        },
    states: {
        "Base State": {
            "${_Text7}": [
                ["style", "top", '433px'],
                ["style", "display", 'block'],
                ["style", "font-family", 'Times New Roman, Times, serif'],
                ["style", "left", '436px'],
                ["style", "width", '231px']
            ],
            "${_Text3}": [
                ["style", "top", '27px'],
                ["style", "display", 'block'],
                ["style", "font-family", 'Times New Roman, Times, serif'],
                ["style", "left", '140px'],
                ["style", "width", '165px']
            ],
            "${_Text5}": [
                ["style", "top", '17px'],
                ["style", "display", 'block'],
                ["style", "font-family", 'Times New Roman, Times, serif'],
                ["style", "left", '464px'],
                ["style", "width", '158px']
            ],
            "${_Data2}": [
                ["style", "top", '193px'],
                ["style", "left", '452px'],
                ["style", "display", 'block']
            ],
            "${_Codeword2Copy}": [
                ["style", "top", '110px'],
                ["style", "left", '459px'],
                ["style", "display", 'block']
            ],
            "${_Text2}": [
                ["style", "top", '503px'],
                ["style", "width", '373px'],
                ["style", "display", 'block'],
                ["style", "font-family", 'Times New Roman, Times, serif'],
                ["style", "left", '205px'],
                ["style", "font-size", '94%']
            ],
            "${_downarrowCopy2}": [
                ["style", "top", '150px'],
                ["style", "left", '531px'],
                ["style", "display", 'block']
            ],
            "${_FECDecoder}": [
                ["style", "top", '183px'],
                ["style", "left", '498px'],
                ["style", "display", 'block']
            ],
            "${_CodewordCopy}": [
                ["style", "top", '258px'],
                ["style", "left", '144px'],
                ["style", "display", 'block']
            ],
            "${_DataCopy}": [
                ["style", "top", '130px'],
                ["style", "left", '137px'],
                ["style", "display", 'block']
            ],
            "${_Codeword}": [
                ["style", "top", '197px'],
                ["style", "left", '144px'],
                ["style", "display", 'block']
            ],
            "${_Data}": [
                ["style", "top", '130px'],
                ["style", "left", '137px'],
                ["style", "display", 'block']
            ],
            "${_Text4}": [
                ["style", "top", '27px'],
                ["style", "height", '24px'],
                ["style", "display", 'block'],
                ["style", "left", '140px'],
                ["style", "width", '200px']
            ],
            "${_nbits}": [
                ["style", "top", '302px'],
                ["style", "left", '143px'],
                ["style", "display", 'block']
            ],
            "${_Rx}": [
                ["style", "top", '57px'],
                ["style", "left", '419px'],
                ["style", "display", 'block']
            ],
            "${_downarrow}": [
                ["style", "top", '163px'],
                ["style", "left", '208px'],
                ["style", "display", 'block']
            ],
            "${_Tx}": [
                ["style", "top", '57px'],
                ["style", "left", '105px'],
                ["style", "display", 'block']
            ],
            "${_Text6}": [
                ["style", "display", 'block'],
                ["style", "font-family", 'Times New Roman, Times, serif']
            ],
            "${_Codeword2}": [
                ["style", "top", '110px'],
                ["style", "left", '459px'],
                ["style", "display", 'block']
            ],
            "${_downarrowCopy}": [
                ["style", "top", '225px'],
                ["style", "left", '208px'],
                ["style", "display", 'block']
            ],
            "${_NCR}": [
                ["style", "top", '216px'],
                ["style", "left", '480px'],
                ["style", "display", 'block']
            ],
            "${_kbits}": [
                ["style", "top", '105px'],
                ["style", "left", '140px'],
                ["style", "display", 'block']
            ],
            "${_Errordetection}": [
                ["style", "top", '197px'],
                ["style", "left", '563px'],
                ["style", "display", 'block']
            ],
            "${_Text}": [
                ["style", "top", '535px'],
                ["style", "width", '388px'],
                ["style", "font-weight", '700'],
                ["style", "font-family", 'Times New Roman, Times, serif'],
                ["style", "left", '197px'],
                ["style", "font-size", '119%']
            ],
            "${_FECencoder}": [
                ["style", "top", '191px'],
                ["style", "left", '175px'],
                ["style", "display", 'block']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(255,255,255,1)'],
                ["style", "width", '800px'],
                ["style", "height", '576px'],
                ["style", "overflow", 'hidden']
            ],
            "${_Packet}": [
                ["style", "top", '336px'],
                ["style", "left", '211px'],
                ["style", "display", 'block']
            ],
            "${_Sample2}": [
                ["style", "top", '53px'],
                ["style", "left", '106px'],
                ["style", "display", 'block']
            ],
            "${_TxtoRX}": [
                ["style", "top", '49px'],
                ["style", "left", '197px'],
                ["style", "display", 'block']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 13000,
            autoPlay: true,
            timeline: [
                { id: "eid120", tween: [ "style", "${_Text3}", "width", '165px', { fromValue: '165px'}], position: 445, duration: 0 },
                { id: "eid26", tween: [ "style", "${_TxtoRX}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid27", tween: [ "style", "${_TxtoRX}", "display", 'block', { fromValue: 'none'}], position: 4000, duration: 0 },
                { id: "eid103", tween: [ "style", "${_TxtoRX}", "display", 'none', { fromValue: 'block'}], position: 13000, duration: 0 },
                { id: "eid80", tween: [ "style", "${_NCR}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid81", tween: [ "style", "${_NCR}", "display", 'block', { fromValue: 'none'}], position: 10140, duration: 0 },
                { id: "eid92", tween: [ "style", "${_NCR}", "display", 'none', { fromValue: 'block'}], position: 13000, duration: 0 },
                { id: "eid18", tween: [ "style", "${_nbits}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid19", tween: [ "style", "${_nbits}", "display", 'block', { fromValue: 'none'}], position: 2500, duration: 0 },
                { id: "eid100", tween: [ "style", "${_nbits}", "display", 'none', { fromValue: 'block'}], position: 13000, duration: 0 },
                { id: "eid3", tween: [ "style", "${_FECencoder}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid4", tween: [ "style", "${_FECencoder}", "display", 'block', { fromValue: 'none'}], position: 250, duration: 0 },
                { id: "eid98", tween: [ "style", "${_FECencoder}", "display", 'none', { fromValue: 'block'}], position: 13000, duration: 0 },
                { id: "eid29", tween: [ "style", "${_CodewordCopy}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid30", tween: [ "style", "${_CodewordCopy}", "display", 'block', { fromValue: 'none'}], position: 4250, duration: 0 },
                { id: "eid32", tween: [ "style", "${_CodewordCopy}", "display", 'none', { fromValue: 'block'}], position: 5355, duration: 0 },
                { id: "eid96", tween: [ "style", "${_CodewordCopy}", "display", 'none', { fromValue: 'none'}], position: 13000, duration: 0 },
                { id: "eid7", tween: [ "style", "${_downarrow}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid8", tween: [ "style", "${_downarrow}", "display", 'block', { fromValue: 'none'}], position: 445, duration: 0 },
                { id: "eid104", tween: [ "style", "${_downarrow}", "display", 'none', { fromValue: 'block'}], position: 13000, duration: 0 },
                { id: "eid21", tween: [ "style", "${_Text4}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid22", tween: [ "style", "${_Text4}", "display", 'block', { fromValue: 'none'}], position: 3000, duration: 0 },
                { id: "eid23", tween: [ "style", "${_Text4}", "display", 'none', { fromValue: 'block'}], position: 3500, duration: 0 },
                { id: "eid90", tween: [ "style", "${_Text4}", "display", 'none', { fromValue: 'none'}], position: 13000, duration: 0 },
                { id: "eid33", tween: [ "style", "${_Packet}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid34", tween: [ "style", "${_Packet}", "display", 'block', { fromValue: 'none'}], position: 5355, duration: 0 },
                { id: "eid63", tween: [ "style", "${_Packet}", "display", 'none', { fromValue: 'block'}], position: 7750, duration: 0 },
                { id: "eid94", tween: [ "style", "${_Packet}", "display", 'none', { fromValue: 'none'}], position: 13000, duration: 0 },
                { id: "eid1", tween: [ "style", "${_Data}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid6", tween: [ "style", "${_Data}", "display", 'block', { fromValue: 'none'}], position: 250, duration: 0 },
                { id: "eid93", tween: [ "style", "${_Data}", "display", 'none', { fromValue: 'block'}], position: 13000, duration: 0 },
                { id: "eid113", tween: [ "style", "${_Tx}", "display", 'none', { fromValue: 'block'}], position: 13000, duration: 0 },
                { id: "eid69", tween: [ "style", "${_FECDecoder}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid70", tween: [ "style", "${_FECDecoder}", "display", 'block', { fromValue: 'none'}], position: 8690, duration: 0 },
                { id: "eid97", tween: [ "style", "${_FECDecoder}", "display", 'none', { fromValue: 'block'}], position: 13000, duration: 0 },
                { id: "eid64", tween: [ "style", "${_Codeword2}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid65", tween: [ "style", "${_Codeword2}", "display", 'block', { fromValue: 'none'}], position: 7750, duration: 0 },
                { id: "eid101", tween: [ "style", "${_Codeword2}", "display", 'none', { fromValue: 'block'}], position: 13000, duration: 0 },
                { id: "eid117", tween: [ "style", "${_Text2}", "display", 'none', { fromValue: 'block'}], position: 13000, duration: 0 },
                { id: "eid79", tween: [ "style", "${_Data2}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid82", tween: [ "style", "${_Data2}", "display", 'block', { fromValue: 'none'}], position: 10250, duration: 0 },
                { id: "eid105", tween: [ "style", "${_Data2}", "display", 'none', { fromValue: 'block'}], position: 13000, duration: 0 },
                { id: "eid67", tween: [ "style", "${_Text6}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid68", tween: [ "style", "${_Text6}", "display", 'block', { fromValue: 'none'}], position: 8400, duration: 0 },
                { id: "eid84", tween: [ "style", "${_Text6}", "display", 'none', { fromValue: 'block'}], position: 11250, duration: 0 },
                { id: "eid110", tween: [ "style", "${_Text6}", "display", 'none', { fromValue: 'none'}], position: 13000, duration: 0 },
                { id: "eid75", tween: [ "style", "${_Codeword2Copy}", "top", '181px', { fromValue: '110px'}], position: 9118, duration: 882 },
                { id: "eid73", tween: [ "style", "${_Codeword2Copy}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid74", tween: [ "style", "${_Codeword2Copy}", "display", 'block', { fromValue: 'none'}], position: 9118, duration: 0 },
                { id: "eid76", tween: [ "style", "${_Codeword2Copy}", "display", 'none', { fromValue: 'block'}], position: 10000, duration: 0 },
                { id: "eid102", tween: [ "style", "${_Codeword2Copy}", "display", 'none', { fromValue: 'none'}], position: 13000, duration: 0 },
                { id: "eid31", tween: [ "style", "${_CodewordCopy}", "top", '320px', { fromValue: '258px'}], position: 4250, duration: 1105 },
                { id: "eid24", tween: [ "style", "${_Text5}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid25", tween: [ "style", "${_Text5}", "display", 'block', { fromValue: 'none'}], position: 3750, duration: 0 },
                { id: "eid66", tween: [ "style", "${_Text5}", "display", 'none', { fromValue: 'block'}], position: 8065, duration: 0 },
                { id: "eid109", tween: [ "style", "${_Text5}", "display", 'none', { fromValue: 'none'}], position: 13000, duration: 0 },
                { id: "eid118", tween: [ "style", "${_Text3}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid119", tween: [ "style", "${_Text3}", "display", 'block', { fromValue: 'none'}], position: 175, duration: 0 },
                { id: "eid20", tween: [ "style", "${_Text3}", "display", 'none', { fromValue: 'block'}], position: 2750, duration: 0 },
                { id: "eid108", tween: [ "style", "${_Text3}", "display", 'none', { fromValue: 'none'}], position: 13000, duration: 0 },
                { id: "eid56", tween: [ "style", "${_Packet}", "left", '211px', { fromValue: '211px'}], position: 5355, duration: 0 },
                { id: "eid59", tween: [ "style", "${_Packet}", "left", '375px', { fromValue: '211px'}], position: 5811, duration: 439 },
                { id: "eid61", tween: [ "style", "${_Packet}", "left", '526px', { fromValue: '375px'}], position: 6811, duration: 520 },
                { id: "eid83", tween: [ "style", "${_Data2}", "top", '314px', { fromValue: '193px'}], position: 10250, duration: 750 },
                { id: "eid121", tween: [ "style", "${_Text5}", "width", '158px', { fromValue: '158px'}], position: 3965, duration: 0 },
                { id: "eid13", tween: [ "style", "${_Codeword}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid14", tween: [ "style", "${_Codeword}", "display", 'block', { fromValue: 'none'}], position: 1595, duration: 0 },
                { id: "eid106", tween: [ "style", "${_Codeword}", "display", 'none', { fromValue: 'block'}], position: 13000, duration: 0 },
                { id: "eid87", tween: [ "style", "${_Errordetection}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid88", tween: [ "style", "${_Errordetection}", "display", 'block', { fromValue: 'none'}], position: 11895, duration: 0 },
                { id: "eid111", tween: [ "style", "${_Errordetection}", "display", 'none', { fromValue: 'block'}], position: 13000, duration: 0 },
                { id: "eid85", tween: [ "style", "${_Text7}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid86", tween: [ "style", "${_Text7}", "display", 'block', { fromValue: 'none'}], position: 11500, duration: 0 },
                { id: "eid89", tween: [ "style", "${_Text7}", "display", 'none', { fromValue: 'block'}], position: 12250, duration: 0 },
                { id: "eid91", tween: [ "style", "${_Text7}", "display", 'none', { fromValue: 'none'}], position: 13000, duration: 0 },
                { id: "eid114", tween: [ "style", "${_Rx}", "display", 'none', { fromValue: 'block'}], position: 13000, duration: 0 },
                { id: "eid15", tween: [ "style", "${_downarrowCopy}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid16", tween: [ "style", "${_downarrowCopy}", "display", 'block', { fromValue: 'none'}], position: 1500, duration: 0 },
                { id: "eid99", tween: [ "style", "${_downarrowCopy}", "display", 'none', { fromValue: 'block'}], position: 13000, duration: 0 },
                { id: "eid115", tween: [ "style", "${_Sample2}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid116", tween: [ "style", "${_Sample2}", "display", 'block', { fromValue: 'none'}], position: 13000, duration: 0 },
                { id: "eid2", tween: [ "style", "${_kbits}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid5", tween: [ "style", "${_kbits}", "display", 'block', { fromValue: 'none'}], position: 310, duration: 0 },
                { id: "eid107", tween: [ "style", "${_kbits}", "display", 'none', { fromValue: 'block'}], position: 13000, duration: 0 },
                { id: "eid71", tween: [ "style", "${_downarrowCopy2}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid72", tween: [ "style", "${_downarrowCopy2}", "display", 'block', { fromValue: 'none'}], position: 8948, duration: 0 },
                { id: "eid112", tween: [ "style", "${_downarrowCopy2}", "display", 'none', { fromValue: 'block'}], position: 13000, duration: 0 },
                { id: "eid17", tween: [ "style", "${_Codeword}", "top", '258px', { fromValue: '197px'}], position: 1595, duration: 905 },
                { id: "eid58", tween: [ "style", "${_Packet}", "top", '363px', { fromValue: '336px'}], position: 5355, duration: 395 },
                { id: "eid60", tween: [ "style", "${_Packet}", "top", '45px', { fromValue: '363px'}], position: 6316, duration: 434 },
                { id: "eid62", tween: [ "style", "${_Packet}", "top", '95px', { fromValue: '45px'}], position: 7401, duration: 349 },
                { id: "eid9", tween: [ "style", "${_DataCopy}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid10", tween: [ "style", "${_DataCopy}", "display", 'block', { fromValue: 'none'}], position: 600, duration: 0 },
                { id: "eid12", tween: [ "style", "${_DataCopy}", "display", 'none', { fromValue: 'block'}], position: 1500, duration: 0 },
                { id: "eid95", tween: [ "style", "${_DataCopy}", "display", 'none', { fromValue: 'none'}], position: 13000, duration: 0 },
                { id: "eid11", tween: [ "style", "${_DataCopy}", "top", '194px', { fromValue: '130px'}], position: 600, duration: 900 }            ]
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
})(jQuery, AdobeEdge, "EDGE-117862498");
