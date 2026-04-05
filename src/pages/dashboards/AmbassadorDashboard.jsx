import { Users, Calendar, TrendingUp } from 'lucide-react';

export default function AmbassadorDashboard() {
  return (
    <div className="p-6 w-full max-w-4xl mx-auto">
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Ambassador Hub</h2>
          <p className="text-sm text-gray-500">You are currently in the Gold Tier.</p>
        </div>
        <div className="rounded-xl bg-yellow-100 px-4 py-2 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-500 font-bold">
          Gold Level Unlocked
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-3 mb-8">
        <div className="rounded-2xl border border-gray-200 p-5 dark:border-gray-800 dark:bg-gray-900">
          <Users className="mb-3 h-6 w-6 text-blue-500" />
          <div className="text-3xl font-bold dark:text-white">124</div>
          <div className="text-sm text-gray-500">Students Onboarded</div>
        </div>
        <div className="rounded-2xl border border-gray-200 p-5 dark:border-gray-800 dark:bg-gray-900">
          <Calendar className="mb-3 h-6 w-6 text-green-500" />
          <div className="text-3xl font-bold dark:text-white">14</div>
          <div className="text-sm text-gray-500">Events Moderated</div>
        </div>
      </div>

      <h3 className="text-lg font-bold mb-4 dark:text-white">Recent Campus Integrations</h3>
      <div className="space-y-3">
        <div className="flex items-center justify-between rounded-xl bg-gray-50 p-4 dark:bg-gray-800/50">
          <div>
            <div className="font-semibold dark:text-white">Bus Stop Renovation Initiative</div>
            <div className="text-xs text-gray-500">50+ Participants Registered</div>
          </div>
          <span className="text-green-500 text-sm font-bold flex items-center"><TrendingUp className="w-4 h-4 mr-1"/> +150 pts</span>
        </div>
      </div>
    </div>
  );
}
