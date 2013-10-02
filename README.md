Desafío StarTechConf 2013
=========================

Concurso:

    http://www.programando.org/blog/2013/09/desafio-startechconf-2013/

Probar en esta dirección:

    http://aldrinmartoq.github.io/lnds-jsondrawing/

Una gracia de esta implementación es que es fácil agregar nuevas operaciones, para soportar por ejemplo `{'triangle' : [1, 2, 3] }` basta implementar `JSONDrawing.triangle = function(ctx, args) { /* triangle code */}`.

Métricas:

    Halstead effort (Total): 3562.29.
    Halstead T: 197.905

    $ cr .
    lnds-jsondrawing/amartoq.js

    Maintainability index: 140.4471640211928
    Aggregate cyclomatic complexity: 4
    Mean parameter count: 1.9

    Function: JSONDrawing_draw
      Line No.: 1
      Physical SLOC: 11
      Logical SLOC: 9
      Parameter count: 2
      Cyclomatic complexity: 2
      Halstead difficulty: 10.384615384615385
      Halstead volume: 226.17809780285066
      Halstead effort: 2348.772554106526

    Function: JSONDrawing
      Line No.: 12
      Physical SLOC: 3
      Logical SLOC: 1
      Parameter count: 2
      Cyclomatic complexity: 1
      Halstead difficulty: 1.3333333333333333
      Halstead volume: 36
      Halstead effort: 48

    Function: JSONDrawing_color
      Line No.: 15
      Physical SLOC: 3
      Logical SLOC: 1
      Parameter count: 1
      Cyclomatic complexity: 2
      Halstead difficulty: 5.6000000000000005
      Halstead volume: 53.77443751081735
      Halstead effort: 301.1368500605772

    Function: JSONDrawing.background
      Line No.: 18
      Physical SLOC: 3
      Logical SLOC: 1
      Parameter count: 2
      Cyclomatic complexity: 1
      Halstead difficulty: 2
      Halstead volume: 41.20902501875006
      Halstead effort: 82.41805003750012

    Function: JSONDrawing.circle
      Line No.: 21
      Physical SLOC: 3
      Logical SLOC: 1
      Parameter count: 2
      Cyclomatic complexity: 1
      Halstead difficulty: 1.7142857142857142
      Halstead volume: 53.88872502451932
      Halstead effort: 92.38067147060454

    Function: JSONDrawing.box
      Line No.: 24
      Physical SLOC: 3
      Logical SLOC: 1
      Parameter count: 2
      Cyclomatic complexity: 1
      Halstead difficulty: 3.4285714285714284
      Halstead volume: 86.37013046707143
      Halstead effort: 296.12616160138776

    Function: JSONDrawing.line
      Line No.: 27
      Physical SLOC: 4
      Logical SLOC: 2
      Parameter count: 2
      Cyclomatic complexity: 1
      Halstead difficulty: 1.75
      Halstead volume: 73.08241808752197
      Halstead effort: 127.89423165316344

    Function: JSONDrawing.pen
      Line No.: 31
      Physical SLOC: 3
      Logical SLOC: 1
      Parameter count: 2
      Cyclomatic complexity: 1
      Halstead difficulty: 2.25
      Halstead volume: 25.26619429851844
      Halstead effort: 56.848937171666485

    Function: JSONDrawing.width
      Line No.: 34
      Physical SLOC: 3
      Logical SLOC: 1
      Parameter count: 2
      Cyclomatic complexity: 1
      Halstead difficulty: 1.6666666666666667
      Halstead volume: 16.253496664211536
      Halstead effort: 27.089161107019226

    Function: JSONDrawing.fill
      Line No.: 37
      Physical SLOC: 3
      Logical SLOC: 1
      Parameter count: 2
      Cyclomatic complexity: 2
      Halstead difficulty: 3.75
      Halstead volume: 48.43204266092217
      Halstead effort: 181.62015997845813
