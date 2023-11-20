const AWS = require('aws-sdk');
const dynamoDB = new AWS.DynamoDB.DocumentClient();
const s3 = new AWS.S3();

const traceabilityTableName = process.env.DYNAMODB_TABLE_NAME;
const dataBackupBucketName = process.env.S3_BUCKET_NAME;


exports.handler = async function(event) {
  
  try {
    const dynamoParams = {
      TableName: traceabilityTableName
    };

    const dynamoResult = await dynamoDB.scan(dynamoParams).promise();

    const csvData = dynamoResult.Items.map(item => {
      return JSON.stringify(item);
    }).join('\n');

    const s3Params = {
      Bucket: dataBackupBucketName,
      Key: 'output.csv',
      Body: csvData,
    };

    await s3.upload(s3Params).promise();

    return {
      statusCode: 200,
      body: 'Datos exportados exitosamente a CSV en S3.',
    };
  } catch (error) {
    console.error('Error:', error);
    return {
      Error: error,
      statusCode: 500,
      body: 'Error al procesar la solicitud.',
    };
  }
};
