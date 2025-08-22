import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Header/Navigation */}
      <header className="fixed w-full top-0 z-50 bg-white dark:bg-gray-900 shadow-sm">
        <nav className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <span className="text-xl font-bold">Polina</span>
            <div className="space-x-6">
              <a href="#about" className="hover:text-blue-500">About</a>
              <a href="#projects" className="hover:text-blue-500">Projects</a>
              <a href="#contact" className="hover:text-blue-500">Contact</a>
            </div>
          </div>
        </nav>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-6 pt-20">
        {/* Hero Section */}
        <section id="about" className="py-20">
          <h1 className="text-4xl font-bold mb-4">
            Hi, I'm Polina 👋
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Frontend Developer
          </p>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-20">
          <h2 className="text-3xl font-bold mb-8">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Add your project cards here */}
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20">
          <h2 className="text-3xl font-bold mb-8">Get In Touch</h2>
          <div className="space-y-4">
            {/* Add your contact information or form here */}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t dark:border-gray-800">
        <div className="container mx-auto px-6 py-4 text-center">
          <p>© 2025 Polina. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
