
    
    $(window).load(function () {
        window.setTimeout(function () { $('.preloaderBody').fadeOut('slow', function () { $(this).remove(); }); }, 2000);
    });


$(document).ready(function () {

   
    window.setTimeout(function () {
        $("#hexagon-01").hexagonProgress({
            value: 0.5 * (0.8),
            startAngle: 1.5 * (Math.PI),
            animation: {
                duration: 2000,
                easing: "hexagonEasing"
            },
            lineWidth: 20,
            lineFrontFill: { color: "#35564F" },
            lineCap: "square",
            size: "parent",
            lineBackFill: {
                color: "rgba(0, 0, 0, 0)"
            }
        });
        $("#hexagon-02").hexagonProgress({
            value: 0.5 * (0.36),
            startAngle: 1.5 * (Math.PI),
            animation: {
                duration: 2000,
                easing: "hexagonEasing"
            },
            lineWidth: 20,
            lineFrontFill: { color: "#43635C" },
            lineCap: "square",
            size: "parent",
            lineBackFill: {
                color: "rgba(0, 0, 0, 0)"
            }
        });
        $("#hexagon-03").hexagonProgress({
            value: 0.5 * (0.7),
            startAngle: 1.5 * (Math.PI),
            animation: {
                duration: 2000,
                easing: "hexagonEasing"
            },
            lineWidth: 20,
            lineFrontFill: { color: "#507069" },
            lineCap: "square",
            size: "parent",
            lineBackFill: {
                color: "rgba(0, 0, 0, 0)"
            }
        });
        $("#hexagon-04").hexagonProgress({
            value: 0.5 * (0.75),
            startAngle: 1.5 * (Math.PI),
            animation: {
                duration: 2000,
                easing: "hexagonEasing"
            },
            lineWidth: 20,
            lineFrontFill: { color: "#5E7F78" },
            lineCap: "square",
            size: "parent",
            lineBackFill: {
                color: "rgba(0, 0, 0, 0)"
            }
        });
        $("#hexagon-05").hexagonProgress({
            value: 0.5 * (0.48),
            startAngle: 1.5 * (Math.PI),
            animation: {
                duration: 2000,
                easing: "hexagonEasing"
            },
            lineWidth: 20,
            lineFrontFill: { color: "#709089" },
            lineCap: "square",
            size: "parent",
            lineBackFill: {
                color: "rgba(0, 0, 0, 0)"
            }
        });
        $("#hexagon-06").hexagonProgress({
            value: 0.5 * (0.6),
            startAngle: 1.5 * (Math.PI),
            animation: {
                duration: 2000,
                easing: "hexagonEasing"
            },
            lineWidth: 20,
            lineFrontFill: { color: "#83A49D" },
            lineCap: "square",
            size: "parent",
            lineBackFill: {
                color: "rgba(0, 0, 0, 0)"
            }
        });
        $("#hexagon-07").hexagonProgress({
            value: 0.5 * (0.4),
            startAngle: 1.5 * (Math.PI),
            animation: {
                duration: 2000,
                easing: "hexagonEasing"
            },
            lineWidth: 20,
            lineFrontFill: { color: "#9CBDB5" },
            lineCap: "square",
            size: "parent",
            lineBackFill: {
                color: "rgba(0, 0, 0, 0)"
            }
        });
    }, 1000);

    $('.honeycombs').honeycombs();

    var $head = $('#ha-header');
    $('.ha-waypoint').each(function (i) {
        var $el = $(this),
            animClassDown = $el.data('animateDown'),
            animClassUp = $el.data('animateUp');

        $el.waypoint(function (direction) {
            if (direction === 'down' && animClassDown) {
                $head.attr('class', 'ha-header ' + animClassDown);
            }
            else if (direction === 'up' && animClassUp) {
                $head.attr('class', 'ha-header ' + animClassUp);
            }
        }, { offset: '100%' });
    });
 


})

var resize = function () {

        window.setTimeout(function () {
            $("#hexagon-01").hexagonProgress({
                value: 0.5 * (0.8),
                startAngle: 1.5 * (Math.PI),
                animation: {
                    duration: 2000,
                    easing: "hexagonEasing"
                },
                lineWidth: 20,
                lineFrontFill: { color: "#35564F" },
                lineCap: "square",
                size: "parent",
                lineBackFill: {
                    color: "rgba(0, 0, 0, 0)"
                }
            });
            $("#hexagon-02").hexagonProgress({
                value: 0.5 * (0.4),
                startAngle: 1.5 * (Math.PI),
                animation: {
                    duration: 2000,
                    easing: "hexagonEasing"
                },
                lineWidth: 20,
                lineFrontFill: { color: "#43635C" },
                lineCap: "square",
                size: "parent",
                lineBackFill: {
                    color: "rgba(0, 0, 0, 0)"
                }
            });
            $("#hexagon-03").hexagonProgress({
                value: 0.5 * (0.7),
                startAngle: 1.5 * (Math.PI),
                animation: {
                    duration: 2000,
                    easing: "hexagonEasing"
                },
                lineWidth: 20,
                lineFrontFill: { color: "#507069" },
                lineCap: "square",
                size: "parent",
                lineBackFill: {
                    color: "rgba(0, 0, 0, 0)"
                }
            });
            $("#hexagon-04").hexagonProgress({
                value: 0.5 * (0.75),
                startAngle: 1.5 * (Math.PI),
                animation: {
                    duration: 2000,
                    easing: "hexagonEasing"
                },
                lineWidth: 20,
                lineFrontFill: { color: "#5E7F78" },
                lineCap: "square",
                size: "parent",
                lineBackFill: {
                    color: "rgba(0, 0, 0, 0)"
                }
            });
            $("#hexagon-05").hexagonProgress({
                value: 0.5 * (0.48),
                startAngle: 1.5 * (Math.PI),
                animation: {
                    duration: 2000,
                    easing: "hexagonEasing"
                },
                lineWidth: 20,
                lineFrontFill: { color: "#709089" },
                lineCap: "square",
                size: "parent",
                lineBackFill: {
                    color: "rgba(0, 0, 0, 0)"
                }
            });
            $("#hexagon-06").hexagonProgress({
                value: 0.5 * (0.6),
                startAngle: 1.5 * (Math.PI),
                animation: {
                    duration: 2000,
                    easing: "hexagonEasing"
                },
                lineWidth: 20,
                lineFrontFill: { color: "#83A49D" },
                lineCap: "square",
                size: "parent",
                lineBackFill: {
                    color: "rgba(0, 0, 0, 0)"
                }
            });
            $("#hexagon-07").hexagonProgress({
                value: 0.5 * (0.4),
                startAngle: 1.5 * (Math.PI),
                animation: {
                    duration: 2000,
                    easing: "hexagonEasing"
                },
                lineWidth: 20,
                lineFrontFill: { color: "#9CBDB5" },
                lineCap: "square",
                size: "parent",
                lineBackFill: {
                    color: "rgba(0, 0, 0, 0)"
                }
            });
        }, 1000)

}

function ScrollTo(id) {
    $("html, body").animate({ scrollTop: $('#'+id).offset().top }, 1000);
}