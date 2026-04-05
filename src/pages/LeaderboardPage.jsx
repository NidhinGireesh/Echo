import React from 'react';
import { leaderboard } from '../data/mockData';

const images = {
  1: "https://lh3.googleusercontent.com/aida-public/AB6AXuA9vCJb8sSAw3kQACd6UAeiF9kp3jae_jeK8j9R2Ua5pgQ_9TTDh_cPLHO_LKp2iIr4I7DXXzI7cCA8vrXwIsdTJfmYW_BFmx5YgXlO3oAOewFc5AaX8xG4PnSu2BpBOehYFf3jvOG8MEAvX8AmqwV2i8ZT-lA7nVk1qk04rq76L5dMf9Kx1rNZgppw1EqhtMZJhSO5uCVd_-VAR1ONYsSy9uA8e6sSC6qHNbb6Szhblhl_nlFqry9Nl6ssG44RNMTeMwgo777ENNIc",
  2: "https://lh3.googleusercontent.com/aida-public/AB6AXuDSdQeisyrrJQk-6fWWH4ZLEzDksrdrHpy9-z55RKY00Qen561RyO2BYmRUMATQcfJ36zUWCHaeHk1i5fLm6TgGu5RYCemMFv6NhECG8ahvfPgAUtKeC3HRIYF3AUVpnH_gBL0tznPaQLko_5ZH4A838pRv9fjUHqgMbVVMHHQabw1UKUHJZG_Fruyg-OeVB8P_mZr1HhJ0ISa0mOq1VtuOOKYxfHpnFWv-ICcwpzkPUbbDIAbu-SCCXe0oZpO4fX7YCnsLnA7biowG",
  3: "https://lh3.googleusercontent.com/aida-public/AB6AXuB9IxnQv6KNL1XmUEbokKUU3AeS2vNOupdg_u1mi0RLw3ks4iKLiXD43grCuZITkkQ-sqNzqlRDxvu6fBqkzldx0zjoTr1pWTCFc747dWgBZ0jxB8Bm5ySbWWpQ_Yv1h2-h1CWdDWu8qqbV2deYa4p7azQMT6wm6Uo-tc5B3EWeo1Izeky2L5uZVMIw5_yLUiwPGBwuBDB-3UqR49IKGXAPBXUrZBnsssDiZQHHhdEI6SjbzrhFNsBRgHkaGK6IfjPK308qWCG8ckRI",
  4: "https://lh3.googleusercontent.com/aida-public/AB6AXuDdV60BEgA8qqzV5rd2rk-tEZYaIxkIr9_zCwiNzS7PBY8j7f0fXCx_FIqsuvbEKdscJIMroF1OPET6iObOG4fbpnK2W6gqvN__mexasn_EuYlb4GGOg_4rJcqRvi3KqlTtdTcS-ag6-PTYJtlytB2FrevsNlr39usabESSFgd_A5zn4F4NqMjVKbxzN55Fwi1A9NeqdMtAEBduSNe50ACVN6est1B5XKca4ES6vFoM6dJNlz4jmcZHU4T7BGR_DE7LApq70R1rcf9a",
  5: "https://lh3.googleusercontent.com/aida-public/AB6AXuCoIK2XKOfdi1oKget9sp-MH6QKlr_mQO-AKY43p_HCO4pt1qRCQPdGWjk-SIKHmTdY-bNUoCU_ri71k3ObnJhFAaeehk9Tyv1zgtG_7owlAckdcM82wM6JeIxqs9nRYugSZhrRcGEoTDU-C5rYJk7WCnFl2yeB-Wj4VfQ-TEKrUjS_XLlW6lkxXPYr7KP-6R5M1_PQc6lrq-EwUCVhU5cY9VH8RPyLfSUdGH8E6gHaMVL8N5zoce9viA1oGFgwifu8VPHFGIewIocn",
  6: "https://lh3.googleusercontent.com/aida-public/AB6AXuDHIu3VMHhW8Xbxeg7H28bMkdL_VbmGBmACZQMgxOS0HbV6MgWwtovebqjKEqGJc67QkcEkSkYQTAvCRO5t_wVv3kbLYvmRJgwPtcoWoVcJ23aKJQemO25C8v72hyINs43wi66b8Z99p83xiQz2bfh2Hq1JUNr0i2rHj6rWIiF0gkjPeOEHDilc70IdjOlM8AnEmulKZJzfZx9y2d9HidsZi7qyfqjRugPVd-tB5fQWQdyNJe1ew8Ub7QNZzQXmQ-8BQQh0sd9otZKk"
};

