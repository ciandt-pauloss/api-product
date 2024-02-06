pipeline {
    agent any

    stages {
        stage ('Test') {
            // agent {
            //     docker { image 'node:lts-alpine' }
            // }
            steps {
                nodejs(nodeJSInstallationName: 'node21.6.1') {
                    sh 'node --version'
                    sh 'echo Install Dependecies'
                    sh 'npm install -g yarn'
                    sh 'yarn'
                    sh 'yarn test'
                }
            }
        }

        stage ('Build Image') {
            steps {
                script {
                    dockerapp = docker.build("pauloss/api-product:${env.BUILD_ID}")
                }
            }
        }
    }
}