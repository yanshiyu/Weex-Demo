/**
 * Created by Weex.
 * Copyright (c) 2016, Alibaba, Inc. All rights reserved.
 *
 * This source code is licensed under the Apache Licence 2.0.
 * For the full copyright and license information,please view the LICENSE file in the root directory of this source tree.
 */

#import "WXEventModule.h"
#import "WeexBaseViewController.h"

@implementation WXEventModule

@synthesize weexInstance;

WX_EXPORT_METHOD(@selector(openURL:))

- (void)openURL:(NSString *)url
{
    NSURL *newURL = [NSURL URLWithString:url];
    if ([url hasPrefix:@"//"]) {
        newURL = [NSURL URLWithString:[NSString stringWithFormat:@"http:%@", url]];
    } else if (![url hasPrefix:@"http"]) {
        // relative path
        newURL = [NSURL URLWithString:url relativeToURL:weexInstance.scriptURL];
    }
    NSString *path = [NSString stringWithFormat:@"%@://%@", newURL.scheme, newURL.path];
    UIViewController *controller = [[WeexBaseViewController alloc]initWithSourceURL:[NSURL URLWithString:path]];
//    [weexInstance.viewController presentViewController:controller animated:YES completion:nil];
    [[weexInstance.viewController navigationController] pushViewController:controller animated:YES];
}

@end

