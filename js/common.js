var margin = {top: 30, right: 20, bottom: 30, left: 50},
    width = 600 - margin.left - margin.right,
    height = 270 - margin.top - margin.bottom;


var svg = d3.select(".timeline-container")
            .append("svg")
            .attr("width", width)
            .attr("height", height)

var x = d3.time.scale().range([0, width]);
var y = d3.scale.linear().range([height, 0]);
var d1 = {date:"30-Apr-12",close:"53.98"};
var d2 = {date:"26-Apr-12",close:"89.70"};            

svg.append("line")
                      .attr({ x1: x(d1.date), y1: y(d1.close), //start of the line
                              x2: x(d2.date), y2: y(d2.close)  //end of the line
                            });            
                      