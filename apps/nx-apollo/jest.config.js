module.exports = {
  name: 'nx-apollo',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/nx-apollo',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
