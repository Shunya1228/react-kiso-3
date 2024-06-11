import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import viteCompression from 'vite-plugin-compression';
import compression from 'compression';

export default defineConfig({
  plugins: [
    react(),
    viteCompression({
      verbose: true,           // 圧縮プロセスの詳細をログに出力
      disable: false,          // 無効化する場合は true に設定
      deleteOriginFile: false, // 圧縮後に元のファイルを削除するかどうか
      threshold: 10240,        // 圧縮するファイルの最小サイズ（バイト）
      algorithm: 'gzip',       // 圧縮アルゴリズム（gzip、brotliCompress、deflate、deflateRaw など）
      ext: '.gz',              // 生成される圧縮ファイルの拡張子
    })
  ],
  server: {
    middlewareMode: false, // ミドルウェアモードを無効にする
    port: 5173, // ポート番号を指定
    setup: (server) => {
      server.middlewares.use(compression());
    }
  }
});
