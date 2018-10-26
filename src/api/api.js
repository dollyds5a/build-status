const AWS = require('aws-sdk');
const util = require('util');

const pipelineConfig = {

    aws: {
        region: 'us-east-1',
        accessKey: process.env.FART_KEY,
        secretKey: process.env.FART_SECRET
    }
};

exports.listPipelines = (config) => {

    return new AWS.CodePipeline({
        region: config.aws.region,
        httpOptions: {timeout: 3000},
        credentials: { "accessKeyId": config.aws.accessKey, "secretAccessKey": config.aws.secretKey }
    }).listPipelines()
    .promise()
    .then(data => {
        return data.pipelines.map(p => ({
            id: p.name,
            provider: 'aws-codepipeline',
            url: util.format('https://console.aws.amazon.com/codepipeline/home?region=%s#/view/%s', config.aws.region, p.name)
        }))

    })
    .catch(err => {
        console.log('Could not fetch pipeline list:' + err)
        return [];
    });

};

exports.queryPipeline = (config, pipelineId) => {

    return Promise.resolve(
        {
            id: 'pipeline1',
            provider: 'aws-codepipeline',
            url: 'https://console.aws.amazon.com/codepipeline/home?region=us-east-1#/view/pipeline1',
            // 'PASS', 'FAIL', 'RUNNING', 'PENDING', 'OTHER'
            status: 'RUNNING'
        }
    );
};




