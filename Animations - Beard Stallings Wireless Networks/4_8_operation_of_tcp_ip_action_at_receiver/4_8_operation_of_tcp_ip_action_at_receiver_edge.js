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
                id: 'tcparr',
                display: 'block',
                type: 'image',
                rect: ['462px', '124px','31px','69px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"tcparr.png",'0px','0px']
            },
            {
                id: 'llc',
                display: 'block',
                type: 'image',
                rect: ['419px', '455px','114px','71px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"llc.png",'0px','0px']
            },
            {
                id: 'llcarr1',
                display: 'block',
                type: 'image',
                rect: ['460px', '506px','32px','70px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"llcarr1.png",'0px','0px']
            },
            {
                id: 'mlit',
                display: 'block',
                type: 'image',
                rect: ['246px', '643px','176px','38px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"mlit.png",'0px','0px']
            },
            {
                id: 'Text3',
                display: 'block',
                type: 'text',
                rect: ['32px', '683px','286px','auto','auto', 'auto'],
                text: "14. Arriving at destination. The incoming signal is received over the transmission medium and interpreted as a frame of bits.",
                align: "left",
                font: ['\'Times New Roman\', Times, serif', [150, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: 'Text2',
                display: 'block',
                type: 'text',
                rect: ['128px', '750px','auto','auto','auto', 'auto'],
                text: "Click or Touch on Figure for Each Step of the  Animation",
                align: "center",
                font: ['\'Times New Roman\', Times, serif', [150, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: 'phy',
                display: 'block',
                type: 'image',
                rect: ['419px', '634px','118px','70px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"phy.png",'0px','0px']
            },
            {
                id: 'phyarr',
                display: 'block',
                type: 'image',
                rect: ['-68px', '661px','57px','27px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"phyarr.png",'0px','0px']
            },
            {
                id: 'Text',
                type: 'text',
                rect: ['128px', '787px','auto','auto','auto', 'auto'],
                text: "Figure 4.8 Operation of TCP/IP: Action at Receiver",
                align: "center",
                font: ['Times New Roman, Times, serif', [190, "%"], "rgba(0,0,0,1)", "700", "none", ""]
            },
            {
                id: 'mac',
                display: 'block',
                type: 'image',
                rect: ['418px', '598px','119px','69px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"mac.png",'0px','0px']
            },
            {
                id: 'macarr',
                display: 'block',
                type: 'image',
                rect: ['465px', '556px','24px','76px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"macarr.png",'0px','0px']
            },
            {
                id: 'packet',
                display: 'block',
                type: 'image',
                rect: ['464px', '604px','41px','26px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"packet.png",'0px','0px']
            },
            {
                id: 'litdata',
                display: 'block',
                type: 'image',
                rect: ['395px', '544px','142px','37px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"litdata.png",'0px','0px']
            },
            {
                id: 'Text4',
                display: 'block',
                type: 'text',
                rect: ['32px', '587px','371px','auto','auto', 'auto'],
                text: "15. Processing the frame. The MAC layer removes the header and trailer and processes them. The frame check sequence is used for error detection.",
                align: "left",
                font: ['\'Times New Roman\', Times, serif', [150, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: 'litdata2',
                display: 'block',
                type: 'image',
                rect: ['395px', '544px','142px','37px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"litdata.png",'0px','0px']
            },
            {
                id: 'packet2',
                display: 'block',
                type: 'image',
                rect: ['463px', '461px','41px','26px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"packet.png",'0px','0px']
            },
            {
                id: 'itdata',
                display: 'block',
                type: 'image',
                rect: ['417px', '401px','124px','35px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"itdata.png",'0px','0px']
            },
            {
                id: 'Text5',
                display: 'block',
                type: 'text',
                rect: ['32px', '493px','359px','auto','auto', 'auto'],
                text: "16. Processing the LLC PDU. The LLC layer removes the header and processes it. The sequence number is used for flow and error control.",
                align: "left",
                font: ['\'Times New Roman\', Times, serif', [150, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: 'llcarr2',
                display: 'block',
                type: 'image',
                rect: ['459px', '418px','32px','53px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"llcarr.png",'0px','0px']
            },
            {
                id: 'macarr22',
                display: 'block',
                type: 'image',
                rect: ['461px', '366px','28px','53px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"macarr2.png",'0px','0px']
            },
            {
                id: 'iparr',
                display: 'block',
                type: 'image',
                rect: ['463px', '272px','27px','69px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"iparr.png",'0px','0px']
            },
            {
                id: 'itdata2',
                display: 'block',
                type: 'image',
                rect: ['417px', '401px','124px','35px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"itdata.png",'0px','0px']
            },
            {
                id: 'ip',
                display: 'block',
                type: 'image',
                rect: ['419px', '307px','112px','76px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"ip.png",'0px','0px']
            },
            {
                id: 'packet3',
                display: 'block',
                type: 'image',
                rect: ['464px', '281px','41px','26px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"packet.png",'0px','0px']
            },
            {
                id: 'tdata',
                display: 'block',
                type: 'image',
                rect: ['434px', '260px','105px','34px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"tdata.png",'0px','0px']
            },
            {
                id: 'Text6',
                display: 'block',
                type: 'text',
                rect: ['32px', '393px','359px','auto','auto', 'auto'],
                text: "17. Processing the IP datagram. IP removes the header. The frame check sequence and other control information are processed.",
                align: "left",
                font: ['\'Times New Roman\', Times, serif', [150, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: 'tcp',
                display: 'block',
                type: 'image',
                rect: ['417px', '166px','116px','69px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"tcp.png",'0px','0px']
            },
            {
                id: 'iparr2',
                display: 'block',
                type: 'image',
                rect: ['459px', '217px','36px','57px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"iparr2.png",'0px','0px']
            },
            {
                id: 'tdata2',
                display: 'block',
                type: 'image',
                rect: ['434px', '260px','105px','34px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"tdata.png",'0px','0px']
            },
            {
                id: 'packet4',
                display: 'block',
                type: 'image',
                rect: ['465px', '172px','41px','26px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"packet.png",'0px','0px']
            },
            {
                id: 'data',
                display: 'block',
                type: 'image',
                rect: ['434px', '113px','87px','35px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"data.png",'0px','0px']
            },
            {
                id: 'Text9',
                display: 'block',
                type: 'text',
                rect: ['32px', '122px','307px','auto','auto', 'auto'],
                text: "19. Reassembling the data. If the TCP has broken the user data into multiple segments, these are reassembled and the block is passed up to the application.",
                align: "left",
                font: ['\'Times New Roman\', Times, serif', [150, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: 'app2',
                display: 'block',
                type: 'image',
                rect: ['414px', '25px','120px','69px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"app.png",'0px','0px']
            },
            {
                id: 'tcparr2',
                display: 'block',
                type: 'image',
                rect: ['457px', '78px','34px','53px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"tcparr2.png",'0px','0px']
            },
            {
                id: 'data2',
                display: 'block',
                type: 'image',
                rect: ['434px', '113px','87px','35px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"data.png",'0px','0px']
            },
            {
                id: 'Text10',
                display: 'block',
                type: 'text',
                rect: ['32px', '33px','328px','auto','auto', 'auto'],
                text: "20. Delivering the data. The application performs any needed transformations, including decompression and decryption, and directs the data to the appropriate file or other destination.",
                align: "left",
                font: ['\'Times New Roman\', Times, serif', [150, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: 'Text7',
                display: 'block',
                type: 'text',
                rect: ['32px', '214px','343px','auto','auto', 'auto'],
                text: "18. Processing the TCP segment. TCP removes the header. It checks the frame check sequence and acknowledges if there is a match and discards for mismatch. Flow control is also performed.",
                align: "left",
                font: ['\'Times New Roman\', Times, serif', [150, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
            }],
            symbolInstances: [

            ]
        },
    states: {
        "Base State": {
            "${_packet}": [
                ["style", "top", '604px'],
                ["style", "left", '464px'],
                ["style", "display", 'block']
            ],
            "${_Text2}": [
                ["style", "top", '755px'],
                ["style", "text-align", 'center'],
                ["style", "display", 'block'],
                ["style", "left", '114px'],
                ["style", "font-size", '94%']
            ],
            "${_packet4}": [
                ["style", "top", '172px'],
                ["style", "left", '465px'],
                ["style", "display", 'block']
            ],
            "${_tcparr}": [
                ["style", "top", '124px'],
                ["style", "left", '462px'],
                ["style", "display", 'block']
            ],
            "${_ip}": [
                ["style", "top", '307px'],
                ["style", "left", '419px'],
                ["style", "display", 'block']
            ],
            "${_Text4}": [
                ["style", "top", '581px'],
                ["style", "display", 'block'],
                ["style", "width", '371px'],
                ["style", "left", '32px'],
                ["style", "font-size", '94%']
            ],
            "${_phy}": [
                ["style", "top", '634px'],
                ["style", "left", '419px'],
                ["style", "display", 'block']
            ],
            "${_itdata}": [
                ["style", "top", '401px'],
                ["style", "left", '417px'],
                ["style", "display", 'block']
            ],
            "${_llcarr1}": [
                ["style", "top", '506px'],
                ["style", "left", '460px'],
                ["style", "display", 'block']
            ],
            "${_itdata2}": [
                ["style", "top", '401px'],
                ["style", "left", '417px'],
                ["style", "display", 'block']
            ],
            "${_packet3}": [
                ["style", "top", '316px'],
                ["style", "left", '464px'],
                ["style", "display", 'block']
            ],
            "${_iparr}": [
                ["style", "top", '272px'],
                ["style", "left", '463px'],
                ["style", "display", 'block']
            ],
            "${_litdata}": [
                ["style", "display", 'block'],
                ["style", "left", '395px'],
                ["style", "top", '544px']
            ],
            "${_tdata}": [
                ["style", "top", '260px'],
                ["style", "left", '434px'],
                ["style", "display", 'block']
            ],
            "${_mac}": [
                ["style", "top", '598px'],
                ["style", "left", '418px'],
                ["style", "display", 'block']
            ],
            "${_Text3}": [
                ["style", "top", '683px'],
                ["style", "display", 'block'],
                ["style", "width", '286px'],
                ["style", "left", '32px'],
                ["style", "font-size", '94%']
            ],
            "${_Text5}": [
                ["style", "top", '493px'],
                ["style", "display", 'block'],
                ["style", "width", '359px'],
                ["style", "left", '32px'],
                ["style", "font-size", '94%']
            ],
            "${_tcp}": [
                ["style", "top", '166px'],
                ["style", "left", '417px'],
                ["style", "display", 'block']
            ],
            "${_llc}": [
                ["style", "display", 'block'],
                ["style", "left", '419px'],
                ["style", "top", '455px']
            ],
            "${_macarr}": [
                ["style", "top", '556px'],
                ["style", "left", '465px'],
                ["style", "display", 'block']
            ],
            "${_data2}": [
                ["style", "top", '113px'],
                ["style", "left", '434px'],
                ["style", "display", 'block']
            ],
            "${_llcarr2}": [
                ["style", "top", '418px'],
                ["style", "left", '459px'],
                ["style", "display", 'block']
            ],
            "${_data}": [
                ["style", "top", '113px'],
                ["style", "left", '434px'],
                ["style", "display", 'block']
            ],
            "${_iparr2}": [
                ["style", "top", '217px'],
                ["style", "left", '459px'],
                ["style", "display", 'block']
            ],
            "${_Text9}": [
                ["style", "top", '122px'],
                ["style", "display", 'block'],
                ["style", "width", '307px'],
                ["style", "left", '32px'],
                ["style", "font-size", '94%']
            ],
            "${_app2}": [
                ["style", "top", '25px'],
                ["style", "left", '414px'],
                ["style", "display", 'block']
            ],
            "${_phyarr}": [
                ["style", "top", '661px'],
                ["style", "left", '-68px'],
                ["style", "display", 'block']
            ],
            "${_tcparr2}": [
                ["style", "top", '78px'],
                ["style", "left", '457px'],
                ["style", "display", 'block']
            ],
            "${_litdata2}": [
                ["style", "top", '544px'],
                ["style", "left", '395px'],
                ["style", "display", 'block']
            ],
            "${_Text7}": [
                ["style", "top", '214px'],
                ["style", "display", 'block'],
                ["style", "width", '343px'],
                ["style", "left", '32px'],
                ["style", "font-size", '94%']
            ],
            "${_Text6}": [
                ["style", "top", '393px'],
                ["style", "display", 'block'],
                ["style", "width", '359px'],
                ["style", "left", '32px'],
                ["style", "font-size", '94%']
            ],
            "${_mlit}": [
                ["style", "top", '643px'],
                ["style", "left", '-181px'],
                ["style", "display", 'block']
            ],
            "${_Text}": [
                ["style", "top", '780px'],
                ["style", "text-align", 'center'],
                ["style", "font-weight", '700'],
                ["style", "font-family", 'Times New Roman, Times, serif'],
                ["style", "left", '87px'],
                ["style", "font-size", '119%']
            ],
            "${_packet2}": [
                ["style", "top", '461px'],
                ["style", "left", '463px'],
                ["style", "display", 'block']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(255,255,255,1)'],
                ["style", "width", '600px'],
                ["style", "height", '810px'],
                ["style", "overflow", 'hidden']
            ],
            "${_macarr22}": [
                ["style", "top", '366px'],
                ["style", "left", '461px'],
                ["style", "display", 'block']
            ],
            "${_tdata2}": [
                ["style", "top", '260px'],
                ["style", "left", '434px'],
                ["style", "display", 'block']
            ],
            "${_Text10}": [
                ["style", "top", '33px'],
                ["style", "display", 'block'],
                ["style", "width", '328px'],
                ["style", "left", '32px'],
                ["style", "font-size", '94%']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 12446,
            autoPlay: true,
            timeline: [
                { id: "eid156", tween: [ "style", "${_Text9}", "font-size", '94%', { fromValue: '94%'}], position: 12305, duration: 0 },
                { id: "eid83", tween: [ "style", "${_packet3}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid84", tween: [ "style", "${_packet3}", "display", 'block', { fromValue: 'none'}], position: 7665, duration: 0 },
                { id: "eid87", tween: [ "style", "${_packet3}", "display", 'none', { fromValue: 'block'}], position: 8165, duration: 0 },
                { id: "eid86", tween: [ "style", "${_packet3}", "top", '281px', { fromValue: '316px'}], position: 7665, duration: 500 },
                { id: "eid159", tween: [ "style", "${_Text4}", "font-size", '94%', { fromValue: '94%'}], position: 12305, duration: 0 },
                { id: "eid157", tween: [ "style", "${_Text7}", "font-size", '94%', { fromValue: '94%'}], position: 12305, duration: 0 },
                { id: "eid9", tween: [ "style", "${_phyarr}", "left", '390px', { fromValue: '-68px'}], position: 350, duration: 1000 },
                { id: "eid94", tween: [ "style", "${_iparr2}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid95", tween: [ "style", "${_iparr2}", "display", 'block', { fromValue: 'none'}], position: 8750, duration: 0 },
                { id: "eid22", tween: [ "style", "${_macarr}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid23", tween: [ "style", "${_macarr}", "display", 'block', { fromValue: 'none'}], position: 2295, duration: 0 },
                { id: "eid18", tween: [ "style", "${_mac}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid19", tween: [ "style", "${_mac}", "display", 'block', { fromValue: 'none'}], position: 2040, duration: 0 },
                { id: "eid57", tween: [ "style", "${_Text5}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid58", tween: [ "style", "${_Text5}", "display", 'block', { fromValue: 'none'}], position: 6126, duration: 0 },
                { id: "eid5", tween: [ "style", "${_phyarr}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid6", tween: [ "style", "${_phyarr}", "display", 'block', { fromValue: 'none'}], position: 350, duration: 0 },
                { id: "eid134", tween: [ "style", "${_Text10}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid135", tween: [ "style", "${_Text10}", "display", 'block', { fromValue: 'none'}], position: 12305, duration: 0 },
                { id: "eid54", tween: [ "style", "${_itdata}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid55", tween: [ "style", "${_itdata}", "display", 'block', { fromValue: 'none'}], position: 5829, duration: 0 },
                { id: "eid30", tween: [ "style", "${_packet}", "top", '570px', { fromValue: '604px'}], position: 2500, duration: 500 },
                { id: "eid52", tween: [ "style", "${_packet2}", "top", '424px', { fromValue: '461px'}], position: 5129, duration: 700 },
                { id: "eid10", tween: [ "style", "${_mlit}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid11", tween: [ "style", "${_mlit}", "display", 'block', { fromValue: 'none'}], position: 605, duration: 0 },
                { id: "eid123", tween: [ "style", "${_app2}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid124", tween: [ "style", "${_app2}", "display", 'block', { fromValue: 'none'}], position: 11075, duration: 0 },
                { id: "eid136", tween: [ "style", "${_Text2}", "display", 'none', { fromValue: 'block'}], position: 12305, duration: 0 },
                { id: "eid117", tween: [ "style", "${_data}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid118", tween: [ "style", "${_data}", "display", 'block', { fromValue: 'none'}], position: 10620, duration: 0 },
                { id: "eid99", tween: [ "style", "${_tdata2}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid100", tween: [ "style", "${_tdata2}", "display", 'block', { fromValue: 'none'}], position: 9140, duration: 0 },
                { id: "eid107", tween: [ "style", "${_tdata2}", "display", 'none', { fromValue: 'block'}], position: 9640, duration: 0 },
                { id: "eid88", tween: [ "style", "${_tdata}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid89", tween: [ "style", "${_tdata}", "display", 'block', { fromValue: 'none'}], position: 8165, duration: 0 },
                { id: "eid125", tween: [ "style", "${_tcparr2}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid126", tween: [ "style", "${_tcparr2}", "display", 'block', { fromValue: 'none'}], position: 11293, duration: 0 },
                { id: "eid132", tween: [ "style", "${_data2}", "top", '77px', { fromValue: '113px'}], position: 11500, duration: 500 },
                { id: "eid71", tween: [ "style", "${_itdata2}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid72", tween: [ "style", "${_itdata2}", "display", 'block', { fromValue: 'none'}], position: 7000, duration: 0 },
                { id: "eid78", tween: [ "style", "${_itdata2}", "display", 'none', { fromValue: 'block'}], position: 7500, duration: 0 },
                { id: "eid155", tween: [ "style", "${_Text}", "left", '87px', { fromValue: '87px'}], position: 12305, duration: 0 },
                { id: "eid158", tween: [ "style", "${_Text6}", "font-size", '94%', { fromValue: '94%'}], position: 12305, duration: 0 },
                { id: "eid44", tween: [ "style", "${_packet2}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid45", tween: [ "style", "${_packet2}", "display", 'block', { fromValue: 'none'}], position: 5129, duration: 0 },
                { id: "eid53", tween: [ "style", "${_packet2}", "display", 'none', { fromValue: 'block'}], position: 5829, duration: 0 },
                { id: "eid77", tween: [ "style", "${_itdata2}", "top", '365px', { fromValue: '401px'}], position: 7000, duration: 500 },
                { id: "eid160", tween: [ "style", "${_Text5}", "font-size", '94%', { fromValue: '94%'}], position: 12305, duration: 0 },
                { id: "eid16", tween: [ "style", "${_Text3}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid17", tween: [ "style", "${_Text3}", "display", 'block', { fromValue: 'none'}], position: 1865, duration: 0 },
                { id: "eid163", tween: [ "style", "${_Text2}", "font-size", '94%', { fromValue: '94%'}], position: 12305, duration: 0 },
                { id: "eid161", tween: [ "style", "${_Text10}", "font-size", '94%', { fromValue: '94%'}], position: 12305, duration: 0 },
                { id: "eid166", tween: [ "style", "${_Text2}", "left", '114px', { fromValue: '114px'}], position: 1225, duration: 0 },
                { id: "eid154", tween: [ "style", "${_Text2}", "left", '114px', { fromValue: '114px'}], position: 12305, duration: 0 },
                { id: "eid165", tween: [ "style", "${_Text2}", "top", '755px', { fromValue: '755px'}], position: 1225, duration: 0 },
                { id: "eid150", tween: [ "style", "${_Text2}", "top", '755px', { fromValue: '755px'}], position: 12305, duration: 0 },
                { id: "eid69", tween: [ "style", "${_macarr22}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid70", tween: [ "style", "${_macarr22}", "display", 'block', { fromValue: 'none'}], position: 6540, duration: 0 },
                { id: "eid151", tween: [ "style", "${_Text}", "top", '780px', { fromValue: '780px'}], position: 12305, duration: 0 },
                { id: "eid162", tween: [ "style", "${_Text3}", "font-size", '94%', { fromValue: '94%'}], position: 12305, duration: 0 },
                { id: "eid90", tween: [ "style", "${_Text6}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid91", tween: [ "style", "${_Text6}", "display", 'block', { fromValue: 'none'}], position: 8407, duration: 0 },
                { id: "eid64", tween: [ "style", "${_llcarr1}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid65", tween: [ "style", "${_llcarr1}", "display", 'block', { fromValue: 'none'}], position: 3750, duration: 0 },
                { id: "eid121", tween: [ "style", "${_Text9}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid122", tween: [ "style", "${_Text9}", "display", 'block', { fromValue: 'none'}], position: 10895, duration: 0 },
                { id: "eid37", tween: [ "style", "${_litdata2}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid38", tween: [ "style", "${_litdata2}", "display", 'block', { fromValue: 'none'}], position: 4250, duration: 0 },
                { id: "eid43", tween: [ "style", "${_litdata2}", "display", 'none', { fromValue: 'block'}], position: 4950, duration: 0 },
                { id: "eid106", tween: [ "style", "${_tdata2}", "top", '224px', { fromValue: '260px'}], position: 9140, duration: 500 },
                { id: "eid79", tween: [ "style", "${_ip}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid80", tween: [ "style", "${_ip}", "display", 'block', { fromValue: 'none'}], position: 6290, duration: 0 },
                { id: "eid67", tween: [ "style", "${_llcarr2}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid68", tween: [ "style", "${_llcarr2}", "display", 'block', { fromValue: 'none'}], position: 3930, duration: 0 },
                { id: "eid81", tween: [ "style", "${_iparr}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid82", tween: [ "style", "${_iparr}", "display", 'block', { fromValue: 'none'}], position: 6795, duration: 0 },
                { id: "eid92", tween: [ "style", "${_tcp}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid93", tween: [ "style", "${_tcp}", "display", 'block', { fromValue: 'none'}], position: 8573, duration: 0 },
                { id: "eid62", tween: [ "style", "${_llc}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid63", tween: [ "style", "${_llc}", "display", 'block', { fromValue: 'none'}], position: 3500, duration: 0 },
                { id: "eid15", tween: [ "style", "${_mlit}", "left", '246px', { fromValue: '-181px'}], position: 605, duration: 1000 },
                { id: "eid115", tween: [ "style", "${_packet4}", "top", '136px', { fromValue: '172px'}], position: 10120, duration: 500 },
                { id: "eid119", tween: [ "style", "${_Text7}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid120", tween: [ "style", "${_Text7}", "display", 'block', { fromValue: 'none'}], position: 9925, duration: 0 },
                { id: "eid108", tween: [ "style", "${_packet4}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid109", tween: [ "style", "${_packet4}", "display", 'block', { fromValue: 'none'}], position: 10120, duration: 0 },
                { id: "eid116", tween: [ "style", "${_packet4}", "display", 'none', { fromValue: 'block'}], position: 10620, duration: 0 },
                { id: "eid97", tween: [ "style", "${_tcparr}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid98", tween: [ "style", "${_tcparr}", "display", 'block', { fromValue: 'none'}], position: 8950, duration: 0 },
                { id: "eid41", tween: [ "style", "${_litdata2}", "top", '508px', { fromValue: '544px'}], position: 4250, duration: 700 },
                { id: "eid3", tween: [ "style", "${_phy}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid4", tween: [ "style", "${_phy}", "display", 'block', { fromValue: 'none'}], position: 155, duration: 0 },
                { id: "eid35", tween: [ "style", "${_Text4}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid36", tween: [ "style", "${_Text4}", "display", 'block', { fromValue: 'none'}], position: 3345, duration: 0 },
                { id: "eid33", tween: [ "style", "${_litdata}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid34", tween: [ "style", "${_litdata}", "display", 'block', { fromValue: 'none'}], position: 3045, duration: 0 },
                { id: "eid164", tween: [ "style", "${_Text}", "font-size", '119%', { fromValue: '119%'}], position: 12305, duration: 0 },
                { id: "eid25", tween: [ "style", "${_packet}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid26", tween: [ "style", "${_packet}", "display", 'block', { fromValue: 'none'}], position: 2500, duration: 0 },
                { id: "eid31", tween: [ "style", "${_packet}", "display", 'none', { fromValue: 'block'}], position: 3045, duration: 0 },
                { id: "eid127", tween: [ "style", "${_data2}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid128", tween: [ "style", "${_data2}", "display", 'block', { fromValue: 'none'}], position: 11500, duration: 0 },
                { id: "eid133", tween: [ "style", "${_data2}", "display", 'none', { fromValue: 'block'}], position: 12000, duration: 0 }            ]
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
})(jQuery, AdobeEdge, "EDGE-187945097");
