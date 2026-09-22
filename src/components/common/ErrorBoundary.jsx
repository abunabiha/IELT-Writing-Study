import React from 'react';

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null, errorInfo: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('ErrorBoundary caught an unhandled error:', error, errorInfo);
    this.setState({ errorInfo });
  }

  handleResetAndReload = () => {
    try {
      localStorage.removeItem('ielts_active_tab');
      localStorage.removeItem('ielts_game_drills');
    } catch (e) {}
    window.location.reload();
  };

  handleHardReset = () => {
    if (window.confirm('Apakah Anda yakin ingin mereset cache lokal dan memuat ulang aplikasi?')) {
      try {
        localStorage.clear();
      } catch (e) {}
      window.location.reload();
    }
  };

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-slate-950 text-slate-100 flex items-center justify-center p-6 font-sans">
          <div className="max-w-lg w-full bg-slate-900 border border-rose-500/40 rounded-3xl p-6 sm:p-8 shadow-2xl space-y-6 text-center">
            <div className="w-16 h-16 rounded-2xl bg-rose-500/20 text-rose-400 flex items-center justify-center mx-auto text-3xl">
              ⚠️
            </div>

            <div className="space-y-2">
              <h2 className="text-xl font-bold text-white">Terjadi Kendala Memuat Tampilan</h2>
              <p className="text-xs text-slate-400 leading-relaxed">
                Aplikasi mendeteksi anomali pada state browser atau cache modul. Jangan khawatir, progres Anda aman.
              </p>
            </div>

            {this.state.error && (
              <div className="p-3.5 rounded-2xl bg-slate-950 border border-slate-800 text-left overflow-x-auto text-[11px] font-mono text-rose-300">
                {this.state.error.toString()}
              </div>
            )}

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
              <button
                onClick={this.handleResetAndReload}
                className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs shadow-lg transition"
              >
                Muat Ulang Aplikasi
              </button>
              <button
                onClick={this.handleHardReset}
                className="w-full sm:w-auto px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 font-semibold text-xs border border-slate-700 transition"
              >
                Bersihkan Cache & Reset
              </button>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
