// src/styles/common.js
// Modern Apple-style refresh
// Names unchanged — only styles updated

// ─── Layout ───────────────────────────────────────────
export const pageBackground = "bg-[#fbfbfd] min-h-screen";
export const pageWrapper = "max-w-6xl mx-auto px-6 md:px-10 py-20";
export const section = "mb-20";

// ─── Cards ────────────────────────────────────────────
export const cardClass =
  "bg-white border border-[#e8e8ed] rounded-[28px] p-8 hover:scale-[1.02] hover:border-[#d2d2d7] transition-all duration-300 cursor-pointer";

// ─── Typography ───────────────────────────────────────
export const pageTitleClass =
  "text-5xl md:text-6xl font-semibold text-[#1d1d1f] tracking-[-0.04em] leading-none mb-3";

export const headingClass =
  "text-3xl font-semibold text-[#1d1d1f] tracking-tight";

export const subHeadingClass =
  "text-xl font-medium text-[#1d1d1f]";

export const bodyText =
  "text-[#6e6e73] text-[15px] leading-8";

export const mutedText =
  "text-sm text-[#86868b]";

export const linkClass =
  "text-[#0066cc] hover:text-[#0077ed] transition-all duration-200";

// ─── Buttons ──────────────────────────────────────────
export const primaryBtn =
  "bg-[#0071e3] text-white font-medium px-6 py-3 rounded-full hover:scale-105 hover:bg-[#0062cc] transition-all duration-300 cursor-pointer text-sm";

export const secondaryBtn =
  "border border-[#d2d2d7] bg-white text-[#1d1d1f] font-medium px-6 py-3 rounded-full hover:bg-[#f5f5f7] transition-all duration-300 cursor-pointer text-sm";

export const ghostBtn =
  "text-[#0071e3] hover:text-[#0055b3] font-medium transition-all cursor-pointer text-sm";

// ─── Forms ────────────────────────────────────────────
export const formCard =
  "bg-white border border-[#e8e8ed] rounded-[30px] p-10 max-w-4xl mx-auto";

export const formTitle =
  "text-3xl font-semibold text-[#1d1d1f] text-center mb-8";

export const labelClass =
  "text-xs font-medium text-[#6e6e73] mb-2 block";

export const inputClass =
  "w-full bg-[#fbfbfd] border border-[#d2d2d7] rounded-2xl px-5 py-3 text-[#1d1d1f] placeholder:text-[#a1a1a6] focus:outline-none focus:ring-4 focus:ring-[#0071e3]/10 focus:border-[#0071e3] transition-all";

export const formGroup = "mb-5";

export const submitBtn =
  "w-full bg-[#0071e3] text-white font-medium py-3 rounded-full hover:bg-[#0062cc] hover:scale-[1.01] transition-all mt-4";

// ─── Navbar ───────────────────────────────────────────
export const navbarClass =
  "bg-white/80 backdrop-blur-2xl border-b border-[#e8e8ed] sticky top-0 z-50 h-[64px] px-8";

export const navContainerClass =
  "max-w-6xl mx-auto flex items-center justify-between h-full";

export const navBrandClass =
  "text-lg font-semibold text-[#1d1d1f]";

export const navLinksClass =
  "flex items-center gap-8";

export const navLinkClass =
  "text-sm text-[#6e6e73] hover:text-[#1d1d1f] transition-colors";

export const navLinkActiveClass =
  "text-sm text-[#0071e3] font-medium";

// ─── Article / Blog ───────────────────────────────────
export const articleGrid =
  "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8";

export const articleCardClass =
  "bg-white border border-[#e8e8ed] rounded-[28px] p-8 hover:scale-[1.02] hover:border-[#d2d2d7] transition-all duration-300 flex flex-col gap-4 cursor-pointer";

export const articleTitle =
  "text-lg font-semibold text-[#1d1d1f] leading-snug";

export const articleExcerpt =
  "text-sm text-[#6e6e73] leading-7";

export const articleMeta =
  "text-xs text-[#86868b]";

export const articleBody =
  "text-[#515154] leading-[2] text-[1rem] max-w-2xl";

export const timestampClass =
  "text-xs text-[#86868b] flex items-center gap-2";

export const tagClass =
  "text-[10px] font-semibold text-[#0071e3] uppercase tracking-[0.2em]";

// ─── Article Page ─────────────────────────────────────
export const articlePageWrapper =
  "max-w-4xl mx-auto px-6 py-16";

export const articleHeader =
  "mb-14 flex flex-col gap-5";

export const articleCategory =
  "text-xs font-semibold uppercase tracking-[0.2em] text-[#0071e3]";

export const articleMainTitle =
  "text-5xl font-semibold text-[#1d1d1f] leading-tight";

export const articleAuthorRow =
  "flex items-center justify-between border-y border-[#e8e8ed] py-5 text-sm text-[#6e6e73]";

export const authorInfo =
  "flex items-center gap-3 font-medium text-[#1d1d1f]";

export const articleContent =
  "text-[#1d1d1f] leading-[2.1] text-[1.05rem] whitespace-pre-line mt-8";

export const articleFooter =
  "border-t border-[#e8e8ed] mt-14 pt-7 text-sm text-[#86868b]";

// ─── Article Actions ─────────────────────────────
export const articleActions =
  "flex gap-4 mt-8";

export const editBtn =
  "bg-[#0071e3] text-white px-5 py-2 rounded-full hover:bg-[#0062cc] transition-all";

export const deleteBtn =
  "bg-[#ff453a] text-white px-5 py-2 rounded-full hover:opacity-90 transition-all";

// ─── Article Status Badge ─────────────────────────
export const articleStatusActive =
  "absolute top-4 right-4 text-[10px] px-3 py-1 rounded-full bg-[#34c759]/15 text-[#28a745]";

export const articleStatusDeleted =
  "absolute top-4 right-4 text-[10px] px-3 py-1 rounded-full bg-[#ff3b30]/15 text-[#d93025]";

// ─── Feedback ─────────────────────────────────────────
export const errorClass =
  "bg-[#ff3b30]/10 text-[#d93025] border border-[#ff3b30]/20 rounded-2xl px-5 py-4 text-sm";

export const successClass =
  "bg-[#34c759]/10 text-[#28a745] border border-[#34c759]/20 rounded-2xl px-5 py-4 text-sm";

export const loadingClass =
  "text-[#0071e3] text-sm animate-pulse text-center py-12";

export const emptyStateClass =
  "text-center text-[#86868b] py-20 text-sm";

// ─── Divider ──────────────────────────────────────────
export const divider =
  "border-t border-[#e8e8ed] my-14";
