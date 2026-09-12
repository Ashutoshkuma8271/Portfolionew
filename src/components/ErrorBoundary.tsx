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
    console.warn('ErrorBoundary caught:', error, errorInfo);
  }

  private handleReset = () => {
    this.setState({ hasError: false, error: null });
  };

  public render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-[#0d0c0b] text-[#e5e2e3] flex items-center justify-center p-6 text-center">
          <div className="max-w-md p-8 bg-[#161412] border border-[#d4af37]/50 rounded-2xl space-y-4 shadow-2xl">
            <span className="font-['Cinzel'] text-[24px] text-[#f2ca50] block">
              Zeenat Kureshi &mdash; Executive Folio
            </span>
            <p className="text-[13.5px] text-[#c8beaa] font-['Montserrat'] font-light">
              Session state refreshed. Click below to continue browsing.
            </p>
            <div className="flex items-center justify-center gap-3 pt-2">
              <button
                onClick={this.handleReset}
                className="px-6 py-2.5 bg-gradient-to-r from-[#d4af37] via-[#f2ca50] to-[#e6bc48] text-[#1a1402] font-['Montserrat'] font-bold text-[10.5px] uppercase tracking-widest rounded-lg cursor-pointer hover:brightness-110 transition-all shadow-md"
              >
                Restore Session
              </button>
              <button
                onClick={() => window.location.reload()}
                className="px-6 py-2.5 bg-[#0e0d0b] border border-[#382f1e] text-[#c8beaa] hover:text-[#f2ca50] font-['Montserrat'] font-bold text-[10.5px] uppercase tracking-widest rounded-lg cursor-pointer transition-colors"
              >
                Full Reload
              </button>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
