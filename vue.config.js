module.exports = {
    configureWebpack: {
      resolve: {
        alias: {
          'api':'@/api',
          'assets': '@/assets',
          'base': '@/base',
          'components': '@/components',
          'views': '@/views',
        }
      }
    }
  }
  