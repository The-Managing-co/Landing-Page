'use client';

import React, { useState } from 'react';
import { ChevronUp, ChevronDown } from 'lucide-react';

interface TabItem {
  id: string;
  title: string;
  description: string;
  summaryTitle: string;
  summaryP1: string;
  summaryP2: string;
  timeline: string;
  decisionMaker: string;
  teams: string;
  intent: 'High' | 'Medium' | 'Low';
  engagement: 'Engaged' | 'Active' | 'Passive';
  sentiment: 'Positive' | 'Neutral' | 'Mixed';
}

const tabsData: TabItem[] = [
  {
    id: 'buyer',
    title: 'Understands The Buyer First',
    description: "Hobbes asks tailored discovery questions before jumping into features, uncovering pain points and actual team priorities.",
    summaryTitle: 'Initial Discovery & Background',
    summaryP1: 'Buyer requested a demo for their regional operations team. Hobbes mapped out their current workflow bottlenecks across dispatch and scheduling before presenting the software.',
    summaryP2: 'The conversation identified 3 key requirements: automated route dispatch, driver mobile connectivity, and centralized fuel accounting.',
    timeline: 'Within 30 Days',
    decisionMaker: 'VP of Operations',
    teams: 'Logistics, Fleet',
    intent: 'High',
    engagement: 'Engaged',
    sentiment: 'Positive',
  },
  {
    id: 'matters',
    title: 'Shows What Matters',
    description: 'Bypasses standard boilerplate slides to navigate straight into the specific capabilities that solve the prospect’s explicit challenges.',
    summaryTitle: 'Feature Focus & Exploration',
    summaryP1: 'Demonstrated live fleet telemetry and automated turn-by-turn routing directly on the interactive map canvas, saving 15 minutes of irrelevant overview slides.',
    summaryP2: 'Prospect verified API compatibility with their existing ERP system and tested custom rule triggers for automated driver re-assignments.',
    timeline: 'Immediate (1-2 Weeks)',
    decisionMaker: 'Head of Product',
    teams: 'Engineering, Ops',
    intent: 'High',
    engagement: 'Engaged',
    sentiment: 'Positive',
  },
  {
    id: 'conversation',
    title: 'Moves The Conversation Forward',
    description: 'Handles technical objections in real-time, calculates immediate ROI figures, and prepares stakeholders for clear procurement next steps.',
    summaryTitle: 'Objection Handling & ROI Review',
    summaryP1: 'Addressed multi-region data compliance and offline mobile capability. Provided instant comparative benchmark numbers versus legacy tools.',
    summaryP2: 'Sent automated follow-up packages with security whitepapers and schedule proposals for executive review.',
    timeline: 'Q1 Deployment',
    decisionMaker: 'Director of Procurement',
    teams: 'Finance, Security',
    intent: 'Medium',
    engagement: 'Engaged',
    sentiment: 'Neutral',
  },
  {
    id: 'understanding',
    title: 'Creates Shared Understanding',
    description: 'Hobbes captures what happened in every demo so GTM teams always start conversations further ahead.',
    summaryTitle: 'Summary',
    summaryP1: 'Arjun initiated the call to explore Haulvana for his residential hauling business, specifically noting he manages a fleet of 10 trucks. While he initially stated he was "just curious," his engagement level increased as he directed the demonstration toward specific operational needs.',
    summaryP2: 'The conversation focused heavily on logistics features. The agent demonstrated the main dashboard, the Operations Routes view (including map and calendar visualizations), and the Job Scheduling Board. Arjun requested to see how route optimization works, leading to a demo of the drag-and-drop route adjustment capabilities.',
    timeline: 'Urgent, 1-2 Weeks',
    decisionMaker: 'Yes, owner/Operator',
    teams: 'Sales',
    intent: 'Medium',
    engagement: 'Engaged',
    sentiment: 'Neutral',
  },
];

