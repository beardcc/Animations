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
                id: 'mac',
                display: 'block',
                type: 'image',
                rect: ['290px', '337px','131px','76px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"mac.png",'0px','0px']
            },
            {
                id: 'llcarr2',
                display: 'block',
                type: 'image',
                rect: ['335px', '230px','42px','82px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"llcarr2.png",'0px','0px']
            },
            {
                id: 'Text',
                type: 'text',
                rect: ['165px', '569px','auto','auto','auto', 'auto'],
                text: "Figure 4.7 Operation of TCP/IP: Action at Router",
                align: "center",
                font: ['Times New Roman, Times, serif', [10, "%"], "rgba(0,0,0,1)", "700", "none", ""]
            },
            {
                id: 'Text2',
                display: 'block',
                type: 'text',
                rect: ['0px', '0px','auto','auto','auto', 'auto'],
                text: "Click or Touch on the Figure for Each Step of the Animation",
                align: "center",
                font: ['\'Times New Roman\', Times, serif', [125, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: 'Text3',
                display: 'block',
                type: 'text',
                rect: ['33px', '427px','208px','auto','auto', 'auto'],
                text: "8. Arriving at router. The incoming signal is received over the transmission medium and interpreted as a cell of bits.",
                align: "left",
                font: ['\'Times New Roman\', Times, serif', [125, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: 'Text9',
                display: 'block',
                type: 'text',
                rect: ['452px', '442px','208px','auto','auto', 'auto'],
                text: "13. Transmission. Each frame is transmitted over the medium as a sequence of bits.",
                align: "left",
                font: ['\'Times New Roman\', Times, serif', [125, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: 'phy',
                display: 'block',
                type: 'image',
                rect: ['225px', '376px','120px','73px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"phy.png",'0px','0px']
            },
            {
                id: 'phyarr',
                display: 'block',
                type: 'image',
                rect: ['199px', '408px','63px','27px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"phyarr.png",'0px','0px']
            },
            {
                id: 'litdata',
                display: 'block',
                type: 'image',
                rect: ['74px', '390px','158px','30px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"litdata.png",'0px','0px']
            },
            {
                id: 'linklayer',
                display: 'block',
                type: 'image',
                rect: ['226px', '341px','117px','70px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"linklayer.png",'0px','0px']
            },
            {
                id: 'Text4',
                display: 'block',
                type: 'text',
                rect: ['33px', '255px','238px','auto','auto', 'auto'],
                text: "9. Processing the packet. The link layer removes the frame header and processes it. The header error control is used for error detection. The connection number identifies the source.",
                align: "left",
                font: ['\'Times New Roman\', Times, serif', [125, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: 'llarrbig',
                display: 'block',
                type: 'image',
                rect: ['265px', '154px','38px','218px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"llarrbig.png",'0px','0px']
            },
            {
                id: 'ipuparr',
                display: 'block',
                type: 'image',
                rect: ['296px', '105px','30px','56px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"ipuparr.png",'0px','0px']
            },
            {
                id: 'ip',
                display: 'block',
                type: 'image',
                rect: ['264px', '49px','115px','79px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"ip.png",'0px','0px']
            },
            {
                id: 'packet',
                display: 'block',
                type: 'image',
                rect: ['272px', '168px','41px','26px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"packet.png",'0px','0px']
            },
            {
                id: 'itdata',
                display: 'block',
                type: 'image',
                rect: ['249px', '140px','132px','38px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"itdata.png",'0px','0px']
            },
            {
                id: 'itdata2',
                display: 'block',
                type: 'image',
                rect: ['249px', '140px','132px','38px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"itdata.png",'0px','0px']
            },
            {
                id: 'packet2',
                display: 'block',
                type: 'image',
                rect: ['302px', '124px','41px','26px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"packet.png",'0px','0px']
            },
            {
                id: 'Text5',
                display: 'block',
                type: 'text',
                rect: ['33px', '60px','216px','auto','auto', 'auto'],
                text: "10. Routing the packet. IP examines the IP header and makes a routing decision. It determines which outgoing link is to be used and then passes the datagram back to the link layer for transmission on that link.",
                align: "left",
                font: ['\'Times New Roman\', Times, serif', [125, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: 'ipdoarr',
                display: 'block',
                type: 'image',
                rect: ['355px', '81px','86px','30px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"ipdoarr.png",'0px','0px']
            },
            {
                id: 'Text6',
                display: 'block',
                type: 'text',
                rect: ['452px', '60px','238px','auto','auto', 'auto'],
                text: "Peer-to-peer dialogue. The router will pass this datagram onto another router or to the destination system.",
                align: "left",
                font: ['\'Times New Roman\', Times, serif', [125, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: 'ipdwnarr',
                display: 'block',
                type: 'image',
                rect: ['339px', '105px','30px','56px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"ipdwnarr.png",'0px','0px']
            },
            {
                id: 'llc',
                display: 'block',
                type: 'image',
                rect: ['296px', '199px','123px','73px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"llc.png",'0px','0px']
            },
            {
                id: 'llcarr1',
                display: 'block',
                type: 'image',
                rect: ['342px', '161px','28px','65px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"llcarr1.png",'0px','0px']
            },
            {
                id: 'packet3',
                display: 'block',
                type: 'image',
                rect: ['344px', '111px','41px','26px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"packet.png",'0px','0px']
            },
            {
                id: 'packet4',
                display: 'block',
                type: 'image',
                rect: ['345px', '258px','41px','26px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"packet.png",'0px','0px']
            },
            {
                id: 'litdata2',
                display: 'block',
                type: 'image',
                rect: ['284px', '292px','158px','30px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"litdata.png",'0px','0px']
            },
            {
                id: 'macarr',
                display: 'block',
                type: 'image',
                rect: ['338px', '304px','35px','66px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"macarr.png",'0px','0px']
            },
            {
                id: 'Text7',
                display: 'block',
                type: 'text',
                rect: ['452px', '226px','220px','auto','auto', 'auto'],
                text: "11. Forming LLC PDU. An LLC header is added to each IP datagram to form an LLC PDU. The header contains sequence number and address information.",
                align: "left",
                font: ['\'Times New Roman\', Times, serif', [125, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: 'litdata3',
                display: 'block',
                type: 'image',
                rect: ['284px', '292px','158px','30px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"litdata.png",'0px','0px']
            },
            {
                id: 'Text8',
                display: 'block',
                type: 'text',
                rect: ['452px', '272px','238px','auto','auto', 'auto'],
                text: "12. Framing. A MAC header and trailer is added to each LLC PDU, forming a MAC frame. The header contains address information and the trailer contains a frame check sequence.",
                align: "left",
                font: ['\'Times New Roman\', Times, serif', [125, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: 'outarr',
                display: 'block',
                type: 'image',
                rect: ['384px', '398px','83px','44px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"outarr.png",'0px','0px']
            },
            {
                id: 'mlitdata',
                display: 'block',
                type: 'image',
                rect: ['406px', '380px','27.2%','7.3%','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"mlitdata.png",'0%','0%','190px','44px']
            },
            {
                id: 'physical',
                display: 'block',
                type: 'image',
                rect: ['324px', '389px','96px','62px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"physical.png",'0px','0px']
            }],
            symbolInstances: [

            ]
        },
    states: {
        "Base State": {
            "${_linklayer}": [
                ["style", "top", '341px'],
                ["style", "left", '226px'],
                ["style", "display", 'block']
            ],
            "${_litdata2}": [
                ["style", "top", '292px'],
                ["style", "left", '284px'],
                ["style", "display", 'block']
            ],
            "${_Text8}": [
                ["style", "top", '272px'],
                ["style", "display", 'block'],
                ["style", "font-size", '94%'],
                ["style", "left", '452px'],
                ["style", "width", '238px']
            ],
            "${_packet4}": [
                ["style", "top", '258px'],
                ["style", "left", '345px'],
                ["style", "display", 'block']
            ],
            "${_ip}": [
                ["style", "top", '49px'],
                ["style", "left", '264px'],
                ["style", "display", 'block']
            ],
            "${_Text4}": [
                ["style", "top", '255px'],
                ["style", "display", 'block'],
                ["style", "font-size", '94%'],
                ["style", "left", '33px'],
                ["style", "width", '238px']
            ],
            "${_phy}": [
                ["style", "top", '376px'],
                ["style", "left", '225px'],
                ["style", "display", 'block']
            ],
            "${_itdata}": [
                ["style", "top", '140px'],
                ["style", "left", '249px'],
                ["style", "display", 'block']
            ],
            "${_ipdoarr}": [
                ["style", "top", '81px'],
                ["style", "left", '355px'],
                ["style", "display", 'block']
            ],
            "${_llcarr1}": [
                ["style", "top", '161px'],
                ["style", "left", '342px'],
                ["style", "display", 'block']
            ],
            "${_itdata2}": [
                ["style", "top", '140px'],
                ["style", "left", '249px'],
                ["style", "display", 'block']
            ],
            "${_packet3}": [
                ["style", "top", '111px'],
                ["style", "left", '344px'],
                ["style", "display", 'block']
            ],
            "${_litdata3}": [
                ["style", "top", '292px'],
                ["style", "left", '284px'],
                ["style", "display", 'block']
            ],
            "${_llarrbig}": [
                ["style", "top", '154px'],
                ["style", "left", '265px'],
                ["style", "display", 'block']
            ],
            "${_litdata}": [
                ["style", "top", '390px'],
                ["style", "left", '-154px'],
                ["style", "display", 'block']
            ],
            "${_Text7}": [
                ["style", "top", '167px'],
                ["style", "display", 'block'],
                ["style", "font-size", '94%'],
                ["style", "left", '452px'],
                ["style", "width", '220px']
            ],
            "${_mac}": [
                ["style", "top", '337px'],
                ["style", "left", '290px'],
                ["style", "display", 'block']
            ],
            "${_Text3}": [
                ["style", "top", '427px'],
                ["style", "display", 'block'],
                ["style", "font-size", '94%'],
                ["style", "left", '33px'],
                ["style", "width", '208px']
            ],
            "${_Text5}": [
                ["style", "top", '60px'],
                ["style", "display", 'block'],
                ["style", "font-size", '94%'],
                ["style", "left", '38px'],
                ["style", "width", '216px']
            ],
            "${_llc}": [
                ["style", "top", '199px'],
                ["style", "left", '296px'],
                ["style", "display", 'block']
            ],
            "${_ipdwnarr}": [
                ["style", "top", '105px'],
                ["style", "left", '339px'],
                ["style", "display", 'block']
            ],
            "${_macarr}": [
                ["style", "top", '304px'],
                ["style", "left", '338px'],
                ["style", "display", 'block']
            ],
            "${_outarr}": [
                ["style", "top", '398px'],
                ["style", "left", '384px'],
                ["style", "display", 'block']
            ],
            "${_llcarr2}": [
                ["style", "display", 'block'],
                ["style", "left", '335px'],
                ["style", "top", '230px']
            ],
            "${_mlitdata}": [
                ["style", "top", '379px'],
                ["style", "display", 'block'],
                ["style", "left", '406px'],
                ["style", "width", '2%']
            ],
            "${_ipuparr}": [
                ["style", "top", '105px'],
                ["style", "left", '296px'],
                ["style", "display", 'block']
            ],
            "${_Text9}": [
                ["style", "top", '442px'],
                ["style", "display", 'block'],
                ["style", "font-size", '94%'],
                ["style", "left", '452px'],
                ["style", "width", '208px']
            ],
            "${_packet2}": [
                ["style", "top", '124px'],
                ["style", "left", '302px'],
                ["style", "display", 'block']
            ],
            "${_phyarr}": [
                ["style", "top", '408px'],
                ["style", "left", '-75px'],
                ["style", "display", 'block']
            ],
            "${_Text}": [
                ["style", "top", '564px'],
                ["style", "width", '150px'],
                ["style", "font-family", 'Times New Roman, Times, serif'],
                ["style", "font-weight", '700'],
                ["style", "center", '165px'],
                ["style", "font-size", '120%']
            ],
            "${_physical}": [
                ["style", "top", '389px'],
                ["style", "left", '324px'],
                ["style", "display", 'block']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(255,255,255,1)'],
                ["style", "width", '700px'],
                ["style", "height", '600px'],
                ["style", "overflow", 'hidden']
            ],
            "${_packet}": [
                ["style", "top", '346px'],
                ["style", "left", '272px'],
                ["style", "display", 'block']
            ],
            "${_Text2}": [
                ["style", "top", '538px'],
                ["style", "display", 'block'],
                ["style", "font-size", '94%'],
                ["style", "left", '173px'],
                ["style", "width", '50px']
            ],
            "${_Text6}": [
                ["style", "top", '60px'],
                ["style", "display", 'block'],
                ["style", "font-size", '94%'],
                ["style", "left", '452px'],
                ["style", "width", '238px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 12200,
            autoPlay: true,
            timeline: [
                { id: "eid145", tween: [ "style", "${_Text}", "width", '150px', { fromValue: '150px'}], position: 12000, duration: 0 },
                { id: "eid174", tween: [ "style", "${_Text9}", "font-size", '94%', { fromValue: '94%'}], position: 12000, duration: 0 },
                { id: "eid68", tween: [ "style", "${_packet3}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid69", tween: [ "style", "${_packet3}", "display", 'block', { fromValue: 'none'}], position: 6351, duration: 0 },
                { id: "eid73", tween: [ "style", "${_packet3}", "display", 'none', { fromValue: 'block'}], position: 6851, duration: 0 },
                { id: "eid74", tween: [ "style", "${_packet3}", "display", 'block', { fromValue: 'none'}], position: 7191, duration: 0 },
                { id: "eid82", tween: [ "style", "${_packet3}", "display", 'none', { fromValue: 'block'}], position: 7691, duration: 0 },
                { id: "eid72", tween: [ "style", "${_packet3}", "top", '136px', { fromValue: '111px'}], position: 6351, duration: 500 },
                { id: "eid79", tween: [ "style", "${_packet3}", "top", '203px', { fromValue: '136px'}], position: 6851, duration: 340 },
                { id: "eid81", tween: [ "style", "${_packet3}", "top", '203px', { fromValue: '168px'}], position: 7191, duration: 500 },
                { id: "eid172", tween: [ "style", "${_Text4}", "font-size", '94%', { fromValue: '94%'}], position: 12000, duration: 0 },
                { id: "eid117", tween: [ "style", "${_physical}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid118", tween: [ "style", "${_physical}", "display", 'block', { fromValue: 'none'}], position: 10548, duration: 0 },
                { id: "eid178", tween: [ "style", "${_Text7}", "font-size", '94%', { fromValue: '94%'}], position: 12000, duration: 0 },
                { id: "eid8", tween: [ "style", "${_phyarr}", "left", '199px', { fromValue: '-75px'}], position: 410, duration: 800 },
                { id: "eid98", tween: [ "style", "${_macarr}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid99", tween: [ "style", "${_macarr}", "display", 'block', { fromValue: 'none'}], position: 9391, duration: 0 },
                { id: "eid96", tween: [ "style", "${_mac}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid97", tween: [ "style", "${_mac}", "display", 'block', { fromValue: 'none'}], position: 9205, duration: 0 },
                { id: "eid15", tween: [ "style", "${_litdata}", "left", '74px', { fromValue: '-154px'}], position: 600, duration: 800 },
                { id: "eid3", tween: [ "style", "${_phyarr}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid4", tween: [ "style", "${_phyarr}", "display", 'block', { fromValue: 'none'}], position: 410, duration: 0 },
                { id: "eid21", tween: [ "style", "${_Text4}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid22", tween: [ "style", "${_Text4}", "display", 'block', { fromValue: 'none'}], position: 2170, duration: 0 },
                { id: "eid9", tween: [ "style", "${_litdata}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid10", tween: [ "style", "${_litdata}", "display", 'block', { fromValue: 'none'}], position: 600, duration: 0 },
                { id: "eid66", tween: [ "style", "${_ipdwnarr}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid67", tween: [ "style", "${_ipdwnarr}", "display", 'block', { fromValue: 'none'}], position: 6160, duration: 0 },
                { id: "eid129", tween: [ "style", "${_mlitdata}", "width", '27.15%', { fromValue: '2%'}], position: 10935, duration: 800 },
                { id: "eid189", tween: [ "style", "${_Text}", "font-size", '120%', { fromValue: '120%'}], position: 12000, duration: 0 },
                { id: "eid132", tween: [ "style", "${_Text2}", "display", 'none', { fromValue: 'block'}], position: 12200, duration: 0 },
                { id: "eid147", tween: [ "style", "${_Text2}", "top", '538px', { fromValue: '538px'}], position: 12000, duration: 0 },
                { id: "eid34", tween: [ "style", "${_itdata2}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid35", tween: [ "style", "${_itdata2}", "display", 'block', { fromValue: 'none'}], position: 3969, duration: 0 },
                { id: "eid47", tween: [ "style", "${_itdata2}", "display", 'none', { fromValue: 'block'}], position: 4469, duration: 0 },
                { id: "eid183", tween: [ "style", "${_Text}", "left", '165px', { fromValue: '165px'}], position: 12000, duration: 0 },
                { id: "eid60", tween: [ "style", "${_ipdoarr}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid61", tween: [ "style", "${_ipdoarr}", "display", 'block', { fromValue: 'none'}], position: 5500, duration: 0 },
                { id: "eid48", tween: [ "style", "${_packet2}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid49", tween: [ "style", "${_packet2}", "display", 'block', { fromValue: 'none'}], position: 4469, duration: 0 },
                { id: "eid53", tween: [ "style", "${_packet2}", "display", 'none', { fromValue: 'block'}], position: 4950, duration: 0 },
                { id: "eid177", tween: [ "style", "${_Text6}", "font-size", '94%', { fromValue: '94%'}], position: 12000, duration: 0 },
                { id: "eid100", tween: [ "style", "${_litdata3}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid101", tween: [ "style", "${_litdata3}", "display", 'block', { fromValue: 'none'}], position: 9550, duration: 0 },
                { id: "eid108", tween: [ "style", "${_litdata3}", "display", 'none', { fromValue: 'block'}], position: 10050, duration: 0 },
                { id: "eid119", tween: [ "style", "${_outarr}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid120", tween: [ "style", "${_outarr}", "display", 'block', { fromValue: 'none'}], position: 10750, duration: 0 },
                { id: "eid176", tween: [ "style", "${_Text2}", "font-size", '94%', { fromValue: '94%'}], position: 12000, duration: 0 },
                { id: "eid23", tween: [ "style", "${_llarrbig}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid24", tween: [ "style", "${_llarrbig}", "display", 'block', { fromValue: 'none'}], position: 2615, duration: 0 },
                { id: "eid18", tween: [ "style", "${_linklayer}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid19", tween: [ "style", "${_linklayer}", "display", 'block', { fromValue: 'none'}], position: 1870, duration: 0 },
                { id: "eid175", tween: [ "style", "${_Text8}", "font-size", '94%', { fromValue: '94%'}], position: 12000, duration: 0 },
                { id: "eid179", tween: [ "style", "${_Text5}", "font-size", '94%', { fromValue: '94%'}], position: 12000, duration: 0 },
                { id: "eid30", tween: [ "style", "${_packet}", "top", '168px', { fromValue: '346px'}], position: 3079, duration: 700 },
                { id: "eid16", tween: [ "style", "${_Text3}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid17", tween: [ "style", "${_Text3}", "display", 'block', { fromValue: 'none'}], position: 1695, duration: 0 },
                { id: "eid46", tween: [ "style", "${_itdata2}", "top", '121px', { fromValue: '140px'}], position: 3969, duration: 500 },
                { id: "eid115", tween: [ "style", "${_Text8}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid116", tween: [ "style", "${_Text8}", "display", 'block', { fromValue: 'none'}], position: 10330, duration: 0 },
                { id: "eid130", tween: [ "style", "${_Text9}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid131", tween: [ "style", "${_Text9}", "display", 'block', { fromValue: 'none'}], position: 12000, duration: 0 },
                { id: "eid92", tween: [ "style", "${_litdata2}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid93", tween: [ "style", "${_litdata2}", "display", 'block', { fromValue: 'none'}], position: 8965, duration: 0 },
                { id: "eid64", tween: [ "style", "${_llc}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid65", tween: [ "style", "${_llc}", "display", 'block', { fromValue: 'none'}], position: 5950, duration: 0 },
                { id: "eid184", tween: [ "style", "${_Text}", "top", '564px', { fromValue: '564px'}], position: 12000, duration: 0 },
                { id: "eid75", tween: [ "style", "${_llcarr1}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid76", tween: [ "style", "${_llcarr1}", "display", 'block', { fromValue: 'none'}], position: 7046, duration: 0 },
                { id: "eid86", tween: [ "style", "${_packet4}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid87", tween: [ "style", "${_packet4}", "display", 'block', { fromValue: 'none'}], position: 8465, duration: 0 },
                { id: "eid91", tween: [ "style", "${_packet4}", "display", 'none', { fromValue: 'block'}], position: 8965, duration: 0 },
                { id: "eid62", tween: [ "style", "${_Text6}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid63", tween: [ "style", "${_Text6}", "display", 'block', { fromValue: 'none'}], position: 5750, duration: 0 },
                { id: "eid173", tween: [ "style", "${_Text3}", "font-size", '94%', { fromValue: '94%'}], position: 12000, duration: 0 },
                { id: "eid58", tween: [ "style", "${_ipuparr}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid59", tween: [ "style", "${_ipuparr}", "display", 'block', { fromValue: 'none'}], position: 2830, duration: 0 },
                { id: "eid90", tween: [ "style", "${_packet4}", "top", '280px', { fromValue: '258px'}], position: 8465, duration: 500 },
                { id: "eid94", tween: [ "style", "${_Text7}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid95", tween: [ "style", "${_Text7}", "display", 'block', { fromValue: 'none'}], position: 8000, duration: 0 },
                { id: "eid107", tween: [ "style", "${_litdata3}", "top", '334px', { fromValue: '292px'}], position: 9550, duration: 500 },
                { id: "eid84", tween: [ "style", "${_llcarr2}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid85", tween: [ "style", "${_llcarr2}", "display", 'block', { fromValue: 'none'}], position: 8250, duration: 0 },
                { id: "eid56", tween: [ "style", "${_ip}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid57", tween: [ "style", "${_ip}", "display", 'block', { fromValue: 'none'}], position: 2359, duration: 0 },
                { id: "eid1", tween: [ "style", "${_phy}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid2", tween: [ "style", "${_phy}", "display", 'block', { fromValue: 'none'}], position: 185, duration: 0 },
                { id: "eid32", tween: [ "style", "${_itdata}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid33", tween: [ "style", "${_itdata}", "display", 'block', { fromValue: 'none'}], position: 3779, duration: 0 },
                { id: "eid54", tween: [ "style", "${_Text5}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid55", tween: [ "style", "${_Text5}", "display", 'block', { fromValue: 'none'}], position: 5259, duration: 0 },
                { id: "eid52", tween: [ "style", "${_packet2}", "top", '114px', { fromValue: '124px'}], position: 4550, duration: 400 },
                { id: "eid25", tween: [ "style", "${_packet}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid26", tween: [ "style", "${_packet}", "display", 'block', { fromValue: 'none'}], position: 3079, duration: 0 },
                { id: "eid31", tween: [ "style", "${_packet}", "display", 'none', { fromValue: 'block'}], position: 3779, duration: 0 },
                { id: "eid121", tween: [ "style", "${_mlitdata}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid122", tween: [ "style", "${_mlitdata}", "display", 'block', { fromValue: 'none'}], position: 10935, duration: 0 }            ]
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
})(jQuery, AdobeEdge, "EDGE-263903234");
