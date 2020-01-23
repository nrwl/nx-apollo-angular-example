module.exports = {
  name: 'feature-sets',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/feature-sets',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
