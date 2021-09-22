import Vue from 'vue';
import Vuetify from 'vuetify';
import colors from 'vuetify/lib/util/colors';

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        themes: {
          light: {
            primary: colors.amber.darken1,
            secondary: colors.grey.darken4,
            accent: colors.purple.lighten4,
            error: colors.deepOrange.lighten3,
            warning: colors.amber.lighten3,
            info: colors.cyan.lighten4,
            success: colors.lightGreen.lighten3,
          }
        }
      },
      icons: {
        iconfont: 'mdi',
      }
});
