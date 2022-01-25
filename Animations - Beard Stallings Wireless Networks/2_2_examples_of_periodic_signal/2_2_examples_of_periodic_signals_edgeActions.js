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
      
      
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 250, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_Stage}", "click", function(sym, e) {
         sym.play();
         sym.play();
         sym.play();
         sym.play();
         
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2250, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "document", "compositionReady", function(sym, e) {
         // insert code to be run when the composition is fully loaded here
         var stageHeight = sym.$("Stage").height();
         sym.$("Stage").css({
         "transform-origin":"0 0",
         "-webkit-transform-origin":"0 0",
         "-ms-transform-origin":"0 0",
         "-moz-transform-origin":"0 0",
         });
         function scaleStage(){
         var Stage = sym.$("Stage");
         var parent = sym.$("Stage").parent();
         var parentWidth = stage.parent().width();
         var stageWidth = stage.width();
         var desiredWidth = Math.round(parentWidth * 1);
         var rescale = (desiredWidth / stageWidth);
         stage.css('transform','scale('+ rescale +')');
         stage.css('-webit-transform','scale('+ rescale +')');
         stage.css('-ms-transform','scale('+ rescale +')');
         stage.css('-moz-transform','scale('+ rescale +')');
         parent.height(stageHeight * rescale);
         }
         $(window).on('resize',function(){
         scaleStage();
         });
         $(document).ready(function(){
         scaleStage();
         });

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 750, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1840, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

})(jQuery, AdobeEdge, "EDGE-645036049");