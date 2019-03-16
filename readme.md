 

*It is ejected application and is not using expo* 


### instructions ### 
1. npm start
2. npm run android / npm run ios 
3. Android Emulator :- Click on it and press CTRL+M and click on ```live Reload```

#### if app in real device is not loading ####
Try to bundle it up by writing in terminal:

react-native bundle --platform android --dev false --entry-file index.js --bundle-output android/app/src/main/assets/index.android.bundle --assets-dest android/app/src/main/res/

*Remember to bundle the files when you add new dependency* 
# Important #

I have downraded my package.json file and had moved the dependenices to readme.md file . 
In the near future if the issue link (https://github.com/oblador/react-native-vector-icons/issues/768#issuecomment-473242714)  is resolved then i have to move back to the latest one :)

"@babel/runtime": "^7.3.4",
    "eslint": "^5.15.1",
    "react": "^16.8.3",
    "react-native": "^0.59.1",
    "react-native-navigation": "^2.13.1",
    "react-native-vector-icons": "^6.4.1",
    "react-redux": "^6.0.1",
    "redux": "^4.0.1"