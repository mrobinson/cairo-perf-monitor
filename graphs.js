/*
 * Copyright © 2006 Red Hat, Inc.
 * Copyright © 2013 Igalia S.L.
 *
 * Permission to use, copy, modify, distribute, and sell this software
 * and its documentation for any purpose is hereby granted without
 * fee, provided that the above copyright notice appear in all copies
 * and that both that copyright notice and this permission notice
 * appear in supporting documentation, and that the name of
 * the authors not be used in advertising or publicity pertaining to
 * distribution of the software without specific, written prior
 * permission. The authors make no representations about the
 * suitability of this software for any purpose.  It is provided "as
 * is" without express or implied warranty.
 *
 * THE AUTHORS DISCLAIM ALL WARRANTIES WITH REGARD TO THIS
 * SOFTWARE, INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY AND
 * FITNESS, IN NO EVENT SHALL THE AUTHORS BE LIABLE FOR ANY SPECIAL,
 * INDIRECT OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER
 * RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION
 * OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF OR
 * IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 */

function findArrayStats(values)
{
    var result = {
        'standardDeviation': 0,
        'median': 0,
        'mean': 0,
    };

    if (values.length == 0)
        return result;

    if (values.length == 1) {
        result.mean = result.median = values[0];
    }


    // First, identify any outliers, using the definition of "mild
    // outliers" from: http://en.wikipedia.org/wiki/Outliers
    //
    // Which is that outliers are any values less than Q1 - 1.5 * IQR
    // or greater than Q3 + 1.5 * IQR where Q1 and Q3 are the first
    // and third quartiles and IQR is the inter-quartile range (Q3 -
    // Q1).
    values.sort();

    var q1 = values[Math.floor(1 * values.length / 4)];
    var q3 = values[Math.floor(3 * values.length / 4)];

    var iqr = q3 - q1;
    var outlier_min = q1 - 3 * iqr / 2;
    var outlier_max = q3 + 3 * iqr / 2;

    for (var i = 0; i < values.length && values[i] < outlier_min; i++) {}
    var min_valid = i;

    for (var i = 0; i < values.length && values[i] <= outlier_max; i++) {}
    var num_valid = i - min_valid;

    var sum = 0;
    for (var i = min_valid; i < min_valid + num_valid; i++) {
        sum += values[i];
    }
    result.mean = sum / num_valid;

    // Let's use a normalized std. deviation for easier comparison.
    var s = 0;
    for (var i = min_valid; i < min_valid + num_valid; i++) {
        var delta = (values[i] - result.mean) / result.mean;
        s += delta * delta;
    }
    result.standardDeviation = Math.sqrt(s / num_valid);
    return result;
}

function processSamples(data)
{
    if (data === undefined)
        return [];
    var stats = findArrayStats(data.samples);
    console.log(stats);
    if (stats.mean === 0)
        return [];

    return [stats.mean / (data.normalization * 1000), stats.standardDeviation];
}

function makeGraphElement(configurations)
{
    var element = document.createElement('div');
    element.className = "graphandcommit"

    var graphHTML = '<div class="graph">' +
                        '<div></div>' + // The actual graph div.
                        '<div>';
    for (var i = 0; i < configurations.length; i++) {
        graphHTML += '<label>';
        graphHTML +=    '<input type="checkbox" checked onClick="setSeriesVisibility(this, ' + i + ');">';
        graphHTML +=    configurations[i];
        graphHTML += '</label>';
    }
    graphHTML += '</div></div>' +
                 '<div class="commitmessage"></div>';
    element.innerHTML = graphHTML;
    return element;
}

function seriesFromData(results, configurations)
{
    var series = [];

    for (var i = 0; i < results.length; i++) {
        var commit = results[i];
        var newSeries = [i];
        for (var configIndex = 0; configIndex < configurations.length; configIndex++) {
            var backend = configurations[configIndex];
            newSeries.push(processSamples(commit[backend]));
        }

        series.push(newSeries);
    }

    return series;
}

function setSeriesVisibility(checkbox, series)
{
    // FIXME: This is a big fragile! :)
    checkbox.parentElement.parentElement.parentElement.parentElement._graph.setVisibility(series, checkbox.checked);
}

function graphFromTrace(data)
{
    var results = data['results'];
    var configurations = data['configurations'];

    var element = makeGraphElement(configurations)
    document.body.appendChild(element);

    var graph = new Dygraph(
        element.childNodes[0].childNodes[0],
        seriesFromData(results, configurations),
        {
            title: data['test'] + ' (' + data['commitRange'] + ')',
            errorBars: true,
            labels: ['commit'].concat(configurations),
            highlightCallback: function(e, x, points, row) {
                element.childNodes[1].innerText = results[row].message;
            }
        });
    element._graph = graph;

}
