import { Star, Download, Code } from 'lucide-react';

export default function AssetCard() {
  return (
    <div className="group relative w-full max-w-sm rounded-2xl border border-gray-200 bg-white p-5 transition-all hover:shadow-xl dark:border-gray-800 dark:bg-gray-900">
      <div className="mb-4 flex items-center justify-between">
        <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-700 dark:bg-blue-900 dark:text-blue-300">
          Flutter UI Kit
        </span>
        <span className="flex items-center text-sm font-medium text-gray-600 dark:text-gray-400">
          <Star className="mr-1 h-4 w-4 text-yellow-500" /> 4.9
        </span>
      </div>
      
      <h3 className="mb-2 text-xl font-bold text-gray-900 dark:text-white">
        Travel & Tourism App Template
      </h3>
      <p className="mb-4 text-sm text-gray-500 dark:text-gray-400">
        Production-ready frontend assets, responsive map integrations, and custom animated routing.
      </p>

      <div className="mb-6 flex flex-wrap gap-2">
        <span className="flex items-center text-xs font-medium text-gray-500"><Code className="mr-1 w-3 h-3"/> Dart</span>
        <span className="flex items-center text-xs font-medium text-gray-500"><Code className="mr-1 w-3 h-3"/> Firebase</span>
      </div>

      <div className="flex items-center justify-between border-t border-gray-100 pt-4 dark:border-gray-800">
        <div className="text-lg font-bold text-gray-900 dark:text-white">₹499</div>
        <button className="flex items-center rounded-lg bg-black px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-200">
          <Download className="mr-2 h-4 w-4" /> Get Asset
        </button>
      </div>
    </div>
  );
}
