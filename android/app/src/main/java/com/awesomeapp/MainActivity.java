package com.awesomeapp;
<<<<<<< HEAD
import com.reactnativenavigation.NavigationActivity;

=======

import com.facebook.react.ReactActivity;
>>>>>>> 2ec2778ab4cf75c58809e74551e2d3c0d955f576
import com.facebook.react.ReactPackage;

import java.util.List;

<<<<<<< HEAD
public class MainActivity extends NavigationActivity {
=======
public class MainActivity extends ReactActivity {
>>>>>>> 2ec2778ab4cf75c58809e74551e2d3c0d955f576

    /**
     * Returns the name of the main component registered from JavaScript.
     * This is used to schedule rendering of the component.
     */
<<<<<<< HEAD
    
=======
    @Override
    protected String getMainComponentName() {
        return "awesomeApp";
    }
>>>>>>> 2ec2778ab4cf75c58809e74551e2d3c0d955f576


    protected boolean getUseDeveloperSupport() {
        return false;
    }


    protected List<ReactPackage> getPackages() {
        return null;
    }
}
