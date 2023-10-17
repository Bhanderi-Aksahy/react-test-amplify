import AWS from 'aws-sdk';

AWS.config.update({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  region: 'us-east-1',
});

const s3 = new AWS.S3();

export async function fetchLogFile() {
  try {
    const params = {
      Bucket: 'rmsjoblist',
      Key: 's3://rmsjoblist/emalogs/Report_2023-10-10.log',
    };
    const data = await s3.getObject(params).promise();
    console.log("data ::", data);
    console.log(data.Body.toString());
  } catch (error) {
    console.error('Error fetching log file:', error);
  }
};


