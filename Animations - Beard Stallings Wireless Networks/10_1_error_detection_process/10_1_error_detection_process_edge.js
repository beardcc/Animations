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
                id: 'TX',
                display: 'block',
                type: 'image',
                rect: ['105px', '50px','269px','376px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"TX.png",'0px','0px']
            },
            {
                id: 'Rx',
                display: 'block',
                type: 'image',
                rect: ['411px', '49px','269px','214px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"Rx.png",'0px','0px']
            },
            {
                id: 'sample',
                display: 'block',
                type: 'image',
                rect: ['20px', '-26px','792px','612px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"sample.png",'0px','0px']
            },
            {
                id: 'k-bits',
                display: 'block',
                type: 'image',
                rect: ['134px', '81px','176px','51px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"k-bits.png",'0px','0px']
            },
            {
                id: 'Text3',
                display: 'block',
                type: 'text',
                rect: ['134px', '22px','191px','32px','auto', 'auto'],
                text: "Compute the check bits.",
                align: "left",
                font: ['Times New Roman, Times, serif', [94, "%"], "rgba(0,0,0,1)", "700", "none", "normal"]
            },
            {
                id: 'n-bits',
                display: 'block',
                type: 'image',
                rect: ['155px', '301px','157px','22px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"n-bits.png",'0px','0px']
            },
            {
                id: 'n-kbits',
                display: 'block',
                type: 'image',
                rect: ['274px', '273px','51px','21px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"n-kbits.png",'0px','0px']
            },
            {
                id: 'Data2',
                display: 'block',
                type: 'image',
                rect: ['135px', '230px','176px','51px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"Data.png",'0px','0px']
            },
            {
                id: 'Data2Copy',
                display: 'block',
                type: 'image',
                rect: ['135px', '229px','176px','51px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"Data.png",'0px','0px']
            },
            {
                id: 'efdata',
                display: 'block',
                type: 'image',
                rect: ['539px', '177px','0%','7.5%','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"efdata\'.png",'0%','0%','71px','41px']
            },
            {
                id: 'Efdata',
                display: 'block',
                type: 'image',
                rect: ['316px', '174px','0px','41px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"Efdata.png",'0px','0px','100%','100%']
            },
            {
                id: 'Data',
                display: 'block',
                type: 'image',
                rect: ['135px', '109px','176px','51px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"Data.png",'0px','0px','176px','auto']
            },
            {
                id: 'arrow1',
                display: 'block',
                type: 'image',
                rect: ['204px', '154px','84px','82px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"arrow1.png",'0px','0px']
            },
            {
                id: 'Text4',
                display: 'block',
                type: 'text',
                rect: ['155px', '18px','166px','32px','auto', 'auto'],
                text: "Put the check bits on the end of the frame.",
                align: "left",
                font: ['Times New Roman, Times, serif', [94, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: 'txtorx',
                display: 'block',
                type: 'image',
                rect: ['215px', '30px','376px','364px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"txtorx.png",'0px','0px']
            },
            {
                id: 'sdarrow',
                display: 'block',
                type: 'image',
                rect: ['530px', '157px','14px','33px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"sdarrow.png",'0px','0px']
            },
            {
                id: 'sdarrowCopy2',
                display: 'block',
                type: 'image',
                rect: ['295px', '207px','14px','33px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"sdarrow.png",'0px','0px']
            },
            {
                id: 'sdarrowCopy',
                display: 'block',
                type: 'image',
                rect: ['608px', '152px','14px','33px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"sdarrow.png",'0px','0px']
            },
            {
                id: 'Data3',
                display: 'block',
                type: 'image',
                rect: ['449px', '102px','176px','51px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"Data\'.png",'0px','0px']
            },
            {
                id: 'errc1',
                display: 'block',
                type: 'image',
                rect: ['288px', '206px','25px','32px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"errc1.png",'0px','0px']
            },
            {
                id: 'errc1Copy',
                display: 'block',
                type: 'image',
                rect: ['288px', '239px','25px','32px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"errc1.png",'0px','0px']
            },
            {
                id: 'packet',
                display: 'block',
                type: 'image',
                rect: ['225px', '329px','17px','18px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"packet.png",'0px','0px']
            },
            {
                id: 'errc12',
                display: 'block',
                type: 'image',
                rect: ['602px', '112px','25px','32px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"errc1.png",'0px','0px']
            },
            {
                id: 'Text5',
                display: 'block',
                type: 'text',
                rect: ['281px', '10px','389px','41px','auto', 'auto'],
                text: "The packet is  received, possibly with errors in the data (Data') and the received check bits.",
                align: "left",
                font: ['Times New Roman, Times, serif', [94, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: 'Text6',
                display: 'block',
                type: 'text',
                rect: ['478px', '8px','183px','41px','auto', 'auto'],
                text: "Compute the check bits from the received data.",
                align: "left",
                font: ['Times New Roman, Times, serif', [94, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: 'Text7',
                display: 'block',
                type: 'text',
                rect: ['426px', '273px','236px','41px','auto', 'auto'],
                text: "If the received check bits do not match the newly computed check bits, there is an error.",
                align: "left",
                font: ['Times New Roman, Times, serif', [94, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: 'ssarrow',
                display: 'block',
                type: 'image',
                rect: ['563px', '188px','28px','14px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"ssarrow.png",'0px','0px']
            },
            {
                id: 'Text8',
                display: 'block',
                type: 'text',
                rect: ['589px', '187px','71px','14px','auto', 'auto'],
                text: "COMPARE",
                align: "left",
                font: ['Georgia, \'Times New Roman\', Times, serif', 13, "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: 'mask',
                type: 'image',
                rect: ['147px', '461px','508px','64px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"mask.png",'0px','0px']
            },
            {
                id: 'Text10',
                display: 'block',
                type: 'text',
                rect: ['178px', '468px','520px','44px','auto', 'auto'],
                text: "Click or Touch on Figure for Each Step of the Animation",
                align: "left",
                font: ['Times New Roman, Times, serif', [94, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: 'Text9',
                type: 'text',
                rect: ['230px', '493px','362px','37px','auto', 'auto'],
                text: " Figure 10.1 Error Detection Process",
                align: "left",
                font: ['Times New Roman, Times, serif', [119, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
            }],
            symbolInstances: [

            ]
        },
    states: {
        "Base State": {
            "${_TX}": [
                ["style", "top", '50px'],
                ["style", "left", '105px'],
                ["style", "display", 'block']
            ],
            "${_sdarrow}": [
                ["style", "top", '157px'],
                ["style", "left", '530px'],
                ["style", "display", 'block']
            ],
            "${_Text7}": [
                ["style", "top", '273px'],
                ["style", "display", 'block'],
                ["style", "font-family", 'Times New Roman, Times, serif'],
                ["style", "left", '426px'],
                ["style", "width", '236px']
            ],
            "${_packet}": [
                ["style", "top", '330px'],
                ["style", "left", '224px'],
                ["style", "display", 'block']
            ],
            "${_Text3}": [
                ["style", "font-size", '94%'],
                ["style", "display", 'block'],
                ["style", "font-family", 'Times New Roman, Times, serif'],
                ["style", "font-weight", '700'],
                ["style", "width", '191px']
            ],
            "${_n-kbits}": [
                ["style", "top", '273px'],
                ["style", "left", '274px'],
                ["style", "display", 'block']
            ],
            "${_Text5}": [
                ["style", "display", 'block'],
                ["style", "font-family", 'Times New Roman, Times, serif']
            ],
            "${_k-bits}": [
                ["style", "top", '81px'],
                ["style", "left", '134px'],
                ["style", "display", 'block']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(255,255,255,1)'],
                ["style", "overflow", 'hidden'],
                ["style", "height", '550px'],
                ["style", "width", '801px']
            ],
            "${_sdarrowCopy2}": [
                ["style", "top", '207px'],
                ["style", "left", '295px'],
                ["style", "display", 'block']
            ],
            "${_txtorx}": [
                ["style", "top", '30px'],
                ["style", "left", '215px'],
                ["style", "display", 'block']
            ],
            "${_n-bits}": [
                ["style", "top", '301px'],
                ["style", "left", '155px'],
                ["style", "display", 'block']
            ],
            "${_efdata}": [
                ["style", "display", 'block'],
                ["style", "top", '177px'],
                ["style", "left", '539px'],
                ["style", "width", '0%']
            ],
            "${_errc1Copy}": [
                ["style", "top", '239px'],
                ["style", "left", '288px'],
                ["style", "display", 'block']
            ],
            "${_ssarrow}": [
                ["style", "top", '188px'],
                ["style", "left", '563px'],
                ["style", "display", 'block']
            ],
            "${_sample}": [
                ["style", "top", '-26px'],
                ["style", "left", '20px'],
                ["style", "display", 'block']
            ],
            "${_sdarrowCopy}": [
                ["style", "top", '152px'],
                ["style", "left", '608px'],
                ["style", "display", 'block']
            ],
            "${_Data3}": [
                ["style", "top", '102px'],
                ["style", "left", '449px'],
                ["style", "display", 'block']
            ],
            "${_mask}": [
                ["style", "height", '64px'],
                ["style", "top", '461px'],
                ["style", "left", '147px'],
                ["style", "width", '508px']
            ],
            "${_Data}": [
                ["style", "top", '109px'],
                ["style", "display", 'block'],
                ["style", "left", '222px'],
                ["style", "height", '51px'],
                ["style", "background-size", [176,'auto'], {valueTemplate:'@@0@@px @@1@@'} ],
                ["style", "background-position", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "width", '0px']
            ],
            "${_Data2Copy}": [
                ["style", "top", '229px'],
                ["style", "left", '135px'],
                ["style", "display", 'block']
            ],
            "${_Rx}": [
                ["style", "top", '49px'],
                ["style", "left", '411px'],
                ["style", "display", 'block']
            ],
            "${_arrow1}": [
                ["style", "top", '154px'],
                ["style", "left", '204px'],
                ["style", "display", 'block']
            ],
            "${_Text10}": [
                ["style", "top", '471px'],
                ["style", "display", 'block'],
                ["style", "font-family", 'Times New Roman, Times, serif'],
                ["style", "left", '196px'],
                ["style", "font-size", '94%']
            ],
            "${_Text6}": [
                ["style", "top", '8px'],
                ["style", "display", 'block'],
                ["style", "font-family", 'Times New Roman, Times, serif'],
                ["style", "left", '478px'],
                ["style", "width", '183px']
            ],
            "${_Text4}": [
                ["style", "top", '18px'],
                ["style", "display", 'block'],
                ["style", "font-family", 'Times New Roman, Times, serif'],
                ["style", "left", '155px'],
                ["style", "width", '166px']
            ],
            "${_errc1}": [
                ["style", "top", '206px'],
                ["style", "left", '288px'],
                ["style", "display", 'block']
            ],
            "${_Efdata}": [
                ["style", "display", 'block'],
                ["style", "top", '174px'],
                ["style", "left", '316px'],
                ["style", "width", '0px']
            ],
            "${_errc12}": [
                ["style", "top", '112px'],
                ["style", "left", '602px'],
                ["style", "display", 'block']
            ],
            "${_Text9}": [
                ["style", "top", '493px'],
                ["style", "font-size", '119%'],
                ["style", "font-family", 'Times New Roman, Times, serif'],
                ["style", "left", '230px'],
                ["style", "width", '362px']
            ],
            "${_Text8}": [
                ["style", "display", 'block'],
                ["style", "top", '187px'],
                ["style", "left", '589px'],
                ["style", "font-size", '13px']
            ],
            "${_Data2}": [
                ["style", "top", '109px'],
                ["style", "left", '135px'],
                ["style", "display", 'block']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 11500,
            autoPlay: true,
            timeline: [
                { id: "eid81", tween: [ "style", "${_sdarrow}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid82", tween: [ "style", "${_sdarrow}", "display", 'block', { fromValue: 'none'}], position: 9250, duration: 0 },
                { id: "eid104", tween: [ "style", "${_sdarrow}", "display", 'none', { fromValue: 'block'}], position: 11500, duration: 0 },
                { id: "eid74", tween: [ "style", "${_Data3}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid75", tween: [ "style", "${_Data3}", "display", 'block', { fromValue: 'none'}], position: 8432, duration: 0 },
                { id: "eid101", tween: [ "style", "${_Data3}", "display", 'none', { fromValue: 'block'}], position: 11500, duration: 0 },
                { id: "eid65", tween: [ "style", "${_packet}", "top", '330px', { fromValue: '330px'}], position: 5937, duration: 0 },
                { id: "eid67", tween: [ "style", "${_packet}", "top", '362px', { fromValue: '330px'}], position: 6051, duration: 449 },
                { id: "eid69", tween: [ "style", "${_packet}", "top", '44px', { fromValue: '362px'}], position: 6856, duration: 644 },
                { id: "eid72", tween: [ "style", "${_packet}", "top", '95px', { fromValue: '44px'}], position: 8000, duration: 347 },
                { id: "eid12", tween: [ "style", "${_Data}", "left", '135px', { fromValue: '222px'}], position: 750, duration: 750 },
                { id: "eid48", tween: [ "style", "${_errc1Copy}", "top", '314px', { fromValue: '239px'}], position: 4920, duration: 1017 },
                { id: "eid13", tween: [ "style", "${_Efdata}", "width", '71px', { fromValue: '0px'}], position: 750, duration: 750 },
                { id: "eid4", tween: [ "style", "${_Data}", "background-position", [0,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,0]}], position: 750, duration: 750 },
                { id: "eid40", tween: [ "style", "${_txtorx}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid41", tween: [ "style", "${_txtorx}", "display", 'block', { fromValue: 'none'}], position: 4750, duration: 0 },
                { id: "eid113", tween: [ "style", "${_txtorx}", "display", 'none', { fromValue: 'block'}], position: 11500, duration: 0 },
                { id: "eid16", tween: [ "style", "${_k-bits}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid17", tween: [ "style", "${_k-bits}", "display", 'block', { fromValue: 'none'}], position: 1500, duration: 0 },
                { id: "eid107", tween: [ "style", "${_k-bits}", "display", 'none', { fromValue: 'block'}], position: 11500, duration: 0 },
                { id: "eid125", tween: [ "style", "${_Text10}", "display", 'none', { fromValue: 'block'}], position: 11500, duration: 0 },
                { id: "eid21", tween: [ "style", "${_Text4}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid22", tween: [ "style", "${_Text4}", "display", 'block', { fromValue: 'none'}], position: 2000, duration: 0 },
                { id: "eid37", tween: [ "style", "${_Text4}", "display", 'none', { fromValue: 'block'}], position: 4143, duration: 0 },
                { id: "eid115", tween: [ "style", "${_Text4}", "display", 'none', { fromValue: 'none'}], position: 11500, duration: 0 },
                { id: "eid38", tween: [ "style", "${_Text5}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid39", tween: [ "style", "${_Text5}", "display", 'block', { fromValue: 'none'}], position: 4500, duration: 0 },
                { id: "eid78", tween: [ "style", "${_Text5}", "display", 'none', { fromValue: 'block'}], position: 8645, duration: 0 },
                { id: "eid109", tween: [ "style", "${_Text5}", "display", 'none', { fromValue: 'none'}], position: 11500, duration: 0 },
                { id: "eid47", tween: [ "style", "${_Data2Copy}", "top", '305px', { fromValue: '229px'}], position: 4920, duration: 1017 },
                { id: "eid32", tween: [ "style", "${_errc1}", "top", '240px', { fromValue: '206px'}], position: 3425, duration: 405 },
                { id: "eid129", tween: [ "style", "${_errc1}", "top", '240px', { fromValue: '240px'}], position: 11345, duration: 0 },
                { id: "eid43", tween: [ "style", "${_errc1Copy}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid44", tween: [ "style", "${_errc1Copy}", "display", 'block', { fromValue: 'none'}], position: 4920, duration: 0 },
                { id: "eid52", tween: [ "style", "${_errc1Copy}", "display", 'none', { fromValue: 'block'}], position: 5937, duration: 0 },
                { id: "eid100", tween: [ "style", "${_errc1Copy}", "display", 'none', { fromValue: 'none'}], position: 11500, duration: 0 },
                { id: "eid92", tween: [ "style", "${_sdarrowCopy}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid93", tween: [ "style", "${_sdarrowCopy}", "display", 'block', { fromValue: 'none'}], position: 10750, duration: 0 },
                { id: "eid110", tween: [ "style", "${_sdarrowCopy}", "display", 'none', { fromValue: 'block'}], position: 11500, duration: 0 },
                { id: "eid118", tween: [ "style", "${_Data}", "display", 'none', { fromValue: 'block'}], position: 11500, duration: 0 },
                { id: "eid49", tween: [ "style", "${_packet}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid50", tween: [ "style", "${_packet}", "display", 'block', { fromValue: 'none'}], position: 5937, duration: 0 },
                { id: "eid73", tween: [ "style", "${_packet}", "display", 'none', { fromValue: 'block'}], position: 8432, duration: 0 },
                { id: "eid96", tween: [ "style", "${_packet}", "display", 'none', { fromValue: 'none'}], position: 11500, duration: 0 },
                { id: "eid108", tween: [ "style", "${_efdata}", "display", 'none', { fromValue: 'block'}], position: 11500, duration: 0 },
                { id: "eid121", tween: [ "style", "${_sample}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid122", tween: [ "style", "${_sample}", "display", 'block', { fromValue: 'none'}], position: 11500, duration: 0 },
                { id: "eid45", tween: [ "style", "${_Data2Copy}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid46", tween: [ "style", "${_Data2Copy}", "display", 'block', { fromValue: 'none'}], position: 4920, duration: 0 },
                { id: "eid51", tween: [ "style", "${_Data2Copy}", "display", 'none', { fromValue: 'block'}], position: 5937, duration: 0 },
                { id: "eid99", tween: [ "style", "${_Data2Copy}", "display", 'none', { fromValue: 'none'}], position: 11500, duration: 0 },
                { id: "eid130", tween: [ "style", "${_sdarrowCopy2}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid131", tween: [ "style", "${_sdarrowCopy2}", "display", 'block', { fromValue: 'none'}], position: 2185, duration: 0 },
                { id: "eid132", tween: [ "style", "${_sdarrowCopy2}", "display", 'none', { fromValue: 'block'}], position: 11500, duration: 0 },
                { id: "eid119", tween: [ "style", "${_Rx}", "display", 'none', { fromValue: 'block'}], position: 11500, duration: 0 },
                { id: "eid83", tween: [ "style", "${_efdata}", "left", '503px', { fromValue: '539px'}], position: 9360, duration: 640 },
                { id: "eid76", tween: [ "style", "${_errc12}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid77", tween: [ "style", "${_errc12}", "display", 'block', { fromValue: 'none'}], position: 8432, duration: 0 },
                { id: "eid112", tween: [ "style", "${_errc12}", "display", 'none', { fromValue: 'block'}], position: 11500, duration: 0 },
                { id: "eid33", tween: [ "style", "${_n-kbits}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid34", tween: [ "style", "${_n-kbits}", "display", 'block', { fromValue: 'none'}], position: 3830, duration: 0 },
                { id: "eid103", tween: [ "style", "${_n-kbits}", "display", 'none', { fromValue: 'block'}], position: 11500, duration: 0 },
                { id: "eid3", tween: [ "style", "${_Data}", "width", '176px', { fromValue: '0px'}], position: 750, duration: 750 },
                { id: "eid88", tween: [ "style", "${_Text8}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid89", tween: [ "style", "${_Text8}", "display", 'block', { fromValue: 'none'}], position: 10750, duration: 0 },
                { id: "eid111", tween: [ "style", "${_Text8}", "display", 'none', { fromValue: 'block'}], position: 11500, duration: 0 },
                { id: "eid90", tween: [ "style", "${_ssarrow}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid91", tween: [ "style", "${_ssarrow}", "display", 'block', { fromValue: 'none'}], position: 10750, duration: 0 },
                { id: "eid97", tween: [ "style", "${_ssarrow}", "display", 'none', { fromValue: 'block'}], position: 11500, duration: 0 },
                { id: "eid30", tween: [ "style", "${_errc1}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid31", tween: [ "style", "${_errc1}", "display", 'block', { fromValue: 'none'}], position: 3425, duration: 0 },
                { id: "eid98", tween: [ "style", "${_errc1}", "display", 'none', { fromValue: 'block'}], position: 11500, duration: 0 },
                { id: "eid18", tween: [ "style", "${_Text3}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid19", tween: [ "style", "${_Text3}", "display", 'block', { fromValue: 'none'}], position: 640, duration: 0 },
                { id: "eid20", tween: [ "style", "${_Text3}", "display", 'none', { fromValue: 'block'}], position: 1750, duration: 0 },
                { id: "eid95", tween: [ "style", "${_Text3}", "display", 'none', { fromValue: 'none'}], position: 11500, duration: 0 },
                { id: "eid64", tween: [ "style", "${_packet}", "left", '224px', { fromValue: '224px'}], position: 5937, duration: 0 },
                { id: "eid68", tween: [ "style", "${_packet}", "left", '388px', { fromValue: '224px'}], position: 6500, duration: 356 },
                { id: "eid71", tween: [ "style", "${_packet}", "left", '539px', { fromValue: '388px'}], position: 7552, duration: 448 },
                { id: "eid23", tween: [ "style", "${_arrow1}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid24", tween: [ "style", "${_arrow1}", "display", 'block', { fromValue: 'none'}], position: 2185, duration: 0 },
                { id: "eid117", tween: [ "style", "${_arrow1}", "display", 'none', { fromValue: 'block'}], position: 11500, duration: 0 },
                { id: "eid86", tween: [ "style", "${_Text7}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid87", tween: [ "style", "${_Text7}", "display", 'block', { fromValue: 'none'}], position: 10500, duration: 0 },
                { id: "eid94", tween: [ "style", "${_Text7}", "display", 'none', { fromValue: 'block'}], position: 11250, duration: 0 },
                { id: "eid116", tween: [ "style", "${_Text7}", "display", 'none', { fromValue: 'none'}], position: 11500, duration: 0 },
                { id: "eid27", tween: [ "style", "${_Data2}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid28", tween: [ "style", "${_Data2}", "display", 'block', { fromValue: 'none'}], position: 2325, duration: 0 },
                { id: "eid114", tween: [ "style", "${_Data2}", "display", 'none', { fromValue: 'block'}], position: 11500, duration: 0 },
                { id: "eid35", tween: [ "style", "${_n-bits}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid36", tween: [ "style", "${_n-bits}", "display", 'block', { fromValue: 'none'}], position: 3830, duration: 0 },
                { id: "eid102", tween: [ "style", "${_n-bits}", "display", 'none', { fromValue: 'block'}], position: 11500, duration: 0 },
                { id: "eid84", tween: [ "style", "${_efdata}", "width", '8.87%', { fromValue: '0%'}], position: 9360, duration: 640 },
                { id: "eid79", tween: [ "style", "${_Text6}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid80", tween: [ "style", "${_Text6}", "display", 'block', { fromValue: 'none'}], position: 8945, duration: 0 },
                { id: "eid85", tween: [ "style", "${_Text6}", "display", 'none', { fromValue: 'block'}], position: 10250, duration: 0 },
                { id: "eid105", tween: [ "style", "${_Text6}", "display", 'none', { fromValue: 'none'}], position: 11500, duration: 0 },
                { id: "eid106", tween: [ "style", "${_Efdata}", "display", 'none', { fromValue: 'block'}], position: 11500, duration: 0 },
                { id: "eid29", tween: [ "style", "${_Data2}", "top", '230px', { fromValue: '109px'}], position: 2325, duration: 1505 },
                { id: "eid127", tween: [ "style", "${_errc12}", "top", '112px', { fromValue: '112px'}], position: 11345, duration: 0 },
                { id: "eid120", tween: [ "style", "${_TX}", "display", 'none', { fromValue: 'block'}], position: 11500, duration: 0 },
                { id: "eid15", tween: [ "style", "${_Efdata}", "left", '266px', { fromValue: '316px'}], position: 750, duration: 750 }            ]
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
})(jQuery, AdobeEdge, "EDGE-110522670");
