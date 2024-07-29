import DefaultTheme from 'vitepress/theme';

export default {
  ...DefaultTheme,
  async enhanceApp() {
    if (!import.meta.env.SSR) {
      const { loadOml2d } = await import('oh-my-live2d');
      loadOml2d({
        models: [
          {
            "path": "https://model.oml2d.com/Pio/model.json",
            "scale": 0.4,
            "position": [0, 50],
            "stageStyle": {
            "height": 300
            },
          },
          {
            "path": "https://model.oml2d.com/chino/model.json",
            "scale": 0.2,
            "position": [0, 50],
          }
        ]
      });
    }
  }
};
