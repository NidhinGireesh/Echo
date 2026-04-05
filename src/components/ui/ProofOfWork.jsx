import { CheckCircle, Trophy, Github } from 'lucide-react';

export default function ProofOfWork() {
  return (
    <div className="mx-auto w-full max-w-3xl rounded-2xl bg-white p-8 shadow-sm dark:bg-gray-900">
      <div className="mb-8 flex items-center gap-4">
        <div className="h-20 w-20 rounded-full bg-gradient-to-tr from-purple-500 to-blue-500 p-1">
          <div className="h-full w-full rounded-full bg-white dark:bg-gray-800"></div>
        </div>
        <div>
          <h2 className="text-2xl font-bold dark:text-white flex items-center gap-2">
            Student Profile <CheckCircle className="h-5 w-5 text-blue-500" />
          </h2>
          <p className="text-gray-500">Kochi, Kerala • 15 Verified Assets</p>
        </div>
      </div>

      <h3 className="mb-4 text-lg font-semibold dark:text-white">Verified Badges</h3>
      <div className="mb-8 flex gap-3">
        <div className="flex flex-col items-center rounded-xl border border-gray-100 bg-gray-50 p-4 dark:border-gray-800 dark:bg-gray-800/50">
          <Trophy className="mb-2 h-6 w-6 text-purple-500" />
          <span className="text-xs font-bold dark:text-gray-300">Top ML Contributor</span>
        </div>
        <div className="flex flex-col items-center rounded-xl border border-gray-100 bg-gray-50 p-4 dark:border-gray-800 dark:bg-gray-800/50">
          <Trophy className="mb-2 h-6 w-6 text-blue-500" />
          <span className="text-xs font-bold dark:text-gray-300">NSS Unit Leader</span>
        </div>
      </div>

      <h3 className="mb-4 text-lg font-semibold dark:text-white">Featured Implementations</h3>
      <div className="rounded-xl border border-gray-200 p-5 dark:border-gray-700">
        <div className="flex justify-between items-start">
          <div>
            <h4 className="font-bold dark:text-white">Machine Learning Energy Waste Detector</h4>
            <p className="mt-1 text-sm text-gray-500">Algorithm processing live hardware data to predict and cut power anomalies.</p>
          </div>
          <button className="text-gray-400 hover:text-black dark:hover:text-white"><Github className="h-5 w-5"/></button>
        </div>
      </div>
    </div>
  );
}
