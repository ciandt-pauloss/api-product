pipeline {
    agent any

    stages {
        stage ('Test') {
            agent {
                docker { image 'node:lts-alpine' }
            }
            steps {
                sh 'node --version'
                sh 'echo Install Dependecies'
                sh 'yarn'
                sh 'yarn test'
            }
        }

        stage ('Build Image') {
            // steps {
            //     sh "docker build -t pauloss/api-product:${env.BUILD_ID} ."
            // }
            steps {
                script {
                    dockerapp = docker.build("pauloss/api-product:${env.BUILD_ID}")
                }
            }
        }
    }
}