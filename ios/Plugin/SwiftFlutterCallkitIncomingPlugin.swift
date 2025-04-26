import Foundation

@objc public class SwiftFlutterCallkitIncomingPlugin: NSObject {
    @objc public func echo(_ value: String) -> String {
        print(value)
        return value
    }
}
