pipeline {
    agent {
        docker { image 'node:lts-alpine' }
    }

    stages {
        stage ('Test') {
            steps {
                sh 'node --version'
                sh 'echo Install Dependecies'
                sh 'yarn'
                sh 'yarn test'
            }
        }

        stage ('Build Image') {
            steps {
                script {
                    dockerapp = docker.build("pauloss/api-product", "-f ./Dockerfile ./")
                }
            }
        }
    }
}