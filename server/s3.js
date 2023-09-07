// require(dotenv).config()
// const fs = require('fs')
// const s3 = require('aws-sdk/clients/s3')

import dotenv from 'dotenv';
import aws from 'aws-sdk'

dotenv.config();

const region= "ap-south-1"
const bucketName="direct-upload-s3-bucket-thanu"
const assessKeyId=process.env.AWS_ACCESS_KEY_ID
const secretAccessKey=process.env.AWS_SECRET_ACCESS_KEY

const s3= new aws.s3({
region,
assessKeyId,
secretAccessKey,
signatureVersion:'4'
})