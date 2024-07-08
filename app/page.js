import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-gray-900 text-white">
      <header className="flex justify-end w-full p-4">
        <div className="space-x-4">
          <button className="px-4 py-2 bg-blue-600 text-white font-semibold rounded hover:bg-blue-700 transition duration-300">
            Login
          </button>
          <button className="px-4 py-2 bg-blue-600 text-white font-semibold rounded hover:bg-blue-700 transition duration-300">
            Signup
          </button>
        </div>
      </header>

      <div className="flex flex-1 flex-col items-center justify-center">
        <h1 className="text-4xl font-bold mb-8">Welcome to CodeBox IDE</h1>
        <button className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition duration-300">
          Get Started
        </button>
      </div>

      <footer className="w-full text-center py-4 bg-gray-800">
        <p className="text-gray-400">&copy; 2024 CodeBox IDE. All rights reserved.</p>
      </footer>
    </main>
  );
}