const LeaderboardPage = () => {
  const top1 = leaderboard.find(l => l.rank === 1);
  const top2 = leaderboard.find(l => l.rank === 2);
  const top3 = leaderboard.find(l => l.rank === 3);
  const remainingList = leaderboard.filter(l => l.rank > 3);

  return (
    <div className="flex-1 min-h-screen p-6 md:p-12 relative overflow-hidden bg-surface text-on-surface selection:bg-primary-container selection:text-on-primary-container">
      {/* Background Decorative Orbs */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary/10 rounded-full blur-[120px]"></div>
      <div className="absolute bottom-24 -left-24 w-80 h-80 bg-secondary/10 rounded-full blur-[100px]"></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Header Section */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-2">
            <span className="px-3 py-1 bg-secondary-container/30 text-secondary text-[10px] uppercase tracking-tighter font-bold rounded-full border border-secondary/20">
              Season 04
            </span>
            <span className="text-on-surface-variant text-xs font-medium">Updated 2 hours ago</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-black tracking-tight text-on-surface mb-4 font-headline">College Standings</h1>
          <p className="text-on-surface-variant max-w-2xl text-lg font-medium leading-relaxed font-body">
            The ultimate hierarchy of academic and social excellence. Track your institution's ascent through real-time engagement and collaboration metrics.
          </p>
        </div>

        {/* Podium Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16 items-end">
          {/* Rank 2 */}
          {top2 && (
            <div className="glass-tile p-6 rounded-3xl border border-outline-variant/10 md:h-[320px] flex flex-col items-center justify-end group hover:bg-surface-container-high transition-all duration-500">
              <div className="relative mb-6">
                <div className="w-20 h-20 rounded-2xl overflow-hidden border-2 border-secondary/50 rotate-3 group-hover:rotate-0 transition-transform duration-500 shadow-xl shadow-secondary/10">
                  <img src={images[2]} alt={top2.name} className="w-full h-full object-cover" />
                </div>
                <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-surface-container-highest rounded-full flex items-center justify-center border border-outline-variant">
                  <span className="text-secondary font-black text-sm">2</span>
                </div>
              </div>
              <h3 className="text-xl font-bold text-on-surface mb-1 text-center font-headline">{top2.name}</h3>
              <span className="text-on-surface-variant text-sm mb-4 font-body">{top2.points.toLocaleString()} Astral Points</span>
              <div className="w-full h-1.5 bg-surface-container rounded-full overflow-hidden">
                <div className="h-full bg-secondary w-[85%]"></div>
              </div>
            </div>
          )}

          {/* Rank 1 (Featured) */}
          {top1 && (
            <div className="glass-tile p-8 rounded-[2rem] border border-primary/20 md:h-[400px] flex flex-col items-center justify-end relative overflow-hidden group hover:bg-surface-container-high transition-all duration-500">
              <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent pointer-events-none"></div>
              <div className="relative mb-8">
                <div className="absolute -inset-4 bg-primary/20 rounded-full blur-2xl group-hover:blur-3xl transition-all duration-700"></div>
                <div className="w-28 h-28 rounded-3xl overflow-hidden border-4 border-primary relative z-10 -rotate-3 group-hover:rotate-0 transition-transform duration-500 shadow-2xl shadow-primary/20">
                  <img src={images[1]} alt={top1.name} className="w-full h-full object-cover" />
                </div>
                <div className="absolute -top-3 -right-3 w-12 h-12 bg-primary rounded-full flex items-center justify-center border-4 border-surface shadow-lg">
                  <svg className="text-surface w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 15.22l-5.19 3.1 1.34-5.91L3.5 8.44l6.05-.51L12 2.5l2.45 5.43 6.05.51-4.65 3.97 1.34 5.91z" />
                  </svg>
                </div>
              </div>
              <h3 className="text-3xl font-black text-on-surface mb-1 text-center font-headline">{top1.name}</h3>
              <span className="text-primary font-bold mb-6 font-body">{top1.points.toLocaleString()} Astral Points</span>
              <div className="w-full h-2 bg-surface-container rounded-full overflow-hidden">
                <div className="h-full bg-primary w-full"></div>
              </div>
              <div className="mt-4 flex gap-1">
                <span className="w-1 h-1 bg-primary rounded-full"></span>
                <span className="w-1 h-1 bg-primary rounded-full"></span>
                <span className="w-1 h-1 bg-primary rounded-full"></span>
              </div>
            </div>
          )}

          {/* Rank 3 */}
          {top3 && (
            <div className="glass-tile p-6 rounded-3xl border border-outline-variant/10 md:h-[280px] flex flex-col items-center justify-end group hover:bg-surface-container-high transition-all duration-500">
              <div className="relative mb-6">
                <div className="w-16 h-16 rounded-2xl overflow-hidden border-2 border-tertiary/50 -rotate-3 group-hover:rotate-0 transition-transform duration-500 shadow-xl shadow-tertiary/10">
                  <img src={images[3]} alt={top3.name} className="w-full h-full object-cover" />
                </div>
                <div className="absolute -bottom-2 -right-2 w-7 h-7 bg-surface-container-highest rounded-full flex items-center justify-center border border-outline-variant">
                  <span className="text-tertiary font-black text-xs">3</span>
                </div>
              </div>
              <h3 className="text-lg font-bold text-on-surface mb-1 text-center font-headline">{top3.name}</h3>
              <span className="text-on-surface-variant text-sm mb-4 font-body">{top3.points.toLocaleString()} Astral Points</span>
              <div className="w-full h-1.5 bg-surface-container rounded-full overflow-hidden">
                <div className="h-full bg-tertiary w-[70%]"></div>
              </div>
            </div>
          )}
        </div>

        {/* Standings List */}
        <div className="space-y-4">
          <div className="flex items-center justify-between px-6 mb-6">
            <h2 className="text-xl font-bold tracking-tight font-headline">Global Standings</h2>
            <div className="flex gap-2 font-body">
              <button className="px-4 py-1.5 rounded-full text-xs font-bold bg-surface-container-highest text-primary border border-primary/20">All Time</button>
              <button className="px-4 py-1.5 rounded-full text-xs font-bold text-on-surface-variant hover:bg-surface-container-high transition-colors">This Month</button>
            </div>
          </div>

          {remainingList.map((item, index) => {
            // cycle through images 4, 5, 6
            const imgIndex = (index % 3) + 4;
            const isDormant = index % 2 !== 0; // Example toggle based on index
            return (
              <div key={item.rank} className="glass-tile p-4 rounded-2xl flex items-center gap-6 group hover:translate-x-1 transition-all duration-300 font-body">
                <span className="w-8 text-center font-black text-on-surface-variant group-hover:text-primary transition-colors">
                  {item.rank.toString().padStart(2, '0')}
                </span>
                <div className="w-12 h-12 rounded-xl overflow-hidden border border-outline-variant/30 shrink-0">
                  <img src={images[imgIndex]} alt={item.name} className="w-full h-full object-cover" />
                </div>
                <div className="flex-1">
                  <h4 className="font-bold text-on-surface truncate">{item.name}</h4>
                  <div className="flex items-center gap-3 mt-0.5">
                    <span className={`text-[10px] uppercase font-bold tracking-widest ${isDormant ? 'text-tertiary' : 'text-secondary'}`}>
                      {isDormant ? 'Dormant' : 'Active'}
                    </span>
                    <span className="w-1 h-1 bg-outline-variant rounded-full"></span>
                    <span className="text-xs text-on-surface-variant">{item.students} Students</span>
                  </div>
                </div>
                <div className="text-right hidden sm:block shrink-0">
                  <div className="font-headline font-bold text-on-surface">{item.points.toLocaleString()} pts</div>
                  <div className={`text-[10px] flex items-center justify-end gap-1 font-bold ${isDormant ? 'text-error' : 'text-primary'}`}>
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      {isDormant ? (
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 17h8m0 0V9m0 8l-8-8-4 4-6-6" />
                      ) : (
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                      )}
                    </svg>
                    {isDormant ? '-3%' : '+5%'}
                  </div>
                </div>
                <button className="p-2 text-on-surface-variant hover:text-primary transition-colors">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            );
          })}
        </div>

        {/* Floating CTA for Mobiles only */}
        <button className="fixed bottom-8 right-8 md:hidden w-14 h-14 bg-gradient-to-br from-primary to-primary-dim rounded-full flex items-center justify-center text-surface shadow-2xl shadow-primary/40 active:scale-90 transition-transform z-50">
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default LeaderboardPage;
