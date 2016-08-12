/**
 * Created by WHY on 2016-05-29.
 */
    (function ($) {
        //自调用函数
        $.fn.waterFall = function (opts) {
            //设置默认间距
            var defaults = {
                gap: 15
            }

            //扩展默认参数
            defaults = $.extend(defaults, opts);

            var _this = $(this),
                gap = defaults.gap,
                items = _this.children(), //子元素
                itemsWidth = _this.width(), //父元素宽度
                width = items.width(),       //子元素宽度
                height = 0,
                columns = Math.floor(itemsWidth / width), //计算共几列
                h = [];                     //每一列高度

            items.each(function (index, element) {
                height = $(element).height();   //每个元素高度
                if (index < columns) {
                    h[index] = height;      //每一列高度
                    $(element).css({
                        top: 0,
                        left: index * (width + gap)
                    });
                } else {
                    //找到最小值和最小下标
                    var minVal = h[0];
                    var minIndex = 0;
                    for (var i = 0; i < h.length; i++) {
                        if (h[i] < minVal) {
                            minVal = h[i];
                            minIndex = i;
                        }
                    }

                    //更新列高
                    h[minIndex] = h[minIndex] + height;

                    $(element).css({
                        top: minVal,
                        left: minIndex * (width + gap)
                    });
                }
            })

            var maxVal = h[0];
            for (var i = 0; i < h.length; i++) {
                if (h[i] > maxVal) {
                    maxVal = h[i];
                }
            }

            _this.height(maxVal);

        }
    })(jQuery)