#/bin/bash

export IMAGE=gcr.io/sandbox-jainpayal/sample-cloudrun-image:1.0
gcloud builds submit --tag $IMAGE .
gcloud run deploy sample-cloudrun-service \
  --image=$IMAGE \
  --platform managed \
  --region us-central1 \
  --allow-unauthenticated
