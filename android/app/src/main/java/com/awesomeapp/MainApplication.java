package com.awesomeapp;

import android.app.Application;

import com.facebook.react.ReactApplication;
import com.oblador.vectoricons.VectorIconsPackage;
<<<<<<< HEAD
//import com.reactnativenavigation.NavigationReactPackage;
import com.reactnativenavigation.bridge.NavigationReactPackage;
import com.oblador.vectoricons.VectorIconsPackage;
=======
>>>>>>> 2ec2778ab4cf75c58809e74551e2d3c0d955f576
import com.facebook.react.ReactNativeHost;
import com.facebook.react.ReactPackage;
import com.facebook.react.shell.MainReactPackage;
import com.facebook.soloader.SoLoader;

import java.util.Arrays;
import java.util.List;

<<<<<<< HEAD

import com.reactnativenavigation.NavigationApplication;
import com.reactnativenavigation.react.NavigationReactNativeHost;
import com.reactnativenavigation.react.ReactGateway;



public class MainApplication extends NavigationApplication {

     @Override
     protected ReactGateway createReactGateway() {
         ReactNativeHost host = new NavigationReactNativeHost(this, isDebug(), createAdditionalReactPackages()) {
             @Override
             protected String getJSMainModuleName() {
                 return "index";
             }
         };
         return new ReactGateway(this, isDebug(), host);
     }


     public boolean isDebug() {
         return BuildConfig.DEBUG;
     }

     protected List<ReactPackage> getPackages() {
         // Add additional packages you require here
         // No need to add RnnPackage and MainReactPackage
         return Arrays.<ReactPackage>asList(
             // eg. new VectorIconsPackage()
         );
     }

     @Override
     public List<ReactPackage> createAdditionalReactPackages() {
        return getPackages();
    }

=======
public class MainApplication extends Application implements ReactApplication {

  private final ReactNativeHost mReactNativeHost = new ReactNativeHost(this) {
    @Override
    public boolean getUseDeveloperSupport() {
      return BuildConfig.DEBUG;
    }

    @Override
    protected List<ReactPackage> getPackages() {
      return Arrays.<ReactPackage>asList(
          new MainReactPackage(),
            new VectorIconsPackage()
      );
    }

    @Override
    protected String getJSMainModuleName() {
      return "index";
    }
  };

  @Override
  public ReactNativeHost getReactNativeHost() {
    return mReactNativeHost;
  }

  @Override
  public void onCreate() {
    super.onCreate();
    SoLoader.init(this, /* native exopackage */ false);
  }
>>>>>>> 2ec2778ab4cf75c58809e74551e2d3c0d955f576
}
