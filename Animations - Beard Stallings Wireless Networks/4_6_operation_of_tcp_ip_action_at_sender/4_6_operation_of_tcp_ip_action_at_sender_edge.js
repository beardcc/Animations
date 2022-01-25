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
                id: 'appdoarr',
                display: 'block',
                type: 'image',
                rect: ['62.4%', '114px','69px','35px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"appdoarr.png",'0px','0px']
            },
            {
                id: 'Text4',
                display: 'block',
                type: 'text',
                rect: ['62.4%', '13px','205px','auto','auto', 'auto'],
                text: "Peer-to-peer dialogue. Before data are sent, the sending and receiving applications agree on format and encoding and agree to exchange data.",
                align: "left",
                font: ['\'Times New Roman\', Times, serif', [115, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: 'apparr',
                display: 'block',
                type: 'image',
                rect: ['52.2%', '136px','27px','59px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"apparr.png",'0px','0px']
            },
            {
                id: 'data',
                display: 'block',
                type: 'image',
                rect: ['45.8%', '140px','99px','35px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"data.png",'0px','0px']
            },
            {
                id: 'data2',
                display: 'block',
                type: 'image',
                rect: ['252px', '198px','99px','35px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"data.png",'0px','0px']
            },
            {
                id: 'Text5',
                display: 'block',
                type: 'text',
                rect: ['1.8%', '113px','236px','auto','auto', 'auto'],
                text: "2. Using a common syntax. If necessary the data are converted to a form expected by the destination. This may include a different character code, the use of encryption, and/or compression.",
                align: "left",
                font: ['\'Times New Roman\', Times, serif', [115, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: 'tcp',
                display: 'block',
                type: 'image',
                rect: ['43.5%', '217px','131px','92px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"tcp.png",'0px','0px']
            },
            {
                id: 'Text',
                type: 'text',
                rect: ['51.5%', '752px','auto','auto','auto', 'auto'],
                text: "Figure 4.6 Operation of TCP/IP: Action at Sender",
                  align: "center",
                font: ['Times New Roman, Times, serif', [119, "%"], "rgba(0,0,0,1)", "700", "none", ""]
            },
            {
                id: 'Text2',
                display: 'block',
                type: 'text',
                rect: ['18.7%', '730px','auto','auto','auto', 'auto'],
                text: "Click or Touch on Figure for Each Step of Animation",
                align: "center",
                font: ['\'Times New Roman\', Times, serif', [94, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: 'app',
                display: 'block',
                type: 'image',
                rect: ['44.7%', '84px','115px','72px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"app.png",'0px','0px']
            },
            {
                id: 'Text3',
                display: 'block',
                type: 'text',
                rect: ['1.8%', '13px','250px','auto','auto', 'auto'],
                text: "1. Preparing the data. The application protocol prepares a block of data for transmission. For example, an email message (SMTP), a file (FTP), or a block of user input (TELNET).",
                align: "left",
                font: ['\'Times New Roman\', Times, serif', [115, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: 'tcparr3',
                display: 'block',
                type: 'image',
                rect: ['51.5%', '198px','34px','64px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"tcparr.png",'0px','0px']
            },
            {
                id: 'datapacket',
                display: 'block',
                type: 'image',
                rect: ['280px', '195px','44px','54px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"datapacket.png",'0px','0px']
            },
            {
                id: 'tcparr2',
                display: 'block',
                type: 'image',
                rect: ['50.7%', '286px','42px','55px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"tcparr2.png",'0px','0px']
            },
            {
                id: 'datapacket2',
                display: 'block',
                type: 'image',
                rect: ['285px', '276px','34px','45px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"datapacket.png",'0px','0px']
            },
            {
                id: 'tdata',
                display: 'block',
                type: 'image',
                rect: ['44.4%', '312px','114px','44px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"tdata.png",'0px','0px']
            },
            {
                id: 'Text6',
                display: 'block',
                type: 'text',
                rect: ['1.8%', '221px','221px','auto','auto', 'auto'],
                text: "3. Segmenting the data. TCP may break the data into number of segments, keeping track of their sequence. Each TCP segment includes a header containing a sequence number and a frame check sequence to detect errors.",
                align: "left",
                font: ['\'Times New Roman\', Times, serif', [115, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: 'Text9',
                display: 'block',
                type: 'text',
                rect: ['1.8%', '347px','250px','auto','auto', 'auto'],
                text: "4. Duplicating segments. A copy is made of each TCP segment, in case the loss or damage of a segment necessitates retransmission. When an acknowledgment is received from the other TCP entity a segment is erased.",
                align: "left",
                font: ['\'Times New Roman\', Times, serif', [115, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: 'ip',
                display: 'block',
                type: 'image',
                rect: ['44.2%', '360px','120px','87px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"ip.png",'0px','0px']
            },
            {
                id: 'iparr',
                display: 'block',
                type: 'image',
                rect: ['51.5%', '339px','42px','63px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"iparr.png",'0px','0px']
            },
            {
                id: 'tdata2',
                display: 'block',
                type: 'image',
                rect: ['245px', '312px','114px','44px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"tdata.png",'0px','0px']
            },
            {
                id: 'datapacket3',
                display: 'block',
                type: 'image',
                rect: ['287px', '362px','34px','44px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"datapacket.png",'0px','0px']
            },
            {
                id: 'iparr2',
                display: 'block',
                type: 'image',
                rect: ['51.8%', '427px','31px','59px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"iparr2.png",'0px','0px']
            },
            {
                id: 'datapacket4',
                display: 'block',
                type: 'image',
                rect: ['287px', '420px','34px','44px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"datapacket.png",'0px','0px']
            },
            {
                id: 'itdata',
                display: 'block',
                type: 'image',
                rect: ['44%', '466px','127px','32px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"itdata.png",'0px','0px']
            },
            {
                id: 'Text10',
                display: 'block',
                type: 'text',
                rect: ['1.8%', '477px','242px','auto','auto', 'auto'],
                text: "5. Fragmenting segments. IP may break a TCP segment into a number of datagrams to meet size requirements of the intervening networks. Each containing a destination address, a frame check sequence, and other control information.",
                align: "left",
                font: ['\'Times New Roman\', Times, serif', [115, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: 'linkphy',
                display: 'block',
                type: 'image',
                rect: ['44.2%', '520px','120px','104px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"linkphy.png",'0px','0px']
            },
            {
                id: 'tcpdoarr',
                display: 'block',
                type: 'image',
                rect: ['61.1%', '260px','77px','34px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"tcpdoarr.png",'0px','0px']
            },
            {
                id: 'Text7',
                display: 'block',
                type: 'text',
                rect: ['67.3%', '212px','180px','auto','auto', 'auto'],
                text: "Peer-to peer dialogue. The two TCP entities agree to open a connection.",
                align: "left",
                font: ['\'Times New Roman\', Times, serif', [115, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: 'llarr',
                display: 'block',
                type: 'image',
                rect: ['51.5%', '484px','35px','68px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"llarr.png",'0px','0px']
            },
            {
                id: 'itdata2',
                display: 'block',
                type: 'image',
                rect: ['242px', '466px','127px','32px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"itdata.png",'0px','0px']
            },
            {
                id: 'datapacket5',
                display: 'block',
                type: 'image',
                rect: ['286px', '487px','35px','35px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"datapacket.png",'0px','0px']
            },
            {
                id: 'ipdoarr',
                display: 'block',
                type: 'image',
                rect: ['60.6%', '400px','82px','41px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"ipdoarr.png",'0px','0px']
            },
            {
                id: 'Text11',
                display: 'block',
                type: 'text',
                rect: ['68.7%', '320px','171px','27px','auto', 'auto'],
                text: "Peer-to-peer dialogue. Each IP datagram is forwarded through networks and routers to the destination system.",
                align: "left",
                font: ['\'Times New Roman\', Times, serif', [115, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: 'Text12',
                display: 'block',
                type: 'text',
                rect: ['1.8%', '606px','211px','auto','auto', 'auto'],
                text: "6. Framing. A link layer header is added to each IP datagram to form a frame. The header contains a connection identifier and a header error control field.",
                align: "left",
                font: ['\'Times New Roman\', Times, serif', [115, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: 'lldoarr',
                display: 'block',
                type: 'image',
                rect: ['61.8%', '550px','72px','28px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"lldoarr.png",'0px','0px']
            },
            {
                id: 'Text13',
                display: 'block',
                type: 'text',
                rect: ['68.7%', '500px','153px','auto','auto', 'auto'],
                text: "Peer-to-peer dialogue. Each cell is forwarded through the network.",
                align: "left",
                font: ['\'Times New Roman\', Times, serif', [115, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: 'phyarr',
                display: 'block',
                type: 'image',
                rect: ['61.5%', '580px','76px','37px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"phyarr.png",'0px','0px']
            },
            {
                id: 'aitdata',
                type: 'image',
                rect: ['370px', '557px','28.2%','5.6%','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"aitdata.png",'0%','0%','155px','44px']
            },
            {
                id: 'Text14',
                display: 'block',
                type: 'text',
                rect: ['378px', '617px','155px','auto','auto', 'auto'],
                text: "7. Transmission. Each cell is transmitted over the medium as a sequence of bits.",
                align: "left",
                font: ['\'Times New Roman\', Times, serif', [94, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: 'litdata',
                display: 'block',
                type: 'image',
                rect: ['67.5%', '561px','27.5%','4.9%','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"litdata.png",'0%','0%','151px','38px']
            }],
            symbolInstances: [

            ]
        },
    states: {
        "Base State": {
            "${_Text2}": [
                ["style", "top", '730px'],
                ["style", "display", 'block'],
                ["style", "left", '20.91%'],
                ["style", "font-size", '94%']
            ],
            "${_ip}": [
                ["style", "top", '360px'],
                ["style", "left", '44.18%'],
                ["style", "display", 'block']
            ],
            "${_Text14}": [
                ["style", "top", '617px'],
                ["style", "display", 'block'],
                ["style", "left", '378px'],
                ["style", "width", '155px']
            ],
            "${_Text4}": [
                ["style", "top", '13px'],
                ["style", "display", 'block'],
                ["style", "width", '205px'],
                ["style", "left", '62.36%'],
                ["style", "font-size", '94%']
            ],
            "${_aitdata}": [
                ["style", "top", '557px'],
                ["style", "left", '370px'],
                ["style", "width", '2.55%']
            ],
            "${_itdata}": [
                ["style", "top", '466px'],
                ["style", "left", '44%'],
                ["style", "display", 'block']
            ],
            "${_ipdoarr}": [
                ["style", "top", '400px'],
                ["style", "left", '60.55%'],
                ["style", "display", 'block']
            ],
            "${_Text10}": [
                ["style", "top", '477px'],
                ["style", "display", 'block'],
                ["style", "width", '229px'],
                ["style", "left", '1.82%'],
                ["style", "font-size", '94%']
            ],
            "${_datapacket3}": [
                ["style", "top", '337px'],
                ["style", "height", '44px'],
                ["style", "display", 'block'],
                ["style", "left", '287px'],
                ["style", "width", '34px']
            ],
            "${_itdata2}": [
                ["style", "top", '466px'],
                ["style", "left", '242px'],
                ["style", "display", 'block']
            ],
            "${_data2}": [
                ["style", "top", '175px'],
                ["style", "left", '252px'],
                ["style", "display", 'block']
            ],
            "${_iparr}": [
                ["style", "top", '339px'],
                ["style", "left", '51.45%'],
                ["style", "display", 'block']
            ],
            "${_litdata}": [
                ["style", "display", 'block'],
                ["style", "top", '562px'],
                ["style", "left", '67.64%'],
                ["style", "width", '2.55%']
            ],
            "${_Text7}": [
                ["style", "top", '212px'],
                ["style", "display", 'block'],
                ["style", "width", '180px'],
                ["style", "left", '66%'],
                ["style", "font-size", '94%']
            ],
            "${_app}": [
                ["style", "top", '84px'],
                ["style", "left", '44.73%'],
                ["style", "display", 'block']
            ],
            "${_Text3}": [
                ["style", "top", '13px'],
                ["style", "display", 'block'],
                ["style", "width", '250px'],
                ["style", "left", '1.82%'],
                ["style", "font-size", '94%']
            ],
            "${_tcparr3}": [
                ["style", "top", '198px'],
                ["style", "left", '51.45%'],
                ["style", "display", 'block']
            ],
            "${_Text5}": [
                ["style", "top", '105px'],
                ["style", "display", 'block'],
                ["style", "width", '236px'],
                ["style", "left", '1.82%'],
                ["style", "font-size", '94%']
            ],
            "${_tcp}": [
                ["style", "top", '217px'],
                ["style", "left", '43.45%'],
                ["style", "display", 'block']
            ],
            "${_Text9}": [
                ["style", "top", '347px'],
                ["style", "display", 'block'],
                ["style", "width", '242px'],
                ["style", "left", '1.82%'],
                ["style", "font-size", '94%']
            ],
            "${_linkphy}": [
                ["style", "top", '520px'],
                ["style", "left", '44.18%'],
                ["style", "display", 'block']
            ],
            "${_lldoarr}": [
                ["style", "top", '550px'],
                ["style", "left", '61.82%'],
                ["style", "display", 'block']
            ],
            "${_datapacket2}": [
                ["style", "top", '276px'],
                ["style", "height", '45px'],
                ["style", "display", 'block'],
                ["style", "left", '285px'],
                ["style", "width", '34px']
            ],
            "${_Text11}": [
                ["style", "top", '320px'],
                ["style", "width", '171px'],
                ["style", "display", 'block'],
                ["style", "height", '27px'],
                ["style", "left", '68.73%'],
                ["style", "font-size", '94%']
            ],
            "${_phyarr}": [
                ["style", "top", '580px'],
                ["style", "left", '61.45%'],
                ["style", "display", 'block']
            ],
            "${_apparr}": [
                ["style", "top", '136px'],
                ["style", "left", '52.18%'],
                ["style", "display", 'block']
            ],
            "${_data}": [
                ["style", "top", '140px'],
                ["style", "left", '45.82%'],
                ["style", "display", 'block']
            ],
            "${_iparr2}": [
                ["style", "top", '427px'],
                ["style", "left", '51.82%'],
                ["style", "display", 'block']
            ],
            "${_Text6}": [
                ["style", "top", '217px'],
                ["style", "display", 'block'],
                ["style", "width", '242px'],
                ["style", "left", '1.82%'],
                ["style", "font-size", '94%']
            ],
            "${_datapacket5}": [
                ["style", "top", '487px'],
                ["style", "height", '35px'],
                ["style", "display", 'block'],
                ["style", "left", '286px'],
                ["style", "width", '35px']
            ],
            "${_tdata}": [
                ["style", "top", '312px'],
                ["style", "left", '44.36%'],
                ["style", "display", 'block']
            ],
            "${_tcparr2}": [
                ["style", "top", '286px'],
                ["style", "left", '50.73%'],
                ["style", "display", 'block']
            ],
            "${_datapacket4}": [
                ["style", "top", '421px'],
                ["style", "height", '44px'],
                ["style", "display", 'block'],
                ["style", "left", '286px'],
                ["style", "width", '34px']
            ],
            "${_Text13}": [
                ["style", "top", '500px'],
                ["style", "display", 'block'],
                ["style", "width", '153px'],
                ["style", "left", '68.73%'],
                ["style", "font-size", '94%']
            ],
            "${_appdoarr}": [
                ["style", "top", '114px'],
                ["style", "left", '62.36%'],
                ["style", "display", 'block']
            ],
            "${_llarr}": [
                ["style", "top", '484px'],
                ["style", "left", '51.45%'],
                ["style", "display", 'block']
            ],
            "${_Text}": [
                ["style", "top", '752px'],
                ["style", "font-weight", '700'],
                ["style", "font-family", 'Times New Roman, Times, serif'],
                ["style", "left", '15.09%'],
                ["style", "font-size", '119%']
            ],
            "${_Text12}": [
                ["style", "top", '623px'],
                ["style", "display", 'block'],
                ["style", "width", '211px'],
                ["style", "left", '1.82%'],
                ["style", "font-size", '94%']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(255,255,255,1)'],
                ["style", "width", '550px'],
                ["style", "height", '780px'],
                ["style", "overflow", 'hidden']
            ],
            "${_datapacket}": [
                ["style", "top", '192px'],
                ["style", "left", '281px'],
                ["style", "display", 'block']
            ],
            "${_tdata2}": [
                ["style", "top", '312px'],
                ["style", "left", '245px'],
                ["style", "display", 'block']
            ],
            "${_tcpdoarr}": [
                ["style", "top", '260px'],
                ["style", "left", '61.09%'],
                ["style", "display", 'block']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 12294,
            autoPlay: true,
            timeline: [
                { id: "eid122", tween: [ "style", "${_Text11}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid123", tween: [ "style", "${_Text11}", "display", 'block', { fromValue: 'none'}], position: 8415, duration: 0 },
                { id: "eid185", tween: [ "style", "${_Text9}", "font-size", '94%', { fromValue: '94%'}], position: 11815, duration: 0 },
                { id: "eid26", tween: [ "style", "${_tcparr3}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid27", tween: [ "style", "${_tcparr3}", "display", 'block', { fromValue: 'none'}], position: 2570, duration: 0 },
                { id: "eid188", tween: [ "style", "${_Text4}", "font-size", '94%', { fromValue: '94%'}], position: 11815, duration: 0 },
                { id: "eid186", tween: [ "style", "${_Text7}", "font-size", '94%', { fromValue: '94%'}], position: 11815, duration: 0 },
                { id: "eid141", tween: [ "style", "${_Text14}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid142", tween: [ "style", "${_Text14}", "display", 'block', { fromValue: 'none'}], position: 12140, duration: 0 },
                { id: "eid118", tween: [ "style", "${_datapacket5}", "top", '514px', { fromValue: '487px'}], position: 9640, duration: 400 },
                { id: "eid54", tween: [ "style", "${_tcpdoarr}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid55", tween: [ "style", "${_tcpdoarr}", "display", 'block', { fromValue: 'none'}], position: 4836, duration: 0 },
                { id: "eid91", tween: [ "style", "${_datapacket4}", "top", '437px', { fromValue: '421px'}], position: 7058, duration: 400 },
                { id: "eid128", tween: [ "style", "${_Text13}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid129", tween: [ "style", "${_Text13}", "display", 'block', { fromValue: 'none'}], position: 10805, duration: 0 },
                { id: "eid95", tween: [ "style", "${_Text10}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid96", tween: [ "style", "${_Text10}", "display", 'block', { fromValue: 'none'}], position: 7804, duration: 0 },
                { id: "eid124", tween: [ "style", "${_Text12}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid125", tween: [ "style", "${_Text12}", "display", 'block', { fromValue: 'none'}], position: 10309, duration: 0 },
                { id: "eid130", tween: [ "style", "${_phyarr}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid131", tween: [ "style", "${_phyarr}", "display", 'block', { fromValue: 'none'}], position: 11000, duration: 0 },
                { id: "eid187", tween: [ "style", "${_Text11}", "font-size", '94%', { fromValue: '94%'}], position: 11815, duration: 0 },
                { id: "eid93", tween: [ "style", "${_itdata}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid94", tween: [ "style", "${_itdata}", "display", 'block', { fromValue: 'none'}], position: 7543, duration: 0 },
                { id: "eid191", tween: [ "style", "${_Text13}", "font-size", '94%', { fromValue: '94%'}], position: 11815, duration: 0 },
                { id: "eid146", tween: [ "style", "${_litdata}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid147", tween: [ "style", "${_litdata}", "display", 'block', { fromValue: 'none'}], position: 11250, duration: 0 },
                { id: "eid120", tween: [ "style", "${_ipdoarr}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid121", tween: [ "style", "${_ipdoarr}", "display", 'block', { fromValue: 'none'}], position: 8079, duration: 0 },
                { id: "eid81", tween: [ "style", "${_iparr2}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid82", tween: [ "style", "${_iparr2}", "display", 'block', { fromValue: 'none'}], position: 6848, duration: 0 },
                { id: "eid163", tween: [ "style", "${_Text10}", "width", '229px', { fromValue: '229px'}], position: 12294, duration: 0 },
                { id: "eid11", tween: [ "style", "${_data}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid12", tween: [ "style", "${_data}", "display", 'block', { fromValue: 'none'}], position: 1085, duration: 0 },
                { id: "eid66", tween: [ "style", "${_tdata2}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid67", tween: [ "style", "${_tdata2}", "display", 'block', { fromValue: 'none'}], position: 5798, duration: 0 },
                { id: "eid75", tween: [ "style", "${_tdata2}", "display", 'none', { fromValue: 'block'}], position: 6198, duration: 0 },
                { id: "eid49", tween: [ "style", "${_tdata}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid50", tween: [ "style", "${_tdata}", "display", 'block', { fromValue: 'none'}], position: 4337, duration: 0 },
                { id: "eid41", tween: [ "style", "${_tcparr2}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid42", tween: [ "style", "${_tcparr2}", "display", 'block', { fromValue: 'none'}], position: 3806, duration: 0 },
                { id: "eid29", tween: [ "style", "${_data2}", "top", '198px', { fromValue: '175px'}], position: 2705, duration: 500 },
                { id: "eid17", tween: [ "style", "${_data}", "top", '175px', { fromValue: '140px'}], position: 1085, duration: 800 },
                { id: "eid83", tween: [ "style", "${_datapacket4}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid84", tween: [ "style", "${_datapacket4}", "display", 'block', { fromValue: 'none'}], position: 7058, duration: 0 },
                { id: "eid92", tween: [ "style", "${_datapacket4}", "display", 'none', { fromValue: 'block'}], position: 7458, duration: 0 },
                { id: "eid114", tween: [ "style", "${_datapacket5}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid115", tween: [ "style", "${_datapacket5}", "display", 'block', { fromValue: 'none'}], position: 9640, duration: 0 },
                { id: "eid119", tween: [ "style", "${_datapacket5}", "display", 'none', { fromValue: 'block'}], position: 10040, duration: 0 },
                { id: "eid143", tween: [ "style", "${_Text2}", "display", 'none', { fromValue: 'block'}], position: 12294, duration: 0 },
                { id: "eid97", tween: [ "style", "${_linkphy}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid98", tween: [ "style", "${_linkphy}", "display", 'block', { fromValue: 'none'}], position: 8750, duration: 0 },
                { id: "eid39", tween: [ "style", "${_datapacket}", "top", '212px', { fromValue: '192px'}], position: 3205, duration: 400 },
                { id: "eid18", tween: [ "style", "${_Text5}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid19", tween: [ "style", "${_Text5}", "display", 'block', { fromValue: 'none'}], position: 2125, duration: 0 },
                { id: "eid190", tween: [ "style", "${_Text6}", "font-size", '94%', { fromValue: '94%'}], position: 11815, duration: 0 },
                { id: "eid77", tween: [ "style", "${_datapacket3}", "top", '362px', { fromValue: '337px'}], position: 6198, duration: 400 },
                { id: "eid181", tween: [ "style", "${_Text2}", "font-size", '94%', { fromValue: '94%'}], position: 11815, duration: 0 },
                { id: "eid112", tween: [ "style", "${_itdata2}", "top", '487px', { fromValue: '466px'}], position: 9176, duration: 400 },
                { id: "eid189", tween: [ "style", "${_Text5}", "font-size", '94%', { fromValue: '94%'}], position: 11815, duration: 0 },
                { id: "eid9", tween: [ "style", "${_apparr}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid10", tween: [ "style", "${_apparr}", "display", 'block', { fromValue: 'none'}], position: 950, duration: 0 },
                { id: "eid5", tween: [ "style", "${_appdoarr}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid6", tween: [ "style", "${_appdoarr}", "display", 'block', { fromValue: 'none'}], position: 565, duration: 0 },
                { id: "eid183", tween: [ "style", "${_Text10}", "font-size", '94%', { fromValue: '94%'}], position: 11815, duration: 0 },
                { id: "eid1", tween: [ "style", "${_app}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid2", tween: [ "style", "${_app}", "display", 'block', { fromValue: 'none'}], position: 160, duration: 0 },
                { id: "eid60", tween: [ "style", "${_Text9}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid61", tween: [ "style", "${_Text9}", "display", 'block', { fromValue: 'none'}], position: 5250, duration: 0 },
                { id: "eid52", tween: [ "style", "${_Text6}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid53", tween: [ "style", "${_Text6}", "display", 'block', { fromValue: 'none'}], position: 4601, duration: 0 },
                { id: "eid74", tween: [ "style", "${_tdata2}", "top", '332px', { fromValue: '312px'}], position: 5798, duration: 400 },
                { id: "eid62", tween: [ "style", "${_ip}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid63", tween: [ "style", "${_ip}", "display", 'block', { fromValue: 'none'}], position: 5410, duration: 0 },
                { id: "eid3", tween: [ "style", "${_Text3}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid4", tween: [ "style", "${_Text3}", "display", 'block', { fromValue: 'none'}], position: 420, duration: 0 },
                { id: "eid64", tween: [ "style", "${_iparr}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid65", tween: [ "style", "${_iparr}", "display", 'block', { fromValue: 'none'}], position: 5590, duration: 0 },
                { id: "eid20", tween: [ "style", "${_tcp}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid21", tween: [ "style", "${_tcp}", "display", 'block', { fromValue: 'none'}], position: 2295, duration: 0 },
                { id: "eid184", tween: [ "style", "${_Text3}", "font-size", '94%', { fromValue: '94%'}], position: 11815, duration: 0 },
                { id: "eid126", tween: [ "style", "${_lldoarr}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid127", tween: [ "style", "${_lldoarr}", "display", 'block', { fromValue: 'none'}], position: 10545, duration: 0 },
                { id: "eid43", tween: [ "style", "${_datapacket2}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid44", tween: [ "style", "${_datapacket2}", "display", 'block', { fromValue: 'none'}], position: 3937, duration: 0 },
                { id: "eid48", tween: [ "style", "${_datapacket2}", "display", 'none', { fromValue: 'block'}], position: 4337, duration: 0 },
                { id: "eid56", tween: [ "style", "${_Text7}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid57", tween: [ "style", "${_Text7}", "display", 'block', { fromValue: 'none'}], position: 5110, duration: 0 },
                { id: "eid157", tween: [ "style", "${_litdata}", "width", '27.46%', { fromValue: '2.55%'}], position: 11315, duration: 500 },
                { id: "eid31", tween: [ "style", "${_datapacket}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid32", tween: [ "style", "${_datapacket}", "display", 'block', { fromValue: 'none'}], position: 3205, duration: 0 },
                { id: "eid40", tween: [ "style", "${_datapacket}", "display", 'none', { fromValue: 'block'}], position: 3605, duration: 0 },
                { id: "eid102", tween: [ "style", "${_itdata2}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid103", tween: [ "style", "${_itdata2}", "display", 'block', { fromValue: 'none'}], position: 9176, duration: 0 },
                { id: "eid113", tween: [ "style", "${_itdata2}", "display", 'none', { fromValue: 'block'}], position: 9576, duration: 0 },
                { id: "eid47", tween: [ "style", "${_datapacket2}", "top", '294px', { fromValue: '276px'}], position: 3937, duration: 400 },
                { id: "eid144", tween: [ "style", "${_data2}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid145", tween: [ "style", "${_data2}", "display", 'block', { fromValue: 'none'}], position: 2705, duration: 0 },
                { id: "eid30", tween: [ "style", "${_data2}", "display", 'none', { fromValue: 'block'}], position: 3205, duration: 0 },
                { id: "eid100", tween: [ "style", "${_llarr}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid101", tween: [ "style", "${_llarr}", "display", 'block', { fromValue: 'none'}], position: 8986, duration: 0 },
                { id: "eid7", tween: [ "style", "${_Text4}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid8", tween: [ "style", "${_Text4}", "display", 'block', { fromValue: 'none'}], position: 810, duration: 0 },
                { id: "eid182", tween: [ "style", "${_Text12}", "font-size", '94%', { fromValue: '94%'}], position: 11815, duration: 0 },
                { id: "eid78", tween: [ "style", "${_datapacket3}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid79", tween: [ "style", "${_datapacket3}", "display", 'block', { fromValue: 'none'}], position: 6198, duration: 0 },
                { id: "eid80", tween: [ "style", "${_datapacket3}", "display", 'none', { fromValue: 'block'}], position: 6598, duration: 0 }            ]
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
})(jQuery, AdobeEdge, "EDGE-97264527");
