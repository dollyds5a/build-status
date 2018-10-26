
exports.listPipelines = (config) => {

    return Promise.resolve(
        [
            {
                id: 'pipeline1',
                provider: 'aws-codepipeline',
                url: 'https://console.aws.amazon.com/codepipeline/home?region=us-east-1#/view/pipeline1'
            },
            {
                id: 'pipeline2',
                provider: 'aws-codedeploy',
                url: 'https://console.aws.amazon.com/codepipeline/home?region=us-east-1#/view/pipeline1'
            },
            {
                id: 'pipeline3',
                provider: 'travis-pipeline',
                url: 'https://console.aws.amazon.com/codepipeline/home?region=us-east-1#/view/pipeline1'
            }
        ]
    );
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


