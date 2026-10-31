import React from 'react';
import { AlertTriangle, RefreshCw, Home } from 'lucide-react';

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error("ErrorBoundary caught an error:", error, errorInfo);
  }

  handleReload = () => {
    window.location.reload();
  };

  handleReset = () => {
    this.setState({ hasError: false, error: null });
    if (this.props.onReset) {
      this.props.onReset();
    }
  };

  returnHome = () => {
    this.setState({ hasError: false, error: null });
    window.location.href = window.location.pathname;
  };

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-[300px] p-6 sm:p-10 rounded-3xl bg-slate-900/90 border border-red-500/40 text-center flex flex-col items-center justify-center space-y-4 my-8 shadow-2xl">
          <div className="w-14 h-14 rounded-2xl bg-red-500/20 text-red-400 border border-red-500/30 flex items-center justify-center">
            <AlertTriangle className="w-8 h-8" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-white">Đã xảy ra lỗi khi hiển thị module</h3>
            <p className="text-xs sm:text-sm text-slate-400 mt-1 max-w-md">
              Hệ thống đã tự động ghi nhận lỗi và bảo vệ ứng dụng không bị trắng màn hình.
            </p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <button
              onClick={this.handleReset}
              className="px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs sm:text-sm transition-all shadow-md active:scale-95 flex items-center gap-2"
            >
              <RefreshCw className="w-4 h-4" />
              <span>Thử lại module này</span>
            </button>
            <button
              onClick={this.returnHome}
              className="px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 font-bold text-xs sm:text-sm transition-all border border-slate-700 flex items-center gap-2"
            >
              <Home className="w-4 h-4" />
              <span>Về trang chủ</span>
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
