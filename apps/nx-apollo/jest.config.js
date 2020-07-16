module.exports = {
  name: 'nx-apollo',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/nx-apollo',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js'
  ]
};