export default function Products() {
  const [activeTabId, setActiveTabId] = useState('understanding');
  const [rightSubTab, setRightSubTab] = useState<'qualification' | 'moments'>('qualification');

  const activeTab = tabsData.find((t) => t.id === activeTabId) || tabsData[3];

  return (
    <section className="relative z-20 w-full max-w-full overflow-hidden bg-black text-white py-16 sm:py-24 px-4 sm:px-6 font-sans">
      <div className="max-w-[1020px] mx-auto">
        
        {/* TOP BAR: Header + Right Description */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 sm:pb-16 border-b border-white/10">
          <div>
            {/* Pill Tag: • The New Demo Experience */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium text-slate-300 bg-white/5 border border-white/10 mb-4 backdrop-blur-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-[0_0_8px_#22d3ee]"></span>
              The New Demo Experience
            </div>

            {/* Main Headline */}
            <h2 className="text-3xl sm:text-4xl md:text-[44px] font-bold text-white tracking-tight leading-[1.16]">
              How Hobbes runs <br />
              Product Demos, 24/7
            </h2>
          </div>

          {/* Right Sub-copy */}
          <p className="text-xs sm:text-sm text-slate-400 max-w-xs md:text-right leading-relaxed">
            Hobbes runs product demos the way your best rep would, without needing a meeting.
          </p>
        </div>

        {/* MAIN BODY: Left Tabs Navigation & Right SaaS Interactive UI Preview */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start pt-10 sm:pt-14">
          
          {/* LEFT COLUMN: Vertical Interactive Tabs & Description */}
          <div className="lg:col-span-5 flex flex-col justify-between min-h-[420px]">
            <div className="space-y-6 sm:space-y-7">
              {tabsData.map((tab) => {
                const isActive = tab.id === activeTabId;
                return (
                  <div key={tab.id} className="transition-all duration-200">
                    <button
                      onClick={() => setActiveTabId(tab.id)}
                      className={`text-left text-base sm:text-[17px] tracking-tight block w-full transition-colors ${
                        isActive
                          ? 'text-white font-medium'
                          : 'text-slate-500 hover:text-slate-300 font-normal'
                      }`}
                    >
                      {tab.title}
                    </button>

                    {/* Active Tab Description below it */}
                    {isActive && (
                      <div className="mt-3 pl-0 text-xs sm:text-[13px] text-slate-400 font-normal leading-relaxed animate-fadeIn">
                        {tab.description}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Bottom Accent / Progress Bar Indicator */}
            <div className="pt-10 sm:pt-14">
              <div className="h-[2px] w-40 bg-neutral-800 rounded-full overflow-hidden">
                <div
                  className="h-full bg-white transition-all duration-300"
                  style={{
                    width: `${((tabsData.findIndex((t) => t.id === activeTabId) + 1) / tabsData.length) * 100}%`,
                  }}
                />
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: Scenic Mountain Canvas + Floating SaaS Demo Review Modal */}
          <div className="lg:col-span-7">
            <div className="relative w-full rounded-2xl sm:rounded-3xl overflow-hidden border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.8)]">
              
              {/* Scenic Mountain Twilight Photo Background */}
              <div
                className="absolute inset-0 bg-cover bg-center filter brightness-90 saturate-110"
                style={{
                  backgroundImage: `url('https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80')`,
                }}
              />
              <div className="absolute inset-0 bg-black/45 backdrop-blur-[1px]" />

              {/* FLOATING SAAS REVIEW WINDOW */}
              <div className="relative z-10 m-3 sm:m-5 rounded-xl sm:rounded-2xl bg-[#0f1217]/95 border border-white/10 backdrop-blur-md p-4 sm:p-5 text-slate-300 shadow-2xl">
                
                <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-start">
                  
                  {/* LEFT PANE OF MODAL (Summary, Transcript, Outcome) */}
                  <div className="md:col-span-7 space-y-3">
                    
                    {/* Summary Section (Open) */}
                    <div className="rounded-xl bg-[#171a23] border border-white/5 p-3.5 sm:p-4 text-[11px] sm:text-xs text-slate-300">
                      <div className="flex items-center justify-between mb-3 text-slate-200 font-medium">
                        <div className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-sky-400"></span>
                          <span>{activeTab.summaryTitle}</span>
                        </div>
                        <ChevronUp className="w-3.5 h-3.5 text-slate-400" />
                      </div>

                      <p className="text-slate-300/90 leading-relaxed mb-3">
                        {activeTab.summaryP1}
                      </p>
                      <p className="text-slate-400/90 leading-relaxed">
                        {activeTab.summaryP2}
                      </p>
                    </div>

                    {/* Transcript Collapsible (Closed) */}
                    <div className="rounded-xl bg-[#171a23] border border-white/5 px-3.5 sm:px-4 py-2.5 flex items-center justify-between text-[11px] sm:text-xs text-slate-300">
                      <div className="flex items-center gap-2 font-medium">
                        <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
                        <span>Transcript</span>
                      </div>
                      <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
                    </div>

                    {/* Outcome Collapsible */}
                    <div className="rounded-xl bg-[#171a23] border border-white/5 p-3.5 sm:p-4 text-[11px] sm:text-xs text-slate-300">
                      <div className="flex items-center justify-between mb-2 text-slate-200 font-medium">
                        <div className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                          <span>Outcome</span>
                        </div>
                        <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
                      </div>
                      <p className="text-slate-400 text-[11px] leading-relaxed">
                        Prospect fits the ICP (10 trucks, residential) and engaged with specific features, but stated he was &ldquo;just curious&rdquo; and did not book a formal sales meeting yet.
                      </p>
                    </div>

                  </div>

                  {/* RIGHT PANE OF MODAL (Qualification & Metrics) */}
                  <div className="md:col-span-5 space-y-3">
                    
                    {/* Tabs: Qualification | Key Moments */}
                    <div className="flex items-center gap-4 border-b border-white/10 pb-2 text-[11px] sm:text-xs font-medium">
                      <button
                        onClick={() => setRightSubTab('qualification')}
                        className={`transition-colors relative pb-1 ${
                          rightSubTab === 'qualification'
                            ? 'text-white border-b-2 border-sky-400'
                            : 'text-slate-400 hover:text-slate-200'
                        }`}
                      >
                        Qualification
                      </button>
                      <button
                        onClick={() => setRightSubTab('moments')}
                        className={`transition-colors relative pb-1 ${
                          rightSubTab === 'moments'
                            ? 'text-white border-b-2 border-sky-400'
                            : 'text-slate-400 hover:text-slate-200'
                        }`}
                      >
                        Key Moments
                      </button>
                    </div>

                    {/* Timeline Card */}
                    <div className="rounded-xl bg-[#171a23] border border-white/5 p-3 text-[11px]">
                      <div className="flex items-center gap-1.5 text-slate-400 mb-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-sky-400"></span>
                        <span>Timeline</span>
                      </div>
                      <div className="text-white font-medium text-xs">
                        {activeTab.timeline}
                      </div>
                    </div>

                    {/* Decision Maker Card */}
                    <div className="rounded-xl bg-[#171a23] border border-white/5 p-3 text-[11px]">
                      <div className="flex items-center gap-1.5 text-slate-400 mb-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-lime-400"></span>
                        <span>Decision Maker</span>
                      </div>
                      <div className="text-white font-medium text-xs">
                        {activeTab.decisionMaker}
                      </div>
                    </div>

                    {/* Teams Card */}
                    <div className="rounded-xl bg-[#171a23] border border-white/5 p-3 text-[11px]">
                      <div className="flex items-center gap-1.5 text-slate-400 mb-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-purple-400"></span>
                        <span>Teams</span>
                      </div>
                      <div className="text-white font-medium text-xs">
                        {activeTab.teams}
                      </div>
                    </div>

                    {/* Status Indicators List */}
                    <div className="space-y-2 pt-2 border-t border-white/5 text-[11px]">
                      
                      {/* Buying Intent */}
                      <div className="flex items-center justify-between">
                        <span className="text-slate-400">Buying Intent</span>
                        <span
                          className={`px-2 py-0.5 rounded text-[10px] font-semibold border ${
                            activeTab.intent === 'High'
                              ? 'bg-emerald-500/15 text-emerald-400 border-emerald-500/30'
                              : activeTab.intent === 'Medium'
                              ? 'bg-amber-500/15 text-amber-300 border-amber-500/30'
                              : 'bg-slate-500/15 text-slate-300 border-slate-500/30'
                          }`}
                        >
                          {activeTab.intent}
                        </span>
                      </div>

                      {/* Engagement */}
                      <div className="flex items-center justify-between">
                        <span className="text-slate-400">Engagement</span>
                        <span className="px-2 py-0.5 rounded text-[10px] font-semibold bg-emerald-500/15 text-emerald-400 border border-emerald-500/30">
                          {activeTab.engagement}
                        </span>
                      </div>

                      {/* Sentiment */}
                      <div className="flex items-center justify-between">
                        <span className="text-slate-400">Sentiment</span>
                        <span className="px-2 py-0.5 rounded text-[10px] font-semibold bg-neutral-800 text-neutral-300 border border-neutral-700">
                          {activeTab.sentiment}
                        </span>
                      </div>

                    </div>

                  </div>

                </div>

              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
