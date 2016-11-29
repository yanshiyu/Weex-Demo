//
//  WXButton.m
//  Weex-Demo
//
//  Created by apple on 2016/11/3.
//  Copyright © 2016年 apple. All rights reserved.
//

#import "WXButton.h"

@interface WXButton()

@property (nonatomic, strong) UIButton *innerButton;
@property (nonatomic, copy) NSString *title;
@property (nonatomic, strong) WXSDKInstance *weekInstance;

@end

@implementation WXButton

- (instancetype)initWithRef:(NSString *)ref type:(NSString *)type styles:(NSDictionary *)styles attributes:(NSDictionary *)attributes events:(NSArray *)events weexInstance:(WXSDKInstance *)weexInstance
{
    self = [super initWithRef:ref type:type styles:styles attributes:attributes events:events weexInstance:weexInstance];
    if (self) {
        _title = [WXConvert NSString:attributes[@"title"]];
        _weekInstance = weexInstance;
    }
    return self;
}

- (void)viewDidLoad
{
    [super viewDidLoad];
    
    _innerButton = [UIButton buttonWithType:UIButtonTypeCustom];
    _innerButton.frame = self.view.bounds;
    _innerButton.backgroundColor = [self defaultColor];
    _innerButton.layer.cornerRadius = CGRectGetHeight(self.view.frame)/2.0f;
    _innerButton.clipsToBounds = YES;
    [self.innerButton setTitle:self.title forState:UIControlStateNormal];
    [self.innerButton setTitleColor:[UIColor whiteColor] forState:UIControlStateNormal];
    [self.view addSubview:_innerButton];
    
    [self.innerButton addTarget:self action:@selector(onclick:) forControlEvents:UIControlEventTouchUpInside];
}

- (void)onclick:(UIButton *)sender
{
    [_weekInstance fireGlobalEvent:@"weex_hello_world_confirm" params:@{@"key": @"value"}];
}

- (UIColor *)defaultColor
{
    return [UIColor colorWithRed:207/255.0 green:167/255.0 blue:103/255.0 alpha:1.0];
}

@end
