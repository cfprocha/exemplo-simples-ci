pipeline {
    agent any

    stages{
        stage('Clonar o repositório') {
            steps {
                git 'https://github.com/cfprocha/exemplo-simples-ci.git'
            }
        }
        stage('Instalar as dependências') {
            steps {
                sh 'npm install'
            }
        }
        stage('Resolve vulnerabilidades'){
            steps {
                sh 'npm audit fix --force'
            }
        }
        stage('Executar os testes'){
            steps{
                sh 'npm test'
            }
        } 
        stage('Iniciar a aplicação do Nodejs'){
            steps {
                sh '''
                    npm start &
                '''
            }
        }
    }
}