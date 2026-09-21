#!/bin/bash
# ==============================================================================
# IELTS Writing Band 8 Master - Launcher Otomatis macOS
# ==============================================================================

DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" >/dev/null 2>&1 && pwd )"
cd "$DIR"

echo "========================================================"
echo "  IELTS Writing Band 8 Master (GameWriting)"
echo "  Memulai Server Pembelajaran Lokal..."
echo "========================================================"

# Menghentikan server lama jika ada
lsof -ti:5173 | xargs kill -9 2>/dev/null || true

# Buka peramban secara otomatis
(sleep 1 && open "http://localhost:5173") &

# Jalankan server web lokal stabil
if [ -d "dist" ]; then
    echo "Menjalankan aplikasi dari dist (produksi)..."
    python3 -m http.server 5173 --bind 0.0.0.0 --directory dist
else
    echo "Menjalankan dengan Vite dev..."
    npm run dev -- --host 0.0.0.0 --port 5173
fi
