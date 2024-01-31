pipeline {
    agent any

    stages {
        stage ('Build Image') {
            steps {
                script {
                    dockerapp = docker.build("pauloss/api-product", "-f ./Dockerfile ./")
                }
            }
        }
    }
}