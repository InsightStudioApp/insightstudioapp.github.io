import Link from "next/link"

export const metadata = {
  title: "Privacy Policy - Insight Studio",
  description: "Privacy Policy for Insight Sudoku and other Insight Studio applications.",
}

export default function PrivacyPage() {
  const lastUpdated = "August 18, 2025"

  return (
    <div className="min-h-screen insight-bg">
      {/* Header */}
      <header className="no-print py-6 border-b border-gray-200 bg-white">
        <div className="policy-container">
          <nav className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Link href="/" className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
                <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">IS</span>
                </div>
                <h1 className="text-xl font-bold insight-text">Insight Studio</h1>
              </Link>
            </div>
            <div className="flex items-center space-x-6">
              <Link href="/" className="text-gray-600 hover:text-blue-600 font-medium">
                Home
              </Link>
              <Link href="/privacy" className="text-blue-600 font-medium">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-600 hover:text-blue-600 font-medium">
                Terms of Service
              </Link>
            </div>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="py-12">
        <div className="policy-container">
          <div className="policy-content bg-white rounded-lg shadow-sm p-8">
            <header className="mb-8">
              <h1 className="text-3xl font-bold insight-text mb-4">Insight Sudoku Privacy Policy</h1>
              <p className="text-gray-600">
                Last Updated: <time dateTime="2025-08-18">{lastUpdated}</time>
              </p>
            </header>

            <div className="prose prose-lg max-w-none" style={{ fontSize: "17px", lineHeight: "1.7" }}>
              <section className="mb-8">
                <h2 className="text-xl font-semibold insight-text mb-4">Privacy Policy for Insight Sudoku</h2>
                <p className="text-gray-700 mb-4">
                  Insight Studio ("we," "us," or "our") respects the privacy of our users ("user," "you," or "your"). 
                  This Privacy Policy applies to our mobile application, Insight Sudoku (the "Application"), and explains 
                  how we collect, use, disclose, and safeguard your information.
                </p>
                <p className="text-gray-700 mb-4">
                  We reserve the right to make changes to this Privacy Policy at any time and for any reason. We will 
                  alert you about any changes by updating the "Last Updated" date at the top of this document. You will 
                  be deemed to have been made aware of, will be subject to, and will be deemed to have accepted the 
                  changes in any revised Privacy Policy by your continued use of the Application after the date such a 
                  revised Privacy Policy is posted.
                </p>
                <p className="text-gray-700 mb-4">
                  The data controller of your information is Insight Studio.
                </p>
                <p className="text-gray-700">
                  If you have any questions about this Privacy Policy, please contact us by email at support@insightstudio.com.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-xl font-semibold insight-text mb-4">1. COLLECTION OF YOUR INFORMATION</h2>
                <p className="text-gray-700 mb-4">
                  We may collect information about you in a variety of ways. The information we may collect via the 
                  Application depends on how you use it.
                </p>

                <h3 className="text-lg font-medium insight-text mb-3">Non-Personal Information</h3>
                <p className="text-gray-700 mb-4">
                  When you use our Application, we may automatically collect certain information. This data does not 
                  personally identify you but is essential for the Application's functionality, analytics, and advertising. 
                  We may collect:
                </p>
                <ul className="list-disc pl-6 mb-4 text-gray-700">
                  <li><strong>Device Information:</strong> The type of device you use, operating system, application version, unique device identifier (such as IDFA or Android Advertising ID), language, and IP address.</li>
                  <li><strong>Usage Data:</strong> Information about how you interact with the Application, such as session duration, level progression, in-app actions, and crash data.</li>
                </ul>

                <h3 className="text-lg font-medium insight-text mb-3">Information We Obtain from Third Parties</h3>
                <p className="text-gray-700 mb-4">
                  We receive information about you from our third-party partners who collect this data through our 
                  Application. These partners operate under their own privacy policies. A list of the third-party 
                  services that operate within our Application can be found in Appendix A and Appendix B below.
                </p>

                <h3 className="text-lg font-medium insight-text mb-3">Geo-Location Information</h3>
                <p className="text-gray-700">
                  We do not request or collect precise geo-location information (GPS). However, some third-party 
                  advertising networks may obtain approximate location data based on your IP address to provide 
                  relevant advertisements.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-xl font-semibold insight-text mb-4">2. HOW WE USE YOUR INFORMATION</h2>
                <p className="text-gray-700 mb-4">
                  Having accurate information about you permits us to provide you with a smooth, efficient, and 
                  customized experience. Specifically, we may use the information collected about you for the following purposes:
                </p>
                <ul className="list-disc pl-6 mb-4 text-gray-700">
                  <li><strong>To Provide and Support the Services:</strong> To ensure the functionality of the Application and to provide technical support.</li>
                  <li><strong>For Analytics and Improvement:</strong> To analyze the use of the Application, identify errors, and improve our services.</li>
                  <li><strong>For Advertising:</strong> To display relevant advertisements, including personalized ads, where permitted by law and your device settings.</li>
                  <li><strong>For Legal Obligations:</strong> To comply with applicable laws and regulations and to protect our rights and interests.</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-xl font-semibold insight-text mb-4">3. HOW WE SHARE YOUR INFORMATION</h2>
                <p className="text-gray-700 mb-4">
                  We may share the above categories of information for certain business purposes, including:
                </p>
                <ul className="list-disc pl-6 mb-4 text-gray-700">
                  <li><strong>With Third-Party Service Providers:</strong> We may provide information to our third-party service providers and partners who assist us in improving our services. They help us with tasks such as analytics, hosting, maintenance, and ad serving and analysis.</li>
                  <li><strong>For Legal Obligations and Security:</strong> We may disclose your information if it is reasonably necessary to comply with applicable law, governmental requests, or to protect our rights, property, or safety.</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-xl font-semibold insight-text mb-4">4. YOUR RIGHTS AND OPTIONS</h2>
                <p className="text-gray-700 mb-4">
                  You have the right to access, correct, or erase your data, and you may object to or restrict how 
                  we use or share it. You also have the right to withdraw any consent you may have previously given 
                  for the processing of your personal information.
                </p>

                <h3 className="text-lg font-medium insight-text mb-3">Opt-out of Targeted Advertising</h3>
                <p className="text-gray-700 mb-4">
                  To provide you with better-tailored ads, we use third-party advertising networks. You can opt out 
                  of personalized advertising by adjusting the settings on your mobile device:
                </p>
                <ul className="list-disc pl-6 mb-4 text-gray-700">
                  <li><strong>For iOS Devices:</strong> Go to Settings > Privacy > Tracking and turn off "Allow Apps to Request to Track." You can also limit ad tracking in Settings > Privacy > Apple Advertising.</li>
                  <li><strong>For Android Devices:</strong> Go to Settings > Google > Ads and enable "Opt out of Ads Personalization."</li>
                </ul>

                <h3 className="text-lg font-medium insight-text mb-3">Your Rights Under GDPR and CCPA</h3>
                <p className="text-gray-700 mb-4">
                  If you are a resident of the European Economic Area (GDPR) or California (CCPA), you have the 
                  following rights regarding your personal data:
                </p>
                <ul className="list-disc pl-6 mb-4 text-gray-700">
                  <li><strong>Right to Access:</strong> You may request access to your data.</li>
                  <li><strong>Right to Rectification:</strong> You may request the correction of inaccurate data.</li>
                  <li><strong>Right to Erasure:</strong> You may request the deletion of your data.</li>
                  <li><strong>Right to Restriction of Processing:</strong> You may request limitations on how we process your data.</li>
                  <li><strong>Right to Object:</strong> You may object to the processing of your data.</li>
                  <li><strong>Right to Data Portability:</strong> You may request to receive your data in a portable format.</li>
                  <li><strong>Right to Lodge a Complaint:</strong> You have the right to lodge a complaint with the appropriate supervisory authority.</li>
                </ul>
                <p className="text-gray-700">
                  To exercise your rights, please submit a request to support@insightstudio.com. We will respond to 
                  your request as promptly as possible.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-xl font-semibold insight-text mb-4">5. CHILDREN</h2>
                <p className="text-gray-700">
                  Our Application is not intended for use by children under the age of 13. We do not knowingly collect 
                  personal information directly from children under 13. If you have reason to believe that we may have 
                  accidentally received information from a child under 13, please contact us immediately at support@insightstudio.com.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-xl font-semibold insight-text mb-4">6. DATA SECURITY</h2>
                <p className="text-gray-700">
                  We prioritize the security and protection of your data. We implement appropriate administrative, 
                  technical, organizational, and physical security measures to protect your data against unauthorized 
                  access, disclosure, alteration, or destruction.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-xl font-semibold insight-text mb-4">7. CONTACT US</h2>
                <p className="text-gray-700">
                  If you have any questions about this Privacy Policy, please contact us by email at support@insightstudio.com.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-xl font-semibold insight-text mb-4">APPENDIX A – ADVERTISING NETWORKS AND THEIR PARTNERS</h2>
                <p className="text-gray-700 mb-4">
                  We use third-party advertising networks to display ads within the Application. These companies may 
                  collect and process data for ad personalization.
                </p>
                <ul className="list-disc pl-6 mb-4 text-gray-700">
                  <li><strong>Google AdMob and their partners</strong>
                    <ul className="list-disc pl-6 mt-2">
                      <li>Google Privacy Policy: <a href="https://www.google.com/policies/privacy/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">https://www.google.com/policies/privacy/</a></li>
                      <li>How Google Uses Data: <a href="https://policies.google.com/technologies/partner-sites" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">https://policies.google.com/technologies/partner-sites</a></li>
                      <li>AdMob Partners: <a href="https://support.google.com/admob/answer/9012903" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">https://support.google.com/admob/answer/9012903</a></li>
                    </ul>
                  </li>
                  <li><strong>AppLovin</strong>
                    <ul className="list-disc pl-6 mt-2">
                      <li>AppLovin Privacy Policy: <a href="https://www.applovin.com/privacy/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">https://www.applovin.com/privacy/</a></li>
                      <li>Terms of Use: <a href="https://www.applovin.com/terms/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">https://www.applovin.com/terms/</a></li>
                    </ul>
                  </li>
                  <li><strong>Unity Ads</strong>
                    <ul className="list-disc pl-6 mt-2">
                      <li>Unity Privacy Policy: <a href="https://unity3d.com/legal/privacy-policy" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">https://unity3d.com/legal/privacy-policy</a></li>
                    </ul>
                  </li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-xl font-semibold insight-text mb-4">APPENDIX B – ANALYTICS AND OTHER SERVICE PROVIDERS</h2>
                <p className="text-gray-700 mb-4">
                  We use third-party analytics services to collect data that helps us improve the Application.
                </p>
                <ul className="list-disc pl-6 mb-4 text-gray-700">
                  <li><strong>Firebase Analytics</strong>
                    <ul className="list-disc pl-6 mt-2">
                      <li>Google Privacy Policy: <a href="https://www.google.com/policies/privacy/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">https://www.google.com/policies/privacy/</a></li>
                      <li>How Google Uses Data: <a href="https://policies.google.com/technologies/partner-sites" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">https://policies.google.com/technologies/partner-sites</a></li>
                    </ul>
                  </li>
                </ul>
              </section>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="no-print bg-white border-t border-gray-200 py-8 mt-8">
        <div className="policy-container">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <div className="w-6 h-6 bg-blue-600 rounded flex items-center justify-center">
                <span className="text-white font-bold text-xs">IS</span>
              </div>
              <span className="text-gray-600">© 2024 Insight Studio</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
