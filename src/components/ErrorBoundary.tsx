import React, { Component, ErrorInfo, ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
    error: null,
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.warn('ErrorBoundary caught an error:', error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-[#131314] text-[#e5e2e3] flex items-center justify-center p-6 text-center">
          <div className="max-w-md p-8 bg-[#1c1b1c] border border-[#d4af37]/40 rounded-2xl space-y-4 shadow-2xl">
            <span className="font-['Cinzel'] text-[24px] text-[#f2ca50] block">
              Zeenat Kureshi — Folio
            </span>
            <p className="text-[14px] text-[#c8beaa]">
              A temporary display refresh is required.
            </p>
            <button
              onClick={() => window.location.reload()}
              className="px-6 py-2.5 bg-[#f2ca50] text-[#1a1402] font-bold text-[11px] uppercase tracking-widest rounded-lg cursor-pointer hover:bg-[#ffe088] transition-colors"
            >
              Refresh Application
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
