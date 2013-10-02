var JSONDrawing_draw = function(json, ctx) {
  for (var i = 0; i < json.length; i++) {
    ctx.beginPath();
    var x = json[i];
    for (var m in x) {      
      JSONDrawing[m](ctx, x[m]);
    }
    ctx.fillStyle != 'rgba(0, 0, 0, 0)' && ctx.fill();
    ctx.stroke();
  }    
};
var JSONDrawing = function(cnv, json) {
  JSONDrawing_draw(eval(json), cnv.getContext('2d'));
}
var JSONDrawing_color = function(args) {
  return typeof args == 'number' ? '#' + args.toString(16) : args;
};
JSONDrawing.background = function(ctx, args) {
  ctx.canvas.style.backgroundColor = JSONDrawing_color(args);
};
JSONDrawing.circle = function(ctx, args) {
  ctx.arc(args[0], args[1], args[2], 0, 6.283185307179586);
};
JSONDrawing.box = function(ctx, args) {
  ctx.rect(args[0], args[1], args[2] - args[0], args[3] - args[1]);
};
JSONDrawing.line = function(ctx, args) {
  ctx.moveTo(args[0], args[1]);
  ctx.lineTo(args[2], args[3]);
};
JSONDrawing.pen =  function(ctx, args) {
  ctx.strokeStyle = JSONDrawing_color(args);
};
JSONDrawing.width = function(ctx, args) {
  ctx.lineWidth = args;
};
JSONDrawing.fill = function(ctx, args) {
  ctx.fillStyle = args == 'none' ? 'transparent' : JSONDrawing_color(args);
};
