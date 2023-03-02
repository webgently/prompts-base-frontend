function range(start, end, increment = 1) {
    const count = Math.floor((end - start + increment) / increment)
    return Array(count)
        .fill(0)
        .map((_, idx) => start + idx * increment)
}

const minFontSize = 5
const maxFontSize = 80

const minFontWeight = 100
const maxFontWeight = 1000

const minSpacingPixel = 0
const maxSpacingPixel = 800
const spacingPixelIncrement = 5

const vhs = [
    '10vh',
    '20vh',
    '30vh',
    '40vh',
    '50vh',
    '60vh',
    '70vh',
    '80vh',
    '90vh',
    '100vh',
]

const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        screens: {
            '3xs': '320px',
            '2xs': '375px',
            xs: '475px',
            ...defaultTheme.screens,
        },
        // Extend default configurations
        extend: {
            colors: {
                red: '#F3848A',
                yellow: '#FAE620',
                green: '#4CDE55',
                blue: '#0B88D9',
                black: '#000000',
                'dark-blue': '#222236',
                white: '#FFFFFF',
                'dark-gray': '#1F1F1F',
            },
            container: {
                center: true,
            },
        },
        // Override default configurations
        fontWeight: {
            ...range(minFontWeight, maxFontWeight).reduce(
                (merged, f) => ({ ...merged, [f]: `${f}px` }),
                {}
            ),
        },
        fontSize: {
            ...range(minFontSize, maxFontSize).reduce(
                (merged, f) => ({ ...merged, [f]: `${f}px` }),
                {}
            ),
        },
        spacing: {
            ...range(
                minSpacingPixel,
                maxSpacingPixel,
                spacingPixelIncrement
            ).reduce((merged, f) => ({ ...merged, [f]: `${f}px` }), {}),
        },
        maxWidth: {
            ...range(
                minSpacingPixel,
                maxSpacingPixel,
                spacingPixelIncrement
            ).reduce((merged, f) => ({ ...merged, [f]: `${f}px` }), {}),
        },
        minWidth: {
            ...range(
                minSpacingPixel,
                maxSpacingPixel,
                spacingPixelIncrement
            ).reduce((merged, f) => ({ ...merged, [f]: `${f}px` }), {}),
        },
        maxHeight: {
            ...range(
                minSpacingPixel,
                maxSpacingPixel,
                spacingPixelIncrement
            ).reduce((merged, f) => ({ ...merged, [f]: `${f}px` }), {}),
            ...vhs.reduce((merged, vh) => ({ ...merged, [vh]: vh }), {}),
        },
        minHeight: {
            ...range(
                minSpacingPixel,
                maxSpacingPixel,
                spacingPixelIncrement
            ).reduce((merged, f) => ({ ...merged, [f]: `${f}px` }), {}),
            ...vhs.reduce((merged, vh) => ({ ...merged, [vh]: vh }), {}),
        },
    },
    plugins: [],
}
