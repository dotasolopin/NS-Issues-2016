var core_1 = require('@angular/core');
var elementRegistryModule = require('nativescript-angular/element-registry');
var chartModule = require('./../');
var observable_array_1 = require("data/observable-array");
var SeriesComponentBase = (function () {
    function SeriesComponentBase() {
    }
    Object.defineProperty(SeriesComponentBase.prototype, "nativeSeries", {
        get: function () {
            return this._nativeSeries;
        },
        enumerable: true,
        configurable: true
    });
    return SeriesComponentBase;
})();
var RadCartesianChartComponent = (function () {
    function RadCartesianChartComponent(_elementRef) {
        this._elementRef = _elementRef;
        this._nativeChart = _elementRef.nativeElement;
    }
    Object.defineProperty(RadCartesianChartComponent.prototype, "cartesianChart", {
        get: function () {
            return this._nativeChart;
        },
        enumerable: true,
        configurable: true
    });
    RadCartesianChartComponent = __decorate([
        core_1.Component({
            selector: "RadCartesianChart",
            template: "",
        }),
        __param(0, core_1.Inject(core_1.ElementRef))
    ], RadCartesianChartComponent);
    return RadCartesianChartComponent;
})();
exports.RadCartesianChartComponent = RadCartesianChartComponent;
var RadPieChartComponent = (function () {
    function RadPieChartComponent(_elementRef) {
        this._elementRef = _elementRef;
        this._nativeChart = _elementRef.nativeElement;
    }
    Object.defineProperty(RadPieChartComponent.prototype, "pieChart", {
        get: function () {
            return this._nativeChart;
        },
        enumerable: true,
        configurable: true
    });
    RadPieChartComponent = __decorate([
        core_1.Component({
            selector: "RadPieChart",
            template: "",
        }),
        __param(0, core_1.Inject(core_1.ElementRef))
    ], RadPieChartComponent);
    return RadPieChartComponent;
})();
exports.RadPieChartComponent = RadPieChartComponent;
var RadLegendViewDirective = (function () {
    function RadLegendViewDirective() {
    }
    RadLegendViewDirective = __decorate([
        core_1.Directive({
            selector: "RadLegendView"
        })
    ], RadLegendViewDirective);
    return RadLegendViewDirective;
})();
exports.RadLegendViewDirective = RadLegendViewDirective;
var CategoricalAxisDirective = (function () {
    function CategoricalAxisDirective() {
    }
    CategoricalAxisDirective = __decorate([
        core_1.Directive({
            selector: "CategoricalAxis"
        })
    ], CategoricalAxisDirective);
    return CategoricalAxisDirective;
})();
exports.CategoricalAxisDirective = CategoricalAxisDirective;
var LinearAxisDirective = (function () {
    function LinearAxisDirective() {
    }
    LinearAxisDirective = __decorate([
        core_1.Directive({
            selector: "LinearAxis"
        })
    ], LinearAxisDirective);
    return LinearAxisDirective;
})();
exports.LinearAxisDirective = LinearAxisDirective;
var DateTimeCategoricalAxisDirective = (function () {
    function DateTimeCategoricalAxisDirective() {
    }
    DateTimeCategoricalAxisDirective = __decorate([
        core_1.Directive({
            selector: "DateTimeCategoricalAxis"
        })
    ], DateTimeCategoricalAxisDirective);
    return DateTimeCategoricalAxisDirective;
})();
exports.DateTimeCategoricalAxisDirective = DateTimeCategoricalAxisDirective;
var DateTimeContinuousAxisDirective = (function () {
    function DateTimeContinuousAxisDirective() {
    }
    DateTimeContinuousAxisDirective = __decorate([
        core_1.Directive({
            selector: "DateTimeContinuousAxis"
        })
    ], DateTimeContinuousAxisDirective);
    return DateTimeContinuousAxisDirective;
})();
exports.DateTimeContinuousAxisDirective = DateTimeContinuousAxisDirective;
var LogarithmicAxisDirective = (function () {
    function LogarithmicAxisDirective() {
    }
    LogarithmicAxisDirective = __decorate([
        core_1.Directive({
            selector: "LogarithmicAxis"
        })
    ], LogarithmicAxisDirective);
    return LogarithmicAxisDirective;
})();
exports.LogarithmicAxisDirective = LogarithmicAxisDirective;
var LineSeriesDirective = (function (_super) {
    __extends(LineSeriesDirective, _super);
    function LineSeriesDirective(_elementRef) {
        _super.call(this);
        this._elementRef = _elementRef;
        this._nativeSeries = this._elementRef.nativeElement;
    }
    LineSeriesDirective = __decorate([
        core_1.Directive({
            selector: "LineSeries"
        }),
        __param(0, core_1.Inject(core_1.ElementRef))
    ], LineSeriesDirective);
    return LineSeriesDirective;
})(SeriesComponentBase);
exports.LineSeriesDirective = LineSeriesDirective;
var AreaSeriesDirective = (function (_super) {
    __extends(AreaSeriesDirective, _super);
    function AreaSeriesDirective(_elementRef) {
        _super.call(this);
        this._elementRef = _elementRef;
        this._nativeSeries = this._elementRef.nativeElement;
    }
    AreaSeriesDirective = __decorate([
        core_1.Directive({
            selector: "AreaSeries"
        }),
        __param(0, core_1.Inject(core_1.ElementRef))
    ], AreaSeriesDirective);
    return AreaSeriesDirective;
})(SeriesComponentBase);
exports.AreaSeriesDirective = AreaSeriesDirective;
var SplineSeriesDirective = (function (_super) {
    __extends(SplineSeriesDirective, _super);
    function SplineSeriesDirective(_elementRef) {
        _super.call(this);
        this._elementRef = _elementRef;
        this._nativeSeries = this._elementRef.nativeElement;
    }
    SplineSeriesDirective = __decorate([
        core_1.Directive({
            selector: "SplineSeries"
        }),
        __param(0, core_1.Inject(core_1.ElementRef))
    ], SplineSeriesDirective);
    return SplineSeriesDirective;
})(SeriesComponentBase);
exports.SplineSeriesDirective = SplineSeriesDirective;
var SplineAreaSeriesDirective = (function (_super) {
    __extends(SplineAreaSeriesDirective, _super);
    function SplineAreaSeriesDirective(_elementRef) {
        _super.call(this);
        this._elementRef = _elementRef;
        this._nativeSeries = this._elementRef.nativeElement;
    }
    SplineAreaSeriesDirective = __decorate([
        core_1.Directive({
            selector: "SplineAreaSeries"
        }),
        __param(0, core_1.Inject(core_1.ElementRef))
    ], SplineAreaSeriesDirective);
    return SplineAreaSeriesDirective;
})(SeriesComponentBase);
exports.SplineAreaSeriesDirective = SplineAreaSeriesDirective;
var BarSeriesDirective = (function (_super) {
    __extends(BarSeriesDirective, _super);
    function BarSeriesDirective(_elementRef) {
        _super.call(this);
        this._elementRef = _elementRef;
        this._nativeSeries = this._elementRef.nativeElement;
    }
    BarSeriesDirective = __decorate([
        core_1.Directive({
            selector: "BarSeries"
        }),
        __param(0, core_1.Inject(core_1.ElementRef))
    ], BarSeriesDirective);
    return BarSeriesDirective;
})(SeriesComponentBase);
exports.BarSeriesDirective = BarSeriesDirective;
var RangeBarSeriesDirective = (function (_super) {
    __extends(RangeBarSeriesDirective, _super);
    function RangeBarSeriesDirective(_elementRef) {
        _super.call(this);
        this._elementRef = _elementRef;
        this._nativeSeries = this._elementRef.nativeElement;
    }
    RangeBarSeriesDirective = __decorate([
        core_1.Directive({
            selector: "RangeBarSeries"
        }),
        __param(0, core_1.Inject(core_1.ElementRef))
    ], RangeBarSeriesDirective);
    return RangeBarSeriesDirective;
})(SeriesComponentBase);
exports.RangeBarSeriesDirective = RangeBarSeriesDirective;
var BubbleSeriesDirective = (function (_super) {
    __extends(BubbleSeriesDirective, _super);
    function BubbleSeriesDirective(_elementRef) {
        _super.call(this);
        this._elementRef = _elementRef;
        this._nativeSeries = this._elementRef.nativeElement;
    }
    BubbleSeriesDirective = __decorate([
        core_1.Directive({
            selector: "BubbleSeries"
        }),
        __param(0, core_1.Inject(core_1.ElementRef))
    ], BubbleSeriesDirective);
    return BubbleSeriesDirective;
})(SeriesComponentBase);
exports.BubbleSeriesDirective = BubbleSeriesDirective;
var ScatterBubbleSeriesDirective = (function (_super) {
    __extends(ScatterBubbleSeriesDirective, _super);
    function ScatterBubbleSeriesDirective(_elementRef) {
        _super.call(this);
        this._elementRef = _elementRef;
        this._nativeSeries = this._elementRef.nativeElement;
    }
    ScatterBubbleSeriesDirective = __decorate([
        core_1.Directive({
            selector: "ScatterBubbleSeries"
        }),
        __param(0, core_1.Inject(core_1.ElementRef))
    ], ScatterBubbleSeriesDirective);
    return ScatterBubbleSeriesDirective;
})(SeriesComponentBase);
exports.ScatterBubbleSeriesDirective = ScatterBubbleSeriesDirective;
var ScatterSeriesDirective = (function (_super) {
    __extends(ScatterSeriesDirective, _super);
    function ScatterSeriesDirective(_elementRef) {
        _super.call(this);
        this._elementRef = _elementRef;
        this._nativeSeries = this._elementRef.nativeElement;
    }
    ScatterSeriesDirective = __decorate([
        core_1.Directive({
            selector: "ScatterSeries"
        }),
        __param(0, core_1.Inject(core_1.ElementRef))
    ], ScatterSeriesDirective);
    return ScatterSeriesDirective;
})(SeriesComponentBase);
exports.ScatterSeriesDirective = ScatterSeriesDirective;
var PaletteDirective = (function (_super) {
    __extends(PaletteDirective, _super);
    function PaletteDirective(_elementRef) {
        _super.call(this);
        this._elementRef = _elementRef;
        this._nativeSeries = this._elementRef.nativeElement;
    }
    PaletteDirective = __decorate([
        core_1.Directive({
            selector: "Palette"
        }),
        __param(0, core_1.Inject(core_1.ElementRef))
    ], PaletteDirective);
    return PaletteDirective;
})(SeriesComponentBase);
exports.PaletteDirective = PaletteDirective;
var PieSeriesDirective = (function (_super) {
    __extends(PieSeriesDirective, _super);
    function PieSeriesDirective(_elementRef) {
        _super.call(this);
        this._elementRef = _elementRef;
        this._nativeSeries = this._elementRef.nativeElement;
    }
    PieSeriesDirective = __decorate([
        core_1.Directive({
            selector: "PieSeries"
        }),
        __param(0, core_1.Inject(core_1.ElementRef))
    ], PieSeriesDirective);
    return PieSeriesDirective;
})(SeriesComponentBase);
exports.PieSeriesDirective = PieSeriesDirective;
var DonutSeriesDirective = (function (_super) {
    __extends(DonutSeriesDirective, _super);
    function DonutSeriesDirective(_elementRef) {
        _super.call(this);
        this._elementRef = _elementRef;
        this._nativeSeries = this._elementRef.nativeElement;
    }
    DonutSeriesDirective = __decorate([
        core_1.Directive({
            selector: "DonutSeries"
        }),
        __param(0, core_1.Inject(core_1.ElementRef))
    ], DonutSeriesDirective);
    return DonutSeriesDirective;
})(SeriesComponentBase);
exports.DonutSeriesDirective = DonutSeriesDirective;
var CandlestickSeriesDirective = (function (_super) {
    __extends(CandlestickSeriesDirective, _super);
    function CandlestickSeriesDirective(_elementRef) {
        _super.call(this);
        this._elementRef = _elementRef;
        this._nativeSeries = this._elementRef.nativeElement;
    }
    CandlestickSeriesDirective = __decorate([
        core_1.Directive({
            selector: "CandlestickSeries"
        }),
        __param(0, core_1.Inject(core_1.ElementRef))
    ], CandlestickSeriesDirective);
    return CandlestickSeriesDirective;
})(SeriesComponentBase);
exports.CandlestickSeriesDirective = CandlestickSeriesDirective;
var OhlcSeriesDirective = (function (_super) {
    __extends(OhlcSeriesDirective, _super);
    function OhlcSeriesDirective(_elementRef) {
        _super.call(this);
        this._elementRef = _elementRef;
        this._nativeSeries = this._elementRef.nativeElement;
    }
    OhlcSeriesDirective = __decorate([
        core_1.Directive({
            selector: "OhlcSeries"
        }),
        __param(0, core_1.Inject(core_1.ElementRef))
    ], OhlcSeriesDirective);
    return OhlcSeriesDirective;
})(SeriesComponentBase);
exports.OhlcSeriesDirective = OhlcSeriesDirective;
var RadCartesianChartGridDirective = (function () {
    function RadCartesianChartGridDirective() {
    }
    RadCartesianChartGridDirective = __decorate([
        core_1.Directive({
            selector: "RadCartesianChartGrid"
        })
    ], RadCartesianChartGridDirective);
    return RadCartesianChartGridDirective;
})();
exports.RadCartesianChartGridDirective = RadCartesianChartGridDirective;
var ChartGridLineAnnotationDirective = (function () {
    function ChartGridLineAnnotationDirective() {
    }
    ChartGridLineAnnotationDirective = __decorate([
        core_1.Directive({
            selector: "ChartGridLineAnnotation"
        })
    ], ChartGridLineAnnotationDirective);
    return ChartGridLineAnnotationDirective;
})();
exports.ChartGridLineAnnotationDirective = ChartGridLineAnnotationDirective;
var ChartPlotBandAnnotationDirective = (function () {
    function ChartPlotBandAnnotationDirective() {
    }
    ChartPlotBandAnnotationDirective = __decorate([
        core_1.Directive({
            selector: "ChartPlotBandAnnotation"
        })
    ], ChartPlotBandAnnotationDirective);
    return ChartPlotBandAnnotationDirective;
})();
exports.ChartPlotBandAnnotationDirective = ChartPlotBandAnnotationDirective;
var TrackballDirective = (function () {
    function TrackballDirective() {
    }
    TrackballDirective = __decorate([
        core_1.Directive({
            selector: "Trackball"
        })
    ], TrackballDirective);
    return TrackballDirective;
})();
exports.TrackballDirective = TrackballDirective;
var PointLabelStyleDirective = (function () {
    function PointLabelStyleDirective() {
    }
    PointLabelStyleDirective = __decorate([
        core_1.Directive({
            selector: "PointLabelStyle"
        })
    ], PointLabelStyleDirective);
    return PointLabelStyleDirective;
})();
exports.PointLabelStyleDirective = PointLabelStyleDirective;
var TKPieLabelStyleDirective = (function () {
    function TKPieLabelStyleDirective(owner, _elementRef) {
        this.owner = owner;
        this._elementRef = _elementRef;
    }
    TKPieLabelStyleDirective.prototype.ngOnInit = function () {
        var labelStyle = this._elementRef.nativeElement;
        var series = this.owner.nativeSeries;
        series.labelStyle = labelStyle;
    };
    TKPieLabelStyleDirective = __decorate([
        core_1.Directive({
            selector: "[tkPieLabelStyle]"
        }),
        __param(0, core_1.Inject(PieSeriesDirective)),
        __param(1, core_1.Inject(core_1.ElementRef))
    ], TKPieLabelStyleDirective);
    return TKPieLabelStyleDirective;
})();
exports.TKPieLabelStyleDirective = TKPieLabelStyleDirective;
var TKDonutLabelStyleDirective = (function () {
    function TKDonutLabelStyleDirective(owner, _elementRef) {
        this.owner = owner;
        this._elementRef = _elementRef;
    }
    TKDonutLabelStyleDirective.prototype.ngOnInit = function () {
        var labelStyle = this._elementRef.nativeElement;
        var series = this.owner.nativeSeries;
        series.labelStyle = labelStyle;
    };
    TKDonutLabelStyleDirective = __decorate([
        core_1.Directive({
            selector: "[tkDonutLabelStyle]"
        }),
        __param(0, core_1.Inject(DonutSeriesDirective)),
        __param(1, core_1.Inject(core_1.ElementRef))
    ], TKDonutLabelStyleDirective);
    return TKDonutLabelStyleDirective;
})();
exports.TKDonutLabelStyleDirective = TKDonutLabelStyleDirective;
var TKLineLabelStyleDirective = (function () {
    function TKLineLabelStyleDirective(owner, _elementRef) {
        this.owner = owner;
        this._elementRef = _elementRef;
    }
    TKLineLabelStyleDirective.prototype.ngOnInit = function () {
        var labelStyle = this._elementRef.nativeElement;
        var series = this.owner.nativeSeries;
        series.labelStyle = labelStyle;
    };
    TKLineLabelStyleDirective = __decorate([
        core_1.Directive({
            selector: "[tkLineLabelStyle]"
        }),
        __param(0, core_1.Inject(LineSeriesDirective)),
        __param(1, core_1.Inject(core_1.ElementRef))
    ], TKLineLabelStyleDirective);
    return TKLineLabelStyleDirective;
})();
exports.TKLineLabelStyleDirective = TKLineLabelStyleDirective;
var TKBarLabelStyleDirective = (function () {
    function TKBarLabelStyleDirective(owner, _elementRef) {
        this.owner = owner;
        this._elementRef = _elementRef;
    }
    TKBarLabelStyleDirective.prototype.ngOnInit = function () {
        var labelStyle = this._elementRef.nativeElement;
        var series = this.owner.nativeSeries;
        series.labelStyle = labelStyle;
    };
    TKBarLabelStyleDirective = __decorate([
        core_1.Directive({
            selector: "[tkBarLabelStyle]"
        }),
        __param(0, core_1.Inject(BarSeriesDirective)),
        __param(1, core_1.Inject(core_1.ElementRef))
    ], TKBarLabelStyleDirective);
    return TKBarLabelStyleDirective;
})();
exports.TKBarLabelStyleDirective = TKBarLabelStyleDirective;
var TKRangeBarLabelStyleDirective = (function () {
    function TKRangeBarLabelStyleDirective(owner, _elementRef) {
        this.owner = owner;
        this._elementRef = _elementRef;
    }
    TKRangeBarLabelStyleDirective.prototype.ngOnInit = function () {
        var labelStyle = this._elementRef.nativeElement;
        var series = this.owner.nativeSeries;
        series.labelStyle = labelStyle;
    };
    TKRangeBarLabelStyleDirective = __decorate([
        core_1.Directive({
            selector: "[tkRangeBarLabelStyle]"
        }),
        __param(0, core_1.Inject(RangeBarSeriesDirective)),
        __param(1, core_1.Inject(core_1.ElementRef))
    ], TKRangeBarLabelStyleDirective);
    return TKRangeBarLabelStyleDirective;
})();
exports.TKRangeBarLabelStyleDirective = TKRangeBarLabelStyleDirective;
var TKAreaLabelStyleDirective = (function () {
    function TKAreaLabelStyleDirective(owner, _elementRef) {
        this.owner = owner;
        this._elementRef = _elementRef;
    }
    TKAreaLabelStyleDirective.prototype.ngOnInit = function () {
        var labelStyle = this._elementRef.nativeElement;
        var series = this.owner.nativeSeries;
        series.labelStyle = labelStyle;
    };
    TKAreaLabelStyleDirective = __decorate([
        core_1.Directive({
            selector: "[tkAreaLabelStyle]"
        }),
        __param(0, core_1.Inject(AreaSeriesDirective)),
        __param(1, core_1.Inject(core_1.ElementRef))
    ], TKAreaLabelStyleDirective);
    return TKAreaLabelStyleDirective;
})();
exports.TKAreaLabelStyleDirective = TKAreaLabelStyleDirective;
var TKSplineLabelStyleDirective = (function () {
    function TKSplineLabelStyleDirective(owner, _elementRef) {
        this.owner = owner;
        this._elementRef = _elementRef;
    }
    TKSplineLabelStyleDirective.prototype.ngOnInit = function () {
        var labelStyle = this._elementRef.nativeElement;
        var series = this.owner.nativeSeries;
        series.labelStyle = labelStyle;
    };
    TKSplineLabelStyleDirective = __decorate([
        core_1.Directive({
            selector: "[tkSplineLabelStyle]",
        }),
        __param(0, core_1.Inject(SplineSeriesDirective)),
        __param(1, core_1.Inject(core_1.ElementRef))
    ], TKSplineLabelStyleDirective);
    return TKSplineLabelStyleDirective;
})();
exports.TKSplineLabelStyleDirective = TKSplineLabelStyleDirective;
var TKSplineAreaLabelStyleDirective = (function () {
    function TKSplineAreaLabelStyleDirective(owner, _elementRef) {
        this.owner = owner;
        this._elementRef = _elementRef;
    }
    TKSplineAreaLabelStyleDirective.prototype.ngOnInit = function () {
        var labelStyle = this._elementRef.nativeElement;
        var series = this.owner.nativeSeries;
        series.labelStyle = labelStyle;
    };
    TKSplineAreaLabelStyleDirective = __decorate([
        core_1.Directive({
            selector: "[tkSplineAreaLabelStyle]",
        }),
        __param(0, core_1.Inject(SplineAreaSeriesDirective)),
        __param(1, core_1.Inject(core_1.ElementRef))
    ], TKSplineAreaLabelStyleDirective);
    return TKSplineAreaLabelStyleDirective;
})();
exports.TKSplineAreaLabelStyleDirective = TKSplineAreaLabelStyleDirective;
var TKBubbleLabelStyleDirective = (function () {
    function TKBubbleLabelStyleDirective(owner, _elementRef) {
        this.owner = owner;
        this._elementRef = _elementRef;
    }
    TKBubbleLabelStyleDirective.prototype.ngOnInit = function () {
        var labelStyle = this._elementRef.nativeElement;
        var series = this.owner.nativeSeries;
        series.labelStyle = labelStyle;
    };
    TKBubbleLabelStyleDirective = __decorate([
        core_1.Directive({
            selector: "[tkBubbleLabelStyle]"
        }),
        __param(0, core_1.Inject(BubbleSeriesDirective)),
        __param(1, core_1.Inject(core_1.ElementRef))
    ], TKBubbleLabelStyleDirective);
    return TKBubbleLabelStyleDirective;
})();
exports.TKBubbleLabelStyleDirective = TKBubbleLabelStyleDirective;
var TKScatterBubbleLabelStyleDirective = (function () {
    function TKScatterBubbleLabelStyleDirective(owner, _elementRef) {
        this.owner = owner;
        this._elementRef = _elementRef;
    }
    TKScatterBubbleLabelStyleDirective.prototype.ngOnInit = function () {
        var labelStyle = this._elementRef.nativeElement;
        var series = this.owner.nativeSeries;
        series.labelStyle = labelStyle;
    };
    TKScatterBubbleLabelStyleDirective = __decorate([
        core_1.Directive({
            selector: "[tkScatterBubbleLabelStyle]"
        }),
        __param(0, core_1.Inject(ScatterBubbleSeriesDirective)),
        __param(1, core_1.Inject(core_1.ElementRef))
    ], TKScatterBubbleLabelStyleDirective);
    return TKScatterBubbleLabelStyleDirective;
})();
exports.TKScatterBubbleLabelStyleDirective = TKScatterBubbleLabelStyleDirective;
var TKCandlestickLabelStyleDirective = (function () {
    function TKCandlestickLabelStyleDirective(owner, _elementRef) {
        this.owner = owner;
        this._elementRef = _elementRef;
    }
    TKCandlestickLabelStyleDirective.prototype.ngOnInit = function () {
        var labelStyle = this._elementRef.nativeElement;
        var series = this.owner.nativeSeries;
        series.labelStyle = labelStyle;
    };
    TKCandlestickLabelStyleDirective = __decorate([
        core_1.Directive({
            selector: "[tkCandlestickLabelStyle]"
        }),
        __param(0, core_1.Inject(CandlestickSeriesDirective)),
        __param(1, core_1.Inject(core_1.ElementRef))
    ], TKCandlestickLabelStyleDirective);
    return TKCandlestickLabelStyleDirective;
})();
exports.TKCandlestickLabelStyleDirective = TKCandlestickLabelStyleDirective;
var TKOhlcStyleDirective = (function () {
    function TKOhlcStyleDirective(owner, _elementRef) {
        this.owner = owner;
        this._elementRef = _elementRef;
    }
    TKOhlcStyleDirective.prototype.ngOnInit = function () {
        var labelStyle = this._elementRef.nativeElement;
        var series = this.owner.nativeSeries;
        series.labelStyle = labelStyle;
    };
    TKOhlcStyleDirective = __decorate([
        core_1.Directive({
            selector: "[tkOhlcLabelStyle]"
        }),
        __param(0, core_1.Inject(OhlcSeriesDirective)),
        __param(1, core_1.Inject(core_1.ElementRef))
    ], TKOhlcStyleDirective);
    return TKOhlcStyleDirective;
})();
exports.TKOhlcStyleDirective = TKOhlcStyleDirective;
var TKScatterStyleDirective = (function () {
    function TKScatterStyleDirective(owner, _elementRef) {
        this.owner = owner;
        this._elementRef = _elementRef;
    }
    TKScatterStyleDirective.prototype.ngOnInit = function () {
        var labelStyle = this._elementRef.nativeElement;
        var series = this.owner.nativeSeries;
        series.labelStyle = labelStyle;
    };
    TKScatterStyleDirective = __decorate([
        core_1.Directive({
            selector: "[tkScatterLabelStyle]"
        }),
        __param(0, core_1.Inject(ScatterSeriesDirective)),
        __param(1, core_1.Inject(core_1.ElementRef))
    ], TKScatterStyleDirective);
    return TKScatterStyleDirective;
})();
exports.TKScatterStyleDirective = TKScatterStyleDirective;
var TKCartesianGridDirective = (function () {
    function TKCartesianGridDirective(owner, _elementRef) {
        this.owner = owner;
        this._elementRef = _elementRef;
    }
    TKCartesianGridDirective.prototype.ngOnInit = function () {
        var grid = this._elementRef.nativeElement;
        var cartesianChart = this.owner.cartesianChart;
        cartesianChart.grid = grid;
    };
    TKCartesianGridDirective = __decorate([
        core_1.Directive({
            selector: "[tkCartesianGrid]"
        }),
        __param(0, core_1.Inject(RadCartesianChartComponent)),
        __param(1, core_1.Inject(core_1.ElementRef))
    ], TKCartesianGridDirective);
    return TKCartesianGridDirective;
})();
exports.TKCartesianGridDirective = TKCartesianGridDirective;
var TKCartesianSeriesDirective = (function () {
    function TKCartesianSeriesDirective(owner, _elementRef) {
        this.owner = owner;
        this._elementRef = _elementRef;
    }
    TKCartesianSeriesDirective.prototype.ngOnInit = function () {
        var series = this._elementRef.nativeElement;
        if (this.owner.cartesianChart.series) {
            this.owner.cartesianChart.series.push(series);
        }
        else {
            this.owner.cartesianChart.series = new observable_array_1.ObservableArray([series]);
        }
    };
    TKCartesianSeriesDirective = __decorate([
        core_1.Directive({
            selector: "[tkCartesianSeries]"
        }),
        __param(0, core_1.Inject(RadCartesianChartComponent)),
        __param(1, core_1.Inject(core_1.ElementRef))
    ], TKCartesianSeriesDirective);
    return TKCartesianSeriesDirective;
})();
exports.TKCartesianSeriesDirective = TKCartesianSeriesDirective;
var TKPieChartSeriesDirective = (function () {
    function TKPieChartSeriesDirective(owner, _elementRef) {
        this.owner = owner;
        this._elementRef = _elementRef;
    }
    TKPieChartSeriesDirective.prototype.ngOnInit = function () {
        var series = this._elementRef.nativeElement;
        if (this.owner.pieChart.series) {
            this.owner.pieChart.series.push(series);
        }
        else {
            this.owner.pieChart.series = new observable_array_1.ObservableArray([series]);
        }
    };
    TKPieChartSeriesDirective = __decorate([
        core_1.Directive({
            selector: "[tkPieSeries]"
        }),
        __param(0, core_1.Inject(RadPieChartComponent)),
        __param(1, core_1.Inject(core_1.ElementRef))
    ], TKPieChartSeriesDirective);
    return TKPieChartSeriesDirective;
})();
exports.TKPieChartSeriesDirective = TKPieChartSeriesDirective;
var TKCartesianPaletteDirective = (function () {
    function TKCartesianPaletteDirective(owner, _elementRef) {
        this.owner = owner;
        this._elementRef = _elementRef;
    }
    TKCartesianPaletteDirective.prototype.ngOnInit = function () {
        this._nativePalette = this._elementRef.nativeElement;
        if (this.owner.cartesianChart.palettes) {
            this.owner.cartesianChart.palettes.push(this._nativePalette);
        }
        else {
            this.owner.cartesianChart.palettes = new observable_array_1.ObservableArray([this._nativePalette]);
        }
    };
    Object.defineProperty(TKCartesianPaletteDirective.prototype, "nativePalette", {
        get: function () {
            return this._nativePalette;
        },
        enumerable: true,
        configurable: true
    });
    TKCartesianPaletteDirective = __decorate([
        core_1.Directive({
            selector: "[tkCartesianPalette]"
        }),
        __param(0, core_1.Inject(RadCartesianChartComponent)),
        __param(1, core_1.Inject(core_1.ElementRef))
    ], TKCartesianPaletteDirective);
    return TKCartesianPaletteDirective;
})();
exports.TKCartesianPaletteDirective = TKCartesianPaletteDirective;
var TKCartesianPaletteEntryDirective = (function () {
    function TKCartesianPaletteEntryDirective(owner, _elementRef) {
        this.owner = owner;
        this._elementRef = _elementRef;
    }
    TKCartesianPaletteEntryDirective.prototype.ngOnInit = function () {
        var entry = this._elementRef.nativeElement;
        if (this.owner.nativePalette.entries) {
            this.owner.nativePalette.entries.push(entry);
            this.owner.nativePalette.updateOwner();
        }
        else {
            this.owner.nativePalette.entries = new observable_array_1.ObservableArray([entry]);
        }
    };
    TKCartesianPaletteEntryDirective = __decorate([
        core_1.Directive({
            selector: "[tkCartesianPaletteEntry]"
        }),
        __param(0, core_1.Inject(TKCartesianPaletteDirective)),
        __param(1, core_1.Inject(core_1.ElementRef))
    ], TKCartesianPaletteEntryDirective);
    return TKCartesianPaletteEntryDirective;
})();
exports.TKCartesianPaletteEntryDirective = TKCartesianPaletteEntryDirective;
var TKCartesianHorizontalAxisDirective = (function () {
    function TKCartesianHorizontalAxisDirective(owner, _elementRef) {
        this.owner = owner;
        this._elementRef = _elementRef;
    }
    TKCartesianHorizontalAxisDirective.prototype.ngOnInit = function () {
        var axis = this._elementRef.nativeElement;
        var cartesianChart = this.owner.cartesianChart;
        cartesianChart.horizontalAxis = axis;
    };
    TKCartesianHorizontalAxisDirective = __decorate([
        core_1.Directive({
            selector: "[tkCartesianHorizontalAxis]"
        }),
        __param(0, core_1.Inject(RadCartesianChartComponent)),
        __param(1, core_1.Inject(core_1.ElementRef))
    ], TKCartesianHorizontalAxisDirective);
    return TKCartesianHorizontalAxisDirective;
})();
exports.TKCartesianHorizontalAxisDirective = TKCartesianHorizontalAxisDirective;
var TKCartesianVerticalAxisDirective = (function () {
    function TKCartesianVerticalAxisDirective(owner, _elementRef) {
        this.owner = owner;
        this._elementRef = _elementRef;
    }
    TKCartesianVerticalAxisDirective.prototype.ngOnInit = function () {
        var axis = this._elementRef.nativeElement;
        var cartesianChart = this.owner.cartesianChart;
        cartesianChart.verticalAxis = axis;
    };
    TKCartesianVerticalAxisDirective = __decorate([
        core_1.Directive({
            selector: "[tkCartesianVerticalAxis]"
        }),
        __param(0, core_1.Inject(RadCartesianChartComponent)),
        __param(1, core_1.Inject(core_1.ElementRef))
    ], TKCartesianVerticalAxisDirective);
    return TKCartesianVerticalAxisDirective;
})();
exports.TKCartesianVerticalAxisDirective = TKCartesianVerticalAxisDirective;
var TKLineVerticalAxisDirective = (function () {
    function TKLineVerticalAxisDirective(owner, _elementRef) {
        this.owner = owner;
        this._elementRef = _elementRef;
    }
    TKLineVerticalAxisDirective.prototype.ngOnInit = function () {
        var verticalAxis = this._elementRef.nativeElement;
        var series = this.owner.nativeSeries;
        series.verticalAxis = verticalAxis;
    };
    TKLineVerticalAxisDirective = __decorate([
        core_1.Directive({
            selector: "[tkLineVerticalAxis]"
        }),
        __param(0, core_1.Inject(LineSeriesDirective)),
        __param(1, core_1.Inject(core_1.ElementRef))
    ], TKLineVerticalAxisDirective);
    return TKLineVerticalAxisDirective;
})();
exports.TKLineVerticalAxisDirective = TKLineVerticalAxisDirective;
var TKLineHorizontalAxisDirective = (function () {
    function TKLineHorizontalAxisDirective(owner, _elementRef) {
        this.owner = owner;
        this._elementRef = _elementRef;
    }
    TKLineHorizontalAxisDirective.prototype.ngOnInit = function () {
        var horizontalAxis = this._elementRef.nativeElement;
        var series = this.owner.nativeSeries;
        series.horizontalAxis = horizontalAxis;
    };
    TKLineHorizontalAxisDirective = __decorate([
        core_1.Directive({
            selector: "[tkLineHorizontalAxis]"
        }),
        __param(0, core_1.Inject(LineSeriesDirective)),
        __param(1, core_1.Inject(core_1.ElementRef))
    ], TKLineHorizontalAxisDirective);
    return TKLineHorizontalAxisDirective;
})();
exports.TKLineHorizontalAxisDirective = TKLineHorizontalAxisDirective;
var TKBarVerticalAxisDirective = (function () {
    function TKBarVerticalAxisDirective(owner, _elementRef) {
        this.owner = owner;
        this._elementRef = _elementRef;
    }
    TKBarVerticalAxisDirective.prototype.ngOnInit = function () {
        var verticalAxis = this._elementRef.nativeElement;
        var series = this.owner.nativeSeries;
        series.verticalAxis = verticalAxis;
    };
    TKBarVerticalAxisDirective = __decorate([
        core_1.Directive({
            selector: "[tkBarVerticalAxis]"
        }),
        __param(0, core_1.Inject(BarSeriesDirective)),
        __param(1, core_1.Inject(core_1.ElementRef))
    ], TKBarVerticalAxisDirective);
    return TKBarVerticalAxisDirective;
})();
exports.TKBarVerticalAxisDirective = TKBarVerticalAxisDirective;
var TKBarHorizontalAxisDirective = (function () {
    function TKBarHorizontalAxisDirective(owner, _elementRef) {
        this.owner = owner;
        this._elementRef = _elementRef;
    }
    TKBarHorizontalAxisDirective.prototype.ngOnInit = function () {
        var horizontalAxis = this._elementRef.nativeElement;
        var series = this.owner.nativeSeries;
        series.horizontalAxis = horizontalAxis;
    };
    TKBarHorizontalAxisDirective = __decorate([
        core_1.Directive({
            selector: "[tkBarHorizontalAxis]"
        }),
        __param(0, core_1.Inject(BarSeriesDirective)),
        __param(1, core_1.Inject(core_1.ElementRef))
    ], TKBarHorizontalAxisDirective);
    return TKBarHorizontalAxisDirective;
})();
exports.TKBarHorizontalAxisDirective = TKBarHorizontalAxisDirective;
var TKRangeBarVerticalAxisDirective = (function () {
    function TKRangeBarVerticalAxisDirective(owner, _elementRef) {
        this.owner = owner;
        this._elementRef = _elementRef;
    }
    TKRangeBarVerticalAxisDirective.prototype.ngOnInit = function () {
        var verticalAxis = this._elementRef.nativeElement;
        var series = this.owner.nativeSeries;
        series.verticalAxis = verticalAxis;
    };
    TKRangeBarVerticalAxisDirective = __decorate([
        core_1.Directive({
            selector: "[tkRangeBarVerticalAxis]"
        }),
        __param(0, core_1.Inject(RangeBarSeriesDirective)),
        __param(1, core_1.Inject(core_1.ElementRef))
    ], TKRangeBarVerticalAxisDirective);
    return TKRangeBarVerticalAxisDirective;
})();
exports.TKRangeBarVerticalAxisDirective = TKRangeBarVerticalAxisDirective;
var TKRangeBarHorizontalAxisDirective = (function () {
    function TKRangeBarHorizontalAxisDirective(owner, _elementRef) {
        this.owner = owner;
        this._elementRef = _elementRef;
    }
    TKRangeBarHorizontalAxisDirective.prototype.ngOnInit = function () {
        var horizontalAxis = this._elementRef.nativeElement;
        var series = this.owner.nativeSeries;
        series.horizontalAxis = horizontalAxis;
    };
    TKRangeBarHorizontalAxisDirective = __decorate([
        core_1.Directive({
            selector: "[tkRangeBarHorizontalAxis]"
        }),
        __param(0, core_1.Inject(RangeBarSeriesDirective)),
        __param(1, core_1.Inject(core_1.ElementRef))
    ], TKRangeBarHorizontalAxisDirective);
    return TKRangeBarHorizontalAxisDirective;
})();
exports.TKRangeBarHorizontalAxisDirective = TKRangeBarHorizontalAxisDirective;
var TKAreaVerticalAxisDirective = (function () {
    function TKAreaVerticalAxisDirective(owner, _elementRef) {
        this.owner = owner;
        this._elementRef = _elementRef;
    }
    TKAreaVerticalAxisDirective.prototype.ngOnInit = function () {
        var verticalAxis = this._elementRef.nativeElement;
        var series = this.owner.nativeSeries;
        series.verticalAxis = verticalAxis;
    };
    TKAreaVerticalAxisDirective = __decorate([
        core_1.Directive({
            selector: "[tkAreaVerticalAxis]"
        }),
        __param(0, core_1.Inject(AreaSeriesDirective)),
        __param(1, core_1.Inject(core_1.ElementRef))
    ], TKAreaVerticalAxisDirective);
    return TKAreaVerticalAxisDirective;
})();
exports.TKAreaVerticalAxisDirective = TKAreaVerticalAxisDirective;
var TKAreaHorizontalAxisDirective = (function () {
    function TKAreaHorizontalAxisDirective(owner, _elementRef) {
        this.owner = owner;
        this._elementRef = _elementRef;
    }
    TKAreaHorizontalAxisDirective.prototype.ngOnInit = function () {
        var horizontalAxis = this._elementRef.nativeElement;
        var series = this.owner.nativeSeries;
        series.horizontalAxis = horizontalAxis;
    };
    TKAreaHorizontalAxisDirective = __decorate([
        core_1.Directive({
            selector: "[tkAreaHorizontalAxis]"
        }),
        __param(0, core_1.Inject(AreaSeriesDirective)),
        __param(1, core_1.Inject(core_1.ElementRef))
    ], TKAreaHorizontalAxisDirective);
    return TKAreaHorizontalAxisDirective;
})();
exports.TKAreaHorizontalAxisDirective = TKAreaHorizontalAxisDirective;
var TKSplineVerticalAxisDirective = (function () {
    function TKSplineVerticalAxisDirective(owner, _elementRef) {
        this.owner = owner;
        this._elementRef = _elementRef;
    }
    TKSplineVerticalAxisDirective.prototype.ngOnInit = function () {
        var verticalAxis = this._elementRef.nativeElement;
        var series = this.owner.nativeSeries;
        series.verticalAxis = verticalAxis;
    };
    TKSplineVerticalAxisDirective = __decorate([
        core_1.Directive({
            selector: "[tkSplineVerticalAxis]"
        }),
        __param(0, core_1.Inject(SplineSeriesDirective)),
        __param(1, core_1.Inject(core_1.ElementRef))
    ], TKSplineVerticalAxisDirective);
    return TKSplineVerticalAxisDirective;
})();
exports.TKSplineVerticalAxisDirective = TKSplineVerticalAxisDirective;
var TKSplineHorizontalAxisDirective = (function () {
    function TKSplineHorizontalAxisDirective(owner, _elementRef) {
        this.owner = owner;
        this._elementRef = _elementRef;
    }
    TKSplineHorizontalAxisDirective.prototype.ngOnInit = function () {
        var horizontalAxis = this._elementRef.nativeElement;
        var series = this.owner.nativeSeries;
        series.horizontalAxis = horizontalAxis;
    };
    TKSplineHorizontalAxisDirective = __decorate([
        core_1.Directive({
            selector: "[tkSplineHorizontalAxis]"
        }),
        __param(0, core_1.Inject(SplineSeriesDirective)),
        __param(1, core_1.Inject(core_1.ElementRef))
    ], TKSplineHorizontalAxisDirective);
    return TKSplineHorizontalAxisDirective;
})();
exports.TKSplineHorizontalAxisDirective = TKSplineHorizontalAxisDirective;
var TKSplineAreaVerticalAxisDirective = (function () {
    function TKSplineAreaVerticalAxisDirective(owner, _elementRef) {
        this.owner = owner;
        this._elementRef = _elementRef;
    }
    TKSplineAreaVerticalAxisDirective.prototype.ngOnInit = function () {
        var verticalAxis = this._elementRef.nativeElement;
        var series = this.owner.nativeSeries;
        series.verticalAxis = verticalAxis;
    };
    TKSplineAreaVerticalAxisDirective = __decorate([
        core_1.Directive({
            selector: "[tkSplineAreaVerticalAxis]"
        }),
        __param(0, core_1.Inject(SplineAreaSeriesDirective)),
        __param(1, core_1.Inject(core_1.ElementRef))
    ], TKSplineAreaVerticalAxisDirective);
    return TKSplineAreaVerticalAxisDirective;
})();
exports.TKSplineAreaVerticalAxisDirective = TKSplineAreaVerticalAxisDirective;
var TKSplineAreaHorizontalAxisDirective = (function () {
    function TKSplineAreaHorizontalAxisDirective(owner, _elementRef) {
        this.owner = owner;
        this._elementRef = _elementRef;
    }
    TKSplineAreaHorizontalAxisDirective.prototype.ngOnInit = function () {
        var horizontalAxis = this._elementRef.nativeElement;
        var series = this.owner.nativeSeries;
        series.horizontalAxis = horizontalAxis;
    };
    TKSplineAreaHorizontalAxisDirective = __decorate([
        core_1.Directive({
            selector: "[tkSplineAreaHorizontalAxis]"
        }),
        __param(0, core_1.Inject(SplineAreaSeriesDirective)),
        __param(1, core_1.Inject(core_1.ElementRef))
    ], TKSplineAreaHorizontalAxisDirective);
    return TKSplineAreaHorizontalAxisDirective;
})();
exports.TKSplineAreaHorizontalAxisDirective = TKSplineAreaHorizontalAxisDirective;
var TKBubbleVerticalAxisDirective = (function () {
    function TKBubbleVerticalAxisDirective(owner, _elementRef) {
        this.owner = owner;
        this._elementRef = _elementRef;
    }
    TKBubbleVerticalAxisDirective.prototype.ngOnInit = function () {
        var verticalAxis = this._elementRef.nativeElement;
        var series = this.owner.nativeSeries;
        series.verticalAxis = verticalAxis;
    };
    TKBubbleVerticalAxisDirective = __decorate([
        core_1.Directive({
            selector: "[tkBubbleVerticalAxis]"
        }),
        __param(0, core_1.Inject(BubbleSeriesDirective)),
        __param(1, core_1.Inject(core_1.ElementRef))
    ], TKBubbleVerticalAxisDirective);
    return TKBubbleVerticalAxisDirective;
})();
exports.TKBubbleVerticalAxisDirective = TKBubbleVerticalAxisDirective;
var TKBubbleHorizontalAxisDirective = (function () {
    function TKBubbleHorizontalAxisDirective(owner, _elementRef) {
        this.owner = owner;
        this._elementRef = _elementRef;
    }
    TKBubbleHorizontalAxisDirective.prototype.ngOnInit = function () {
        var horizontalAxis = this._elementRef.nativeElement;
        var series = this.owner.nativeSeries;
        series.horizontalAxis = horizontalAxis;
    };
    TKBubbleHorizontalAxisDirective = __decorate([
        core_1.Directive({
            selector: "[tkBubbleHorizontalAxis]"
        }),
        __param(0, core_1.Inject(BubbleSeriesDirective)),
        __param(1, core_1.Inject(core_1.ElementRef))
    ], TKBubbleHorizontalAxisDirective);
    return TKBubbleHorizontalAxisDirective;
})();
exports.TKBubbleHorizontalAxisDirective = TKBubbleHorizontalAxisDirective;
var TKScatterBubbleVerticalAxisDirective = (function () {
    function TKScatterBubbleVerticalAxisDirective(owner, _elementRef) {
        this.owner = owner;
        this._elementRef = _elementRef;
    }
    TKScatterBubbleVerticalAxisDirective.prototype.ngOnInit = function () {
        var verticalAxis = this._elementRef.nativeElement;
        var series = this.owner.nativeSeries;
        series.verticalAxis = verticalAxis;
    };
    TKScatterBubbleVerticalAxisDirective = __decorate([
        core_1.Directive({
            selector: "[tkScatterBubbleVerticalAxis]"
        }),
        __param(0, core_1.Inject(ScatterBubbleSeriesDirective)),
        __param(1, core_1.Inject(core_1.ElementRef))
    ], TKScatterBubbleVerticalAxisDirective);
    return TKScatterBubbleVerticalAxisDirective;
})();
exports.TKScatterBubbleVerticalAxisDirective = TKScatterBubbleVerticalAxisDirective;
var TKScatterBubbleHorizontalAxisDirective = (function () {
    function TKScatterBubbleHorizontalAxisDirective(owner, _elementRef) {
        this.owner = owner;
        this._elementRef = _elementRef;
    }
    TKScatterBubbleHorizontalAxisDirective.prototype.ngOnInit = function () {
        var horizontalAxis = this._elementRef.nativeElement;
        console.log(">>>>> tkScatterBubbleHorizontalAxis " + horizontalAxis);
        var series = this.owner.nativeSeries;
        series.horizontalAxis = horizontalAxis;
    };
    TKScatterBubbleHorizontalAxisDirective = __decorate([
        core_1.Directive({
            selector: "[tkScatterBubbleHorizontalAxis]"
        }),
        __param(0, core_1.Inject(ScatterBubbleSeriesDirective)),
        __param(1, core_1.Inject(core_1.ElementRef))
    ], TKScatterBubbleHorizontalAxisDirective);
    return TKScatterBubbleHorizontalAxisDirective;
})();
exports.TKScatterBubbleHorizontalAxisDirective = TKScatterBubbleHorizontalAxisDirective;
var TKCandlestickVerticalAxisDirective = (function () {
    function TKCandlestickVerticalAxisDirective(owner, _elementRef) {
        this.owner = owner;
        this._elementRef = _elementRef;
    }
    TKCandlestickVerticalAxisDirective.prototype.ngOnInit = function () {
        var verticalAxis = this._elementRef.nativeElement;
        var series = this.owner.nativeSeries;
        series.verticalAxis = verticalAxis;
    };
    TKCandlestickVerticalAxisDirective = __decorate([
        core_1.Directive({
            selector: "[tkCandlestickVerticalAxis]"
        }),
        __param(0, core_1.Inject(CandlestickSeriesDirective)),
        __param(1, core_1.Inject(core_1.ElementRef))
    ], TKCandlestickVerticalAxisDirective);
    return TKCandlestickVerticalAxisDirective;
})();
exports.TKCandlestickVerticalAxisDirective = TKCandlestickVerticalAxisDirective;
var TKCandlestickHorizontalAxisDirective = (function () {
    function TKCandlestickHorizontalAxisDirective(owner, _elementRef) {
        this.owner = owner;
        this._elementRef = _elementRef;
    }
    TKCandlestickHorizontalAxisDirective.prototype.ngOnInit = function () {
        var horizontalAxis = this._elementRef.nativeElement;
        var series = this.owner.nativeSeries;
        series.horizontalAxis = horizontalAxis;
    };
    TKCandlestickHorizontalAxisDirective = __decorate([
        core_1.Directive({
            selector: "[tkCandlestickHorizontalAxis]"
        }),
        __param(0, core_1.Inject(CandlestickSeriesDirective)),
        __param(1, core_1.Inject(core_1.ElementRef))
    ], TKCandlestickHorizontalAxisDirective);
    return TKCandlestickHorizontalAxisDirective;
})();
exports.TKCandlestickHorizontalAxisDirective = TKCandlestickHorizontalAxisDirective;
var TKOhlcVerticalAxisDirective = (function () {
    function TKOhlcVerticalAxisDirective(owner, _elementRef) {
        this.owner = owner;
        this._elementRef = _elementRef;
    }
    TKOhlcVerticalAxisDirective.prototype.ngOnInit = function () {
        var verticalAxis = this._elementRef.nativeElement;
        var series = this.owner.nativeSeries;
        series.verticalAxis = verticalAxis;
    };
    TKOhlcVerticalAxisDirective = __decorate([
        core_1.Directive({
            selector: "[tkOhlcVerticalAxis]"
        }),
        __param(0, core_1.Inject(OhlcSeriesDirective)),
        __param(1, core_1.Inject(core_1.ElementRef))
    ], TKOhlcVerticalAxisDirective);
    return TKOhlcVerticalAxisDirective;
})();
exports.TKOhlcVerticalAxisDirective = TKOhlcVerticalAxisDirective;
var TKOhlcHorizontalAxisDirective = (function () {
    function TKOhlcHorizontalAxisDirective(owner, _elementRef) {
        this.owner = owner;
        this._elementRef = _elementRef;
    }
    TKOhlcHorizontalAxisDirective.prototype.ngOnInit = function () {
        var horizontalAxis = this._elementRef.nativeElement;
        var series = this.owner.nativeSeries;
        series.horizontalAxis = horizontalAxis;
    };
    TKOhlcHorizontalAxisDirective = __decorate([
        core_1.Directive({
            selector: "[tkOhlcHorizontalAxis]"
        }),
        __param(0, core_1.Inject(OhlcSeriesDirective)),
        __param(1, core_1.Inject(core_1.ElementRef))
    ], TKOhlcHorizontalAxisDirective);
    return TKOhlcHorizontalAxisDirective;
})();
exports.TKOhlcHorizontalAxisDirective = TKOhlcHorizontalAxisDirective;
var TKScatterVerticalAxisDirective = (function () {
    function TKScatterVerticalAxisDirective(owner, _elementRef) {
        this.owner = owner;
        this._elementRef = _elementRef;
    }
    TKScatterVerticalAxisDirective.prototype.ngOnInit = function () {
        var verticalAxis = this._elementRef.nativeElement;
        var series = this.owner.nativeSeries;
        series.verticalAxis = verticalAxis;
    };
    TKScatterVerticalAxisDirective = __decorate([
        core_1.Directive({
            selector: "[tkScatterVerticalAxis]"
        }),
        __param(0, core_1.Inject(ScatterSeriesDirective)),
        __param(1, core_1.Inject(core_1.ElementRef))
    ], TKScatterVerticalAxisDirective);
    return TKScatterVerticalAxisDirective;
})();
exports.TKScatterVerticalAxisDirective = TKScatterVerticalAxisDirective;
var TKScatterHorizontalAxisDirective = (function () {
    function TKScatterHorizontalAxisDirective(owner, _elementRef) {
        this.owner = owner;
        this._elementRef = _elementRef;
    }
    TKScatterHorizontalAxisDirective.prototype.ngOnInit = function () {
        var horizontalAxis = this._elementRef.nativeElement;
        var series = this.owner.nativeSeries;
        series.horizontalAxis = horizontalAxis;
    };
    TKScatterHorizontalAxisDirective = __decorate([
        core_1.Directive({
            selector: "[tkScatterHorizontalAxis]"
        }),
        __param(0, core_1.Inject(ScatterSeriesDirective)),
        __param(1, core_1.Inject(core_1.ElementRef))
    ], TKScatterHorizontalAxisDirective);
    return TKScatterHorizontalAxisDirective;
})();
exports.TKScatterHorizontalAxisDirective = TKScatterHorizontalAxisDirective;
var TKPieLegendDirective = (function () {
    function TKPieLegendDirective(owner, _elementRef) {
        this.owner = owner;
        this._elementRef = _elementRef;
    }
    TKPieLegendDirective.prototype.ngOnInit = function () {
        var legend = this._elementRef.nativeElement;
        var pieChart = this.owner.pieChart;
        pieChart.legend = legend;
    };
    TKPieLegendDirective = __decorate([
        core_1.Directive({
            selector: "[tkPieLegend]",
        }),
        __param(0, core_1.Inject(RadPieChartComponent)),
        __param(1, core_1.Inject(core_1.ElementRef))
    ], TKPieLegendDirective);
    return TKPieLegendDirective;
})();
exports.TKPieLegendDirective = TKPieLegendDirective;
var TKCartesianLegendDirective = (function () {
    function TKCartesianLegendDirective(owner, _elementRef) {
        this.owner = owner;
        this._elementRef = _elementRef;
    }
    TKCartesianLegendDirective.prototype.ngOnInit = function () {
        var legend = this._elementRef.nativeElement;
        var cartesianChart = this.owner.cartesianChart;
        cartesianChart.legend = legend;
    };
    TKCartesianLegendDirective = __decorate([
        core_1.Directive({
            selector: "[tkCartesianLegend]",
        }),
        __param(0, core_1.Inject(RadCartesianChartComponent)),
        __param(1, core_1.Inject(core_1.ElementRef))
    ], TKCartesianLegendDirective);
    return TKCartesianLegendDirective;
})();
exports.TKCartesianLegendDirective = TKCartesianLegendDirective;
var TKCartesianTrackballDirective = (function () {
    function TKCartesianTrackballDirective(owner, _elementRef) {
        this.owner = owner;
        this._elementRef = _elementRef;
    }
    TKCartesianTrackballDirective.prototype.ngOnInit = function () {
        var trackball = this._elementRef.nativeElement;
        var cartesianChart = this.owner.cartesianChart;
        cartesianChart.trackball = trackball;
    };
    TKCartesianTrackballDirective = __decorate([
        core_1.Directive({
            selector: "[tkCartesianTrackball]"
        }),
        __param(0, core_1.Inject(RadCartesianChartComponent)),
        __param(1, core_1.Inject(core_1.ElementRef))
    ], TKCartesianTrackballDirective);
    return TKCartesianTrackballDirective;
})();
exports.TKCartesianTrackballDirective = TKCartesianTrackballDirective;
var TKCartesianAnnotationsDirective = (function () {
    function TKCartesianAnnotationsDirective(owner, _elementRef) {
        this.owner = owner;
        this._elementRef = _elementRef;
    }
    TKCartesianAnnotationsDirective.prototype.ngOnInit = function () {
        var annotation = this._elementRef.nativeElement;
        if (this.owner.cartesianChart.annotations) {
            this.owner.cartesianChart.annotations.push(annotation);
        }
        else {
            this.owner.cartesianChart.annotations = new observable_array_1.ObservableArray([annotation]);
        }
    };
    TKCartesianAnnotationsDirective = __decorate([
        core_1.Directive({
            selector: "[tkCartesianAnnotations]"
        }),
        __param(0, core_1.Inject(RadCartesianChartComponent)),
        __param(1, core_1.Inject(core_1.ElementRef))
    ], TKCartesianAnnotationsDirective);
    return TKCartesianAnnotationsDirective;
})();
exports.TKCartesianAnnotationsDirective = TKCartesianAnnotationsDirective;
exports.CHART_DIRECTIVES = [RadCartesianChartComponent, RadPieChartComponent, LineSeriesDirective, AreaSeriesDirective, SplineSeriesDirective, SplineAreaSeriesDirective, BarSeriesDirective, RangeBarSeriesDirective, BubbleSeriesDirective, ScatterBubbleSeriesDirective, ScatterSeriesDirective, PieSeriesDirective, TKPieChartSeriesDirective, TKCartesianSeriesDirective, PieSeriesDirective, TKCartesianHorizontalAxisDirective, TKCartesianVerticalAxisDirective, LinearAxisDirective, DateTimeCategoricalAxisDirective, CategoricalAxisDirective, RadCartesianChartGridDirective, TKCartesianGridDirective, PaletteDirective, TKCartesianPaletteDirective, CandlestickSeriesDirective, OhlcSeriesDirective, RadLegendViewDirective, DonutSeriesDirective, TKPieLegendDirective, TKCartesianLegendDirective, ChartGridLineAnnotationDirective, TKCartesianAnnotationsDirective, ChartPlotBandAnnotationDirective, TKCartesianTrackballDirective, TrackballDirective, PointLabelStyleDirective, TKPieLabelStyleDirective, TKLineLabelStyleDirective, TKBarLabelStyleDirective, TKRangeBarLabelStyleDirective, TKAreaLabelStyleDirective, TKSplineLabelStyleDirective, TKBubbleLabelStyleDirective, TKScatterBubbleLabelStyleDirective, TKCandlestickLabelStyleDirective, TKOhlcStyleDirective, TKScatterStyleDirective, TKDonutLabelStyleDirective, DateTimeContinuousAxisDirective, TKCartesianPaletteEntryDirective, LogarithmicAxisDirective, TKLineVerticalAxisDirective, TKLineHorizontalAxisDirective, TKBarVerticalAxisDirective, TKBarHorizontalAxisDirective, TKRangeBarVerticalAxisDirective, TKRangeBarHorizontalAxisDirective, TKAreaVerticalAxisDirective, TKAreaHorizontalAxisDirective, TKSplineVerticalAxisDirective, TKSplineHorizontalAxisDirective, TKSplineAreaVerticalAxisDirective, TKSplineAreaHorizontalAxisDirective, TKBubbleVerticalAxisDirective, TKBubbleHorizontalAxisDirective, TKScatterBubbleVerticalAxisDirective, TKScatterBubbleHorizontalAxisDirective, TKCandlestickVerticalAxisDirective, TKCandlestickHorizontalAxisDirective, TKOhlcVerticalAxisDirective, TKOhlcHorizontalAxisDirective, TKScatterVerticalAxisDirective, TKScatterHorizontalAxisDirective];
elementRegistryModule.registerElement("RadCartesianChart", function () { return chartModule.RadCartesianChart; });
elementRegistryModule.registerElement("RadPieChart", function () { return chartModule.RadPieChart; });
elementRegistryModule.registerElement("RadLegendView", function () { return chartModule.RadLegendView; });
elementRegistryModule.registerElement("LineSeries", function () { return chartModule.LineSeries; });
elementRegistryModule.registerElement("PieSeries", function () { return chartModule.PieSeries; });
elementRegistryModule.registerElement("DonutSeries", function () { return chartModule.DonutSeries; });
elementRegistryModule.registerElement("AreaSeries", function () { return chartModule.AreaSeries; });
elementRegistryModule.registerElement("CategoricalAxis", function () { return chartModule.CategoricalAxis; });
elementRegistryModule.registerElement("LinearAxis", function () { return chartModule.LinearAxis; });
elementRegistryModule.registerElement("DateTimeCategoricalAxis", function () { return chartModule.DateTimeCategoricalAxis; });
elementRegistryModule.registerElement("SplineSeries", function () { return chartModule.SplineSeries; });
elementRegistryModule.registerElement("BarSeries", function () { return chartModule.BarSeries; });
elementRegistryModule.registerElement("RangeBarSeries", function () { return chartModule.RangeBarSeries; });
elementRegistryModule.registerElement("BubbleSeries", function () { return chartModule.BubbleSeries; });
elementRegistryModule.registerElement("ScatterBubbleSeries", function () { return chartModule.ScatterBubbleSeries; });
elementRegistryModule.registerElement("ScatterSeries", function () { return chartModule.ScatterSeries; });
elementRegistryModule.registerElement("OhlcSeries", function () { return chartModule.OhlcSeries; });
elementRegistryModule.registerElement("CandlestickSeries", function () { return chartModule.CandlestickSeries; });
elementRegistryModule.registerElement("RadCartesianChartGrid", function () { return chartModule.RadCartesianChartGrid; });
elementRegistryModule.registerElement("Palette", function () { return chartModule.Palette; });
elementRegistryModule.registerElement("PaletteEntry", function () { return chartModule.PaletteEntry; });
elementRegistryModule.registerElement("ChartGridLineAnnotation", function () { return chartModule.ChartGridLineAnnotation; });
elementRegistryModule.registerElement("ChartPlotBandAnnotation", function () { return chartModule.ChartPlotBandAnnotation; });
elementRegistryModule.registerElement("Trackball", function () { return chartModule.Trackball; });
elementRegistryModule.registerElement("PointLabelStyle", function () { return chartModule.PointLabelStyle; });
elementRegistryModule.registerElement("DateTimeContinuousAxis", function () { return chartModule.DateTimeContinuousAxis; });
elementRegistryModule.registerElement("LogarithmicAxis", function () { return chartModule.LogarithmicAxis; });
elementRegistryModule.registerElement("SplineAreaSeries", function () { return chartModule.SplineAreaSeries; });
