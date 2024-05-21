// SplashScreenModule.h
#import <React/RCTBridgeModule.h>

@interface SplashScreenModule : NSObject <RCTBridgeModule>

@end

// SplashScreenModule.m
#import "SplashScreenModule.h"
#import "AppDelegate.h"

@implementation SplashScreenModule

RCT_EXPORT_MODULE();

RCT_EXPORT_METHOD(showSplashScreen)
{
  dispatch_async(dispatch_get_main_queue(), ^{
  UIWindow *window = UIApplication.sharedApplication.keyWindow;
  
  UIStoryboard *launchScreenStoryboard = [UIStoryboard storyboardWithName:@"LaunchScreen" bundle:nil];
  UIViewController *launchScreenVC = [launchScreenStoryboard instantiateInitialViewController];
  UIView *launchScreen = launchScreenVC.view;
  launchScreen.frame = window.bounds;
  
  [window addSubview:launchScreen];
  [window bringSubviewToFront:launchScreen];
  
  [UIView animateWithDuration:0.5 animations:^{
    launchScreen.frame = CGRectMake(0, window.bounds.size.height, window.bounds.size.width, window.bounds.size.height);
  } completion:^(BOOL finished) {
    [launchScreen removeFromSuperview];
  }];
});
}

@end
