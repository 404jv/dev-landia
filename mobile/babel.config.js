module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      'react-native-reanimated/plugin',
      "tailwindcss-react-native/babel",
      ['module:react-native-dotenv', {
        'moduleName': '@env',
        'path': '.env',
        'blacklist': null,
        'whitelist': null,
        'safe': false,
        'allowUndefined': true
      }]
    ]
  };
};
