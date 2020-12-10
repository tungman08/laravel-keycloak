export default {
  name: 'HomeComponent',
  data() {
    return {
      logo: '',
      hello: '',
    };
  },
  mounted() {
    this.toBase64Png('/images/vue_logo.svg').then((base64) => this.logo = base64);
    this.hello = 'Hello Vue.js!!';
  },
  methods: {
    toBase64Png(src) {
      return new Promise((resolve) => {
        const width = 400;
        const height = 400;
        const format = 'image/png';

        const canvas = document.createElement('canvas');
        const context = canvas.getContext('2d');
        context.canvas.width = width;
        context.canvas.height = height;

        const image = new Image();
        image.src = src;
        image.onload = () => {
          context.clearRect(0, 0, width, width);
          context.drawImage(image, 0, 0, width, width);
          const pngData = context.canvas.toDataURL(format);
          resolve(pngData);
        };
      });
    }
  }
};
