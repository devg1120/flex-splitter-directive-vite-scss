
import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    lib: {
      // 複数のエントリーポイントのディクショナリや配列にもできます
      entry: resolve(__dirname, 'src/index.ts'), // エントリポイント
      name: 'SampleLib', // グローバル変数として公開するライブラリの変数名
      fileName: 'sample-lib', // 生成するファイルのファイル名を指定します。
      formats: ['es', 'umd'], // 生成するモジュール形式を配列で指定します。デフォルトで['es', 'umd'] なのでこの場合はなくても大丈夫です。

    }

    }
  }
)
