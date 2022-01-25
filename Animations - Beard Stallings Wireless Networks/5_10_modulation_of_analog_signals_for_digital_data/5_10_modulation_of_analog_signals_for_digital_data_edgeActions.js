/***********************
* Adobe Edge Animate Composition Actions
*
* Edit this file with caution, being careful to preserve 
* function signatures and comments starting with 'Edge' to maintain the 
* ability to interact with these actions from within Adobe Edge Animate
*
***********************/
(function($, Edge, compId){
var Composition = Edge.Composition, Symbol = Edge.Symbol; // aliases for commonly used Edge classes

   //Edge symbol: 'stage'
   (function(symbolName) {
      Symbol.bindElementAction(compId, symbolName, "document", "compositionReady", function(sym, e) {
         // prepare sequence field
         var sequence = sym.$("sequence")
         sequence.html("Type your 10bit sequence: ");
         inputSequence = $('<input />').attr({'type':'text', 'value':'', 'id':'sequence', 'maxlength':10});
         inputSequence .css('width','90px');
         inputSequence .appendTo(sequence);
         
         var submitBtn = sym.$("btn");
         submitBtn.html("Submit");
         submitBtn.css("text-align", "center");
         submitBtn.css("font-size",14);
         submitBtn.css("font-weight","bold");
         
         
          // get the value of the differnt fields
         function sequenceInfo(){
         		//debugger;
         
         		var sequenceInfo = inputSequence.val();
         		//alert(sequenceInfo);
         		for (var i=0; i<10; i++)
         		{
         			if(sequenceInfo[i]=='1'){
         				sym.setVariable("sequencenr"+i, 1);
         			}
         			else if(sequenceInfo[i]=='0'){
         				sym.setVariable("sequencenr"+i, 0);
         			} else {
         			   return false;
         			}
         		}
             	return true;
         
         }
         
         
         
         
          // send the info to server
         submitBtn.click(function(){	
         			//var status = seqInfo();
         			//sym.$("btn").html(status);
         			//debugger;
                  if(sequenceInfo() == true)
                  {
         				//inputSequence .attr('disabled':'true');
         				sym.$("btn").hide();
         				sym.play("1");
         
                  } else {
         
         				sym.play("error");
         
                  }
         
         
         });
         

      });
      //Edge binding end
      
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
      //Edge binding end     
      
      
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 20000, function(sym, e) {
         // return to beginning
         // Show an Element.
         sym.$("btn").show();
         sym.play("start");

      });
      //Edge binding end
      
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 21000, function(sym, e) {
         // insert code here
         
         //var sequence = sym.$("sequence")
         //sequence.html("Sequence Invalid!");
         debugger;
         var submitBtn = sym.$("btn");
         submitBtn.html("Reset");
         submitBtn.css("text-align", "center");
         submitBtn.css("font-size",14);
         submitBtn.css("font-weight","bold");
         
         submitBtn.click(function(){	
         	sym.play(0);
         	sequence.html("Type your 10bit sequence: ");
         });
         sym.stop();

      });
      //Edge binding end
      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1000, function(sym, e) {
         // Check value 01
         
         // Get the value of a Symbol variable
         var setone = sym.getVariable("sequencenr0");
         //debugger;
         if(setone==1){
         // Hide an Element.
         sym.$("zero0").hide();
         // Show an Element.
         sym.$("one0").show();
         } else {
         // Hide an Element.
         sym.$("one0").hide();
         // Show an Element.
         sym.$("zero0").show();
         }
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2000, function(sym, e) {
         var setone = sym.getVariable("sequencenr0");
         var settwo = sym.getVariable("sequencenr1");
         //debugger;
         if(setone==1){
         // Hide an Element.
         sym.$("zero1").hide();
         // Show an Element.
         sym.$("one1").show();
         } else {
         // Hide an Element.
         sym.$("one1").hide();
         // Show an Element.
         sym.$("zero1").show();
         }
         if(settwo==1){
         // Hide an Element.
         sym.$("zero0").hide();
         // Show an Element.
         sym.$("one0").show();
         } else {
         // Hide an Element.
         sym.$("one0").hide();
         // Show an Element.
         sym.$("zero0").show();
         }
         //debugger;

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3000, function(sym, e) {
         var setone = sym.getVariable("sequencenr0");
         var settwo = sym.getVariable("sequencenr1");
         var setthr = sym.getVariable("sequencenr2");
         //debugger;
         if(setone==1){
         // Hide an Element.
         sym.$("zero2").hide();
         // Show an Element.
         sym.$("one2").show();
         } else {
         // Hide an Element.
         sym.$("one2").hide();
         // Show an Element.
         sym.$("zero2").show();
         }
         if(settwo==1){
         // Hide an Element.
         sym.$("zero1").hide();
         // Show an Element.
         sym.$("one1").show();
         } else {
         // Hide an Element.
         sym.$("one1").hide();
         // Show an Element.
         sym.$("zero1").show();
         }
         if(setthr==1){
         // Hide an Element.
         sym.$("zero0").hide();
         // Show an Element.
         sym.$("one0").show();
         } else {
         // Hide an Element.
         sym.$("one0").hide();
         // Show an Element.
         sym.$("zero0").show();
         }

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 4000, function(sym, e) {
         var setone = sym.getVariable("sequencenr0");
         var settwo = sym.getVariable("sequencenr1");
         var setthr = sym.getVariable("sequencenr2");
         var setfou = sym.getVariable("sequencenr3");
         //debugger;
         if(setone==1){
         // Hide an Element.
         sym.$("zero3").hide();
         // Show an Element.
         sym.$("one3").show();
         } else {
         // Hide an Element.
         sym.$("one3").hide();
         // Show an Element.
         sym.$("zero3").show();
         }
         if(settwo==1){
         // Hide an Element.
         sym.$("zero2").hide();
         // Show an Element.
         sym.$("one2").show();
         } else {
         // Hide an Element.
         sym.$("one2").hide();
         // Show an Element.
         sym.$("zero2").show();
         }
         if(setthr==1){
         // Hide an Element.
         sym.$("zero1").hide();
         // Show an Element.
         sym.$("one1").show();
         } else {
         // Hide an Element.
         sym.$("one1").hide();
         // Show an Element.
         sym.$("zero1").show();
         }
         if(setfou==1){
         // Hide an Element.
         sym.$("zero0").hide();
         // Show an Element.
         sym.$("one0").show();
         } else {
         // Hide an Element.
         sym.$("one0").hide();
         // Show an Element.
         sym.$("zero0").show();
         }

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 5000, function(sym, e) {
         var setone = sym.getVariable("sequencenr0");
         var settwo = sym.getVariable("sequencenr1");
         var setthr = sym.getVariable("sequencenr2");
         var setfou = sym.getVariable("sequencenr3");
         var setfiv = sym.getVariable("sequencenr4");
         //debugger;
         if(setone==1){
         // Hide an Element.
         sym.$("zero4").hide();
         // Show an Element.
         sym.$("one4").show();
         } else {
         // Hide an Element.
         sym.$("one4").hide();
         // Show an Element.
         sym.$("zero4").show();
         }
         if(settwo==1){
         // Hide an Element.
         sym.$("zero3").hide();
         // Show an Element.
         sym.$("one3").show();
         } else {
         // Hide an Element.
         sym.$("one3").hide();
         // Show an Element.
         sym.$("zero3").show();
         }
         if(setthr==1){
         // Hide an Element.
         sym.$("zero2").hide();
         // Show an Element.
         sym.$("one2").show();
         } else {
         // Hide an Element.
         sym.$("one2").hide();
         // Show an Element.
         sym.$("zero2").show();
         }
         if(setfou==1){
         // Hide an Element.
         sym.$("zero1").hide();
         // Show an Element.
         sym.$("one1").show();
         } else {
         // Hide an Element.
         sym.$("one1").hide();
         // Show an Element.
         sym.$("zero1").show();
         }
         if(setfiv==1){
         // Hide an Element.
         sym.$("zero0").hide();
         // Show an Element.
         sym.$("one0").show();
         } else {
         // Hide an Element.
         sym.$("one0").hide();
         // Show an Element.
         sym.$("zero0").show();
         }

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 6000, function(sym, e) {
         var setone = sym.getVariable("sequencenr0");
         var settwo = sym.getVariable("sequencenr1");
         var setthr = sym.getVariable("sequencenr2");
         var setfou = sym.getVariable("sequencenr3");
         var setfiv = sym.getVariable("sequencenr4");
         var setsix = sym.getVariable("sequencenr5");
         //debugger;
         if(setone==1){
         // Hide an Element.
         sym.$("zero5").hide();
         // Show an Element.
         sym.$("one5").show();
         } else {
         // Hide an Element.
         sym.$("one5").hide();
         // Show an Element.
         sym.$("zero5").show();
         }
         if(settwo==1){
         // Hide an Element.
         sym.$("zero4").hide();
         // Show an Element.
         sym.$("one4").show();
         } else {
         // Hide an Element.
         sym.$("one4").hide();
         // Show an Element.
         sym.$("zero4").show();
         }
         if(setthr==1){
         // Hide an Element.
         sym.$("zero3").hide();
         // Show an Element.
         sym.$("one3").show();
         } else {
         // Hide an Element.
         sym.$("one3").hide();
         // Show an Element.
         sym.$("zero3").show();
         }
         if(setfou==1){
         // Hide an Element.
         sym.$("zero2").hide();
         // Show an Element.
         sym.$("one2").show();
         } else {
         // Hide an Element.
         sym.$("one2").hide();
         // Show an Element.
         sym.$("zero2").show();
         }
         if(setfiv==1){
         // Hide an Element.
         sym.$("zero1").hide();
         // Show an Element.
         sym.$("one1").show();
         } else {
         // Hide an Element.
         sym.$("one1").hide();
         // Show an Element.
         sym.$("zero1").show();
         }
         if(setsix==1){
         // Hide an Element.
         sym.$("zero0").hide();
         // Show an Element.
         sym.$("one0").show();
         } else {
         // Hide an Element.
         sym.$("one0").hide();
         // Show an Element.
         sym.$("zero0").show();
         }// insert code here

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 7000, function(sym, e) {
         var setone = sym.getVariable("sequencenr0");
         var settwo = sym.getVariable("sequencenr1");
         var setthr = sym.getVariable("sequencenr2");
         var setfou = sym.getVariable("sequencenr3");
         var setfiv = sym.getVariable("sequencenr4");
         var setsix = sym.getVariable("sequencenr5");
         var setsev = sym.getVariable("sequencenr6");
         //debugger;
         if(setone==1){
         // Hide an Element.
         sym.$("zero6").hide();
         // Show an Element.
         sym.$("one6").show();
         } else {
         // Hide an Element.
         sym.$("one6").hide();
         // Show an Element.
         sym.$("zero6").show();
         }
         if(settwo==1){
         // Hide an Element.
         sym.$("zero5").hide();
         // Show an Element.
         sym.$("one5").show();
         } else {
         // Hide an Element.
         sym.$("one5").hide();
         // Show an Element.
         sym.$("zero5").show();
         }
         if(setthr==1){
         // Hide an Element.
         sym.$("zero4").hide();
         // Show an Element.
         sym.$("one4").show();
         } else {
         // Hide an Element.
         sym.$("one4").hide();
         // Show an Element.
         sym.$("zero4").show();
         }
         if(setfou==1){
         // Hide an Element.
         sym.$("zero3").hide();
         // Show an Element.
         sym.$("one3").show();
         } else {
         // Hide an Element.
         sym.$("one3").hide();
         // Show an Element.
         sym.$("zero3").show();
         }
         if(setfiv==1){
         // Hide an Element.
         sym.$("zero2").hide();
         // Show an Element.
         sym.$("one2").show();
         } else {
         // Hide an Element.
         sym.$("one2").hide();
         // Show an Element.
         sym.$("zero2").show();
         }
         if(setsix==1){
         // Hide an Element.
         sym.$("zero1").hide();
         // Show an Element.
         sym.$("one1").show();
         } else {
         // Hide an Element.
         sym.$("one1").hide();
         // Show an Element.
         sym.$("zero1").show();
         }
         if(setsev==1){
         // Hide an Element.
         sym.$("zero0").hide();
         // Show an Element.
         sym.$("one0").show();
         } else {
         // Hide an Element.
         sym.$("one0").hide();
         // Show an Element.
         sym.$("zero0").show();
         }// insert code here

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 8000, function(sym, e) {
         var setone = sym.getVariable("sequencenr0");
         var settwo = sym.getVariable("sequencenr1");
         var setthr = sym.getVariable("sequencenr2");
         var setfou = sym.getVariable("sequencenr3");
         var setfiv = sym.getVariable("sequencenr4");
         var setsix = sym.getVariable("sequencenr5");
         var setsev = sym.getVariable("sequencenr6");
         var seteig = sym.getVariable("sequencenr7");
         //debugger;
         if(setone==1){
         // Hide an Element.
         sym.$("zero7").hide();
         // Show an Element.
         sym.$("one7").show();
         } else {
         // Hide an Element.
         sym.$("one7").hide();
         // Show an Element.
         sym.$("zero7").show();
         }
         if(settwo==1){
         // Hide an Element.
         sym.$("zero6").hide();
         // Show an Element.
         sym.$("one6").show();
         } else {
         // Hide an Element.
         sym.$("one6").hide();
         // Show an Element.
         sym.$("zero6").show();
         }
         if(setthr==1){
         // Hide an Element.
         sym.$("zero5").hide();
         // Show an Element.
         sym.$("one5").show();
         } else {
         // Hide an Element.
         sym.$("one5").hide();
         // Show an Element.
         sym.$("zero5").show();
         }
         if(setfou==1){
         // Hide an Element.
         sym.$("zero4").hide();
         // Show an Element.
         sym.$("one4").show();
         } else {
         // Hide an Element.
         sym.$("one4").hide();
         // Show an Element.
         sym.$("zero4").show();
         }
         if(setfiv==1){
         // Hide an Element.
         sym.$("zero3").hide();
         // Show an Element.
         sym.$("one3").show();
         } else {
         // Hide an Element.
         sym.$("one3").hide();
         // Show an Element.
         sym.$("zero3").show();
         }
         if(setsix==1){
         // Hide an Element.
         sym.$("zero2").hide();
         // Show an Element.
         sym.$("one2").show();
         } else {
         // Hide an Element.
         sym.$("one2").hide();
         // Show an Element.
         sym.$("zero2").show();
         }
         if(setsev==1){
         // Hide an Element.
         sym.$("zero1").hide();
         // Show an Element.
         sym.$("one1").show();
         } else {
         // Hide an Element.
         sym.$("one1").hide();
         // Show an Element.
         sym.$("zero1").show();
         }
         if(seteig==1){
         // Hide an Element.
         sym.$("zero0").hide();
         // Show an Element.
         sym.$("one0").show();
         } else {
         // Hide an Element.
         sym.$("one0").hide();
         // Show an Element.
         sym.$("zero0").show();
         }

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 9000, function(sym, e) {
         var setone = sym.getVariable("sequencenr0");
         var settwo = sym.getVariable("sequencenr1");
         var setthr = sym.getVariable("sequencenr2");
         var setfou = sym.getVariable("sequencenr3");
         var setfiv = sym.getVariable("sequencenr4");
         var setsix = sym.getVariable("sequencenr5");
         var setsev = sym.getVariable("sequencenr6");
         var seteig = sym.getVariable("sequencenr7");
         var setnin = sym.getVariable("sequencenr8");
         //debugger;
         if(setone==1){
         // Hide an Element.
         sym.$("zero8").hide();
         // Show an Element.
         sym.$("one8").show();
         } else {
         // Hide an Element.
         sym.$("one8").hide();
         // Show an Element.
         sym.$("zero8").show();
         }
         if(settwo==1){
         // Hide an Element.
         sym.$("zero7").hide();
         // Show an Element.
         sym.$("one7").show();
         } else {
         // Hide an Element.
         sym.$("one7").hide();
         // Show an Element.
         sym.$("zero7").show();
         }
         if(setthr==1){
         // Hide an Element.
         sym.$("zero6").hide();
         // Show an Element.
         sym.$("one6").show();
         } else {
         // Hide an Element.
         sym.$("one6").hide();
         // Show an Element.
         sym.$("zero6").show();
         }
         if(setfou==1){
         // Hide an Element.
         sym.$("zero5").hide();
         // Show an Element.
         sym.$("one5").show();
         } else {
         // Hide an Element.
         sym.$("one5").hide();
         // Show an Element.
         sym.$("zero5").show();
         }
         if(setfiv==1){
         // Hide an Element.
         sym.$("zero4").hide();
         // Show an Element.
         sym.$("one4").show();
         } else {
         // Hide an Element.
         sym.$("one4").hide();
         // Show an Element.
         sym.$("zero4").show();
         }
         if(setsix==1){
         // Hide an Element.
         sym.$("zero3").hide();
         // Show an Element.
         sym.$("one3").show();
         } else {
         // Hide an Element.
         sym.$("one3").hide();
         // Show an Element.
         sym.$("zero3").show();
         }
         if(setsev==1){
         // Hide an Element.
         sym.$("zero2").hide();
         // Show an Element.
         sym.$("one2").show();
         } else {
         // Hide an Element.
         sym.$("one2").hide();
         // Show an Element.
         sym.$("zero2").show();
         }
         if(seteig==1){
         // Hide an Element.
         sym.$("zero1").hide();
         // Show an Element.
         sym.$("one1").show();
         } else {
         // Hide an Element.
         sym.$("one1").hide();
         // Show an Element.
         sym.$("zero1").show();
         }
         if(setnin==1){
         // Hide an Element.
         sym.$("zero0").hide();
         // Show an Element.
         sym.$("one0").show();
         } else {
         // Hide an Element.
         sym.$("one0").hide();
         // Show an Element.
         sym.$("zero0").show();
         }

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 10000, function(sym, e) {
         var setone = sym.getVariable("sequencenr0");
         var settwo = sym.getVariable("sequencenr1");
         var setthr = sym.getVariable("sequencenr2");
         var setfou = sym.getVariable("sequencenr3");
         var setfiv = sym.getVariable("sequencenr4");
         var setsix = sym.getVariable("sequencenr5");
         var setsev = sym.getVariable("sequencenr6");
         var seteig = sym.getVariable("sequencenr7");
         var setnin = sym.getVariable("sequencenr8");
         var setten = sym.getVariable("sequencenr9");
         //debugger;
         if(setone==1){
         // Hide an Element.
         sym.$("zero9").hide();
         // Show an Element.
         sym.$("one9").show();
         } else {
         // Hide an Element.
         sym.$("one9").hide();
         // Show an Element.
         sym.$("zero9").show();
         }
         if(settwo==1){
         // Hide an Element.
         sym.$("zero8").hide();
         // Show an Element.
         sym.$("one8").show();
         } else {
         // Hide an Element.
         sym.$("one8").hide();
         // Show an Element.
         sym.$("zero8").show();
         }
         if(setthr==1){
         // Hide an Element.
         sym.$("zero7").hide();
         // Show an Element.
         sym.$("one7").show();
         } else {
         // Hide an Element.
         sym.$("one7").hide();
         // Show an Element.
         sym.$("zero7").show();
         }
         if(setfou==1){
         // Hide an Element.
         sym.$("zero6").hide();
         // Show an Element.
         sym.$("one6").show();
         } else {
         // Hide an Element.
         sym.$("one6").hide();
         // Show an Element.
         sym.$("zero6").show();
         }
         if(setfiv==1){
         // Hide an Element.
         sym.$("zero5").hide();
         // Show an Element.
         sym.$("one5").show();
         } else {
         // Hide an Element.
         sym.$("one5").hide();
         // Show an Element.
         sym.$("zero5").show();
         }
         if(setsix==1){
         // Hide an Element.
         sym.$("zero4").hide();
         // Show an Element.
         sym.$("one4").show();
         } else {
         // Hide an Element.
         sym.$("one4").hide();
         // Show an Element.
         sym.$("zero4").show();
         }
         if(setsev==1){
         // Hide an Element.
         sym.$("zero3").hide();
         // Show an Element.
         sym.$("one3").show();
         } else {
         // Hide an Element.
         sym.$("one3").hide();
         // Show an Element.
         sym.$("zero3").show();
         }
         if(seteig==1){
         // Hide an Element.
         sym.$("zero2").hide();
         // Show an Element.
         sym.$("one2").show();
         } else {
         // Hide an Element.
         sym.$("one2").hide();
         // Show an Element.
         sym.$("zero2").show();
         }
         if(setnin==1){
         // Hide an Element.
         sym.$("zero1").hide();
         // Show an Element.
         sym.$("one1").show();
         } else {
         // Hide an Element.
         sym.$("one1").hide();
         // Show an Element.
         sym.$("zero1").show();
         }
         if(setten==1){
         // Hide an Element.
         sym.$("zero0").hide();
         // Show an Element.
         sym.$("one0").show();
         } else {
         // Hide an Element.
         sym.$("one0").hide();
         // Show an Element.
         sym.$("zero0").show();
         }

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 11000, function(sym, e) {
         var settwo = sym.getVariable("sequencenr1");
         var setthr = sym.getVariable("sequencenr2");
         var setfou = sym.getVariable("sequencenr3");
         var setfiv = sym.getVariable("sequencenr4");
         var setsix = sym.getVariable("sequencenr5");
         var setsev = sym.getVariable("sequencenr6");
         var seteig = sym.getVariable("sequencenr7");
         var setnin = sym.getVariable("sequencenr8");
         var setten = sym.getVariable("sequencenr9");
         debugger;
         if(settwo==1){
         // Hide an Element.
         sym.$("zero9").hide();
         // Show an Element.
         sym.$("one9").show();
         } else {
         // Hide an Element.
         sym.$("one9").hide();
         // Show an Element.
         sym.$("zero9").show();
         }
         if(setthr==1){
         // Hide an Element.
         sym.$("zero8").hide();
         // Show an Element.
         sym.$("one8").show();
         } else {
         // Hide an Element.
         sym.$("one8").hide();
         // Show an Element.
         sym.$("zero8").show();
         }
         if(setfou==1){
         // Hide an Element.
         sym.$("zero7").hide();
         // Show an Element.
         sym.$("one7").show();
         } else {
         // Hide an Element.
         sym.$("one7").hide();
         // Show an Element.
         sym.$("zero7").show();
         }
         if(setfiv==1){
         // Hide an Element.
         sym.$("zero6").hide();
         // Show an Element.
         sym.$("one6").show();
         } else {
         // Hide an Element.
         sym.$("one6").hide();
         // Show an Element.
         sym.$("zero6").show();
         }
         if(setsix==1){
         // Hide an Element.
         sym.$("zero5").hide();
         // Show an Element.
         sym.$("one5").show();
         } else {
         // Hide an Element.
         sym.$("one5").hide();
         // Show an Element.
         sym.$("zero5").show();
         }
         if(setsev==1){
         // Hide an Element.
         sym.$("zero4").hide();
         // Show an Element.
         sym.$("one4").show();
         } else {
         // Hide an Element.
         sym.$("one4").hide();
         // Show an Element.
         sym.$("zero4").show();
         }
         if(seteig==1){
         // Hide an Element.
         sym.$("zero3").hide();
         // Show an Element.
         sym.$("one3").show();
         } else {
         // Hide an Element.
         sym.$("one3").hide();
         // Show an Element.
         sym.$("zero3").show();
         }
         if(setnin==1){
         // Hide an Element.
         sym.$("zero2").hide();
         // Show an Element.
         sym.$("one2").show();
         } else {
         // Hide an Element.
         sym.$("one2").hide();
         // Show an Element.
         sym.$("zero2").show();
         }
         if(setten==1){
         // Hide an Element.
         sym.$("zero1").hide();
         // Show an Element.
         sym.$("one1").show();
         } else {
         // Hide an Element.
         sym.$("one1").hide();
         // Show an Element.
         sym.$("zero1").show();
         }
         // Hide an Element.
         sym.$("one0").hide();
         // Show an Element.
         sym.$("zero0").show();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 12000, function(sym, e) {
         var setthr = sym.getVariable("sequencenr2");
         var setfou = sym.getVariable("sequencenr3");
         var setfiv = sym.getVariable("sequencenr4");
         var setsix = sym.getVariable("sequencenr5");
         var setsev = sym.getVariable("sequencenr6");
         var seteig = sym.getVariable("sequencenr7");
         var setnin = sym.getVariable("sequencenr8");
         var setten = sym.getVariable("sequencenr9");
         //debugger;
         if(setthr==1){
         // Hide an Element.
         sym.$("zero9").hide();
         // Show an Element.
         sym.$("one9").show();
         } else {
         // Hide an Element.
         sym.$("one9").hide();
         // Show an Element.
         sym.$("zero9").show();
         }
         if(setfou==1){
         // Hide an Element.
         sym.$("zero8").hide();
         // Show an Element.
         sym.$("one8").show();
         } else {
         // Hide an Element.
         sym.$("one8").hide();
         // Show an Element.
         sym.$("zero8").show();
         }
         if(setfiv==1){
         // Hide an Element.
         sym.$("zero7").hide();
         // Show an Element.
         sym.$("one7").show();
         } else {
         // Hide an Element.
         sym.$("one7").hide();
         // Show an Element.
         sym.$("zero7").show();
         }
         if(setsix==1){
         // Hide an Element.
         sym.$("zero6").hide();
         // Show an Element.
         sym.$("one6").show();
         } else {
         // Hide an Element.
         sym.$("one6").hide();
         // Show an Element.
         sym.$("zero6").show();
         }
         if(setsev==1){
         // Hide an Element.
         sym.$("zero5").hide();
         // Show an Element.
         sym.$("one5").show();
         } else {
         // Hide an Element.
         sym.$("one5").hide();
         // Show an Element.
         sym.$("zero5").show();
         }
         if(seteig==1){
         // Hide an Element.
         sym.$("zero4").hide();
         // Show an Element.
         sym.$("one4").show();
         } else {
         // Hide an Element.
         sym.$("one4").hide();
         // Show an Element.
         sym.$("zero4").show();
         }
         if(setnin==1){
         // Hide an Element.
         sym.$("zero3").hide();
         // Show an Element.
         sym.$("one3").show();
         } else {
         // Hide an Element.
         sym.$("one3").hide();
         // Show an Element.
         sym.$("zero3").show();
         }
         if(setten==1){
         // Hide an Element.
         sym.$("zero2").hide();
         // Show an Element.
         sym.$("one2").show();
         } else {
         // Hide an Element.
         sym.$("one2").hide();
         // Show an Element.
         sym.$("zero2").show();
         }
         
         // Hide an Element.
         sym.$("one1").hide();
         // Show an Element.
         sym.$("zero1").show();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 13000, function(sym, e) {
         var setfou = sym.getVariable("sequencenr3");
         var setfiv = sym.getVariable("sequencenr4");
         var setsix = sym.getVariable("sequencenr5");
         var setsev = sym.getVariable("sequencenr6");
         var seteig = sym.getVariable("sequencenr7");
         var setnin = sym.getVariable("sequencenr8");
         var setten = sym.getVariable("sequencenr9");
         //debugger;
         if(setfou==1){
         // Hide an Element.
         sym.$("zero9").hide();
         // Show an Element.
         sym.$("one9").show();
         } else {
         // Hide an Element.
         sym.$("one9").hide();
         // Show an Element.
         sym.$("zero9").show();
         }
         if(setfiv==1){
         // Hide an Element.
         sym.$("zero8").hide();
         // Show an Element.
         sym.$("one8").show();
         } else {
         // Hide an Element.
         sym.$("one8").hide();
         // Show an Element.
         sym.$("zero8").show();
         }
         if(setsix==1){
         // Hide an Element.
         sym.$("zero7").hide();
         // Show an Element.
         sym.$("one7").show();
         } else {
         // Hide an Element.
         sym.$("one7").hide();
         // Show an Element.
         sym.$("zero7").show();
         }
         if(setsev==1){
         // Hide an Element.
         sym.$("zero6").hide();
         // Show an Element.
         sym.$("one6").show();
         } else {
         // Hide an Element.
         sym.$("one6").hide();
         // Show an Element.
         sym.$("zero6").show();
         }
         if(seteig==1){
         // Hide an Element.
         sym.$("zero5").hide();
         // Show an Element.
         sym.$("one5").show();
         } else {
         // Hide an Element.
         sym.$("one5").hide();
         // Show an Element.
         sym.$("zero5").show();
         }
         if(setnin==1){
         // Hide an Element.
         sym.$("zero4").hide();
         // Show an Element.
         sym.$("one4").show();
         } else {
         // Hide an Element.
         sym.$("one4").hide();
         // Show an Element.
         sym.$("zero4").show();
         }
         if(setten==1){
         // Hide an Element.
         sym.$("zero3").hide();
         // Show an Element.
         sym.$("one3").show();
         } else {
         // Hide an Element.
         sym.$("one3").hide();
         // Show an Element.
         sym.$("zero3").show();
         }
         
         // Hide an Element.
         sym.$("one2").hide();
         // Show an Element.
         sym.$("zero2").show();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 14000, function(sym, e) {
         var setfiv = sym.getVariable("sequencenr4");
         var setsix = sym.getVariable("sequencenr5");
         var setsev = sym.getVariable("sequencenr6");
         var seteig = sym.getVariable("sequencenr7");
         var setnin = sym.getVariable("sequencenr8");
         var setten = sym.getVariable("sequencenr9");
         //debugger;
         if(setfiv==1){
         // Hide an Element.
         sym.$("zero9").hide();
         // Show an Element.
         sym.$("one9").show();
         } else {
         // Hide an Element.
         sym.$("one9").hide();
         // Show an Element.
         sym.$("zero9").show();
         }
         if(setsix==1){
         // Hide an Element.
         sym.$("zero8").hide();
         // Show an Element.
         sym.$("one8").show();
         } else {
         // Hide an Element.
         sym.$("one8").hide();
         // Show an Element.
         sym.$("zero8").show();
         }
         if(setsev==1){
         // Hide an Element.
         sym.$("zero7").hide();
         // Show an Element.
         sym.$("one7").show();
         } else {
         // Hide an Element.
         sym.$("one7").hide();
         // Show an Element.
         sym.$("zero7").show();
         }
         if(seteig==1){
         // Hide an Element.
         sym.$("zero6").hide();
         // Show an Element.
         sym.$("one6").show();
         } else {
         // Hide an Element.
         sym.$("one6").hide();
         // Show an Element.
         sym.$("zero6").show();
         }
         if(setnin==1){
         // Hide an Element.
         sym.$("zero5").hide();
         // Show an Element.
         sym.$("one5").show();
         } else {
         // Hide an Element.
         sym.$("one5").hide();
         // Show an Element.
         sym.$("zero5").show();
         }
         if(setten==1){
         // Hide an Element.
         sym.$("zero4").hide();
         // Show an Element.
         sym.$("one4").show();
         } else {
         // Hide an Element.
         sym.$("one4").hide();
         // Show an Element.
         sym.$("zero4").show();
         }
         
         // Hide an Element.
         sym.$("one3").hide();
         // Show an Element.
         sym.$("zero3").show();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 15000, function(sym, e) {
         var setsix = sym.getVariable("sequencenr5");
         var setsev = sym.getVariable("sequencenr6");
         var seteig = sym.getVariable("sequencenr7");
         var setnin = sym.getVariable("sequencenr8");
         var setten = sym.getVariable("sequencenr9");
         //debugger;
         if(setsix==1){
         // Hide an Element.
         sym.$("zero9").hide();
         // Show an Element.
         sym.$("one9").show();
         } else {
         // Hide an Element.
         sym.$("one9").hide();
         // Show an Element.
         sym.$("zero9").show();
         }
         if(setsev==1){
         // Hide an Element.
         sym.$("zero8").hide();
         // Show an Element.
         sym.$("one8").show();
         } else {
         // Hide an Element.
         sym.$("one8").hide();
         // Show an Element.
         sym.$("zero8").show();
         }
         if(seteig==1){
         // Hide an Element.
         sym.$("zero7").hide();
         // Show an Element.
         sym.$("one7").show();
         } else {
         // Hide an Element.
         sym.$("one7").hide();
         // Show an Element.
         sym.$("zero7").show();
         }
         if(setnin==1){
         // Hide an Element.
         sym.$("zero6").hide();
         // Show an Element.
         sym.$("one6").show();
         } else {
         // Hide an Element.
         sym.$("one6").hide();
         // Show an Element.
         sym.$("zero6").show();
         }
         if(setten==1){
         // Hide an Element.
         sym.$("zero5").hide();
         // Show an Element.
         sym.$("one5").show();
         } else {
         // Hide an Element.
         sym.$("one5").hide();
         // Show an Element.
         sym.$("zero5").show();
         }
         
         // Hide an Element.
         sym.$("one4").hide();
         // Show an Element.
         sym.$("zero4").show();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 17000, function(sym, e) {
         var seteig = sym.getVariable("sequencenr7");
         var setnin = sym.getVariable("sequencenr8");
         var setten = sym.getVariable("sequencenr9");
         //debugger;
         if(seteig==1){
         // Hide an Element.
         sym.$("zero9").hide();
         // Show an Element.
         sym.$("one9").show();
         } else {
         // Hide an Element.
         sym.$("one9").hide();
         // Show an Element.
         sym.$("zero9").show();
         }
         if(setnin==1){
         // Hide an Element.
         sym.$("zero8").hide();
         // Show an Element.
         sym.$("one8").show();
         } else {
         // Hide an Element.
         sym.$("one8").hide();
         // Show an Element.
         sym.$("zero8").show();
         }
         if(setten==1){
         // Hide an Element.
         sym.$("zero7").hide();
         // Show an Element.
         sym.$("one7").show();
         } else {
         // Hide an Element.
         sym.$("one7").hide();
         // Show an Element.
         sym.$("zero7").show();
         }
         // Hide an Element.
         sym.$("one6").hide();
         // Show an Element.
         sym.$("zero6").show();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 16000, function(sym, e) {
         var setsev = sym.getVariable("sequencenr6");
         var seteig = sym.getVariable("sequencenr7");
         var setnin = sym.getVariable("sequencenr8");
         var setten = sym.getVariable("sequencenr9");
         //debugger;
         if(setsev==1){
         // Hide an Element.
         sym.$("zero9").hide();
         // Show an Element.
         sym.$("one9").show();
         } else {
         // Hide an Element.
         sym.$("one9").hide();
         // Show an Element.
         sym.$("zero9").show();
         }
         if(seteig==1){
         // Hide an Element.
         sym.$("zero8").hide();
         // Show an Element.
         sym.$("one8").show();
         } else {
         // Hide an Element.
         sym.$("one8").hide();
         // Show an Element.
         sym.$("zero8").show();
         }
         if(setnin==1){
         // Hide an Element.
         sym.$("zero7").hide();
         // Show an Element.
         sym.$("one7").show();
         } else {
         // Hide an Element.
         sym.$("one7").hide();
         // Show an Element.
         sym.$("zero7").show();
         }
         if(setten==1){
         // Hide an Element.
         sym.$("zero6").hide();
         // Show an Element.
         sym.$("one6").show();
         } else {
         // Hide an Element.
         sym.$("one6").hide();
         // Show an Element.
         sym.$("zero6").show();
         }
         // Hide an Element.
         sym.$("one5").hide();
         // Show an Element.
         sym.$("zero5").show();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 18000, function(sym, e) {
         var setnin = sym.getVariable("sequencenr8");
         var setten = sym.getVariable("sequencenr9");
         //debugger;
         if(setnin==1){
         // Hide an Element.
         sym.$("zero9").hide();
         // Show an Element.
         sym.$("one9").show();
         } else {
         // Hide an Element.
         sym.$("one9").hide();
         // Show an Element.
         sym.$("zero9").show();
         }
         if(setten==1){
         // Hide an Element.
         sym.$("zero8").hide();
         // Show an Element.
         sym.$("one8").show();
         } else {
         // Hide an Element.
         sym.$("one8").hide();
         // Show an Element.
         sym.$("zero8").show();
         }
         // Hide an Element.
         sym.$("one7").hide();
         // Show an Element.
         sym.$("zero7").show();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 19000, function(sym, e) {
         var setten = sym.getVariable("sequencenr9");
         //debugger;
         if(setten==1){
         // Hide an Element.
         sym.$("zero9").hide();
         // Show an Element.
         sym.$("one9").show();
         } else {
         // Hide an Element.
         sym.$("one9").hide();
         // Show an Element.
         sym.$("zero9").show();
         }
         // Hide an Element.
         sym.$("one8").hide();
         // Show an Element.
         sym.$("zero8").show();

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

})(jQuery, AdobeEdge, "EDGE-12010280");