pipeline {
    agent any

    options {
        disableConcurrentBuilds()
    }

    environment {
        COMPOSE_PROJECT_NAME = "dhobi"
    }

    stages {
        stage('Checkout') {
            steps {
                git url: 'https://github.com/smartdhobi/Dhobi-Project.git', branch: 'master'
            }
        }

        stage('Build & Deploy') {
            steps {
                echo "🚀 Starting Docker Compose Build"
                sh 'docker-compose up --build'
            }
        }
    }

    post {
        always {
            echo "📦 Cleanup old containers if needed"
        }
    }
}
