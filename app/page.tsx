import Link from "next/link"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function HomePage() {
  return (
    <div className="min-h-screen insight-bg">
      {/* Header */}
      <header className="no-print py-6 border-b border-gray-200 bg-white">
        <div className="container">
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
              <Link href="/privacy" className="text-gray-600 hover:text-blue-600 font-medium">
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
        <div className="container">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold insight-text mb-4">Insight Studio</h1>
            <p className="text-xl text-gray-600 mb-8">Thoughtful mobile apps for focused minds</p>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto">
              Insight Studio is a small, independent development studio focused on creating simple and intelligent
              mobile applications. We believe that technology should help users stay focused, relax, and develop their
              thinking skills.
            </p>
          </div>

          {/* Featured App Section */}
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold insight-text text-center mb-8">Featured App</h2>

            <Card className="p-8">
              <div className="flex flex-col md:flex-row items-center gap-8">
                {/* App Icon */}
                <div className="flex-shrink-0">
                  <img
                    src="images/insight-sudoku-icon.png"
                    alt="Insight Sudoku App Icon"
                    className="w-24 h-24 rounded-2xl shadow-lg"
                  />
                </div>

                {/* App Info */}
                <div className="flex-1 text-center md:text-left">
                  <h3 className="text-2xl font-bold insight-blue mb-3">Insight Sudoku</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    Insight Sudoku brings the classic puzzle experience into a clean, modern interface. The app includes
                    multiple difficulty levels, intelligent hints, and automatic progress saving — helping players
                    sharpen their focus and logical thinking.
                  </p>

                  {/* Download Buttons */}
                  <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                    <Button asChild className="bg-blue-600 hover:bg-blue-700">
                      <a href="#" className="flex items-center gap-3">
                        <img
                          src="images/insight-sudoku-icon.png"
                          alt="Insight Sudoku"
                          className="w-6 h-6 rounded-md"
                        />
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.61 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
                        </svg>
                        Google Play
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* About Section */}
          <div className="max-w-3xl mx-auto mt-16 text-center">
            <h2 className="text-2xl font-bold insight-text mb-6">About the Studio</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Insight Studio is a team of independent developers and designers committed to creating digital products
              that are simple, helpful, and enjoyable to use.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Our mission is to build minimalist, user-friendly, and genuinely useful apps with an emphasis on quality,
              stability, and a carefully crafted user experience. We don't chase quantity — each app we release is built
              with care, attention to detail, and a strong sense of purpose.
            </p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="no-print bg-white border-t border-gray-200 py-8 mt-16">
        <div className="container">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <div className="w-6 h-6 bg-blue-600 rounded flex items-center justify-center">
                <span className="text-white font-bold text-xs">IS</span>
              </div>
              <span className="text-gray-600">© 2025 Insight Studio</span>
            </div>
            <div className="flex items-center space-x-6">
              <Link href="/privacy" className="text-gray-500 hover:text-blue-600 text-sm">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-500 hover:text-blue-600 text-sm">
                Terms of Service
              </Link>
              <span className="text-gray-400 text-sm">Made with ❤️ in Spain</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
