
// This code was largely inspired by Dom's tutorial on HW14

const url = "https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json"

function DrawBargraph(sampleId)
{
    console.log(`Draw Bar Graph(${sampleId})`);

    d3.json(url).then(data => {
        console.log(data);

        let samples = data.samples;
        let resultArray = samples.filter(s => s.id == sampleId);
        let result = resultArray[0];

        let otu_ids = result.out_ids;
        let otu_labels = result.out_labels;
        let sample_values = result.sample_values;


        let yticks = otu_ids.slice(0,10).map(otuID => `OTU ${otuId}`);
        
        let barData = {
            x: sample_values.slice(0,10),
            y: yticks,
            type: 'bar',
            text: otu_labels.slice(0,10),
            orientation: 'h'
        }
    });
}

function DrawBubbleChart(sampleId)
{
    console.log(`Draw Bubble Chart(${sampleId})`);
}

function ShowMetadata(sampleId)
{
    console.log(`Show MetaData(${sampleId})`);
}


function optionChanged(sampleId)
{
    console.log(`optionChanged: ${sampleId}`);

    DrawBargraph(sampleId);
    DrawBubbleChart(sampleId);
    ShowMetadata(sampleId);
}

function InitDashboard()
{
    console.log("InitDashboard");
    
    let selector = d3.select("#selDataset");


    d3.json(url).then(data => {
        console.log("Here's the data:", data)

        let sampleNames = data.names;
        console.log("Here are the sample names:", sampleNames)

        for (let i = 0; i < sampleNames.length; i++) {
            let sampleId = sampleNames[i];
            selector.append("option").text(sampleId).property("value", sampleId);

        };

        let initialId = selector.property("value");
        console.log(`initialId = ${initialId}`);

        DrawBargraph(initialId);

        DrawBubbleChart(initialId)

        ShowMetadata(initialId)

        optionChanged(initialId)

    });
}

InitDashboard();