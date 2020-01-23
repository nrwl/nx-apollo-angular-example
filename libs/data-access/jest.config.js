module.exports = {
  name: 'data-access',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/data-access',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
