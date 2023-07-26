const {
  S3Client,
  ListObjectsCommand,
  GetObjectCommand,
} = require("@aws-sdk/client-s3");

// Set the AWS Region.
const REGION = "ap-south-1";
// Create an Amazon S3 service client object.
const bucketParams = {
  Bucket: "testbucketfp",
};
const s3Client = new S3Client({
  region: REGION,
  signer: {
    sign: async (request) => request,
  },
});

const run = async () => {
  try {
    const data = await s3Client.send(new ListObjectsCommand(bucketParams));

    return data; // For unit tests.
  } catch (err) {
    console.log("Error", err);
  }
};

module.exports = {
  getImagesFromAWS_S3: async (req, res, next) => {
    try {
      const data = await run();

      const imageUrls = data.Contents.map(
        (item) =>
          `https://${bucketParams.Bucket}.s3.${REGION}.amazonaws.com/${item.Key}`
      );

      res.json(imageUrls);
    } catch (error) {
      next(error);
    }
  },
};
