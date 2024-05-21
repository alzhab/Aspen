pipeline {
    agent any

    environment {
        ANDROID_HOME = "/path/to/android/sdk"
        NODE_HOME = "/path/to/node"
        PATH = "${env.PATH}:${env.ANDROID_HOME}/tools:${env.ANDROID_HOME}/platform-tools:${env.NODE_HOME}/bin"
    }

    stages {
        stage('Checkout') {
            steps {
                git url: 'https://github.com/alzhab/Aspen', branch: 'main'
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm install'
                sh 'cd ios && pod install'
            }
        }

        stage('Build Android') {
            steps {
                sh './gradlew assembleRelease'
            }
        }

        stage('Build iOS') {
            steps {
                sh 'xcodebuild -workspace ios/YourApp.xcworkspace -scheme YourApp -configuration Release -sdk iphoneos -archivePath $PWD/build/YourApp.xcarchive archive'
                sh 'xcodebuild -exportArchive -archivePath $PWD/build/YourApp.xcarchive -exportOptionsPlist ios/exportOptions.plist -exportPath $PWD/build'
            }
        }

        stage('Test') {
            steps {
                sh 'npm test'
            }
        }
    }

    post {
        success {
            echo 'Build and test successful!'
        }
        failure {
            echo 'Build or test failed.'
        }
    }
}
