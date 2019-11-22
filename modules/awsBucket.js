// Documentação
// https://docs.aws.amazon.com/pt_br/sdk-for-javascript/v2/developer-guide/s3-example-configuring-buckets.html

const AWS = require('aws-sdk');

const credentials = new AWS.SharedIniFileCredentials({
	profile: {
		aws_access_key_id: process.env.AWS_ACCESS_KEY_ID || "",
		aws_secret_access_key: process.env.AWS_SECRET_ACCESS_KEY || ""
	}
});
AWS.config.credentials = credentials;
AWS.config.update({ region: "us-west-2" });
const s3 = new AWS.S3({ apiVersion: "2006-03-01" });

const listBuckets = () => {
	s3.listBuckets((err, data) => {
		if (err) {
			console.log("Error", err);
		} else {
			console.log("Success", data.Buckets);
		}
	});
}

const createBucket = (bucketName) => {
	const bucketParams = {
		Bucket: bucketName,
		ACL: 'public-read'
	};

	s3.createBucket(bucketParams, (err, data) => {
		if (err) {
			console.log("Error", err);
		} else {
			console.log("Success", data.Location);
		}
	});
}

const listObjectsBucket = (bucketName) => {
	const bucketParams = {
		Bucket: bucketName,
	};

	s3.listObjects(bucketParams, (err, data) => {
		if (err) {
			console.log("Error", err);
		} else {
			console.log("Success", data);
		}
	});
}

const uploadBucket = (bucketName, file) => {
	const uploadParams = { Bucket: bucketName, Key: '', Body: '' };
	const fs = require('fs');
	const fileStream = fs.createReadStream(file);

	fileStream.on('error', function (err) {
		console.log('File Error', err);
	});

	uploadParams.Body = fileStream;

	const path = require('path');

	uploadParams.Key = path.basename(file);

	s3.upload(uploadParams, (err, data) => {
		if (err) {
			console.log("Error", err);
		} if (data) {
			console.log("Upload Success", data.Location);
		}
	});
}

const deleteBucket = (bucketName) => {
	const bucketParams = {
		Bucket: bucketName
	};

	s3.deleteBucket(bucketParams, (err, data) => {
		if (err) {
			console.log("Error", err);
		} else {
			console.log("Success", data);
		}
	});
}

module.exports = { listBuckets, createBucket, listObjectsBucket, uploadBucket, deleteBucket };
