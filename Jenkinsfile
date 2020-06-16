pipeline {
   agent {
       docker { image "rodrigoromanoreis/node-wd" 
                args "--network=skynet"
       }
    }
    stages {
        stage('Build'){
            steps{
                sh "npm install node"
            }
        }
        stage('Tests'){
            steps{
                sh "npm run test:ci"
            }
        }
    }
}
