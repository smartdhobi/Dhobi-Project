pipeline {
    agent any

    options {
        disableConcurrentBuilds()
    }

    environment {
        COMPOSE_PROJECT_NAME = "dhobi"
    }

    stages {
        stage('Checkout SCM') {
            steps {
                checkout scm
            }
        }

        stage('Build & Deploy') {
            steps {
                echo "🚀 Starting Docker Compose Build"
                sh '''
            docker-compose down
            docker-compose up --build
        '''
            }
        }
    }
}
