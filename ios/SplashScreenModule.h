
#import <React/RCTBridgeModule.h>

@interface SplashScreenModule : NSObject <RCTBridgeModule>

+ (instancetype)sharedInstance;
- (void)showSplashScreen;

@end
