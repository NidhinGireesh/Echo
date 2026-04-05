import { Cpu, Zap, X, Heart } from 'lucide-react';

export default function MatchmakingCard() {
  return (
    <div className="w-full max-w-md overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-lg dark:border-gray-800 dark:bg-gray-900">
      <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-8 text-center text-white">
        <span className="mb-2 inline-block rounded-full bg-white/20 px-3 py-1 text-xs font-semibold backdrop-blur-md">
          Looking for Co-Founder
        </span>
        <h2 className="text-3xl font-bold">App Interface Developer</h2>
      </div>
      
      <div className="p-6">
        <h3 className="font-semibold text-gray-900 dark:text-white">The Vision</h3>
        <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
          I've built a robust TCP/IP networking backend architecture to handle large-scale data routing. I need a mobile specialist to build out the consumer-facing app.
        </p>

        <div className="mt-6 border-t border-gray-100 pt-6 dark:border-gray-800">
          <h3 className="mb-3 text-xs font-bold uppercase tracking-wider text-gray-400">Missing Tech Stack</h3>
          <div className="flex gap-2">
            <span className="flex items-center rounded-lg bg-blue-50 px-3 py-1.5 text-sm font-medium text-blue-600 dark:bg-blue-900/30 dark:text-blue-400">
              <Zap className="mr-1.5 h-4 w-4" /> Flutter
            </span>
            <span className="flex items-center rounded-lg bg-gray-50 px-3 py-1.5 text-sm font-medium text-gray-600 dark:bg-gray-800 dark:text-gray-400">
              <Cpu className="mr-1.5 h-4 w-4" /> UI/UX Design
            </span>
          </div>
        </div>

        <div className="mt-8 flex justify-center gap-4">
          <button className="flex h-14 w-14 items-center justify-center rounded-full border-2 border-red-100 bg-white text-red-500 shadow-sm transition-transform hover:scale-110 dark:border-gray-800 dark:bg-gray-900">
            <X className="h-6 w-6" />
          </button>
          <button className="flex h-14 w-14 items-center justify-center rounded-full bg-blue-600 text-white shadow-lg shadow-blue-500/30 transition-transform hover:scale-110">
            <Heart className="h-6 w-6" />
          </button>
        </div>
      </div>
    </div>
  );
}
