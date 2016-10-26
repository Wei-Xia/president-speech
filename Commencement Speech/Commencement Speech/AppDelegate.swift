//
//  AppDelegate.swift
//  Commencement Speech
//

//  Copyright (c) 2016 Wei Xia. All rights reserved.
//

//python -m SimpleHTTPServer 9001 for localhost

import UIKit
import TVMLKit

@UIApplicationMain
class AppDelegate: UIResponder, UIApplicationDelegate, TVApplicationControllerDelegate {
    
    var window: UIWindow?
    let defaults = NSUserDefaults.standardUserDefaults()
    
    
    var appController: TVApplicationController?
    static let TVBaseURL = "http://localhost:9001/"
    //    static let TVBaseURL = "http://agile-academy-tvos-content.mybluemix.net/static/"
    static let TVBootURL = "\(AppDelegate.TVBaseURL)js/application.js"
    //  static let rdbBaseURL = "http://localhost:8090/api/v1/"
//    static let rdbBaseURL = "http://agile-academy-tvos-restdb.mybluemix.net/api/v1/"
    
    func application(application: UIApplication, didFinishLaunchingWithOptions launchOptions: [NSObject: AnyObject]?) -> Bool {
        window = UIWindow(frame: UIScreen.mainScreen().bounds)
        
        // 1
        let appControllerContext = TVApplicationControllerContext()
        
        // 2
        guard let javaScriptURL = NSURL(string: AppDelegate.TVBootURL) else {
            fatalError("unable to create NSURL")
        }
        appControllerContext.javaScriptApplicationURL = javaScriptURL
        appControllerContext.launchOptions["BASEURL"] = AppDelegate.TVBaseURL
//        appControllerContext.launchOptions["BASEAPIURL"] = AppDelegate.rdbBaseURL
        if let uuid = defaults.objectForKey("uuid") as? String{
            print("My uuid is \(uuid)")
            appControllerContext.launchOptions["UUID"] = uuid
        } else{
            let newUUID = NSUUID().UUIDString
            defaults.setObject(newUUID, forKey: "uuid")
            appControllerContext.launchOptions["UUID"] = newUUID
        }
        
        
        // 3
        appController = TVApplicationController(context: appControllerContext, window: window, delegate: self)
        
        
        
        return true
    }
}
