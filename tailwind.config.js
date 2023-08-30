/** @type {import('tailwindcss').Config} */
// ElementPlus色彩的文檔 引入
const palettes = {
  base: ['primary', 'success', 'warning', 'danger', 'error', 'info'],
  hasLight9: ['primary'],
  hasLight2: ['success', 'warning', 'danger', 'error', 'info'], // danger === error
}

const hasLight9 = function(group) {
  const colors = {}
  group.forEach(name => {
    colors[`el-${name}-light`] = {}
    for (let index = 9; index > 0; index--) {
      colors[`el-${name}-light`][index * 100] = `var(--el-color-${name}-light-${index})`
    }
  })
  return colors
}

const hasLight2 = function(group) {
  const colors = {}
  group.forEach(name => {
    colors[`el-${name}-light`] = `var(--el-color-${name}-light)`
    colors[`el-${name}-lighter`] = `var(--el-color-${name}-lighter)`
  })
  return colors
}

const baseColor = function(group) {
  const colors = {}
  group.forEach(name => {
    colors[`el-${name}`] = `var(--el-color-${name})`
  })
  return colors
}

const getColors = function(palettes) {
  const colors = {}
  for (const key in palettes) {
    const group = palettes[key]
    if (key === 'base') {
      Object.assign(colors, baseColor(group))
    } else if (key === 'hasLight9') {
      Object.assign(colors, hasLight9(group))
    } else if (key === 'hasLight2') {
      Object.assign(colors, hasLight2(group))
    }
  }
  // console.log(colors);
  return colors
}
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: getColors(palettes),
      fontFamily: {
        google: ['Roboto'],
      },
    },
  },
  plugins: [
    function({ addBase }) {
      addBase({
        '.el-button': {
          'background-color': 'var(--el-button-bg-color,var(--el-color-white))', // 解決 tailwindCSS element-plus el-button衝突
        },
      })
    },
  ],
}

