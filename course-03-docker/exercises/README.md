# cloud-developer
Third projrct of Udacity's cloud developer nanodegree .

## STEP 1 : Setup Docker Environment

You'll need to install docker https://docs.docker.com/install/. Open a new terminal within the project directory and run:

  -Build the images: docker-compose -f docker-compose-build.yaml build --parallel
  -Push the images: docker-compose -f docker-compose-build.yaml push
  -Run the container: docker-compose up

## STEP 2: Creating AWS infrastructure and installing Kubernates on it and run the containers
 
 I user Terraform for aws provisionning and Kubeone for installing and managing Kubernates on AWS infrastructure. I followed the instractions in this documentations link:  https://github.com/kubermatic/kubeone/blob/master/docs/quickstart-aws.md
 
 


