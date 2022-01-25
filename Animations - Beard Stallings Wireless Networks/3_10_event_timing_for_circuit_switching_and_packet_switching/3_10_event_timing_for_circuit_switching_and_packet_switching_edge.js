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
                id: 'big-rev-path2',
                display: 'block',
                type: 'image',
                rect: ['86px', '271px','151px','51px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"big-rev-path.png",'0px','0px']
            },
            {
                id: 'first-path6',
                display: 'block',
                type: 'image',
                rect: ['167px', '99px','69px','34px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"first-path.png",'0px','0px']
            },
            {
                id: 'big-rev-path',
                display: 'block',
                type: 'image',
                rect: ['86px', '122px','151px','51px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"big-rev-path.png",'0px','0px']
            },
            {
                id: 'black-arow7',
                display: 'block',
                type: 'image',
                rect: ['214px', '125px','48px','24px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"black-arow.png",'0px','0px'],
                transform: [[],['-181']]
            },
            {
                id: 'Text26',
                display: 'block',
                type: 'text',
                rect: ['232px', '106px','48px','auto','auto', 'auto'],
                text: "Call accept signal",
                align: "left",
                font: ['Times New Roman, Times, serif', 10, "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: 'first-path5',
                display: 'block',
                type: 'image',
                rect: ['124px', '78px','69px','34px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"first-path.png",'0px','0px']
            },
            {
                id: 'Paranthesis3',
                display: 'block',
                type: 'image',
                rect: ['134px', '78px','20px','16px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"Paranthesis.png",'0px','0px']
            },
            {
                id: 'black-arow6',
                display: 'block',
                type: 'image',
                rect: ['114px', '59px','158px','24px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"black-arow.png",'0px','0px'],
                transform: [[],['-203']]
            },
            {
                id: 'Text25',
                display: 'block',
                type: 'text',
                rect: ['233px', '19px','63px','auto','auto', 'auto'],
                text: "Processing delay",
                align: "left",
                font: ['Times New Roman, Times, serif', 10, "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: 'first-path4',
                display: 'block',
                type: 'image',
                rect: ['80px', '56px','69px','34px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"first-path.png",'0px','0px']
            },
            {
                id: 'black-arow4',
                display: 'block',
                type: 'image',
                rect: ['60px', '57px','48px','24px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"black-arow.png",'0px','0px']
            },
            {
                id: 'Text23',
                display: 'block',
                type: 'text',
                rect: ['48px', '33px','63px','auto','auto', 'auto'],
                text: "Call request signal",
                align: "left",
                font: ['Georgia, \'Times New Roman\', Times, serif', 10, "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: 'Paranthesis2',
                display: 'block',
                type: 'image',
                rect: ['135px', '63px','20px','16px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"Paranthesis.png",'0px','0px']
            },
            {
                id: 'black-arow5',
                display: 'block',
                type: 'image',
                rect: ['133px', '50px','63px','24px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"black-arow.png",'0px','0px'],
                transform: [[],['-223']]
            },
            {
                id: 'reverse-path4',
                display: 'block',
                type: 'image',
                rect: ['468px', '360px','66px','37px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"reverse-path.png",'0px','0px']
            },
            {
                id: 'reverse-path5',
                display: 'block',
                type: 'image',
                rect: ['425px', '381px','66px','37px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"reverse-path.png",'0px','0px']
            },
            {
                id: 'reverse-path6',
                display: 'block',
                type: 'image',
                rect: ['381px', '402px','66px','37px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"reverse-path.png",'0px','0px']
            },
            {
                id: 'black-arow3',
                display: 'block',
                type: 'image',
                rect: ['512px', '369px','48px','24px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"black-arow.png",'0px','0px'],
                transform: [[],['-182']]
            },
            {
                id: 'Text21',
                display: 'block',
                type: 'text',
                rect: ['531px', '347px','94px','auto','auto', 'auto'],
                text: "Acknowledgement packet<br>",
                align: "left",
                font: ['Georgia, \'Times New Roman\', Times, serif', 10, "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: 'Arrow-for-indications14',
                display: 'block',
                type: 'image',
                rect: ['333px', '435px','66px','14px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"Arrow-for-indications.png",'0px','0px'],
                transform: [[],['-15']]
            },
            {
                id: 'cluster',
                display: 'block',
                type: 'image',
                rect: ['471px', '266px','64px','110px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"cluster.png",'0px','0px']
            },
            {
                id: 'packet_32',
                display: 'block',
                type: 'image',
                rect: ['423px', '281px','73px','50px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"packet%203.png",'0px','0px']
            },
            {
                id: 'packet-23',
                display: 'block',
                type: 'image',
                rect: ['424px', '253px','63px','53px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"packet-2.png",'0px','0px']
            },
            {
                id: 'packet-22',
                display: 'block',
                type: 'image',
                rect: ['380px', '210px','63px','53px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"packet-2.png",'0px','0px']
            },
            {
                id: 'packet_3',
                display: 'block',
                type: 'image',
                rect: ['379px', '239px','73px','50px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"packet%203.png",'0px','0px']
            },
            {
                id: 'Arrow-for-indications12',
                display: 'block',
                type: 'image',
                rect: ['335px', '276px','63px','14px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"Arrow-for-indications.png",'0px','0px'],
                transform: [[],['-14']]
            },
            {
                id: 'Text17',
                display: 'block',
                type: 'text',
                rect: ['248px', '287px','131px','50px','auto', 'auto'],
                text: "Node 1 finishes sending all packets.",
                align: "left",
                font: ['Times New Roman, Times, serif', [94, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: 'packet1',
                display: 'block',
                type: 'image',
                rect: ['383px', '183px','66px','52px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"packet1.png",'0px','0px']
            },
            {
                id: 'reverse-path3',
                display: 'block',
                type: 'image',
                rect: ['382px', '153px','66px','37px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"reverse-path.png",'0px','0px']
            },
            {
                id: 'reverse-path2',
                display: 'block',
                type: 'image',
                rect: ['424px', '133px','66px','37px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"reverse-path.png",'0px','0px']
            },
            {
                id: 'reverse-path',
                display: 'block',
                type: 'image',
                rect: ['468px', '111px','66px','37px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"reverse-path.png",'0px','0px']
            },
            {
                id: 'first-path3',
                display: 'block',
                type: 'image',
                rect: ['467px', '93px','69px','34px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"first-path.png",'0px','0px']
            },
            {
                id: 'Text11',
                display: 'block',
                type: 'text',
                rect: ['256px', '138px','105px','auto','auto', 'auto'],
                text: "Call request fully received by Node 4.",
                align: "left",
                font: ['Times New Roman, Times, serif', [94, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: 'first-path',
                display: 'block',
                type: 'image',
                rect: ['380px', '51px','69px','34px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"first-path.png",'0px','0px']
            },
            {
                id: 'first-path2',
                display: 'block',
                type: 'image',
                rect: ['422px', '72px','69px','34px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"first-path.png",'0px','0px']
            },
            {
                id: 'Text',
                type: 'text',
                rect: ['176px', '571px','auto','auto','auto', 'auto'],
                text: "Figure 3.10 Event Timing for Circuit Switching and Packet Scheduling",
                font: ['Times New Roman, Times, serif', [119, "%"], "rgba(0,0,0,1)", "700", "none", ""]
            },
            {
                id: 'Text4',
                display: 'block',
                type: 'text',
                rect: ['349px', '23px','33px','auto','auto', 'auto'],
                text: "Call request packet",
                align: "left",
                font: ['Georgia, \'Times New Roman\', Times, serif', 10, "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: 'Arrow-for-indications',
                display: 'block',
                type: 'image',
                rect: ['389px', '40px','48px','14px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"Arrow-for-indications.png",'0px','0px'],
                transform: [[],['144']]
            },
            {
                id: 'Text2',
                display: 'block',
                type: 'text',
                rect: ['297px', '547px','auto','auto','auto', 'auto'],
                text: "Click or Touch on Figure for Each Step of Animation",
                align: "left",
                font: ['Times New Roman, Times, serif', [94, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: 'Time-line',
                display: 'block',
                type: 'image',
                rect: ['359px', '23px','196px','480px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"Time-line.png",'0px','0px']
            },
            {
                id: 'black-arow',
                display: 'block',
                type: 'image',
                rect: ['358px', '52px','48px','24px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"black-arow.png",'0px','0px']
            },
            {
                id: 'Text5',
                display: 'block',
                type: 'text',
                rect: ['417px', '0px','160px','auto','auto', 'auto'],
                text: "Call request starts being sent by Node 1.",
                align: "left",
                font: ['Times New Roman, Times, serif', [94, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: 'Arrow-for-indications2',
                display: 'block',
                type: 'image',
                rect: ['435px', '53px','84px','14px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"Arrow-for-indications.png",'0px','0px'],
                transform: [[],['160']]
            },
            {
                id: 'Text6',
                display: 'block',
                type: 'text',
                rect: ['497px', '-2px','215px','64px','auto', 'auto'],
                text: "First bit of call request arrives after propagation delay.",
                align: "left",
                font: ['Georgia, \'Times New Roman\', Times, serif', [94, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: 'Paranthesis4',
                display: 'block',
                type: 'image',
                rect: ['432px', '58px','20px','16px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"Paranthesis.png",'0px','0px']
            },
            {
                id: 'Dashed-Lines',
                display: 'block',
                type: 'image',
                rect: ['391px', '51px','54px','19px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"Dashed-Lines.gif",'0px','0px']
            },
            {
                id: 'Arrow-for-indications3',
                display: 'block',
                type: 'image',
                rect: ['341px', '73px','60px','18px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"Arrow-for-indications.png",'0px','0px'],
                transform: [[],['-22']]
            },
            {
                id: 'Arrow-for-indications4',
                display: 'block',
                type: 'image',
                rect: ['429px', '53px','119px','14px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"Arrow-for-indications.png",'0px','0px'],
                transform: [[],['-198']]
            },
            {
                id: 'Text7',
                display: 'block',
                type: 'text',
                rect: ['250px', '68px','132px','68px','auto', 'auto'],
                text: "Call request finishes being sent.",
                align: "left",
                font: ['Georgia, \'Times New Roman\', Times, serif', [94, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: 'Text8',
                display: 'block',
                type: 'text',
                rect: ['544px', '25px','112px','auto','auto', 'auto'],
                text: "Call request fully received.",
                align: "left",
                font: ['Georgia, \'Times New Roman\', Times, serif', [94, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: 'Paranthesis',
                display: 'block',
                type: 'image',
                rect: ['426px', '74px','20px','16px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"Paranthesis.png",'0px','0px'],
                transform: [[],['-179']]
            },
            {
                id: 'Arrow-for-indications5',
                display: 'block',
                type: 'image',
                rect: ['358px', '75px','78px','14px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"Arrow-for-indications.png",'0px','0px']
            },
            {
                id: 'Text9',
                display: 'block',
                type: 'text',
                rect: ['250px', '68px','auto','34px','auto', 'auto'],
                text: "Processing delay",
                align: "left",
                font: ['Times New Roman, Times, serif', [94, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: 'Arrow-for-indications6',
                display: 'block',
                type: 'image',
                rect: ['431px', '65px','126px','14px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"Arrow-for-indications.png",'0px','0px'],
                transform: [[],['-192']]
            },
            {
                id: 'Text10',
                display: 'block',
                type: 'text',
                rect: ['545px', '42px','158px','48px','auto', 'auto'],
                text: "Call request starts being sent by Node 2.",
                align: "left",
                font: ['Times New Roman, Times, serif', [94, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: 'Arrow-for-indications7',
                display: 'block',
                type: 'image',
                rect: ['341px', '129px','196px','14px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"Arrow-for-indications.png",'0px','0px'],
                transform: [[],['-10']]
            },
            {
                id: 'black-arow2',
                display: 'block',
                type: 'image',
                rect: ['513px', '121px','48px','24px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"black-arow.png",'0px','0px'],
                transform: [[],['-180']]
            },
            {
                id: 'Text12',
                display: 'block',
                type: 'text',
                rect: ['533px', '102px','48px','auto','auto', 'auto'],
                text: "Call accept packet",
                align: "left",
                font: ['Times New Roman, Times, serif', 10, "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: 'Arrow-for-indications8',
                display: 'block',
                type: 'image',
                rect: ['521px', '132px','66px','14px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"Arrow-for-indications.png",'0px','0px'],
                transform: [[],['-168']]
            },
            {
                id: 'Text13',
                display: 'block',
                type: 'text',
                rect: ['545px', '144px','177px','70px','auto', 'auto'],
                text: "Call accept starts being sent by Node 4 to Node 3.",
                align: "left",
                font: ['Times New Roman, Times, serif', [94, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: 'Arrow-for-indications9',
                display: 'block',
                type: 'image',
                rect: ['349px', '184px','48px','14px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"Arrow-for-indications.png",'0px','0px']
            },
            {
                id: 'Arrow-for-indications10',
                display: 'block',
                type: 'image',
                rect: ['433px', '211px','119px','14px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"Arrow-for-indications.png",'0px','0px'],
                transform: [[],['-188']]
            },
            {
                id: 'Arrow-for-indications11',
                display: 'block',
                type: 'image',
                rect: ['432px', '216px','132px','14px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"Arrow-for-indications.png",'0px','0px'],
                transform: [[],['-188']]
            },
            {
                id: 'Text16',
                display: 'block',
                type: 'text',
                rect: ['544px', '196px','187px','52px','auto', 'auto'],
                text: "Node 2 sends Pkt 1 after processing delay.",
                align: "left",
                font: ['Times New Roman, Times, serif', [94, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: 'packet12',
                display: 'block',
                type: 'image',
                rect: ['427px', '226px','66px','52px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"packet1.png",'0px','0px']
            },
            {
                id: 'Text15',
                display: 'block',
                type: 'text',
                rect: ['547px', '183px','132px','auto','auto', 'auto'],
                text: "All of Pkt 1 received at Node 2.",
                align: "left",
                font: ['Times New Roman, Times, serif', [94, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: 'Text14',
                display: 'block',
                type: 'text',
                rect: ['257px', '170px','130px','auto','auto', 'auto'],
                text: "Node 1 starts sending Packet 1.",
                align: "left",
                font: ['Times New Roman, Times, serif', [94, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: 'Arrow-for-indications13',
                display: 'block',
                type: 'image',
                rect: ['520px', '372px','69px','14px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"Arrow-for-indications.png",'0px','0px'],
                transform: [[],['-156']]
            },
            {
                id: 'Text18',
                display: 'block',
                type: 'text',
                rect: ['579px', '371px','84px','auto','auto', 'auto'],
                text: "Node 4 receives all packets.",
                align: "left",
                font: ['Georgia, \'Times New Roman\', Times, serif', [94, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: 'Text22',
                display: 'block',
                type: 'text',
                rect: ['233px', '430px','108px','66px','auto', 'auto'],
                text: "Node 1 receives acknowledgment.",
                align: "left",
                font: ['Times New Roman, Times, serif', [94, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: 'second-main',
                display: 'block',
                type: 'image',
                rect: ['38px', '41px','211px','459px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"second-main.png",'0px','0px']
            },
            {
                id: 'Text24',
                display: 'block',
                type: 'text',
                rect: ['164px', '23px','57px','auto','auto', 'auto'],
                text: "Propagation delay",
                align: "left",
                font: ['Times New Roman, Times, serif', 10, "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: 'Text27',
                display: 'block',
                type: 'text',
                rect: ['14px', '71px','83px','auto','auto', 'auto'],
                text: "Node 1 sends call request and receives call accept.",
                align: "left",
                font: ['Georgia, \'Times New Roman\', Times, serif', [94, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: 'big2',
                display: 'block',
                type: 'image',
                rect: ['74px', '52px','31px','115px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"big2.png",'0px','0px']
            },
            {
                id: 'user-data',
                display: 'block',
                type: 'image',
                rect: ['84px', '155px','152px','124px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"user-data.png",'0px','0px']
            },
            {
                id: 'Arrow-for-indications15',
                display: 'block',
                type: 'image',
                rect: ['60px', '168px','39px','14px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"Arrow-for-indications.png",'0px','0px'],
                transform: [[],['-24']]
            },
            {
                id: 'Text28',
                display: 'block',
                type: 'text',
                rect: ['2px', '177px','94px','auto','auto', 'auto'],
                text: "Node 1 starts sending user data in a stream.",
                align: "left",
                font: ['Times New Roman, Times, serif', [94, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: 'Arrow-for-indications16',
                display: 'block',
                type: 'image',
                rect: ['115px', '164px','97px','14px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"Arrow-for-indications.png",'0px','0px'],
                transform: [[],['10']]
            },
            {
                id: 'Text29',
                display: 'block',
                type: 'text',
                rect: ['231px', '164px','109px','auto','auto', 'auto'],
                text: "First bit goes straight through to Node 4.",
                align: "left",
                font: ['Times New Roman, Times, serif', [94, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: 'Arrow-for-indications17',
                display: 'block',
                type: 'image',
                rect: ['51px', '255px','48px','14px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"Arrow-for-indications.png",'0px','0px'],
                transform: [[],['-23']]
            },
            {
                id: 'Arrow-for-indications18',
                display: 'block',
                type: 'image',
                rect: ['63px', '300px','34px','14px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"Arrow-for-indications.png",'0px','0px']
            },
            {
                id: 'Text32',
                display: 'block',
                type: 'text',
                rect: ['2px', '297px','103px','84px','auto', 'auto'],
                text: "Node 1 receives last bit of ACK signal.",
                align: "left",
                font: ['Times New Roman, Times, serif', [94, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: 'III',
                display: 'block',
                type: 'image',
                rect: ['664px', '33px','193px','485px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"III.png",'0px','0px']
            },
            {
                id: 'Text33',
                display: 'block',
                type: 'text',
                rect: ['586px', '107px','108px','auto','auto', 'auto'],
                text: "Datagram switching has no setup or ACK delays.",
                align: "left",
                font: ['Times New Roman, Times, serif', [94, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: 'Text34',
                display: 'block',
                type: 'text',
                rect: ['96px', '502px','auto','auto','auto', 'auto'],
                text: "(a) Circuit switching",
                align: "left",
                font: ['Times New Roman, Times, serif', [94, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: 'Text35',
                display: 'block',
                type: 'text',
                rect: ['344px', '502px','auto','auto','auto', 'auto'],
                text: "(b) Virtual circuit packet switching",
                align: "left",
                font: ['Times New Roman, Times, serif', [94, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: 'Text30',
                display: 'block',
                type: 'text',
                rect: ['22px', '265px','88px','90px','auto', 'auto'],
                text: "Node 1 finishes sending data",
                align: "left",
                font: ['Georgia, \'Times New Roman\', Times, serif', [94, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: 'black-arow8',
                display: 'block',
                type: 'image',
                rect: ['214px', '274px','48px','24px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"black-arow.png",'0px','0px'],
                transform: [[],['-180']]
            },
            {
                id: 'Text31',
                display: 'block',
                type: 'text',
                rect: ['231px', '253px','102px','auto','auto', 'auto'],
                text: "Acknowledgment signal",
                align: "left",
                font: ['Georgia, \'Times New Roman\', Times, serif', 10, "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: 'Text36',
                display: 'block',
                type: 'text',
                rect: ['662px', '500px','auto','auto','auto', 'auto'],
                text: "(c) Datagram packet switching",
                align: "left",
                font: ['Times New Roman, Times, serif', [94, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
            }],
            symbolInstances: [

            ]
        },
    states: {
        "Base State": {
            "${_Paranthesis}": [
                ["style", "top", '74px'],
                ["style", "display", 'block'],
                ["style", "left", '426px'],
                ["transform", "rotateZ", '-179deg']
            ],
            "${_Arrow-for-indications}": [
                ["style", "top", '40px'],
                ["transform", "rotateZ", '144deg'],
                ["style", "display", 'block'],
                ["style", "left", '389px'],
                ["style", "width", '48px']
            ],
            "${_Arrow-for-indications8}": [
                ["style", "top", '132px'],
                ["transform", "rotateZ", '-168deg'],
                ["style", "display", 'block'],
                ["style", "left", '521px'],
                ["style", "width", '66px']
            ],
            "${_Text22}": [
                ["style", "top", '430px'],
                ["style", "width", '108px'],
                ["style", "height", '66px'],
                ["style", "display", 'block'],
                ["style", "font-family", 'Times New Roman, Times, serif'],
                ["style", "left", '233px'],
                ["style", "font-size", '94%']
            ],
            "${_Paranthesis2}": [
                ["style", "top", '63px'],
                ["style", "left", '135px'],
                ["style", "display", 'block']
            ],
            "${_Arrow-for-indications5}": [
                ["style", "top", '75px'],
                ["style", "display", 'block'],
                ["style", "left", '358px'],
                ["style", "width", '78px']
            ],
            "${_first-path}": [
                ["style", "top", '51px'],
                ["style", "left", '380px'],
                ["style", "display", 'block']
            ],
            "${_Text21}": [
                ["style", "top", '347px'],
                ["style", "display", 'block'],
                ["style", "font-size", '10px'],
                ["style", "left", '531px'],
                ["style", "width", '94px']
            ],
            "${_Arrow-for-indications7}": [
                ["style", "top", '129px'],
                ["transform", "rotateZ", '-10deg'],
                ["style", "display", 'block'],
                ["style", "left", '341px'],
                ["style", "width", '196px']
            ],
            "${_packet-23}": [
                ["style", "top", '253px'],
                ["style", "left", '424px'],
                ["style", "display", 'block']
            ],
            "${_reverse-path3}": [
                ["style", "top", '153px'],
                ["style", "left", '382px'],
                ["style", "display", 'block']
            ],
            "${_black-arow6}": [
                ["style", "top", '59px'],
                ["transform", "rotateZ", '-203deg'],
                ["style", "display", 'block'],
                ["style", "left", '114px'],
                ["style", "width", '158px']
            ],
            "${_Text10}": [
                ["style", "top", '42px'],
                ["style", "display", 'block'],
                ["style", "height", '48px'],
                ["style", "font-family", 'Times New Roman, Times, serif'],
                ["style", "left", '545px'],
                ["style", "width", '162px']
            ],
            "${_III}": [
                ["style", "top", '33px'],
                ["style", "left", '664px'],
                ["style", "display", 'block']
            ],
            "${_Text30}": [
                ["style", "top", '265px'],
                ["style", "height", '90px'],
                ["style", "display", 'block'],
                ["style", "left", '22px'],
                ["style", "width", '88px']
            ],
            "${_Arrow-for-indications4}": [
                ["style", "top", '53px'],
                ["transform", "rotateZ", '-198deg'],
                ["style", "display", 'block'],
                ["style", "left", '429px'],
                ["style", "width", '119px']
            ],
            "${_Time-line}": [
                ["style", "top", '23px'],
                ["style", "left", '359px'],
                ["style", "display", 'block']
            ],
            "${_reverse-path5}": [
                ["style", "top", '381px'],
                ["style", "left", '425px'],
                ["style", "display", 'block']
            ],
            "${_packet_32}": [
                ["style", "top", '281px'],
                ["style", "left", '423px'],
                ["style", "display", 'block']
            ],
            "${_Text28}": [
                ["style", "top", '177px'],
                ["style", "font-size", '94%'],
                ["style", "display", 'block'],
                ["style", "font-family", 'Times New Roman, Times, serif'],
                ["style", "left", '2px'],
                ["style", "width", '94px']
            ],
            "${_Arrow-for-indications17}": [
                ["style", "top", '255px'],
                ["transform", "rotateZ", '-23deg'],
                ["style", "display", 'block'],
                ["style", "left", '51px'],
                ["style", "width", '48px']
            ],
            "${_reverse-path6}": [
                ["style", "top", '402px'],
                ["style", "left", '381px'],
                ["style", "display", 'block']
            ],
            "${_Text29}": [
                ["style", "top", '164px'],
                ["style", "display", 'block'],
                ["style", "font-family", 'Times New Roman, Times, serif'],
                ["style", "left", '231px'],
                ["style", "width", '109px']
            ],
            "${_Paranthesis3}": [
                ["style", "top", '78px'],
                ["style", "left", '134px'],
                ["style", "display", 'block']
            ],
            "${_Text36}": [
                ["style", "top", '500px'],
                ["style", "font-family", 'Times New Roman, Times, serif'],
                ["style", "left", '662px'],
                ["style", "display", 'block']
            ],
            "${_Text24}": [
                ["style", "top", '23px'],
                ["style", "display", 'block'],
                ["style", "font-family", 'Times New Roman, Times, serif'],
                ["style", "left", '164px'],
                ["style", "width", '57px']
            ],
            "${_black-arow4}": [
                ["style", "top", '57px'],
                ["style", "left", '60px'],
                ["style", "display", 'block']
            ],
            "${_Arrow-for-indications15}": [
                ["style", "top", '168px'],
                ["transform", "rotateZ", '-24deg'],
                ["style", "display", 'block'],
                ["style", "left", '60px'],
                ["style", "width", '39px']
            ],
            "${_Text13}": [
                ["style", "top", '144px'],
                ["style", "width", '177px'],
                ["style", "height", '70px'],
                ["style", "display", 'block'],
                ["style", "font-family", 'Times New Roman, Times, serif'],
                ["style", "left", '545px'],
                ["style", "font-size", '94%']
            ],
            "${_Text6}": [
                ["style", "top", '-2px'],
                ["style", "height", '64px'],
                ["style", "display", 'block'],
                ["style", "left", '497px'],
                ["style", "width", '215px']
            ],
            "${_Text}": [
                ["style", "top", '571px'],
                ["style", "width", '589px'],
                ["style", "font-family", 'Times New Roman, Times, serif'],
                ["style", "font-weight", '700'],
                ["style", "left", '176px'],
                ["style", "font-size", '119%']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(255,255,255,1)'],
                ["style", "width", '900px'],
                ["style", "height", '600px'],
                ["style", "overflow", 'auto']
            ],
            "${_Text26}": [
                ["style", "top", '106px'],
                ["style", "display", 'block'],
                ["style", "font-family", 'Times New Roman, Times, serif'],
                ["style", "left", '232px'],
                ["style", "width", '48px']
            ],
            "${_big-rev-path}": [
                ["style", "top", '122px'],
                ["style", "left", '86px'],
                ["style", "display", 'block']
            ],
            "${_Text15}": [
                ["style", "top", '183px'],
                ["style", "display", 'block'],
                ["style", "font-family", 'Times New Roman, Times, serif'],
                ["style", "left", '547px'],
                ["style", "width", '132px']
            ],
            "${_packet1}": [
                ["style", "top", '183px'],
                ["style", "left", '383px'],
                ["style", "display", 'block']
            ],
            "${_Text8}": [
                ["style", "top", '25px'],
                ["style", "display", 'block'],
                ["style", "left", '544px'],
                ["style", "width", '112px']
            ],
            "${_Dashed-Lines}": [
                ["style", "top", '51px'],
                ["style", "left", '391px'],
                ["style", "display", 'block']
            ],
            "${_Arrow-for-indications16}": [
                ["style", "top", '164px'],
                ["style", "display", 'block'],
                ["style", "left", '115px'],
                ["transform", "rotateZ", '10deg']
            ],
            "${_packet12}": [
                ["style", "top", '226px'],
                ["style", "left", '427px'],
                ["style", "display", 'block']
            ],
            "${_Text27}": [
                ["style", "top", '71px'],
                ["style", "display", 'block'],
                ["style", "font-size", '94%'],
                ["style", "left", '14px'],
                ["style", "width", '83px']
            ],
            "${_Text14}": [
                ["style", "top", '170px'],
                ["style", "display", 'block'],
                ["style", "font-family", 'Times New Roman, Times, serif'],
                ["style", "left", '257px'],
                ["style", "width", '130px']
            ],
            "${_Text4}": [
                ["style", "top", '23px'],
                ["style", "display", 'block'],
                ["style", "font-size", '10px'],
                ["style", "left", '349px'],
                ["style", "width", '33px']
            ],
            "${_Text34}": [
                ["style", "top", '502px'],
                ["style", "font-family", 'Times New Roman, Times, serif'],
                ["style", "left", '96px'],
                ["style", "display", 'block']
            ],
            "${_Arrow-for-indications13}": [
                ["style", "top", '372px'],
                ["transform", "rotateZ", '-156deg'],
                ["style", "display", 'block'],
                ["style", "left", '520px'],
                ["style", "width", '69px']
            ],
            "${_Arrow-for-indications14}": [
                ["style", "top", '435px'],
                ["transform", "rotateZ", '-15deg'],
                ["style", "display", 'block'],
                ["style", "left", '333px'],
                ["style", "width", '66px']
            ],
            "${_first-path2}": [
                ["style", "top", '72px'],
                ["style", "left", '422px'],
                ["style", "display", 'block']
            ],
            "${_Text33}": [
                ["style", "top", '107px'],
                ["style", "display", 'block'],
                ["style", "font-family", 'Times New Roman, Times, serif'],
                ["style", "left", '586px'],
                ["style", "width", '108px']
            ],
            "${_user-data}": [
                ["style", "top", '155px'],
                ["style", "left", '84px'],
                ["style", "display", 'block']
            ],
            "${_second-main}": [
                ["style", "top", '41px'],
                ["style", "left", '38px'],
                ["style", "display", 'block']
            ],
            "${_Text18}": [
                ["style", "top", '371px'],
                ["style", "display", 'block'],
                ["style", "left", '579px'],
                ["style", "width", '84px']
            ],
            "${_Text31}": [
                ["style", "top", '253px'],
                ["style", "display", 'block'],
                ["style", "width", '102px'],
                ["style", "left", '231px'],
                ["style", "font-size", '10px']
            ],
            "${_Text11}": [
                ["style", "top", '138px'],
                ["style", "display", 'block'],
                ["style", "font-family", 'Times New Roman, Times, serif'],
                ["style", "left", '256px'],
                ["style", "width", '105px']
            ],
            "${_Arrow-for-indications18}": [
                ["style", "top", '300px'],
                ["style", "display", 'block'],
                ["style", "left", '63px'],
                ["style", "width", '34px']
            ],
            "${_first-path6}": [
                ["style", "top", '99px'],
                ["style", "left", '167px'],
                ["style", "display", 'block']
            ],
            "${_black-arow3}": [
                ["style", "top", '369px'],
                ["style", "display", 'block'],
                ["style", "left", '512px'],
                ["transform", "rotateZ", '-182deg']
            ],
            "${_Text9}": [
                ["style", "top", '68px'],
                ["style", "display", 'block'],
                ["style", "font-family", 'Times New Roman, Times, serif'],
                ["style", "left", '250px'],
                ["style", "height", '34px']
            ],
            "${_Arrow-for-indications11}": [
                ["style", "top", '216px'],
                ["transform", "rotateZ", '-188deg'],
                ["style", "display", 'block'],
                ["style", "left", '432px'],
                ["style", "width", '132px']
            ],
            "${_reverse-path}": [
                ["style", "top", '111px'],
                ["style", "left", '468px'],
                ["style", "display", 'block']
            ],
            "${_Arrow-for-indications3}": [
                ["style", "top", '73px'],
                ["transform", "rotateZ", '-22deg'],
                ["style", "height", '18px'],
                ["style", "display", 'block'],
                ["style", "left", '341px'],
                ["style", "width", '60px']
            ],
            "${_black-arow7}": [
                ["style", "top", '125px'],
                ["style", "display", 'block'],
                ["style", "left", '214px'],
                ["transform", "rotateZ", '-181deg']
            ],
            "${_Text7}": [
                ["style", "top", '68px'],
                ["style", "height", '68px'],
                ["style", "display", 'block'],
                ["style", "left", '250px'],
                ["style", "width", '132px']
            ],
            "${_black-arow}": [
                ["style", "top", '52px'],
                ["style", "left", '358px'],
                ["style", "display", 'block']
            ],
            "${_Text5}": [
                ["style", "top", '0px'],
                ["style", "width", '160px'],
                ["style", "display", 'block'],
                ["style", "font-family", 'Times New Roman, Times, serif'],
                ["style", "left", '417px'],
                ["style", "font-size", '94%']
            ],
            "${_Text35}": [
                ["style", "top", '502px'],
                ["style", "font-family", 'Times New Roman, Times, serif'],
                ["style", "left", '344px'],
                ["style", "display", 'block']
            ],
            "${_reverse-path2}": [
                ["style", "top", '133px'],
                ["style", "left", '424px'],
                ["style", "display", 'block']
            ],
            "${_Text2}": [
                ["style", "top", '547px'],
                ["style", "display", 'block'],
                ["style", "font-family", 'Times New Roman, Times, serif'],
                ["style", "left", '297px'],
                ["style", "font-size", '94%']
            ],
            "${_Text23}": [
                ["style", "top", '33px'],
                ["style", "display", 'block'],
                ["style", "width", '63px'],
                ["style", "left", '48px'],
                ["style", "font-size", '10px']
            ],
            "${_black-arow2}": [
                ["style", "top", '121px'],
                ["style", "display", 'block'],
                ["style", "left", '513px'],
                ["transform", "rotateZ", '-180deg']
            ],
            "${_Arrow-for-indications10}": [
                ["style", "top", '211px'],
                ["transform", "rotateZ", '-188deg'],
                ["style", "display", 'block'],
                ["style", "left", '433px'],
                ["style", "width", '119px']
            ],
            "${_black-arow5}": [
                ["style", "top", '50px'],
                ["transform", "rotateZ", '-223deg'],
                ["style", "display", 'block'],
                ["style", "left", '133px'],
                ["style", "width", '63px']
            ],
            "${_big2}": [
                ["style", "top", '52px'],
                ["style", "left", '74px'],
                ["style", "display", 'block']
            ],
            "${_first-path4}": [
                ["style", "top", '56px'],
                ["style", "left", '80px'],
                ["style", "display", 'block']
            ],
            "${_Arrow-for-indications9}": [
                ["style", "top", '184px'],
                ["style", "display", 'block'],
                ["style", "left", '349px'],
                ["style", "width", '48px']
            ],
            "${_Arrow-for-indications6}": [
                ["style", "top", '65px'],
                ["transform", "rotateZ", '-192deg'],
                ["style", "display", 'block'],
                ["style", "left", '431px'],
                ["style", "width", '126px']
            ],
            "${_first-path3}": [
                ["style", "top", '93px'],
                ["style", "left", '467px'],
                ["style", "display", 'block']
            ],
            "${_Arrow-for-indications2}": [
                ["style", "top", '53px'],
                ["transform", "rotateZ", '160deg'],
                ["style", "display", 'block'],
                ["style", "left", '435px'],
                ["style", "width", '84px']
            ],
            "${_packet-22}": [
                ["style", "top", '210px'],
                ["style", "left", '380px'],
                ["style", "display", 'block']
            ],
            "${_packet_3}": [
                ["style", "top", '239px'],
                ["style", "left", '379px'],
                ["style", "display", 'block']
            ],
            "${_black-arow8}": [
                ["style", "top", '274px'],
                ["style", "display", 'block'],
                ["style", "left", '214px'],
                ["transform", "rotateZ", '-180deg']
            ],
            "${_Text17}": [
                ["style", "top", '287px'],
                ["style", "height", '50px'],
                ["style", "display", 'block'],
                ["style", "font-family", 'Times New Roman, Times, serif'],
                ["style", "left", '248px'],
                ["style", "width", '131px']
            ],
            "${_Text16}": [
                ["style", "top", '196px'],
                ["style", "height", '52px'],
                ["style", "display", 'block'],
                ["style", "font-family", 'Times New Roman, Times, serif'],
                ["style", "left", '544px'],
                ["style", "width", '187px']
            ],
            "${_cluster}": [
                ["style", "top", '266px'],
                ["style", "left", '471px'],
                ["style", "display", 'block']
            ],
            "${_first-path5}": [
                ["style", "top", '78px'],
                ["style", "left", '124px'],
                ["style", "display", 'block']
            ],
            "${_reverse-path4}": [
                ["style", "top", '360px'],
                ["style", "left", '468px'],
                ["style", "display", 'block']
            ],
            "${_Paranthesis4}": [
                ["style", "top", '58px'],
                ["style", "left", '432px'],
                ["style", "display", 'block']
            ],
            "${_Text12}": [
                ["style", "top", '102px'],
                ["style", "width", '48px'],
                ["style", "display", 'block'],
                ["style", "font-family", 'Times New Roman, Times, serif'],
                ["style", "left", '533px'],
                ["style", "font-size", '10px']
            ],
            "${_Text32}": [
                ["style", "top", '297px'],
                ["style", "height", '84px'],
                ["style", "display", 'block'],
                ["style", "font-family", 'Times New Roman, Times, serif'],
                ["style", "left", '2px'],
                ["style", "width", '103px']
            ],
            "${_Arrow-for-indications12}": [
                ["style", "top", '276px'],
                ["transform", "rotateZ", '-14deg'],
                ["style", "display", 'block'],
                ["style", "left", '335px'],
                ["style", "width", '63px']
            ],
            "${_big-rev-path2}": [
                ["style", "top", '271px'],
                ["style", "left", '86px'],
                ["style", "display", 'block']
            ],
            "${_Text25}": [
                ["style", "top", '19px'],
                ["style", "display", 'block'],
                ["style", "font-family", 'Times New Roman, Times, serif'],
                ["style", "left", '233px'],
                ["style", "width", '63px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 11085,
            autoPlay: true,
            timeline: [
                { id: "eid165", tween: [ "style", "${_Text23}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid166", tween: [ "style", "${_Text23}", "display", 'block', { fromValue: 'none'}], position: 7250, duration: 0 },
                { id: "eid101", tween: [ "style", "${_reverse-path3}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid102", tween: [ "style", "${_reverse-path3}", "display", 'block', { fromValue: 'none'}], position: 3140, duration: 0 },
                { id: "eid157", tween: [ "style", "${_Arrow-for-indications14}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid158", tween: [ "style", "${_Arrow-for-indications14}", "display", 'block', { fromValue: 'none'}], position: 6323, duration: 0 },
                { id: "eid159", tween: [ "style", "${_Arrow-for-indications14}", "display", 'none', { fromValue: 'block'}], position: 6655, duration: 0 },
                { id: "eid217", tween: [ "style", "${_Text32}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid218", tween: [ "style", "${_Text32}", "display", 'block', { fromValue: 'none'}], position: 10108, duration: 0 },
                { id: "eid222", tween: [ "style", "${_Text32}", "display", 'none', { fromValue: 'block'}], position: 10500, duration: 0 },
                { id: "eid207", tween: [ "style", "${_Arrow-for-indications17}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid208", tween: [ "style", "${_Arrow-for-indications17}", "display", 'block', { fromValue: 'none'}], position: 9500, duration: 0 },
                { id: "eid216", tween: [ "style", "${_Arrow-for-indications17}", "display", 'none', { fromValue: 'block'}], position: 9865, duration: 0 },
                { id: "eid209", tween: [ "style", "${_Text30}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid210", tween: [ "style", "${_Text30}", "display", 'block', { fromValue: 'none'}], position: 9500, duration: 0 },
                { id: "eid215", tween: [ "style", "${_Text30}", "display", 'none', { fromValue: 'block'}], position: 9865, duration: 0 },
                { id: "eid147", tween: [ "style", "${_reverse-path5}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid148", tween: [ "style", "${_reverse-path5}", "display", 'block', { fromValue: 'none'}], position: 5839, duration: 0 },
                { id: "eid65", tween: [ "style", "${_Arrow-for-indications6}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid66", tween: [ "style", "${_Arrow-for-indications6}", "display", 'block', { fromValue: 'none'}], position: 1900, duration: 0 },
                { id: "eid71", tween: [ "style", "${_Arrow-for-indications6}", "display", 'none', { fromValue: 'block'}], position: 2105, duration: 0 },
                { id: "eid93", tween: [ "style", "${_Arrow-for-indications8}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid94", tween: [ "style", "${_Arrow-for-indications8}", "display", 'block', { fromValue: 'none'}], position: 2960, duration: 0 },
                { id: "eid98", tween: [ "style", "${_Arrow-for-indications8}", "display", 'none', { fromValue: 'block'}], position: 3140, duration: 0 },
                { id: "eid123", tween: [ "style", "${_packet-22}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid124", tween: [ "style", "${_packet-22}", "display", 'block', { fromValue: 'none'}], position: 4093, duration: 0 },
                { id: "eid9", tween: [ "style", "${_Text4}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid10", tween: [ "style", "${_Text4}", "display", 'block', { fromValue: 'none'}], position: 590, duration: 0 },
                { id: "eid117", tween: [ "style", "${_Arrow-for-indications11}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid118", tween: [ "style", "${_Arrow-for-indications11}", "display", 'block', { fromValue: 'none'}], position: 3817, duration: 0 },
                { id: "eid122", tween: [ "style", "${_Arrow-for-indications11}", "display", 'none', { fromValue: 'block'}], position: 4093, duration: 0 },
                { id: "eid161", tween: [ "style", "${_second-main}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid162", tween: [ "style", "${_second-main}", "display", 'block', { fromValue: 'none'}], position: 6911, duration: 0 },
                { id: "eid183", tween: [ "style", "${_black-arow7}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid184", tween: [ "style", "${_black-arow7}", "display", 'block', { fromValue: 'none'}], position: 7917, duration: 0 },
                { id: "eid219", tween: [ "style", "${_Arrow-for-indications18}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid220", tween: [ "style", "${_Arrow-for-indications18}", "display", 'block', { fromValue: 'none'}], position: 10108, duration: 0 },
                { id: "eid221", tween: [ "style", "${_Arrow-for-indications18}", "display", 'none', { fromValue: 'block'}], position: 10500, duration: 0 },
                { id: "eid139", tween: [ "style", "${_Arrow-for-indications13}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid140", tween: [ "style", "${_Arrow-for-indications13}", "display", 'block', { fromValue: 'none'}], position: 5500, duration: 0 },
                { id: "eid144", tween: [ "style", "${_Arrow-for-indications13}", "display", 'none', { fromValue: 'block'}], position: 5839, duration: 0 },
                { id: "eid113", tween: [ "style", "${_Text15}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid114", tween: [ "style", "${_Text15}", "display", 'block', { fromValue: 'none'}], position: 3567, duration: 0 },
                { id: "eid115", tween: [ "style", "${_Text15}", "display", 'none', { fromValue: 'block'}], position: 3817, duration: 0 },
                { id: "eid175", tween: [ "style", "${_Paranthesis3}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid176", tween: [ "style", "${_Paranthesis3}", "display", 'block', { fromValue: 'none'}], position: 7691, duration: 0 },
                { id: "eid151", tween: [ "style", "${_black-arow3}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid152", tween: [ "style", "${_black-arow3}", "display", 'block', { fromValue: 'none'}], position: 6090, duration: 0 },
                { id: "eid225", tween: [ "style", "${_Text33}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid226", tween: [ "style", "${_Text33}", "display", 'block', { fromValue: 'none'}], position: 10750, duration: 0 },
                { id: "eid233", tween: [ "style", "${_Text33}", "display", 'none', { fromValue: 'block'}], position: 11085, duration: 0 },
                { id: "eid234", tween: [ "style", "${_Text2}", "display", 'none', { fromValue: 'block'}], position: 11085, duration: 0 },
                { id: "eid167", tween: [ "style", "${_Paranthesis2}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid168", tween: [ "style", "${_Paranthesis2}", "display", 'block', { fromValue: 'none'}], position: 7440, duration: 0 },
                { id: "eid191", tween: [ "style", "${_Text27}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid192", tween: [ "style", "${_Text27}", "display", 'block', { fromValue: 'none'}], position: 8182, duration: 0 },
                { id: "eid195", tween: [ "style", "${_Text27}", "display", 'none', { fromValue: 'block'}], position: 8500, duration: 0 },
                { id: "eid51", tween: [ "style", "${_Arrow-for-indications4}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid52", tween: [ "style", "${_Arrow-for-indications4}", "display", 'block', { fromValue: 'none'}], position: 1250, duration: 0 },
                { id: "eid53", tween: [ "style", "${_Arrow-for-indications4}", "display", 'none', { fromValue: 'block'}], position: 1445, duration: 0 },
                { id: "eid49", tween: [ "style", "${_Text8}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid50", tween: [ "style", "${_Text8}", "display", 'block', { fromValue: 'none'}], position: 1250, duration: 0 },
                { id: "eid54", tween: [ "style", "${_Text8}", "display", 'none', { fromValue: 'block'}], position: 1445, duration: 0 },
                { id: "eid60", tween: [ "style", "${_Text9}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid61", tween: [ "style", "${_Text9}", "display", 'block', { fromValue: 'none'}], position: 1445, duration: 0 },
                { id: "eid69", tween: [ "style", "${_Text9}", "display", 'none', { fromValue: 'block'}], position: 2105, duration: 0 },
                { id: "eid107", tween: [ "style", "${_packet1}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid108", tween: [ "style", "${_packet1}", "display", 'block', { fromValue: 'none'}], position: 3366, duration: 0 },
                { id: "eid163", tween: [ "style", "${_first-path4}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid164", tween: [ "style", "${_first-path4}", "display", 'block', { fromValue: 'none'}], position: 7250, duration: 0 },
                { id: "eid155", tween: [ "style", "${_Text22}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid156", tween: [ "style", "${_Text22}", "display", 'block', { fromValue: 'none'}], position: 6323, duration: 0 },
                { id: "eid160", tween: [ "style", "${_Text22}", "display", 'none', { fromValue: 'block'}], position: 6655, duration: 0 },
                { id: "eid127", tween: [ "style", "${_Arrow-for-indications12}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid128", tween: [ "style", "${_Arrow-for-indications12}", "display", 'block', { fromValue: 'none'}], position: 4594, duration: 0 },
                { id: "eid132", tween: [ "style", "${_Arrow-for-indications12}", "display", 'none', { fromValue: 'block'}], position: 4887, duration: 0 },
                { id: "eid211", tween: [ "style", "${_big-rev-path2}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid212", tween: [ "style", "${_big-rev-path2}", "display", 'block', { fromValue: 'none'}], position: 9865, duration: 0 },
                { id: "eid41", tween: [ "style", "${_Text7}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid42", tween: [ "style", "${_Text7}", "display", 'block', { fromValue: 'none'}], position: 1060, duration: 0 },
                { id: "eid47", tween: [ "style", "${_Text7}", "display", 'none', { fromValue: 'block'}], position: 1250, duration: 0 },
                { id: "eid56", tween: [ "style", "${_Paranthesis}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid57", tween: [ "style", "${_Paranthesis}", "display", 'block', { fromValue: 'none'}], position: 1445, duration: 0 },
                { id: "eid169", tween: [ "style", "${_black-arow5}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid170", tween: [ "style", "${_black-arow5}", "display", 'block', { fromValue: 'none'}], position: 7440, duration: 0 },
                { id: "eid73", tween: [ "style", "${_first-path3}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid74", tween: [ "style", "${_first-path3}", "display", 'block', { fromValue: 'none'}], position: 2185, duration: 0 },
                { id: "eid43", tween: [ "style", "${_Arrow-for-indications3}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid44", tween: [ "style", "${_Arrow-for-indications3}", "display", 'block', { fromValue: 'none'}], position: 1060, duration: 0 },
                { id: "eid48", tween: [ "style", "${_Arrow-for-indications3}", "display", 'none', { fromValue: 'block'}], position: 1250, duration: 0 },
                { id: "eid103", tween: [ "style", "${_Text14}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid104", tween: [ "style", "${_Text14}", "display", 'block', { fromValue: 'none'}], position: 3366, duration: 0 },
                { id: "eid109", tween: [ "style", "${_Text14}", "display", 'none', { fromValue: 'block'}], position: 3567, duration: 0 },
                { id: "eid227", tween: [ "style", "${_Text36}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid228", tween: [ "style", "${_Text36}", "display", 'block', { fromValue: 'none'}], position: 10500, duration: 0 },
                { id: "eid153", tween: [ "style", "${_Text21}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid154", tween: [ "style", "${_Text21}", "display", 'block', { fromValue: 'none'}], position: 6090, duration: 0 },
                { id: "eid241", tween: [ "style", "${_Text25}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid242", tween: [ "style", "${_Text25}", "display", 'block', { fromValue: 'none'}], position: 7691, duration: 0 },
                { id: "eid37", tween: [ "style", "${_Arrow-for-indications2}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid38", tween: [ "style", "${_Arrow-for-indications2}", "display", 'block', { fromValue: 'none'}], position: 870, duration: 0 },
                { id: "eid39", tween: [ "style", "${_Arrow-for-indications2}", "display", 'none', { fromValue: 'block'}], position: 1060, duration: 0 },
                { id: "eid95", tween: [ "style", "${_Text13}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid96", tween: [ "style", "${_Text13}", "display", 'block', { fromValue: 'none'}], position: 2960, duration: 0 },
                { id: "eid97", tween: [ "style", "${_Text13}", "display", 'none', { fromValue: 'block'}], position: 3140, duration: 0 },
                { id: "eid79", tween: [ "style", "${_Arrow-for-indications7}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid80", tween: [ "style", "${_Arrow-for-indications7}", "display", 'block', { fromValue: 'none'}], position: 2400, duration: 0 },
                { id: "eid86", tween: [ "style", "${_Arrow-for-indications7}", "display", 'none', { fromValue: 'block'}], position: 2570, duration: 0 },
                { id: "eid91", tween: [ "style", "${_Text12}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid92", tween: [ "style", "${_Text12}", "display", 'block', { fromValue: 'none'}], position: 2750, duration: 0 },
                { id: "eid13", tween: [ "style", "${_Arrow-for-indications}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid14", tween: [ "style", "${_Arrow-for-indications}", "display", 'block', { fromValue: 'none'}], position: 705, duration: 0 },
                { id: "eid15", tween: [ "style", "${_Arrow-for-indications}", "display", 'none', { fromValue: 'block'}], position: 870, duration: 0 },
                { id: "eid129", tween: [ "style", "${_Text17}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid130", tween: [ "style", "${_Text17}", "display", 'block', { fromValue: 'none'}], position: 4594, duration: 0 },
                { id: "eid131", tween: [ "style", "${_Text17}", "display", 'none', { fromValue: 'block'}], position: 4887, duration: 0 },
                { id: "eid11", tween: [ "style", "${_Text5}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid12", tween: [ "style", "${_Text5}", "display", 'block', { fromValue: 'none'}], position: 705, duration: 0 },
                { id: "eid16", tween: [ "style", "${_Text5}", "display", 'none', { fromValue: 'block'}], position: 870, duration: 0 },
                { id: "eid58", tween: [ "style", "${_Arrow-for-indications5}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid59", tween: [ "style", "${_Arrow-for-indications5}", "display", 'block', { fromValue: 'none'}], position: 1445, duration: 0 },
                { id: "eid70", tween: [ "style", "${_Arrow-for-indications5}", "display", 'none', { fromValue: 'block'}], position: 2105, duration: 0 },
                { id: "eid231", tween: [ "style", "${_Text35}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid232", tween: [ "style", "${_Text35}", "display", 'block', { fromValue: 'none'}], position: 250, duration: 0 },
                { id: "eid189", tween: [ "style", "${_big2}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid190", tween: [ "style", "${_big2}", "display", 'block', { fromValue: 'none'}], position: 8182, duration: 0 },
                { id: "eid196", tween: [ "style", "${_big2}", "display", 'none', { fromValue: 'block'}], position: 8500, duration: 0 },
                { id: "eid239", tween: [ "style", "${_Text31}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid240", tween: [ "style", "${_Text31}", "display", 'block', { fromValue: 'none'}], position: 9865, duration: 0 },
                { id: "eid245", tween: [ "style", "${_Dashed-Lines}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid246", tween: [ "style", "${_Dashed-Lines}", "display", 'block', { fromValue: 'none'}], position: 870, duration: 0 },
                { id: "eid249", tween: [ "style", "${_Dashed-Lines}", "display", 'none', { fromValue: 'block'}], position: 1060, duration: 0 },
                { id: "eid185", tween: [ "style", "${_Text26}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid186", tween: [ "style", "${_Text26}", "display", 'block', { fromValue: 'none'}], position: 7917, duration: 0 },
                { id: "eid243", tween: [ "style", "${_packet12}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid244", tween: [ "style", "${_packet12}", "display", 'block', { fromValue: 'none'}], position: 3817, duration: 0 },
                { id: "eid133", tween: [ "style", "${_packet-23}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid134", tween: [ "style", "${_packet-23}", "display", 'block', { fromValue: 'none'}], position: 4887, duration: 0 },
                { id: "eid177", tween: [ "style", "${_black-arow6}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid178", tween: [ "style", "${_black-arow6}", "display", 'block', { fromValue: 'none'}], position: 7691, duration: 0 },
                { id: "eid3", tween: [ "style", "${_first-path}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid4", tween: [ "style", "${_first-path}", "display", 'block', { fromValue: 'none'}], position: 430, duration: 0 },
                { id: "eid1", tween: [ "style", "${_Time-line}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid2", tween: [ "style", "${_Time-line}", "display", 'block', { fromValue: 'none'}], position: 250, duration: 0 },
                { id: "eid63", tween: [ "style", "${_first-path2}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid64", tween: [ "style", "${_first-path2}", "display", 'block', { fromValue: 'none'}], position: 1640, duration: 0 },
                { id: "eid235", tween: [ "style", "${_Text29}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid236", tween: [ "style", "${_Text29}", "display", 'block', { fromValue: 'none'}], position: 9145, duration: 0 },
                { id: "eid206", tween: [ "style", "${_Text29}", "display", 'none', { fromValue: 'block'}], position: 9500, duration: 0 },
                { id: "eid223", tween: [ "style", "${_III}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid224", tween: [ "style", "${_III}", "display", 'block', { fromValue: 'none'}], position: 10500, duration: 0 },
                { id: "eid213", tween: [ "style", "${_black-arow8}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid214", tween: [ "style", "${_black-arow8}", "display", 'block', { fromValue: 'none'}], position: 9865, duration: 0 },
                { id: "eid105", tween: [ "style", "${_Arrow-for-indications9}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid106", tween: [ "style", "${_Arrow-for-indications9}", "display", 'block', { fromValue: 'none'}], position: 3366, duration: 0 },
                { id: "eid110", tween: [ "style", "${_Arrow-for-indications9}", "display", 'none', { fromValue: 'block'}], position: 3567, duration: 0 },
                { id: "eid201", tween: [ "style", "${_Arrow-for-indications16}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid202", tween: [ "style", "${_Arrow-for-indications16}", "display", 'block', { fromValue: 'none'}], position: 9145, duration: 0 },
                { id: "eid205", tween: [ "style", "${_Arrow-for-indications16}", "display", 'none', { fromValue: 'block'}], position: 9500, duration: 0 },
                { id: "eid67", tween: [ "style", "${_Text10}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid68", tween: [ "style", "${_Text10}", "display", 'block', { fromValue: 'none'}], position: 1900, duration: 0 },
                { id: "eid72", tween: [ "style", "${_Text10}", "display", 'none', { fromValue: 'block'}], position: 2105, duration: 0 },
                { id: "eid83", tween: [ "style", "${_Text11}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid84", tween: [ "style", "${_Text11}", "display", 'block', { fromValue: 'none'}], position: 2400, duration: 0 },
                { id: "eid85", tween: [ "style", "${_Text11}", "display", 'none', { fromValue: 'block'}], position: 2570, duration: 0 },
                { id: "eid171", tween: [ "style", "${_Text24}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid172", tween: [ "style", "${_Text24}", "display", 'block', { fromValue: 'none'}], position: 7440, duration: 0 },
                { id: "eid35", tween: [ "style", "${_Text6}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid36", tween: [ "style", "${_Text6}", "display", 'block', { fromValue: 'none'}], position: 870, duration: 0 },
                { id: "eid40", tween: [ "style", "${_Text6}", "display", 'none', { fromValue: 'block'}], position: 1060, duration: 0 },
                { id: "eid229", tween: [ "style", "${_Text34}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid230", tween: [ "style", "${_Text34}", "display", 'block', { fromValue: 'none'}], position: 6911, duration: 0 },
                { id: "eid179", tween: [ "style", "${_first-path6}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid180", tween: [ "style", "${_first-path6}", "display", 'block', { fromValue: 'none'}], position: 7917, duration: 0 },
                { id: "eid99", tween: [ "style", "${_reverse-path2}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid100", tween: [ "style", "${_reverse-path2}", "display", 'block', { fromValue: 'none'}], position: 3140, duration: 0 },
                { id: "eid89", tween: [ "style", "${_black-arow2}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid90", tween: [ "style", "${_black-arow2}", "display", 'block', { fromValue: 'none'}], position: 2750, duration: 0 },
                { id: "eid141", tween: [ "style", "${_Text18}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid142", tween: [ "style", "${_Text18}", "display", 'block', { fromValue: 'none'}], position: 5500, duration: 0 },
                { id: "eid143", tween: [ "style", "${_Text18}", "display", 'none', { fromValue: 'block'}], position: 5839, duration: 0 },
                { id: "eid119", tween: [ "style", "${_Text16}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid120", tween: [ "style", "${_Text16}", "display", 'block', { fromValue: 'none'}], position: 3817, duration: 0 },
                { id: "eid121", tween: [ "style", "${_Text16}", "display", 'none', { fromValue: 'block'}], position: 4093, duration: 0 },
                { id: "eid5", tween: [ "style", "${_black-arow}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid6", tween: [ "style", "${_black-arow}", "display", 'block', { fromValue: 'none'}], position: 590, duration: 0 },
                { id: "eid173", tween: [ "style", "${_first-path5}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid174", tween: [ "style", "${_first-path5}", "display", 'block', { fromValue: 'none'}], position: 7691, duration: 0 },
                { id: "eid181", tween: [ "style", "${_big-rev-path}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid182", tween: [ "style", "${_big-rev-path}", "display", 'block', { fromValue: 'none'}], position: 7917, duration: 0 },
                { id: "eid237", tween: [ "style", "${_black-arow4}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid238", tween: [ "style", "${_black-arow4}", "display", 'block', { fromValue: 'none'}], position: 7250, duration: 0 },
                { id: "eid111", tween: [ "style", "${_Arrow-for-indications10}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid112", tween: [ "style", "${_Arrow-for-indications10}", "display", 'block', { fromValue: 'none'}], position: 3567, duration: 0 },
                { id: "eid116", tween: [ "style", "${_Arrow-for-indications10}", "display", 'none', { fromValue: 'block'}], position: 3817, duration: 0 },
                { id: "eid149", tween: [ "style", "${_reverse-path6}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid150", tween: [ "style", "${_reverse-path6}", "display", 'block', { fromValue: 'none'}], position: 5839, duration: 0 },
                { id: "eid197", tween: [ "style", "${_Arrow-for-indications15}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid198", tween: [ "style", "${_Arrow-for-indications15}", "display", 'block', { fromValue: 'none'}], position: 8815, duration: 0 },
                { id: "eid204", tween: [ "style", "${_Arrow-for-indications15}", "display", 'none', { fromValue: 'block'}], position: 9145, duration: 0 },
                { id: "eid145", tween: [ "style", "${_reverse-path4}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid146", tween: [ "style", "${_reverse-path4}", "display", 'block', { fromValue: 'none'}], position: 5839, duration: 0 },
                { id: "eid135", tween: [ "style", "${_packet_32}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid136", tween: [ "style", "${_packet_32}", "display", 'block', { fromValue: 'none'}], position: 5096, duration: 0 },
                { id: "eid137", tween: [ "style", "${_cluster}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid138", tween: [ "style", "${_cluster}", "display", 'block', { fromValue: 'none'}], position: 5250, duration: 0 },
                { id: "eid87", tween: [ "style", "${_reverse-path}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid88", tween: [ "style", "${_reverse-path}", "display", 'block', { fromValue: 'none'}], position: 2570, duration: 0 },
                { id: "eid125", tween: [ "style", "${_packet_3}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid126", tween: [ "style", "${_packet_3}", "display", 'block', { fromValue: 'none'}], position: 4319, duration: 0 },
                { id: "eid199", tween: [ "style", "${_Text28}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid200", tween: [ "style", "${_Text28}", "display", 'block', { fromValue: 'none'}], position: 8815, duration: 0 },
                { id: "eid203", tween: [ "style", "${_Text28}", "display", 'none', { fromValue: 'block'}], position: 9145, duration: 0 },
                { id: "eid193", tween: [ "style", "${_user-data}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid194", tween: [ "style", "${_user-data}", "display", 'block', { fromValue: 'none'}], position: 8500, duration: 0 },
                { id: "eid247", tween: [ "style", "${_Paranthesis4}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid248", tween: [ "style", "${_Paranthesis4}", "display", 'block', { fromValue: 'none'}], position: 870, duration: 0 },
                { id: "eid250", tween: [ "style", "${_Paranthesis4}", "display", 'none', { fromValue: 'block'}], position: 1060, duration: 0 }            ]
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
})(jQuery, AdobeEdge, "EDGE-2286940");
