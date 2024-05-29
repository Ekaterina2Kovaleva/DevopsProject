const AWS = require('aws-sdk');
const fs = require('fs');
const path = require('path');
require('dotenv').config();

const accessKeyId = process.env.ACCESS_KEY;
const secretAccessKey = process.env.SECRET_KEY;

const s3 = new AWS.S3({
  endpoint: 'https://storage.yandexcloud.net',
  accessKeyId: accessKeyId,
  secretAccessKey: secretAccessKey,
  region: "ru-central1",
  s3ForcePathStyle: true,
});

const uploadDirectory = async (dir, bucket, basePath = '') => {
  const files = fs.readdirSync(dir);

  for (const file of files) {
    const filePath = path.join(dir, file);
    const stats = fs.statSync(filePath);

    if (stats.isDirectory()) {
      await uploadDirectory(filePath, bucket, path.join(basePath, file));
    } else {
      const fileContent = fs.readFileSync(filePath);
      const params = {
        Bucket: bucket,
        Key: path.join(basePath, file).replace(/\\/g, '/'), // Ensure correct path format for S3
        Body: fileContent,
        ContentType: getContentType(file)
      };

      await s3.upload(params).promise();
      console.log(`Uploaded ${filePath} to ${params.Key}`);
    }
  }
};

const getContentType = (file) => {
  const ext = path.extname(file);
  switch (ext) {
    case '.html':
      return 'text/html';
    case '.css':
      return 'text/css';
    case '.js':
      return 'application/javascript';
    case '.json':
      return 'application/json';
    case '.png':
      return 'image/png';
    case '.jpg':
      return 'image/jpeg';
    default:
      return 'application/octet-stream';
  }
};

const buildDir = path.resolve(__dirname, '../frontend/dist'); 
const bucketName = 'design-site.ru';

uploadDirectory(buildDir, bucketName).catch(err => console.error('Error uploading files:', err));
