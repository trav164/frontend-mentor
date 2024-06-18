import type { Config } from "tailwindcss";

export default {
    content: ["./src/**/*.{html,js,svelte,ts}"],

    theme: {
        extend: {
            fontFamily: {
                'geist': ['geist', 'sans-serif']
            }
        }
    },

    plugins: []
} as Config;