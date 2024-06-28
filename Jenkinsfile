pipeline {
    agent any
    
    environment {
        DOCKER_REGISTRY='pabasarasamarakoondocker1945'
        SERVER_IMAGE_NAME = 'server_image'
        CLIENT_IMAGE_NAME = 'client_image'
    }
    
    stages {
        stage('Checkout Code') {
            steps {
                git branch: 'main', url: 'https://github.com/pabasara-samarakoon-4176/Hotel.git'
            }
        }
        stage('Build api Docker Image') {
            steps {
                sh 'docker build -t api-image:v1.$BUILD_ID ./api'
                sh 'docker tag api-image:v1.$BUILD_ID ${DOCKER_REGISTRY}/api-image:v1.$BUILD_ID'
                sh 'docker tag api-image:v1.$BUILD_ID ${DOCKER_REGISTRY}/api-image:latest'
            }
        }
        stage('Push api Docker Image') {
            steps {
                withCredentials([usernamePassword(credentialsId: 'docker-login', passwordVariable: 'DOCKERHUB_PASSWORD', usernameVariable: 'DOCKERHUB_USERNAME')]) {
                    sh 'docker login -u $DOCKERHUB_USERNAME -p $DOCKERHUB_PASSWORD'
                    sh 'docker push ${DOCKER_REGISTRY}/api-image:v1.$BUILD_ID'
                    sh 'docker push ${DOCKER_REGISTRY}/api-image:latest'
                    sh 'docker image rmi api-image:v1.$BUILD_ID ${DOCKER_REGISTRY}/api-image:v1.$BUILD_ID ${DOCKER_REGISTRY}/api-image:latest'
                }
            }
        }
        stage('Build hotel Docker Image') {
            steps {
                sh 'docker build -t hotel-image:v1.$BUILD_ID ./hotel'
                sh 'docker tag hotel-image:v1.$BUILD_ID ${DOCKER_REGISTRY}/hotel-image:v1.$BUILD_ID'
                sh 'docker tag hotel-image:v1.$BUILD_ID ${DOCKER_REGISTRY}/hotel-image:latest'
            }
        }
        stage('Push hotel Docker Images') {
            steps {
               withCredentials([usernamePassword(credentialsId: 'docker-login', passwordVariable: 'DOCKERHUB_PASSWORD', usernameVariable: 'DOCKERHUB_USERNAME')]) {
                    sh 'docker login -u $DOCKERHUB_USERNAME -p $DOCKERHUB_PASSWORD'
                    sh 'docker push ${DOCKER_REGISTRY}/hotel-image:v1.$BUILD_ID'
                    sh 'docker push ${DOCKER_REGISTRY}/hotel-image:latest'
                    sh 'docker image rmi hotel-image:v1.$BUILD_ID ${DOCKER_REGISTRY}/hotel-image:v1.$BUILD_ID ${DOCKER_REGISTRY}/hotel-image:latest'
                }
            }
        }
      
        stage('Pull backend docker images') {
            steps {
                withCredentials([usernamePassword(credentialsId: 'docker-login', passwordVariable: 'DOCKERHUB_PASSWORD', usernameVariable: 'DOCKERHUB_USERNAME')]) {
                    sh 'docker login -u $DOCKERHUB_USERNAME -p $DOCKERHUB_PASSWORD'
                    sh 'docker pull ${DOCKER_REGISTRY}/api-image'
                    sh 'docker pull mongo:latest'
                }
            }
        }
        stage('Pull frontend docker images') {
            steps {
                withCredentials([usernamePassword(credentialsId: 'docker-login', passwordVariable: 'DOCKERHUB_PASSWORD', usernameVariable: 'DOCKERHUB_USERNAME')]) {
                    sh 'docker login -u $DOCKERHUB_USERNAME -p $DOCKERHUB_PASSWORD'
                    sh 'docker pull ${DOCKER_REGISTRY}/hotel-image'
                }
            }
        }
        stage('Run containers') {
            steps {
                sh 'docker run -d --name mongo_server -p 27017:27017 mongo:latest'
                sh 'docker run -d --name api_container --link mongo_server:mongo_server -p 5001:5001 -e MONGO_URL=mongodb://mongo_server:27017/hotel-db pabasarasamarakoondocker1945/api-image'
                sh 'docker run -d --name hotel_container -p 3000:3000 hotel-image'
            }
        }
    }
}
